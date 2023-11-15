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
    site: site ? site : null,
    facebook: facebook ? facebook : null,
    instagram: instagram ? instagram : null,
    twitter: twitter ? twitter : null,
    linkedin: linkedin ? linkedin : null,
    youtube: youtube ? youtube : null,
    tiktok: tiktok ? tiktok : null,
    whatsapp: whatsapp ? whatsapp : null,
    telegram: telegram ? telegram : null,
    manager: manager ? manager : null,
  };
  try {
    return await dbClient.institutions
      .create({ data: dataInstituition })
      .then(async (value: any) => {
        const nvalue = await tools.customJson(value);
        return JSON.stringify(nvalue);
      });
  } catch (Error) {
    return {
      status: false,
      error: Error.message,
      message: "Houve erro ao cadastrar a instituição",
    };
  }
};
