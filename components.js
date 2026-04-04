window.snippetsMap = {};
window.componentsList = {};

function addComponent(category, name, demoHtml, snippetId, fullSnippet) {
  if (!window.componentsList[category]) window.componentsList[category] = [];
  window.componentsList[category].push({ name, demo: demoHtml, snippetId });
  window.snippetsMap[snippetId] = fullSnippet;
}

// ============================================================
// LOADERS
// ============================================================

// 1. DNA Helix
addComponent('Loaders', 'DNA Helix', `
<canvas id="dnaC" width="150" height="100" style="width:150px;height:100px"></canvas>
<script>(function(){const c=document.getElementById('dnaC');if(!c)return;const ctx=c.getContext('2d');let t=0;function draw(){ctx.clearRect(0,0,150,100);for(let i=0;i<20;i++){let x1=50+Math.sin(t+i*0.3)*20,y1=5+i*4.5,x2=100+Math.cos(t+i*0.3)*20,y2=5+i*4.5;ctx.beginPath();ctx.arc(x1,y1,3,0,Math.PI*2);ctx.fillStyle='#ff6b6b';ctx.fill();ctx.beginPath();ctx.arc(x2,y2,3,0,Math.PI*2);ctx.fillStyle='#00f5d4';ctx.fill();ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.strokeStyle='rgba(123,92,255,0.4)';ctx.lineWidth=1.5;ctx.stroke();}t+=0.08;requestAnimationFrame(draw);}draw();})();<\/script>
`, 'dnaLoader', `<canvas id="dnaC" width="150" height="100"></canvas>\n<script>(function(){const c=document.getElementById('dnaC');const ctx=c.getContext('2d');let t=0;function draw(){ctx.clearRect(0,0,150,100);for(let i=0;i<20;i++){let x1=50+Math.sin(t+i*0.3)*20,y1=5+i*4.5,x2=100+Math.cos(t+i*0.3)*20,y2=5+i*4.5;ctx.beginPath();ctx.arc(x1,y1,3,0,Math.PI*2);ctx.fillStyle='#ff6b6b';ctx.fill();ctx.beginPath();ctx.arc(x2,y2,3,0,Math.PI*2);ctx.fillStyle='#00f5d4';ctx.fill();ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.strokeStyle='rgba(123,92,255,0.4)';ctx.lineWidth=1.5;ctx.stroke();}t+=0.08;requestAnimationFrame(draw);}draw();})();<\/script>`);

// 2. Quantum Orbit
addComponent('Loaders', 'Quantum Orbit', `
<div style="position:relative;width:90px;height:90px;margin:0 auto;">
  <div style="position:absolute;inset:0;border-radius:50%;border:2px solid rgba(0,245,212,0.15);"></div>
  <div style="position:absolute;inset:12px;border-radius:50%;border:2px solid rgba(123,92,255,0.15);"></div>
  <div style="position:absolute;inset:24px;border-radius:50%;border:2px solid rgba(255,45,120,0.15);"></div>
  <div style="position:absolute;inset:0;border-radius:50%;border:2px solid transparent;border-top-color:#00f5d4;animation:qo1 1.2s linear infinite;"></div>
  <div style="position:absolute;inset:12px;border-radius:50%;border:2px solid transparent;border-top-color:#7b5cff;animation:qo2 0.9s linear infinite reverse;"></div>
  <div style="position:absolute;inset:24px;border-radius:50%;border:2px solid transparent;border-top-color:#ff2d78;animation:qo3 0.6s linear infinite;"></div>
  <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:8px;height:8px;border-radius:50%;background:#00f5d4;box-shadow:0 0 10px #00f5d4;"></div>
  <style>
    @keyframes qo1{to{transform:rotate(360deg)}}
    @keyframes qo2{to{transform:rotate(360deg)}}
    @keyframes qo3{to{transform:rotate(360deg)}}
  </style>
</div>
`, 'quantumOrbit', `<div style="position:relative;width:90px;height:90px;">\n  <div style="position:absolute;inset:0;border-radius:50%;border:2px solid transparent;border-top-color:#00f5d4;animation:qo1 1.2s linear infinite;"></div>\n  <div style="position:absolute;inset:12px;border-radius:50%;border:2px solid transparent;border-top-color:#7b5cff;animation:qo2 0.9s linear infinite reverse;"></div>\n  <div style="position:absolute;inset:24px;border-radius:50%;border:2px solid transparent;border-top-color:#ff2d78;animation:qo3 0.6s linear infinite;"></div>\n  <style>@keyframes qo1{to{transform:rotate(360deg)}}@keyframes qo2{to{transform:rotate(360deg)}}@keyframes qo3{to{transform:rotate(360deg)}}</style>\n</div>`);

// 3. Neon Bar Wave
addComponent('Loaders', 'Neon Bar Wave', `
<div style="display:flex;align-items:flex-end;gap:5px;height:50px;">
  <style>@keyframes nbw{0%,100%{height:6px;opacity:0.4}50%{height:40px;opacity:1}}</style>
  ${[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7].map((d,i)=>`<div style="width:7px;border-radius:4px;background:linear-gradient(to top,#ff2d78,#7b5cff);animation:nbw 1.2s ease-in-out ${d}s infinite;height:6px;box-shadow:0 0 8px #7b5cff;"></div>`).join('')}
</div>
`, 'neonBarWave', `<div style="display:flex;align-items:flex-end;gap:5px;height:50px;">\n  <style>@keyframes nbw{0%,100%{height:6px;opacity:0.4}50%{height:40px;opacity:1}}</style>\n  <div style="width:7px;border-radius:4px;background:linear-gradient(to top,#ff2d78,#7b5cff);animation:nbw 1.2s ease-in-out 0s infinite;height:6px;"></div>\n  <div style="width:7px;border-radius:4px;background:linear-gradient(to top,#ff2d78,#7b5cff);animation:nbw 1.2s ease-in-out 0.1s infinite;height:6px;"></div>\n  <div style="width:7px;border-radius:4px;background:linear-gradient(to top,#ff2d78,#7b5cff);animation:nbw 1.2s ease-in-out 0.2s infinite;height:6px;"></div>\n  <div style="width:7px;border-radius:4px;background:linear-gradient(to top,#ff2d78,#7b5cff);animation:nbw 1.2s ease-in-out 0.3s infinite;height:6px;"></div>\n  <div style="width:7px;border-radius:4px;background:linear-gradient(to top,#ff2d78,#7b5cff);animation:nbw 1.2s ease-in-out 0.4s infinite;height:6px;"></div>\n  <div style="width:7px;border-radius:4px;background:linear-gradient(to top,#ff2d78,#7b5cff);animation:nbw 1.2s ease-in-out 0.5s infinite;height:6px;"></div>\n  <div style="width:7px;border-radius:4px;background:linear-gradient(to top,#ff2d78,#7b5cff);animation:nbw 1.2s ease-in-out 0.6s infinite;height:6px;"></div>\n  <div style="width:7px;border-radius:4px;background:linear-gradient(to top,#ff2d78,#7b5cff);animation:nbw 1.2s ease-in-out 0.7s infinite;height:6px;"></div>\n</div>`);

