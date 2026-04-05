window.snippetsMap={};
window.componentsList={};
let _uid=0;
function uid(){return 'cb'+(++_uid);}
function add(cat,name,fn,sid,snip){
  if(!window.componentsList[cat])window.componentsList[cat]=[];
  window.componentsList[cat].push({name,demo:fn,snippetId:sid});
  window.snippetsMap[sid]=snip||'/* See anime.cutbar.in for full source */';
}
// Helper: build demo HTML with unique IDs
function demo(fn){
  const id=uid();
  return fn(id);
}

/* ═══════════════════════════════════════════
   LOADERS  (12 components)
═══════════════════════════════════════════ */

// 1. Quantum Orbit — 3 rings, pure CSS, always works
add('Loaders','Quantum Orbit',demo(id=>`
<div style="position:relative;width:90px;height:90px;">
  <style>.qo-${id}>div{position:absolute;border-radius:50%;border:2px solid transparent;}
  @keyframes qo${id}a{to{transform:rotate(360deg)}}
  @keyframes qo${id}b{to{transform:rotate(-360deg)}}</style>
  <div class="qo-${id}">
    <div style="inset:0;border-top-color:#00f5d4;animation:qo${id}a 1.2s linear infinite;"></div>
    <div style="inset:12px;border-top-color:#7b5cff;animation:qo${id}b 0.9s linear infinite;"></div>
    <div style="inset:24px;border-top-color:#ff2d78;animation:qo${id}a 0.6s linear infinite;"></div>
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:8px;height:8px;border-radius:50%;background:#00f5d4;box-shadow:0 0 10px #00f5d4;"></div>
  </div>
</div>`),'quantumOrbit',`/* anime.cutbar.in */\n<style>/* see site for keyframes */</style>`);

// 2. Neon Bar Wave — pure CSS
add('Loaders','Neon Bar Wave',demo(id=>`
<div style="display:flex;align-items:flex-end;gap:5px;height:54px;">
  <style>@keyframes nbw${id}{0%,100%{height:6px;opacity:.35}50%{height:46px;opacity:1}}</style>
  ${[0,.12,.24,.36,.48,.6,.72,.84].map(d=>`<div style="width:8px;border-radius:4px;background:linear-gradient(to top,#ff2d78,#7b5cff,#00f5d4);animation:nbw${id} 1.3s ease-in-out ${d}s infinite;height:6px;box-shadow:0 0 6px #7b5cff44;"></div>`).join('')}
</div>`),'neonBarWave',`/* anime.cutbar.in */`);

// 3. DNA Helix — canvas
add('Loaders','DNA Helix',demo(id=>`
<canvas id="${id}" width="160" height="90" style="width:160px;height:90px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;const anim=()=>{ctx.clearRect(0,0,160,90);for(let i=0;i<22;i++){const p=t+i*.28;const x1=50+Math.sin(p)*22,y1=4+i*3.8,x2=110+Math.cos(p)*22,y2=4+i*3.8;ctx.beginPath();ctx.arc(x1,y1,3.5,0,6.28);ctx.fillStyle='#ff2d78';ctx.fill();ctx.beginPath();ctx.arc(x2,y2,3.5,0,6.28);ctx.fillStyle='#00f5d4';ctx.fill();ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.strokeStyle='rgba(123,92,255,.35)';ctx.lineWidth=1.5;ctx.stroke();}t+=.07;requestAnimationFrame(anim);};anim();})();<\/script>`),'dnaHelix',`/* anime.cutbar.in — canvas DNA animation */`);

// 4. Pixel Matrix Rain — canvas
add('Loaders','Matrix Rain',demo(id=>`
<canvas id="${id}" width="150" height="90" style="width:150px;height:90px;border-radius:8px;background:#000;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const W=150,H=90,sz=8;const cols=Math.floor(W/sz);const d=Array(cols).fill(1);const ch='01アウカ#@%';const cl=['#00f5d4','#7b5cff','#ff2d78'];function tick(){ctx.fillStyle='rgba(0,0,0,.13)';ctx.fillRect(0,0,W,H);d.forEach((y,i)=>{ctx.fillStyle=cl[i%3];ctx.font=sz+'px monospace';ctx.fillText(ch[Math.floor(Math.random()*ch.length)],i*sz,y*sz);if(y*sz>H&&Math.random()>.96)d[i]=0;d[i]++;});}setInterval(tick,55);})();<\/script>`),'matrixRain',`/* anime.cutbar.in — matrix rain canvas */`);

// 5. Morphing Blob — pure CSS
add('Loaders','Morphing Blob',demo(id=>`
<div style="display:flex;justify-content:center;align-items:center;height:90px;">
  <style>@keyframes bl${id}{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}25%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}50%{border-radius:40% 60% 30% 70%/40% 70% 60% 30%}75%{border-radius:70% 30% 50% 50%/30% 50% 70% 50%}}</style>
  <div style="width:72px;height:72px;background:linear-gradient(135deg,#00f5d4,#7b5cff,#ff2d78);animation:bl${id} 5s ease-in-out infinite;box-shadow:0 0 32px rgba(123,92,255,.5);"></div>
</div>`),'morphBlob',`/* anime.cutbar.in */`);

// 6. Heartbeat EKG — canvas
add('Loaders','Heartbeat EKG',demo(id=>`
<canvas id="${id}" width="180" height="60" style="width:180px;height:60px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const W=180,H=60;let off=0;const pulse=[0,0,0,0,2,8,20,-12,28,-6,4,2,0,0,0,0,0,0,0,0,0,0,0,0];function draw(){ctx.clearRect(0,0,W,H);ctx.beginPath();ctx.strokeStyle='#ff2d78';ctx.lineWidth=2.5;ctx.shadowBlur=10;ctx.shadowColor='#ff2d78';for(let i=0;i<W;i++){const v=pulse[Math.floor((i+off)%pulse.length)];const y=H/2-v*(H*.45)/28;if(i===0)ctx.moveTo(0,y);else ctx.lineTo(i,y);}ctx.stroke();off=(off+.6)%pulse.length;requestAnimationFrame(draw);}draw();})();<\/script>`),'heartbeatEKG',`/* anime.cutbar.in — EKG canvas */`);

// 7. Orbital Particles — canvas
add('Loaders','Orbital Particles',demo(id=>`
<canvas id="${id}" width="110" height="110" style="width:110px;height:110px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const cx=55,cy=55;const particles=[{r:38,speed:.025,angle:0,color:'#00f5d4',size:5},{r:28,speed:-.04,angle:2,color:'#7b5cff',size:4},{r:18,speed:.07,angle:4,color:'#ff2d78',size:3},{r:46,speed:.015,angle:1,color:'#ffaa00',size:4}];function draw(){ctx.clearRect(0,0,110,110);ctx.beginPath();ctx.arc(cx,cy,4,0,6.28);ctx.fillStyle='#fff';ctx.shadowBlur=12;ctx.shadowColor='#fff';ctx.fill();ctx.shadowBlur=0;particles.forEach(p=>{p.angle+=p.speed;const x=cx+Math.cos(p.angle)*p.r,y=cy+Math.sin(p.angle)*p.r;ctx.beginPath();ctx.arc(x,y,p.size,0,6.28);ctx.fillStyle=p.color;ctx.shadowBlur=10;ctx.shadowColor=p.color;ctx.fill();ctx.shadowBlur=0;});requestAnimationFrame(draw);}draw();})();<\/script>`),'orbitalParticles',`/* anime.cutbar.in — orbital particles */`);

// 8. Waveform — canvas
add('Loaders','Waveform',demo(id=>`
<canvas id="${id}" width="180" height="70" style="width:180px;height:70px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;function draw(){ctx.clearRect(0,0,180,70);const grad=ctx.createLinearGradient(0,0,180,0);grad.addColorStop(0,'#00f5d4');grad.addColorStop(.5,'#7b5cff');grad.addColorStop(1,'#ff2d78');ctx.strokeStyle=grad;ctx.lineWidth=2.5;ctx.shadowBlur=8;ctx.shadowColor='#7b5cff';ctx.beginPath();for(let x=0;x<180;x++){const y=35+Math.sin(x*.06+t)*16+Math.sin(x*.12+t*1.3)*8;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();t+=.06;requestAnimationFrame(draw);}draw();})();<\/script>`),'waveformLoader',`/* anime.cutbar.in — waveform canvas */`);

