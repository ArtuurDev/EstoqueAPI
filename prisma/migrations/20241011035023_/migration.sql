-- CreateTable
CREATE TABLE "prudutos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "fornecerdor" TEXT NOT NULL,
    "tipoProduto" TEXT NOT NULL,

    CONSTRAINT "prudutos_pkey" PRIMARY KEY ("id")
);