// 4. Pixel Rain
addComponent('Loaders', 'Pixel Rain', `
<canvas id="pixRain" width="140" height="90" style="width:140px;height:90px;border-radius:8px;background:#000;"></canvas>
<script>(function(){const c=document.getElementById('pixRain');if(!c)return;const ctx=c.getContext('2d');const cols=Math.floor(140/7);const drops=Array(cols).fill(1);const chars='01アイウエオカキクケコ';const colors=['#00f5d4','#7b5cff','#ff2d78'];function draw(){ctx.fillStyle='rgba(0,0,0,0.12)';ctx.fillRect(0,0,140,90);drops.forEach((y,i)=>{const ch=chars[Math.floor(Math.random()*chars.length)];ctx.fillStyle=colors[i%3];ctx.font='7px monospace';ctx.fillText(ch,i*7,y*7);if(y*7>90&&Math.random()>0.97)drops[i]=0;drops[i]++;});}setInterval(draw,50);})();<\/script>
`, 'pixelRain', `<canvas id="pixRain" width="140" height="90" style="background:#000;border-radius:8px;"></canvas>\n<script>(function(){const c=document.getElementById('pixRain');const ctx=c.getContext('2d');const cols=Math.floor(140/7);const drops=Array(cols).fill(1);const chars='01アイウエオ';const colors=['#00f5d4','#7b5cff','#ff2d78'];function draw(){ctx.fillStyle='rgba(0,0,0,0.12)';ctx.fillRect(0,0,140,90);drops.forEach((y,i)=>{const ch=chars[Math.floor(Math.random()*chars.length)];ctx.fillStyle=colors[i%3];ctx.font='7px monospace';ctx.fillText(ch,i*7,y*7);if(y*7>90&&Math.random()>0.97)drops[i]=0;drops[i]++;});}setInterval(draw,50);})();<\/script>`);

// 5. Morphing Blob
addComponent('Loaders', 'Morphing Blob', `
<div style="display:flex;justify-content:center;align-items:center;height:90px;">
  <style>
    @keyframes blob1{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}}
  </style>
  <div style="width:70px;height:70px;background:linear-gradient(135deg,#00f5d4,#7b5cff,#ff2d78);animation:blob1 4s ease-in-out infinite;box-shadow:0 0 30px rgba(123,92,255,0.5);"></div>
</div>
`, 'morphBlob', `<style>@keyframes blob1{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}}</style>\n<div style="width:70px;height:70px;background:linear-gradient(135deg,#00f5d4,#7b5cff,#ff2d78);animation:blob1 4s ease-in-out infinite;box-shadow:0 0 30px rgba(123,92,255,0.5);"></div>`);

// 6. 3D Loading Text
addComponent('Loaders', '3D Loading Text', `
<style>
.wg{--d:2.1s;--c:#0000;--h:#00cc44;--cw:42px;--ch:42px;position:relative;display:grid;grid-template-columns:repeat(7,var(--cw));width:calc(7*var(--cw));height:var(--ch);perspective:300px;font-family:monospace;font-size:1.6em;font-weight:800;color:transparent;}
.cu{position:relative;transform-style:preserve-3d;}
.fa{position:absolute;display:flex;align-items:center;justify-content:center;width:var(--cw);height:var(--ch);background-color:var(--c);}
.fa-l,.fa-r,.fa-bk,.fa-fr{box-shadow:inset 0 0 2px 1px #0001,inset 0 0 12px 1px #fff1;}
.fa-fr{transform:rotateY(0deg) translateZ(calc(var(--cw)/2));}
.fa-bk{transform:rotateY(180deg) translateZ(calc(var(--cw)/2));opacity:.6;}
.fa-l{transform:rotateY(-90deg) translateZ(calc(var(--cw)/2));opacity:.6;}
.fa-r{transform:rotateY(90deg) translateZ(calc(var(--cw)/2));opacity:.6;}
.fa-t{height:var(--cw);transform:rotateX(90deg) translateZ(calc(var(--cw)/2));opacity:.8;}
.fa-b{height:var(--cw);transform:rotateX(-90deg) translateZ(calc(var(--ch) - var(--cw)*.5));opacity:.8;}
.cu:nth-child(1){animation-delay:0s}.cu:nth-child(2){animation-delay:.2s}.cu:nth-child(3){animation-delay:.4s}.cu:nth-child(4){animation-delay:.6s}.cu:nth-child(5){animation-delay:.8s}.cu:nth-child(6){animation-delay:1s}.cu:nth-child(7){animation-delay:1.2s}
.cu{animation:tzz var(--d) ease-in-out infinite;}
.cu .fa{animation:fcolor var(--d) ease-in-out infinite,eglow var(--d) ease-in-out infinite;animation-delay:inherit;}
.cu .fa.fa-fr{animation:fcolor var(--d) ease-in-out infinite,fglow var(--d) ease-in-out infinite,eglow var(--d) ease-in-out infinite;animation-delay:inherit;}
@keyframes tzz{0%,40%,100%{transform:translateZ(-2px)}30%{transform:translateZ(14px) translateY(-1px)}}
@keyframes fcolor{0%,50%,100%{background-color:var(--c)}10%{background-color:var(--h)}}
@keyframes fglow{0%,50%,100%{color:#fff0;filter:none}30%{color:#fff;filter:drop-shadow(0 12px 8px var(--h))}}
@keyframes eglow{0%,40%,100%{box-shadow:inset 0 0 2px 1px #0001,inset 0 0 12px 1px #fff1}30%{box-shadow:0 0 2px 0px var(--h)}}
</style>
<div class="wg">
  <div class="cu"><div class="fa fa-fr">L</div><div class="fa fa-bk"></div><div class="fa fa-r"></div><div class="fa fa-l"></div><div class="fa fa-t"></div><div class="fa fa-b"></div></div>
  <div class="cu"><div class="fa fa-fr">O</div><div class="fa fa-bk"></div><div class="fa fa-r"></div><div class="fa fa-l"></div><div class="fa fa-t"></div><div class="fa fa-b"></div></div>
  <div class="cu"><div class="fa fa-fr">A</div><div class="fa fa-bk"></div><div class="fa fa-r"></div><div class="fa fa-l"></div><div class="fa fa-t"></div><div class="fa fa-b"></div></div>
  <div class="cu"><div class="fa fa-fr">D</div><div class="fa fa-bk"></div><div class="fa fa-r"></div><div class="fa fa-l"></div><div class="fa fa-t"></div><div class="fa fa-b"></div></div>
  <div class="cu"><div class="fa fa-fr">I</div><div class="fa fa-bk"></div><div class="fa fa-r"></div><div class="fa fa-l"></div><div class="fa fa-t"></div><div class="fa fa-b"></div></div>
  <div class="cu"><div class="fa fa-fr">N</div><div class="fa fa-bk"></div><div class="fa fa-r"></div><div class="fa fa-l"></div><div class="fa fa-t"></div><div class="fa fa-b"></div></div>
  <div class="cu"><div class="fa fa-fr">G</div><div class="fa fa-bk"></div><div class="fa fa-r"></div><div class="fa fa-l"></div><div class="fa fa-t"></div><div class="fa fa-b"></div></div>
</div>
`, 'loading3d', `/* From anime.cutbar.in by iBneRasool */\n<!-- Copy full CSS from source -->\n<div class="wg">\n  <div class="cu"><div class="fa fa-fr">L</div></div>\n  <div class="cu"><div class="fa fa-fr">O</div></div>\n  <div class="cu"><div class="fa fa-fr">A</div></div>\n  <div class="cu"><div class="fa fa-fr">D</div></div>\n  <div class="cu"><div class="fa fa-fr">I</div></div>\n  <div class="cu"><div class="fa fa-fr">N</div></div>\n  <div class="cu"><div class="fa fa-fr">G</div></div>\n</div>`);

