export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const res = Response.redirect('https://opentuwa.com' + url.pathname + url.search, 302);
  const newRes = new Response(res.body, res);
  newRes.headers.set('Clear-Site-Data', '"cache", "cookies", "storage"');
  newRes.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  newRes.headers.set('Pragma', 'no-cache');
  newRes.headers.set('Expires', '0');
  return newRes;
}
