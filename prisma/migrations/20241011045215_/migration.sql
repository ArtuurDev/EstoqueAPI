/*
  Warnings:

  - You are about to drop the `prudutos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "prudutos";

-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "tipoProduto" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);
