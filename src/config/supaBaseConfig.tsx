import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://cbhmmxdimjnvdnbczroa.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiaG1teGRpbWpudmRuYmN6cm9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MDQ2NzMsImV4cCI6MjAyNzM4MDY3M30.o2Q61YCu-bWJWq38lGopCTTEHd0a5oBfQqIJZ3U9kc8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { createClient };
