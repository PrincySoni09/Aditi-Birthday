

const $=id=>document.getElementById(id), go=id=>{document.querySelectorAll('.s').forEach(s=>s.classList.remove('on'));$(id).classList.add('on')};
const img=(src,emo)=>src?`<img src="${src}" alt="">`:emo;
function confetti(n=80){const col=['#f55','#fc3','#4cf','#f6a','#6d6','#a7f'];for(let i=0;i<n;i++){const d=document.createElement('div');d.className='cf';d.style.cssText=`left:${Math.random()*100}vw;background:${col[i%6]};animation-duration:${2+Math.random()*3}s;border-radius:${Math.random()>.5?'50%':'2px'}`;document.body.appendChild(d);setTimeout(()=>d.remove(),5500)}}

/* setup text/photos */
$('hint').textContent=C.hint;
$('mainFrame').innerHTML=img(C.mainPhoto,C.emoji.frame);
$('pic2').innerHTML=img(C.s2Photo||C.mainPhoto,C.emoji.s2);
$('pic3').innerHTML=img(C.s3Photo||C.mainPhoto,C.emoji.s3);
$('frame6').innerHTML=img(C.letterPhoto||C.mainPhoto,C.emoji.letter);
$('rail').innerHTML=C.photos.map(p=>`<div class="pol"><div>${img(p.src,p.emoji)}</div><p>${p.cap}</p></div>`).join('');
$('rail').onclick=e=>{const p=e.target.closest('.pol');if(p)p.classList.toggle('gone')};


/* floating balloons + tap sparkles */
setInterval(()=>{const b=document.createElement('div');b.className='bl';b.textContent=['🎈','🎈','💖','🎀','🌸'][Math.floor(Math.random()*5)];b.style.cssText+=`left:${Math.random()*95}vw;font-size:${22+Math.random()*22}px;animation-duration:${6+Math.random()*5}s`;document.body.appendChild(b);setTimeout(()=>b.remove(),11500)},1100);
document.addEventListener('pointerdown',e=>{const s=document.createElement('div');s.className='sp';s.textContent=['✨','💖','⭐'][Math.floor(Math.random()*3)];s.style.left=e.clientX-10+'px';s.style.top=e.clientY-10+'px';document.body.appendChild(s);setTimeout(()=>s.remove(),800)});

/* happy birthday tune (plain synthesized notes) */
function tune(){try{const a=new(window.AudioContext||window.webkitAudioContext)();let t=a.currentTime+.1;
[[392,.75],[392,.25],[440,1],[392,1],[523,1],[494,2],[392,.75],[392,.25],[440,1],[392,1],[587,1],[523,2],[392,.75],[392,.25],[784,1],[659,1],[523,1],[494,1],[440,2],[698,.75],[698,.25],[659,1],[523,1],[587,1],[523,2]].forEach(([f,d])=>{const o=a.createOscillator(),g=a.createGain();o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(.18,t);g.gain.exponentialRampToValueAtTime(.001,t+d*.34);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d*.35);t+=d*.36})}catch(e){}}

/* reasons: each card reveals a different photo */
let opened=0;
$('rg').innerHTML=C.reasons.map(r=>`<div class="rc"><b>${r[0]}</b></div>`).join('');
$('rg').onclick=e=>{const c=e.target.closest('.rc');if(!c||c.classList.contains('o'))return;const i=[...$('rg').children].indexOf(c),r=C.reasons[i];c.classList.add('o');c.innerHTML=`<img src="${r[2]}" alt=""><b>${r[0]}</b><span>${r[1]}</span>`;confetti(25);if(++opened===C.reasons.length)$('next7').style.display='inline-block'};

