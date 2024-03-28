import {
  int,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const user = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  phone: varchar("phone", { length: 20 }).notNull().unique(),
  name: text("name").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").onUpdateNow(),
  githubId: varchar("github_id", { length: 255 }), // 存储GitHub用户ID
  githubAccessToken: text("github_access_token"), // 存储GitHub访问令牌
  githubRefreshToken: text("github_refresh_token"), // 存储GitHub刷新令牌
  githubUsername: varchar("github_username", { length: 255 }), // 存储GitHub用户名
});
