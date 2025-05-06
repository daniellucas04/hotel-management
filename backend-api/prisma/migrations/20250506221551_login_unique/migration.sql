/*
  Warnings:

  - The values [Dormitório] on the enum `bedrooms_category` will be removed. If these variants are still used in the database, this will fail.
  - The values [Manutenção] on the enum `bedrooms_status` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[login]` on the table `employees` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `bedrooms` MODIFY `category` ENUM('Solteiro', 'Duplo_solteiro', 'Quarto_casal', 'Apartamento') NOT NULL DEFAULT 'Solteiro',
    MODIFY `status` ENUM('Livre', 'Ocupado') NOT NULL DEFAULT 'Livre';

-- CreateIndex
CREATE UNIQUE INDEX `employees_login_key` ON `employees`(`login`);