// 9. Gravity Balls — canvas physics
add('Loaders','Gravity Balls',demo(id=>`
<canvas id="${id}" width="160" height="90" style="width:160px;height:90px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const W=160,H=90;const balls=[{x:30,y:30,vx:2,vy:0,r:10,col:'#00f5d4'},{x:80,y:20,vx:-1.5,vy:1,r:8,col:'#7b5cff'},{x:130,y:40,vx:-2,vy:.5,r:9,col:'#ff2d78'},{x:60,y:60,vx:1,vy:-1.5,r:7,col:'#ffaa00'}];const G=0.3;function tick(){ctx.clearRect(0,0,W,H);balls.forEach(b=>{b.vy+=G*.15;b.x+=b.vx;b.y+=b.vy;if(b.x<b.r||b.x>W-b.r)b.vx*=-.92;if(b.y<b.r){b.vy*=-.8;b.y=b.r;}if(b.y>H-b.r){b.vy*=-.82;b.y=H-b.r;}ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,6.28);ctx.fillStyle=b.col;ctx.shadowBlur=14;ctx.shadowColor=b.col;ctx.fill();ctx.shadowBlur=0;});requestAnimationFrame(tick);}tick();})();<\/script>`),'gravityBalls',`/* anime.cutbar.in — physics gravity */`);

// 10. Clock Loader — pure CSS
add('Loaders','Precision Clock',demo(id=>`
<div id="${id}" style="width:80px;height:80px;border-radius:50%;background:#0d1120;position:relative;box-shadow:0 0 20px rgba(0,245,212,.2),inset 0 0 20px rgba(0,0,0,.5);border:2px solid rgba(0,245,212,.2);">
  <div id="${id}m" style="position:absolute;bottom:50%;left:calc(50% - 1.5px);width:3px;height:28px;background:linear-gradient(to top,#00f5d4,#7b5cff);transform-origin:50% 100%;border-radius:3px;transform:rotate(0deg);"></div>
  <div id="${id}h" style="position:absolute;bottom:50%;left:calc(50% - 2px);width:4px;height:18px;background:#ff2d78;transform-origin:50% 100%;border-radius:3px;"></div>
  <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:7px;height:7px;background:#fff;border-radius:50%;z-index:2;"></div>
</div>
<script>(function(){let a=0;const m=document.getElementById('${id}m'),h=document.getElementById('${id}h');if(!m)return;setInterval(()=>{a=(a+6)%360;m.style.transform='rotate('+a+'deg)';h.style.transform='rotate('+a/12+'deg)';},50);})();<\/script>`),'clockLoader',`/* anime.cutbar.in — clock loader */`);

// 11. Fibonacci Spiral — canvas
add('Loaders','Fibonacci Spiral',demo(id=>`
<canvas id="${id}" width="120" height="120" style="width:120px;height:120px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;const phi=(1+Math.sqrt(5))/2;function draw(){ctx.clearRect(0,0,120,120);ctx.save();ctx.translate(60,60);const grad=ctx.createLinearGradient(-50,-50,50,50);grad.addColorStop(0,'#00f5d4');grad.addColorStop(.5,'#7b5cff');grad.addColorStop(1,'#ff2d78');ctx.strokeStyle=grad;ctx.lineWidth=2;ctx.shadowBlur=6;ctx.shadowColor='#7b5cff';ctx.beginPath();for(let i=0;i<300;i++){const angle=i*0.1+t;const r=2*Math.pow(phi,angle/(2*Math.PI));const x=r*Math.cos(angle),y=r*Math.sin(angle);if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();ctx.restore();t+=0.018;requestAnimationFrame(draw);}draw();})();<\/script>`),'fibSpiral',`/* anime.cutbar.in — fibonacci spiral */`);

// 12. Terminal Loader — pure CSS
add('Loaders','Terminal',demo(id=>`
<div style="background:#0a0a0a;border:1px solid #333;border-radius:6px;padding:0;width:170px;font-family:monospace;overflow:hidden;">
  <div style="background:#1a1a1a;padding:6px 8px;display:flex;gap:5px;align-items:center;">
    <div style="width:8px;height:8px;border-radius:50%;background:#ff5f57;"></div>
    <div style="width:8px;height:8px;border-radius:50%;background:#febc2e;"></div>
    <div style="width:8px;height:8px;border-radius:50%;background:#28c840;"></div>
    <span style="font-size:8px;color:#666;margin-left:4px;">status.sh</span>
  </div>
  <div style="padding:10px;color:#0f0;font-size:11px;">
    <style>@keyframes tc${id}{50%{border-color:transparent}}@keyframes tw${id}{0%,10%{width:0}45%,55%{width:10ch}90%,100%{width:0}}</style>
    <div style="overflow:hidden;white-space:nowrap;border-right:2px solid #0f0;width:0;animation:tw${id} 4s steps(10) infinite,tc${id} .5s step-end infinite;">Loading...</div>
  </div>
</div>`),'terminalLoader',`/* anime.cutbar.in — terminal */`);

/* ═══════════════════════════════════════════
   BUTTONS  (12 components)
═══════════════════════════════════════════ */

// 13. Magnetic Repel
add('Buttons','Magnetic Repel',demo(id=>`
<div style="padding:16px;display:flex;justify-content:center;">
<button id="${id}" style="padding:12px 28px;background:linear-gradient(135deg,#7b5cff,#00f5d4);border:none;border-radius:12px;color:#fff;font-weight:700;font-family:'Space Mono',monospace;font-size:12px;cursor:pointer;transition:transform .12s;letter-spacing:1px;box-shadow:0 4px 20px rgba(123,92,255,.4);">⚡ MAGNETIC</button>
</div>
<script>(function(){const b=document.getElementById('${id}');if(!b)return;b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.35,y=(e.clientY-r.top-r.height/2)*.35;b.style.transform='translate('+x+'px,'+y+'px) scale(1.06)';});b.addEventListener('mouseleave',()=>b.style.transform='translate(0,0) scale(1)');})();<\/script>`),'magnetBtn',`/* anime.cutbar.in — magnetic repel */`);

// 14. Glitch Button — pure CSS
add('Buttons','Glitch',demo(id=>`
<style>
@keyframes g1${id}{0%,100%{clip-path:inset(40% 0 61% 0)}20%{clip-path:inset(92% 0 1% 0)}40%{clip-path:inset(43% 0 1% 0)}60%{clip-path:inset(25% 0 58% 0)}80%{clip-path:inset(54% 0 7% 0)}}
@keyframes g2${id}{0%,100%{clip-path:inset(61% 0 40% 0);transform:translate(3px,0)}25%{clip-path:inset(1% 0 99% 0);transform:translate(-3px,0)}60%{clip-path:inset(58% 0 25% 0)}}</style>
<div style="position:relative;display:inline-block;">
  <button id="${id}" data-t="GLITCH" style="padding:12px 28px;background:#070b16;border:2px solid #ff2d78;color:#ff2d78;font-family:monospace;font-size:14px;font-weight:700;letter-spacing:3px;cursor:pointer;position:relative;text-transform:uppercase;">GLITCH
    <span style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#070b16;color:#00f5d4;opacity:0;clip-path:inset(0);pointer-events:none;" class="ga${id}">GLITCH</span>
    <span style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#070b16;color:#7b5cff;opacity:0;clip-path:inset(0);pointer-events:none;" class="gb${id}">GLITCH</span>
  </button>
</div>
<script>(function(){const b=document.getElementById('${id}');if(!b)return;const [a,c]=[...b.querySelectorAll('span')];b.addEventListener('mouseenter',()=>{a.style.opacity='1';a.style.animation='g1${id} .5s infinite';c.style.opacity='1';c.style.animation='g2${id} .5s infinite';b.style.boxShadow='0 0 20px rgba(255,45,120,.5)';});b.addEventListener('mouseleave',()=>{a.style.opacity='0';c.style.opacity='0';a.style.animation='none';c.style.animation='none';b.style.boxShadow='none';});})();<\/script>`),'glitchBtn',`/* anime.cutbar.in — glitch button */`);

// 15. Liquid Fill — pure CSS
add('Buttons','Liquid Fill',demo(id=>`
<style>.lf${id}{position:relative;padding:13px 32px;border:2px solid #00f5d4;background:transparent;color:#00f5d4;font-family:monospace;font-size:13px;font-weight:700;letter-spacing:2px;cursor:pointer;overflow:hidden;transition:color .4s;text-transform:uppercase;}.lf${id}::before{content:'';position:absolute;bottom:-100%;left:0;width:100%;height:100%;background:linear-gradient(135deg,#00f5d4,#7b5cff);transition:bottom .45s cubic-bezier(.68,-.55,.265,1.55);z-index:0;}.lf${id}:hover{color:#fff;}.lf${id}:hover::before{bottom:0;}.lf${id} span{position:relative;z-index:1;}</style>
<button class="lf${id}"><span>LIQUID FILL</span></button>`),'liquidFill',`/* anime.cutbar.in — liquid fill button */`);

