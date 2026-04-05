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

/* ═══════════════════════════════════════════
   NEW BATCH — 50 MORE COMPONENTS (v4)
═══════════════════════════════════════════ */

/* ── LOADERS (10 more) ── */

add('Loaders','Liquid Metal',demo(id=>`
<canvas id="${id}" width="120" height="120" style="width:120px;height:120px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;function draw(){ctx.clearRect(0,0,120,120);const pts=120;ctx.beginPath();for(let i=0;i<=pts;i++){const a=(i/pts)*Math.PI*2;const noise=Math.sin(a*3+t)*8+Math.sin(a*5-t*1.3)*5+Math.sin(a*7+t*.7)*3;const r=38+noise;ctx.lineTo(60+Math.cos(a)*r,60+Math.sin(a)*r);}ctx.closePath();const g=ctx.createRadialGradient(52,52,4,60,60,46);g.addColorStop(0,'#00f5d4');g.addColorStop(.6,'#7b5cff');g.addColorStop(1,'#ff2d78');ctx.fillStyle=g;ctx.shadowBlur=20;ctx.shadowColor='#7b5cff';ctx.fill();t+=.035;requestAnimationFrame(draw);}draw();})();<\/script>`),'liquidMetal',`/* anime.cutbar.in — liquid metal */`);

add('Loaders','Mandelbrot Zoom',demo(id=>`
<canvas id="${id}" width="120" height="120" style="width:120px;height:120px;border-radius:8px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let zoom=1,cx=-0.7,cy=0.27015;function draw(){const W=120,H=120,max=60;const img=ctx.createImageData(W,H);for(let px=0;px<W;px++)for(let py=0;py<H;py++){let x=(px-W/2)/(W/4*zoom)+cx,y=(py-H/2)/(H/4*zoom)+cy,i=0,zx=0,zy=0;while(zx*zx+zy*zy<4&&i<max){const tmp=zx*zx-zy*zy+x;zy=2*zx*zy+y;zx=tmp;i++;}const idx=(py*W+px)*4;const t=i/max;img.data[idx]=Math.round(9*t*(1-t)*(1-t)*255*(1-t)*255);img.data[idx+1]=Math.round(15*t*t*(1-t)*(1-t)*255);img.data[idx+2]=Math.round(8.5*t*t*t*(1-t)*255);img.data[idx+3]=255;}ctx.putImageData(img,0,0);zoom*=1.04;if(zoom>200)zoom=1;}setInterval(draw,80);})();<\/script>`),'mandelbrot',`/* anime.cutbar.in — mandelbrot zoom */`);

add('Loaders','Magnetic Field',demo(id=>`
<canvas id="${id}" width="160" height="100" style="width:160px;height:100px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;const lines=16;function draw(){ctx.clearRect(0,0,160,100);for(let l=0;l<lines;l++){const off=l/lines*Math.PI*2;ctx.beginPath();for(let x=0;x<=160;x+=2){const mag=Math.sin(x*.04+t+off)*20+Math.sin(x*.08-t+off)*12;const y=50+mag;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}const hue=l/lines;ctx.strokeStyle="rgba("+Math.round(123+132*hue)+","+Math.round(92+163*hue)+","+Math.round(255-200*hue)+","+(0.15+hue*0.35)+")";ctx.lineWidth=1.5;ctx.stroke();}t+=.04;requestAnimationFrame(draw);}draw();})();<\/script>`),'magneticField',`/* anime.cutbar.in — magnetic field lines */`);

add('Loaders','Neural Web',demo(id=>`
<canvas id="${id}" width="160" height="100" style="width:160px;height:100px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const nodes=Array.from({length:12},()=>({x:Math.random()*160,y:Math.random()*100,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6}));function tick(){ctx.fillStyle='rgba(7,9,15,.15)';ctx.fillRect(0,0,160,100);nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<4||n.x>156)n.vx*=-1;if(n.y<4||n.y>96)n.vy*=-1;});nodes.forEach((a,i)=>nodes.slice(i+1).forEach(b=>{const dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);if(d<80){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle="rgba(123,92,255,"+((1-d/80)*.6)+")";ctx.lineWidth=1;ctx.stroke();}}));nodes.forEach(n=>{ctx.beginPath();ctx.arc(n.x,n.y,3,0,6.28);ctx.fillStyle='#00f5d4';ctx.shadowBlur=8;ctx.shadowColor='#00f5d4';ctx.fill();ctx.shadowBlur=0;});requestAnimationFrame(tick);}tick();})();<\/script>`),'neuralWeb',`/* anime.cutbar.in — neural web simulation */`);

add('Loaders','Plasma Ball',demo(id=>`
<canvas id="${id}" width="110" height="110" style="width:110px;height:110px;border-radius:50%;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;function draw(){ctx.clearRect(0,0,110,110);const cx=55,cy=55,r=48;const grad=ctx.createRadialGradient(cx,cy,0,cx,cy,r);grad.addColorStop(0,'rgba(255,255,255,.9)');grad.addColorStop(.2,'rgba(123,92,255,.6)');grad.addColorStop(.7,'rgba(0,245,212,.2)');grad.addColorStop(1,'rgba(0,0,0,0)');ctx.beginPath();ctx.arc(cx,cy,r,0,6.28);ctx.fillStyle=grad;ctx.fill();for(let i=0;i<6;i++){const a=i/6*Math.PI*2+t;const bolt=[{x:cx,y:cy}];let bx=cx,by=cy;for(let s=0;s<8;s++){const da=(Math.random()-.5)*.8;const dr=6+Math.random()*3;bx+=Math.cos(a+da*(s+1))*dr;by+=Math.sin(a+da*(s+1))*dr;bolt.push({x:bx,y:by});}ctx.beginPath();bolt.forEach((p,j)=>j===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));ctx.strokeStyle='rgba(200,150,255,.7)';ctx.lineWidth=1.5;ctx.shadowBlur=10;ctx.shadowColor='#7b5cff';ctx.stroke();ctx.shadowBlur=0;}t+=.03;requestAnimationFrame(draw);}draw();})();<\/script>`),'plasmaBall',`/* anime.cutbar.in — plasma ball */`);

add('Loaders','Hypnotic Ring',demo(id=>`
<canvas id="${id}" width="110" height="110" style="width:110px;height:110px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;function draw(){ctx.clearRect(0,0,110,110);for(let r=6;r<=48;r+=6){ctx.beginPath();const segs=Math.round(r*1.2);for(let i=0;i<=segs;i++){const a=i/segs*Math.PI*2+t*(r%12===0?1:-1);const wave=Math.sin(a*4+t*2)*3;ctx.lineTo(55+Math.cos(a)*(r+wave),55+Math.sin(a)*(r+wave));}ctx.closePath();const p=r/48;ctx.strokeStyle="hsl("+(160+p*120+t*20)+",80%,"+(50+p*20)+"%)";ctx.lineWidth=1.5;ctx.stroke();}t+=.025;requestAnimationFrame(draw);}draw();})();<\/script>`),'hypnoticRing',`/* anime.cutbar.in — hypnotic ring */`);

add('Loaders','Particle Vortex',demo(id=>`
<canvas id="${id}" width="120" height="120" style="width:120px;height:120px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const ps=Array.from({length:60},(_,i)=>({a:Math.random()*6.28,r:10+Math.random()*45,speed:.005+Math.random()*.025,size:1+Math.random()*2.5,col:['#00f5d4','#7b5cff','#ff2d78','#ffaa00'][i%4]}));function draw(){ctx.fillStyle='rgba(7,9,15,.18)';ctx.fillRect(0,0,120,120);ps.forEach(p=>{p.a+=p.speed;p.r=Math.max(4,p.r-.04);if(p.r<4){p.r=50;p.a=Math.random()*6.28;}const x=60+Math.cos(p.a)*p.r,y=60+Math.sin(p.a)*p.r;ctx.beginPath();ctx.arc(x,y,p.size,0,6.28);ctx.fillStyle=p.col;ctx.shadowBlur=8;ctx.shadowColor=p.col;ctx.fill();ctx.shadowBlur=0;});requestAnimationFrame(draw);}draw();})();<\/script>`),'particleVortex',`/* anime.cutbar.in — particle vortex */`);

add('Loaders','String Theory',demo(id=>`
<canvas id="${id}" width="180" height="90" style="width:180px;height:90px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;function draw(){ctx.clearRect(0,0,180,90);for(let s=0;s<8;s++){ctx.beginPath();const off=s/8*Math.PI*2;for(let x=0;x<=180;x+=2){const y=45+Math.sin(x*.035+t+off)*18+Math.sin(x*.07-t*.8+off)*10;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.strokeStyle="hsla("+(s*45+t*30)+",80%,60%,0.5)";ctx.lineWidth=1.5;ctx.stroke();}t+=.035;requestAnimationFrame(draw);}draw();})();<\/script>`),'stringTheory',`/* anime.cutbar.in — string theory waves */`);

add('Loaders','Quantum Tunnel',demo(id=>`
<div style="position:relative;width:120px;height:80px;overflow:hidden;border-radius:8px;">
  <style>
    @keyframes qt${id}a{0%{transform:scaleX(1) translateX(-60px);opacity:0}40%{opacity:1}100%{transform:scaleX(.1) translateX(60px);opacity:0}}
    @keyframes qt${id}b{0%,100%{opacity:0;transform:scaleY(1)}50%{opacity:1;transform:scaleY(.3)}}
  </style>
  ${[0,.2,.4,.6,.8].map((d,i)=>`<div style="position:absolute;top:${10+i*14}px;left:0;width:100%;height:3px;background:linear-gradient(90deg,transparent,#7b5cff,#00f5d4,transparent);border-radius:2px;animation:qt${id}a ${.8+d}s ease-in-out ${d}s infinite;box-shadow:0 0 6px #7b5cff;"></div>`).join('')}
</div>`),'quantumTunnel',`/* anime.cutbar.in — quantum tunnel */`);

add('Loaders','Clockwork Gears',demo(id=>`
<canvas id="${id}" width="110" height="110" style="width:110px;height:110px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;function gear(cx,cy,r,teeth,angle,col){ctx.save();ctx.translate(cx,cy);ctx.rotate(angle);ctx.beginPath();for(let i=0;i<teeth;i++){const a=i/teeth*Math.PI*2;const a2=(i+.35)/teeth*Math.PI*2;const a3=(i+.65)/teeth*Math.PI*2;const a4=(i+1)/teeth*Math.PI*2;const or=r+4,ir=r-1;ctx.lineTo(Math.cos(a)*ir,Math.sin(a)*ir);ctx.lineTo(Math.cos(a)*or,Math.sin(a)*or);ctx.lineTo(Math.cos(a3)*or,Math.sin(a3)*or);ctx.lineTo(Math.cos(a4)*ir,Math.sin(a4)*ir);}ctx.closePath();ctx.strokeStyle=col;ctx.lineWidth=1.5;ctx.stroke();ctx.beginPath();ctx.arc(0,0,r-4,0,6.28);ctx.stroke();ctx.beginPath();ctx.arc(0,0,3,0,6.28);ctx.fillStyle=col;ctx.fill();ctx.restore();}function draw(){ctx.clearRect(0,0,110,110);gear(40,40,22,12,t,'#00f5d4');gear(78,40,14,8,-t*22/14,'#7b5cff');gear(40,76,14,8,-t*22/14,'#ff2d78');t+=.012;requestAnimationFrame(draw);}draw();})();<\/script>`),'clockworkGears',`/* anime.cutbar.in — clockwork gears physics */`);

/* ── BUTTONS (10 more) ── */

add('Buttons','Tesla Coil',demo(id=>`
<div style="display:flex;justify-content:center;padding:16px;position:relative;">
  <style>
  @keyframes arc${id}{0%,100%{opacity:0}50%{opacity:1}}
  .tc${id}{position:relative;padding:12px 28px;background:#0a0e1a;border:2px solid #7b5cff;color:#7b5cff;font-family:monospace;font-size:13px;font-weight:700;cursor:pointer;border-radius:10px;letter-spacing:2px;overflow:hidden;transition:all .3s;}
  .tc${id}::before{content:'';position:absolute;inset:-2px;border-radius:12px;background:linear-gradient(90deg,#7b5cff,#00f5d4,#ff2d78,#7b5cff);background-size:300%;opacity:0;transition:opacity .3s;animation:arc${id} 1.5s infinite;}
  .tc${id}:hover{color:#fff;background:#0d0f20;}.tc${id}:hover::before{opacity:.6;}
  </style>
  <button class="tc${id}">⚡ TESLA</button>
</div>`),'teslaCoilBtn',`/* anime.cutbar.in — tesla coil button */`);

