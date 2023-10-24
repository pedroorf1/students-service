import { addOne, getOne, test } from "../../controllers/userController";
import EStatusReturn from "../../types/statusReturn";

jest.mock("../../ports/user");

describe("addOne Function", () => {
  let req: any, res: any;

  beforeEach(() => {
    req = {
      query: {
        email: "test@example.com",
        password: "password",
        confirmepassword: "password",
      },
    };
    res = {
      send: jest.fn(),
    };
  });

  it("should send an error response for invalid request data", async () => {
    req.query = null;

    await addOne(req, res);
    expect(res.send).toHaveBeenCalledWith({
      data: [],
      message: "Dados inválidos!",
      status: EStatusReturn.Error,
    });
  });

  it("should send an error response when 'add' function returns an error", async () => {
    const _error = { status: false, error: Error, message: "Error message" };
    await require("../../ports/user").add.mockResolvedValueOnce(_error);

    await addOne(req, res);
    expect(res.send).toHaveBeenCalledWith({
      data: [],
      message: _error.message,
      status: EStatusReturn.Error,
    });
  });

  it("should send a success response when 'add' function succeeds", async () => {
    const successData = { status: true, data: { userId: 123 } };
    require("../../ports/user").add.mockResolvedValue(successData);

    await addOne(req, res);
    expect(res.send).toHaveBeenCalledWith({
      data: JSON.stringify(successData.data),
      message: "Usuário adicionado!",
      status: EStatusReturn.Success,
    });
  });
});

describe("getOne Function", () => {
  let req: any, res: any;

  beforeEach(() => {
    req = { query: { _id: "12345" } };
    res = {
      send: jest.fn(),
    };
  });

  it("should send an error response for invalid '_id' parameter", async () => {
    req.query._id = "";

    await getOne(req, res);
    expect(res.send).toHaveBeenCalledWith({
      data: [],
      message: "Parâmetro inválido!",
      status: EStatusReturn.Error,
    });
  });

  it("should send a success response when 'get' function succeeds", async () => {
    const userData = { _id: "12345", name: "Test User" };
    require("../../ports/user").get.mockResolvedValue(userData);

    await getOne(req, res);
    expect(res.send).toHaveBeenCalledWith({
      data: JSON.stringify(userData),
      message: "Usuário encontrado!",
      status: EStatusReturn.Success,
    });
  });
});

describe("test Function", () => {
  let req: any, res: any;

  beforeEach(() => {
    req = {};
    res = {
      send: jest.fn(),
    };
  });

  it("should send a success response with a test message", async () => {
    await test(req, res);
    expect(res.send).toHaveBeenCalledWith({
      message: "Teste realizado com sucesso!",
      status: EStatusReturn.Success,
    });
  });
});
