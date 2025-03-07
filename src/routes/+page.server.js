// src/routes/+page.server.js
import { supabase } from '$lib/server/supabase_client.js';

export async function load() {
  try {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Supabase error:', error);
      throw error; // see details in the terminal
    }
    console.log('Fetched products:', data); // log successful data
    return {
      products: data ?? []
    };
  } catch (err) {
    console.error('Load function error:', err);
    throw err; // svelte handle the error
  }
}