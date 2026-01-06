export default {
  async fetch(request: Request): Promise<Response> {
    return new Response('Pomodoro Timer Worker', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  },
};
