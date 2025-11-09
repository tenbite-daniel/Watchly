/*
  Warnings:

  - You are about to drop the column `userId` on the `UserSettings` table. All the data in the column will be lost.
  - You are about to drop the `MediaCollections` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `UserSettings` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `UserSettings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."UserSettings" DROP CONSTRAINT "UserSettings_userId_fkey";

-- DropIndex
DROP INDEX "public"."UserSettings_userId_key";

-- AlterTable
ALTER TABLE "PendingSyncActions" ALTER COLUMN "synced_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserSettings" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."MediaCollections";

-- CreateTable
CREATE TABLE "MediaCollection" (
    "id" TEXT NOT NULL,
    "collection_id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT,
    "poster_path" TEXT,
    "backdrop_path" TEXT,
    "media_ids" JSONB,
    "collection_data" JSONB,
    "last_fetched_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MediaCollection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MediaCollection_collection_id_idx" ON "MediaCollection"("collection_id");

-- CreateIndex
CREATE INDEX "MediaCollection_name_idx" ON "MediaCollection"("name");

-- CreateIndex
CREATE INDEX "MediaCollection_last_fetched_at_idx" ON "MediaCollection"("last_fetched_at");

-- CreateIndex
CREATE UNIQUE INDEX "UserSettings_user_id_key" ON "UserSettings"("user_id");

-- AddForeignKey
ALTER TABLE "UserSettings" ADD CONSTRAINT "UserSettings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EpisodeProgress" ADD CONSTRAINT "EpisodeProgress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
