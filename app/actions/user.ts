"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createUser(formData: any) {
  const email = formData?.email;
  const nameValue = formData?.name;
  const name = typeof nameValue === "string" ? nameValue.trim() : "";

  if (!email) {
    return { ok: false, error: "Email is required." };
  }
  await prisma.user.create({
    data: {
      email,
      name: name || null,
    },
  });

  revalidatePath("/");
  return { ok: true };
}

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}