// 16. Shatter Burst
add('Buttons','Shatter Burst',demo(id=>`
<div style="display:flex;justify-content:center;padding:16px;position:relative;">
<button id="${id}" style="padding:12px 28px;background:linear-gradient(135deg,#ff2d78,#7b5cff);border:none;border-radius:10px;color:#fff;font-family:monospace;font-size:13px;font-weight:700;letter-spacing:1px;cursor:pointer;transition:transform .1s;z-index:1;position:relative;">💥 SHATTER</button>
</div>
<script>(function(){const b=document.getElementById('${id}');if(!b)return;b.addEventListener('click',function(){b.style.transform='scale(.9)';setTimeout(()=>b.style.transform='scale(1)',120);const wrap=b.parentElement;for(let i=0;i<14;i++){const p=document.createElement('div');const a=Math.random()*360,d=35+Math.random()*55;p.style.cssText='position:absolute;width:7px;height:7px;border-radius:50%;background:'+['#ff2d78','#7b5cff','#00f5d4','#ffaa00'][i%4]+';left:50%;top:50%;pointer-events:none;transition:all .6s ease-out;z-index:0;';wrap.appendChild(p);setTimeout(()=>{p.style.transform='translate('+Math.cos(a*Math.PI/180)*d+'px,'+Math.sin(a*Math.PI/180)*d+'px)';p.style.opacity='0';},10);setTimeout(()=>p.remove(),700);}});})();<\/script>`),'shatterBurst',`/* anime.cutbar.in — shatter burst */`);

// 17. Ripple Wave — pure CSS + JS
add('Buttons','Ripple Wave',demo(id=>`
<style>.rw${id}{padding:13px 30px;background:linear-gradient(135deg,#7b5cff,#ff2d78);border:none;color:#fff;font-family:monospace;font-size:13px;font-weight:700;letter-spacing:1px;cursor:pointer;border-radius:10px;position:relative;overflow:hidden;}.rp${id}{position:absolute;border-radius:50%;background:rgba(255,255,255,.28);transform:scale(0);animation:rpa${id} .65s linear;pointer-events:none;}@keyframes rpa${id}{to{transform:scale(4);opacity:0;}}</style>
<button class="rw${id}" id="${id}">🌊 RIPPLE</button>
<script>(function(){const b=document.getElementById('${id}');if(!b)return;b.addEventListener('click',e=>{const r=b.getBoundingClientRect(),sz=Math.max(b.clientWidth,b.clientHeight);const el=document.createElement('span');el.className='rp${id}';el.style.cssText='width:'+sz+'px;height:'+sz+'px;left:'+(e.clientX-r.left-sz/2)+'px;top:'+(e.clientY-r.top-sz/2)+'px;';b.appendChild(el);setTimeout(()=>el.remove(),700);});})();<\/script>`),'rippleWave',`/* anime.cutbar.in — ripple wave */`);

// 18. Gaming Button — 3D press
add('Buttons','Gaming 3D Press',demo(id=>`
<div style="display:flex;justify-content:center;align-items:center;height:70px;">
<button id="${id}" style="padding:0;border:none;background:none;cursor:pointer;transform-style:preserve-3d;position:relative;height:44px;">
  <span style="display:block;padding:12px 28px;background:linear-gradient(135deg,#ff2d78,#7b5cff);border-radius:10px;color:#fff;font-family:monospace;font-size:13px;font-weight:700;letter-spacing:1px;transform:translateZ(0);transition:transform .1s;position:relative;z-index:1;line-height:1;">🎮 PRESS</span>
  <span style="display:block;position:absolute;inset:0;background:#6c0033;border-radius:10px;transform:translateZ(-8px) translateY(8px);z-index:0;"></span>
</button>
</div>
<script>(function(){const b=document.getElementById('${id}');if(!b)return;const top=b.querySelector('span');b.addEventListener('mousedown',()=>top.style.transform='translateZ(-6px) translateY(6px)');b.addEventListener('mouseup',()=>top.style.transform='translateZ(0)');b.addEventListener('mouseleave',()=>top.style.transform='translateZ(0)');})();<\/script>`),'gaming3dBtn',`/* anime.cutbar.in — 3D gaming button */`);

// 19. Neon Outline — hover fill
add('Buttons','Neon Outline',demo(id=>`
<style>.no${id}{padding:12px 28px;background:transparent;border:2px solid var(--accent,#00f5d4);color:var(--accent,#00f5d4);font-family:monospace;font-size:12px;font-weight:700;letter-spacing:2px;cursor:pointer;border-radius:8px;transition:all .3s;text-transform:uppercase;position:relative;overflow:hidden;}.no${id}::before{content:'';position:absolute;inset:0;background:var(--accent,#00f5d4);transform:scaleX(0);transform-origin:right;transition:transform .3s ease;z-index:0;}.no${id}:hover::before{transform:scaleX(1);transform-origin:left;}.no${id}:hover{color:#0d1120;box-shadow:0 0 24px rgba(0,245,212,.4);}.no${id} span{position:relative;z-index:1;}</style>
<button class="no${id}"><span>NEON OUTLINE</span></button>`),'neonOutlineBtn',`/* anime.cutbar.in — neon outline */`);

// 20. Science Formula Button — unique
add('Buttons','Schrödinger',demo(id=>`
<div style="display:flex;justify-content:center;align-items:center;height:80px;">
<button id="${id}" style="padding:10px 20px;background:rgba(0,0,0,.4);border:1px solid rgba(0,245,212,.4);border-radius:8px;color:#00f5d4;font-family:monospace;font-size:11px;cursor:pointer;transition:all .3s;position:relative;overflow:hidden;letter-spacing:1px;">
  <span id="${id}t" style="display:block;transition:opacity .3s;">Ψ = Σ cₙφₙ</span>
  <span id="${id}s" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s;font-size:9px;">WAVE COLLAPSED</span>
</button>
</div>
<script>(function(){const b=document.getElementById('${id}'),t=document.getElementById('${id}t'),s=document.getElementById('${id}s');if(!b)return;let obs=false;b.addEventListener('click',()=>{obs=!obs;if(obs){t.style.opacity='0';s.style.opacity='1';b.style.borderColor='#ff2d78';b.style.color='#ff2d78';b.style.boxShadow='0 0 20px rgba(255,45,120,.4)';}else{t.style.opacity='1';s.style.opacity='0';b.style.borderColor='rgba(0,245,212,.4)';b.style.color='#00f5d4';b.style.boxShadow='none';}});})();<\/script>`),'schrodingerBtn',`/* anime.cutbar.in — schrödinger quantum button */`);

// 21. Countdown Button
add('Buttons','Countdown Launch',demo(id=>`
<div style="display:flex;justify-content:center;padding:10px;">
<button id="${id}" style="padding:12px 24px;background:linear-gradient(135deg,#0d1120,#1a1a2e);border:2px solid #ff2d78;border-radius:10px;color:#ff2d78;font-family:monospace;font-size:13px;font-weight:700;cursor:pointer;transition:all .2s;min-width:140px;">🚀 LAUNCH</button>
</div>
<script>(function(){const b=document.getElementById('${id}');if(!b)return;let running=false;b.addEventListener('click',()=>{if(running)return;running=true;let n=3;b.disabled=true;b.style.background='linear-gradient(135deg,#2a0010,#1a1a2e)';const interval=setInterval(()=>{b.textContent=n>0?'T-'+n+'...':'🚀 LIFTOFF!';b.style.transform=n>0?'scale('+(1+(3-n)*.05)+')':'scale(1)';if(n===0){b.style.borderColor='#00f5d4';b.style.color='#00f5d4';clearInterval(interval);setTimeout(()=>{b.textContent='🚀 LAUNCH';b.style.transform='';b.style.borderColor='#ff2d78';b.style.color='#ff2d78';b.style.background='linear-gradient(135deg,#0d1120,#1a1a2e)';b.disabled=false;running=false;},1500);}n--;},700);});})();<\/script>`),'countdownBtn',`/* anime.cutbar.in — countdown launch */`);

