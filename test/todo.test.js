const request = require("supertest");
const app = require("../index");

describe("Todo API", () => {
  test("should list all todos", async () => {
    const response = await request(app).get("/todos");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(4);
  });

  test("should get a specific todo", async () => {
    const response = await request(app).get("/todos/1");
    expect(response.status).toBe(200);
    expect(response.body.title).toBe("Mengerjakan tugas sekolah");
  });

  test("should create a new todo", async () => {
    const newTodo = { title: "Test Todo" };
    const response = await request(app).post("/todos").send(newTodo);
    expect(response.status).toBe(201);
    expect(response.body.title).toBe("Test Todo");
  });

  test("should delete a todo", async () => {
    const response = await request(app).delete("/todos/1");
    expect(response.status).toBe(200);
  });
});
