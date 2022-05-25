-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "media_url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "comments" INTEGER NOT NULL,
    "caption" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