// 22. Stretch Morph
add('Buttons','Stretch Morph',demo(id=>`
<div style="display:flex;justify-content:center;padding:12px;">
<button id="${id}" style="width:140px;height:46px;background:#00f5d4;border:none;border-radius:60px;color:#0a0e1a;font-weight:700;font-size:13px;cursor:pointer;transition:all .25s cubic-bezier(.68,-.55,.265,1.55);font-family:monospace;letter-spacing:1px;">✨ STRETCH</button>
</div>
<script>(function(){const b=document.getElementById('${id}');if(!b)return;b.addEventListener('mousedown',()=>{b.style.transform='scaleX(1.2) scaleY(.82)';b.style.letterSpacing='6px';b.style.background='#ff2d78';b.style.color='#fff';});['mouseup','mouseleave'].forEach(e=>b.addEventListener(e,()=>{b.style.transform='none';b.style.letterSpacing='1px';b.style.background='#00f5d4';b.style.color='#0a0e1a';}));})();<\/script>`),'stretchMorph',`/* anime.cutbar.in — stretch morph */`);

// 23. Pixel Art Button
add('Buttons','Pixel Art',demo(id=>`
<div style="display:flex;justify-content:center;padding:10px;">
<button id="${id}" style="padding:12px 24px;background:#7b5cff;border:none;color:#fff;font-family:monospace;font-size:13px;font-weight:700;cursor:pointer;letter-spacing:2px;image-rendering:pixelated;box-shadow:4px 0 0 0 #5a3ddd,-4px 0 0 0 #5a3ddd,0 4px 0 0 #3d2a99,0 -4px 0 0 #9b7cff,inset 0 1px 0 rgba(255,255,255,.3);transition:all .1s;text-transform:uppercase;">▶ PIXEL</button>
</div>
<script>(function(){const b=document.getElementById('${id}');if(!b)return;b.addEventListener('mousedown',()=>{b.style.boxShadow='2px 0 0 0 #5a3ddd,-2px 0 0 0 #5a3ddd,0 2px 0 0 #3d2a99,0 -2px 0 0 #9b7cff,inset 0 1px 0 rgba(255,255,255,.3)';b.style.transform='translate(2px,2px)';});b.addEventListener('mouseup',()=>{b.style.boxShadow='4px 0 0 0 #5a3ddd,-4px 0 0 0 #5a3ddd,0 4px 0 0 #3d2a99,0 -4px 0 0 #9b7cff,inset 0 1px 0 rgba(255,255,255,.3)';b.style.transform='none';});})();<\/script>`),'pixelArtBtn',`/* anime.cutbar.in — pixel art button */`);

// 24. Neural Pulse Button
add('Buttons','Neural Pulse',demo(id=>`
<div style="display:flex;justify-content:center;align-items:center;height:80px;position:relative;">
  <style>@keyframes np${id}{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.5);opacity:0}}</style>
  <button id="${id}" style="padding:12px 26px;background:transparent;border:2px solid #00f5d4;color:#00f5d4;font-family:monospace;font-size:12px;font-weight:700;cursor:pointer;border-radius:8px;letter-spacing:2px;position:relative;z-index:1;">◎ NEURAL</button>
  <div id="${id}r1" style="position:absolute;width:100%;height:100%;border:2px solid rgba(0,245,212,.4);border-radius:10px;animation:np${id} 2s ease-out infinite;"></div>
  <div id="${id}r2" style="position:absolute;width:100%;height:100%;border:2px solid rgba(0,245,212,.25);border-radius:10px;animation:np${id} 2s ease-out .6s infinite;"></div>
  <div id="${id}r3" style="position:absolute;width:100%;height:100%;border:2px solid rgba(0,245,212,.15);border-radius:10px;animation:np${id} 2s ease-out 1.2s infinite;"></div>
</div>`),'neuralPulseBtn',`/* anime.cutbar.in — neural pulse */`);

/* ═══════════════════════════════════════════
   SWITCHES  (8 components)
═══════════════════════════════════════════ */

// 25. Cyber Toggle
add('Switches','Cyber Toggle',demo(id=>`
<div style="display:inline-flex;flex-direction:column;align-items:center;gap:8px;padding:10px;">
  <style>
  .ct${id} input{display:none}
  .ct${id} .tr{width:64px;height:32px;background:#111;border-radius:16px;position:relative;cursor:pointer;transition:all .35s;box-shadow:0 0 0 2px #333,inset 0 0 8px #000;}
  .ct${id} .th{position:absolute;top:4px;left:4px;width:24px;height:24px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#555,#222);transition:all .38s cubic-bezier(.3,1.5,.7,1);box-shadow:0 2px 5px rgba(0,0,0,.5);}
  .ct${id} .gw{position:absolute;inset:0;border-radius:16px;background:linear-gradient(90deg,#00f5d4,#7b5cff);opacity:0;transition:opacity .35s;}
  .ct${id} input:checked~.tr{box-shadow:0 0 0 2px #00f5d4,inset 0 0 8px rgba(0,245,212,.1),0 0 16px rgba(0,245,212,.2);}
  .ct${id} input:checked~.tr .gw{opacity:.4;}
  .ct${id} input:checked~.tr .th{left:36px;background:radial-gradient(circle at 35% 35%,#00f5d4,#0088aa);}
  .lbs${id}{display:flex;gap:24px;font-family:monospace;font-size:10px;letter-spacing:1px;}
  </style>
  <label class="ct${id}" for="${id}i">
    <input type="checkbox" id="${id}i" checked>
    <div class="tr"><div class="gw"></div><div class="th"></div></div>
  </label>
  <div class="lbs${id}"><span style="color:#666">OFF</span><span style="color:#00f5d4">ON</span></div>
</div>`),'cyberToggle',`/* anime.cutbar.in — cyber toggle */`);

// 26. Neon Flip
add('Switches','Neon Flip',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:10px;">
  <style>.nf${id} input{display:none;}.nf${id} .tr{width:68px;height:34px;background:#0d1120;border-radius:17px;position:relative;cursor:pointer;border:2px solid #7b5cff;box-shadow:0 0 12px rgba(123,92,255,.3);transition:all .3s;}.nf${id} .tr::before{content:'';position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#7b5cff,#ff2d78);transition:.4s cubic-bezier(.68,-.55,.265,1.55);box-shadow:0 0 10px rgba(123,92,255,.6);}.nf${id} input:checked~.tr{border-color:#00f5d4;box-shadow:0 0 14px rgba(0,245,212,.35);}.nf${id} input:checked~.tr::before{transform:translateX(34px);background:linear-gradient(135deg,#00f5d4,#7b5cff);box-shadow:0 0 12px rgba(0,245,212,.6);}</style>
  <label class="nf${id}" for="${id}n">
    <input type="checkbox" id="${id}n" checked>
    <div class="tr"></div>
  </label>
  <span style="font-family:monospace;font-size:9px;color:#556080;letter-spacing:2px;">NEON FLIP</span>
</div>`),'neonFlip',`/* anime.cutbar.in — neon flip switch */`);

// 27. Power Button
add('Switches','Power Button',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:10px;">
<div id="${id}" style="width:72px;height:72px;border-radius:50%;background:#0d1120;border:3px solid #333;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s;position:relative;">
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#444" stroke-width="2.5" stroke-linecap="round" id="${id}svg">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>
  </svg>
</div>
<span id="${id}lb" style="font-family:monospace;font-size:10px;color:#444;letter-spacing:2px;">OFF</span>
</div>
<script>(function(){const b=document.getElementById('${id}'),lb=document.getElementById('${id}lb'),svg=document.getElementById('${id}svg');if(!b)return;let on=false;b.addEventListener('click',()=>{on=!on;if(on){b.style.border='3px solid #00f5d4';b.style.boxShadow='0 0 24px rgba(0,245,212,.5),inset 0 0 18px rgba(0,245,212,.06)';svg.setAttribute('stroke','#00f5d4');lb.style.color='#00f5d4';lb.textContent='ON';}else{b.style.border='3px solid #333';b.style.boxShadow='none';svg.setAttribute('stroke','#444');lb.style.color='#444';lb.textContent='OFF';}});})();<\/script>`),'powerBtn',`/* anime.cutbar.in — power button */`);

