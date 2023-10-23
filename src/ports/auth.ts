import { dbClient } from "../../prisma/client";
import { TLogin, TValidate, TLogout } from "../adapters/auth";
import tools from "../helpers/tools";
export const login: TLogin = async ({ email, password }) => {
  return dbClient.user
    .findUnique({
      where: {
        email,
      },
    })
    .then(async (value: any) => {
      return await tools
        .verifyPassword(password, value.password)
        .then(async (res: any) => {
          if (!res) {
            return {
              status: false,
              message: "Credenciais inválidas!",
            };
          }
          return await tools.generateToken(value._id, value.email);
        });
    })
    .then((value: any) => {
      return {
        token: value,
        status: true,
        message: "Login efetuado com sucesso!",
      };
    });
};
export const validate: TValidate = async token => {
  //implementar
  return await tools.validadeToken(token);
};

export const logout: TLogout = async email => {
  //implementar
  return true;
};
