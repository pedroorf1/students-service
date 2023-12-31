import { Request, Response } from "express";

import EStatusReturn from "../types/statusReturn";
import { add, get, update } from "../ports/user";
import { TUserRegister } from "../adapters/user";
import { TControllers } from "../types/controllersTypes";

export const addOne: TControllers = async (req, res) => {
  if (!req?.query) {
    res.send({
      data: [],
      message: "Dados inválidos!",
      status: EStatusReturn.Error,
    });
    return;
  }

  const data: TUserRegister = {
    email: String(req?.query.email),
    password: String(req?.query.password),
    confirmepassword: String(req?.query.confirmepassword),
  };

  const result = await add(data);
  if (result.status == false) {
    res.send({
      data: [],
      message: result.message,
      status: EStatusReturn.Error,
    });
    return;
  }

  res.send({
    data: JSON.stringify(result.data),
    message: "Usuário adicionado!",
    status: EStatusReturn.Success,
  });
  return;
};

export const getOne: TControllers = async (req, res) => {
  const _id = String(req?.query._id);

  if (!_id) {
    res.send({
      data: [],
      message: "Parâmetro inválido!",
      status: EStatusReturn.Error,
    });
  }

  const result = await get(_id);
  res.send({
    data: JSON.stringify(result),
    message: "Usuário encontrado!",
    status: EStatusReturn.Success,
  });
};

export const test = async (req: Request, res: Response): Promise<any> => {
  res.send({
    message: "Teste realizado com sucesso!",
    status: EStatusReturn.Success,
  });
};
