import { dbClient } from "../../prisma/client";
import {
  TAddInstituition,
  IInstituitionPayload,
} from "../adapters/instituition";

import tools from "../helpers/tools";

export const add: TAddInstituition = async ({ ...IInstituitionPayload }) => {
  const dataInstituition = { ...IInstituitionPayload };

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
