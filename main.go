package main

import (
	"github.com/gofiber/fiber/v2"
)

func helloworld(c *fiber.Ctx) error {
	return c.SendString("Hello Dunia")
}

func main() {
	app := fiber.New()

	app.Get("/", helloworld)

	app.Listen(":8000")
}
