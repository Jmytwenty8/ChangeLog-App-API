/*
  Warnings:

  - A unique constraint covering the columns `[belongsToId,id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Product_id_belongsToId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Product_belongsToId_id_key" ON "Product"("belongsToId", "id");
