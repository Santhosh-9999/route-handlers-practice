import { headers } from "next/headers";
export async function GET(request: Request) {
  //   const requestHeaders = new Headers(request.headers);
  //   console.log("Headers", requestHeaders.get("Authorization"));
  const headerList = await headers();
  console.log("console for Auth headers", headerList.get("Authorization"));
  return new Response("<h1>Profile API Data</h1>", {
    headers: { "content-type": "text/html" },
    status: 200,
  });
}
