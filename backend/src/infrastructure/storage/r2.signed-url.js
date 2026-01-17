// FILE: src/infrastructure/storage/r2.signed-url.js
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2Client } from "./r2.client.js";
import { env } from "../../config/env.js";

export async function requestSignedUploadUrl({ key, mimeType }) {
  const command = new PutObjectCommand({
    Bucket: env.R2_BUCKET_NAME,
    Key: key,
    ContentType: mimeType,
  });

  return getSignedUrl(r2Client, command, { expiresIn: 300 });
}
