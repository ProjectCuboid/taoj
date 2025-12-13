export default {
  async fetch(req) {
    const url = 'https://raw.githubusercontent.com/ProjectCuboid/taoj/main/uptime/localhtml/index.html';
    const upstream = await fetch(url);
    const body = await upstream.text();
    return new Response(body, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};