add('Buttons','Typewrite Click',demo(id=>`
<div style="display:flex;justify-content:center;padding:16px;">
<button id="${id}" style="padding:12px 28px;background:#0a0e1a;border:2px solid #00f5d4;color:#00f5d4;font-family:'Space Mono',monospace;font-size:12px;font-weight:700;cursor:pointer;border-radius:8px;letter-spacing:2px;min-width:160px;transition:border-color .2s;" data-orig="SEND MESSAGE">SEND MESSAGE</button>
</div>
<script>(function(){const b=document.getElementById('${id}');if(!b)return;let busy=false;const msgs=['SENDING...','ENCRYPTING','DONE ✓'];b.addEventListener('click',()=>{if(busy)return;busy=true;b.style.borderColor='#7b5cff';b.style.color='#7b5cff';let mi=0;function next(){if(mi>=msgs.length){setTimeout(()=>{b.textContent=b.dataset.orig;b.style.borderColor='#00f5d4';b.style.color='#00f5d4';busy=false;},600);return;}let ci=0;const msg=msgs[mi];const iv=setInterval(()=>{b.textContent=msg.slice(0,ci+1)+'_';ci++;if(ci>=msg.length){clearInterval(iv);setTimeout(next,400);}},60);mi++;}next();});})();<\/script>`),'typewriteClickBtn',`/* anime.cutbar.in — typewrite click button */`);

add('Buttons','Hologram',demo(id=>`
<style>
.holo-btn${id}{position:relative;padding:12px 28px;background:transparent;border:none;color:#00f5d4;font-family:monospace;font-size:13px;font-weight:700;cursor:pointer;letter-spacing:2px;text-transform:uppercase;}
.holo-btn${id}::before{content:attr(data-t);position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(0,245,212,.08),rgba(123,92,255,.08));border:1px solid rgba(0,245,212,.35);clip-path:polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px);transition:all .3s;}
.holo-btn${id}::after{content:attr(data-t);position:absolute;inset:3px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(0,245,212,.12);clip-path:polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px);opacity:.4;}
.holo-btn${id}:hover::before{background:linear-gradient(135deg,rgba(0,245,212,.18),rgba(123,92,255,.18));box-shadow:0 0 20px rgba(0,245,212,.2),inset 0 0 20px rgba(0,245,212,.05);}
</style>
<button class="holo-btn${id}" data-t="HOLOGRAM">HOLOGRAM</button>`),'hologramBtn',`/* anime.cutbar.in — hologram button */`);

add('Buttons','Gravity Well',demo(id=>`
<div id="${id}wrap" style="display:flex;justify-content:center;align-items:center;padding:24px;position:relative;height:90px;">
<button id="${id}" style="padding:12px 26px;background:linear-gradient(135deg,#0d1120,#1a1a2e);border:1px solid rgba(123,92,255,.4);color:#7b5cff;font-family:monospace;font-size:12px;font-weight:700;cursor:pointer;border-radius:50px;letter-spacing:1px;transition:all .15s;box-shadow:0 0 0 0 rgba(123,92,255,0);">◎ GRAVITY</button>
</div>
<script>(function(){const b=document.getElementById('${id}');const wrap=document.getElementById('${id}wrap');if(!b)return;wrap.addEventListener('mousemove',e=>{const r=wrap.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.2,y=(e.clientY-r.top-r.height/2)*.2;b.style.transform='translate('+x+'px,'+y+'px)';b.style.boxShadow='0 0 30px rgba(123,92,255,.35)';});wrap.addEventListener('mouseleave',()=>{b.style.transform='translate(0,0)';b.style.boxShadow='0 0 0 0 rgba(123,92,255,0)';});})();<\/script>`),'gravityWellBtn',`/* anime.cutbar.in — gravity well button */`);

add('Buttons','Ink Blot',demo(id=>`
<div style="display:flex;justify-content:center;padding:12px;">
<button id="${id}" style="padding:12px 30px;background:#fff;border:none;color:#0a0e1a;font-family:monospace;font-size:13px;font-weight:700;cursor:pointer;border-radius:8px;letter-spacing:1px;position:relative;overflow:hidden;transition:color .4s .05s;">INK BLOT
  <span id="${id}ink" style="position:absolute;border-radius:50%;background:#0a0e1a;transform:scale(0);transition:transform .5s cubic-bezier(.4,0,.2,1),opacity .4s;width:0;height:0;left:50%;top:50%;pointer-events:none;opacity:0;"></span>
</button>
</div>
<script>(function(){const b=document.getElementById('${id}'),ink=document.getElementById('${id}ink');if(!b)return;let on=false;b.addEventListener('click',e=>{const r=b.getBoundingClientRect(),sz=Math.max(b.clientWidth,b.clientHeight)*2.2;ink.style.width=sz+'px';ink.style.height=sz+'px';ink.style.left=(e.clientX-r.left-sz/2)+'px';ink.style.top=(e.clientY-r.top-sz/2)+'px';on=!on;ink.style.transform=on?'scale(1)':'scale(0)';ink.style.opacity=on?'1':'0';b.style.color=on?'#fff':'#0a0e1a';});})();<\/script>`),'inkBlotBtn',`/* anime.cutbar.in — ink blot button */`);

add('Buttons','Binary Rain Btn',demo(id=>`
<div style="display:flex;justify-content:center;padding:14px;">
<button id="${id}" style="padding:12px 28px;background:#0a0e1a;border:1px solid rgba(0,245,212,.35);color:#00f5d4;font-family:'Space Mono',monospace;font-size:12px;font-weight:700;cursor:pointer;border-radius:8px;letter-spacing:1px;position:relative;overflow:hidden;">
  <canvas id="${id}c" style="position:absolute;inset:0;width:100%;height:100%;opacity:.25;pointer-events:none;"></canvas>
  <span style="position:relative;z-index:1;">01 BINARY</span>
</button>
</div>
<script>(function(){const b=document.getElementById('${id}'),c=document.getElementById('${id}c');if(!b||!c)return;c.width=b.offsetWidth||140;c.height=b.offsetHeight||44;const ctx=c.getContext('2d');const cols=Math.floor(c.width/7);const drops=Array(cols).fill(0);function tick(){ctx.fillStyle='rgba(0,0,0,.15)';ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='#00f5d4';ctx.font='7px monospace';drops.forEach((y,i)=>{ctx.fillText(Math.random()>.5?'1':'0',i*7,y*7);if(y*7>c.height&&Math.random()>.95)drops[i]=0;else drops[i]++;});requestAnimationFrame(tick);}tick();})();<\/script>`),'binaryRainBtn',`/* anime.cutbar.in — binary rain button */`);

add('Buttons','Scan Line',demo(id=>`
<div style="display:flex;justify-content:center;padding:14px;">
<button id="${id}" style="padding:12px 28px;background:#0a0e1a;border:1px solid rgba(255,45,120,.35);color:#ff2d78;font-family:monospace;font-size:13px;font-weight:700;cursor:pointer;border-radius:8px;letter-spacing:2px;position:relative;overflow:hidden;">
  <div id="${id}scan" style="position:absolute;left:0;top:0;width:100%;height:2px;background:linear-gradient(90deg,transparent,#ff2d78,transparent);box-shadow:0 0 8px #ff2d78;transform:translateY(-2px);transition:none;pointer-events:none;"></div>
  SCAN
</button>
</div>
<script>(function(){const b=document.getElementById('${id}'),scan=document.getElementById('${id}scan');if(!b)return;b.addEventListener('mouseenter',()=>{let y=0;const h=b.offsetHeight;const anim=()=>{y=(y+2)%(h+4);scan.style.transform='translateY('+y+'px)';if(b.matches(':hover'))requestAnimationFrame(anim);else scan.style.transform='translateY(-2px)';};requestAnimationFrame(anim);});})();<\/script>`),'scanLineBtn',`/* anime.cutbar.in — scan line button */`);

add('Buttons','Neon Sign',demo(id=>`
<style>
@keyframes ns${id}{0%,100%{text-shadow:0 0 5px #00f5d4,0 0 15px #00f5d4,0 0 30px #00f5d4}48%,52%{text-shadow:none;opacity:.8}}
.nsb${id}{padding:12px 28px;background:transparent;border:2px solid rgba(0,245,212,.3);color:#00f5d4;font-family:monospace;font-size:16px;font-weight:700;cursor:pointer;border-radius:8px;letter-spacing:3px;animation:ns${id} 4s infinite;box-shadow:0 0 8px rgba(0,245,212,.15);transition:border-color .3s;}
.nsb${id}:hover{border-color:rgba(0,245,212,.7);box-shadow:0 0 20px rgba(0,245,212,.3);}
</style>
<button class="nsb${id}">NEON</button>`),'neonSignBtn',`/* anime.cutbar.in — neon sign button */`);

add('Buttons','Particle Burst',demo(id=>`
<div style="display:flex;justify-content:center;padding:18px;position:relative;">
<button id="${id}" style="padding:12px 28px;background:linear-gradient(135deg,#7b5cff,#ff2d78);border:none;border-radius:50px;color:#fff;font-family:monospace;font-size:12px;font-weight:700;cursor:pointer;letter-spacing:1px;position:relative;z-index:1;">★ BURST</button>
</div>
<script>(function(){const b=document.getElementById('${id}');if(!b)return;b.addEventListener('click',function(e){const wrap=b.parentElement;const cols=['#00f5d4','#7b5cff','#ff2d78','#ffaa00','#fff'];for(let i=0;i<22;i++){const p=document.createElement('div');const angle=Math.random()*360;const dist=30+Math.random()*70;const size=3+Math.random()*5;p.style.cssText='position:absolute;border-radius:50%;left:50%;top:50%;pointer-events:none;z-index:0;background:'+cols[Math.floor(Math.random()*cols.length)]+';width:'+size+'px;height:'+size+'px;margin:-'+size/2+'px;transition:all .7s cubic-bezier(.22,1,.36,1);';wrap.appendChild(p);setTimeout(()=>{p.style.transform='translate('+Math.cos(angle*Math.PI/180)*dist+'px,'+Math.sin(angle*Math.PI/180)*dist+'px) scale(0)';p.style.opacity='0';},10);setTimeout(()=>p.remove(),750);}});})();<\/script>`),'particleBurstBtn',`/* anime.cutbar.in — particle burst button */`);

add('Buttons','Morph Shape',demo(id=>`
<div style="display:flex;justify-content:center;padding:14px;">
<button id="${id}" style="padding:14px 32px;background:linear-gradient(135deg,#00f5d4,#7b5cff);border:none;color:#0a0e1a;font-family:monospace;font-size:13px;font-weight:700;cursor:pointer;border-radius:8px;letter-spacing:1px;transition:border-radius .4s cubic-bezier(.68,-.55,.265,1.55),transform .2s;box-shadow:0 4px 20px rgba(0,245,212,.3);">MORPH</button>
</div>
<script>(function(){const b=document.getElementById('${id}');if(!b)return;const shapes=['8px','50%','0px','30% 70% 70% 30%/30% 30% 70% 70%','8px'];let i=0;b.addEventListener('click',()=>{i=(i+1)%shapes.length;b.style.borderRadius=shapes[i];});b.addEventListener('mouseenter',()=>b.style.transform='scale(1.05)');b.addEventListener('mouseleave',()=>b.style.transform='scale(1)');})();<\/script>`),'morphShapeBtn',`/* anime.cutbar.in — morph shape button */`);

/* ── CARDS (8 more) ── */

add('Cards','Crypto Wallet',demo(id=>`
<div style="background:linear-gradient(135deg,#0a0e1a,#1a1030);border:1px solid rgba(123,92,255,.25);border-radius:16px;padding:16px;width:190px;font-family:'Space Mono',monospace;position:relative;overflow:hidden;">
  <div style="position:absolute;top:-20px;right:-20px;width:100px;height:100px;border-radius:50%;background:radial-gradient(circle,rgba(123,92,255,.15),transparent);"></div>
  <div style="font-size:8px;letter-spacing:2px;color:#7b5cff;margin-bottom:12px;">WALLET</div>
  <div style="font-size:22px;font-weight:700;color:#fff;margin-bottom:2px;">Ξ 4.2069</div>
  <div style="font-size:9px;color:#4a5580;margin-bottom:12px;">≈ $14,203.40 USD</div>
  <div style="height:1px;background:rgba(123,92,255,.2);margin-bottom:10px;"></div>
  <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
    <div style="font-size:8px;color:#4a5580;">24h Change</div>
    <div style="font-size:9px;color:#00cc66;font-weight:700;">+8.42%</div>
  </div>
  <div style="display:flex;gap:6px;">
    <button style="flex:1;padding:7px;background:linear-gradient(135deg,#7b5cff,#00f5d4);border:none;border-radius:8px;color:#0a0e1a;font-family:'Space Mono',monospace;font-size:9px;font-weight:700;cursor:pointer;">SEND</button>
    <button style="flex:1;padding:7px;background:transparent;border:1px solid rgba(123,92,255,.3);border-radius:8px;color:#7b5cff;font-family:'Space Mono',monospace;font-size:9px;cursor:pointer;">RECEIVE</button>
  </div>
</div>`),'cryptoWalletCard',`/* anime.cutbar.in — crypto wallet card */`);

