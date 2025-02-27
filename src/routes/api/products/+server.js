import { json } from '@sveltejs/kit';
import { supabase } from '$lib/server/supabase_client.js';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error) {
      console.error('Supabase error:', error);
      return json({ error: error.message }, { status: 500 });
    }

    return json(data, { status: 200 });
  } catch (err) {
    console.error('API error:', err);
    return json({ error: 'Internal Server Error' }, { status: 500 });
  }
}