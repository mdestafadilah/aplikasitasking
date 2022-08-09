package models

import (
	"github.com/gofiber/fiber/v2"
	"github.com/mdestafadilah/aplikasitasking/database"
)

// Buat Field
type Task struct {
	ID          uint   `gorm:"primaryKey" json:"id"`
	NamaPegawai string `json:"namapegawai"`
	DeadLine    string `json:"deadline"`
	IsiTask     string `json:"isitask"`
	Completed   bool   `json:"completed"`
}

// Ambil Semua Task
func GetTask(c *fiber.Ctx) error {
	db := database.DBConn
	var tasks []Task
	db.Find(&tasks)
	return c.JSON(&tasks)
}

// Buat Task
func CreateTask(c *fiber.Ctx) error {
	db := database.DBConn
	task := new(Task)
	err := c.BodyParser(task)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Check Datamu", "data": err})
	}
	err = db.Create(&task).Error
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Gagal Insert Data", "data": err})
	}
	return c.JSON(&task)
}

// Detail Task
func GetTaskById(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DBConn
	var task Task
	err := db.Find(&task, id).Error
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "Data Tidak Ada!", "data": err})
	}

	return c.JSON(&task)
}

// Update Task
func UpdateTask(c *fiber.Ctx) error {
	type UpdatedTask struct {
		NamaPegawai string `json:"namapegawai"`
		DeadLine    string `json:"deadline"`
		IsiTask     string `json:"isitask"`
		Completed   bool   `json:"completed"`
	}

	id := c.Params("id")
	db := database.DBConn
	var task Task
	err := db.Find(&task, id).Error

	if err != nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "Data Tidak Ada!", "data": err})
	}

	var updatedTask UpdatedTask
	err = c.BodyParser(&updatedTask)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Cek Kembali Data Anda!", "data": err})
	}

	task.NamaPegawai = updatedTask.NamaPegawai
	task.DeadLine = updatedTask.DeadLine
	task.IsiTask = updatedTask.IsiTask
	task.Completed = updatedTask.Completed
	db.Save(&task)
	return c.JSON(&task)
}

// Hapus Task
func DeleteTask(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DBConn
	var task Task
	err := db.Find(&task, id).Error

	if err != nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "Data Tidak Ada!", "data": err})
	}

	db.Delete(&task)
	return c.SendStatus(200)
}
