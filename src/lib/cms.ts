import { createClient } from "microcms-js-sdk";

export const cmsClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_APIKEY!,
});
