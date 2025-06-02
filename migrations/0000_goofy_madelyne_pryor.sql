CREATE TABLE `entity_interactions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`entity_id` text NOT NULL,
	`domain` text NOT NULL,
	`service` text NOT NULL,
	`timestamp` integer DEFAULT (strftime('%s', 'now')) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `home_assistant_events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`event_type` text NOT NULL,
	`event_data` text NOT NULL,
	`timestamp` integer DEFAULT (strftime('%s', 'now')) NOT NULL
);
