import { NextRequest, NextResponse } from "next/server";

function middleware1(request: NextRequest) {
  const url = request.url;
  console.log("middleware1 =>", { url });
  return NextResponse.next();
}

function middleware2(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log("middleware2 =>", { pathname });

  return NextResponse.next();
}

export function middleware(request: NextRequest) {
  middleware1(request);
  middleware2(request);
}

export const config = {
  matcher: ["/"],
};
