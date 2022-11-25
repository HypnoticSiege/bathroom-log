require('dotenv').config();
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

supabase.auth.onAuthStateChange((event, session) => {
  //console.log(event, session)
})

export default supabase;