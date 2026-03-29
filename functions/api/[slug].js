export async function onRequestGet(context) {
  const { env, params } = context;
  const slug = params.slug; 

  const { results } = await env.DB.prepare(
    "SELECT * FROM articles WHERE slug = ?"
  ).bind(slug).all();

  if (!results || results.length === 0) {
    return new Response("Article not found", { status: 404 });
  }

  return Response.json(results[0]);
}