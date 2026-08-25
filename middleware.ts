import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware (request: NextRequest) {
// return NextResponse.redirect(new URL("/", request.url)); approch 1

// contional approch 2
if(request.nextUrl.pathname === "/profile/api"){
    return NextResponse.rewrite(new URL('/hello', request.url))
}
}
// approch 1
// export const config = {
//     matcher :"/profile/api"
// }