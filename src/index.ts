export default {
  async fetch(request: Request) {
    try {
      const response = await fetch('https://raw.githubusercontent.com/ijbhxhu/pomodoro-timer/master/index.html');
      const htmlContent = await response.text();
      return new Response(htmlContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=3600'
        }
      });
    } catch (error) {
      return new Response('Failed to load HTML', { status: 500 });
    }
  }
};
