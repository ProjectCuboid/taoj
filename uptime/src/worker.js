export default {
    async fetch(req) {
        const url = 'https://raw.githubusercontent.com/ProjectCuboid/taoj/refs/heads/main/uptime/localhtml/index.html';
        const upstream = await fetch(url);
        const body = await upstream.text();
        const headers = new Headers(upstream.headers);
        headers.set('Content-Type', 'text/html; charset=utf-8');
        return new Response(body, { status: upstream.status, headers });
    }
};
