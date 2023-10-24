import { describe, expect, test } from "@jest/globals";
import { Request, Response } from "express";
import { mocked } from "jest-mock";
import { addOne, getOne } from "../../controllers/userController";
import * as userControl from "../../controllers/userController";
import EStatusReturn from "../../types/statusReturn";

jest.mock("../../ports/user", () => ({
  add: jest.fn(),
}));
jest.mock("../../ports/user", () => ({
  get: jest.fn(),
}));

const mockeUserController = {
  addOne: mocked(addOne),
  getOne: mocked(getOne),
} as unknown as typeof userControl;

describe("userController", () => {
  console.clear();
  test("showld return an error message if invalid data is provided", async () => {
    const req = {
      query: null,
    } as Request;
    const res = {
      send: jest.fn(),
    } as unknown as Response;
    await mockeUserController.addOne(req, res);
    expect(res.send).toHaveBeenCalledWith({
      data: [],
      message: "Dados inválidos!",
      status: EStatusReturn.Error,
    });
  });
});
