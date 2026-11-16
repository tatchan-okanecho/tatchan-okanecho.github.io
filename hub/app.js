// shared: icons + tab bar
var I={
 home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>',
 tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0"/></svg>',
 book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/><path d="M4 19V5"/><path d="M9 7h6"/></svg>',
 read:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h7a3 3 0 013 3v12a2 2 0 00-2-2H2z"/><path d="M22 5h-7a3 3 0 00-3 3v12a2 2 0 012-2h8z"/></svg>',
 star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
 yen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4l6 8 6-8M12 12v8M8 13h8M8 17h8"/></svg>',
 clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
 sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
 check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 12l3 3 5-6"/></svg>',
 cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
 heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"/><path d="M12 9v5M9.5 11.5h5"/></svg>',
 gift:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="12" rx="2"/><path d="M3 13h18M12 9v12"/><path d="M12 9C10 5 6 5 7 8c.5 1 5 1 5 1s4.5 0 5-1c1-3-3-3-5 1"/></svg>',
 coin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7"/><path d="M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/></svg>',
 insta:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>'
};
function tabbar(active){
  var t=[['index.html','ホーム','home'],['tools.html','ツール','tool'],['jiten.html','辞典','book'],['yomu.html','読む','read']];
  var h='<div class="tabbar"><nav>'+t.map(function(x){return '<a href="'+x[0]+'"'+(x[2]===active?' class="on"':'')+'>'+I[x[2]]+'<span>'+x[1]+'</span></a>';}).join('')+'</nav></div>';
  document.body.insertAdjacentHTML('beforeend',h);
  document.querySelectorAll('[data-ic]').forEach(function(e){e.innerHTML=I[e.getAttribute('data-ic')]||'';});
}
function yen(n){return Math.round(n).toLocaleString('ja-JP')+'円';}
function store(k,v){try{if(v===undefined)return JSON.parse(localStorage.getItem(k)||'null');localStorage.setItem(k,JSON.stringify(v));}catch(e){return null;}}
// share result as image (1080x1350). Runs only on pages that have #out
function shareImg(){var o=document.getElementById('out');if(!o)return;var ttl=(document.querySelector('.top h1')||{}).textContent||'制度とお金ラボ';
var ks=[].slice.call(o.querySelectorAll('.k')).map(function(e){return e.textContent}),vs=[].slice.call(o.querySelectorAll('.v')).map(function(e){return e.textContent}),rows=[].slice.call(o.querySelectorAll('tr')).map(function(r){return [].slice.call(r.children).map(function(c){return c.textContent})});
var c=document.createElement('canvas');c.width=1080;c.height=1350;var x=c.getContext('2d'),F='"M PLUS Rounded 1c",sans-serif';
x.fillStyle='#fff7ea';x.fillRect(0,0,1080,1350);x.fillStyle='#1C345C';x.fillRect(0,0,1080,190);
x.fillStyle='#F7C544';x.font='900 40px '+F;x.fillText('制度とお金ラボ',60,85);x.fillStyle='#fff';x.font='900 58px '+F;x.fillText(ttl,60,160);
x.fillStyle='#1C345C';x.beginPath();x.roundRect?x.roundRect(60,240,960,250,32):x.rect(60,240,960,250);x.fill();
x.fillStyle='#cdd8ea';x.font='700 36px '+F;x.fillText(ks[0]||'',100,310);x.fillStyle='#F7C544';x.font='900 96px '+F;x.fillText(vs[0]||'',100,425);
var y=570;x.font='700 36px '+F;rows.slice(0,7).forEach(function(r){x.fillStyle='#5F6A79';x.fillText(r[0]||'',80,y);x.fillStyle='#1C345C';x.textAlign='right';x.fillText(r[1]||'',1000,y);x.textAlign='left';x.strokeStyle='#EDE4D3';x.beginPath();x.moveTo(80,y+24);x.lineTo(1000,y+24);x.stroke();y+=78;});
x.fillStyle='#F08C1E';x.fillRect(0,1230,1080,120);x.fillStyle='#fff';x.font='900 40px '+F;x.textAlign='center';x.fillText('たっちゃん｜給与明細と会社の制度',540,1285);x.font='700 28px '+F;x.fillText('tatchan-okanecho.github.io/hub/  ※目安です',540,1328);x.textAlign='left';
c.toBlob(function(b){var f=new File([b],'lab-result.png',{type:'image/png'});if(navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:ttl}).catch(function(){})}else{var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='lab-result.png';a.click();}try{if(window.goatcounter)goatcounter.count({path:'share-'+location.pathname,event:true})}catch(e){}},'image/png');}
(function(){var o=document.getElementById('out');if(!o)return;var btn=document.createElement('button');btn.type='button';btn.className='cta navy';btn.style.cssText='width:100%;border:0;font-size:15px;margin:0 0 14px';btn.textContent='結果を画像で保存・シェア';btn.addEventListener('click',shareImg);o.parentNode.insertBefore(btn,o.nextSibling);})();
try{if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('sw.js');}catch(e){}
