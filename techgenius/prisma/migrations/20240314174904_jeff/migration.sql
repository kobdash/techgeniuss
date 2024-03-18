-- CreateTable
CREATE TABLE "organization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organization_group_users" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "organization_group_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "survey" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "survey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_surveys" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "user_surveys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255),
    "enabled" BOOLEAN NOT NULL,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "otp_token" VARCHAR(255),
    "password" VARCHAR(255),
    "password_reset_token" VARCHAR(255),
    "phone_number" VARCHAR(255),
    "username" VARCHAR(255) NOT NULL,
    "organization_id" INTEGER NOT NULL,
    "role_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_organization_group_usersTousers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_surveyTousers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_user_surveysTousers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_organization_group_usersTousers_AB_unique" ON "_organization_group_usersTousers"("A", "B");

-- CreateIndex
CREATE INDEX "_organization_group_usersTousers_B_index" ON "_organization_group_usersTousers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_surveyTousers_AB_unique" ON "_surveyTousers"("A", "B");

-- CreateIndex
CREATE INDEX "_surveyTousers_B_index" ON "_surveyTousers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_user_surveysTousers_AB_unique" ON "_user_surveysTousers"("A", "B");

-- CreateIndex
CREATE INDEX "_user_surveysTousers_B_index" ON "_user_surveysTousers"("B");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_organization_group_usersTousers" ADD CONSTRAINT "_organization_group_usersTousers_A_fkey" FOREIGN KEY ("A") REFERENCES "organization_group_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_organization_group_usersTousers" ADD CONSTRAINT "_organization_group_usersTousers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_surveyTousers" ADD CONSTRAINT "_surveyTousers_A_fkey" FOREIGN KEY ("A") REFERENCES "survey"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_surveyTousers" ADD CONSTRAINT "_surveyTousers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_user_surveysTousers" ADD CONSTRAINT "_user_surveysTousers_A_fkey" FOREIGN KEY ("A") REFERENCES "user_surveys"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_user_surveysTousers" ADD CONSTRAINT "_user_surveysTousers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
