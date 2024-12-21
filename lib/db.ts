import { drizzle } from 'drizzle-orm/xata-http';
import { XataClient } from '@/xata'
import { pgTable, text } from 'drizzle-orm/pg-core';

// Initialize Xata client with API key from environment variables
const xata = new XataClient({
    apiKey : process.env.XATA_API_KEY,
    branch : 'main'
})
export const db = drizzle(xata);

export const usersTable = pgTable("users", {
    name : text("name"),
    email : text("email"),
    password : text("password")
})