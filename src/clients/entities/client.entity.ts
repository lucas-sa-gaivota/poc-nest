export class Client {
  private name: string;
  private clientTypeId: string;
  private createdAt: Date;
  private updatedAt: Date;
  private createBy: string;
  private updatedBy: string;
  private people: number[];
  private locals: number[];

  constructor(
    name: string,
    clientTypeId: string,
    createBy: string,
    updatedBy: string,
    people?: number[],
    locals?: number[],
  ) {
    this.name = name;
    this.clientTypeId = clientTypeId;
    this.createBy = createBy;
    this.updatedBy = updatedBy;
    this.people = people;
    this.locals = locals;
  }

  get() {
    return {
      name: this.name,
      clientTypeId: this.clientTypeId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      createBy: this.createBy,
      updatedBy: this.updatedBy,
    };
  }
}
