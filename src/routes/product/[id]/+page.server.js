// src/routes/product/[id]/+page.server.js
import { supabase } from '$lib/server/supabase_client.js';

export async function load({ params }) {
  const { id } = params; // get the [id] from the URL

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single(); // fetch a single product by id

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    if (!data) {
      return {
        status: 404,
        error: new Error('Product not found')
      };
    }

    console.log('Fetched product:', data);
    return {
      product: data // return the product to the page
    };
  } catch (err) {
    console.error('Load function error:', err);
    throw err;
  }
}