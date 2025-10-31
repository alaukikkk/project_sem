import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server-side environment variables.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },

  /**
   * Client-side environment variables.
   * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
   */
  client: {
    // Add your client variable's schema here
    NEXT_PUBLIC_API_URL: z.string().url(),
  },

  /**
   * Destruct `process.env` manually for Next.js edge runtimes.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    // Map your client variable to the actual process.env value here
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  /**
   * Skip validation for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Treat empty strings as undefined.
   */
  emptyStringAsUndefined: true,
});
