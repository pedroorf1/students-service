import { login, validate } from "../ports/auth";
import { ILogin } from "../adapters/auth";
import { TControllers } from "../types/controllersTypes";

export const atuthenticate: TControllers = async (req, res) => {
  const data: ILogin = {
    email: String(req?.body?.email),
    password: String(req?.body?.password),
  };

  login(data).then(result => {
    return res.send(result);
  });
};

export const validation: TControllers = async (req, res) => {
  const token = String(req?.body?.token);

  if (!token) {
    return res.send({ error: "Dados invalidos!" });
  }
  const result = await validate({ token });
  return res.send(result);
};
