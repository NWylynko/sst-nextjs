import { TRPCError } from '@trpc/server';
import { NextApiRequest } from 'next/types';

export async function getUserFromHeader(req: NextApiRequest) {

  const jwt = req.cookies.jwt ?? req.headers['x-jwt'] as string | undefined;

  // use this if you want every query & mutation to require auth
  // if (!jwt) {
  //   throw new TRPCError({ code: "UNAUTHORIZED" })
  // }

  // do something here to take the jwt and get the user out of it
  const user = undefined;

  return user;
}
