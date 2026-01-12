import { prisma } from "./lib/prisma.js";

async function getUsers() {
    const users = await prisma.user.findMany();
    console.log(users[0]?.id);
}

getUsers();