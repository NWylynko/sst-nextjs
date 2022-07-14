import type { App } from "@serverless-stack/resources";

import { NextStack } from "./NextStack";

export default function (app: App) {

  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    bundle: {
      format: "esm",
    },
  });

  app.stack(NextStack);

}