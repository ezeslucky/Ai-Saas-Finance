/*
  Warnings:

  - You are about to drop the column `currency` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "currency";

-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "currency";

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "currency";
