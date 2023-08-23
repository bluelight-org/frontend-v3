import { ApiService } from "@/service/api/ApiService";

describe("Test Login", () => {
  test("Login works", async () => {
    const service = new ApiService();
    expect(await service.login("root", "Admin123")).toBeTruthy();
  });
  test("Login fails with wrong credentials", async () => {
    const service = new ApiService();
    expect(await service.login("root", "wrongPW")).toBeFalsy();
  });
});
