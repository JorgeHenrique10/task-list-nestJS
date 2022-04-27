-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "completed" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
