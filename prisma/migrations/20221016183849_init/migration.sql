/*
  Warnings:

  - The primary key for the `Services` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `Services` table. All the data in the column will be lost.
  - The required column `serviceId` was added to the `Services` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Services" DROP CONSTRAINT "Services_pkey",
DROP COLUMN "_id",
ADD COLUMN     "serviceId" TEXT NOT NULL,
ADD CONSTRAINT "Services_pkey" PRIMARY KEY ("serviceId");
