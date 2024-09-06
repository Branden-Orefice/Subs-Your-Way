import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://iiwmpwbdsfvaswnxdoyt.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpd21wd2Jkc2Z2YXN3bnhkb3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0MDg2NjEsImV4cCI6MjAzODk4NDY2MX0.HqLUS5k7DXdRqqwdkL4MVW1KedOiHD-RWYv8GFuDFAM"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;