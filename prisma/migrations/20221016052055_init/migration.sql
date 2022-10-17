/*
  Warnings:

  - You are about to drop the column `createAt` on the `Orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_id_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "createAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "servicesId" TEXT;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "Services"("serviceId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
