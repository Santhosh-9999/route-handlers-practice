import { NextRequest } from "next/server";
import commentsList from "./commets";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredList = query
    ? commentsList.filter((c) => c.text.includes(query))
    : commentsList;
  return Response.json(filteredList);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const id = commentsList.length + 1;
  const newComment = { id, text: comment.text };
  commentsList.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
