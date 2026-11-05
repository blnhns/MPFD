import {
    pgTable,
    uuid,
    text,
    varchar,
    numeric,
    date,
    timestamp
} from "drizzle-orm/pg-core";

export const transactions = pgTable("transactions", {
    id: uuid("id").primaryKey().defaultRandom(),

    userId: text("user_id").notNull(),

    description: varchar("description", {
        length: 255
    }).notNull(),

    amount: numeric("amount", {
        precision: 12,
        scale: 2
    }).notNull(),

    type: varchar("type", {
        length: 10
    }).notNull(),

    category: varchar("category", {
        length: 50
    }),

    transactionDate: date("transaction_date").notNull(),

    createdAt: timestamp("created_at", {
        withTimezone: true
    }).defaultNow().notNull()
});