export type UpdatePersonDto = {
  id: number;
  name: string;
  documentNumber: string;
  updatedBy: string;
  clientId?: number;
};
