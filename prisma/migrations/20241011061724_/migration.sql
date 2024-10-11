/*
  Warnings:

  - You are about to drop the column `fornecedor` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `tipoProduto` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `categoria` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localizacao` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localizacaoNoDeposito` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidadeEmEstoque` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "fornecedor",
DROP COLUMN "quantidade",
DROP COLUMN "tipoProduto",
ADD COLUMN     "categoria" TEXT NOT NULL,
ADD COLUMN     "localizacao" TEXT NOT NULL,
ADD COLUMN     "localizacaoNoDeposito" TEXT NOT NULL,
ADD COLUMN     "quantidadeEmEstoque" TEXT NOT NULL,
ALTER COLUMN "preco" SET DATA TYPE TEXT;