// 7. Heartbeat Line
addComponent('Loaders', 'Heartbeat Line', `
<canvas id="hbCanvas" width="180" height="60" style="width:180px;height:60px;"></canvas>
<script>(function(){const c=document.getElementById('hbCanvas');if(!c)return;const ctx=c.getContext('2d');const W=180,H=60;let offset=0;const pulse=[0,0,0,0,5,20,-10,25,-5,5,0,0,0,0,0,0,0,0,0,0];function draw(){ctx.clearRect(0,0,W,H);ctx.beginPath();ctx.strokeStyle='#ff2d78';ctx.lineWidth=2;ctx.shadowBlur=8;ctx.shadowColor='#ff2d78';let x=0;for(let i=0;i<W;i++){const idx=Math.floor((i+offset)%pulse.length);const y=H/2-pulse[idx];if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);x++;}ctx.stroke();offset=(offset+0.5)%pulse.length;requestAnimationFrame(draw);}draw();})();<\/script>
`, 'heartbeatLine', `<canvas id="hbCanvas" width="180" height="60"></canvas>\n<script>(function(){const c=document.getElementById('hbCanvas');const ctx=c.getContext('2d');const W=180,H=60;let offset=0;const pulse=[0,0,0,0,5,20,-10,25,-5,5,0,0,0,0,0,0,0,0,0,0];function draw(){ctx.clearRect(0,0,W,H);ctx.beginPath();ctx.strokeStyle='#ff2d78';ctx.lineWidth=2;ctx.shadowBlur=8;ctx.shadowColor='#ff2d78';let x=0;for(let i=0;i<W;i++){const idx=Math.floor((i+offset)%pulse.length);const y=H/2-pulse[idx];if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);x++;}ctx.stroke();offset=(offset+0.5)%pulse.length;requestAnimationFrame(draw);}draw();})();<\/script>`);

// 8. Terminal Loader
addComponent('Loaders', 'Terminal Loader', `
<style>
@keyframes blinkC{50%{border-right-color:transparent}}
@keyframes typeD{0%,10%{width:0}45%,55%{width:6.2em}90%,100%{width:0}}
.tl{border:.1em solid #333;background:#1a1a1a;color:#0f0;font-family:"Courier New",monospace;font-size:1em;padding:1.5em 1em;width:12em;border-radius:4px;position:relative;overflow:hidden;box-sizing:border-box;}
.tlh{position:absolute;top:0;left:0;right:0;height:1.5em;background:#333;border-radius:4px 4px 0 0;padding:0 .4em;box-sizing:border-box;}
.tlc{float:right}.tld{display:inline-block;width:.6em;height:.6em;margin-left:.4em;border-radius:50%;background:#777;}
.tld.cl{background:#e33}.tld.mn{background:#ee0}.tld.mx{background:#0b0}
.tlt{float:left;line-height:1.5em;color:#eee}
.txt{display:inline-block;white-space:nowrap;overflow:hidden;border-right:.2em solid green;animation:typeD 4s steps(11) infinite,blinkC .5s step-end infinite alternate;margin-top:1.5em;}
</style>
<div class="tl">
  <div class="tlh"><div class="tlt">Status</div><div class="tlc"><div class="tld cl"></div><div class="tld mn"></div><div class="tld mx"></div></div></div>
  <div class="txt">Loading...</div>
</div>
`, 'terminalLoader', `/* From anime.cutbar.in by iBneRasool */\n<div class="tl">\n  <div class="tlh">...</div>\n  <div class="txt">Loading...</div>\n</div>`);

// ============================================================
// BUTTONS
// ============================================================

// 9. Magnetic Repel Button
addComponent('Buttons', 'Magnetic Repel', `
<div style="padding:20px;display:flex;justify-content:center;">
<button id="magBtn" style="width:140px;height:48px;background:linear-gradient(135deg,#7b5cff,#00f5d4);border:none;border-radius:12px;color:#fff;font-weight:700;font-family:monospace;font-size:13px;cursor:pointer;transition:all 0.1s;position:relative;overflow:hidden;letter-spacing:1px;">⚡ MAGNETIC</button>
</div>
<script>(function(){const b=document.getElementById('magBtn');if(!b)return;b.addEventListener('mousemove',function(e){const r=b.getBoundingClientRect();const x=e.clientX-r.left-r.width/2;const y=e.clientY-r.top-r.height/2;b.style.transform='translate('+x*0.3+'px,'+y*0.3+'px) scale(1.05)';});b.addEventListener('mouseleave',function(){b.style.transform='translate(0,0) scale(1)';});})();<\/script>
`, 'magnetBtn', `<button id="magBtn" style="width:140px;height:48px;background:linear-gradient(135deg,#7b5cff,#00f5d4);border:none;border-radius:12px;color:#fff;font-weight:700;cursor:pointer;transition:all 0.1s;">⚡ MAGNETIC</button>\n<script>(function(){const b=document.getElementById('magBtn');b.addEventListener('mousemove',function(e){const r=b.getBoundingClientRect();const x=e.clientX-r.left-r.width/2;const y=e.clientY-r.top-r.height/2;b.style.transform='translate('+x*0.3+'px,'+y*0.3+'px) scale(1.05)';});b.addEventListener('mouseleave',function(){b.style.transform='translate(0,0) scale(1)';});})();<\/script>`);

