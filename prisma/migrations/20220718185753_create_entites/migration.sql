-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "clientTypeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createBy" TEXT NOT NULL,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "documentNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createBy" TEXT NOT NULL,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "local" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createBy" TEXT NOT NULL,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "local_pkey" PRIMARY KEY ("id")
);
