import { createClient } from '@supabase/supabase-js';
import { Database } from "@/types_db"
const supabaseUrl = "process.env.NEXT_PUBLIC_SUPABASE_URL";

const supabaseKey = "process.env.SUPABASE_SERVICE_ROLE_KEY";

const supabase = createClient<Database>(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  )

export default supabase;