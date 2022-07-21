export class CreateClientDto {
  name: string;
  clientTypeId: string;
  createBy: string;
  updatedBy: string;
  people: number[];
  locals: number[];
}
