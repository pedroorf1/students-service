import { login, validate } from "@src/ports/auth";
import { atuthenticate, validation } from "../../controllers/authController";

jest.mock("../../ports/auth");
describe("AuthController validation", () => {
  let req: any, res: any;
  beforeEach(() => {
    req = {
      query: {
        email: "test@example.com",
        password: "password",
      },
    };
    res = {
      send: jest.fn(),
    };
  });

  it("should return is not valid data", async () => {
    req.query = null;
    const authData = { error: "Dados invalidos!" };
    require("../../ports/auth").validate.mockResolvedValue(authData);
    await validation(req, res);
    expect(res.send).toHaveBeenCalledWith({ error: "Dados invalidos!" });
  });

  it("should return is valid data", async () => {
    req.query = null;
    const authData = { result: { email: "test@example.com", id: "1234" } };
    require("../../ports/auth").validate.mockResolvedValue(authData);
    await validation(req, res);
    expect(res.send).toHaveBeenCalledWith({
      result: { email: "test@example.com", id: "1234" },
    });
  });
});

describe("AuthController atuthenticate", () => {
  let req: any, res: any;
  beforeEach(() => {
    req = {
      query: {
        email: "test@example.com",
        password: "password",
      },
    };
    res = {
      send: jest.fn(),
    };
  });

  it("should return is not valid data", async () => {
    req.query = null;
    const authData = { error: "Dados invalidos!" };
    require("../../ports/auth").login.mockResolvedValue(authData);
    await atuthenticate(req, res);
    expect(res.send).toHaveBeenCalledWith({ error: "Dados invalidos!" });
  });

  it("should return is valid data", async () => {
    req.query = null;
    const authData = { result: { email: "test@example.com", id: "1234" } };
    require("../../ports/auth").login.mockResolvedValue(authData);
    await atuthenticate(req, res);
    expect(res.send).toHaveBeenCalledWith({
      result: { email: "test@example.com", id: "1234" },
    });
  });
});
