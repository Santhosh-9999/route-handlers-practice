import { redirect } from "next/navigation";

export async function GET(request: Request) {
  redirect("/api/v2/users");
  const usersData = [
    {
      users: [
        {
          id: 11,
          firstName: "Liam",
          age: 29,
        },
        {
          id: 12,
          firstName: "Mia",
          age: 24,
        },
        {
          id: 13,
          firstName: "Noah",
          age: 40,
        },
        {
          id: 14,
          firstName: "Charlotte",
          age: 36,
        },
        {
          id: 15,
          firstName: "William",
          age: 32,
        },
      ],
      total: 208,
      skip: 10,
      limit: 5,
    },
  ];

  return new Response(JSON.stringify(usersData), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}
