/*
  Warnings:

  - You are about to drop the column `userName` on the `Orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_userName_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "userName";

-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