// 10. Glitch Button
addComponent('Buttons', 'Glitch Button', `
<style>
@keyframes glitch1{0%,100%{clip-path:inset(40% 0 61% 0)}20%{clip-path:inset(92% 0 1% 0)}40%{clip-path:inset(43% 0 1% 0)}60%{clip-path:inset(25% 0 58% 0)}80%{clip-path:inset(54% 0 7% 0)}}
@keyframes glitch2{0%,100%{clip-path:inset(61% 0 40% 0);transform:translate(2px,0)}20%{clip-path:inset(1% 0 99% 0);transform:translate(-2px,0)}60%{clip-path:inset(58% 0 25% 0);transform:translate(2px,0)}}
.glitch-wrap{position:relative;display:inline-block;}
.gb{padding:12px 28px;background:#0d1120;border:2px solid #ff2d78;color:#ff2d78;font-family:monospace;font-size:14px;font-weight:700;letter-spacing:2px;cursor:pointer;position:relative;text-transform:uppercase;}
.gb::before,.gb::after{content:attr(data-text);position:absolute;top:0;left:0;width:100%;height:100%;padding:12px 28px;background:#0d1120;font-family:monospace;font-size:14px;font-weight:700;letter-spacing:2px;color:#ff2d78;opacity:0;}
.gb:hover::before{animation:glitch1 0.5s infinite;opacity:0.8;color:#00f5d4;border:none;}
.gb:hover::after{animation:glitch2 0.5s infinite;opacity:0.8;color:#7b5cff;border:none;}
.gb:hover{box-shadow:0 0 20px rgba(255,45,120,0.5),inset 0 0 20px rgba(255,45,120,0.05);}
</style>
<div class="glitch-wrap">
  <button class="gb" data-text="GLITCH">GLITCH</button>
</div>
`, 'glitchBtn', `<style>/* Add glitch1, glitch2 keyframes */\n.gb{padding:12px 28px;background:#0d1120;border:2px solid #ff2d78;color:#ff2d78;font-family:monospace;font-size:14px;font-weight:700;letter-spacing:2px;cursor:pointer;position:relative;text-transform:uppercase;}\n.gb::before,.gb::after{content:attr(data-text);position:absolute;top:0;left:0;width:100%;height:100%;padding:12px 28px;background:#0d1120;opacity:0;}\n.gb:hover::before{animation:glitch1 0.5s infinite;opacity:0.8;color:#00f5d4;}\n.gb:hover::after{animation:glitch2 0.5s infinite;opacity:0.8;color:#7b5cff;}\n</style>\n<button class="gb" data-text="GLITCH">GLITCH</button>`);

// 11. Liquid Fill Button
addComponent('Buttons', 'Liquid Fill', `
<style>
.liq-btn{position:relative;padding:12px 32px;border:2px solid #00f5d4;background:transparent;color:#00f5d4;font-family:monospace;font-size:13px;font-weight:700;letter-spacing:2px;cursor:pointer;overflow:hidden;transition:color 0.4s;}
.liq-btn::before{content:'';position:absolute;bottom:-100%;left:0;width:100%;height:100%;background:linear-gradient(135deg,#00f5d4,#7b5cff);transition:bottom 0.4s cubic-bezier(0.68,-0.55,0.265,1.55);}
.liq-btn:hover{color:#fff;}
.liq-btn:hover::before{bottom:0;}
.liq-btn span{position:relative;z-index:1;}
</style>
<button class="liq-btn"><span>LIQUID FILL</span></button>
`, 'liquidFillBtn', `<style>\n.liq-btn{position:relative;padding:12px 32px;border:2px solid #00f5d4;background:transparent;color:#00f5d4;font-family:monospace;font-size:13px;font-weight:700;cursor:pointer;overflow:hidden;transition:color 0.4s;}\n.liq-btn::before{content:'';position:absolute;bottom:-100%;left:0;width:100%;height:100%;background:linear-gradient(135deg,#00f5d4,#7b5cff);transition:bottom 0.4s cubic-bezier(0.68,-0.55,0.265,1.55);}\n.liq-btn:hover{color:#fff;}\n.liq-btn:hover::before{bottom:0;}\n.liq-btn span{position:relative;z-index:1;}\n</style>\n<button class="liq-btn"><span>LIQUID FILL</span></button>`);

// 12. Shatter Button
addComponent('Buttons', 'Shatter Burst', `
<div style="display:flex;justify-content:center;padding:20px;position:relative;">
<button id="shatterBtn" style="padding:12px 30px;background:linear-gradient(135deg,#ff2d78,#7b5cff);border:none;border-radius:10px;color:#fff;font-family:monospace;font-size:13px;font-weight:700;letter-spacing:1px;cursor:pointer;transition:transform 0.1s;position:relative;z-index:1;">💥 SHATTER</button>
</div>
<script>(function(){const b=document.getElementById('shatterBtn');if(!b)return;b.addEventListener('click',function(e){b.style.transform='scale(0.92)';setTimeout(()=>b.style.transform='scale(1)',120);const rect=b.getBoundingClientRect();const wrap=b.parentElement;for(let i=0;i<12;i++){const p=document.createElement('div');const angle=Math.random()*360;const dist=40+Math.random()*60;p.style.cssText='position:absolute;width:6px;height:6px;border-radius:50%;background:'+(['#ff2d78','#7b5cff','#00f5d4'][i%3])+';left:50%;top:50%;pointer-events:none;z-index:0;transition:all 0.6s ease-out;';wrap.appendChild(p);setTimeout(()=>{p.style.transform='translate('+Math.cos(angle*Math.PI/180)*dist+'px,'+Math.sin(angle*Math.PI/180)*dist+'px)';p.style.opacity='0';},10);setTimeout(()=>p.remove(),700);}})})();<\/script>
`, 'shatterBtn', `<button id="shatterBtn" style="padding:12px 30px;background:linear-gradient(135deg,#ff2d78,#7b5cff);border:none;border-radius:10px;color:#fff;font-family:monospace;cursor:pointer;">💥 SHATTER</button>\n<script>(function(){const b=document.getElementById('shatterBtn');b.addEventListener('click',function(){for(let i=0;i<12;i++){const p=document.createElement('div');const a=Math.random()*360;const d=40+Math.random()*60;p.style.cssText='position:fixed;width:6px;height:6px;border-radius:50%;background:#ff2d78;pointer-events:none;';document.body.appendChild(p);setTimeout(()=>{p.style.transform='translate('+Math.cos(a*Math.PI/180)*d+'px,'+Math.sin(a*Math.PI/180)*d+'px)';p.style.opacity='0';},10);setTimeout(()=>p.remove(),700);}});})();<\/script>`);

