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
