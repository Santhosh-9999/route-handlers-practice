import commentsList from "./commets";

export async function GET(request: Request) {
  return Response.json(commentsList);
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
