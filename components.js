window.snippetsMap = {};
window.componentsList = {};

function addComponent(category, name, demoHtml, snippetId, fullSnippet) {
  if (!window.componentsList[category]) window.componentsList[category] = [];
  window.componentsList[category].push({ name, demo: demoHtml, snippetId });
  window.snippetsMap[snippetId] = fullSnippet;
}

// ========== TEST COMPONENTS (working) ==========
addComponent('Loaders', 'Test Spinner', '<div class="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>', 'test1', '<div class="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>');
addComponent('Buttons', 'Test Button', '<button class="bg-pink-500 px-4 py-2 rounded-full text-white">Click</button>', 'test2', '<button class="bg-pink-500 px-4 py-2 rounded-full text-white">Click</button>');
addComponent('Switches', 'Test Switch', '<label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer"><div class="w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-pink-500 peer-checked:after:translate-x-full after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div></label>', 'test3', '<label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer"><div class="w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-pink-500 peer-checked:after:translate-x-full after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div></label>');

// ========== WORKING UNIQUE COMPONENTS ==========

// 1. GESTURE SWITCH (working)
addComponent('Switches', 'Gesture Switch', `
<div id="gsDemo" style="width:80px;height:80px;border-radius:50%;background:linear-gradient(145deg,#1a1a2e,#16213e);cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
  <div id="gsWave" style="position:absolute;width:100%;height:100%;background:radial-gradient(circle,rgba(0,255,200,0.3),transparent);border-radius:50%;transform:scale(0);transition:transform 0.4s ease-out;"></div>
  <div style="font-size:32px;z-index:1;">✋</div>
</div>
<script>
  (function(){
    const container = document.getElementById('gsDemo');
    if(!container) return;
    const wave = document.getElementById('gsWave');
    let active = false;
    container.addEventListener('click', function(){
      active = !active;
      if(active) {
        container.style.background = 'linear-gradient(145deg, #00d2ff, #3a7bd5)';
        container.style.boxShadow = '0 0 20px rgba(0,210,255,0.5)';
        wave.style.transform = 'scale(2)';
        setTimeout(() => wave.style.transform = 'scale(0)', 400);
      } else {
        container.style.background = 'linear-gradient(145deg, #1a1a2e, #16213e)';
        container.style.boxShadow = 'none';
      }
    });
  })();
</script>
`, 'gestureSwitch', `/* From cutbar.in by iBneRasool */\n<div id="gsDemo" style="width:80px;height:80px;border-radius:50%;background:linear-gradient(145deg,#1a1a2e,#16213e);cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;"><div id="gsWave" style="position:absolute;width:100%;height:100%;background:radial-gradient(circle,rgba(0,255,200,0.3),transparent);border-radius:50%;transform:scale(0);transition:transform 0.4s ease-out;"></div><div style="font-size:32px;z-index:1;">✋</div></div>\n<script>(function(){const c=document.getElementById('gsDemo');const w=document.getElementById('gsWave');let a=false;c.addEventListener('click',function(){a=!a;if(a){c.style.background='linear-gradient(145deg,#00d2ff,#3a7bd5)';c.style.boxShadow='0 0 20px rgba(0,210,255,0.5)';w.style.transform='scale(2)';setTimeout(()=>w.style.transform='scale(0)',400);}else{c.style.background='linear-gradient(145deg,#1a1a2e,#16213e)';c.style.boxShadow='none';}});})();<\/script>`);

