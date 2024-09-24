
import { createClient } from '@supabase/supabase-js';
let process;
const supabaseUrl = "https://dfxnhuizxjfxugsonhcr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmeG5odWl6eGpmeHVnc29uaGNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0OTIyMDAsImV4cCI6MjA0MDA2ODIwMH0.1wXgpGu6AiH6ui_WRhap8oRLIcNXz7qADPwQdbROd6U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase