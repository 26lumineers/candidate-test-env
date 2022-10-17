/*
  Warnings:

  - You are about to drop the column `userId` on the `Services` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_userId_fkey";

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
