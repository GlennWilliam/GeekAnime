/*
  Warnings:

  - You are about to drop the column `anime_images` on the `collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `anime_images`,
    ADD COLUMN `anime_image` VARCHAR(191) NULL;
