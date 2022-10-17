-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_servicesId_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_userId_fkey";

-- CreateTable
CREATE TABLE "_OrdersToUser" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrdersToUser_AB_unique" ON "_OrdersToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_OrdersToUser_B_index" ON "_OrdersToUser"("B");

-- AddForeignKey
ALTER TABLE "_OrdersToUser" ADD CONSTRAINT "_OrdersToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrdersToUser" ADD CONSTRAINT "_OrdersToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
