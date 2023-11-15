export type IInstituitionPayload = {
  name: string;
  inep: string;
  cnpj: string;
  address: string;
  complement: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  site?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  telegram?: string;
  manager?: bigint;
};

export type IInstituitionPayloadUpdate = {
  phone?: string;
  email?: string;
  site?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  telegram?: string;
  manager?: bigint;
};

export type TAddInstituition = ({
  ...IInstituitionPayload
}: IInstituitionPayload) => Promise<any>;
export type TGetInstituition = (instituitionId: string) => Promise<any>;
export type TUpdateInstituition = (
  instituitionId: string,
  { ...IInstituitionPayloadUpdate }: IInstituitionPayloadUpdate
) => Promise<any>;
