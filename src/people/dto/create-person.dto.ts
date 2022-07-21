export type CreatePersonDto = {
  name: string;
  documentNumber: string;
  createBy: string;
  updatedBy: string;
  clientId?: number;
};