// 2. DNA HELIX LOADER (working)
addComponent('Loaders', 'DNA Helix', `
<canvas id="dnaDemo" width="150" height="100" style="width:150px;height:100px"></canvas>
<script>
  (function(){
    const canvas = document.getElementById('dnaDemo');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let time = 0;
    function draw() {
      ctx.clearRect(0,0,150,100);
      ctx.strokeStyle = '#ff6b6b';
      ctx.lineWidth = 2;
      for(let i=0;i<20;i++) {
        let x1 = 50 + Math.sin(time + i*0.3)*20;
        let y1 = 5 + i*4.5;
        let x2 = 100 + Math.cos(time + i*0.3)*20;
        let y2 = 5 + i*4.5;
        ctx.beginPath();
        ctx.arc(x1,y1,3,0,Math.PI*2);
        ctx.fillStyle = '#ff6b6b';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x2,y2,3,0,Math.PI*2);
        ctx.fillStyle = '#4ecdc4';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
      }
      time += 0.1;
      requestAnimationFrame(draw);
    }
    draw();
  })();
</script>
`, 'dnaLoader', `/* From cutbar.in by iBneRasool */\n<canvas id="dnaDemo" width="150" height="100" style="width:150px;height:100px"></canvas>\n<script>(function(){const c=document.getElementById('dnaDemo');const ctx=c.getContext('2d');let t=0;function draw(){ctx.clearRect(0,0,150,100);ctx.strokeStyle='#ff6b6b';ctx.lineWidth=2;for(let i=0;i<20;i++){let x1=50+Math.sin(t+i*0.3)*20;let y1=5+i*4.5;let x2=100+Math.cos(t+i*0.3)*20;let y2=5+i*4.5;ctx.beginPath();ctx.arc(x1,y1,3,0,Math.PI*2);ctx.fillStyle='#ff6b6b';ctx.fill();ctx.beginPath();ctx.arc(x2,y2,3,0,Math.PI*2);ctx.fillStyle='#4ecdc4';ctx.fill();ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();}t+=0.1;requestAnimationFrame(draw);}draw();})();<\/script>`);

// 3. CLOCK LOADER (working)
addComponent('Loaders', 'Clock Loader', `
<div id="clockDemo" style="width:80px;height:80px;border-radius:50%;background:#1a1a2e;position:relative;margin:0 auto;box-shadow:0 0 10px rgba(0,0,0,0.5);">
  <div id="clockMinute" style="position:absolute;bottom:50%;left:50%;width:3px;height:30px;background:#ff6b6b;transform-origin:50% 100%;border-radius:3px;"></div>
  <div id="clockHour" style="position:absolute;bottom:50%;left:50%;width:3px;height:20px;background:#4ecdc4;transform-origin:50% 100%;border-radius:3px;"></div>
  <div style="position:absolute;top:50%;left:50%;width:8px;height:8px;background:white;border-radius:50%;transform:translate(-50%,-50%);"></div>
</div>
<script>
  (function(){
    let angle = 0;
    const minute = document.getElementById('clockMinute');
    const hour = document.getElementById('clockHour');
    if(!minute || !hour) return;
    setInterval(() => {
      angle = (angle + 6) % 360;
      minute.style.transform = 'rotate(' + angle + 'deg)';
      hour.style.transform = 'rotate(' + (angle/12) + 'deg)';
    }, 50);
  })();
</script>
`, 'clockLoader', `/* From cutbar.in by iBneRasool */\n<div id="clockDemo" style="width:80px;height:80px;border-radius:50%;background:#1a1a2e;position:relative;margin:0 auto;"><div id="clockMinute" style="position:absolute;bottom:50%;left:50%;width:3px;height:30px;background:#ff6b6b;transform-origin:50% 100%;border-radius:3px;"></div><div id="clockHour" style="position:absolute;bottom:50%;left:50%;width:3px;height:20px;background:#4ecdc4;transform-origin:50% 100%;border-radius:3px;"></div><div style="position:absolute;top:50%;left:50%;width:8px;height:8px;background:white;border-radius:50%;transform:translate(-50%,-50%);"></div></div>\n<script>(function(){let a=0;const m=document.getElementById('clockMinute');const h=document.getElementById('clockHour');if(m&&h)setInterval(()=>{a=(a+6)%360;m.style.transform='rotate('+a+'deg)';h.style.transform='rotate('+(a/12)+'deg)';},50);})();<\/script>`);

