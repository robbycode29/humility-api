import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1739016230076 implements MigrationInterface {
    name = 'InitialMigration1739016230076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "superhero" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "superpower" character varying NOT NULL, "humilityScore" double precision NOT NULL, CONSTRAINT "PK_b92ff773465116c2b5e215bb910" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "superhero"`);
    }

}
