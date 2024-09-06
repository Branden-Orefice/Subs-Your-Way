import supabase from "./supabase";

export async function getSubs() {
  const { data, error } = await supabase
    .from('subs')
    .select('*')

  if (error) {
    console.log(error)
    throw new Error("Subs couldn't be rendered")
  }

  return data;
}

export async function getOrder(id) {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', id)
    .single();


  if (error) {
    console.log(error)
    throw new Error(`Failed to find order #${id}`)
  }

  return data;
}

export async function getCreatedOrder(order) {
  const { data: newOrder, error } = await supabase
    .from('orders')
    .insert([order])
    .select('id, cart, address, phone, customer')
    .single();

  if (error) {
    console.error(error);
    throw new Error('Failed creating your order');
  }

  if (!newOrder || newOrder.length === 0) {
    throw new Error('Failed creating your order');
  }
  return newOrder;
}
