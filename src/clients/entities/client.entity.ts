export class Client {
  private name: string;
  private clientTypeId: string;
  private createdAt: Date;
  private updatedAt: Date;
  private createBy: string;
  private updatedBy: string;

  constructor(
    name: string,
    clientTypeId: string,
    createBy: string,
    updatedBy: string,
    createdAt?: Date,
  ) {
    this.name = name;
    this.clientTypeId = clientTypeId;
    this.createdAt = createdAt ? new Date(createdAt) : new Date();
    this.updatedAt = new Date();
    this.createBy = createBy;
    this.updatedBy = updatedBy;
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
