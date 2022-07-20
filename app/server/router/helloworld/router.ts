import { t } from "../trpc";
import { z } from "zod";

export const helloRouter = t.router({
  me: t.procedure
    .input(z.object({
      name: z.string()
    }))
    .query(async ({ input: { name } }) => {
      return { hello: name }
    })
});