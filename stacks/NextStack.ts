import type { StackContext } from "@serverless-stack/resources";
import { NextjsSite } from "@serverless-stack/resources"

export function NextStack({ stack }: StackContext) {

  // Create a Next.js site
  const site = new NextjsSite(stack, "NextSite", {
    path: "app",
  });

  // Show the site URL in the output
  stack.addOutputs({
    URL: site.url,
  });

  return {
    site
  }

}