// 13. 3D Rotate Button
addComponent('Buttons', '3D Rotate', `
<button id="rot3d" style="width:130px;height:48px;background:linear-gradient(145deg,#ff6b6b,#ee5a5a);border:none;border-radius:12px;color:white;font-weight:bold;font-family:monospace;cursor:pointer;transition:all 0.15s;transform-style:preserve-3d;box-shadow:0 6px 0 #aa2e2e;font-size:13px;">🌀 ROTATE</button>
<script>(function(){const b=document.getElementById('rot3d');if(!b)return;b.addEventListener('mousedown',function(){this.style.transform='rotateX(20deg) rotateY(-10deg) translateY(4px)';this.style.boxShadow='0 2px 0 #aa2e2e';});b.addEventListener('mouseup',function(){this.style.transform='none';this.style.boxShadow='0 6px 0 #aa2e2e';});b.addEventListener('mouseleave',function(){this.style.transform='none';this.style.boxShadow='0 6px 0 #aa2e2e';});})();<\/script>
`, 'rot3dBtn', `<button id="rot3d" style="width:130px;height:48px;background:linear-gradient(145deg,#ff6b6b,#ee5a5a);border:none;border-radius:12px;color:white;font-weight:bold;cursor:pointer;transition:all 0.15s;transform-style:preserve-3d;box-shadow:0 6px 0 #aa2e2e;">🌀 ROTATE</button>\n<script>(function(){const b=document.getElementById('rot3d');b.addEventListener('mousedown',function(){this.style.transform='rotateX(20deg) rotateY(-10deg) translateY(4px)';this.style.boxShadow='0 2px 0 #aa2e2e';});b.addEventListener('mouseup',function(){this.style.transform='none';this.style.boxShadow='0 6px 0 #aa2e2e';});})();<\/script>`);

// 14. Stretch Button
addComponent('Buttons', 'Stretch Morph', `
<button id="stretchB" style="width:140px;height:48px;background:#00f5d4;border:none;border-radius:60px;color:#0d1120;font-weight:700;font-size:14px;cursor:pointer;transition:all 0.25s cubic-bezier(0.68,-0.55,0.265,1.55);font-family:monospace;letter-spacing:1px;">✨ STRETCH</button>
<script>(function(){const b=document.getElementById('stretchB');if(!b)return;b.addEventListener('mousedown',()=>{b.style.transform='scaleX(1.18) scaleY(0.85)';b.style.letterSpacing='6px';b.style.background='#ff2d78';b.style.color='#fff';});b.addEventListener('mouseup',()=>{b.style.transform='none';b.style.letterSpacing='1px';b.style.background='#00f5d4';b.style.color='#0d1120';});b.addEventListener('mouseleave',()=>{b.style.transform='none';b.style.letterSpacing='1px';b.style.background='#00f5d4';b.style.color='#0d1120';});})();<\/script>
`, 'stretchBtn2', `<button id="stretchB" style="width:140px;height:48px;background:#00f5d4;border:none;border-radius:60px;color:#0d1120;font-weight:700;cursor:pointer;transition:all 0.25s cubic-bezier(0.68,-0.55,0.265,1.55);font-family:monospace;">✨ STRETCH</button>\n<script>(function(){const b=document.getElementById('stretchB');b.addEventListener('mousedown',()=>{b.style.transform='scaleX(1.18) scaleY(0.85)';b.style.background='#ff2d78';b.style.color='#fff';});b.addEventListener('mouseup',()=>{b.style.transform='none';b.style.background='#00f5d4';b.style.color='#0d1120';});})();<\/script>`);

// 15. Ripple Button
addComponent('Buttons', 'Ripple Wave', `
<style>
.ripple-wrap{position:relative;display:inline-block;overflow:hidden;border-radius:10px;}
.ripple-btn{padding:13px 30px;background:linear-gradient(135deg,#7b5cff,#ff2d78);border:none;color:#fff;font-family:monospace;font-size:13px;font-weight:700;letter-spacing:1px;cursor:pointer;border-radius:10px;position:relative;overflow:hidden;}
.ripple-effect{position:absolute;border-radius:50%;background:rgba(255,255,255,0.3);transform:scale(0);animation:ripple-anim 0.6s linear;pointer-events:none;}
@keyframes ripple-anim{to{transform:scale(4);opacity:0}}
</style>
<div class="ripple-wrap">
<button class="ripple-btn" id="rippleBtn">🌊 RIPPLE</button>
</div>
<script>(function(){const b=document.getElementById('rippleBtn');if(!b)return;b.addEventListener('click',function(e){const r=b.getBoundingClientRect();const size=Math.max(b.clientWidth,b.clientHeight);const x=e.clientX-r.left-size/2;const y=e.clientY-r.top-size/2;const el=document.createElement('span');el.className='ripple-effect';el.style.cssText='width:'+size+'px;height:'+size+'px;left:'+x+'px;top:'+y+'px;';b.appendChild(el);setTimeout(()=>el.remove(),700);});})();<\/script>
`, 'rippleWaveBtn', `<style>\n.ripple-btn{padding:13px 30px;background:linear-gradient(135deg,#7b5cff,#ff2d78);border:none;color:#fff;font-family:monospace;cursor:pointer;border-radius:10px;position:relative;overflow:hidden;}\n.ripple-effect{position:absolute;border-radius:50%;background:rgba(255,255,255,0.3);transform:scale(0);animation:ripple-anim 0.6s linear;pointer-events:none;}\n@keyframes ripple-anim{to{transform:scale(4);opacity:0}}\n</style>\n<button class="ripple-btn" id="rippleBtn">🌊 RIPPLE</button>\n<script>(function(){const b=document.getElementById('rippleBtn');b.addEventListener('click',function(e){const r=b.getBoundingClientRect();const size=Math.max(b.clientWidth,b.clientHeight);const el=document.createElement('span');el.className='ripple-effect';el.style.cssText='width:'+size+'px;height:'+size+'px;left:'+(e.clientX-r.left-size/2)+'px;top:'+(e.clientY-r.top-size/2)+'px;';b.appendChild(el);setTimeout(()=>el.remove(),700);});})();<\/script>`);

// ============================================================
// SWITCHES
// ============================================================

