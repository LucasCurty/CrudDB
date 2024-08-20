-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "notas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numero_nota" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "destinatario" TEXT NOT NULL,
    "endereco_destinatario" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "peso" REAL NOT NULL,
    "valor_nota" REAL NOT NULL,
    "tipo_produto" TEXT,
    "status_entrega" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
