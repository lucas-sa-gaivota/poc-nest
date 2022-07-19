export class Local {
  private name: string;
  private createdAt: Date;
  private updatedAt: Date;
  private createBy: string;
  private updatedBy: string;

  constructor(
    name: string,
    createBy: string,
    updatedBy: string,
    createdAt?: Date,
  ) {
    this.name = name;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.createBy = createBy;
    this.updatedBy = updatedBy;
    this.createdAt = createdAt ? new Date(createdAt) : new Date();
  }

  get() {
    return {
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      createBy: this.createBy,
      updatedBy: this.updatedBy,
    };
  }
}