/* 1: clock */
const clk=$('clock');
['XII','I','II','III','IV','V','VI','VII','VIII','IX','X','XI'].forEach((r,i)=>{const a=i*30*Math.PI/180;const e=document.createElement('i');e.textContent=r;e.style.left=(98+78*Math.sin(a)-12)+'px';e.style.top=(98-78*Math.cos(a)-8)+'px';clk.appendChild(e)});
const hand=(w,h)=>{const b=document.createElement('b');b.style.cssText=`width:${w}px;height:${h}px;margin-left:${-w/2}px;margin-top:${-h}px`;clk.appendChild(b);return b};
const hh=hand(5,50),mh=hand(4,72),sh=hand(2,84);
let sec=55;
function tick(){const m=59+sec/60;hh.style.transform=`rotate(${(11+m/60)*30}deg)`;mh.style.transform=`rotate(${m*6}deg)`;sh.style.transform=`rotate(${sec*6}deg)`;$('dig').textContent='11:59:'+String(sec).padStart(2,'0')}
tick();
const iv=setInterval(()=>{sec++;if(sec>=60){clearInterval(iv);$('dig').textContent='12:00:00';sh.style.transform='rotate(360deg)';confetti(60);$('s0').classList.add('open');setTimeout(()=>go('s1'),2600)}else tick()},800);

/* 2: passcode */
let code='';
$('dots').innerHTML='<span></span>'.repeat(4);
$('keys').innerHTML=[1,2,3,4,5,6,7,8,9,'⌫',0,'✓'].map(k=>`<button>${k}</button>`).join('');
function draw(){[...$('dots').children].forEach((d,i)=>d.className=i<code.length?'f':'')}
$('keys').onclick=e=>{const k=e.target.textContent;if(e.target.tagName!=='BUTTON')return;
  if(k==='⌫')code=code.slice(0,-1);else if(k==='✓'){}else if(code.length<4)code+=k;
  draw();
  if(code.length===4){if(code===C.passcode){confetti();setTimeout(()=>go('s2'),400)}else{$('dots').classList.add('shake');setTimeout(()=>{$('dots').classList.remove('shake');code='';draw()},450)}}};

/* 3-4: yes / no */
$('y2').onclick=()=>{confetti(40);go('s3')};
const no=$('n2');no.onmouseover=no.ontouchstart=e=>{e.preventDefault();no.style.transform=`translate(${(Math.random()-.5)*160}px,${(Math.random()-.5)*100}px)`};
no.onclick=()=>{confetti(20);go('s3')};
document.querySelectorAll('.go4').forEach(b=>b.onclick=()=>{confetti(50);go('s4')});

/* 5: mystery box */
$('mbox').onclick=()=>{confetti(120);setTimeout(()=>go('s5'),900)};
$('next5').onclick=()=>go('s5t');
/* throwback: tap to flip THEN <-> NOW */
$('tb').innerHTML=C.throwback.map((t,i)=>`<div class="tc" data-i="${i}"><div class="ti"><img src="${t.then}" alt=""></div><p>${t.capThen}</p><span>THEN 🧸</span></div>`).join('');
$('tb').onclick=e=>{const c=e.target.closest('.tc');if(!c)return;const t=C.throwback[c.dataset.i],now=!c.classList.contains('now');c.classList.toggle('now',now);c.querySelector('img').src=now?t.now:t.then;c.querySelector('p').textContent=now?t.capNow:t.capThen;c.querySelector('span').textContent=now?'NOW 👑':'THEN 🧸';if(now)confetti(20)};
$('next6t').onclick=()=>go('s5b');
$('next7').onclick=()=>{go('s6');startLetter()};

/* 6: letter (typewriter) */
window.startLetter=()=>{
  $('lt').textContent='';$('lp').textContent='';
  const t1=C.letterTitle;
  const full=t1+'\n'+C.letter;let i=0;
  const w=setInterval(()=>{i++;const s=full.slice(0,i),k=s.indexOf('\n');
    if(k<0)$('lt').textContent=s;else{$('lt').textContent=t1;$('lp').textContent=s.slice(k+1)}
    if(i>=full.length){clearInterval(w);$('next6').style.display='inline-block'}},38)};
$('next6').onclick=()=>go('s7');

/* 7: cake */
let lit=5;
$('cn').innerHTML='<div class="c"></div>'.repeat(5);
$('cn').onclick=e=>{const c=e.target.closest('.c');if(!c||c.classList.contains('off'))return;c.classList.add('off');lit--;
  if(!lit){confetti(160);tune();$('wmsg').innerHTML=`<img class="fin" src="${C.finalPhoto}" alt=""><br>🎉 Happy Birthday, ${C.name}! 🎉<br><span style="font-size:16px">${C.wish}</span>`}};
