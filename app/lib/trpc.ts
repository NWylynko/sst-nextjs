import { setupTRPC } from '@trpc/next';
import { NextPageContext } from 'next/types';
import type { AppRouter } from '../pages/api/trpc/[trpc]';
import { parse as parseCookies } from "cookie";

const domain = process.env.DOMAIN;

if (!domain) {
  throw new Error(`env DOMAIN is not set`);
}

const t = setupTRPC<AppRouter>({
  // @ts-ignore
  config({ ctx }) {
    if (typeof window !== 'undefined') {
      // during client requests
      return {
        url: '/api/trpc',
      };
    }
    // during SSR below

    // optional: use SSG-caching for each rendered page (see caching section for more details)
    const ONE_DAY_SECONDS = 60 * 60 * 24;
    ctx?.res?.setHeader(
      'Cache-Control',
      `s-maxage=1, stale-while-revalidate=${ONE_DAY_SECONDS}`,
    );

    const url = `${domain}/api/trpc`

    const jwt = getJwtFromCookie(ctx, "jwt");


    return {
      url,
      headers: {
        // optional - inform server that it's an ssr request
        'x-ssr': '1',
        'x-jwt': jwt
      },
    };
  },
  ssr: true,
});

export const withTRPC = t.withTRPC
export const trpc = t.proxy;

const getJwtFromCookie = (ctx: NextPageContext | undefined, cookieName: string): string | undefined => {

  const cookie = ctx?.req?.headers.cookie
  let jwt: string | undefined = undefined

  if (cookie) {
    const obj = parseCookies(cookie)
    jwt = obj[cookieName] !== "undefined" ? obj[cookieName] : undefined
  }

  return jwt
}