export default {
    async fetch(req) {
        return new Response('Cool World!', { status: 200 });
    }
};