// 16. Cyber Toggle
addComponent('Switches', 'Cyber Toggle', `
<style>
.cyw{display:inline-flex;flex-direction:column;align-items:center;position:relative;padding:15px;}
.cyc{position:absolute;opacity:0;width:0;height:0;}
.cyt{position:relative;display:inline-block;width:64px;height:32px;cursor:pointer;}
.cytr{position:absolute;top:0;left:0;width:100%;height:100%;background:#111;border-radius:16px;overflow:hidden;box-shadow:0 4px 8px rgba(0,0,0,0.5),inset 0 0 4px rgba(0,0,0,0.8);transition:all .4s;}
.cytr::before{content:"";position:absolute;inset:2px;border-radius:14px;background:#222;z-index:0;}
.cytg{position:absolute;inset:0;background:linear-gradient(90deg,#03e9f4,#4a00e0);opacity:0;border-radius:16px;z-index:1;transition:all .4s;}
.cyth{position:absolute;top:4px;left:4px;width:24px;height:24px;background:#151515;border-radius:50%;z-index:2;transition:all .4s cubic-bezier(.3,1.5,.7,1);box-shadow:0 2px 5px rgba(0,0,0,.4);}
.cytd{position:absolute;inset:0;display:flex;justify-content:flex-end;align-items:center;padding-right:10px;z-index:1;}
.cytdd{width:3px;height:3px;border-radius:50%;background:#444;margin-left:3px;opacity:.5;transition:all .4s;}
.cyl{display:flex;justify-content:space-between;width:100%;margin-top:8px;font-size:10px;font-weight:600;letter-spacing:1px;font-family:monospace;}
.cylo{color:#555;transition:all .4s;}.cyln{color:#555;transition:all .4s;}
.cyc:checked+.cyt .cytg{opacity:.5;}
.cyc:checked+.cyt .cyth{left:calc(100% - 28px);}
.cyc:checked+.cyt .cytdd{background:#03e9f4;box-shadow:0 0 4px #03e9f4;opacity:1;}
.cyc:checked~.cyl .cyln{color:#03e9f4;text-shadow:0 0 5px rgba(3,233,244,.5);}
.cyc:not(:checked)~.cyl .cylo{color:#aaa;}
</style>
<div class="cyw">
  <input class="cyc" id="cyberT" type="checkbox" checked/>
  <label class="cyt" for="cyberT">
    <div class="cytr"><div class="cytg"></div><div class="cytd"><span class="cytdd"></span><span class="cytdd"></span><span class="cytdd"></span></div></div>
    <div class="cyth"></div>
  </label>
  <div class="cyl"><span class="cylo">OFF</span><span class="cyln">ON</span></div>
</div>
`, 'cyberToggle2', `/* From anime.cutbar.in by iBneRasool */\n<!-- See full CSS on site -->\n<div class="cyw">\n  <input class="cyc" id="cyberT" type="checkbox"/>\n  <label class="cyt" for="cyberT">...</label>\n  <div class="cyl"><span class="cylo">OFF</span><span class="cyln">ON</span></div>\n</div>`);

// 17. Gesture Switch
addComponent('Switches', 'Gesture Switch', `
<div id="gsD" style="width:80px;height:80px;border-radius:50%;background:linear-gradient(145deg,#1a1a2e,#16213e);cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;transition:all 0.3s;">
  <div id="gsW" style="position:absolute;width:100%;height:100%;background:radial-gradient(circle,rgba(0,245,212,0.3),transparent);border-radius:50%;transform:scale(0);transition:transform 0.4s;"></div>
  <div style="font-size:32px;z-index:1;">✋</div>
</div>
<script>(function(){const d=document.getElementById('gsD');const w=document.getElementById('gsW');if(!d)return;let on=false;d.addEventListener('click',()=>{on=!on;if(on){d.style.background='linear-gradient(145deg,#00f5d4,#7b5cff)';d.style.boxShadow='0 0 24px rgba(0,245,212,0.5)';w.style.transform='scale(2)';setTimeout(()=>w.style.transform='scale(0)',400);}else{d.style.background='linear-gradient(145deg,#1a1a2e,#16213e)';d.style.boxShadow='none';}});})();<\/script>
`, 'gestureSwitch2', `<div id="gsD" style="width:80px;height:80px;border-radius:50%;background:linear-gradient(145deg,#1a1a2e,#16213e);cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">\n  <div id="gsW" style="position:absolute;width:100%;height:100%;background:radial-gradient(circle,rgba(0,245,212,0.3),transparent);border-radius:50%;transform:scale(0);transition:transform 0.4s;"></div>\n  <div style="font-size:32px;z-index:1;">✋</div>\n</div>\n<script>(function(){const d=document.getElementById('gsD');const w=document.getElementById('gsW');let on=false;d.addEventListener('click',()=>{on=!on;d.style.background=on?'linear-gradient(145deg,#00f5d4,#7b5cff)':'linear-gradient(145deg,#1a1a2e,#16213e)';if(on){w.style.transform='scale(2)';setTimeout(()=>w.style.transform='scale(0)',400);}});})();<\/script>`);

// 18. Neon Flip Switch
addComponent('Switches', 'Neon Flip', `
<style>
.nflip{position:relative;width:70px;height:34px;}
.nflip input{opacity:0;width:0;height:0;}
.nflip-track{position:absolute;inset:0;background:#1a1a2e;border-radius:17px;cursor:pointer;transition:.3s;border:2px solid #7b5cff;box-shadow:0 0 10px rgba(123,92,255,0.3);overflow:hidden;}
.nflip-track::before{content:'';position:absolute;top:2px;left:2px;width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#7b5cff,#ff2d78);transition:.4s cubic-bezier(.68,-0.55,.265,1.55);box-shadow:0 0 10px rgba(123,92,255,0.6);}
.nflip input:checked+.nflip-track{background:#0d1120;border-color:#00f5d4;box-shadow:0 0 14px rgba(0,245,212,0.4);}
.nflip input:checked+.nflip-track::before{transform:translateX(36px);background:linear-gradient(135deg,#00f5d4,#7b5cff);box-shadow:0 0 12px rgba(0,245,212,0.6);}
</style>
<label class="nflip">
  <input type="checkbox" checked>
  <div class="nflip-track"></div>
</label>
`, 'neonFlipSwitch', `<style>\n.nflip{position:relative;width:70px;height:34px;}\n.nflip input{opacity:0;width:0;height:0;}\n.nflip-track{position:absolute;inset:0;background:#1a1a2e;border-radius:17px;cursor:pointer;transition:.3s;border:2px solid #7b5cff;box-shadow:0 0 10px rgba(123,92,255,0.3);}\n.nflip-track::before{content:'';position:absolute;top:2px;left:2px;width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#7b5cff,#ff2d78);transition:.4s cubic-bezier(.68,-0.55,.265,1.55);}\n.nflip input:checked+.nflip-track{border-color:#00f5d4;}\n.nflip input:checked+.nflip-track::before{transform:translateX(36px);background:linear-gradient(135deg,#00f5d4,#7b5cff);}\n</style>\n<label class="nflip"><input type="checkbox"><div class="nflip-track"></div></label>`);

// 19. Power Button
addComponent('Switches', 'Power Button', `
<div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
<div id="powerBtn" style="width:72px;height:72px;border-radius:50%;background:#1a1a2e;border:3px solid #444;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.3s;position:relative;">
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2.5" stroke-linecap="round">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
    <line x1="12" y1="2" x2="12" y2="12"/>
  </svg>
</div>
<span id="powerLabel" style="font-family:monospace;font-size:11px;color:#555;letter-spacing:2px;">OFF</span>
</div>
<script>(function(){const b=document.getElementById('powerBtn');const l=document.getElementById('powerLabel');const svg=b.querySelector('svg');if(!b)return;let on=false;b.addEventListener('click',()=>{on=!on;if(on){b.style.border='3px solid #00f5d4';b.style.boxShadow='0 0 20px rgba(0,245,212,0.5),inset 0 0 20px rgba(0,245,212,0.05)';svg.setAttribute('stroke','#00f5d4');l.style.color='#00f5d4';l.textContent='ON';}else{b.style.border='3px solid #444';b.style.boxShadow='none';svg.setAttribute('stroke','#555');l.style.color='#555';l.textContent='OFF';}});})();<\/script>
`, 'powerBtn', `<div id="powerBtn" style="width:72px;height:72px;border-radius:50%;background:#1a1a2e;border:3px solid #444;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.3s;">\n  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2.5" stroke-linecap="round">\n    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>\n  </svg>\n</div>\n<script>(function(){const b=document.getElementById('powerBtn');const svg=b.querySelector('svg');let on=false;b.addEventListener('click',()=>{on=!on;b.style.border=on?'3px solid #00f5d4':'3px solid #444';b.style.boxShadow=on?'0 0 20px rgba(0,245,212,0.5)':'none';svg.setAttribute('stroke',on?'#00f5d4':'#555');});})();<\/script>`);

