// FILE: src/infrastructure/storage/r2.client.js
import { S3Client } from "@aws-sdk/client-s3";
import { env } from "../../config/env.js";

export const r2Client = new S3Client({
  region: "auto",
  endpoint: env.R2_END_POINT,
  credentials: {
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
  },
});