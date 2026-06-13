import {
  pgTable,
  varchar,
  char,
  integer,
  serial,
  bigserial,
  doublePrecision,
  date,
  timestamp,
  primaryKey,
  unique,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: varchar('id', { length: 50 }).primaryKey(),
  userName: varchar('user_name', { length: 50 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  avatarUrl: varchar('avatar_url', { length: 255 }),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const decks = pgTable('decks', {
  id: char('id', { length: 12 }).primaryKey(),
  userId: varchar('user_id', { length: 50 })
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  deckName: varchar('deck_name', { length: 50 }).notNull(),
  deckDescription: varchar('deck_description', { length: 100 }).notNull(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const cardFields = pgTable('card_fields', {
  id: serial('id').primaryKey(),
  deckId: char('deck_id', { length: 12 })
    .notNull()
    .references(() => decks.id, { onDelete: 'cascade' }),
  fieldName: varchar('field_name', { length: 50 }).notNull(),
  fieldType: varchar('field_type', { length: 20 }).notNull(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const cards = pgTable('cards', {
  id: char('id', { length: 16 }).primaryKey(),
  deckId: char('deck_id', { length: 12 })
    .notNull()
    .references(() => decks.id, { onDelete: 'cascade' }),
  successCount: integer('success_count').notNull(),
  reviewInterval: integer('review_interval').notNull(),
  nextReviewDate: date('next_review_date', { mode: 'date' }).notNull(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const cardValues = pgTable(
  'card_values',
  {
    cardId: char('card_id', { length: 16 })
      .notNull()
      .references(() => cards.id, { onDelete: 'cascade' }),
    cardFieldId: integer('card_field_id')
      .notNull()
      .references(() => cardFields.id, { onDelete: 'cascade' }),
    content: varchar('content', { length: 255 }).notNull(),
    createdAt: timestamp('created_at').notNull(),
    updatedAt: timestamp('updated_at').notNull(),
  },
  (table) => [primaryKey({ columns: [table.cardId, table.cardFieldId] })],
);

export const cardLogs = pgTable('card_logs', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  cardId: char('card_id', { length: 16 })
    .notNull()
    .references(() => cards.id, { onDelete: 'cascade' }),
  answerTime: doublePrecision('answer_time').notNull(),
  nextReviewInterval: integer('next_review_interval').notNull(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});