// 4. 3D ROTATE BUTTON (working)
addComponent('Buttons', '3D Rotate Button', `
<button id="rotateDemo" style="width:120px;height:50px;background:linear-gradient(145deg,#ff6b6b,#ee5a5a);border:none;border-radius:12px;color:white;font-weight:bold;cursor:pointer;transition:all 0.1s ease-out;transform-style:preserve-3d;perspective:200px;box-shadow:0 6px 0 #aa2e2e;">🌀 ROTATE</button>
<script>
  (function(){
    const btn = document.getElementById('rotateDemo');
    if(!btn) return;
    btn.addEventListener('mousedown', function(){ this.style.transform='rotateX(20deg) rotateY(-10deg) translateY(4px)'; this.style.boxShadow='0 2px 0 #aa2e2e'; });
    btn.addEventListener('mouseup', function(){ this.style.transform='none'; this.style.boxShadow='0 6px 0 #aa2e2e'; });
  })();
</script>
`, 'rotate3dBtn', `/* From cutbar.in by iBneRasool */\n<button id="rotateDemo" style="width:120px;height:50px;background:linear-gradient(145deg,#ff6b6b,#ee5a5a);border:none;border-radius:12px;color:white;font-weight:bold;cursor:pointer;transition:all 0.1s ease-out;transform-style:preserve-3d;perspective:200px;box-shadow:0 6px 0 #aa2e2e;">🌀 ROTATE</button>\n<script>(function(){const b=document.getElementById('rotateDemo');if(b){b.addEventListener('mousedown',function(){this.style.transform='rotateX(20deg) rotateY(-10deg) translateY(4px)';this.style.boxShadow='0 2px 0 #aa2e2e';});b.addEventListener('mouseup',function(){this.style.transform='none';this.style.boxShadow='0 6px 0 #aa2e2e';});}})();<\/script>`);

// 5. STRETCH BUTTON (working)
addComponent('Buttons', 'Stretch Button', `
<button id="stretchDemo" style="width:130px;height:50px;background:#4ecdc4;border:none;border-radius:60px;color:#1a1a2e;font-weight:bold;font-size:16px;cursor:pointer;transition:all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55);box-shadow:0 4px 10px rgba(0,0,0,0.2);">✨ STRETCH</button>
<script>
  (function(){
    const btn = document.getElementById('stretchDemo');
    if(!btn) return;
    btn.addEventListener('mousedown', function(){ this.style.transform='scaleX(1.15) scaleY(0.9)'; this.style.letterSpacing='4px'; this.style.background='#ff6b6b'; this.style.color='white'; });
    btn.addEventListener('mouseup', function(){ this.style.transform='none'; this.style.letterSpacing='normal'; this.style.background='#4ecdc4'; this.style.color='#1a1a2e'; });
  })();
</script>
`, 'stretchBtn', `/* From cutbar.in by iBneRasool */\n<button id="stretchDemo" style="width:130px;height:50px;background:#4ecdc4;border:none;border-radius:60px;color:#1a1a2e;font-weight:bold;cursor:pointer;transition:all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55);box-shadow:0 4px 10px rgba(0,0,0,0.2);">✨ STRETCH</button>\n<script>(function(){const b=document.getElementById('stretchDemo');if(b){b.addEventListener('mousedown',function(){this.style.transform='scaleX(1.15) scaleY(0.9)';this.style.letterSpacing='4px';this.style.background='#ff6b6b';this.style.color='white';});b.addEventListener('mouseup',function(){this.style.transform='none';this.style.letterSpacing='normal';this.style.background='#4ecdc4';this.style.color='#1a1a2e';});}})();<\/script>`);

