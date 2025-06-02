import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: "6fd26ae9-6e97-4293-983d-a4a3074f1aad",
    token: process.env.CLOUDFLARE_API_TOKEN!,
  },
});