import { supabase } from '../../../lib/supabase';

export async function POST(request) {
  const { name, email } = await request.json();

  const { data, error } = await supabase
    .from('User')
    .insert([{ name, email }])
    .select(); // Ensures data is returned

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  // Return the first user if available, otherwise return all data
  return new Response(JSON.stringify(data && data[0] ? data[0] : data), { status: 201 });
}


export async function GET() {
  const { data, error } = await supabase
    .from('User') // Your table name
    .select('*'); // Fetch all columns

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}