// 6. SOUND SWITCH (working, requires mic)
addComponent('Switches', 'Sound Switch', `
<div id="soundDemo" style="width:80px;height:80px;border-radius:50%;background:#2d2d44;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 10px rgba(0,0,0,0.3);">
  <div>🎤</div>
  <div style="width:40px;height:4px;background:#555;border-radius:2px;margin-top:8px;overflow:hidden;"><div id="soundFillDemo" style="width:0%;height:100%;background:#ff6b6b;transition:width 0.05s;"></div></div>
</div>
<script>
  (function(){
    let active = false;
    let stream = null;
    let ctx = null;
    const div = document.getElementById('soundDemo');
    const fill = document.getElementById('soundFillDemo');
    async function init() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = ctx.createMediaStreamSource(stream);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);
        const data = new Uint8Array(analyser.frequencyBinCount);
        function check() {
          analyser.getByteFrequencyData(data);
          let avg = 0;
          for(let i=0;i<data.length;i++) avg += data[i];
          avg /= data.length;
          fill.style.width = (avg/255)*100 + '%';
          if(avg > 80 && !active) {
            active = true;
            div.classList.add('active');
            div.style.background = '#ff6b6b';
            div.style.boxShadow = '0 0 20px #ff6b6b';
            setTimeout(() => { active = false; div.classList.remove('active'); div.style.background = '#2d2d44'; div.style.boxShadow = 'none'; }, 500);
          }
          requestAnimationFrame(check);
        }
        check();
      } catch(e) { console.log('mic needed'); }
    }
    div.addEventListener('click', init);
  })();
</script>
`, 'soundSwitch', `/* From cutbar.in by iBneRasool */\n<div id="soundDemo" style="width:80px;height:80px;border-radius:50%;background:#2d2d44;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;"><div>🎤</div><div style="width:40px;height:4px;background:#555;border-radius:2px;margin-top:8px;overflow:hidden;"><div id="soundFillDemo" style="width:0%;height:100%;background:#ff6b6b;transition:width 0.05s;"></div></div></div>\n<script>(function(){let a=false;let s=null;let c=null;const d=document.getElementById('soundDemo');const f=document.getElementById('soundFillDemo');async function init(){try{s=await navigator.mediaDevices.getUserMedia({audio:true});c=new (window.AudioContext||window.webkitAudioContext)();const src=c.createMediaStreamSource(s);const an=c.createAnalyser();an.fftSize=256;src.connect(an);const arr=new Uint8Array(an.frequencyBinCount);function check(){an.getByteFrequencyData(arr);let avg=0;for(let i=0;i<arr.length;i++)avg+=arr[i];avg/=arr.length;f.style.width=(avg/255)*100+'%';if(avg>80&&!a){a=true;d.style.background='#ff6b6b';d.style.boxShadow='0 0 20px #ff6b6b';setTimeout(()=>{a=false;d.style.background='#2d2d44';d.style.boxShadow='none';},500);}requestAnimationFrame(check);}check();}catch(e){}}d.addEventListener('click',init);})();<\/script>`);

console.log("All components loaded - test + 6 unique working components");

