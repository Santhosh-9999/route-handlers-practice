import commentList from "../../comments/commets";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const comment = commentList.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return new Response(JSON.stringify({ message: "Comment not found" }));
  } else {
    return new Response(JSON.stringify(comment), {
      headers: {
        "content-type": "application/json",
      },
      status: 200,
    });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const commentIndex = commentList.findIndex(
    (comment) => comment.id === parseInt(id),
  );
  commentList[commentIndex].text = text;
  if (commentIndex === -1) {
    return new Response(JSON.stringify({ message: "comment not found" }), {
      headers: { "content-type": "application/json" },
      status: 201,
    });
  }

  return new Response(JSON.stringify(commentList[commentIndex]), {
    headers: { "content-type": "application/json" },
    status: 201,
  });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const index = commentList.findIndex((c) => c.id === parseInt(id));
  const comment = commentList[index];
  commentList.splice(index, 1);
  return new Response(JSON.stringify(comment));
}
