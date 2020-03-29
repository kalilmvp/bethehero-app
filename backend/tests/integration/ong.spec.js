const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  it("should be able to create new ong", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "Ailsa Foundation",
        email: "kalilmvp@gmail.com",
        whatsapp: "+244934344630",
        city: "Brasília",
        uf: "DF"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });

  afterAll(async () => {
    await connection.destroy();
  });
});