// Cyber Toggle Switch - From cutbar.in by iBneRasool
addComponent('Switches', 'Cyber Toggle', `
<style>
.cyber-toggle-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 15px;
}
.cyber-toggle-checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.cyber-toggle {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 32px;
  cursor: pointer;
}
.cyber-toggle-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.5), inset 0 0 4px rgba(0,0,0,0.8);
  transition: all 0.4s cubic-bezier(0.3,1.5,0.7,1);
}
.cyber-toggle-track::before {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 14px;
  background: #222;
  box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
  z-index: 0;
  transition: all 0.4s ease;
}
.cyber-toggle-track-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, #03e9f4, #4a00e0);
  opacity: 0;
  border-radius: 16px;
  z-index: 1;
  transition: all 0.4s ease;
}
.cyber-toggle-thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  background: #151515;
  border-radius: 50%;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.3,1.5,0.7,1);
  box-shadow: 0 2px 5px rgba(0,0,0,0.4);
}
.cyber-toggle-thumb-shadow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent 70%);
  z-index: 1;
}
.cyber-toggle-thumb-highlight {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 70% 70%, rgba(0,0,0,0.2), transparent 70%);
  z-index: 1;
}
.cyber-toggle-thumb-icon {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  opacity: 0.7;
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.cyber-toggle-thumb-icon svg {
  width: 14px;
  height: 14px;
  fill: #555;
  transition: fill 0.4s ease, transform 0.4s ease;
}
.cyber-toggle-track-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  z-index: 1;
}
.cyber-toggle-track-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #444;
  margin-left: 3px;
  opacity: 0.5;
  transition: all 0.4s ease;
}
.cyber-toggle-particles {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}
.cyber-toggle-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #03e9f4;
  border-radius: 50%;
  opacity: 0;
  filter: blur(1px);
  transition: all 0.3s ease;
  box-shadow: 0 0 4px rgba(3,233,244,0.8);
}
.cyber-toggle-particle:nth-child(1) { top: 15%; right: 20%; }
.cyber-toggle-particle:nth-child(2) { top: 45%; right: 30%; }
.cyber-toggle-particle:nth-child(3) { top: 25%; right: 40%; }
.cyber-toggle-particle:nth-child(4) { top: 60%; right: 15%; }
.cyber-toggle-labels {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.cyber-toggle-label-off { color: #555; transition: all 0.4s ease; }
.cyber-toggle-label-on { color: #555; transition: all 0.4s ease; }
.cyber-toggle-checkbox:checked + .cyber-toggle .cyber-toggle-track-glow { opacity: 0.5; }
.cyber-toggle-checkbox:checked + .cyber-toggle .cyber-toggle-thumb { left: calc(100% - 28px); background: #222; }
.cyber-toggle-checkbox:checked + .cyber-toggle .cyber-toggle-thumb-icon { transform: rotate(360deg); }
.cyber-toggle-checkbox:checked + .cyber-toggle .cyber-toggle-thumb-icon svg { fill: #03e9f4; }
.cyber-toggle-checkbox:checked + .cyber-toggle .cyber-toggle-track-dot { background: #03e9f4; box-shadow: 0 0 4px #03e9f4; opacity: 1; }
.cyber-toggle-checkbox:checked ~ .cyber-toggle-labels .cyber-toggle-label-on { color: #03e9f4; text-shadow: 0 0 5px rgba(3,233,244,0.5); }
.cyber-toggle-checkbox:not(:checked) ~ .cyber-toggle-labels .cyber-toggle-label-off { color: #aaa; }
.cyber-toggle-checkbox:checked + .cyber-toggle .cyber-toggle-particle { opacity: 1; animation: cyber-toggle-float 3s infinite alternate; }
@keyframes cyber-toggle-float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
}
</style>
<div class="cyber-toggle-wrapper">
  <input class="cyber-toggle-checkbox" id="cyber-toggle" type="checkbox" />
  <label class="cyber-toggle" for="cyber-toggle">
    <div class="cyber-toggle-track">
      <div class="cyber-toggle-track-glow"></div>
      <div class="cyber-toggle-track-dots">
        <span class="cyber-toggle-track-dot"></span>
        <span class="cyber-toggle-track-dot"></span>
        <span class="cyber-toggle-track-dot"></span>
      </div>
    </div>
    <div class="cyber-toggle-thumb">
      <div class="cyber-toggle-thumb-shadow"></div>
      <div class="cyber-toggle-thumb-highlight"></div>
      <div class="cyber-toggle-thumb-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16.5 12c0-2.48-2.02-4.5-4.5-4.5s-4.5 2.02-4.5 4.5 2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5zm-4.5 7.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm0-16.5c-4.97 0-9 4.03-9 9h-3l3.89 3.89.07.14 4.04-4.03h-3c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42c1.63 1.63 3.87 2.64 6.36 2.64 4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path>
        </svg>
      </div>
    </div>
    <div class="cyber-toggle-particles">
      <span class="cyber-toggle-particle"></span>
      <span class="cyber-toggle-particle"></span>
      <span class="cyber-toggle-particle"></span>
      <span class="cyber-toggle-particle"></span>
    </div>
  </label>
  <div class="cyber-toggle-labels">
    <span class="cyber-toggle-label-off">OFF</span>
    <span class="cyber-toggle-label-on">ON</span>
  </div>
</div>
`, 'cyberToggle', `/* From cutbar.in by iBneRasool */\n<div class="cyber-toggle-wrapper">\n  <input class="cyber-toggle-checkbox" id="cyberToggle" type="checkbox" />\n  <label class="cyber-toggle" for="cyberToggle">\n    <div class="cyber-toggle-track">\n      <div class="cyber-toggle-track-glow"></div>\n      <div class="cyber-toggle-track-dots">\n        <span class="cyber-toggle-track-dot"></span>\n        <span class="cyber-toggle-track-dot"></span>\n        <span class="cyber-toggle-track-dot"></span>\n      </div>\n    </div>\n    <div class="cyber-toggle-thumb">\n      <div class="cyber-toggle-thumb-shadow"></div>\n      <div class="cyber-toggle-thumb-highlight"></div>\n      <div class="cyber-toggle-thumb-icon">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path d="M16.5 12c0-2.48-2.02-4.5-4.5-4.5s-4.5 2.02-4.5 4.5 2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5zm-4.5 7.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm0-16.5c-4.97 0-9 4.03-9 9h-3l3.89 3.89.07.14 4.04-4.03h-3c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42c1.63 1.63 3.87 2.64 6.36 2.64 4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path>\n        </svg>\n      </div>\n    </div>\n    <div class="cyber-toggle-particles">\n      <span class="cyber-toggle-particle"></span>\n      <span class="cyber-toggle-particle"></span>\n      <span class="cyber-toggle-particle"></span>\n      <span class="cyber-toggle-particle"></span>\n    </div>\n  </label>\n  <div class="cyber-toggle-labels">\n    <span class="cyber-toggle-label-off">OFF</span>\n    <span class="cyber-toggle-label-on">ON</span>\n  </div>\n</div>`);


