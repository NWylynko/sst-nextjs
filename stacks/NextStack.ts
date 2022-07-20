import type { StackContext } from "@serverless-stack/resources";
import { NextjsSite } from "@serverless-stack/resources"

export function NextStack({ stack, app }: StackContext) {

  const domain = app.local ? `http://localhost:3000` : 'real-domain'

  // Create a Next.js site
  const site = new NextjsSite(stack, "NextSite", {
    path: "app",
    environment: {
      DOMAIN: domain
    }
  });

  // Show the site URL in the output
  stack.addOutputs({
    URL: site.url,
  });

  return {
    site
  }

}