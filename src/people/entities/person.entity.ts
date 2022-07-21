export class Person {
  private name: string;
  private documentNumber: string;
  private createdAt: Date;
  private updatedAt: Date;
  private createBy: string;
  private updatedBy: string;
  private clientId: number;

  constructor(
    name: string,
    documentNumber: string,
    createBy: string,
    updatedBy: string,
    clientId?: number,
  ) {
    this.name = name;
    this.documentNumber = documentNumber;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.createBy = createBy;
    this.updatedBy = updatedBy;
    this.clientId = clientId;
  }

  get() {
    return {
      name: this.name,
      documentNumber: this.documentNumber,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      createBy: this.createBy,
      updatedBy: this.updatedBy,
      clientId: this.clientId,
    };
  }
}
