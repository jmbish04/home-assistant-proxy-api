import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const entityInteractionsSchema = sqliteTable('entity_interactions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  entityId: text('entity_id').notNull(),
  domain: text('domain').notNull(),
  service: text('service').notNull(),
  timestamp: integer('timestamp', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
});

export const homeAssistantEventsSchema = sqliteTable('home_assistant_events', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  eventType: text('event_type').notNull(),
  eventData: text('event_data').notNull(),
  timestamp: integer('timestamp', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
});