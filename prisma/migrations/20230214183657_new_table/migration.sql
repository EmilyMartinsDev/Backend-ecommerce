-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_product_id_fkey";

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
