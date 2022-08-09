package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/mdestafadilah/aplikasitasking/database"
	"github.com/mdestafadilah/aplikasitasking/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func helloworld(c *fiber.Ctx) error {
	return c.SendString("APLIKASI BACKEND TASK SEDERHANA")
}

// Initialisasi Database
func initDatabase() {
	var err error
	dsn := "host=localhost user=postgres password=toor dbname=tasking port=5432 sslmode=disable TimeZone=Asia/Jakarta"
	database.DBConn, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Gagal Terkoneksi Ke Database!")
	}
	fmt.Println("Database Terkoneksi!")
	database.DBConn.AutoMigrate(&models.Task{})
	fmt.Println("Migrated DB")
}

// Route API Handler
func setupRoutes(app *fiber.App) {
	app.Get("/tasks", models.GetTask)
	app.Post("/tasks", models.CreateTask)
	app.Get("/tasks/:id", models.GetTaskById)
	app.Put("/tasks/:id", models.UpdateTask)
	app.Delete("/tasks/:id", models.DeleteTask)
}

func main() {
	app := fiber.New()
	app.Use(cors.New())
	initDatabase()
	app.Get("/", helloworld)
	setupRoutes(app)
	app.Listen(":8000")
}