add('Cards','Terminal Card',demo(id=>`
<div style="width:190px;background:#0a0a0a;border-radius:12px;overflow:hidden;font-family:'Space Mono',monospace;border:1px solid #1a1a2e;">
  <div style="background:#161616;padding:8px 10px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #1a1a2e;">
    <div style="width:8px;height:8px;border-radius:50%;background:#ff5f57;"></div>
    <div style="width:8px;height:8px;border-radius:50%;background:#febc2e;"></div>
    <div style="width:8px;height:8px;border-radius:50%;background:#28c840;"></div>
    <span style="font-size:8px;color:#444;margin-left:4px;">~/anime-cutbar</span>
  </div>
  <div style="padding:12px;font-size:9px;line-height:1.9;">
    <div style="color:#556080;">$ npm run dev</div>
    <div style="color:#00cc66;">✓ Server started</div>
    <div style="color:#7b5cff;">→ Local: <span style="color:#00f5d4;">localhost:3000</span></div>
    <div style="color:#00f5d4;">▶ Ready in 234ms</div>
    <div style="display:flex;gap:4px;margin-top:4px;"><span style="color:#00f5d4;">$</span><span id="${id}tc" style="color:#fff;"></span><span style="border-right:1.5px solid #00f5d4;animation:tb${id} .8s infinite;">&nbsp;</span></div>
  </div>
</div>
<style>@keyframes tb${id}{0%,100%{opacity:1}50%{opacity:0}}</style>
<script>(function(){const el=document.getElementById('${id}tc');if(!el)return;const cmds=['git push','pnpm build','deploy --prod'];let ci=0,ci2=0,del=false;function type(){if(!del){el.textContent=cmds[ci].slice(0,ci2+1);ci2++;if(ci2>=cmds[ci].length){del=true;setTimeout(type,900);return;}}else{el.textContent=cmds[ci].slice(0,ci2-1);ci2--;if(ci2<0){del=false;ci=(ci+1)%cmds.length;ci2=0;}}setTimeout(type,del?45:90);}type();})();<\/script>`),'terminalCard',`/* anime.cutbar.in — terminal card */`);

add('Cards','Music Player',demo(id=>`
<div style="background:linear-gradient(135deg,#0f0820,#1a0f30);border:1px solid rgba(123,92,255,.25);border-radius:18px;padding:16px;width:190px;font-family:'Space Mono',monospace;position:relative;overflow:hidden;">
  <div style="position:absolute;top:0;right:0;width:80px;height:80px;border-radius:0 18px 0 80px;background:linear-gradient(135deg,rgba(123,92,255,.2),rgba(255,45,120,.1));"></div>
  <div style="font-size:9px;color:#7b5cff;letter-spacing:2px;margin-bottom:8px;">NOW PLAYING</div>
  <div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:2px;">Neon Dreams</div>
  <div style="font-size:9px;color:#4a5580;margin-bottom:12px;">anime.cutbar × iBneRasool</div>
  <div id="${id}prog" style="height:3px;background:rgba(255,255,255,.08);border-radius:2px;margin-bottom:8px;cursor:pointer;">
    <div id="${id}bar" style="width:38%;height:100%;background:linear-gradient(90deg,#7b5cff,#ff2d78);border-radius:2px;position:relative;transition:width .1s;">
      <div style="position:absolute;right:-4px;top:-3px;width:9px;height:9px;border-radius:50%;background:#fff;box-shadow:0 0 6px rgba(123,92,255,.8);"></div>
    </div>
  </div>
  <div style="display:flex;justify-content:space-between;font-size:8px;color:#4a5580;margin-bottom:12px;"><span>1:24</span><span>3:42</span></div>
  <div style="display:flex;justify-content:center;align-items:center;gap:16px;">
    <button style="border:none;background:none;color:#4a5580;font-size:14px;cursor:pointer;" title="prev">⏮</button>
    <button id="${id}play" style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#7b5cff,#ff2d78);border:none;color:#fff;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 16px rgba(123,92,255,.4);">▶</button>
    <button style="border:none;background:none;color:#4a5580;font-size:14px;cursor:pointer;" title="next">⏭</button>
  </div>
</div>
<script>(function(){const play=document.getElementById('${id}play'),bar=document.getElementById('${id}bar');if(!play)return;let playing=false,pct=38,iv;play.addEventListener('click',()=>{playing=!playing;play.textContent=playing?'⏸':'▶';if(playing){iv=setInterval(()=>{pct=pct>=100?0:pct+.1;bar.style.width=pct+'%';},100);}else{clearInterval(iv);}});})();<\/script>`),'musicPlayerCard',`/* anime.cutbar.in — music player card */`);

add('Cards','Notification',demo(id=>`
<div style="width:190px;display:flex;flex-direction:column;gap:8px;">
  ${[{icon:'🔔',title:'New Follow',msg:'iBneRasool followed you',time:'2m',col:'#7b5cff'},{icon:'❤️',title:'New Like',msg:'Your loader got 420 likes',time:'8m',col:'#ff2d78'},{icon:'⚡',title:'Deploy Done',msg:'anime.cutbar.in is live!',time:'12m',col:'#00f5d4'}].map(n=>`
  <div style="background:var(--card,rgba(13,18,36,.94));border:1px solid rgba(${n.col==='#7b5cff'?'123,92,255':n.col==='#ff2d78'?'255,45,120':'0,245,212'},.2);border-radius:12px;padding:10px 12px;display:flex;align-items:flex-start;gap:10px;font-family:monospace;">
    <div style="font-size:18px;flex-shrink:0;">${n.icon}</div>
    <div style="flex:1;min-width:0;">
      <div style="font-size:10px;font-weight:700;color:#dde4f8;margin-bottom:2px;">${n.title}</div>
      <div style="font-size:8px;color:#4a5580;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${n.msg}</div>
    </div>
    <div style="font-size:8px;color:#4a5580;flex-shrink:0;">${n.time}</div>
  </div>`).join('')}
</div>`),'notificationCard',`/* anime.cutbar.in — notification card */`);

add('Cards','Code Snippet',demo(id=>`
<div style="width:190px;background:#0d0f1a;border:1px solid rgba(0,245,212,.2);border-radius:12px;overflow:hidden;font-family:'Space Mono',monospace;">
  <div style="background:#0a0c14;padding:7px 12px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(0,245,212,.1);">
    <span style="font-size:8px;color:#00f5d4;">loader.css</span>
    <span style="font-size:8px;color:#4a5580;">CSS</span>
  </div>
  <div style="padding:12px;font-size:9px;line-height:1.8;">
    <div><span style="color:#ff79c6;">.spinner</span> {</div>
    <div>&nbsp;&nbsp;<span style="color:#8be9fd;">width</span>: <span style="color:#f1fa8c;">50px</span>;</div>
    <div>&nbsp;&nbsp;<span style="color:#8be9fd;">border</span>: <span style="color:#f1fa8c;">4px solid</span> <span style="color:#00f5d4;">#00f5d4</span>;</div>
    <div>&nbsp;&nbsp;<span style="color:#8be9fd;">animation</span>: <span style="color:#bd93f9;">spin</span> <span style="color:#f1fa8c;">1s</span> infinite;</div>
    <div>}</div>
  </div>
</div>`),'codeSnippetCard',`/* anime.cutbar.in — code snippet card */`);

add('Cards','User Profile',demo(id=>`
<div style="background:var(--card,rgba(13,18,36,.94));border:1px solid rgba(123,92,255,.2);border-radius:18px;overflow:hidden;width:190px;font-family:monospace;">
  <div style="height:48px;background:linear-gradient(135deg,#7b5cff,#ff2d78);position:relative;">
    <div style="position:absolute;bottom:-22px;left:16px;width:44px;height:44px;border-radius:50%;border:3px solid var(--bg,#07090f);background:linear-gradient(135deg,#00f5d4,#7b5cff);display:flex;align-items:center;justify-content:center;font-size:20px;">👾</div>
    <div style="position:absolute;top:8px;right:12px;font-size:8px;background:rgba(0,0,0,.3);border-radius:100px;padding:3px 8px;color:#fff;letter-spacing:1px;">PRO</div>
  </div>
  <div style="padding:28px 16px 14px;">
    <div style="font-size:13px;font-weight:700;color:#dde4f8;margin-bottom:2px;">iBneRasool</div>
    <div style="font-size:8px;color:#4a5580;margin-bottom:10px;">@anime.cutbar.in · Srinagar 🏔️</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;text-align:center;margin-bottom:10px;">
      ${[['105','Components'],['2.4M','Served'],['∞','Passion']].map(([n,l])=>`<div><div style="font-size:12px;font-weight:700;color:#00f5d4;">${n}</div><div style="font-size:7px;color:#4a5580;">${l}</div></div>`).join('')}
    </div>
    <button style="width:100%;padding:7px;background:linear-gradient(135deg,#7b5cff,#00f5d4);border:none;border-radius:8px;color:#0a0e1a;font-family:monospace;font-size:9px;font-weight:700;cursor:pointer;letter-spacing:1px;">FOLLOW</button>
  </div>
</div>`),'userProfileCard',`/* anime.cutbar.in — user profile card */`);

add('Cards','Task Board',demo(id=>`
<div style="width:190px;font-family:monospace;">
  <div style="font-size:9px;letter-spacing:2px;color:#4a5580;margin-bottom:8px;">SPRINT BOARD</div>
  ${[{label:'TODO',color:'#4a5580',items:['Dopamine UI','Dark mode']},{label:'IN PROGRESS',color:'#ff8800',items:['Spinner Studio ⟳']},{label:'DONE',color:'#00cc66',items:['55 components ✓']}].map(col=>`
  <div style="margin-bottom:8px;">
    <div style="font-size:8px;color:${col.color};letter-spacing:1px;margin-bottom:4px;">${col.label}</div>
    ${col.items.map(item=>`<div style="background:var(--card,rgba(13,18,36,.94));border:1px solid rgba(255,255,255,.05);border-left:2px solid ${col.color};border-radius:0 6px 6px 0;padding:6px 8px;font-size:9px;color:#7b8ab8;margin-bottom:4px;">${item}</div>`).join('')}
  </div>`).join('')}
</div>`),'taskBoardCard',`/* anime.cutbar.in — task board card */`);

add('Cards','API Status',demo(id=>`
<div style="background:var(--card,rgba(13,18,36,.94));border:1px solid rgba(0,245,212,.15);border-radius:14px;padding:14px;width:190px;font-family:monospace;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
    <div style="font-size:9px;letter-spacing:2px;color:#4a5580;">API STATUS</div>
    <div style="font-size:8px;color:#00cc66;display:flex;align-items:center;gap:4px;"><span style="width:6px;height:6px;border-radius:50%;background:#00cc66;display:inline-block;box-shadow:0 0 6px #00cc66;animation:pulse${id} 2s infinite;"></span>OPERATIONAL</div>
  </div>
  <style>@keyframes pulse${id}{0%,100%{opacity:1}50%{opacity:.5}}</style>
  ${[['Components API','99.9%','#00cc66'],['CDN Edge','100%','#00cc66'],['Auth Service','98.1%','#ffaa00'],['Analytics','99.7%','#00cc66']].map(([n,u,c])=>`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
    <div style="font-size:9px;color:#7b8ab8;">${n}</div>
    <div style="font-size:9px;color:${c};font-weight:700;">${u}</div>
  </div>`).join('')}
  <div style="height:1px;background:rgba(255,255,255,.04);margin:10px 0;"></div>
  <div style="font-size:8px;color:#4a5580;">Avg response: <span style="color:#00f5d4;">34ms</span></div>
</div>`),'apiStatusCard',`/* anime.cutbar.in — api status card */`);

/* ── SCIENCE (5 more) ── */

add('Science','Double Pendulum',demo(id=>`
<canvas id="${id}" width="160" height="140" style="width:160px;height:140px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const g=9.8,L1=40,L2=32,m1=10,m2=8;let a1=Math.PI/2,a2=Math.PI/3,v1=0,v2=0;const trail=[];function tick(){const dt=.04;const A=-g*(2*m1+m2)*Math.sin(a1);const B=-m2*g*Math.sin(a1-2*a2);const C=-2*Math.sin(a1-a2)*m2*(v2*v2*L2+v1*v1*L1*Math.cos(a1-a2));const D=L1*(2*m1+m2-m2*Math.cos(2*a1-2*a2));const a1a=(A+B+C)/D;const E=2*Math.sin(a1-a2)*(v1*v1*L1*(m1+m2)+g*(m1+m2)*Math.cos(a1)+v2*v2*L2*m2*Math.cos(a1-a2));const F=L2*(2*m1+m2-m2*Math.cos(2*a1-2*a2));const a2a=E/F;v1+=a1a*dt;v2+=a2a*dt;a1+=v1*dt;a2+=v2*dt;const ox=80,oy=20;const x1=ox+Math.sin(a1)*L1,y1=oy+Math.cos(a1)*L1;const x2=x1+Math.sin(a2)*L2,y2=y1+Math.cos(a2)*L2;trail.push({x:x2,y:y2});if(trail.length>180)trail.shift();ctx.clearRect(0,0,160,140);ctx.beginPath();trail.forEach((p,i)=>{if(i===0)ctx.moveTo(p.x,p.y);else ctx.lineTo(p.x,p.y);});ctx.strokeStyle='rgba(255,45,120,.5)';ctx.lineWidth=1;ctx.stroke();ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(x1,y1);ctx.lineTo(x2,y2);ctx.strokeStyle='rgba(0,245,212,.7)';ctx.lineWidth=2;ctx.stroke();[{x:ox,y:oy,r:4,c:'#4a5580'},{x:x1,y:y1,r:m1/2,c:'#00f5d4'},{x:x2,y:y2,r:m2/2,c:'#ff2d78'}].forEach(b=>{ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,6.28);ctx.fillStyle=b.c;ctx.shadowBlur=10;ctx.shadowColor=b.c;ctx.fill();ctx.shadowBlur=0;});requestAnimationFrame(tick);}tick();})();<\/script>`),'doublePendulum',`/* anime.cutbar.in — double pendulum chaos */`);