// 28. Gesture Switch
add('Switches','Gesture',demo(id=>`
<div id="${id}" style="width:80px;height:80px;border-radius:50%;background:linear-gradient(145deg,#0d1120,#1a1a2e);cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;transition:all .3s;box-shadow:0 4px 16px rgba(0,0,0,.4);">
  <div id="${id}w" style="position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle,rgba(0,245,212,.35),transparent);transform:scale(0);transition:transform .4s;"></div>
  <span style="font-size:30px;z-index:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.4));">✋</span>
</div>
<script>(function(){const d=document.getElementById('${id}'),w=document.getElementById('${id}w');if(!d)return;let on=false;d.addEventListener('click',()=>{on=!on;if(on){d.style.background='linear-gradient(145deg,#00f5d4,#7b5cff)';d.style.boxShadow='0 0 28px rgba(0,245,212,.55)';w.style.transform='scale(2.2)';setTimeout(()=>w.style.transform='scale(0)',420);}else{d.style.background='linear-gradient(145deg,#0d1120,#1a1a2e)';d.style.boxShadow='0 4px 16px rgba(0,0,0,.4)';}});})();<\/script>`),'gestureSwitch',`/* anime.cutbar.in — gesture switch */`);

// 29. Thermometer Switch
add('Switches','Thermometer',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:10px;">
<div style="position:relative;width:28px;height:90px;background:rgba(0,0,0,.3);border-radius:20px;border:2px solid rgba(255,45,120,.3);overflow:hidden;cursor:pointer;" id="${id}">
  <div id="${id}fill" style="position:absolute;bottom:0;width:100%;height:30%;background:linear-gradient(to top,#ff2d78,#ff8800,#ffff00);border-radius:20px;transition:height .5s cubic-bezier(.68,-.55,.265,1.55);box-shadow:0 0 10px rgba(255,45,120,.5);"></div>
  <div style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);width:16px;height:16px;border-radius:50%;background:#ff2d78;box-shadow:0 0 8px #ff2d78;"></div>
