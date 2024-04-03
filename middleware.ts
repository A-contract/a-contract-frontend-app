import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { LOCALES_LIST, Locales } from "@/locales/locales";

const I18nMiddleware = createI18nMiddleware({
  locales: LOCALES_LIST,
  defaultLocale: Locales.EN,
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|static|bot-payment-page|.*\\..*|_next|favicon.ico|robots.txt).*)",
  ],
};
