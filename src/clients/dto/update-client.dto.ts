export type UpdateClientDto = {
  id: number;
  name: string;
  clientTypeId: string;
  updatedBy: string;
  people: number[];
  locals: number[];
};