add('Science','Conway Life',demo(id=>`
<canvas id="${id}" width="150" height="100" style="width:150px;height:100px;border-radius:6px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const W=30,H=20,sz=5;let grid=Array.from({length:H},()=>Array.from({length:W},()=>Math.random()>.65?1:0));const cols=['#00f5d4','#7b5cff','#ff2d78'];function step(){return grid.map((row,y)=>row.map((cell,x)=>{let n=0;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){if(dx===0&&dy===0)continue;n+=grid[(y+dy+H)%H][(x+dx+W)%W];}return cell?n===2||n===3?1:0:n===3?1:0;}));}function draw(){ctx.fillStyle='#07090f';ctx.fillRect(0,0,150,100);grid.forEach((row,y)=>row.forEach((cell,x)=>{if(cell){ctx.fillStyle=cols[(x+y)%3];ctx.shadowBlur=4;ctx.shadowColor=cols[(x+y)%3];ctx.fillRect(x*sz,y*sz,sz-1,sz-1);}ctx.shadowBlur=0;}));grid=step();setTimeout(draw,120);}draw();})();<\/script>`),'conwayLife',`/* anime.cutbar.in — conway game of life */`);

add('Science','Vector Field',demo(id=>`
<canvas id="${id}" width="160" height="100" style="width:160px;height:100px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;function draw(){ctx.clearRect(0,0,160,100);const step=20;for(let x=10;x<160;x+=step)for(let y=10;y<100;y+=step){const angle=Math.sin(x*.04+t)*Math.PI+Math.cos(y*.04-t)*.8;const len=8;const ex=x+Math.cos(angle)*len,ey=y+Math.sin(angle)*len;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(ex,ey);const hue=((Math.atan2(ey-y,ex-x)/Math.PI+1)*180)%360;ctx.strokeStyle="hsla("+(hue)+",80%,60%,.7)";ctx.lineWidth=1.5;ctx.stroke();ctx.beginPath();ctx.arc(ex,ey,2,0,6.28);ctx.fillStyle="hsla("+(hue)+",80%,70%,.9)";ctx.fill();}t+=.04;requestAnimationFrame(draw);}draw();})();<\/script>`),'vectorField',`/* anime.cutbar.in — vector field visualization */`);

add('Science','Fourier Sound',demo(id=>`
<canvas id="${id}" width="180" height="90" style="width:180px;height:90px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');let t=0;const freqs=[1,2,3,4,5,7];const amps=[20,12,8,5,4,3];function draw(){ctx.clearRect(0,0,180,90);ctx.fillStyle='rgba(7,9,15,.05)';ctx.fillRect(0,0,180,90);const grad=ctx.createLinearGradient(0,0,180,0);grad.addColorStop(0,'#00f5d4');grad.addColorStop(.5,'#7b5cff');grad.addColorStop(1,'#ff2d78');ctx.strokeStyle=grad;ctx.lineWidth=2;ctx.beginPath();for(let x=0;x<=180;x+=1){let y=45;freqs.forEach((f,i)=>y+=amps[i]*Math.sin(f*x*.035+f*t));if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();t+=.04;requestAnimationFrame(draw);}draw();})();<\/script>`),'fourierSound',`/* anime.cutbar.in — fourier sound synthesis */`);

add('Science','Turing Pattern',demo(id=>`
<canvas id="${id}" width="120" height="90" style="width:120px;height:90px;border-radius:6px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const W=60,H=45;let A=Array.from({length:H},()=>Array.from({length:W},()=>Math.random())),B=A.map(r=>r.map(v=>v+.1*(Math.random()-.5)));const Da=.2097,Db=.1050,f=.055,k=.062;function step(){const nA=A.map((r,y)=>r.map((a,x)=>{const b=B[y][x];const la=(A[(y-1+H)%H][x]+A[(y+1)%H][x]+A[y][(x-1+W)%W]+A[y][(x+1)%W]-4*a);return Math.max(0,Math.min(1,a+Da*la-a*b*b+f*(1-a)));}));const nB=B.map((r,y)=>r.map((b,x)=>{const a=A[y][x];const lb=(B[(y-1+H)%H][x]+B[(y+1)%H][x]+B[y][(x-1+W)%W]+B[y][(x+1)%W]-4*b);return Math.max(0,Math.min(1,b+Db*lb+a*b*b-(k+f)*b));}));A=nA;B=nB;}function draw(){for(let i=0;i<8;i++)step();const img=ctx.createImageData(W,H);A.forEach((r,y)=>r.forEach((v,x)=>{const idx=(y*W+x)*4;const c=Math.round(v*255);img.data[idx]=Math.round(c*.1+Math.round(B[y][x]*255)*.4);img.data[idx+1]=Math.round(c*.3);img.data[idx+2]=c;img.data[idx+3]=255;}));const tmp=document.createElement('canvas');tmp.width=W;tmp.height=H;tmp.getContext('2d').putImageData(img,0,0);ctx.imageSmoothingEnabled=true;ctx.drawImage(tmp,0,0,120,90);setTimeout(draw,80);}draw();})();<\/script>`),'turingPattern',`/* anime.cutbar.in — turing reaction-diffusion pattern */`);

/* ── NAVIGATION (5 more) ── */

add('Navigation','Command Palette',demo(id=>`
<div style="width:200px;background:rgba(10,14,30,.98);border:1px solid rgba(123,92,255,.3);border-radius:12px;overflow:hidden;font-family:monospace;box-shadow:0 20px 60px rgba(0,0,0,.5);">
  <div style="padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;gap:8px;">
    <span style="color:#4a5580;font-size:11px;">⌘</span>
    <span style="font-size:10px;color:#7b8ab8;flex:1;">Search commands...</span>
    <span style="font-size:8px;color:#333;background:#1a1a2e;padding:2px 5px;border-radius:4px;">ESC</span>
  </div>
  ${[['⊞','Components','Browse all'],['⚙','Tools','CSS Studio'],['◑','Theme','Toggle dark'],['⇄','Shuffle','Randomize'],['↗','GitHub','View source']].map(([i,n,d],idx)=>`
  <div style="padding:8px 12px;display:flex;align-items:center;gap:10px;cursor:pointer;${idx===0?'background:rgba(123,92,255,.15);':''}transition:background .15s;" onmouseover="this.style.background='rgba(123,92,255,.1)'" onmouseout="this.style.background='${idx===0?'rgba(123,92,255,.15)':'transparent'}'">
    <span style="font-size:13px;width:20px;text-align:center;${idx===0?'color:#00f5d4':'color:#4a5580'}">${i}</span>
    <div><div style="font-size:10px;color:${idx===0?'#fff':'#7b8ab8'};font-weight:${idx===0?700:400};">${n}</div><div style="font-size:8px;color:#4a5580;">${d}</div></div>
    ${idx===0?'<span style="margin-left:auto;font-size:8px;background:rgba(0,245,212,.1);color:#00f5d4;padding:2px 6px;border-radius:4px;border:1px solid rgba(0,245,212,.2);">↵</span>':''}
  </div>`).join('')}
</div>`),'commandPalette',`/* anime.cutbar.in — command palette */`);

add('Navigation','Radial Menu',demo(id=>`
<div style="position:relative;width:130px;height:130px;margin:0 auto;">
  <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#7b5cff,#00f5d4);display:flex;align-items:center;justify-content:center;font-size:16px;z-index:2;cursor:pointer;box-shadow:0 0 16px rgba(123,92,255,.5);">⊕</div>
  ${[['🏠','Home',0],['💻','Code',45],['⚙','Tools',90],['📸','Media',135],['★','Faves',180],['📊','Stats',225],['🎨','Design',270],['↗','Share',315]].map(([e,l,a])=>{const rad=(a-90)*Math.PI/180;const x=50+Math.cos(rad)*44;const y=50+Math.sin(rad)*44;return`<div style="position:absolute;left:${x}%;top:${y}%;transform:translate(-50%,-50%);width:28px;height:28px;border-radius:50%;background:rgba(13,18,36,.9);border:1px solid rgba(123,92,255,.3);display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;transition:all .2s;z-index:1;" title="${l}" onmouseover="this.style.background='rgba(123,92,255,.3)';this.style.borderColor='#7b5cff';this.style.transform='translate(-50%,-50%) scale(1.2)'" onmouseout="this.style.background='rgba(13,18,36,.9)';this.style.borderColor='rgba(123,92,255,.3)';this.style.transform='translate(-50%,-50%) scale(1)'">${e}</div>`;}).join('')}
</div>`),'radialMenu',`/* anime.cutbar.in — radial menu */`);

add('Navigation','Progress Steps',demo(id=>`
<div style="width:200px;font-family:monospace;">
  ${[['✓','Setup','Complete'],['✓','Design','Complete'],['⟳','Build','In Progress'],['○','Deploy','Pending']].map(([ic,t,s],i)=>`
  <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:${i<3?'0':'0'};">
    <div style="display:flex;flex-direction:column;align-items:center;">
      <div style="width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;${i<2?'background:linear-gradient(135deg,#00cc66,#00f5d4);color:#0a0e1a;':i===2?'background:linear-gradient(135deg,#7b5cff,#ff2d78);color:#fff;':'border:2px solid rgba(255,255,255,.15);color:#4a5580;'}">${ic}</div>
      ${i<3?`<div style="width:2px;height:20px;background:${i<2?'rgba(0,245,212,.4)':'rgba(255,255,255,.08)'};margin:2px 0;"></div>`:''}
    </div>
    <div style="padding-top:4px;padding-bottom:${i<3?'0':'0'};">
      <div style="font-size:10px;font-weight:700;color:${i<2?'#dde4f8':i===2?'#7b5cff':'#4a5580'};">${t}</div>
      <div style="font-size:8px;color:#4a5580;">${s}</div>
    </div>
  </div>`).join('')}
</div>`),'progressSteps',`/* anime.cutbar.in — progress steps */`);

add('Navigation','Side Rail',demo(id=>`
<div style="display:flex;gap:0;height:120px;">
  <div style="width:48px;background:rgba(10,14,30,.9);border:1px solid rgba(123,92,255,.2);border-radius:12px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:4px;font-size:18px;">
    ${[['⊞',true],['⚙',false],['◑',false],['★',false],['↗',false]].map(([e,on])=>`<div style="width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;${on?'background:linear-gradient(135deg,rgba(123,92,255,.3),rgba(0,245,212,.2));border:1px solid rgba(0,245,212,.3);':'border:1px solid transparent;'}" onmouseover="this.style.background='rgba(123,92,255,.2)'" onmouseout="this.style.background='${on?'linear-gradient(135deg,rgba(123,92,255,.3),rgba(0,245,212,.2))':'transparent'}">${e}</div>`).join('')}
  </div>
  <div style="flex:1;background:rgba(13,18,36,.5);border:1px solid rgba(255,255,255,.04);border-radius:0 12px 12px 0;padding:12px;font-family:monospace;font-size:9px;color:#4a5580;display:flex;align-items:center;justify-content:center;letter-spacing:1px;">MAIN CONTENT</div>
</div>`),'sideRail',`/* anime.cutbar.in — side rail nav */`);

add('Navigation','Keyboard Shortcuts',demo(id=>`
<div style="background:var(--card,rgba(13,18,36,.94));border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:14px;width:190px;font-family:monospace;">
  <div style="font-size:8px;letter-spacing:2px;color:#4a5580;margin-bottom:10px;">SHORTCUTS</div>
  ${[['⌘K','Command palette'],['⌘/','Toggle theme'],['⇄','Shuffle'],['?','Help']].map(([k,d])=>`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
    <div style="font-size:8px;color:#7b8ab8;">${d}</div>
    <div style="display:flex;gap:3px;">${k.split('').map(ch=>`<kbd style="display:inline-block;padding:2px 5px;border-radius:4px;background:#1a1a2e;border:1px solid rgba(255,255,255,.1);border-bottom:2px solid rgba(0,0,0,.5);font-size:8px;color:#00f5d4;font-family:monospace;">${ch}</kbd>`).join('')}</div>
  </div>`).join('')}
</div>`),'keyboardShortcuts',`/* anime.cutbar.in — keyboard shortcuts card */`);

