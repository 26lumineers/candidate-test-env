-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "ordersId" TEXT;

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_ordersId_fkey" FOREIGN KEY ("ordersId") REFERENCES "Orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