// 20. Sound Switch
addComponent('Switches', 'Sound Switch', `
<div id="soundD" style="width:80px;height:80px;border-radius:50%;background:#2d2d44;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 10px rgba(0,0,0,0.3);transition:all 0.3s;">
  <div>🎤</div>
  <div style="width:40px;height:4px;background:#555;border-radius:2px;margin-top:8px;overflow:hidden;">
    <div id="soundF" style="width:0%;height:100%;background:linear-gradient(90deg,#7b5cff,#ff2d78);transition:width 0.05s;"></div>
  </div>
</div>
<script>(function(){let s=null;const d=document.getElementById('soundD');const f=document.getElementById('soundF');async function init(){try{s=await navigator.mediaDevices.getUserMedia({audio:true});const ac=new(window.AudioContext||window.webkitAudioContext)();const src=ac.createMediaStreamSource(s);const an=ac.createAnalyser();an.fftSize=256;src.connect(an);const arr=new Uint8Array(an.frequencyBinCount);function tick(){an.getByteFrequencyData(arr);let avg=0;for(let i=0;i<arr.length;i++)avg+=arr[i];avg/=arr.length;f.style.width=(avg/255)*100+'%';if(avg>80){d.style.background='linear-gradient(135deg,#7b5cff,#ff2d78)';d.style.boxShadow='0 0 20px rgba(123,92,255,0.5)';}else{d.style.background='#2d2d44';d.style.boxShadow='0 4px 10px rgba(0,0,0,0.3)';}requestAnimationFrame(tick);}tick();}catch(e){console.log('mic needed');}}d.addEventListener('click',init);})();<\/script>
`, 'soundSwitch2', `<div id="soundD" style="width:80px;height:80px;border-radius:50%;background:#2d2d44;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;">\n  <div>🎤</div>\n  <div style="width:40px;height:4px;background:#555;border-radius:2px;margin-top:8px;overflow:hidden;">\n    <div id="soundF" style="width:0%;height:100%;background:linear-gradient(90deg,#7b5cff,#ff2d78);transition:width 0.05s;"></div>\n  </div>\n</div>`);

// ============================================================
// CARDS (NEW CATEGORY)
// ============================================================

// 21. Holographic Card
addComponent('Cards', 'Holographic Card', `
<style>
.holo{width:160px;height:100px;border-radius:12px;background:linear-gradient(135deg,#1a1a2e,#16213e);border:1px solid rgba(255,255,255,0.1);position:relative;overflow:hidden;cursor:pointer;transition:transform 0.1s;display:flex;align-items:center;justify-content:center;}
.holo::before{content:'';position:absolute;inset:-50%;background:conic-gradient(from 0deg,rgba(0,245,212,0.15),rgba(123,92,255,0.15),rgba(255,45,120,0.15),rgba(0,245,212,0.15));animation:holoSpin 6s linear infinite;border-radius:50%;}
.holo::after{content:'';position:absolute;inset:1px;background:#1a1a2e;border-radius:11px;}
.holo-content{position:relative;z-index:1;text-align:center;}
@keyframes holoSpin{to{transform:rotate(360deg)}}
</style>
<div class="holo" id="holoCard">
  <div class="holo-content">
    <div style="font-size:28px;">✦</div>
    <div style="font-family:monospace;font-size:11px;color:#aaa;margin-top:4px;">HOLOGRAPHIC</div>
  </div>
</div>
<script>(function(){const c=document.getElementById('holoCard');if(!c)return;c.addEventListener('mousemove',function(e){const r=c.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-0.5;const y=(e.clientY-r.top)/r.height-0.5;c.style.transform='perspective(600px) rotateY('+x*30+'deg) rotateX('+(-y*30)+'deg)';});c.addEventListener('mouseleave',()=>c.style.transform='none');})();<\/script>
`, 'holoCard', `<style>.holo{width:160px;height:100px;border-radius:12px;background:#1a1a2e;position:relative;overflow:hidden;cursor:pointer;}.holo::before{content:'';position:absolute;inset:-50%;background:conic-gradient(from 0deg,rgba(0,245,212,0.15),rgba(123,92,255,0.15),rgba(255,45,120,0.15),rgba(0,245,212,0.15));animation:holoSpin 6s linear infinite;border-radius:50%;}.holo::after{content:'';position:absolute;inset:1px;background:#1a1a2e;border-radius:11px;}@keyframes holoSpin{to{transform:rotate(360deg)}}</style>\n<div class="holo" id="holoCard"><div style="position:relative;z-index:1;text-align:center;"><div style="font-size:28px;">✦</div></div></div>\n<script>(function(){const c=document.getElementById('holoCard');c.addEventListener('mousemove',function(e){const r=c.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-0.5;const y=(e.clientY-r.top)/r.height-0.5;c.style.transform='perspective(600px) rotateY('+x*30+'deg) rotateX('+(-y*30)+'deg)';});c.addEventListener('mouseleave',()=>c.style.transform='none');})();<\/script>`);

// 22. Neon Stats Card
addComponent('Cards', 'Neon Stats Card', `
<style>
.nsc{width:180px;background:rgba(13,17,32,0.9);border:1px solid rgba(0,245,212,0.2);border-radius:12px;padding:14px;font-family:monospace;}
.nsc-title{font-size:9px;letter-spacing:2px;color:#556080;text-transform:uppercase;margin-bottom:10px;}
.nsc-val{font-size:26px;font-weight:700;background:linear-gradient(135deg,#00f5d4,#7b5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;}
.nsc-sub{font-size:9px;color:#00f5d4;margin-top:2px;}
.nsc-bar{height:3px;background:rgba(255,255,255,0.05);border-radius:2px;margin-top:10px;overflow:hidden;}
.nsc-fill{height:100%;background:linear-gradient(90deg,#00f5d4,#7b5cff);border-radius:2px;width:72%;animation:nscF 2s ease-out forwards;}
@keyframes nscF{from{width:0}}
</style>
<div class="nsc">
  <div class="nsc-title">Components Served</div>
  <div class="nsc-val">2.4M</div>
  <div class="nsc-sub">↑ 18% this week</div>
  <div class="nsc-bar"><div class="nsc-fill"></div></div>
</div>
`, 'neonStatsCard', `<style>.nsc{width:180px;background:rgba(13,17,32,0.9);border:1px solid rgba(0,245,212,0.2);border-radius:12px;padding:14px;font-family:monospace;}.nsc-val{font-size:26px;font-weight:700;background:linear-gradient(135deg,#00f5d4,#7b5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.nsc-bar{height:3px;background:rgba(255,255,255,0.05);border-radius:2px;margin-top:10px;overflow:hidden;}.nsc-fill{height:100%;background:linear-gradient(90deg,#00f5d4,#7b5cff);width:72%;}</style>\n<div class="nsc"><div class="nsc-title">Metric</div><div class="nsc-val">2.4M</div><div class="nsc-bar"><div class="nsc-fill"></div></div></div>`);