/* ── TEXT FX (7 more) ── */

add('Text FX','Liquid Chrome',demo(id=>`
<style>
@keyframes lc${id}{0%{background-position:0% 50%}100%{background-position:200% 50%}}
</style>
<div style="font-family:'Orbitron',monospace,sans-serif;font-size:22px;font-weight:900;background:linear-gradient(90deg,#aaa,#fff,#ccc,#fff,#aaa,#888,#fff,#aaa);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:lc${id} 3s linear infinite;letter-spacing:3px;padding:10px;">CHROME</div>`),'liquidChrome',`/* anime.cutbar.in — liquid chrome text */`);

add('Text FX','Matrix Decode',demo(id=>`
<div id="${id}" style="font-family:monospace;font-size:16px;font-weight:700;color:#00cc66;letter-spacing:3px;cursor:pointer;padding:10px;text-shadow:0 0 10px rgba(0,204,102,.5);" title="hover">DECODE ME</div>
<script>(function(){const el=document.getElementById('${id}');if(!el)return;const target='DECODE ME';const ch='ｱｲｳｴｵｶｷｸｹｺ0123456789ABCDEF';let iv=null;el.addEventListener('mouseenter',()=>{clearInterval(iv);let frame=0;iv=setInterval(()=>{el.textContent=[...target].map((c,i)=>i<frame/2?c:c===' '?' ':ch[Math.floor(Math.random()*ch.length)]).join('');frame++;if(frame>=target.length*2+10)clearInterval(iv);},40);});el.addEventListener('mouseleave',()=>{clearInterval(iv);el.textContent=target;});})();<\/script>`),'matrixDecode',`/* anime.cutbar.in — matrix decode */`);

add('Text FX','Glitch Text',demo(id=>`
<style>
@keyframes gt1${id}{0%,100%{clip-path:inset(0 0 95% 0)}20%{clip-path:inset(30% 0 50% 0)}40%{clip-path:inset(60% 0 20% 0)}60%{clip-path:inset(10% 0 80% 0)}80%{clip-path:inset(70% 0 10% 0)}}
@keyframes gt2${id}{0%,100%{clip-path:inset(80% 0 5% 0)}30%{clip-path:inset(20% 0 60% 0);transform:translate(3px,0)}60%{clip-path:inset(50% 0 30% 0);transform:translate(-3px,0)}}
.gtw${id}{position:relative;font-family:'Orbitron',monospace,sans-serif;font-size:20px;font-weight:900;color:#fff;letter-spacing:2px;cursor:pointer;display:inline-block;padding:10px;}
.gtw${id}::before,.gtw${id}::after{content:attr(data-t);position:absolute;top:10px;left:10px;width:100%;animation:3s infinite;}
.gtw${id}:hover::before{animation-name:gt1${id};color:#00f5d4;text-shadow:2px 0 #00f5d4;}
.gtw${id}:hover::after{animation-name:gt2${id};color:#ff2d78;text-shadow:-2px 0 #ff2d78;}
</style>
<div class="gtw${id}" data-t="GLITCH">GLITCH</div>`),'glitchText',`/* anime.cutbar.in — glitch text effect */`);

add('Text FX','Counter Flip',demo(id=>`
<div style="display:flex;gap:6px;align-items:center;padding:10px;">
  ${['0','4','2','0'].map((d,i)=>`
  <div style="width:36px;height:48px;background:#0a0e1a;border:1px solid rgba(123,92,255,.3);border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:'Orbitron',monospace,sans-serif;font-size:22px;font-weight:900;color:#00f5d4;position:relative;overflow:hidden;box-shadow:inset 0 -2px 4px rgba(0,0,0,.4);cursor:pointer;" id="${id}d${i}" onclick="(function(el,n){let v=parseInt(el.textContent)||0;v=(v+1)%10;el.style.transform='rotateX(-90deg)';el.style.transition='transform .15s';setTimeout(()=>{el.textContent=v;el.style.transform='rotateX(0)';el.style.transition='transform .15s';},150);})(this)">${d}</div>
  `).join('')}
  <span style="font-family:monospace;font-size:9px;color:#4a5580;letter-spacing:1px;">CLICK DIGITS</span>
</div>`),'counterFlip',`/* anime.cutbar.in — flip counter */`);

add('Text FX','Rainbow Wave',demo(id=>`
<div id="${id}" style="font-family:'Orbitron',monospace,sans-serif;font-size:16px;font-weight:900;letter-spacing:3px;padding:10px;display:flex;"></div>
<script>(function(){const el=document.getElementById('${id}');if(!el)return;const txt='RAINBOW';let t=0;el.innerHTML=[...txt].map((ch,i)=>"<span id=\"${id}s"+i+"\">"+(ch)+"</span>").join('');function anim(){[...txt].forEach((ch,i)=>{const span=document.getElementById('${id}s${i}');if(span){const hue=(i/txt.length*360+t*2)%360;span.style.color="hsl("+(hue)+",90%,65%)";span.style.textShadow="0 0 10px hsl("+(hue)+",90%,65%)";span.style.transform="translateY("+(Math.sin(t*.08+i*.6)*5)+"px)";span.style.display='inline-block';}});t++;requestAnimationFrame(anim);}anim();})();<\/script>`),'rainbowWave',`/* anime.cutbar.in — rainbow wave text */`);

add('Text FX','Morse Code',demo(id=>`
<div style="padding:10px;display:flex;flex-direction:column;gap:8px;align-items:center;">
<div id="${id}d" style="font-family:monospace;font-size:14px;color:#00f5d4;letter-spacing:4px;text-shadow:0 0 8px #00f5d4;min-height:20px;"></div>
<div id="${id}m" style="font-family:monospace;font-size:10px;color:#4a5580;letter-spacing:2px;min-height:16px;"></div>
<div style="font-family:monospace;font-size:8px;color:#2a3050;letter-spacing:1px;">MORSE TRANSMIT</div>
</div>
<script>(function(){const disp=document.getElementById('${id}d'),morse=document.getElementById('${id}m');if(!disp)return;const TABLE={A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..',' ':'/'};const words=['ANIME','CUTBAR','UI MAGIC','TERMUX'];let wi=0;function transmit(){const word=words[wi%words.length];wi++;const code=[...word].map(c=>TABLE[c]||'').join(' ');disp.textContent='';morse.textContent=code;let ci=0;const iv=setInterval(()=>{if(ci<word.length)disp.textContent+=word[ci++];else{clearInterval(iv);setTimeout(transmit,1400);}},160);}transmit();})();<\/script>`),'morseCode',`/* anime.cutbar.in — morse code transmitter */`);

add('Text FX','Hologram Text',demo(id=>`
<style>
@keyframes ht${id}{0%,100%{opacity:.9;text-shadow:0 0 4px #00f5d4,0 0 8px #00f5d4}25%{opacity:.6;text-shadow:2px 0 4px #00f5d4,-2px 0 4px #ff2d78}50%{opacity:1;text-shadow:0 0 20px #00f5d4,0 0 40px #00f5d4}75%{opacity:.75;text-shadow:-1px 0 4px #7b5cff,1px 0 4px #00f5d4}}
</style>
<div style="font-family:'Orbitron',monospace,sans-serif;font-size:18px;font-weight:700;color:#00f5d4;letter-spacing:4px;padding:16px 10px;animation:ht${id} 3s infinite;border-top:1px solid rgba(0,245,212,.3);border-bottom:1px solid rgba(0,245,212,.3);text-align:center;position:relative;">
HOLOGRAM
<div style="position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,245,212,.03) 0px,rgba(0,245,212,.03) 1px,transparent 1px,transparent 4px);pointer-events:none;"></div>
</div>`),'hologramText',`/* anime.cutbar.in — hologram scan text */`);

console.log('✅ anime.cutbar.in v4 — '+Object.values(window.componentsList).reduce((a,c)=>a+c.length,0)+' components | '+Object.keys(window.componentsList).length+' categories | CSS Spinner Studio enabled');

/* ═══════════════════════════════════════════
   INPUTS  (8 components)
═══════════════════════════════════════════ */

// Neon Input Field
add('Inputs','Neon Input',demo(id=>`
<div style="display:flex;flex-direction:column;gap:6px;padding:10px;width:200px;">
  <label style="font-family:monospace;font-size:9px;letter-spacing:2px;color:#7b5cff;text-transform:uppercase;">USERNAME</label>
  <div style="position:relative;">
    <input id="${id}" type="text" placeholder="type here..." style="width:100%;padding:10px 14px;background:rgba(0,0,0,.4);border:1px solid rgba(123,92,255,.3);border-radius:8px;color:#fff;font-family:monospace;font-size:12px;outline:none;transition:all .3s;">
    <div id="${id}line" style="position:absolute;bottom:0;left:50%;width:0;height:2px;background:linear-gradient(90deg,#7b5cff,#00f5d4);border-radius:2px;transition:all .35s;transform:translateX(-50%);"></div>
  </div>
</div>
<script>(function(){const inp=document.getElementById('${id}'),line=document.getElementById('${id}line');if(!inp)return;inp.addEventListener('focus',()=>{inp.style.borderColor='rgba(123,92,255,.7)';inp.style.boxShadow='0 0 16px rgba(123,92,255,.2)';line.style.width='100%';});inp.addEventListener('blur',()=>{inp.style.borderColor='rgba(123,92,255,.3)';inp.style.boxShadow='none';line.style.width='0';});})();<\/script>
`),'neonInput',`/* anime.cutbar.in — neon input */`);

// OTP Input
add('Inputs','OTP Code',demo(id=>`
<div style="display:flex;gap:8px;padding:10px;justify-content:center;">
  <style>.otp${id}{width:38px;height:46px;background:rgba(0,0,0,.4);border:2px solid rgba(123,92,255,.25);border-radius:10px;text-align:center;color:#fff;font-family:monospace;font-size:18px;font-weight:700;outline:none;transition:all .25s;caret-color:#7b5cff;}.otp${id}:focus{border-color:#7b5cff;box-shadow:0 0 14px rgba(123,92,255,.3);background:rgba(123,92,255,.05);}.otp${id}.filled{border-color:#00f5d4;background:rgba(0,245,212,.04);}</style>
  ${[0,1,2,3,4,5].map(i=>`<input class="otp${id}" maxlength="1" type="text" inputmode="numeric">`).join('')}
</div>
<script>(function(){const inputs=[...document.querySelectorAll('.otp${id}')];inputs.forEach((inp,i)=>{inp.addEventListener('input',e=>{inp.value=inp.value.replace(/\D/g,'');inp.classList.toggle('filled',inp.value!=='');if(inp.value&&i<inputs.length-1)inputs[i+1].focus();});inp.addEventListener('keydown',e=>{if(e.key==='Backspace'&&!inp.value&&i>0)inputs[i-1].focus();});});})();<\/script>
`),'otpInput',`/* anime.cutbar.in — OTP code input */`);

// Search Bar — animated
add('Inputs','Search Bar',demo(id=>`
<div id="${id}wrap" style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(0,0,0,.35);border:1px solid rgba(123,92,255,.2);border-radius:100px;width:220px;transition:all .3s;cursor:text;" onclick="document.getElementById('${id}').focus()">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5580" stroke-width="2.5" id="${id}icon"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  <input id="${id}" type="text" placeholder="Search components..." style="border:none;background:transparent;color:#dde4f8;font-family:monospace;font-size:11px;outline:none;width:100%;caret-color:#7b5cff;">
</div>
<script>(function(){const inp=document.getElementById('${id}'),wrap=document.getElementById('${id}wrap'),icon=document.getElementById('${id}icon');if(!inp)return;inp.addEventListener('focus',()=>{wrap.style.borderColor='rgba(123,92,255,.6)';wrap.style.boxShadow='0 0 20px rgba(123,92,255,.15)';icon.setAttribute('stroke','#7b5cff');});inp.addEventListener('blur',()=>{wrap.style.borderColor='rgba(123,92,255,.2)';wrap.style.boxShadow='none';icon.setAttribute('stroke','#4a5580');});})();<\/script>
`),'searchBar',`/* anime.cutbar.in — animated search bar */`);

