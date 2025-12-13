const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>taoj - uptime</title>

<!-- Preconnect for faster font loading -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap" rel="stylesheet">

<style>
  * { 
    margin:0; 
    padding:0; 
    font-family: 'Special Gothic Expanded One', sans-serif; 
    transition: all 0.3s ease-in-out; 
    box-sizing: border-box;
  }
  
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  body { 
    width:100%; 
    height:100vh; 
    display:flex; 
    justify-content:center; 
    align-items:center; 
    background:#111; 
    color:#fff; 
    flex-direction: column;
    text-align: center;
    position: relative;
  }
  
  p { 
    margin: 10px 0; 
  }

  .date { 
    font-size: 2rem; 
  }
  
  .time { 
    font-size: 4rem; 
    letter-spacing: 0.2em; 
  }
  
  .logo { 
    position: absolute;
    top: 15px; 
    right: 20px; 
    height: calc(10vh + 10px);
    max-height: 80px;
    width: auto;
  }
  
  .topbar {
    position: absolute;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #FF9494, #9900ff, #FF9494);
    background-size: 200% 100%;
    animation: moveGradient 10s linear infinite;
  }

  @keyframes moveGradient {
    0% { background-position: 0% 0; }
    100% { background-position: 200% 0; }
  }

  #tb1 { top: 0; }
  #tb2 { top: calc(10vh + 40px); }

  /* Mobile Responsive Styles */
  @media (max-width: 768px) {
    .date { 
      font-size: 1.2rem;
      margin: 5px 0;
    }
    
    .time { 
      font-size: 2.5rem;
      letter-spacing: 0.1em;
    }
    
    .logo {
      height: calc(8vh + 5px);
      max-height: 65px;
      top: 12px;
      right: 15px;
    }
    
    #tb2 { 
      top: calc(8vh + 30px); 
    }
  }

  @media (max-width: 480px) {
    .date { 
      font-size: 0.9rem;
      margin: 5px 0;
    }
    
    .time { 
      font-size: 1.8rem;
      letter-spacing: 0.08em;
    }
    
    .logo {
      height: calc(6vh + 5px);
      max-height: 50px;
      top: 10px;
      right: 10px;
    }
    
    #tb2 { 
      top: calc(6vh + 20px); 
    }
  }

  @media (max-width: 360px) {
    .date { 
      font-size: 0.75rem;
    }
    
    .time { 
      font-size: 1.5rem;
      letter-spacing: 0.05em;
    }
    
    .logo {
      height: 5vh;
      max-height: 35px;
    }
  }
</style>

</head>
<body>