// 3D Loading Text - From cutbar.in by iBneRasool
addComponent('Loaders', '3D Loading Text', `
<style>
.wrapper-grid {
  --animation-duration: 2.1s;
  --cube-color: #0000;
  --highlight-color: #00cc44;
  --cube-width: 48px;
  --cube-height: 48px;
  --font-size: 1.8em;
  position: relative;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(7, var(--cube-width));
  grid-template-rows: auto;
  grid-gap: 0;
  width: calc(7 * var(--cube-width));
  height: var(--cube-height);
  perspective: 350px;
  font-family: "Poppins", sans-serif;
  font-size: var(--font-size);
  font-weight: 800;
  color: transparent;
}
.cube { position: relative; transform-style: preserve-3d; }
.face {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--cube-width);
  height: var(--cube-height);
  background-color: var(--cube-color);
}
.face-left, .face-right, .face-back, .face-front {
  box-shadow: inset 0 0 2px 1px #0001, inset 0 0 12px 1px #fff1;
}
.face-front { transform: rotateY(0deg) translateZ(calc(var(--cube-width) / 2)); }
.face-back { transform: rotateY(180deg) translateZ(calc(var(--cube-width) / 2)); opacity: 0.6; }
.face-left { transform: rotateY(-90deg) translateZ(calc(var(--cube-width) / 2)); opacity: 0.6; }
.face-right { transform: rotateY(90deg) translateZ(calc(var(--cube-width) / 2)); opacity: 0.6; }
.face-top { height: var(--cube-width); transform: rotateX(90deg) translateZ(calc(var(--cube-width) / 2)); opacity: 0.8; }
.face-bottom { height: var(--cube-width); transform: rotateX(-90deg) translateZ(calc(var(--cube-height) - var(--cube-width) * 0.5)); opacity: 0.8; }
.cube:nth-child(1) { z-index: 0; animation-delay: 0s; }
.cube:nth-child(2) { z-index: 1; animation-delay: 0.2s; }
.cube:nth-child(3) { z-index: 2; animation-delay: 0.4s; }
.cube:nth-child(4) { z-index: 3; animation-delay: 0.6s; }
.cube:nth-child(5) { z-index: 2; animation-delay: 0.8s; }
.cube:nth-child(6) { z-index: 1; animation-delay: 1s; }
.cube:nth-child(7) { z-index: 0; animation-delay: 1.2s; }
.cube { animation: translate-z var(--animation-duration) ease-in-out infinite; }
.cube .face { animation: face-color var(--animation-duration) ease-in-out infinite, edge-glow var(--animation-duration) ease-in-out infinite; animation-delay: inherit; }
.cube .face.face-front { animation: face-color var(--animation-duration) ease-in-out infinite, face-glow var(--animation-duration) ease-in-out infinite, edge-glow var(--animation-duration) ease-in-out infinite; animation-delay: inherit; }
@keyframes translate-z { 0%,40%,100% { transform: translateZ(-2px); } 30% { transform: translateZ(16px) translateY(-1px); } }
@keyframes face-color { 0%,50%,100% { background-color: var(--cube-color); } 10% { background-color: var(--highlight-color); } }
@keyframes face-glow { 0%,50%,100% { color: #fff0; filter: none; } 30% { color: #fff; filter: drop-shadow(0 14px 10px var(--highlight-color)); } }
@keyframes edge-glow { 0%,40%,100% { box-shadow: inset 0 0 2px 1px #0001, inset 0 0 12px 1px #fff1; } 30% { box-shadow: 0 0 2px 0px var(--highlight-color); } }
</style>
<div class="wrapper-grid">
  <div class="cube"><div class="face face-front">L</div><div class="face face-back"></div><div class="face face-right"></div><div class="face face-left"></div><div class="face face-top"></div><div class="face face-bottom"></div></div>
  <div class="cube"><div class="face face-front">O</div><div class="face face-back"></div><div class="face face-right"></div><div class="face face-left"></div><div class="face face-top"></div><div class="face face-bottom"></div></div>
  <div class="cube"><div class="face face-front">A</div><div class="face face-back"></div><div class="face face-right"></div><div class="face face-left"></div><div class="face face-top"></div><div class="face face-bottom"></div></div>
  <div class="cube"><div class="face face-front">D</div><div class="face face-back"></div><div class="face face-right"></div><div class="face face-left"></div><div class="face face-top"></div><div class="face face-bottom"></div></div>
  <div class="cube"><div class="face face-front">I</div><div class="face face-back"></div><div class="face face-right"></div><div class="face face-left"></div><div class="face face-top"></div><div class="face face-bottom"></div></div>
  <div class="cube"><div class="face face-front">N</div><div class="face face-back"></div><div class="face face-right"></div><div class="face face-left"></div><div class="face face-top"></div><div class="face face-bottom"></div></div>
  <div class="cube"><div class="face face-front">G</div><div class="face face-back"></div><div class="face face-right"></div><div class="face face-left"></div><div class="face face-top"></div><div class="face face-bottom"></div></div>
</div>
`, 'loading3d', `/* From cutbar.in by iBneRasool */\n<div class="wrapper-grid">\n  <div class="cube"><div class="face face-front">L</div></div>\n  <div class="cube"><div class="face face-front">O</div></div>\n  <div class="cube"><div class="face face-front">A</div></div>\n  <div class="cube"><div class="face face-front">D</div></div>\n  <div class="cube"><div class="face face-front">I</div></div>\n  <div class="cube"><div class="face face-front">N</div></div>\n  <div class="cube"><div class="face face-front">G</div></div>\n</div>`);


