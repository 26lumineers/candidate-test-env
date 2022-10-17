/*
  Warnings:

  - You are about to drop the column `userName` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `username` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Made the column `servicesId` on table `Orders` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_servicesId_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "userName",
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "servicesId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "Services"("serviceId") ON DELETE RESTRICT ON UPDATE CASCADE;
