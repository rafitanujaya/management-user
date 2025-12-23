import request from "supertest";
import { database } from "../../src/database/database.js";
import { createApp } from "../../src/app.js";

describe("User API Integration Test", () => {
  let app;

  beforeEach(() => {
    database.length = 0;
    app = createApp();
  });

  describe("POST /api/users", () => {
    it("should create user successfully", async () => {
      const res = await request(app)
        .post("/api/users")
        .send({ name: "Rafi", age: 22 });

      expect(res.statusCode).toBe(201);
      expect(res.body.data).toHaveProperty("id");
      expect(res.body.data.name).toBe("Rafi");
    });

    it("should return 400 when payload invalid", async () => {
      const res = await request(app)
        .post("/api/users")
        .send({ name: "Rafi" });

      expect(res.statusCode).toBe(400);
      expect(res.body.errors).toBe("Name and age are required");
    });
  });

  describe("GET /api/users", () => {
    it("should return empty list initially", async () => {
      const res = await request(app).get("/api/users");

      expect(res.statusCode).toBe(200);
      expect(res.body.data).toEqual([]);
    });

    it("should return list of users", async () => {
      await request(app)
        .post("/api/users")
        .send({ name: "Rafi", age: 22 });

      const res = await request(app).get("/api/users");

      expect(res.statusCode).toBe(200);
      expect(res.body.data.length).toBe(1);
    });
  });

//   describe("DELETE /api/users/:userId", () => {
//     it("should delete user by id", async () => {
//       const createRes = await request(app)
//         .post("/api/users")
//         .send({ name: "Rafi", age: 22 });

//       const userId = createRes.body.data.id;

//       const deleteRes = await request(app)
//         .delete(`/api/users/${userId}`);

//       expect(deleteRes.statusCode).toBe(200);
//       expect(deleteRes.body.data.id).toBe(userId);
//     });

//     it("should return 404 when user not found", async () => {
//       const res = await request(app)
//         .delete("/api/users/invalid-id");

//       expect(res.statusCode).toBe(404);
//       expect(res.body.errors).toBe("User not found");
//     });
//   });
});

