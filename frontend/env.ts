import { config } from "dotenv";
import { ZodError, z } from "zod";

config({ path: ".env.local" });

const EnvSchema = z.object({
  AUTH_SECRET: z.string(),
  API_URL: z.string(),
});

try {
  EnvSchema.parse(process.env);
} catch (error) {
  if (error instanceof ZodError) {
    let message = "Missing required values in .env:\n";
    error.issues.forEach((issue) => {
      message += issue.path[0] + "\n";
    });
    const e = new Error(message);
    e.stack = "";
    throw e;
  } else {
    console.error(error);
  }
}

export type TEnv = z.infer<typeof EnvSchema>;

export default EnvSchema.parse(process.env);
