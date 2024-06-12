// app/api/todo/create/route.ts

import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // detsrtucture todoTitle from the incoming request
    const { todoTitle } = await req.json();

    if (!todoTitle) {
      return new NextResponse("Title required", { status: 400 });
    }

    // Create and save todo on the database
    const todo = await db.todo.create({
      data: {
        title: todoTitle,
      },
    });

    return NextResponse.json(todo, { status: 200 }); // Respond with the created todo
  } catch (error) {
    console.log("[POST TODO]", error);
    return new NextResponse("Internal Server Error", { status: 500 }); // Handle errors
  }
}