// 23. Glass Morphism Card
addComponent('Cards', 'Glassmorphism', `
<div style="background:linear-gradient(135deg,#7b5cff,#ff2d78);border-radius:16px;padding:3px;display:inline-block;">
  <div style="background:rgba(13,17,32,0.7);backdrop-filter:blur(20px);border-radius:14px;padding:20px 24px;min-width:160px;border:1px solid rgba(255,255,255,0.08);">
    <div style="font-family:monospace;font-size:9px;letter-spacing:2px;color:rgba(255,255,255,0.4);text-transform:uppercase;margin-bottom:8px;">Glass Card</div>
    <div style="font-size:20px;margin-bottom:4px;">🌌</div>
    <div style="font-family:monospace;font-size:11px;color:rgba(255,255,255,0.6);">Frosted glass effect with gradient border.</div>
  </div>
</div>
`, 'glassMorphCard', `<div style="background:linear-gradient(135deg,#7b5cff,#ff2d78);border-radius:16px;padding:3px;display:inline-block;">\n  <div style="background:rgba(13,17,32,0.7);backdrop-filter:blur(20px);border-radius:14px;padding:20px 24px;border:1px solid rgba(255,255,255,0.08);">\n    <div>Your content here</div>\n  </div>\n</div>`);

// ============================================================
// TEXT FX (NEW CATEGORY)
// ============================================================

// 24. Scramble Text
addComponent('Text FX', 'Text Scramble', `
<div id="scrambleEl" style="font-family:monospace;font-size:20px;font-weight:700;color:#00f5d4;min-width:160px;text-align:center;letter-spacing:2px;cursor:pointer;">HOVER ME</div>
<script>(function(){const el=document.getElementById('scrambleEl');if(!el)return;const chars='!<>-_\\/[]{}—=+*^?#';const original='SCRAMBLE';function scramble(){let iter=0;const interval=setInterval(()=>{el.innerText=original.split('').map((c,i)=>{if(i<iter)return original[i];return chars[Math.floor(Math.random()*chars.length)];}).join('');if(iter>=original.length)clearInterval(interval);iter+=0.4;},30);}el.addEventListener('mouseenter',scramble);el.addEventListener('click',scramble);})();<\/script>
`, 'scrambleText', `<div id="scrambleEl" style="font-family:monospace;font-size:20px;font-weight:700;color:#00f5d4;cursor:pointer;">HOVER ME</div>\n<script>(function(){const el=document.getElementById('scrambleEl');const chars='!<>-_\\/[]{}—=+*^?#';const original='SCRAMBLE';function scramble(){let iter=0;const interval=setInterval(()=>{el.innerText=original.split('').map((c,i)=>{if(i<iter)return original[i];return chars[Math.floor(Math.random()*chars.length)];}).join('');if(iter>=original.length)clearInterval(interval);iter+=0.4;},30);}el.addEventListener('mouseenter',scramble);})();<\/script>`);

// 25. Typewriter
addComponent('Text FX', 'Typewriter', `
<div style="font-family:monospace;font-size:16px;color:#e2e8f8;min-height:28px;">
  <span id="twEl" style="color:#7b5cff;font-weight:700;"></span><span style="border-right:2px solid #7b5cff;animation:twBlink 0.8s infinite;">&nbsp;</span>
</div>
<style>@keyframes twBlink{0%,100%{opacity:1}50%{opacity:0}}</style>
<script>(function(){const el=document.getElementById('twEl');if(!el)return;const words=['anime.cutbar.in','UI Components','Handcrafted Magic','Copy & Use!'];let wi=0,ci=0,del=false;function type(){if(!del){el.textContent=words[wi].substring(0,ci+1);ci++;if(ci===words[wi].length){del=true;setTimeout(()=>requestAnimationFrame(type),1200);return;}}else{el.textContent=words[wi].substring(0,ci-1);ci--;if(ci===0){del=false;wi=(wi+1)%words.length;}}requestAnimationFrame(()=>setTimeout(type,del?50:90));}type();})();<\/script>
`, 'typewriterFX', `<div style="font-family:monospace;font-size:16px;">\n  <span id="twEl" style="color:#7b5cff;font-weight:700;"></span>\n  <span style="border-right:2px solid #7b5cff;animation:twBlink 0.8s infinite;">&nbsp;</span>\n</div>\n<style>@keyframes twBlink{0%,100%{opacity:1}50%{opacity:0}}</style>\n<script>(function(){const el=document.getElementById('twEl');const words=['Type Here','Your Words','Go Wow!'];let wi=0,ci=0,del=false;function type(){if(!del){el.textContent=words[wi].substring(0,ci+1);ci++;if(ci===words[wi].length){del=true;setTimeout(()=>requestAnimationFrame(type),1200);return;}}else{el.textContent=words[wi].substring(0,ci-1);ci--;if(ci===0){del=false;wi=(wi+1)%words.length;}}requestAnimationFrame(()=>setTimeout(type,del?50:90));}type();})();<\/script>`);

// 26. Neon Glow Text
addComponent('Text FX', 'Neon Glow Text', `
<style>
@keyframes neonFlicker{0%,19%,21%,23%,25%,54%,56%,100%{text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #ff2d78,0 0 82px #ff2d78,0 0 92px #ff2d78;}20%,24%,55%{text-shadow:none;opacity:0.9;}}
.neon-text{font-family:'Orbitron',monospace,sans-serif;font-size:22px;font-weight:700;color:#fff;animation:neonFlicker 5s infinite;letter-spacing:3px;text-transform:uppercase;}
</style>
<div class="neon-text">NEON</div>
`, 'neonGlowText', `<style>\n@keyframes neonFlicker{0%,19%,21%,23%,25%,54%,56%,100%{text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #ff2d78,0 0 82px #ff2d78;}20%,24%,55%{text-shadow:none;opacity:0.9;}}\n.neon-text{font-family:monospace;font-size:22px;font-weight:700;color:#fff;animation:neonFlicker 5s infinite;letter-spacing:3px;}\n</style>\n<div class="neon-text">NEON</div>`);

console.log("✅ anime.cutbar.in components loaded — " + Object.values(window.componentsList).reduce((a,c)=>a+c.length,0) + " components across " + Object.keys(window.componentsList).length + " categories");
