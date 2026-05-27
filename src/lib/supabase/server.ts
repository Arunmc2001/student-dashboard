import "server-only";
import { createClient } from "@supabase/supabase-js";

function requiredEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export function hasSupabaseEnv() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY);
}

function normalizeSupabaseUrl(raw: string) {
  // Common mistakes: quotes, trailing slashes, or pasting `/rest/v1` etc.
  let url = raw.trim().replace(/^['"]|['"]$/g, "");
  url = url.replace(/\/+$/g, "");
  url = url.replace(/\/rest\/v1$/i, "");
  url = url.replace(/\/auth\/v1$/i, "");
  url = url.replace(/\/storage\/v1$/i, "");
  return url;
}

export function supabaseServer() {
  const url = normalizeSupabaseUrl(requiredEnv("SUPABASE_URL"));
  const key = requiredEnv("SUPABASE_ANON_KEY");
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false }
  });
}