</div>
<span id="${id}lb" style="font-family:monospace;font-size:9px;color:#ff2d78;letter-spacing:1px;">30°</span>
</div>
<script>(function(){const d=document.getElementById('${id}'),f=document.getElementById('${id}fill'),lb=document.getElementById('${id}lb');if(!d)return;let v=30;d.addEventListener('click',()=>{v=v>=90?10:v+20;f.style.height=v+'%';lb.textContent=Math.round(v*.9)+'°';const h=v/100;const r=Math.round(255*Math.min(1,2*h)),g=Math.round(255*Math.min(1,2*(1-h)));f.style.background='linear-gradient(to top,rgb('+r+',0,'+Math.round(50*(1-h))+''),rgb(255,'+g+',0))';});})();<\/script>`),'thermoSwitch',`/* anime.cutbar.in — thermometer switch */`);

// 30. iOS Morph Switch
add('Switches','iOS Morph',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:10px;">
  <style>.ios${id} input{display:none;}.ios${id} .tr{width:52px;height:30px;background:#3a3a4a;border-radius:15px;position:relative;cursor:pointer;transition:background .3s;}.ios${id} .th{position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:50%;background:#fff;transition:all .38s cubic-bezier(.3,1.5,.7,1);box-shadow:0 2px 6px rgba(0,0,0,.3);}.ios${id} input:checked~.tr{background:#7b5cff;}.ios${id} input:checked~.tr .th{transform:translateX(22px);}</style>
  <label class="ios${id}" for="${id}ios">
    <input type="checkbox" id="${id}ios">
    <div class="tr"><div class="th"></div></div>
  </label>
  <span style="font-family:monospace;font-size:9px;color:#556080;letter-spacing:2px;">iOS MORPH</span>
</div>`),'iosMorph',`/* anime.cutbar.in — iOS morph switch */`);

// 31. Emoji Mood Switch
add('Switches','Mood Switch',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:10px;">
<div id="${id}" style="width:80px;height:40px;background:#1a1a2e;border-radius:20px;position:relative;cursor:pointer;border:2px solid #333;overflow:hidden;transition:all .3s;">
  <div id="${id}t" style="position:absolute;inset:2px;width:32px;height:32px;border-radius:50%;background:#333;display:flex;align-items:center;justify-content:center;font-size:18px;transition:all .38s cubic-bezier(.3,1.5,.7,1);">😴</div>
</div>
<span id="${id}lb" style="font-family:monospace;font-size:10px;color:#556080;letter-spacing:1px;">sleepy</span>
</div>
<script>(function(){const d=document.getElementById('${id}'),t=document.getElementById('${id}t'),lb=document.getElementById('${id}lb');if(!d)return;const moods=[{e:'😴',l:'sleepy',c:'#333',bg:'#1a1a2e',border:'#333'},{e:'🙂',l:'chill',c:'#00aa55',bg:'#002211',border:'#00aa55'},{e:'🔥',l:'lit',c:'#ff6600',bg:'#1a0800',border:'#ff6600'},{e:'🤯',l:'HYPER',c:'#ff2d78',bg:'#1a001a',border:'#ff2d78'}];let i=0;d.addEventListener('click',()=>{i=(i+1)%moods.length;const m=moods[i];t.textContent=m.e;t.style.background=m.c;d.style.borderColor=m.border;d.style.background=m.bg;if(i>0)t.style.left='calc(100% - 36px)';else t.style.left='2px';lb.style.color=m.border;lb.textContent=m.l;});})();<\/script>`),'moodSwitch',`/* anime.cutbar.in — mood switch */`);

// 32. Sound-Reactive
add('Switches','Sound Reactive',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:10px;">
<div id="${id}" style="width:80px;height:80px;border-radius:50%;background:#1a1a2e;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;transition:all .3s;border:2px solid #333;gap:6px;">
  <span style="font-size:24px;">🎤</span>
  <div style="width:44px;height:4px;background:#333;border-radius:2px;overflow:hidden;"><div id="${id}f" style="width:0%;height:100%;background:linear-gradient(90deg,#7b5cff,#ff2d78);transition:width .05s;"></div></div>
</div>
<span style="font-family:monospace;font-size:8px;color:#4a5580;letter-spacing:1px;">TAP TO ENABLE MIC</span>
</div>
<script>(function(){const d=document.getElementById('${id}'),f=document.getElementById('${id}f');if(!d)return;async function init(){try{const s=await navigator.mediaDevices.getUserMedia({audio:true});const ac=new(window.AudioContext||window.webkitAudioContext)();const src=ac.createMediaStreamSource(s);const an=ac.createAnalyser();an.fftSize=256;src.connect(an);const arr=new Uint8Array(an.frequencyBinCount);(function tick(){an.getByteFrequencyData(arr);let avg=0;for(let i=0;i<arr.length;i++)avg+=arr[i];avg/=arr.length;f.style.width=(avg/255*100)+'%';if(avg>70){d.style.background='linear-gradient(135deg,#7b5cff,#ff2d78)';d.style.boxShadow='0 0 20px rgba(123,92,255,.5)';d.style.borderColor='#7b5cff';}else{d.style.background='#1a1a2e';d.style.boxShadow='none';d.style.borderColor='#333';}requestAnimationFrame(tick);})();}catch(e){}}d.addEventListener('click',init,{once:true});})();<\/script>`),'soundReactive',`/* anime.cutbar.in — sound reactive */`);

/* ═══════════════════════════════════════════
   CARDS  (8 components)
═══════════════════════════════════════════ */

// 33. Holographic Tilt
add('Cards','Holographic Tilt',demo(id=>`
<div id="${id}" style="width:170px;height:105px;border-radius:14px;background:linear-gradient(135deg,#0d1120,#1a1a2e);border:1px solid rgba(255,255,255,.08);position:relative;overflow:hidden;cursor:pointer;transition:transform .1s;display:flex;align-items:center;justify-content:center;">
  <div style="position:absolute;inset:-60%;background:conic-gradient(from 0deg,rgba(0,245,212,.18),rgba(123,92,255,.18),rgba(255,45,120,.18),rgba(0,245,212,.18));animation:holo${id} 6s linear infinite;border-radius:50%;"></div>
  <div style="position:absolute;inset:1px;background:#0d1120;border-radius:13px;"></div>
  <div style="position:relative;z-index:1;text-align:center;">
    <div style="font-size:26px;margin-bottom:4px;">✦</div>
    <div style="font-family:monospace;font-size:10px;color:#7b8ab8;letter-spacing:2px;">HOLOGRAPHIC</div>
  </div>
  <style>@keyframes holo${id}{to{transform:rotate(360deg)}}</style>
</div>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(600px) rotateY('+x*28+'deg) rotateX('+(-y*28)+'deg)';});c.addEventListener('mouseleave',()=>c.style.transform='none');})();<\/script>`),'holoTiltCard',`/* anime.cutbar.in — holographic tilt */`);

// 34. Glassmorphism Card
add('Cards','Glassmorphism',demo(id=>`
<div style="padding:3px;border-radius:18px;background:linear-gradient(135deg,rgba(123,92,255,.6),rgba(255,45,120,.6));display:inline-block;">
  <div style="background:rgba(10,14,30,.75);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:15px;padding:18px 22px;border:1px solid rgba(255,255,255,.07);">
    <div style="font-family:monospace;font-size:8px;letter-spacing:2px;color:rgba(200,210,255,.45);text-transform:uppercase;margin-bottom:8px;">Glass Card</div>
    <div style="font-size:22px;margin-bottom:6px;">🌌</div>
    <div style="font-family:monospace;font-size:10px;color:rgba(200,210,255,.55);line-height:1.5;">Frosted glass<br>gradient border</div>
  </div>
</div>`),'glassCard',`/* anime.cutbar.in — glassmorphism card */`);

// 35. Neon Stats
add('Cards','Neon Stats',demo(id=>`
<div style="background:rgba(13,17,32,.95);border:1px solid rgba(0,245,212,.2);border-radius:14px;padding:16px;width:180px;font-family:monospace;">
  <div style="font-size:9px;letter-spacing:2px;color:#4a5580;text-transform:uppercase;margin-bottom:10px;">COMPONENTS</div>
  <div style="font-size:28px;font-weight:700;background:linear-gradient(135deg,#00f5d4,#7b5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;">50+</div>
  <div style="font-size:9px;color:#00f5d4;margin-top:3px;margin-bottom:12px;">↑ 400% this update</div>
  <div style="height:3px;background:rgba(255,255,255,.05);border-radius:2px;overflow:hidden;">
    <style>@keyframes ns${id}{from{width:0%}to{width:88%}}</style>
    <div style="height:100%;background:linear-gradient(90deg,#00f5d4,#7b5cff);border-radius:2px;animation:ns${id} 2s ease-out forwards;"></div>
  </div>
</div>`),'neonStats',`/* anime.cutbar.in — neon stats card */`);

// 36. Flip Card
add('Cards','3D Flip Card',demo(id=>`
<style>.fc${id}{width:160px;height:100px;perspective:800px;cursor:pointer;}.fci${id}{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .7s cubic-bezier(.4,0,.2,1);}.fc${id}:hover .fci${id}{transform:rotateY(180deg);}.ff${id},.fb${id}{position:absolute;inset:0;border-radius:12px;backface-visibility:hidden;display:flex;align-items:center;justify-content:center;}.ff${id}{background:linear-gradient(135deg,#7b5cff,#0d1120);border:1px solid rgba(123,92,255,.3);}.fb${id}{background:linear-gradient(135deg,#ff2d78,#1a0010);border:1px solid rgba(255,45,120,.3);transform:rotateY(180deg);}</style>
<div class="fc${id}">
  <div class="fci${id}">
    <div class="ff${id}"><div style="text-align:center;font-family:monospace;"><div style="font-size:22px">🃏</div><div style="font-size:9px;color:#a0a8cc;margin-top:4px;letter-spacing:1px;">HOVER TO FLIP</div></div></div>
    <div class="fb${id}"><div style="text-align:center;font-family:monospace;"><div style="font-size:22px">✨</div><div style="font-size:9px;color:#ffaad0;margin-top:4px;letter-spacing:1px;">anime.cutbar.in</div></div></div>
  </div>
</div>`),'flipCard',`/* anime.cutbar.in — 3D flip card */`);

// 37. Progress Card
add('Cards','XP Progress Card',demo(id=>`
<div style="background:rgba(13,17,32,.95);border:1px solid rgba(123,92,255,.25);border-radius:14px;padding:14px;width:190px;font-family:monospace;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <div style="font-size:10px;color:#7b8ab8;letter-spacing:1px;">LEVEL 42</div>
    <div style="font-size:16px;">⚔️</div>
  </div>
  <div style="font-size:18px;font-weight:700;color:#fff;margin-bottom:4px;">iBneRasool</div>
  <div style="font-size:8px;color:#556080;margin-bottom:10px;">Senior Dev · Termux Warrior</div>
  <div style="font-size:8px;color:#7b5cff;margin-bottom:5px;">XP  7,420 / 10,000</div>
  <div style="height:6px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden;">
    <style>@keyframes xp${id}{from{width:0}to{width:74%}}</style>
    <div style="height:100%;background:linear-gradient(90deg,#7b5cff,#ff2d78);border-radius:3px;animation:xp${id} 1.5s ease-out forwards;box-shadow:0 0 8px rgba(123,92,255,.5);"></div>
  </div>
</div>`),'xpCard',`/* anime.cutbar.in — XP progress card */`);

// 38. Particle Card — canvas
add('Cards','Particle Field',demo(id=>`
<div style="position:relative;width:180px;height:100px;border-radius:14px;overflow:hidden;border:1px solid rgba(0,245,212,.2);">
  <canvas id="${id}" width="180" height="100" style="width:180px;height:100px;display:block;"></canvas>
  <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:12px;color:#fff;letter-spacing:2px;text-shadow:0 0 10px rgba(0,245,212,.8);">PARTICLES</div>
</div>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const W=180,H=100;const ps=Array.from({length:40},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,r:1.5+Math.random()*2,col:['#00f5d4','#7b5cff','#ff2d78'][Math.floor(Math.random()*3)]}));function draw(){ctx.fillStyle='rgba(7,9,15,.18)';ctx.fillRect(0,0,W,H);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.28);ctx.fillStyle=p.col;ctx.shadowBlur=6;ctx.shadowColor=p.col;ctx.fill();ctx.shadowBlur=0;});requestAnimationFrame(draw);}draw();})();<\/script>`),'particleField',`/* anime.cutbar.in — particle field card */`);

// 39. Pricing Card
add('Cards','Pricing Card',demo(id=>`
<div style="background:rgba(13,17,32,.95);border:1px solid rgba(0,245,212,.2);border-radius:16px;padding:16px;width:170px;font-family:monospace;position:relative;overflow:hidden;">
  <div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:rgba(0,245,212,.06);"></div>
  <div style="font-size:9px;letter-spacing:2px;color:#00f5d4;text-transform:uppercase;margin-bottom:8px;">PRO PLAN</div>
  <div style="font-size:26px;font-weight:700;color:#fff;margin-bottom:2px;">$9<span style="font-size:13px;color:#4a5580;">/mo</span></div>
  <div style="font-size:8px;color:#4a5580;margin-bottom:12px;">billed annually</div>
  ${['Unlimited components','Copy source code','Commercial use','Priority updates'].map(f=>`<div style="font-size:9px;color:#7b8ab8;margin-bottom:5px;">✓ ${f}</div>`).join('')}
  <button style="width:100%;margin-top:10px;padding:8px;background:linear-gradient(135deg,#00f5d4,#7b5cff);border:none;border-radius:8px;color:#0a0e1a;font-family:monospace;font-size:10px;font-weight:700;cursor:pointer;letter-spacing:1px;">GET STARTED</button>
</div>`),'pricingCard',`/* anime.cutbar.in — pricing card */`);

// 40. Weather Card
add('Cards','Weather Card',demo(id=>`
<div style="background:linear-gradient(135deg,#0d1120,#1a2a4a);border:1px solid rgba(100,160,255,.2);border-radius:16px;padding:16px;width:170px;font-family:monospace;position:relative;overflow:hidden;">
  <div style="position:absolute;top:0;right:0;width:80px;height:80px;background:radial-gradient(circle,rgba(100,160,255,.15),transparent);border-radius:50%;"></div>
  <div style="font-size:8px;letter-spacing:2px;color:#6090bb;margin-bottom:6px;">SRINAGAR · NOW</div>
  <div style="font-size:36px;margin-bottom:4px;">🌨️</div>
  <div style="font-size:28px;font-weight:700;color:#fff;margin-bottom:2px;">8°C</div>
  <div style="font-size:9px;color:#6090bb;margin-bottom:10px;">Snowfall · Feels like 4°</div>
  <div style="display:flex;gap:8px;">
    ${[['Mon','🌨️','5°'],['Tue','⛅','9°'],['Wed','☀️','14°']].map(([d,e,t])=>`<div style="flex:1;text-align:center;background:rgba(255,255,255,.04);border-radius:6px;padding:5px 2px;"><div style="font-size:8px;color:#4a6080">${d}</div><div style="font-size:13px">${e}</div><div style="font-size:9px;color:#8ab0cc">${t}</div></div>`).join('')}
  </div>
</div>`),'weatherCard',`/* anime.cutbar.in — weather card */`);

/* ═══════════════════════════════════════════
   TEXT FX  (5 components)
═══════════════════════════════════════════ */

// 41. Text Scramble
add('Text FX','Scramble',demo(id=>`
<div id="${id}" style="font-family:monospace;font-size:20px;font-weight:700;color:#00f5d4;min-width:170px;text-align:center;letter-spacing:2px;cursor:pointer;padding:10px;" title="hover to scramble">HOVER ME</div>
<script>(function(){const el=document.getElementById('${id}');if(!el)return;const chars='!<>-\\/[]{}—=+*^?#@%';const orig='SCRAMBLE';function scramble(){let it=0;const iv=setInterval(()=>{el.textContent=orig.split('').map((c,i)=>i<it?orig[i]:chars[Math.floor(Math.random()*chars.length)]).join('');if(it>=orig.length)clearInterval(iv);it+=.35;},28);}el.addEventListener('mouseenter',scramble);el.addEventListener('click',scramble);})();<\/script>`),'scrambleFX',`/* anime.cutbar.in — text scramble */`);

// 42. Typewriter
add('Text FX','Typewriter',demo(id=>`
<div style="font-family:monospace;font-size:14px;padding:10px;min-height:40px;display:flex;align-items:center;gap:1px;">
  <span id="${id}" style="color:#7b5cff;font-weight:700;"></span>
  <style>@keyframes tblink${id}{0%,100%{opacity:1}50%{opacity:0}}</style>
  <span style="border-right:2px solid #7b5cff;height:1.2em;animation:tblink${id} .8s infinite;"></span>
</div>
<script>(function(){const el=document.getElementById('${id}');if(!el)return;const words=['anime.cutbar.in','50+ Components','Copy & Use!','Made with ♥'];let wi=0,ci=0,del=false;function type(){if(!del){el.textContent=words[wi].substring(0,ci+1);ci++;if(ci===words[wi].length){del=true;setTimeout(()=>requestAnimationFrame(type),1100);return;}}else{el.textContent=words[wi].substring(0,ci-1);ci--;if(ci===0){del=false;wi=(wi+1)%words.length;}}setTimeout(type,del?48:95);}type();})();<\/script>`),'typewriterFX',`/* anime.cutbar.in — typewriter effect */`);

// 43. Neon Glow Text
add('Text FX','Neon Flicker',demo(id=>`
<style>@keyframes nf${id}{0%,18%,20%,50%,52%,64%,66%,95%,100%{text-shadow:0 0 6px #fff,0 0 12px #fff,0 0 30px #ff2d78,0 0 60px #ff2d78}19%,51%,65%{text-shadow:none;opacity:.85}}</style>
<div style="font-family:'Orbitron',monospace,sans-serif;font-size:24px;font-weight:700;color:#fff;animation:nf${id} 6s infinite;letter-spacing:3px;text-transform:uppercase;padding:10px;">NEON</div>`),'neonFlicker',`/* anime.cutbar.in — neon flicker */`);

// 44. Gradient Wave Text
add('Text FX','Gradient Wave',demo(id=>`
<style>@keyframes gw${id}{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}</style>
<div style="font-family:'Orbitron',monospace,sans-serif;font-size:20px;font-weight:900;background:linear-gradient(90deg,#00f5d4,#7b5cff,#ff2d78,#ffaa00,#00f5d4);background-size:300% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gw${id} 4s linear infinite;letter-spacing:2px;padding:10px;">GRADIENT</div>`),'gradientWave',`/* anime.cutbar.in — gradient wave text */`);

// 45. Character Rain Text
add('Text FX','Char Rain',demo(id=>`
<div id="${id}" style="font-family:monospace;font-size:18px;font-weight:700;letter-spacing:4px;color:#00f5d4;padding:10px;cursor:pointer;" title="click to rain">anime.cutbar</div>
<script>(function(){const el=document.getElementById('${id}');if(!el)return;const orig=[...el.textContent];let active=false;function rain(){if(active)return;active=true;let cycles=0;const iv=setInterval(()=>{el.textContent=orig.map((c,i)=>{if(c===' ')return ' ';if(cycles>i*2)return c;return String.fromCharCode(33+Math.floor(Math.random()*94));}).join('');cycles+=2;if(cycles>orig.length*2+20){clearInterval(iv);el.textContent=orig.join('');active=false;}},40);}el.addEventListener('mouseenter',rain);el.addEventListener('click',rain);})();<\/script>`),'charRain',`/* anime.cutbar.in — character rain */`);

/* ═══════════════════════════════════════════
   NAVIGATION  (5 components)
═══════════════════════════════════════════ */

// 46. Floating Nav
add('Navigation','Floating Nav',demo(id=>`
<div id="${id}" style="display:flex;gap:0;background:rgba(10,14,30,.9);border:1px solid rgba(123,92,255,.25);border-radius:14px;padding:5px;backdrop-filter:blur(10px);">
  <style>.fn${id} button{padding:8px 14px;border:none;background:transparent;color:#556080;font-family:monospace;font-size:11px;cursor:pointer;border-radius:9px;transition:all .2s;letter-spacing:.5px;}.fn${id} button:hover{color:#fff;background:rgba(255,255,255,.06);}.fn${id} button.a{background:linear-gradient(135deg,#7b5cff,#00f5d4);color:#fff;box-shadow:0 4px 14px rgba(123,92,255,.35);}</style>
  <div class="fn${id}">
    <button class="a" onclick="document.querySelectorAll('.fn${id} button').forEach(b=>b.classList.remove('a'));this.classList.add('a')">Home</button>
    <button onclick="document.querySelectorAll('.fn${id} button').forEach(b=>b.classList.remove('a'));this.classList.add('a')">Work</button>
    <button onclick="document.querySelectorAll('.fn${id} button').forEach(b=>b.classList.remove('a'));this.classList.add('a')">About</button>
    <button onclick="document.querySelectorAll('.fn${id} button').forEach(b=>b.classList.remove('a'));this.classList.add('a')">Contact</button>
  </div>
</div>`),'floatingNav',`/* anime.cutbar.in — floating nav */`);

// 47. Breadcrumb Trail
add('Navigation','Breadcrumb Trail',demo(id=>`
<div style="display:flex;align-items:center;gap:4px;font-family:monospace;font-size:11px;flex-wrap:wrap;">
  ${['Home','Components','Loaders','DNA Helix'].map((t,i,a)=>`
    <span style="color:${i===a.length-1?'#00f5d4':'#556080'};cursor:pointer;transition:color .2s;padding:3px 8px;border-radius:6px;${i===a.length-1?'background:rgba(0,245,212,.08);border:1px solid rgba(0,245,212,.2);':''}" onmouseover="this.style.color='#7b5cff'" onmouseout="this.style.color='${i===a.length-1?'#00f5d4':'#556080'}'">${t}</span>
    ${i<a.length-1?'<span style="color:#2a3050">›</span>':''}
  `).join('')}
</div>`),'breadcrumb',`/* anime.cutbar.in — breadcrumb */`);

// 48. Tab Nav
add('Navigation','Underline Tabs',demo(id=>`
<div style="border-bottom:1px solid rgba(255,255,255,.06);width:100%;max-width:260px;">
  <style>.ut${id}{display:flex;gap:0;}.ut${id} button{padding:10px 16px;border:none;background:transparent;color:#556080;font-family:monospace;font-size:11px;cursor:pointer;position:relative;transition:color .2s;letter-spacing:.5px;white-space:nowrap;}.ut${id} button::after{content:'';position:absolute;bottom:-1px;left:0;right:0;height:2px;background:linear-gradient(90deg,#7b5cff,#00f5d4);transform:scaleX(0);transition:transform .25s;border-radius:2px;}.ut${id} button:hover{color:#aab;}.ut${id} button.on{color:#fff;}.ut${id} button.on::after{transform:scaleX(1);}</style>
  <div class="ut${id}">
    <button class="on" onclick="[...this.parentElement.querySelectorAll('button')].forEach(b=>{b.classList.remove('on')});this.classList.add('on')">Design</button>
    <button onclick="[...this.parentElement.querySelectorAll('button')].forEach(b=>b.classList.remove('on'));this.classList.add('on')">Code</button>
    <button onclick="[...this.parentElement.querySelectorAll('button')].forEach(b=>b.classList.remove('on'));this.classList.add('on')">Preview</button>
    <button onclick="[...this.parentElement.querySelectorAll('button')].forEach(b=>b.classList.remove('on'));this.classList.add('on')">Docs</button>
  </div>
</div>`),'underlineTabs',`/* anime.cutbar.in — underline tabs */`);

// 49. Pagination
add('Navigation','Pagination',demo(id=>`
<div style="display:flex;gap:6px;align-items:center;">
  <style>.pg${id} button{width:32px;height:32px;border-radius:8px;border:1px solid rgba(123,92,255,.25);background:transparent;color:#556080;font-family:monospace;font-size:12px;cursor:pointer;transition:all .2s;}.pg${id} button:hover{border-color:#7b5cff;color:#7b5cff;}.pg${id} button.on{background:linear-gradient(135deg,#7b5cff,#00f5d4);border-color:transparent;color:#fff;box-shadow:0 4px 12px rgba(123,92,255,.35);}</style>
  <div class="pg${id}" style="display:flex;gap:6px;">
    <button>‹</button>
    ${[1,2,3,'…',8].map((p,i)=>`<button class="${i===1?'on':''}" onclick="[...this.parentElement.querySelectorAll('button')].slice(1,-2).forEach(b=>b.classList.remove('on'));this.classList.add('on')">${p}</button>`).join('')}
    <button>›</button>
  </div>
</div>`),'pagination',`/* anime.cutbar.in — pagination */`);

// 50. Dock Nav — macOS style
add('Navigation','macOS Dock',demo(id=>`
<div id="${id}" style="display:flex;gap:8px;align-items:flex-end;padding:12px 16px;background:rgba(255,255,255,.05);backdrop-filter:blur(20px);border-radius:20px;border:1px solid rgba(255,255,255,.08);">
  ${['🏠','💻','🎮','📸','⚙️','🎨'].map((e,i)=>`
    <div data-dock="${id}" style="width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer;transition:all .22s cubic-bezier(.34,1.56,.64,1);border:1px solid rgba(255,255,255,.06);" onmouseover="this.style.transform='scale(1.55) translateY(-8px)';this.style.zIndex='10'" onmouseout="this.style.transform='scale(1) translateY(0)';this.style.zIndex='1'">${e}</div>
  `).join('')}
</div>`),'macDock',`/* anime.cutbar.in — macOS dock nav */`);

/* ═══════════════════════════════════════════
   SCIENCE  (5 components)
═══════════════════════════════════════════ */

// 51. Pendulum — physics
add('Science','Pendulum',demo(id=>`
<canvas id="${id}" width="160" height="120" style="width:160px;height:120px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const ox=80,oy=10,L=80;let theta=Math.PI/4,omega=0,dt=.02,g=9.8;function draw(){ctx.clearRect(0,0,160,120);theta+=(omega+=(-g/L)*Math.sin(theta)*dt)*dt;omega*=.999;const x=ox+Math.sin(theta)*L,y=oy+Math.cos(theta)*L;ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(x,y);ctx.strokeStyle='rgba(0,245,212,.6)';ctx.lineWidth=2;ctx.stroke();ctx.beginPath();ctx.arc(ox,oy,4,0,6.28);ctx.fillStyle='#7b5cff';ctx.fill();ctx.beginPath();ctx.arc(x,y,10,0,6.28);const grad=ctx.createRadialGradient(x,y,0,x,y,10);grad.addColorStop(0,'#ff2d78');grad.addColorStop(1,'rgba(255,45,120,.3)');ctx.fillStyle=grad;ctx.shadowBlur=14;ctx.shadowColor='#ff2d78';ctx.fill();ctx.shadowBlur=0;requestAnimationFrame(draw);}draw();})();<\/script>`),'pendulumPhysics',`/* anime.cutbar.in — pendulum physics simulation */`);

// 52. Lissajous Curve — math
add('Science','Lissajous Curve',demo(id=>`
<canvas id="${id}" width="150" height="120" style="width:150px;height:120px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;const a=3,b=2,d=Math.PI/4;function draw(){ctx.fillStyle='rgba(7,9,15,.08)';ctx.fillRect(0,0,150,120);ctx.beginPath();const pts=300;const grad=ctx.createLinearGradient(0,0,150,120);grad.addColorStop(0,'#00f5d4');grad.addColorStop(.5,'#7b5cff');grad.addColorStop(1,'#ff2d78');ctx.strokeStyle=grad;ctx.lineWidth=2;for(let i=0;i<=pts;i++){const s=i/pts*Math.PI*2;const x=65*Math.sin(a*s+d+t)+75,y=50*Math.sin(b*s)+60;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();t+=.008;requestAnimationFrame(draw);}draw();})();<\/script>`),'lissajousCurve',`/* anime.cutbar.in — lissajous mathematical curve */`);

// 53. Wave Interference
add('Science','Wave Interference',demo(id=>`
<canvas id="${id}" width="180" height="90" style="width:180px;height:90px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;const W=180,H=90;function draw(){ctx.clearRect(0,0,W,H);const grad=ctx.createLinearGradient(0,0,W,0);grad.addColorStop(0,'#00f5d4');grad.addColorStop(.5,'#7b5cff');grad.addColorStop(1,'#ff2d78');ctx.strokeStyle=grad;ctx.lineWidth=2.5;ctx.shadowBlur=8;ctx.shadowColor='#7b5cff';ctx.beginPath();for(let x=0;x<W;x++){const y1=20*Math.sin(x*.05+t);const y2=15*Math.sin(x*.08-t*1.3);const y3=10*Math.sin(x*.12+t*.7);const y=H/2+y1+y2+y3;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();t+=.04;requestAnimationFrame(draw);}draw();})();<\/script>`),'waveInterference',`/* anime.cutbar.in — wave interference physics */`);

// 54. Lorenz Attractor
add('Science','Lorenz Attractor',demo(id=>`
<canvas id="${id}" width="160" height="120" style="width:160px;height:120px;background:#000;border-radius:8px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let x=.1,y=0,z=0,t=0;const s=10,r=28,b=8/3,dt=.008;const pts=[];const MAX=400;function draw(){for(let i=0;i<3;i++){const dx=s*(y-x),dy=x*(r-z)-y,dz=x*y-b*z;x+=dx*dt;y+=dy*dt;z+=dz*dt;pts.push({x,y,z});if(pts.length>MAX)pts.shift();}ctx.clearRect(0,0,160,120);ctx.beginPath();pts.forEach((p,i)=>{const px=p.x*3.5+80,py=p.z*-2.5+110;if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);});const grad=ctx.createLinearGradient(0,0,160,120);grad.addColorStop(0,'#00f5d4');grad.addColorStop(1,'#ff2d78');ctx.strokeStyle=grad;ctx.lineWidth=1.2;ctx.stroke();requestAnimationFrame(draw);}draw();})();<\/script>`),'lorenzAttractor',`/* anime.cutbar.in — lorenz strange attractor */`);

// 55. Fourier Circle
add('Science','Fourier Circles',demo(id=>`
<canvas id="${id}" width="160" height="130" style="width:160px;height:130px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;const cx=65,cy=65;const waves=[{r:30,f:1},{r:15,f:3},{r:8,f:5},{r:5,f:7}];const trail=[];function draw(){ctx.clearRect(0,0,160,130);let x=cx,y=cy;waves.forEach(w=>{const nx=x+w.r*Math.cos(w.f*t);const ny=y+w.r*Math.sin(w.f*t);ctx.beginPath();ctx.arc(x,y,w.r,0,6.28);ctx.strokeStyle='rgba(123,92,255,.25)';ctx.lineWidth=1;ctx.stroke();ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(nx,ny);ctx.strokeStyle='rgba(0,245,212,.7)';ctx.lineWidth=2;ctx.stroke();x=nx;y=ny;});trail.push({x,y});if(trail.length>200)trail.shift();ctx.beginPath();trail.forEach((p,i)=>{if(i===0)ctx.moveTo(p.x,p.y);else ctx.lineTo(p.x,p.y);});ctx.strokeStyle='#ff2d78';ctx.lineWidth=2;ctx.shadowBlur=6;ctx.shadowColor='#ff2d78';ctx.stroke();ctx.shadowBlur=0;t+=.04;requestAnimationFrame(draw);}draw();})();<\/script>`),'fourierCircles',`/* anime.cutbar.in — fourier circle decomposition */`);

console.log('✅ anime.cutbar.in — '+Object.values(window.componentsList).reduce((a,c)=>a+c.length,0)+' components loaded across '+Object.keys(window.componentsList).length+' categories');