// Range Slider — neon
add('Inputs','Neon Slider',demo(id=>`
<div style="padding:16px 20px;width:220px;">
  <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
    <span style="font-family:monospace;font-size:9px;letter-spacing:2px;color:#4a5580;">INTENSITY</span>
    <span id="${id}val" style="font-family:monospace;font-size:12px;color:#00f5d4;font-weight:700;">65%</span>
  </div>
  <style>
  .nslider${id}{-webkit-appearance:none;appearance:none;width:100%;height:4px;border-radius:2px;background:rgba(255,255,255,.08);outline:none;}
  .nslider${id}::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#00f5d4,#7b5cff);cursor:pointer;box-shadow:0 0 12px rgba(0,245,212,.6);transition:transform .2s;}
  .nslider${id}::-webkit-slider-thumb:hover{transform:scale(1.2);}
  </style>
  <input type="range" class="nslider${id}" id="${id}" min="0" max="100" value="65" style="--v:65%">
</div>
<script>(function(){const s=document.getElementById('${id}'),v=document.getElementById('${id}val');if(!s)return;function upd(){const pct=s.value+'%';v.textContent=pct;s.style.background='linear-gradient(90deg,#00f5d4 '+pct+',rgba(255,255,255,.08) '+pct+')';}s.addEventListener('input',upd);upd();})();<\/script>
`),'neonSlider',`/* anime.cutbar.in — neon range slider */`);

// Toggle Checkbox
add('Inputs','Glow Checkbox',demo(id=>`
<div style="display:flex;flex-direction:column;gap:10px;padding:10px;">
  <style>.gcb${id}{display:flex;align-items:center;gap:10px;cursor:pointer;}.gcb${id} input{display:none;}.gcb${id} .box{width:20px;height:20px;border-radius:5px;border:2px solid rgba(123,92,255,.4);background:transparent;transition:all .25s;display:flex;align-items:center;justify-content:center;flex-shrink:0;}.gcb${id} input:checked~.box{background:linear-gradient(135deg,#7b5cff,#00f5d4);border-color:transparent;box-shadow:0 0 12px rgba(123,92,255,.5);}.gcb${id} .lbl{font-family:monospace;font-size:11px;color:#7b8ab8;transition:color .25s;}.gcb${id} input:checked~.lbl{color:#dde4f8;}</style>
  ${['Animations enabled','Dark mode','Auto copy','Show previews'].map((l,i)=>`
  <label class="gcb${id}">
    <input type="checkbox" ${i<2?'checked':''}>
    <div class="box"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
    <span class="lbl">${l}</span>
  </label>`).join('')}
</div>
`),'glowCheckbox',`/* anime.cutbar.in — glow checkbox */`);

// Star Rating
add('Inputs','Star Rating',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:10px;">
  <div id="${id}" style="display:flex;gap:4px;cursor:pointer;">
    ${[1,2,3,4,5].map(i=>`<div data-v="${i}" style="font-size:28px;transition:all .2s;filter:grayscale(1);opacity:.4;transform:scale(.9);">★</div>`).join('')}
  </div>
  <div id="${id}lb" style="font-family:monospace;font-size:9px;color:#4a5580;letter-spacing:2px;">RATE THIS</div>
</div>
<script>(function(){const wrap=document.getElementById('${id}'),lb=document.getElementById('${id}lb');if(!wrap)return;const stars=[...wrap.children];const labels=['TERRIBLE','BAD','OKAY','GOOD','AMAZING!'];let selected=0;function paint(n,hover){stars.forEach((s,i)=>{if(i<n){s.style.filter='none';s.style.opacity='1';s.style.transform='scale(1.1)';s.style.color=hover?'#ffcc00':'#ffaa00';s.style.textShadow=hover?'0 0 12px #ffcc00':'0 0 8px #ffaa00';}else{s.style.filter='grayscale(1)';s.style.opacity='.35';s.style.transform='scale(.9)';s.style.color='';s.style.textShadow='';}});}stars.forEach(s=>{s.addEventListener('mouseenter',()=>{const v=+s.dataset.v;paint(v,true);lb.textContent=labels[v-1];lb.style.color='#ffcc00';});s.addEventListener('mouseleave',()=>{paint(selected,false);lb.textContent=selected?labels[selected-1]:'RATE THIS';lb.style.color=selected?'#ffaa00':'#4a5580';});s.addEventListener('click',()=>{selected=+s.dataset.v;paint(selected,false);lb.textContent=labels[selected-1];lb.style.color='#ffaa00';});});})();<\/script>
`),'starRating',`/* anime.cutbar.in — star rating input */`);

// Color Picker Display
add('Inputs','Neon Color Pick',demo(id=>`
<div style="padding:10px;display:flex;flex-direction:column;gap:10px;align-items:center;">
  <div id="${id}preview" style="width:80px;height:80px;border-radius:16px;background:#7b5cff;box-shadow:0 0 24px rgba(123,92,255,.5);transition:all .3s;border:3px solid rgba(255,255,255,.1);"></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;max-width:180px;">
    ${['#00f5d4','#7b5cff','#ff2d78','#ffaa00','#00cc55','#ff6600','#0088ff','#ff44aa'].map(c=>`<div onclick="document.getElementById('${id}preview').style.background='${c}';document.getElementById('${id}preview').style.boxShadow='0 0 24px ${c}88'" style="width:22px;height:22px;border-radius:6px;background:${c};cursor:pointer;transition:transform .2s;box-shadow:0 2px 8px ${c}66;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"></div>`).join('')}
  </div>
  <input type="color" id="${id}pick" style="opacity:0;width:0;height:0;position:absolute;" onchange="const c=this.value;document.getElementById('${id}preview').style.background=c;document.getElementById('${id}preview').style.boxShadow='0 0 24px '+c+'88'">
  <div onclick="document.getElementById('${id}pick').click()" style="font-family:monospace;font-size:9px;color:#4a5580;cursor:pointer;letter-spacing:2px;border:1px solid rgba(255,255,255,.08);padding:4px 10px;border-radius:6px;" onmouseover="this.style.color='#7b5cff'" onmouseout="this.style.color='#4a5580'">CUSTOM COLOR</div>
</div>
`),'neonColorPick',`/* anime.cutbar.in — neon color picker */`);

// Tag Input
add('Inputs','Tag Input',demo(id=>`
<div style="padding:10px;width:220px;">
  <div id="${id}tags" style="display:flex;flex-wrap:wrap;gap:5px;padding:8px;background:rgba(0,0,0,.35);border:1px solid rgba(123,92,255,.25);border-radius:10px;min-height:42px;cursor:text;" onclick="document.getElementById('${id}inp').focus()">
    <style>.tag${id}{display:flex;align-items:center;gap:4px;padding:3px 8px;background:rgba(123,92,255,.2);border:1px solid rgba(123,92,255,.35);border-radius:6px;font-family:monospace;font-size:10px;color:#a090ff;}</style>
    <div class="tag${id}">UI <span onclick="this.parentElement.remove()" style="cursor:pointer;color:#ff2d78;font-size:12px;line-height:1;">×</span></div>
    <div class="tag${id}">CSS <span onclick="this.parentElement.remove()" style="cursor:pointer;color:#ff2d78;font-size:12px;line-height:1;">×</span></div>
    <input id="${id}inp" type="text" placeholder="add tag..." style="border:none;background:transparent;color:#dde4f8;font-family:monospace;font-size:11px;outline:none;min-width:60px;flex:1;caret-color:#7b5cff;">
  </div>
</div>
<script>(function(){const inp=document.getElementById('${id}inp'),tags=document.getElementById('${id}tags');if(!inp)return;inp.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===',')&&inp.value.trim()){e.preventDefault();const v=inp.value.trim().replace(',','');const tag=document.createElement('div');tag.className='tag${id}';tag.innerHTML=v+' <span onclick="this.parentElement.remove()" style="cursor:pointer;color:#ff2d78;font-size:12px;line-height:1;">×</span>';tags.insertBefore(tag,inp);inp.value='';}else if(e.key==='Backspace'&&!inp.value){const tagEls=[...tags.querySelectorAll('.tag${id}')];if(tagEls.length)tagEls[tagEls.length-1].remove();}});})();<\/script>
`),'tagInput',`/* anime.cutbar.in — tag input */`);

/* ═══════════════════════════════════════════
   GAMING  (8 components)
═══════════════════════════════════════════ */

// Health Bar
add('Gaming','Health Bar',demo(id=>`
<div style="padding:14px;width:220px;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
    <span style="font-family:monospace;font-size:10px;color:#ff2d78;letter-spacing:1px;">❤ HEALTH</span>
    <span id="${id}val" style="font-family:monospace;font-size:10px;color:#ff2d78;">78 / 100</span>
  </div>
  <div style="height:14px;background:rgba(255,0,0,.1);border-radius:7px;overflow:hidden;border:1px solid rgba(255,45,120,.2);">
    <div id="${id}bar" style="height:100%;width:78%;background:linear-gradient(90deg,#ff2d78,#ff6060);border-radius:7px;transition:width .5s cubic-bezier(.4,0,.2,1);box-shadow:0 0 10px rgba(255,45,120,.5);position:relative;overflow:hidden;">
      <div style="position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.1) 0px,rgba(255,255,255,.1) 10px,transparent 10px,transparent 20px);animation:hbscan${id} 2s linear infinite;"></div>
    </div>
  </div>
  <div style="display:flex;gap:8px;margin-top:10px;justify-content:center;">
    <button onclick="const b=document.getElementById('${id}bar'),v=document.getElementById('${id}val');let pct=parseFloat(b.style.width)||78;pct=Math.max(0,pct-15);b.style.width=pct+'%';v.textContent=Math.round(pct)+' / 100';b.style.background=pct<30?'linear-gradient(90deg,#ff0000,#ff4444)':pct<60?'linear-gradient(90deg,#ff6600,#ff9900)':'linear-gradient(90deg,#ff2d78,#ff6060)';" style="padding:4px 12px;border:1px solid rgba(255,45,120,.3);background:transparent;color:#ff2d78;font-family:monospace;font-size:10px;cursor:pointer;border-radius:6px;">- HIT</button>
    <button onclick="const b=document.getElementById('${id}bar'),v=document.getElementById('${id}val');let pct=parseFloat(b.style.width)||78;pct=Math.min(100,pct+20);b.style.width=pct+'%';v.textContent=Math.round(pct)+' / 100';b.style.background='linear-gradient(90deg,#ff2d78,#ff6060)';" style="padding:4px 12px;border:1px solid rgba(0,245,212,.3);background:transparent;color:#00f5d4;font-family:monospace;font-size:10px;cursor:pointer;border-radius:6px;">+ HEAL</button>
  </div>
  <style>@keyframes hbscan${id}{from{transform:translateX(-100%)}to{transform:translateX(200%)}}</style>
</div>
`),'healthBar',`/* anime.cutbar.in — RPG health bar */`);

// XP Bar
add('Gaming','XP Level Bar',demo(id=>`
<div style="padding:14px;width:220px;">
  <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
    <span style="font-family:monospace;font-size:10px;color:#7b5cff;letter-spacing:1px;">⚔ LVL 7</span>
    <span id="${id}xp" style="font-family:monospace;font-size:10px;color:#7b5cff;">3,240 XP</span>
  </div>
  <div style="height:10px;background:rgba(123,92,255,.1);border-radius:5px;overflow:hidden;border:1px solid rgba(123,92,255,.2);">
    <div id="${id}xpbar" style="height:100%;width:54%;background:linear-gradient(90deg,#7b5cff,#00f5d4);border-radius:5px;transition:width .6s cubic-bezier(.34,1.56,.64,1);box-shadow:0 0 10px rgba(123,92,255,.5);"></div>
  </div>
  <div style="font-family:monospace;font-size:8px;color:#4a5580;margin-top:4px;text-align:right;">6,000 to next level</div>
  <button onclick="const b=document.getElementById('${id}xpbar'),xp=document.getElementById('${id}xp');let pct=parseFloat(b.style.width)||54;pct=Math.min(100,pct+Math.random()*18+5);if(pct>=100){pct=0;this.previousElementSibling.previousElementSibling.previousElementSibling.querySelector('span').textContent='⚔ LVL 8';}b.style.width=pct+'%';xp.textContent=Math.round(pct*60)+' XP';" style="margin-top:10px;width:100%;padding:6px;border:1px solid rgba(123,92,255,.3);background:transparent;color:#7b5cff;font-family:monospace;font-size:10px;cursor:pointer;border-radius:6px;letter-spacing:1px;">+ GAIN XP</button>