// Terminal Loader - From cutbar.in by iBneRasool
addComponent('Loaders', 'Terminal Loader', `
<style>
@keyframes blinkCursor { 50% { border-right-color: transparent; } }
@keyframes typeAndDelete {
  0%,10% { width: 0; }
  45%,55% { width: 6.2em; }
  90%,100% { width: 0; }
}
.terminal-loader {
  border: 0.1em solid #333;
  background-color: #1a1a1a;
  color: #0f0;
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
  padding: 1.5em 1em;
  width: 12em;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
.terminal-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1.5em;
  background-color: #333;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 0.4em;
  box-sizing: border-box;
}
.terminal-controls { float: right; }
.control {
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  margin-left: 0.4em;
  border-radius: 50%;
  background-color: #777;
}
.control.close { background-color: #e33; }
.control.minimize { background-color: #ee0; }
.control.maximize { background-color: #0b0; }
.terminal-title { float: left; line-height: 1.5em; color: #eee; }
.text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.2em solid green;
  animation: typeAndDelete 4s steps(11) infinite, blinkCursor 0.5s step-end infinite alternate;
  margin-top: 1.5em;
}
</style>
<div class="terminal-loader">
  <div class="terminal-header">
    <div class="terminal-title">Status</div>
    <div class="terminal-controls">
      <div class="control close"></div>
      <div class="control minimize"></div>
      <div class="control maximize"></div>
    </div>
  </div>
  <div class="text">Loading...</div>
</div>
`, 'terminalLoader', `/* From cutbar.in by iBneRasool */\n<div class="terminal-loader">\n  <div class="terminal-header">\n    <div class="terminal-title">Status</div>\n    <div class="terminal-controls">\n      <div class="control close"></div>\n      <div class="control minimize"></div>\n      <div class="control maximize"></div>\n    </div>\n  </div>\n  <div class="text">Loading...</div>\n</div>`);

