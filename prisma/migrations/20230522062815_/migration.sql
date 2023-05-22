/*
  Warnings:

  - A unique constraint covering the columns `[belongsToId,id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_belongsToId_id_key" ON "Product"("belongsToId", "id");