</div>
`),'xpLevelBar',`/* anime.cutbar.in — XP level bar */`);

// Skill Tree Node
add('Gaming','Skill Tree',demo(id=>`
<div style="padding:10px;display:flex;flex-direction:column;align-items:center;gap:6px;">
  <style>.stn${id}{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .25s;font-size:18px;position:relative;}.stn${id}.locked{background:rgba(255,255,255,.04);border:2px solid rgba(255,255,255,.08);filter:grayscale(1);opacity:.4;cursor:not-allowed;}.stn${id}.unlocked{background:rgba(123,92,255,.15);border:2px solid rgba(123,92,255,.4);box-shadow:0 0 14px rgba(123,92,255,.25);}.stn${id}.active{background:linear-gradient(135deg,rgba(123,92,255,.3),rgba(0,245,212,.2));border:2px solid #00f5d4;box-shadow:0 0 20px rgba(0,245,212,.4);}.conn${id}{width:2px;height:16px;background:rgba(255,255,255,.1);border-radius:1px;}.conn${id}.lit{background:linear-gradient(to bottom,#7b5cff,#00f5d4);box-shadow:0 0 6px rgba(123,92,255,.4);}</style>
  <div class="stn${id} active" title="⚡ Speed I — Unlocked">⚡</div>
  <div class="conn${id} lit"></div>
  <div style="display:flex;gap:20px;align-items:flex-start;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
      <div class="stn${id} unlocked" onclick="this.classList.toggle('active');this.classList.toggle('unlocked')" title="🔥 Fire I">🔥</div>
      <div class="conn${id}"></div>
      <div class="stn${id} locked" title="💥 Fire II">💥</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
      <div class="stn${id} unlocked" onclick="this.classList.toggle('active');this.classList.toggle('unlocked')" title="🛡 Shield I">🛡</div>
      <div class="conn${id}"></div>
      <div class="stn${id} locked" title="⚔ Shield II">⚔</div>
    </div>
  </div>
</div>
`),'skillTree',`/* anime.cutbar.in — skill tree nodes */`);

// Lives Counter
add('Gaming','Lives Counter',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:14px;">
  <div id="${id}lives" style="display:flex;gap:6px;">
    ${[1,2,3].map(()=>`<div style="font-size:26px;transition:all .3s;filter:drop-shadow(0 0 6px rgba(255,45,120,.7));">❤️</div>`).join('')}
  </div>
  <div style="display:flex;gap:8px;">
    <button onclick="const l=document.getElementById('${id}lives');const hearts=[...l.children];const active=hearts.filter(h=>!h.style.opacity||h.style.opacity==='1');if(active.length){const h=active[active.length-1];h.style.transform='scale(0)';h.style.opacity='0';h.textContent='🖤';setTimeout(()=>{h.style.transform='scale(1)';},300);}" style="padding:5px 12px;border:1px solid rgba(255,45,120,.3);background:transparent;color:#ff2d78;font-family:monospace;font-size:10px;cursor:pointer;border-radius:6px;">- LIFE</button>
    <button onclick="const l=document.getElementById('${id}lives');const hearts=[...l.children];const dead=hearts.filter(h=>h.textContent==='🖤');if(dead.length){const h=dead[0];h.style.transform='scale(0)';setTimeout(()=>{h.textContent='❤️';h.style.opacity='1';h.style.transform='scale(1.3)';setTimeout(()=>h.style.transform='scale(1)',200);},150);}" style="padding:5px 12px;border:1px solid rgba(0,245,212,.3);background:transparent;color:#00f5d4;font-family:monospace;font-size:10px;cursor:pointer;border-radius:6px;">+ LIFE</button>
  </div>
</div>
`),'livesCounter',`/* anime.cutbar.in — gaming lives counter */`);

// Score Counter
add('Gaming','Score Counter',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:14px;">
  <div style="font-family:monospace;font-size:9px;letter-spacing:3px;color:#4a5580;">SCORE</div>
  <div id="${id}score" style="font-family:'Orbitron',monospace,sans-serif;font-size:36px;font-weight:900;color:#ffcc00;text-shadow:0 0 20px rgba(255,204,0,.5);transition:all .2s;letter-spacing:2px;">000000</div>
  <div style="display:flex;gap:6px;">
    ${[100,500,1000].map(pts=>`<button onclick="const el=document.getElementById('${id}score');let v=parseInt(el.textContent)||0;v+=${pts};el.textContent=String(v).padStart(6,'0');el.style.transform='scale(1.1)';el.style.color='#fff';setTimeout(()=>{el.style.transform='scale(1)';el.style.color='#ffcc00';},200);" style="padding:4px 10px;border:1px solid rgba(255,204,0,.2);background:transparent;color:#ffcc00;font-family:monospace;font-size:10px;cursor:pointer;border-radius:6px;">+${pts}</button>`).join('')}
  </div>
</div>
`),'scoreCounter',`/* anime.cutbar.in — score counter */`);

// Achievement Badge
add('Gaming','Achievement Badge',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:14px;">
  <div id="${id}badge" style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#1a1a2e,#0d1120);border:3px solid rgba(255,204,0,.2);display:flex;align-items:center;justify-content:center;font-size:32px;cursor:pointer;transition:all .35s;position:relative;overflow:hidden;">
    🏆
    <div id="${id}shine" style="position:absolute;inset:0;background:conic-gradient(transparent 0deg,rgba(255,204,0,.2) 90deg,transparent 180deg);border-radius:50%;animation:badgeSpin${id} 3s linear infinite;"></div>
  </div>
  <div style="text-align:center;">
    <div style="font-family:monospace;font-size:11px;font-weight:700;color:#ffcc00;letter-spacing:1px;">MASTER BUILDER</div>
    <div style="font-family:monospace;font-size:9px;color:#4a5580;margin-top:2px;">Built 100 components</div>
  </div>
  <style>@keyframes badgeSpin${id}{to{transform:rotate(360deg)}}</style>
</div>
`),'achievementBadge',`/* anime.cutbar.in — achievement badge */`);

// Game Controller Button
add('Gaming','D-Pad',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;padding:10px;">
  <div style="display:grid;grid-template-columns:repeat(3,36px);grid-template-rows:repeat(3,36px);gap:3px;">
    ${['','▲','','◄','●','►','','▼',''].map((l,i)=>l?
      `<div onclick="document.getElementById('${id}dir').textContent='${['','UP','','LEFT','PRESS','RIGHT','','DOWN',''][i]}';this.style.background='linear-gradient(135deg,#7b5cff,#00f5d4)';this.style.boxShadow='0 0 12px rgba(123,92,255,.5)';setTimeout(()=>{this.style.background='rgba(255,255,255,.06)';this.style.boxShadow='none';},300);" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:${i===4?'50%':'8px'};display:flex;align-items:center;justify-content:center;font-size:${i===4?'10px':'14px'};color:#7b8ab8;cursor:pointer;transition:all .1s;user-select:none;">${l}</div>`
      :`<div></div>`
    ).join('')}
  </div>
  <div id="${id}dir" style="font-family:monospace;font-size:10px;color:#4a5580;margin-top:10px;letter-spacing:2px;min-height:16px;"></div>
</div>
`),'dPad',`/* anime.cutbar.in — D-pad controller */`);

// Inventory Slot
add('Gaming','Inventory Slots',demo(id=>`
<div style="padding:10px;">
  <div style="display:grid;grid-template-columns:repeat(4,44px);gap:6px;">
    <style>.inv${id}{width:44px;height:44px;border-radius:8px;background:rgba(0,0,0,.3);border:2px solid rgba(255,255,255,.07);display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer;transition:all .2s;position:relative;}.inv${id}:hover{border-color:rgba(123,92,255,.5);box-shadow:0 0 10px rgba(123,92,255,.2);}.inv${id}.sel{border-color:#00f5d4;box-shadow:0 0 14px rgba(0,245,212,.3);background:rgba(0,245,212,.04);}.inv${id} .qty{position:absolute;bottom:2px;right:4px;font-family:monospace;font-size:8px;color:#ffaa00;font-weight:700;}</style>
    ${[['⚔️','1'],['🛡️','1'],['🧪','5'],['💎','12'],['🗝️','3'],['🏹','8'],['',''],['','']].map(([e,q])=>`
    <div class="inv${id}" onclick="[...document.querySelectorAll('.inv${id}')].forEach(i=>i.classList.remove('sel'));this.classList.add('sel')">
      ${e}${q?`<span class="qty">${q}</span>`:''}
    </div>`).join('')}
  </div>
</div>
`),'inventorySlots',`/* anime.cutbar.in — RPG inventory slots */`);

/* ═══════════════════════════════════════════
   CLOCKS  (5 components)
═══════════════════════════════════════════ */

// Analog Clock — real time
add('Clocks','Analog Clock',demo(id=>`
<canvas id="${id}" width="120" height="120" style="width:120px;height:120px;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const cx=60,cy=60,R=54;function draw(){const now=new Date();const h=now.getHours()%12,m=now.getMinutes(),s=now.getSeconds(),ms=now.getMilliseconds();ctx.clearRect(0,0,120,120);
// Face
ctx.beginPath();ctx.arc(cx,cy,R,0,6.28);ctx.fillStyle='#0d1120';ctx.fill();ctx.strokeStyle='rgba(0,245,212,.25)';ctx.lineWidth=2;ctx.stroke();
// Hour markers
for(let i=0;i<12;i++){const a=i/12*6.28-1.57;const x1=cx+Math.cos(a)*(R-6),y1=cy+Math.sin(a)*(R-6);const x2=cx+Math.cos(a)*(R-2),y2=cy+Math.sin(a)*(R-2);ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.strokeStyle=i%3===0?'rgba(0,245,212,.6)':'rgba(0,245,212,.2)';ctx.lineWidth=i%3===0?2:1;ctx.stroke();}
// Hour hand
const ha=(h+m/60)/12*6.28-1.57;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(ha)*30,cy+Math.sin(ha)*30);ctx.strokeStyle='#dde4f8';ctx.lineWidth=3;ctx.lineCap='round';ctx.stroke();
// Min hand
const ma=(m+s/60)/60*6.28-1.57;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(ma)*40,cy+Math.sin(ma)*40);ctx.strokeStyle='#00f5d4';ctx.lineWidth=2;ctx.stroke();
// Sec hand
const sa=(s+ms/1000)/60*6.28-1.57;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(sa)*44,cy+Math.sin(sa)*44);ctx.strokeStyle='#ff2d78';ctx.lineWidth=1.5;ctx.stroke();
// Center dot
ctx.beginPath();ctx.arc(cx,cy,4,0,6.28);ctx.fillStyle='#fff';ctx.fill();}
setInterval(draw,50);draw();})();<\/script>
`),'analogClock',`/* anime.cutbar.in — real-time analog clock */`);

// Digital Clock
add('Clocks','Digital Clock',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px;">
  <div id="${id}time" style="font-family:'Orbitron',monospace,sans-serif;font-size:30px;font-weight:700;color:#00f5d4;text-shadow:0 0 20px rgba(0,245,212,.5);letter-spacing:3px;"></div>
  <div id="${id}date" style="font-family:monospace;font-size:9px;color:#4a5580;letter-spacing:3px;"></div>
  <div id="${id}tz" style="font-family:monospace;font-size:8px;color:#2a3050;letter-spacing:2px;">ASIA/KOLKATA</div>
</div>
<script>(function(){const t=document.getElementById('${id}time'),d=document.getElementById('${id}date');if(!t)return;function tick(){const now=new Date();const h=String(now.getHours()).padStart(2,'0'),m=String(now.getMinutes()).padStart(2,'0'),s=String(now.getSeconds()).padStart(2,'0');t.textContent=h+':'+m+':'+s;const days=['SUN','MON','TUE','WED','THU','FRI','SAT'];const months=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];d.textContent=days[now.getDay()]+' '+String(now.getDate()).padStart(2,'0')+' '+months[now.getMonth()]+' '+now.getFullYear();}setInterval(tick,500);tick();})();<\/script>
`),'digitalClock',`/* anime.cutbar.in — real-time digital clock */`);

// Flip Clock
add('Clocks','Flip Clock',demo(id=>`
<div style="display:flex;gap:6px;align-items:center;padding:10px;">
  <style>.fc${id}{width:36px;height:46px;background:linear-gradient(180deg,#1a1a2e 50%,#0d1120 50%);border-radius:6px;display:flex;align-items:center;justify-content:center;font-family:'Orbitron',monospace,sans-serif;font-size:22px;font-weight:700;color:#00f5d4;text-shadow:0 0 10px rgba(0,245,212,.5);border:1px solid rgba(0,245,212,.15);position:relative;}.fc${id}::after{content:'';position:absolute;top:50%;left:0;right:0;height:1px;background:rgba(0,0,0,.5);}</style>
  <div id="${id}h1" class="fc${id}">0</div>
  <div id="${id}h2" class="fc${id}">0</div>
  <div style="font-family:monospace;font-size:22px;color:#00f5d4;margin:0 2px;animation:flipColon${id} 1s step-end infinite;">:</div>
  <div id="${id}m1" class="fc${id}">0</div>
  <div id="${id}m2" class="fc${id}">0</div>
  <div style="font-family:monospace;font-size:22px;color:#ff2d78;margin:0 2px;animation:flipColon${id} 1s step-end infinite;">:</div>
  <div id="${id}s1" class="fc${id}" style="color:#ff2d78;text-shadow:0 0 10px rgba(255,45,120,.5);border-color:rgba(255,45,120,.15);">0</div>
  <div id="${id}s2" class="fc${id}" style="color:#ff2d78;text-shadow:0 0 10px rgba(255,45,120,.5);border-color:rgba(255,45,120,.15);">0</div>
  <style>@keyframes flipColon${id}{0%,100%{opacity:1}50%{opacity:0}}</style>
</div>
<script>(function(){function u(id,v){const el=document.getElementById(id);if(el)el.textContent=v;}function tick(){const n=new Date();const h=String(n.getHours()).padStart(2,'0');const m=String(n.getMinutes()).padStart(2,'0');const s=String(n.getSeconds()).padStart(2,'0');u('${id}h1',h[0]);u('${id}h2',h[1]);u('${id}m1',m[0]);u('${id}m2',m[1]);u('${id}s1',s[0]);u('${id}s2',s[1]);}setInterval(tick,500);tick();})();<\/script>
`),'flipClock',`/* anime.cutbar.in — flip clock */`);

