import { add } from "../ports/instituition";
import EStatusReturn from "../types/statusReturn";

import { TControllers } from "../types/controllersTypes";

//CREATE
export const addOne: TControllers = async (req, res) => {
  const data = {
    userId: String(req?.query.userid || null).trim(),
    name: String(req?.query.name || null).trim(),
    inep: String(req?.query.inep || null).trim(),
    cnpj: String(req?.query.cnpj || null).trim(),
    address: String(req?.query.address || null).trim(),
    complement: String(req?.query.complement || null).trim(),
    state: String(req?.query.state || null).trim(),
    country: String(req?.query.country || null).trim(),
    phone: String(req?.query.phone || null).trim(),
    email: String(req?.query.email || null).trim(),
    site: String(req?.query.site || null).trim(),
    facebook: String(req?.query.facebook || null).trim(),
    instagram: String(req?.query.instagram || null).trim(),
    twitter: String(req?.query.twitter || null).trim(),
    linkedin: String(req?.query.linkedin || null).trim(),
    youtube: String(req?.query.youtube || null).trim(),
    tiktok: String(req?.query.toktok || null).trim(),
    whatsapp: String(req?.query.whatsapp || null).trim(),
    telegram: String(req?.query.telegram || null).trim(),
    manager: String(req?.query.manager || null).trim(),
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
