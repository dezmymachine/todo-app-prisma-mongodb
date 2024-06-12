// app/api/todo/route.ts

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    //fetch todos from the db
    const todos = await db.todo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    // respond with the todos
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    console.log("[GET TODO]", error);

    // Handle errors
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