// Countdown Timer
add('Clocks','Countdown Timer',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:14px;">
  <div style="display:flex;gap:12px;">
    ${[['${id}cd','00','MIN'],['${id}cs','00','SEC']].map(([eid,def,lbl])=>`
    <div style="text-align:center;">
      <div id="${eid}" style="font-family:'Orbitron',monospace,sans-serif;font-size:32px;font-weight:700;color:#7b5cff;text-shadow:0 0 16px rgba(123,92,255,.5);width:72px;text-align:center;">${def}</div>
      <div style="font-family:monospace;font-size:8px;color:#4a5580;letter-spacing:2px;">${lbl}</div>
    </div>`).join('<div style="font-family:monospace;font-size:28px;color:#7b5cff;align-self:flex-start;margin-top:5px;">:</div>')}
  </div>
  <div style="display:flex;gap:8px;">
    <button id="${id}start" onclick="(function(){const startBtn=document.getElementById('${id}start'),stopBtn=document.getElementById('${id}stop'),cdEl=document.getElementById('${id}cd'),csEl=document.getElementById('${id}cs');if(window['${id}running'])return;window['${id}running']=true;let total=window['${id}total']||120;window['${id}iv']=setInterval(()=>{if(total<=0){clearInterval(window['${id}iv']);window['${id}running']=false;cdEl.textContent='00';csEl.textContent='00';cdEl.style.color='#ff2d78';csEl.style.color='#ff2d78';return;}total--;window['${id}total']=total;cdEl.textContent=String(Math.floor(total/60)).padStart(2,'0');csEl.textContent=String(total%60).padStart(2,'0');},1000);})()" style="padding:6px 14px;border:1px solid rgba(0,245,212,.3);background:transparent;color:#00f5d4;font-family:monospace;font-size:10px;cursor:pointer;border-radius:6px;">▶ START</button>
    <button id="${id}stop" onclick="clearInterval(window['${id}iv']);window['${id}running']=false;" style="padding:6px 14px;border:1px solid rgba(255,45,120,.3);background:transparent;color:#ff2d78;font-family:monospace;font-size:10px;cursor:pointer;border-radius:6px;">■ STOP</button>
    <button onclick="clearInterval(window['${id}iv']);window['${id}running']=false;window['${id}total']=120;document.getElementById('${id}cd').textContent='02';document.getElementById('${id}cs').textContent='00';document.getElementById('${id}cd').style.color='#7b5cff';document.getElementById('${id}cs').style.color='#7b5cff';" style="padding:6px 14px;border:1px solid rgba(255,255,255,.08);background:transparent;color:#4a5580;font-family:monospace;font-size:10px;cursor:pointer;border-radius:6px;">↺</button>
  </div>
</div>
`),'countdownTimer',`/* anime.cutbar.in — countdown timer */`);

// Binary Clock
add('Clocks','Binary Clock',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:14px;">
  <canvas id="${id}" width="150" height="70" style="width:150px;height:70px;"></canvas>
  <div style="font-family:monospace;font-size:8px;color:#2a3050;letter-spacing:2px;">BINARY CLOCK — H M S</div>
</div>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');function draw(){const now=new Date();const vals=[now.getHours(),now.getMinutes(),now.getSeconds()];ctx.clearRect(0,0,150,70);vals.forEach((v,col)=>{const bits=v.toString(2).padStart(6,'0');[...bits].forEach((b,row)=>{const x=20+col*40,y=5+row*10;ctx.beginPath();ctx.roundRect?ctx.roundRect(x,y,8,8,2):ctx.rect(x,y,8,8);if(b==='1'){ctx.fillStyle=['#00f5d4','#7b5cff','#ff2d78'][col];ctx.shadowBlur=8;ctx.shadowColor=['#00f5d4','#7b5cff','#ff2d78'][col];}else{ctx.fillStyle='rgba(255,255,255,.06)';ctx.shadowBlur=0;}ctx.fill();ctx.shadowBlur=0;});});}setInterval(draw,500);draw();})();<\/script>
`),'binaryClock',`/* anime.cutbar.in — binary clock */`);

/* ═══════════════════════════════════════════
   ANIME FX  (5 components)
═══════════════════════════════════════════ */

// Sakura Petals
add('Anime FX','Sakura Petals',demo(id=>`
<div id="${id}" style="width:200px;height:120px;position:relative;overflow:hidden;background:radial-gradient(ellipse at 50% 0%,rgba(255,100,150,.08),transparent 70%);border-radius:12px;border:1px solid rgba(255,100,150,.12);">
  <style>@keyframes sakura${id}{0%{transform:translateY(-20px) rotate(0deg);opacity:0}10%{opacity:1}100%{transform:translateY(130px) translateX(var(--dx)) rotate(var(--dr));opacity:0}}</style>
</div>
<script>(function(){const wrap=document.getElementById('${id}');if(!wrap)return;const petals=['🌸','🌺','🌷','🌼'];function spawn(){const p=document.createElement('div');p.style.cssText='position:absolute;font-size:'+(10+Math.random()*12)+'px;left:'+(Math.random()*180)+'px;top:-20px;--dx:'+(Math.random()*80-40)+'px;--dr:'+(Math.random()*360)+'deg;animation:sakura${id} '+(2+Math.random()*3)+'s ease-in forwards;pointer-events:none;';p.textContent=petals[Math.floor(Math.random()*petals.length)];wrap.appendChild(p);setTimeout(()=>p.remove(),5000);}const iv=setInterval(spawn,300);spawn();spawn();spawn();})();<\/script>
`),'sakuraPetals',`/* anime.cutbar.in — sakura petals animation */`);

// Energy Aura
add('Anime FX','Energy Aura',demo(id=>`
<div style="display:flex;justify-content:center;align-items:center;height:130px;position:relative;">
  <style>
  @keyframes aura1${id}{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.15);opacity:.8}}
  @keyframes aura2${id}{0%,100%{transform:scale(1.1) rotate(0deg);opacity:.4}50%{transform:scale(1.25) rotate(180deg);opacity:.7}}
  @keyframes aura3${id}{0%{transform:scale(1.2) rotate(0deg)}100%{transform:scale(1.2) rotate(360deg)}}
  </style>
  <div style="position:relative;width:70px;height:70px;display:flex;align-items:center;justify-content:center;">
    <div style="position:absolute;inset:-20px;border-radius:50%;background:radial-gradient(circle,rgba(123,92,255,.35),transparent 70%);animation:aura1${id} 2s ease-in-out infinite;"></div>
    <div style="position:absolute;inset:-12px;border-radius:50%;border:2px solid rgba(0,245,212,.3);animation:aura2${id} 3s ease-in-out infinite;"></div>
    <div style="position:absolute;inset:-18px;border-radius:50%;border:1px dashed rgba(255,45,120,.4);animation:aura3${id} 4s linear infinite;"></div>
    <div style="width:50px;height:50px;border-radius:50%;background:radial-gradient(circle,#fff 10%,#00f5d4 40%,rgba(123,92,255,.8) 70%,transparent);box-shadow:0 0 30px rgba(123,92,255,.6),0 0 60px rgba(0,245,212,.3);display:flex;align-items:center;justify-content:center;font-size:22px;">⚡</div>
  </div>
</div>
`),'energyAura',`/* anime.cutbar.in — anime energy aura */`);

// Speed Lines
add('Anime FX','Speed Lines',demo(id=>`
<canvas id="${id}" width="200" height="120" style="width:200px;height:120px;border-radius:12px;background:#07090f;"></canvas>
<script>(function(){const c=document.getElementById('${id}');if(!c)return;const ctx=c.getContext('2d');const W=200,H=120,cx=W/2,cy=H/2;const lines=Array.from({length:40},()=>({angle:Math.random()*Math.PI*2,len:20+Math.random()*60,speed:.5+Math.random()*2,dist:10+Math.random()*40}));function draw(){ctx.fillStyle='rgba(7,9,15,.3)';ctx.fillRect(0,0,W,H);lines.forEach(l=>{l.dist+=l.speed;if(l.dist>80){l.dist=5;l.len=20+Math.random()*60;l.angle=Math.random()*Math.PI*2;}const x1=cx+Math.cos(l.angle)*l.dist,y1=cy+Math.sin(l.angle)*l.dist;const x2=cx+Math.cos(l.angle)*(l.dist+l.len),y2=cy+Math.sin(l.angle)*(l.dist+l.len);const grad=ctx.createLinearGradient(x1,y1,x2,y2);grad.addColorStop(0,'rgba(0,245,212,0)');grad.addColorStop(1,'rgba(0,245,212,.8)');ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.strokeStyle=grad;ctx.lineWidth=1.5;ctx.stroke();});requestAnimationFrame(draw);}draw();})();<\/script>
`),'speedLines',`/* anime.cutbar.in — anime speed lines */`);

// Explosion Burst
add('Anime FX','Explosion Burst',demo(id=>`
<div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:10px;">
<div style="position:relative;width:120px;height:100px;display:flex;align-items:center;justify-content:center;">
  <canvas id="${id}" width="120" height="100" style="position:absolute;inset:0;width:120px;height:100px;"></canvas>
  <button onclick="(function(id){const c=document.getElementById(id);if(!c)return;const ctx=c.getContext('2d');const W=120,H=100,cx=60,cy=50;const parts=Array.from({length:30},()=>({x:cx,y:cy,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8-3,life:1,col:['#ff2d78','#ff6600','#ffcc00','#00f5d4','#7b5cff'][Math.floor(Math.random()*5)],r:2+Math.random()*4}));function tick(){ctx.clearRect(0,0,W,H);let alive=false;parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.3;p.life-=.025;if(p.life>0){alive=true;ctx.beginPath();ctx.arc(p.x,p.y,p.r*p.life,0,6.28);ctx.fillStyle=p.col;ctx.globalAlpha=p.life;ctx.shadowBlur=8;ctx.shadowColor=p.col;ctx.fill();ctx.globalAlpha=1;ctx.shadowBlur=0;}});if(alive)requestAnimationFrame(tick);}tick();}('${id}'))" style="position:relative;z-index:1;padding:10px 20px;background:linear-gradient(135deg,#ff6600,#ff2d78);border:none;border-radius:10px;color:#fff;font-family:monospace;font-size:12px;font-weight:700;cursor:pointer;letter-spacing:1px;">💥 EXPLODE</button>
</div>
</div>
`),'explosionBurst',`/* anime.cutbar.in — explosion burst particle FX */`);

// Glitch Screen
add('Anime FX','Glitch Screen',demo(id=>`
<div id="${id}" style="width:180px;height:100px;background:#0d1120;border-radius:10px;overflow:hidden;position:relative;cursor:pointer;border:1px solid rgba(0,245,212,.15);" onclick="glitch${id}()">
  <canvas id="${id}c" width="180" height="100" style="width:180px;height:100px;display:block;"></canvas>
  <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:12px;color:#00f5d4;letter-spacing:3px;text-shadow:0 0 10px #00f5d4;pointer-events:none;">CLICK ME</div>
</div>
<script>(function(){const c=document.getElementById('${id}c');if(!c)return;const ctx=c.getContext('2d');const W=180,H=100;let glitching=false;function scanlines(){ctx.clearRect(0,0,W,H);for(let y=0;y<H;y+=3){ctx.fillStyle='rgba(0,245,212,.015)';ctx.fillRect(0,y,W,1);}requestAnimationFrame(scanlines);}scanlines();window.glitch${id}=function(){if(glitching)return;glitching=true;let frames=0;const iv=setInterval(()=>{ctx.clearRect(0,0,W,H);const slices=3+Math.floor(Math.random()*5);for(let i=0;i<slices;i++){const sy=Math.random()*H,sh=Math.random()*20,dx=(Math.random()-.5)*30;ctx.fillStyle=Math.random()>.5?'rgba(255,0,100,.3)':'rgba(0,245,212,.3)';ctx.fillRect(dx,sy,W,sh);}frames++;if(frames>8){clearInterval(iv);ctx.clearRect(0,0,W,H);glitching=false;}},60);};})();<\/script>
`),'glitchScreen',`/* anime.cutbar.in — glitch screen effect */`);

console.log('✅ anime.cutbar.in FINAL — '+Object.values(window.componentsList).reduce((a,c)=>a+c.length,0)+' components | '+Object.keys(window.componentsList).length+' categories');
