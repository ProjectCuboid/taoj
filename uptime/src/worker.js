const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>taoj - uptime</title>
<style>
  * { margin:0; padding:0; font-family:'Courier New', monospace; transition: all 0.3s ease-in-out; }
  body { width:100%; height:100vh; display:flex; justify-content:center; align-items:center; background:#111; color:#fff; }
  .clock { text-align:center; }
  .date { font-size:2rem; margin-bottom:10px; }
  .time { display:flex; justify-content:center; font-size:4rem; }
  .time div { width:60px; text-align:center; }
  .colon { width:20px; }
</style>
</head>
<body>

<div class="clock">
  <div class="date" id="date">--</div>
  <div class="time">
    <div id="hr">--</div>
    <div class="colon">:</div>
    <div id="min">--</div>
    <div class="colon">:</div>
    <div id="sec">--</div>
  </div>
</div>

<script>
function clock() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2,'0');
  const day = String(d.getDate()).padStart(2,'0');
  const weekDays = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const weekDay = weekDays[d.getDay()];
  const hr = String(d.getHours()).padStart(2,'0');
  const min = String(d.getMinutes()).padStart(2,'0');
  const sec = String(d.getSeconds()).padStart(2,'0');

  document.getElementById('date').textContent = \`\${year}-\${month}-\${day} \${weekDay}\`;
  document.getElementById('hr').textContent = hr;
  document.getElementById('min').textContent = min;
  document.getElementById('sec').textContent = sec;
}

clock();
setInterval(clock, 1000);
</script>

</body>
</html>`;

export default {
  async fetch() {
    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};
