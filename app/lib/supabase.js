import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://deiktzerxlhzqtldntrd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlaWt0emVyeGxoenF0bGRudHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NjAxNTMsImV4cCI6MjA5MjUzNjE1M30.pReVvKSw8f27I4VXfCZ-Mzx98Y3HcDMbQmUz5GqnoBI";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
