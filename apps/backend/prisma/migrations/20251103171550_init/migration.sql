-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "display_name" TEXT,
    "avatar_url" TEXT,
    "password" TEXT NOT NULL,
    "timeZone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSettings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "notifications_enabled" BOOLEAN NOT NULL DEFAULT true,
    "email_updates" BOOLEAN NOT NULL DEFAULT true,
    "auto_play_trailers" BOOLEAN NOT NULL DEFAULT true,
    "default_list_type" TEXT NOT NULL DEFAULT 'watchlist',
    "theme" TEXT NOT NULL DEFAULT 'dark',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaCache" (
    "id" BIGINT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "original_title" TEXT,
    "overview" TEXT,
    "tagline" TEXT,
    "poster_path" TEXT,
    "backdrop_path" TEXT,
    "release_date" TIMESTAMP(3),
    "first_air_date" TIMESTAMP(3),
    "status" TEXT,
    "popularity" DOUBLE PRECISION,
    "vote_average" DOUBLE PRECISION,
    "vote_count" INTEGER,
    "original_language" TEXT,
    "adult" BOOLEAN NOT NULL DEFAULT false,
    "genres" JSONB,
    "production_companies" JSONB,
    "runtime" INTEGER,
    "number_of_seasons" INTEGER,
    "number_of_episodes" INTEGER,
    "episode_run_time" JSONB,
    "in_production" BOOLEAN,
    "last_air_date" TIMESTAMP(3),
    "trailer_urls" JSONB,
    "external_ids" JSONB,
    "is_manual_entry" BOOLEAN NOT NULL DEFAULT false,
    "source_api" TEXT NOT NULL DEFAULT 'tmdb',
    "last_fetched_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MediaCache_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchCache" (
    "id" TEXT NOT NULL,
    "query_hash" TEXT,
    "filter_hash" TEXT,
    "external_id" TEXT,
    "search_type" TEXT NOT NULL,
    "results" JSONB NOT NULL,
    "total_results" INTEGER,
    "total_pages" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SearchCache_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PeopleCache" (
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "also_known_for" JSONB,
    "gender" INTEGER,
    "known_for_department" TEXT,
    "biography" TEXT,
    "birthday" TIMESTAMP(3),
    "place_of_birth" TEXT,
    "profile_path" TEXT,
    "imdb_id" TEXT,
    "last_fetched_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PeopleCache_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GenresCache" (
    "id" TEXT NOT NULL,
    "genre_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "media_count" INTEGER,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GenresCache_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaCollections" (
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

    CONSTRAINT "MediaCollections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TvSeason" (
    "id" TEXT NOT NULL,
    "media_id" BIGINT NOT NULL,
    "season_number" INTEGER NOT NULL,
    "name" TEXT,
    "overview" TEXT,
    "air_date" TIMESTAMP(3),
    "episode_count" INTEGER,
    "poster_path" TEXT,
    "season_data" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TvSeason_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TvEpisode" (
    "id" TEXT NOT NULL,
    "season_id" TEXT NOT NULL,
    "episode_number" INTEGER NOT NULL,
    "name" TEXT,
    "overview" TEXT,
    "air_date" TIMESTAMP(3),
    "runtime" INTEGER,
    "still_path" TEXT,
    "vote_average" DOUBLE PRECISION,
    "vote_count" INTEGER,
    "episode_data" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TvEpisode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EpisodeProgress" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "episode_id" TEXT NOT NULL,
    "last_watched_timestamp" INTEGER NOT NULL DEFAULT 0,
    "episode_duration" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'unwatched',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EpisodeProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lists" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "list_type" TEXT NOT NULL,
    "name" TEXT,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "sort_order" TEXT NOT NULL DEFAULT 'added_date',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListItem" (
    "id" TEXT NOT NULL,
    "list_id" TEXT NOT NULL,
    "media_id" BIGINT NOT NULL,
    "progress" JSONB DEFAULT '{}',
    "watch_count" INTEGER NOT NULL DEFAULT 0,
    "last_watched_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ListItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ratings" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "media_id" BIGINT NOT NULL,
    "rating" INTEGER NOT NULL,
    "review_text" TEXT,
    "contains_spoilers" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "media_id" BIGINT NOT NULL,
    "title" TEXT,
    "content" TEXT NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "contains_spoilers" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimerSession" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "total_seconds" INTEGER NOT NULL DEFAULT 7200,
    "remaining_seconds" INTEGER NOT NULL DEFAULT 7200,
    "is_paused" BOOLEAN NOT NULL DEFAULT true,
    "last_started_at" TIMESTAMP(3),
    "daily_reset_time" TEXT NOT NULL DEFAULT '12:00:00',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimerSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimerHistory" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "seconds_used" INTEGER NOT NULL,
    "activity_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TimerHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchHistory" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "list_item_id" TEXT NOT NULL,
    "activity_type" TEXT NOT NULL,
    "progress_data" JSONB,
    "metadata" JSONB,
    "device_type" TEXT,
    "session_duration" INTEGER,
    "platform" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WatchHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDevices" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "device_id" TEXT NOT NULL,
    "device_name" TEXT NOT NULL,
    "device_type" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "last_seen_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_sync_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserDevices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SyncSessions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "device_id" TEXT NOT NULL,
    "token_hash" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "last_activity_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SyncSessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PendingSyncActions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "device_id" TEXT,
    "action_type" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "action_data" JSONB NOT NULL,
    "is_synced" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "synced_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PendingSyncActions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SyncConflicts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "conflict_data" JSONB NOT NULL,
    "resolved_by" TEXT,
    "resolution" TEXT,
    "resolved_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SyncConflicts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserSettings_userId_key" ON "UserSettings"("userId");

-- CreateIndex
CREATE INDEX "MediaCache_type_idx" ON "MediaCache"("type");

-- CreateIndex
CREATE INDEX "MediaCache_popularity_idx" ON "MediaCache"("popularity");

-- CreateIndex
CREATE INDEX "MediaCache_release_date_idx" ON "MediaCache"("release_date");

-- CreateIndex
CREATE INDEX "MediaCache_last_fetched_at_idx" ON "MediaCache"("last_fetched_at");

-- CreateIndex
CREATE INDEX "SearchCache_query_hash_expires_at_idx" ON "SearchCache"("query_hash", "expires_at");

-- CreateIndex
CREATE INDEX "SearchCache_filter_hash_expires_at_idx" ON "SearchCache"("filter_hash", "expires_at");

-- CreateIndex
CREATE INDEX "PeopleCache_name_idx" ON "PeopleCache"("name");

-- CreateIndex
CREATE INDEX "PeopleCache_last_fetched_at_idx" ON "PeopleCache"("last_fetched_at");

-- CreateIndex
CREATE INDEX "GenresCache_genre_id_idx" ON "GenresCache"("genre_id");

-- CreateIndex
CREATE INDEX "GenresCache_name_idx" ON "GenresCache"("name");

-- CreateIndex
CREATE INDEX "GenresCache_last_updated_at_idx" ON "GenresCache"("last_updated_at");

-- CreateIndex
CREATE INDEX "MediaCollections_collection_id_idx" ON "MediaCollections"("collection_id");

-- CreateIndex
CREATE INDEX "MediaCollections_name_idx" ON "MediaCollections"("name");

-- CreateIndex
CREATE INDEX "MediaCollections_last_fetched_at_idx" ON "MediaCollections"("last_fetched_at");

-- CreateIndex
CREATE INDEX "TvSeason_media_id_season_number_idx" ON "TvSeason"("media_id", "season_number");

-- CreateIndex
CREATE INDEX "TvSeason_media_id_idx" ON "TvSeason"("media_id");

-- CreateIndex
CREATE INDEX "TvSeason_season_number_idx" ON "TvSeason"("season_number");

-- CreateIndex
CREATE INDEX "TvEpisode_season_id_episode_number_idx" ON "TvEpisode"("season_id", "episode_number");

-- CreateIndex
CREATE INDEX "TvEpisode_season_id_idx" ON "TvEpisode"("season_id");

-- CreateIndex
CREATE INDEX "TvEpisode_episode_number_idx" ON "TvEpisode"("episode_number");

-- CreateIndex
CREATE INDEX "TvEpisode_air_date_idx" ON "TvEpisode"("air_date");

-- CreateIndex
CREATE INDEX "EpisodeProgress_user_id_idx" ON "EpisodeProgress"("user_id");

-- CreateIndex
CREATE INDEX "EpisodeProgress_episode_id_idx" ON "EpisodeProgress"("episode_id");

-- CreateIndex
CREATE INDEX "EpisodeProgress_status_idx" ON "EpisodeProgress"("status");

-- CreateIndex
CREATE INDEX "EpisodeProgress_last_updated_at_idx" ON "EpisodeProgress"("last_updated_at");

-- CreateIndex
CREATE UNIQUE INDEX "EpisodeProgress_user_id_episode_id_key" ON "EpisodeProgress"("user_id", "episode_id");

-- CreateIndex
CREATE INDEX "Lists_user_id_idx" ON "Lists"("user_id");

-- CreateIndex
CREATE INDEX "Lists_list_type_idx" ON "Lists"("list_type");

-- CreateIndex
CREATE INDEX "Lists_is_public_idx" ON "Lists"("is_public");

-- CreateIndex
CREATE UNIQUE INDEX "Lists_user_id_list_type_name_key" ON "Lists"("user_id", "list_type", "name");

-- CreateIndex
CREATE INDEX "ListItem_list_id_idx" ON "ListItem"("list_id");

-- CreateIndex
CREATE INDEX "ListItem_media_id_idx" ON "ListItem"("media_id");

-- CreateIndex
CREATE INDEX "ListItem_last_watched_at_idx" ON "ListItem"("last_watched_at");

-- CreateIndex
CREATE INDEX "ListItem_watch_count_idx" ON "ListItem"("watch_count");

-- CreateIndex
CREATE UNIQUE INDEX "ListItem_list_id_media_id_key" ON "ListItem"("list_id", "media_id");

-- CreateIndex
CREATE INDEX "Ratings_user_id_idx" ON "Ratings"("user_id");

-- CreateIndex
CREATE INDEX "Ratings_media_id_idx" ON "Ratings"("media_id");

-- CreateIndex
CREATE INDEX "Ratings_rating_idx" ON "Ratings"("rating");

-- CreateIndex
CREATE INDEX "Ratings_created_at_idx" ON "Ratings"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "Ratings_user_id_media_id_key" ON "Ratings"("user_id", "media_id");

-- CreateIndex
CREATE INDEX "Notes_user_id_idx" ON "Notes"("user_id");

-- CreateIndex
CREATE INDEX "Notes_media_id_idx" ON "Notes"("media_id");

-- CreateIndex
CREATE INDEX "Notes_is_public_idx" ON "Notes"("is_public");

-- CreateIndex
CREATE INDEX "Notes_created_at_idx" ON "Notes"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "Notes_user_id_media_id_key" ON "Notes"("user_id", "media_id");

-- CreateIndex
CREATE UNIQUE INDEX "TimerSession_user_id_key" ON "TimerSession"("user_id");

-- CreateIndex
CREATE INDEX "TimerSession_user_id_idx" ON "TimerSession"("user_id");

-- CreateIndex
CREATE INDEX "TimerSession_is_paused_idx" ON "TimerSession"("is_paused");

-- CreateIndex
CREATE INDEX "TimerHistory_user_id_idx" ON "TimerHistory"("user_id");

-- CreateIndex
CREATE INDEX "TimerHistory_session_id_idx" ON "TimerHistory"("session_id");

-- CreateIndex
CREATE INDEX "TimerHistory_activity_date_idx" ON "TimerHistory"("activity_date");

-- CreateIndex
CREATE UNIQUE INDEX "TimerHistory_user_id_activity_date_key" ON "TimerHistory"("user_id", "activity_date");

-- CreateIndex
CREATE INDEX "WatchHistory_user_id_idx" ON "WatchHistory"("user_id");

-- CreateIndex
CREATE INDEX "WatchHistory_list_item_id_idx" ON "WatchHistory"("list_item_id");

-- CreateIndex
CREATE INDEX "WatchHistory_activity_type_idx" ON "WatchHistory"("activity_type");

-- CreateIndex
CREATE INDEX "WatchHistory_created_at_idx" ON "WatchHistory"("created_at");

-- CreateIndex
CREATE INDEX "WatchHistory_device_type_idx" ON "WatchHistory"("device_type");

-- CreateIndex
CREATE INDEX "SyncSessions_user_id_idx" ON "SyncSessions"("user_id");

-- CreateIndex
CREATE INDEX "SyncSessions_device_id_idx" ON "SyncSessions"("device_id");

-- CreateIndex
CREATE INDEX "SyncSessions_is_active_idx" ON "SyncSessions"("is_active");

-- CreateIndex
CREATE INDEX "SyncSessions_expires_at_idx" ON "SyncSessions"("expires_at");

-- CreateIndex
CREATE INDEX "SyncSessions_token_hash_idx" ON "SyncSessions"("token_hash");

-- CreateIndex
CREATE INDEX "PendingSyncActions_user_id_idx" ON "PendingSyncActions"("user_id");

-- CreateIndex
CREATE INDEX "PendingSyncActions_device_id_idx" ON "PendingSyncActions"("device_id");

-- CreateIndex
CREATE INDEX "PendingSyncActions_entity_type_idx" ON "PendingSyncActions"("entity_type");

-- CreateIndex
CREATE INDEX "PendingSyncActions_is_synced_idx" ON "PendingSyncActions"("is_synced");

-- CreateIndex
CREATE INDEX "PendingSyncActions_created_at_idx" ON "PendingSyncActions"("created_at");

-- CreateIndex
CREATE INDEX "SyncConflicts_user_id_idx" ON "SyncConflicts"("user_id");

-- CreateIndex
CREATE INDEX "SyncConflicts_entity_type_idx" ON "SyncConflicts"("entity_type");

-- CreateIndex
CREATE INDEX "SyncConflicts_resolution_idx" ON "SyncConflicts"("resolution");

-- CreateIndex
CREATE INDEX "SyncConflicts_created_at_idx" ON "SyncConflicts"("created_at");

-- AddForeignKey
ALTER TABLE "UserSettings" ADD CONSTRAINT "UserSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TvSeason" ADD CONSTRAINT "TvSeason_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "MediaCache"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TvEpisode" ADD CONSTRAINT "TvEpisode_season_id_fkey" FOREIGN KEY ("season_id") REFERENCES "TvSeason"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EpisodeProgress" ADD CONSTRAINT "EpisodeProgress_episode_id_fkey" FOREIGN KEY ("episode_id") REFERENCES "TvEpisode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lists" ADD CONSTRAINT "Lists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListItem" ADD CONSTRAINT "ListItem_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "Lists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListItem" ADD CONSTRAINT "ListItem_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "MediaCache"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "MediaCache"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "MediaCache"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimerSession" ADD CONSTRAINT "TimerSession_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimerHistory" ADD CONSTRAINT "TimerHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimerHistory" ADD CONSTRAINT "TimerHistory_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "TimerSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchHistory" ADD CONSTRAINT "WatchHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchHistory" ADD CONSTRAINT "WatchHistory_list_item_id_fkey" FOREIGN KEY ("list_item_id") REFERENCES "ListItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDevices" ADD CONSTRAINT "UserDevices_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SyncSessions" ADD CONSTRAINT "SyncSessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SyncSessions" ADD CONSTRAINT "SyncSessions_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "UserDevices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendingSyncActions" ADD CONSTRAINT "PendingSyncActions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendingSyncActions" ADD CONSTRAINT "PendingSyncActions_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "UserDevices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SyncConflicts" ADD CONSTRAINT "SyncConflicts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SyncConflicts" ADD CONSTRAINT "SyncConflicts_resolved_by_fkey" FOREIGN KEY ("resolved_by") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