<div class="topbar" id="tb1"></div>
<div class="topbar" id="tb2"></div>
<img class="logo" alt="taoj" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE5MiIgaGVpZ2h0PSI0MzAiIHZpZXdCb3g9IjAgMCAxMTkyIDQzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkwIDE4NUM5MCAyMDkuODUzIDY5Ljg1MjggMjMwIDQ1IDIzMEMyMC4xNDcyIDIzMCAwIDIwOS44NTMgMCAxODVDMCAxNjAuMTQ3IDIwLjE0NzIgMTQwIDQ1IDE0MEM2OS44NTI4IDE0MCA5MCAxNjAuMTQ3IDkwIDE4NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNzAgMTg1QzI3MCAyMDkuODUzIDI0OS44NTMgMjMwIDIyNSAyMzBDMjAwLjE0NyAyMzAgMTgwIDIwOS44NTMgMTgwIDE4NUMxODAgMTYwLjE0NyAyMDAuMTQ3IDE0MCAyMjUgMTQwQzI0OS44NTMgMTQwIDI3MCAxNjAuMTQ3IDI3MCAxODVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDUgMTQwSDIyNVYyMzBINDVWMTQwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTkwIDE0MEgxODBWMzg1SDkwVjE0MFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMzUgNDMwVjM0MEgzODBWNDMwSDEzNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xODAgMzg1QzE4MCA0MDkuODUzIDE1OS44NTMgNDMwIDEzNSA0MzBDMTEwLjE0NyA0MzAgOTAgNDA5Ljg1MyA5MCAzODVDOTAgMzYwLjE0NyAxMTAuMTQ3IDM0MCAxMzUgMzQwQzE1OS44NTMgMzQwIDE4MCAzNjAuMTQ3IDE4MCAzODVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDI1IDM4NUM0MjUgNDA5Ljg1MyA0MDQuODUzIDQzMCAzODAgNDMwQzM1NS4xNDcgNDMwIDMzNSA0MDkuODUzIDMzNSAzODVDMzM1IDM2MC4xNDcgMzU1LjE0NyAzNDAgMzgwIDM0MEM0MDQuODUzIDM0MCA0MjUgMzYwLjE0NyA0MjUgMzg1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQxNC4yNDEgMjA3LjkxMUM0MDEuODE1IDIyOS40MzQgMzc0LjI5MyAyMzYuODA4IDM1Mi43NyAyMjQuMzgyQzMzMS4yNDcgMjExLjk1NSAzMjMuODczIDE4NC40MzQgMzM2LjI5OSAxNjIuOTExQzM0OC43MjUgMTQxLjM4NyAzNzYuMjQ3IDEzNC4wMTMgMzk3Ljc3IDE0Ni40MzlDNDE5LjI5MyAxNTguODY2IDQyNi42NjggMTg2LjM4NyA0MTQuMjQxIDIwNy45MTFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzM2LjIzIDE2Mi45NzJMNDE0LjE3MiAyMDcuOTcyTDI5MS42NzIgNDIwLjE0OUwyMTMuNzMgMzc1LjE0OUwzMzYuMjMgMTYyLjk3MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00MTMuNTM4IDE2MS42MDFDNDI1LjQ1MSAxODIuMjM1IDQxNy42NiAyMDkuMDM2IDM5Ni4xMzcgMjIxLjQ2M0MzNzQuNjE0IDIzMy44ODkgMzQ3LjUwOSAyMjcuMjM1IDMzNS41OTYgMjA2LjYwMUMzMjMuNjgyIDE4NS45NjcgMzMxLjQ3MyAxNTkuMTY2IDM1Mi45OTYgMTQ2Ljc0QzM3NC41MTkgMTM0LjMxNCA0MDEuNjI1IDE0MC45NjcgNDEzLjUzOCAxNjEuNjAxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMzNS42MTMgMjA2LjY4OUw0MTMuNTU1IDE2MS42ODlMNTMwLjk5NSAzNjUuMUw0NTMuMDUzIDQxMC4xTDMzNS42MTMgMjA2LjY4OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik01MzAuMzU3IDM2My44NjFDNTQyLjI3IDM4NC40OTUgNTM0LjQ4IDQxMS4yOTYgNTEyLjk1NyA0MjMuNzIzQzQ5MS40MzQgNDM2LjE0OSA0NjQuMzI4IDQyOS40OTUgNDUyLjQxNSA0MDguODYxQzQ0MC41MDIgMzg4LjIyNyA0NDguMjkyIDM2MS40MjYgNDY5LjgxNiAzNDlDNDkxLjMzOSAzMzYuNTc0IDUxOC40NDQgMzQzLjIyNyA1MzAuMzU3IDM2My44NjFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDg5IDM3OEg2MzlWNDMwSDQ4OVYzNzhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYzOSAxNDBDNzE5LjA4MSAxNDAgNzg0IDIwNC45MTkgNzg0IDI4NUM3ODQgMzY1LjA4MSA3MTkuMDgxIDQzMCA2MzkgNDMwQzU1OC45MTkgNDMwIDQ5NCAzNjUuMDgxIDQ5NCAyODVDNDk0IDIwNC45MTkgNTU4LjkxOSAxNDAgNjM5IDE0MFpNNjM5IDIzMEM2MDguNjI0IDIzMCA1ODQgMjU0LjYyNCA1ODQgMjg1QzU4NCAzMTUuMzc2IDYwOC42MjQgMzQwIDYzOSAzNDBDNjY5LjM3NiAzNDAgNjk0IDMxNS4zNzYgNjk0IDI4NUM2OTQgMjU0LjYyNCA2NjkuMzc2IDIzMCA2MzkgMjMwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEwNTQgMTg1QzEwNTQgMjA5Ljg1MyAxMDMzLjg1IDIzMCAxMDA5IDIzMEM5ODQuMTQ3IDIzMCA5NjQgMjA5Ljg1MyA5NjQgMTg1Qzk2NCAxNjAuMTQ3IDk4NC4xNDcgMTQwIDEwMDkgMTQwQzEwMzMuODUgMTQwIDEwNTQgMTYwLjE0NyAxMDU0IDE4NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik04NTQgMTg1Qzg1NCAyMDkuODUzIDgzMy44NTMgMjMwIDgwOSAyMzBDNzg0LjE0NyAyMzAgNzY0IDIwOS44NTMgNzY0IDE4NUM3NjQgMTYwLjE0NyA3ODQuMTQ3IDE0MCA4MDkgMTQwQzgzMy44NTMgMTQwIDg1NCAxNjAuMTQ3IDg1NCAxODVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNODExIDE0MEgxMDA5VjIzMEg4MTFWMTQwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTkwOSAxNDBDOTg5LjA4MSAxNDAgMTA1NCAyMDQuOTE5IDEwNTQgMjg1QzEwNTQgMzY1LjA4MSA5ODkuMDgxIDQzMCA5MDkgNDMwQzg0OC4zODcgNDMwIDc5Ni40NjEgMzkyLjgwOCA3NzQuNzk2IDM0MEg5MDlDOTM5LjM3NiAzNDAgOTY0IDMxNS4zNzYgOTY0IDI4NUM5NjQgMjU0LjYyNCA5MzkuMzc2IDIzMCA5MDkgMjMwSDgwOVYxODAuMDAxQzgzNS4wMTYgMTU1LjIxNiA4NzAuMjMxIDE0MCA5MDkgMTQwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTk3NSAxODRIMTA1NFYyODZIOTc1VjE4NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02MTkgMzQwSDkxNFY0MzBINjE5VjM0MFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMzEuNSAzMzkuODVDMjMxLjUgMzM5Ljk4OCAyMzEuMTY0IDM0MC4xIDIzMC43NSAzNDAuMUMyMzAuMzM2IDM0MC4xIDIzMCAzMzkuOTg4IDIzMCAzMzkuODVDMjMwIDMzOS43MTIgMjMwLjMzNiAzMzkuNiAyMzAuNzUgMzM5LjZDMjMxLjE2NCAzMzkuNiAyMzEuNSAzMzkuNzEyIDIzMS41IDMzOS44NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMzAgMzQwLjVMMjM2LjA2MiAzMzdMMjM3Ljc0OCAzMzkuOTJMMjMxLjY4NiAzNDMuNDJMMjMwIDM0MC41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIyOS44IDM0MEgyMzMuOFYzNDNIMjI5LjhWMzQwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTg0NC40NTkgMEgxMTM2LjU0VjExMC45MTdIODQ0LjQ1OVYwWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzlfOTgpIi8+CjxwYXRoIGQ9Ik0xMTc5LjY4IDU1LjQ1ODdDMTE3OS42OCA4Ni4wODc3IDExNTQuODUgMTEwLjkxNyAxMTI0LjIyIDExMC45MTdDMTA5My41OSAxMTAuOTE3IDEwNjguNzYgODYuMDg3NyAxMDY4Ljc2IDU1LjQ1ODdDMTA2OC43NiAyNC44Mjk3IDEwOTMuNTkgMCAxMTI0LjIyIDBDMTE1NC44NSAwIDExNzkuNjggMjQuODI5NyAxMTc5LjY4IDU1LjQ1ODdaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfOV85OCkiLz4KPHBhdGggZD0iTTg5OS45MTcgNTUuNDU4N0M4OTkuOTE3IDg2LjA4NzcgODc1LjA4OCAxMTAuOTE3IDg0NC40NTkgMTEwLjkxN0M4MTMuODMgMTEwLjkxNyA3ODkgODYuMDg3NyA3ODkgNTUuNDU4N0M3ODkgMjQuODI5NyA4MTMuODMgMCA4NDQuNDU5IDBDODc1LjA4OCAwIDg5OS45MTcgMjQuODI5NyA4OTkuOTE3IDU1LjQ1ODdaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfOV85OCkiLz4KPHBhdGggZD0iTTEwODEuNDggMzQ3Ljc0MlY1NS4yNTc3SDExOTJWMzQ3Ljc0MkgxMDgxLjQ4WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzlfOTgpIi8+CjxwYXRoIGQ9Ik0xMTM2Ljc0IDBDMTE2Ny4yNiAwIDExOTIgMjQuNzM5NyAxMTkyIDU1LjI1NzdDMTE5MiA4NS43NzU3IDExNjcuMjYgMTEwLjUxNSAxMTM2Ljc0IDExMC41MTVDMTEwNi4yMiAxMTAuNTE1IDEwODEuNDggODUuNzc1NyAxMDgxLjQ4IDU1LjI1NzdDMTA4MS40OCAyNC43Mzk3IDExMDYuMjIgMCAxMTM2Ljc0IDBaIiBmaWxsPSJ1cmwoI3BhaW50NF9saW5lYXJfOV85OCkiLz4KPHBhdGggZD0iTTExMzYuNzQgMjkyLjQ4NUMxMTY3LjI2IDI5Mi40ODUgMTE5MiAzMTcuMjI0IDExOTIgMzQ3Ljc0MkMxMTkyIDM3OC4yNiAxMTY3LjI2IDQwMyAxMTM2Ljc0IDQwM0MxMTA2LjIyIDQwMyAxMDgxLjQ4IDM3OC4yNiAxMDgxLjQ4IDM0Ny43NDJDMTA4MS40OCAzMTcuMjI0IDExMDYuMjIgMjkyLjQ4NSAxMTM2Ljc0IDI5Mi40ODVaIiBmaWxsPSJ1cmwoI3BhaW50NV9saW5lYXJfOV85OCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl85Xzk4IiB4MT0iMTE5MiIgeTE9Ii00Ljc5MjIxZS0wNSIgeDI9Ijk5MSIgeTI9IjIwMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY5NDk0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzczMDBGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfOV85OCIgeDE9IjExOTIiIHkxPSItNC43OTIyMWUtMDUiIHgyPSI5OTEiIHkyPSIyMDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGOTQ5NCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3MzAwRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzlfOTgiIHgxPSIxMTkyIiB5MT0iLTQuNzkyMjFlLTA1IiB4Mj0iOTkxIiB5Mj0iMjAyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjk0OTQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzMwMEZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhcl85Xzk4IiB4MT0iMTE5MiIgeTE9Ii00Ljc5MjIxZS0wNSIgeDI9Ijk5MSIgeTI9IjIwMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY5NDk0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzczMDBGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NF9saW5lYXJfOV85OCIgeDE9IjExOTIiIHkxPSItNC43OTIyMWUtMDUiIHgyPSI5OTEiIHkyPSIyMDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGOTQ5NCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3MzAwRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDVfbGluZWFyXzlfOTgiIHgxPSIxMTkyIiB5MT0iLTQuNzkyMjFlLTA1IiB4Mj0iOTkxIiB5Mj0iMjAyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjk0OTQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzMwMEZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" />

<p class="date" id="date">--</p>
<p class="time" id="time">-- : -- : --</p>

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

  document.getElementById('date').textContent = \`\${year} - \${month} - \${day} \${weekDay}\`;
  document.getElementById('time').textContent = \`\${hr} : \${min} : \${sec}\`;
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