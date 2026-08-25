import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  //   const requestHeaders = new Headers(request.headers);
  //   console.log("Headers", requestHeaders.get("Authorization"));
  const headerList = await headers();
  console.log("console for Auth headers", headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log("cookies approch 1", theme);

  const cookiesStore = await cookies();
  console.log("cookies 2 nd approch", cookiesStore.get("theme"));

  cookiesStore.set("itemsPerPage", "20");
  console.log("cookie", cookiesStore.get("itemsPerPage"));

  return new Response("<h1>Profile API Data</h1>", {
    headers: { "content-type": "text/html", "Set-cookie": "theme=dark" },
    status: 200,
  });
}
