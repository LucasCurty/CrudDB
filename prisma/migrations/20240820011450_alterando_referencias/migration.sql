/*
  Warnings:

  - Added the required column `user_id` to the `notas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_notas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "numero_nota" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "destinatario" TEXT NOT NULL,
    "endereco_destinatario" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "peso" REAL NOT NULL,
    "valor_nota" REAL NOT NULL,
    "tipo_produto" TEXT,
    "status_entrega" TEXT,
    CONSTRAINT "notas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_notas" ("cidade", "client", "destinatario", "endereco_destinatario", "id", "numero_nota", "peso", "status_entrega", "tipo_produto", "valor_nota") SELECT "cidade", "client", "destinatario", "endereco_destinatario", "id", "numero_nota", "peso", "status_entrega", "tipo_produto", "valor_nota" FROM "notas";
DROP TABLE "notas";
ALTER TABLE "new_notas" RENAME TO "notas";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
