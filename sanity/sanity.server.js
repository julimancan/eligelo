import { createClient } from "next-sanity";
import { sanityClientConfig } from "./config";

export const sanityClient = (preview = "false") =>
  preview
    ? createClient({ ...sanityClientConfig, useCdn: false })
    : createClient({ ...sanityClientConfig });
