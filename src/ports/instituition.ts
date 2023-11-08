import { dbClient } from "../../prisma/client";
import {
  TAddInstituition,
  IInstituitionPayload,
} from "../adapters/instituition";

import tools from "../helpers/tools";

export const add: TAddInstituition = async ({
  name,
  inep,
  cnpj,
  address,
  complement,
  state,
  country,
  phone,
  email,
  site,
  facebook,
  instagram,
  twitter,
  linkedin,
  youtube,
  tiktok,
  whatsapp,
  telegram,
  manager,
}) => {
  const dataInstituition = {
    name,
    inep,
    cnpj,
    address,
    complement,
    state,
    country,
    phone,
    email,
    site,
    facebook,
    instagram,
    twitter,
    linkedin,
    youtube,
    tiktok,
    whatsapp,
    telegram,
    manager: BigInt(manager),
  };

  return await dbClient.institutions
    .create({ data: dataInstituition })
    .then(async (value: any) => {
      const nvalue = await tools.customJson(value);
      return JSON.stringify(nvalue);
    })
    .catch((err: any) => {
      return {
        status: false,
        error: err,
        message: "Houve erro ao cadastrar a instituição",
      };
    });
};
