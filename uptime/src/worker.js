export default {
    async fetch(req) {
        return new Response('Hello World!', { status: 200 });
    }
};
