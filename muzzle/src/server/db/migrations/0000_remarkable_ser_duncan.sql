CREATE TABLE "card_fields" (
	"id" serial PRIMARY KEY NOT NULL,
	"deck_id" char(12) NOT NULL,
	"field_name" varchar(50) NOT NULL,
	"field_type" varchar(20) NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "card_logs" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"card_id" char(16) NOT NULL,
	"answer_time" double precision NOT NULL,
	"next_review_interval" integer NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "card_values" (
	"card_id" char(16) NOT NULL,
	"card_field_id" integer NOT NULL,
	"content" varchar(255) NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "card_values_card_id_card_field_id_pk" PRIMARY KEY("card_id","card_field_id")
);
--> statement-breakpoint
CREATE TABLE "cards" (
	"id" char(16) PRIMARY KEY NOT NULL,
	"deck_id" char(12) NOT NULL,
	"success_count" integer NOT NULL,
	"review_interval" integer NOT NULL,
	"next_review_date" date NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "decks" (
	"id" char(12) PRIMARY KEY NOT NULL,
	"user_id" varchar(50) NOT NULL,
	"deck_name" varchar(50) NOT NULL,
	"deck_description" varchar(100) NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"user_name" varchar(50) NOT NULL,
	"email" varchar(255) NOT NULL,
	"avatar_url" varchar(255),
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "card_fields" ADD CONSTRAINT "card_fields_deck_id_decks_id_fk" FOREIGN KEY ("deck_id") REFERENCES "public"."decks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "card_logs" ADD CONSTRAINT "card_logs_card_id_cards_id_fk" FOREIGN KEY ("card_id") REFERENCES "public"."cards"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "card_values" ADD CONSTRAINT "card_values_card_id_cards_id_fk" FOREIGN KEY ("card_id") REFERENCES "public"."cards"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "card_values" ADD CONSTRAINT "card_values_card_field_id_card_fields_id_fk" FOREIGN KEY ("card_field_id") REFERENCES "public"."card_fields"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cards" ADD CONSTRAINT "cards_deck_id_decks_id_fk" FOREIGN KEY ("deck_id") REFERENCES "public"."decks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "decks" ADD CONSTRAINT "decks_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;