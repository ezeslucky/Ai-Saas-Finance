/*
  Warnings:

  - You are about to drop the column `categoryId` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `budgets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "budgets" DROP CONSTRAINT "budgets_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_userId_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_categoryId_fkey";

-- DropIndex
DROP INDEX "budgets_categoryId_idx";

-- DropIndex
DROP INDEX "transactions_categoryId_idx";

-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "categoryId",
ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "categoryId",
ADD COLUMN     "category" TEXT NOT NULL;

-- DropTable
DROP TABLE "categories";
