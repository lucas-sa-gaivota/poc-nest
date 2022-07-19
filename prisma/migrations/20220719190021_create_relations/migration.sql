-- AlterTable
ALTER TABLE "local" ADD COLUMN     "clientId" INTEGER;

-- AlterTable
ALTER TABLE "people" ADD COLUMN     "clientId" INTEGER;

-- AddForeignKey
ALTER TABLE "people" ADD CONSTRAINT "people_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "local" ADD CONSTRAINT "local_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
