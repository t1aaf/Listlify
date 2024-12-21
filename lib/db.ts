import { drizzle } from 'drizzle-orm/xata-http';
import { XataClient } from '@/xata'
import { pgTable, text } from 'drizzle-orm/pg-core';

// Initialize Xata client with API key from environment variables
const xata = new XataClient({
    apiKey : "xau_feFTvYk7Tc928JWG8CFmZ44RQv9A1hvI1",
    branch : 'main'
})
export const db = drizzle(xata);

export const usersTable = pgTable("users", {
    name : text("name"),
    email : text("email"),
    password : text("password")
})