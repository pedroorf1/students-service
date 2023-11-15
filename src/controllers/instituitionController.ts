import { add } from "../ports/instituition";
import EStatusReturn from "../types/statusReturn";

import { TControllers } from "../types/controllersTypes";

//CREATE
export const addOne: TControllers = async (req, res) => {
  console.log("req: ", req.body);
  const data = {
    name: String(req?.body.name || null).trim(),
    inep: String(req?.body.inep || null).trim(),
    cnpj: String(req?.body.cnpj || null).trim(),
    address: String(req?.body.address || null).trim(),
    complement: String(req?.body.complement || null).trim(),
    state: String(req?.body.state || null).trim(),
    country: String(req?.body.country || null).trim(),
    phone: String(req?.body.phone || null).trim(),
    email: String(req?.body.email || null).trim(),
    site: String(req?.body.site || null).trim(),
    facebook: String(req?.body.facebook || null).trim(),
    instagram: String(req?.body.instagram || null).trim(),
    twitter: String(req?.body.twitter || null).trim(),
    linkedin: String(req?.body.linkedin || null).trim(),
    youtube: String(req?.body.youtube || null).trim(),
    tiktok: String(req?.body.tiktok || null).trim(),
    whatsapp: String(req?.body.whatsapp || null).trim(),
    telegram: String(req?.body.telegram || null).trim(),
    manager: req?.body.manager ? BigInt(req?.body.manager) : null,
  };

  try {
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
      message: "Instituicao cadastrada!",
      status: EStatusReturn.Success,
    });
  } catch (Error) {
    res.send({
      data: [],
      message: (Error.message = "Existem dados obrigatorios não preenchidos!"),
      status: EStatusReturn.Error,
    });
    return;
  }
};
