import { t } from './trpc';

import { helloRouter } from './helloworld';

export const appRouter = t.router({
  hello: helloRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter;
