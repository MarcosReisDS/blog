import { drizzle } from "drizzle-orm/better-sqlite3";
import { postsTable } from "./schemas";
import Database from "better-sqlite3";
import { resolve } from "path";

const sqliteDatebasePath = resolve(process.cwd(), 'db.sqlite3')
const sqliteDatebase = new Database(sqliteDatebasePath)

export const drizzleDb = drizzle(sqliteDatebase, {
    schema: {
        posts: postsTable,
    },
    logger: true
})