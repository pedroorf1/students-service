import { add, get, update } from "../ports/perfil";
import EStatusReturn from "../types/statusReturn";

import { IPerfilPayload, IPerfilPayloadUpdate } from "../adapters/perfil";
import { TControllers } from "../types/controllersTypes";

//CREATE
export const addOne: TControllers = async (req, res) => {
  const data: IPerfilPayload = {
    userId: String(req?.body.userid || null).trim(),
    name: String(req?.body.name || null).trim(),
    secondname: String(req?.body.secondname || null).trim(),
    socialname: String(req?.body.socialname || null).trim(),
    photo: String(req?.body.photo || null).trim() || null,
    birthday: req?.body.birthday
      ? new Date(String(req?.body.birthday).trim())
      : null,
  };

  for (const [key, value] of Object.entries(data)) {
    console.clear();
    if (value) {
      break;
    }
    res.send({
      data: [],
      message: "Dados inválidos!",
      status: EStatusReturn.Error,
    });
    return;
  }

  const result = await add(data);
  if (result?.status == false) {
    res.send({
      data: [],
      message: result.message,
      status: EStatusReturn.Error,
    });
    return;
  }

  res.send({
    data: result.data,
    message: "Perfil adicionado!",
    status: EStatusReturn.Success,
  });
  return;
};
//UPDATE
export const updateOne: TControllers = async (req, res) => {
  const userid = String(req?.body.userid || null).trim();
  const data: IPerfilPayloadUpdate = {
    name: String(req?.body.name || null).trim(),
    secondname: String(req?.body.secondname || null).trim(),
    socialname: String(req?.body.socialname || null).trim(),
    photo: String(req?.body.photo || null).trim() || null,
    birthday: req?.body.birthday
      ? new Date(String(req?.body.birthday).trim())
      : null,
  };

  for (const [key, value] of Object.entries(data)) {
    console.clear();
    if (value) {
      break;
    }
    res.send({
      data: [],
      message: "Dados inválidos!",
      status: EStatusReturn.Error,
    });
    return;
  }

  await update(userid, data)
    .then(result => {
      res.send({
        data: result,
        message: "Perfil atualizado!",
        status: EStatusReturn.Success,
      });
    })
    .catch(err => {
      res.send({
        err: err,
        message: err.message,
        status: EStatusReturn.Error,
      });
    });

  return;
};

//FINDONE
export const getOne: TControllers = async (req, res) => {
  const _id = String(req?.body.userid);

  if (!_id) {
    res.send({
      data: [],
      message: "Parâmetro inválido!",
      status: EStatusReturn.Error,
    });
  }

  await get(_id)
    .catch(Error => {
      res.send({
        data: [],
        message: (Error.message = "Dados não encontrados"),
        status: EStatusReturn.Error,
      });
      return;
    })
    .then(value => {
      res.send({
        data: value,
        message: "Perfil encontrado!",
        status: EStatusReturn.Success,
      });
    });
};
