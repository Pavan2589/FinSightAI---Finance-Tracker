"use server"

import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";

// Fixed: serializeTransaction now returns the serialized object and corrects typos
const serializeTransaction = (obj) => {
    const serialized = { ...obj };
    if (obj.balance && typeof obj.balance.toNumber === "function") {
        serialized.balance = obj.balance.toNumber();
    }
    if (obj.amount && typeof obj.amount.toNumber === "function") {
        serialized.amount = obj.amount.toNumber();
    }
    return serialized;
}

export async function createAccount(data) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });

        if (!user) {
            throw new Error("User not found")
        }

        const balanceValue = parseFloat(data.balance);
        if (isNaN(balanceValue)) {
            throw new Error("Invalid balance amount");
        }

        const existingAccounts = await db.account.findMany({
            where: { userId: user.id }
        });

        const shouldBeDefault = existingAccounts.length === 0 ? true : data.isDefault;
        if (shouldBeDefault) {
            await db.account.updateMany({
                where: { userId: user.id, isDefault: true },
                data: { isDefault: false }
            });
        }

        if (!["CURRENT", "SAVINGS"].includes(data.type)) {
            throw new Error("Invalid account type");
        }

        // Only send fields that exist in your Prisma schema!
        const account = await db.account.create({
            data: {
                name: data.name,
                type: data.type,
                balance: balanceValue,
                isDefault: shouldBeDefault,
                userId: user.id,
            },
        });

        const serializedAccount = serializeTransaction(account);
        revalidatePath("/dashboard");
        return { success: true, data: serializedAccount };
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getUserAccounts() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: { clerkUserId: userId }
    });

    if (!user) {
        throw new Error("User not found");
    }

    const accounts = await db.account.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        include: {
            _count: {
                select: {
                    transactions: true,
                },
            },
        },
    });

    const serializedAccount = accounts.map(serializeTransaction);
    return serializedAccount;
}
