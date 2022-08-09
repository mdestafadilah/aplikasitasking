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
