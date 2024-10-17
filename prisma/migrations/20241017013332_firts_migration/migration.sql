/*
  Warnings:

  - You are about to drop the column `categoria` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `atualizadoEm` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoriaId` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movimentacaoId` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `preco` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `quantidadeEmEstoque` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "categoria",
ADD COLUMN     "atualizadoEm" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "categoriaId" INTEGER NOT NULL,
ADD COLUMN     "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "movimentacaoId" INTEGER NOT NULL,
DROP COLUMN "preco",
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL,
DROP COLUMN "quantidadeEmEstoque",
ADD COLUMN     "quantidadeEmEstoque" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movimentacoes" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "movimentacoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_movimentacaoId_fkey" FOREIGN KEY ("movimentacaoId") REFERENCES "movimentacoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
