-- DropIndex
DROP INDEX "budgets_userId_key";

-- AlterTable
ALTER TABLE "budgets" ADD COLUMN     "lastAlertSent" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "lastProcessed" TIMESTAMP(3);

-- DropEnum
DROP TYPE "BudgetPeriod";

-- CreateIndex
CREATE INDEX "budgets_userId_idx" ON "budgets"("userId");
