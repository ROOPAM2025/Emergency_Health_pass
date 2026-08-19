// ──────────────────────────────────────────────────────────────────────────────
// SVG Icons
// ──────────────────────────────────────────────────────────────────────────────
const ICONS = {
  upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  download:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  refresh:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  trash:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  zoomin:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  x:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  settings:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  chevDown:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevUp:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  warn:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  layers:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  loader:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`,
};
const icon = (k,cls='') => `<span style="display:inline-flex;align-items:center;width:1em;height:1em;${cls}">${ICONS[k]}</span>`;

// ──────────────────────────────────────────────────────────────────────────────
// Augmentation functions
// ──────────────────────────────────────────────────────────────────────────────
const applyBrightness=(c,w,h,f)=>{const d=c.getImageData(0,0,w,h),p=d.data;for(let i=0;i<p.length;i+=4){p[i]=Math.min(255,p[i]*f);p[i+1]=Math.min(255,p[i+1]*f);p[i+2]=Math.min(255,p[i+2]*f);}c.putImageData(d,0,0);};
const applyContrast=(c,w,h,f)=>{const d=c.getImageData(0,0,w,h),p=d.data,ic=128*(1-f);for(let i=0;i<p.length;i+=4){p[i]=Math.min(255,Math.max(0,p[i]*f+ic));p[i+1]=Math.min(255,Math.max(0,p[i+1]*f+ic));p[i+2]=Math.min(255,Math.max(0,p[i+2]*f+ic));}c.putImageData(d,0,0);};
const applySaturation=(c,w,h,f)=>{const d=c.getImageData(0,0,w,h),p=d.data;for(let i=0;i<p.length;i+=4){const g=0.299*p[i]+0.587*p[i+1]+0.114*p[i+2];p[i]=Math.min(255,Math.max(0,g+f*(p[i]-g)));p[i+1]=Math.min(255,Math.max(0,g+f*(p[i+1]-g)));p[i+2]=Math.min(255,Math.max(0,g+f*(p[i+2]-g)));}c.putImageData(d,0,0);};
const applyWhiteBalance=(c,w,h,k)=>{const d=c.getImageData(0,0,w,h),p=d.data,f=k/10000;for(let i=0;i<p.length;i+=4){p[i]=Math.min(255,Math.max(0,p[i]+f*30));p[i+2]=Math.min(255,Math.max(0,p[i+2]-f*30));}c.putImageData(d,0,0);};
const applyHighlights=(c,w,h,f)=>{const d=c.getImageData(0,0,w,h),p=d.data;for(let i=0;i<p.length;i+=4){const a=(p[i]+p[i+1]+p[i+2])/3;if(a>128){const adj=f*(a-128);p[i]=Math.min(255,Math.max(0,p[i]+adj));p[i+1]=Math.min(255,Math.max(0,p[i+1]+adj));p[i+2]=Math.min(255,Math.max(0,p[i+2]+adj));}}c.putImageData(d,0,0);};
const applyShadows=(c,w,h,f)=>{const d=c.getImageData(0,0,w,h),p=d.data;for(let i=0;i<p.length;i+=4){const a=(p[i]+p[i+1]+p[i+2])/3;if(a<128){const adj=f*(128-a);p[i]=Math.min(255,Math.max(0,p[i]+adj));p[i+1]=Math.min(255,Math.max(0,p[i+1]+adj));p[i+2]=Math.min(255,Math.max(0,p[i+2]+adj));}}c.putImageData(d,0,0);};
const applyHorizontalFlip=(c,w,h)=>{const t=document.createElement('canvas');t.width=w;t.height=h;t.getContext('2d').drawImage(c.canvas,0,0);c.clearRect(0,0,w,h);c.save();c.translate(w,0);c.scale(-1,1);c.drawImage(t,0,0);c.restore();};
const applyVerticalFlip=(c,w,h)=>{const t=document.createElement('canvas');t.width=w;t.height=h;t.getContext('2d').drawImage(c.canvas,0,0);c.clearRect(0,0,w,h);c.save();c.translate(0,h);c.scale(1,-1);c.drawImage(t,0,0);c.restore();};
const applyRotation=(c,w,h,deg)=>{c.translate(w/2,h/2);c.rotate(deg*Math.PI/180);c.translate(-w/2,-h/2);};
const applyCrop=(c,w,h,p)=>{const cr=p*Math.min(w,h),t=document.createElement('canvas');t.width=w;t.height=h;t.getContext('2d').drawImage(c.canvas,0,0);c.clearRect(0,0,w,h);c.drawImage(t,cr,cr,w-2*cr,h-2*cr,0,0,w,h);};
const applyCropBottom=(c,w,h,p)=>{const cr=p*h,t=document.createElement('canvas');t.width=w;t.height=h;t.getContext('2d').drawImage(c.canvas,0,0);c.clearRect(0,0,w,h);c.drawImage(t,0,0,w,h-cr,0,0,w,h);};
const applyScale=(c,w,h,f)=>{c.translate(w/2,h/2);c.scale(f,f);c.translate(-w/2,-h/2);};
const applyShift=(c,w,h,dx,dy)=>{c.translate(dx*w,dy*h);};
const applyGaussianNoise=(c,w,h,s)=>{const d=c.getImageData(0,0,w,h),p=d.data;for(let i=0;i<p.length;i+=4){const n=(Math.random()-.5)*2*s*255;p[i]=Math.min(255,Math.max(0,p[i]+n));p[i+1]=Math.min(255,Math.max(0,p[i+1]+n));p[i+2]=Math.min(255,Math.max(0,p[i+2]+n));}c.putImageData(d,0,0);};
const applyJPEGCompression=(c,w,h,q)=>{const d=c.getImageData(0,0,w,h),p=d.data,bs=8;for(let by=0;by<h;by+=bs){for(let bx=0;bx<w;bx+=bs){let rs=0,gs=0,b2=0,cnt=0;for(let y=by;y<Math.min(by+bs,h);y++){for(let x=bx;x<Math.min(bx+bs,w);x++){const i=(y*w+x)*4;rs+=p[i];gs+=p[i+1];b2+=p[i+2];cnt++;}}const ra=rs/cnt,ga=gs/cnt,ba=b2/cnt,bl=1-q;for(let y=by;y<Math.min(by+bs,h);y++){for(let x=bx;x<Math.min(bx+bs,w);x++){const i=(y*w+x)*4,n=(Math.random()-.5)*bl*15;p[i]=Math.min(255,Math.max(0,p[i]+(ra-p[i])*bl*.3+n));p[i+1]=Math.min(255,Math.max(0,p[i+1]+(ga-p[i+1])*bl*.3+n));p[i+2]=Math.min(255,Math.max(0,p[i+2]+(ba-p[i+2])*bl*.3+n));}}}}c.putImageData(d,0,0);};
const applySharpness=(c,w,h,f)=>{const d=c.getImageData(0,0,w,h),p=d.data,tmp=new Uint8ClampedArray(p);for(let y=1;y<h-1;y++){for(let x=1;x<w-1;x++){for(let k=0;k<3;k++){const idx=(y*w+x)*4+k,ctr=tmp[idx],avg=(tmp[((y-1)*w+x)*4+k]+tmp[((y+1)*w+x)*4+k]+tmp[(y*w+x-1)*4+k]+tmp[(y*w+x+1)*4+k])/4;p[idx]=Math.min(255,Math.max(0,ctr+(ctr-avg)*(f-1)));}}};c.putImageData(d,0,0);};
const applyMotionBlur=(c,w,h,px,dir)=>{const t=document.createElement('canvas');t.width=w;t.height=h;t.getContext('2d').drawImage(c.canvas,0,0);c.clearRect(0,0,w,h);c.globalAlpha=1/px;for(let i=0;i<px;i++){const dx=dir==='horizontal'?i-px/2:0,dy=dir==='vertical'?i-px/2:0;c.drawImage(t,dx,dy);}c.globalAlpha=1;};
const applyGaussianBlur=(c,w,h,r)=>{const t=document.createElement('canvas');t.width=w;t.height=h;t.getContext('2d').drawImage(c.canvas,0,0);c.clearRect(0,0,w,h);c.filter=`blur(${r}px)`;c.drawImage(t,0,0);c.filter='none';};
const applyVignette=(c,w,h,intensity)=>{const g=c.createRadialGradient(w/2,h/2,0,w/2,h/2,Math.max(w,h)/2);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,`rgba(0,0,0,${intensity})`);c.fillStyle=g;c.fillRect(0,0,w,h);};
const applyISOGrain=(c,w,h,iso)=>{const d=c.getImageData(0,0,w,h),p=d.data,a=(iso/1600)*.05;for(let i=0;i<p.length;i+=4){const n=(Math.random()-.5)*2*a*255;p[i]=Math.min(255,Math.max(0,p[i]+n));p[i+1]=Math.min(255,Math.max(0,p[i+1]+n));p[i+2]=Math.min(255,Math.max(0,p[i+2]+n));}c.putImageData(d,0,0);};
const applyHaze=(c,w,h,o)=>{c.fillStyle=`rgba(255,255,255,${o})`;c.fillRect(0,0,w,h);};
const applyColorJitter=(c,w,h,j)=>{const d=c.getImageData(0,0,w,h),p=d.data,rs=(Math.random()-.5)*2*j*255,gs=(Math.random()-.5)*2*j*255,bs=(Math.random()-.5)*2*j*255;for(let i=0;i<p.length;i+=4){p[i]=Math.min(255,Math.max(0,p[i]+rs));p[i+1]=Math.min(255,Math.max(0,p[i+1]+gs));p[i+2]=Math.min(255,Math.max(0,p[i+2]+bs));}c.putImageData(d,0,0);};
const applySolidBg=(c,w,h,col)=>{c.globalCompositeOperation='destination-over';c.fillStyle=col;c.fillRect(0,0,w,h);c.globalCompositeOperation='source-over';};
const applyGradientBg=(c,w,h,c1,c2)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,c1);g.addColorStop(1,c2);c.globalCompositeOperation='destination-over';c.fillStyle=g;c.fillRect(0,0,w,h);c.globalCompositeOperation='source-over';};
const applyBgBlur=(c,w,h,r)=>{const t=document.createElement('canvas');t.width=w;t.height=h;t.getContext('2d').drawImage(c.canvas,0,0);c.clearRect(0,0,w,h);c.filter=`blur(${r}px)`;c.drawImage(t,0,0);c.filter='none';};
const applyBgDesaturate=(c,w,h,f)=>{const d=c.getImageData(0,0,w,h),p=d.data,sf=1+f;for(let i=0;i<p.length;i+=4){const g=0.299*p[i]+0.587*p[i+1]+0.114*p[i+2];p[i]=Math.min(255,Math.max(0,g+sf*(p[i]-g)));p[i+1]=Math.min(255,Math.max(0,g+sf*(p[i+1]-g)));p[i+2]=Math.min(255,Math.max(0,g+sf*(p[i+2]-g)));}c.putImageData(d,0,0);};
const applyBgNoise=(c,w,h,s)=>{const d=c.getImageData(0,0,w,h),p=d.data;for(let i=0;i<p.length;i+=4){const n=(Math.random()-.5)*2*s*255*.3;p[i]=Math.min(255,Math.max(0,p[i]+n));p[i+1]=Math.min(255,Math.max(0,p[i+1]+n));p[i+2]=Math.min(255,Math.max(0,p[i+2]+n));}c.putImageData(d,0,0);};
const applyVigBlur=(c,w,h,b,v)=>{const t=document.createElement('canvas');t.width=w;t.height=h;t.getContext('2d').drawImage(c.canvas,0,0);c.clearRect(0,0,w,h);c.filter=`blur(${b}px)`;c.drawImage(t,0,0);c.filter='none';const g=c.createRadialGradient(w/2,h/2,0,w/2,h/2,Math.max(w,h)/2);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,`rgba(0,0,0,${v})`);c.fillStyle=g;c.fillRect(0,0,w,h);};
const applyChannelShuffle=(c,w,h)=>{const d=c.getImageData(0,0,w,h),p=d.data,sh=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]],s=sh[Math.floor(Math.random()*6)];for(let i=0;i<p.length;i+=4){const t=[p[i],p[i+1],p[i+2]];p[i]=t[s[0]];p[i+1]=t[s[1]];p[i+2]=t[s[2]];}c.putImageData(d,0,0);};
const applyPosterize=(c,w,h,lv)=>{const d=c.getImageData(0,0,w,h),p=d.data,step=256/lv;for(let i=0;i<p.length;i+=4){p[i]=Math.floor(p[i]/step)*step;p[i+1]=Math.floor(p[i+1]/step)*step;p[i+2]=Math.floor(p[i+2]/step)*step;}c.putImageData(d,0,0);};
const applyOcclusion=(c,w,h,p)=>{const s=['left','right','top','bottom'][Math.floor(Math.random()*4)];c.fillStyle='rgba(0,0,0,0.7)';if(s==='left')c.fillRect(0,0,w*p,h);else if(s==='right')c.fillRect(w*(1-p),0,w*p,h);else if(s==='top')c.fillRect(0,0,w,h*p);else c.fillRect(0,h*(1-p),w,h*p);};
const applyCoarseDropout=(c,w,h,n)=>{for(let i=0;i<n;i++){const sz=Math.min(w,h)*(.08+Math.random()*.08),x=Math.random()*(w-sz),y=Math.random()*(h-sz);c.fillStyle=`rgba(${Math.random()*100},${Math.random()*100},${Math.random()*100},0.6)`;c.fillRect(x,y,sz,sz);}};
const applyRandomCutout=(c,w,h,p)=>{const sz=Math.min(w,h)*p,x=Math.random()*(w-sz),y=Math.random()*(h-sz);c.fillStyle='rgba(128,128,128,0.8)';c.fillRect(x,y,sz,sz);};
const applyLightReflect=(c,w,h,o)=>{const g=c.createRadialGradient(w*.7,h*.3,0,w*.7,h*.3,w*.5);g.addColorStop(0,`rgba(255,255,255,${o})`);g.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=g;c.fillRect(0,0,w,h);};
const applyDirShadow=(c,w,h,o)=>{const r=Math.random()>.5,g=r?c.createLinearGradient(0,0,w,0):c.createLinearGradient(w,0,0,0);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,`rgba(0,0,0,${o})`);c.fillStyle=g;c.fillRect(0,0,w,h);};
const applySolarize=(c,w,h,thr)=>{const d=c.getImageData(0,0,w,h),p=d.data;for(let i=0;i<p.length;i+=4){if(p[i]>thr)p[i]=255-p[i];if(p[i+1]>thr)p[i+1]=255-p[i+1];if(p[i+2]>thr)p[i+2]=255-p[i+2];}c.putImageData(d,0,0);};
const applyHistEq=(c,w,h)=>{const d=c.getImageData(0,0,w,h),p=d.data,hist=new Array(256).fill(0);for(let i=0;i<p.length;i+=4)hist[Math.floor((p[i]+p[i+1]+p[i+2])/3)]++;const cdf=[];let sum=0;for(let i=0;i<256;i++){sum+=hist[i];cdf[i]=sum;}const cmin=cdf.find(v=>v>0),pix=w*h;for(let i=0;i<p.length;i+=4){const avg=Math.floor((p[i]+p[i+1]+p[i+2])/3),nv=Math.round(((cdf[avg]-cmin)/(pix-cmin))*255),r=nv/(avg||1);p[i]=Math.min(255,p[i]*r);p[i+1]=Math.min(255,p[i+1]*r);p[i+2]=Math.min(255,p[i+2]*r);}c.putImageData(d,0,0);};
const applyGridDistort=(c,w,h,g)=>{const s=document.createElement('canvas');s.width=w;s.height=h;s.getContext('2d').drawImage(c.canvas,0,0);const o=document.createElement('canvas');o.width=w;o.height=h;const oc=o.getContext('2d'),cw=w/g,ch=h/g;for(let i=0;i<g;i++)for(let j=0;j<g;j++){const ox=(Math.random()-.5)*cw*.3,oy=(Math.random()-.5)*ch*.3;oc.drawImage(s,i*cw,j*ch,cw,ch,i*cw+ox,j*ch+oy,cw,ch);}c.clearRect(0,0,w,h);c.drawImage(o,0,0);};
const applyFog=(c,w,h,o)=>{c.fillStyle=`rgba(200,200,200,${o})`;c.fillRect(0,0,w,h);};
const applyLowLight=(c,w,h,e)=>{const d=c.getImageData(0,0,w,h),p=d.data,f=1+e;for(let i=0;i<p.length;i+=4){const n=(Math.random()-.5)*20;p[i]=Math.min(255,Math.max(0,p[i]*f+n));p[i+1]=Math.min(255,Math.max(0,p[i+1]*f+n));p[i+2]=Math.min(255,Math.max(0,p[i+2]*f+n));}c.putImageData(d,0,0);};

// ──────────────────────────────────────────────────────────────────────────────
// Augmentation catalogue
// ──────────────────────────────────────────────────────────────────────────────
const AUGMENTATIONS=[
  {id:1, name:'Brightness +35%',           category:'Lighting & Color',    type:'pixel',     apply:(c,w,h)=>applyBrightness(c,w,h,1.35)},
  {id:2, name:'Brightness -35%',           category:'Lighting & Color',    type:'pixel',     apply:(c,w,h)=>applyBrightness(c,w,h,0.65)},
  {id:3, name:'Contrast +40%',             category:'Lighting & Color',    type:'pixel',     apply:(c,w,h)=>applyContrast(c,w,h,1.40)},
  {id:4, name:'Contrast -30%',             category:'Lighting & Color',    type:'pixel',     apply:(c,w,h)=>applyContrast(c,w,h,0.70)},
  {id:5, name:'Saturation +50%',           category:'Lighting & Color',    type:'pixel',     apply:(c,w,h)=>applySaturation(c,w,h,1.50)},
  {id:6, name:'Saturation -50%',           category:'Lighting & Color',    type:'pixel',     apply:(c,w,h)=>applySaturation(c,w,h,0.50)},
  {id:7, name:'Warm Tone +600K',           category:'Lighting & Color',    type:'pixel',     apply:(c,w,h)=>applyWhiteBalance(c,w,h,600)},
  {id:8, name:'Cool Tone -600K',           category:'Lighting & Color',    type:'pixel',     apply:(c,w,h)=>applyWhiteBalance(c,w,h,-600)},
  {id:9, name:'Highlights -40%',           category:'Lighting & Color',    type:'pixel',     apply:(c,w,h)=>applyHighlights(c,w,h,-0.4)},
  {id:10,name:'Shadows +60%',              category:'Lighting & Color',    type:'pixel',     apply:(c,w,h)=>applyShadows(c,w,h,0.6)},
  {id:11,name:'Horizontal Flip',           category:'Geometry',            type:'pixel',     apply:(c,w,h)=>applyHorizontalFlip(c,w,h)},
  {id:12,name:'Rotation +20°',            category:'Geometry',            type:'transform', apply:(c,w,h)=>applyRotation(c,w,h,20)},
  {id:13,name:'Rotation -20°',            category:'Geometry',            type:'transform', apply:(c,w,h)=>applyRotation(c,w,h,-20)},
  {id:14,name:'Crop 10% All Sides',        category:'Geometry',            type:'pixel',     apply:(c,w,h)=>applyCrop(c,w,h,0.10)},
  {id:15,name:'Crop 20% Bottom',           category:'Geometry',            type:'pixel',     apply:(c,w,h)=>applyCropBottom(c,w,h,0.20)},
  {id:16,name:'Scale 1.3×',               category:'Geometry',            type:'transform', apply:(c,w,h)=>applyScale(c,w,h,1.3)},
  {id:17,name:'Scale 0.75×',              category:'Geometry',            type:'transform', apply:(c,w,h)=>applyScale(c,w,h,0.75)},
  {id:18,name:'Shift 15% Left',           category:'Geometry',            type:'transform', apply:(c,w,h)=>applyShift(c,w,h,-0.15,0)},
  {id:19,name:'Shift 15% Right',          category:'Geometry',            type:'transform', apply:(c,w,h)=>applyShift(c,w,h,0.15,0)},
  {id:20,name:'Vertical Flip',            category:'Geometry',            type:'pixel',     apply:(c,w,h)=>applyVerticalFlip(c,w,h)},
  {id:21,name:'Gaussian Noise σ=0.05',    category:'Texture & Camera',    type:'pixel',     apply:(c,w,h)=>applyGaussianNoise(c,w,h,0.05)},
  {id:22,name:'JPEG Compression 70%',     category:'Texture & Camera',    type:'pixel',     apply:(c,w,h)=>applyJPEGCompression(c,w,h,0.70)},
  {id:23,name:'Sharpness +80%',           category:'Texture & Camera',    type:'pixel',     apply:(c,w,h)=>applySharpness(c,w,h,1.8)},
  {id:24,name:'Gaussian Blur 3px',        category:'Texture & Camera',    type:'pixel',     apply:(c,w,h)=>applyGaussianBlur(c,w,h,3)},
  {id:25,name:'Motion Blur Horizontal',   category:'Texture & Camera',    type:'pixel',     apply:(c,w,h)=>applyMotionBlur(c,w,h,6,'horizontal')},
  {id:26,name:'Motion Blur Vertical',     category:'Texture & Camera',    type:'pixel',     apply:(c,w,h)=>applyMotionBlur(c,w,h,6,'vertical')},
  {id:27,name:'Vignette 30%',             category:'Texture & Camera',    type:'pixel',     apply:(c,w,h)=>applyVignette(c,w,h,0.30)},
  {id:28,name:'ISO-1600 Grain',           category:'Texture & Camera',    type:'pixel',     apply:(c,w,h)=>applyISOGrain(c,w,h,1600)},
  {id:29,name:'Haze 25%',                 category:'Texture & Camera',    type:'pixel',     apply:(c,w,h)=>applyHaze(c,w,h,0.25)},
  {id:30,name:'Color Jitter ±15%',        category:'Texture & Camera',    type:'pixel',     apply:(c,w,h)=>applyColorJitter(c,w,h,0.15)},
  {id:31,name:'Background Blur 8px',      category:'Background',          type:'pixel',     apply:(c,w,h)=>applyBgBlur(c,w,h,8)},
  {id:32,name:'Neutral Gray Background',  category:'Background',          type:'pixel',     apply:(c,w,h)=>applySolidBg(c,w,h,'#F2F2F2')},
  {id:33,name:'Depth-of-Field 6px',       category:'Background',          type:'pixel',     apply:(c,w,h)=>applyBgBlur(c,w,h,6)},
  {id:34,name:'Soft Indoor Gradient',     category:'Background',          type:'pixel',     apply:(c,w,h)=>applyGradientBg(c,w,h,'#E8E8E8','#D0D0D0')},
  {id:35,name:'Natural Outdoor Gradient', category:'Background',          type:'pixel',     apply:(c,w,h)=>applyGradientBg(c,w,h,'#A8D8F0','#D0E8D0')},
  {id:36,name:'Background Desaturate',    category:'Background',          type:'pixel',     apply:(c,w,h)=>applyBgDesaturate(c,w,h,-0.8)},
  {id:37,name:'Background Noise σ=0.05',  category:'Background',          type:'pixel',     apply:(c,w,h)=>applyBgNoise(c,w,h,0.05)},
  {id:38,name:'Vignette + Blur (5px)',    category:'Background',          type:'pixel',     apply:(c,w,h)=>applyVigBlur(c,w,h,5,0.3)},
  {id:39,name:'Channel Shuffle RGB',      category:'Background',          type:'pixel',     apply:(c,w,h)=>applyChannelShuffle(c,w,h)},
  {id:40,name:'Posterize 4 Levels',       category:'Background',          type:'pixel',     apply:(c,w,h)=>applyPosterize(c,w,h,4)},
  {id:41,name:'Random Occlusion 20%',     category:'Occlusion & Effects', type:'pixel',     apply:(c,w,h)=>applyOcclusion(c,w,h,0.20)},
  {id:42,name:'Coarse Dropout 3 Patches', category:'Occlusion & Effects', type:'pixel',     apply:(c,w,h)=>applyCoarseDropout(c,w,h,3)},
  {id:43,name:'Random Cutout 12%',        category:'Occlusion & Effects', type:'pixel',     apply:(c,w,h)=>applyRandomCutout(c,w,h,0.12)},
  {id:44,name:'Light Reflection 30%',     category:'Occlusion & Effects', type:'pixel',     apply:(c,w,h)=>applyLightReflect(c,w,h,0.30)},
  {id:45,name:'Directional Shadow 40%',   category:'Occlusion & Effects', type:'pixel',     apply:(c,w,h)=>applyDirShadow(c,w,h,0.40)},
  {id:46,name:'Solarize Threshold 128',   category:'Occlusion & Effects', type:'pixel',     apply:(c,w,h)=>applySolarize(c,w,h,128)},
  {id:47,name:'Histogram Equalization',   category:'Occlusion & Effects', type:'pixel',     apply:(c,w,h)=>applyHistEq(c,w,h)},
  {id:48,name:'Grid Distortion 5×5',      category:'Occlusion & Effects', type:'pixel',     apply:(c,w,h)=>applyGridDistort(c,w,h,5)},
  {id:49,name:'Fog Effect 30%',           category:'Occlusion & Effects', type:'pixel',     apply:(c,w,h)=>applyFog(c,w,h,0.30)},
  {id:50,name:'Low-Light -50%',           category:'Occlusion & Effects', type:'pixel',     apply:(c,w,h)=>applyLowLight(c,w,h,-0.50)},
];

const ALL_IDS    = AUGMENTATIONS.map(a=>a.id);
const CATEGORIES = ['Lighting & Color','Geometry','Texture & Camera','Background','Occlusion & Effects'];
const MAX_DIM    = 1200;
const PRESETS    = {
  'Classification':        [1,2,3,5,11,20,21,30,27,29],
  'Object Detection':      [11,12,13,14,15,16,17,18,19,20,21,41,42,43],
  'Low-light Robustness':  [2,4,9,10,28,50,49,45],
  'Production Simulation': [22,24,25,26,27,28,29,44,45,37],
  'Color Invariance':      [1,2,3,4,5,6,7,8,9,10,30,39],
};

// ──────────────────────────────────────────────────────────────────────────────
// App State
// ──────────────────────────────────────────────────────────────────────────────
const state = {
  images: [],
  augmented: [],
  selectedAugs: new Set(ALL_IDS),
  collapsedCats: new Set(),
  processing: false,
  progress: 0,
  processedCount: 0,
  totalCount: 0,
  errors: [],
  compareMode: false,
  selectedForCompare: [],
  previewImage: null,
  downloadStatus: null, // null | 'zipping' | 'done' | 'error'
  zipProgress: 0,
  isDragging: false,
};

// ──────────────────────────────────────────────────────────────────────────────
// Render
// ──────────────────────────────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  app.innerHTML = buildHTML();
  attachEvents();
  if (state.previewImage) renderModal();
}

function buildHTML() {
  const { images, augmented, selectedAugs, processing, progress, errors, compareMode, selectedForCompare, downloadStatus, zipProgress, isDragging } = state;
  const selCount = selectedAugs.size;
  const totalOut = images.length * selCount;

  // ── Header ──
  let html = `
  <div class="header">
    <div class="badge">${icon('layers','width:1.1em;height:1.1em;')} 50 Research-backed Transformations</div>
    <h1 class="title">AugmentX <span>Studio</span></h1>
    <p class="subtitle">Professional image augmentation for machine learning pipelines</p>
    ${images.length>0?`<div class="stat-pills">
      <span class="pill pill-i">${images.length} ${images.length===1?'Image':'Images'}</span>
      <span class="pill pill-v">${selCount} Augmentations</span>
      <span class="pill pill-p">${totalOut} Total Output</span>
    </div>`:''}
  </div>`;

  // ── Upload card ──
  html += `<div class="card">
    <div class="upload-zone${isDragging?' drag':''}" id="upload-zone">
      <div class="upload-icon">${icon('upload','width:2.5rem;height:2.5rem;')}</div>
      <p class="upload-title">${images.length>0?`${images.length} image(s) loaded`:'Drop images here'}</p>
      <p class="upload-sub">${isDragging?'Release to upload':'or click to browse · JPG, PNG, WebP'}</p>
      <input type="file" id="file-input" multiple accept="image/*" style="display:none"/>
    </div>`;

  // Thumbnails
  if (images.length > 0) {
    html += `<div class="thumb-row">`;
    images.forEach(img => {
      html += `<div class="thumb-item"><img src="${img.url}" alt="${img.file.name}"/><p>${img.file.name}</p></div>`;
    });
    html += `</div>
    <div style="text-align:center;margin-top:1rem">
      <button class="btn btn-danger" id="clear-btn">${icon('trash','width:1.1em;height:1.1em;')} Clear All</button>
    </div>`;
  }

  // ── Augmentation selector (show only when images loaded, not processing, no results yet) ──
  if (images.length > 0 && !processing && augmented.length === 0) {
    html += buildSelector();
  }

  // ── Processing progress ──
  if (processing) {
    html += `<div class="progress-wrap">
      <div class="progress-label">
        <span class="spin" style="width:1.6rem;height:1.6rem;display:inline-flex">${icon('loader','width:1.6rem;height:1.6rem;')}</span>
        <span>${Math.round(progress)}% complete</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
      <p class="progress-sub">Processing ${state.processedCount} / ${state.totalCount} images…</p>
    </div>`;
  }

  html += `</div>`; // close card

  // ── Errors ──
  if (errors.length > 0) {
    html += `<div class="error-box">
      <p class="title">${icon('warn','width:1.1em;height:1.1em;color:#fca5a5')} ${errors.length} augmentation(s) failed</p>
      ${errors.slice(0,5).map(e=>`<p class="item">${e}</p>`).join('')}
      ${errors.length>5?`<p class="item">+${errors.length-5} more…</p>`:''}
    </div>`;
  }

  // ── Results ──
  if (augmented.length > 0) {
    html += buildResults();
  }

  return html;
}

function buildSelector() {
  const { selectedAugs, collapsedCats } = state;
  const selCount = selectedAugs.size;

  let h = `<hr class="sep"><div class="selector-header">
    <div style="display:flex;align-items:center;gap:.5rem">
      ${icon('settings','width:1.4em;height:1.4em;')}
      <h3>Choose Augmentations</h3>
    </div>
    <span class="count-badge">${selCount} / 50</span>
    <button class="btn btn-ghost" id="sel-all-btn" style="font-size:.8rem;padding:.35rem .85rem">
      ${selCount===50?'Deselect All':'Select All'}
    </button>
  </div>`;

  // Presets
  h += `<p class="presets-label">Presets</p><div class="presets">`;
  Object.keys(PRESETS).forEach(name => {
    h += `<button class="preset-btn" data-preset="${name}">${name}</button>`;
  });
  h += `</div>`;

  // Categories
  CATEGORIES.forEach(cat => {
    const catAugs = AUGMENTATIONS.filter(a=>a.category===cat);
    const selCnt  = catAugs.filter(a=>selectedAugs.has(a.id)).length;
    const allOn   = selCnt===catAugs.length;
    const coll    = collapsedCats.has(cat);
    h += `<div class="category-block">
      <div class="category-row">
        <button class="category-btn${allOn?' active':''}" data-cat="${cat}">
          <span>${cat}</span><span class="cnt">${selCnt}/${catAugs.length}</span>
        </button>
        <button class="collapse-btn" data-collapse="${cat}">${coll?icon('chevDown'):icon('chevUp')}</button>
      </div>`;
    if (!coll) {
      h += `<div class="aug-grid">`;
      catAugs.forEach(aug => {
        const on = selectedAugs.has(aug.id);
        h += `<button class="aug-btn${on?' on':''}" data-aug="${aug.id}">${aug.name}</button>`;
      });
      h += `</div>`;
    }
    h += `</div>`;
  });

  h += `<button class="btn btn-primary" id="generate-btn" ${selectedAugs.size===0?'disabled':''}>
    ${icon('refresh','width:1.4em;height:1.4em;')}
    Generate ${selectedAugs.size} Variations${state.images.length>1?` · ${state.images.length*selectedAugs.size} Total`:''}
  </button>`;

  return h;
}

function buildResults() {
  const { augmented, compareMode, selectedForCompare, downloadStatus, zipProgress } = state;
  const grouped = {};
  augmented.forEach(img => { (grouped[img.augmentation.category]=grouped[img.augmentation.category]||[]).push(img); });
  const bySource = state.images.length > 1
    ? augmented.reduce((acc,img)=>{ (acc[img.originalName]=acc[img.originalName]||[]).push(img); return acc; },{})
    : null;

  const dlBtnContent = downloadStatus==='zipping'
    ? `${icon('loader','width:1.1em;height:1.1em;')} <span class="spin" style="position:absolute;left:.8rem">${icon('loader','width:1.1em;height:1.1em;')}</span>Zipping… ${zipProgress>0?zipProgress+'%':''}`
    : downloadStatus==='done'
    ? `${icon('check','width:1.1em;height:1.1em;')} Downloaded!`
    : downloadStatus==='error'
    ? `${icon('warn','width:1.1em;height:1.1em;')} Failed — retry`
    : `${icon('download','width:1.1em;height:1.1em;')} Download All`;
  const dlBtnCls = downloadStatus==='done'?'btn-emerald':downloadStatus==='error'?'btn btn-ghost':downloadStatus==='zipping'?'btn btn-ghost':'btn btn-emerald';

  let h = `<div class="card">
  <div class="results-header">
    <div>
      <p class="results-title">Augmented Dataset</p>
      <p class="results-sub">${icon('check','width:1.1em;height:1.1em;')} ${augmented.length} images ready for training</p>
    </div>
    <div class="action-row">
      <button class="btn ${compareMode?'btn-violet':'btn-ghost'}" id="compare-btn">${icon('eye','width:1.1em;height:1.1em;')} ${compareMode?'Exit Compare':'Compare Mode'}</button>
      <button class="btn btn-ghost" id="redo-btn">${icon('refresh','width:1.1em;height:1.1em;')} Redo</button>
      <button class="btn ${dlBtnCls}" id="dl-all-btn" ${downloadStatus==='zipping'?'disabled':''}>${dlBtnContent}</button>
    </div>
  </div>`;

  // ZIP progress bar
  if (downloadStatus==='zipping') {
    h += `<div class="zip-box">
      <p class="label">${icon('loader','width:1.1em;height:1.1em;')} Building ZIP archive… ${zipProgress}%</p>
      <div class="progress-bar"><div class="progress-fill" style="width:${zipProgress}%"></div></div>
    </div>`;
  }

  // Stats
  h += `<div class="stats-grid">
    <div class="stat-card sc-i"><p>Total Images</p><p>${augmented.length}</p></div>
    <div class="stat-card sc-v"><p>Categories</p><p>${Object.keys(grouped).length}</p></div>
    <div class="stat-card sc-p"><p>Augmentations</p><p>${state.selectedAugs.size}</p></div>
    <div class="stat-card sc-e"><p>Source Images</p><p>${state.images.length}</p></div>
  </div>`;

  if (compareMode) {
    h += `<div class="compare-info">Compare mode active — click images to select up to 4 (${selectedForCompare.length}/4 selected)</div>`;
  }

  // Image grid
  if (bySource) {
    Object.entries(bySource).forEach(([src, imgs]) => {
      h += `<div class="cat-section"><p class="src-heading"><span class="n">${imgs.length}</span>${src}</p>`;
      CATEGORIES.filter(cat=>imgs.some(i=>i.augmentation.category===cat)).forEach(cat => {
        h += `<p style="font-size:.72rem;font-weight:700;color:#818cf8;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.75rem">${cat}</p>`;
        h += buildImgGrid(imgs.filter(i=>i.augmentation.category===cat));
      });
      h += `</div>`;
    });
  } else {
    Object.entries(grouped).forEach(([cat, imgs]) => {
      h += `<div class="cat-section">
        <p class="cat-heading"><span class="cnt-badge">${imgs.length}</span>${cat}</p>
        ${buildImgGrid(imgs)}
      </div>`;
    });
  }

  // Compare panel
  if (selectedForCompare.length > 0) {
    h += `<div class="compare-panel card" style="margin-top:1.5rem">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
        <p style="font-weight:800;color:#fff">Side-by-Side (${selectedForCompare.length}/4)</p>
        <button class="btn btn-ghost" id="clear-compare-btn">${icon('x','width:1em;height:1em;')} Clear</button>
      </div>
      <div class="compare-grid">
        ${selectedForCompare.map(aug=>`
          <div class="compare-item">
            <img src="${aug.dataUrl}" alt="${aug.augmentation.name}" data-compare-preview="${aug.id}"/>
            <p>${aug.augmentation.name}</p>
            <button class="compare-rm" data-rm-compare="${aug.id}">${icon('x','width:.8em;height:.8em;')}</button>
          </div>`).join('')}
      </div>
    </div>`;
  }

  h += `</div>`;
  return h;
}

function buildImgGrid(imgs) {
  const { compareMode, selectedForCompare } = state;
  let h = `<div class="img-grid">`;
  imgs.forEach(aug => {
    const isSel = !!selectedForCompare.find(x=>x.id===aug.id);
    h += `<div class="img-card">
      <img src="${aug.dataUrl}" alt="${aug.augmentation.name}" data-img-id="${aug.id}" ${compareMode?'':'data-preview="'+aug.id+'"'}/>
      ${compareMode?`<button class="compare-sel ${isSel?'on':'off'}" data-toggle-compare="${aug.id}">${isSel?'✓ Selected':'+ Compare'}</button>`:''}
      ${!compareMode?`<div class="img-overlay">
        <p>${aug.augmentation.name}</p>
        <div class="img-overlay-btns">
          <button class="ov-btn" data-preview="${aug.id}">${icon('zoomin','width:1em;height:1em;')}</button>
          <button class="ov-btn dl" data-dl="${aug.id}">${icon('download','width:1em;height:1em;')}</button>
        </div>
      </div>`:''}
      <p class="img-label">${aug.augmentation.name}</p>
    </div>`;
  });
  h += `</div>`;
  return h;
}

function renderModal() {
  const aug = state.previewImage;
  const existing = document.getElementById('modal-overlay');
  if (existing) existing.remove();
  const div = document.createElement('div');
  div.id = 'modal-overlay';
  div.className = 'modal-overlay';
  div.innerHTML = `<div class="modal-inner" id="modal-inner">
    <button class="modal-close" id="modal-close">${icon('x','width:1em;height:1em;')} Close (Esc)</button>
    <img src="${aug.dataUrl}" alt="${aug.augmentation.name}"/>
    <div class="modal-footer">
      <div>
        <h3>${aug.augmentation.name}</h3>
        <p>${aug.augmentation.category} · ${aug.originalName}</p>
      </div>
      <button class="btn btn-emerald" id="modal-dl-btn">${icon('download','width:1em;height:1em;')} Download</button>
    </div>
  </div>`;
  document.body.appendChild(div);
  div.addEventListener('click', e => { if (e.target===div) closeModal(); });
  div.querySelector('#modal-close').addEventListener('click', closeModal);
  div.querySelector('#modal-dl-btn').addEventListener('click', () => downloadSingle(aug));
}

function closeModal() {
  state.previewImage = null;
  const el = document.getElementById('modal-overlay');
  if (el) el.remove();
}

// ──────────────────────────────────────────────────────────────────────────────
// Event attachment
// ──────────────────────────────────────────────────────────────────────────────
function attachEvents() {
  // Upload zone
  const zone = document.getElementById('upload-zone');
  const fileInput = document.getElementById('file-input');
  if (zone) {
    zone.addEventListener('click', () => fileInput && fileInput.click());
    zone.addEventListener('dragover', e => { e.preventDefault(); if(!state.isDragging){state.isDragging=true;render();} });
    zone.addEventListener('dragleave', () => { state.isDragging=false; render(); });
    zone.addEventListener('drop', e => { e.preventDefault(); state.isDragging=false; loadFiles(e.dataTransfer.files); });
  }
  if (fileInput) fileInput.addEventListener('change', e => loadFiles(e.target.files));

  // Clear
  const clearBtn = document.getElementById('clear-btn');
  if (clearBtn) clearBtn.addEventListener('click', () => {
    state.images=[]; state.augmented=[]; state.selectedForCompare=[]; state.errors=[]; state.compareMode=false;
    render();
  });

  // Select all toggle
  const selAllBtn = document.getElementById('sel-all-btn');
  if (selAllBtn) selAllBtn.addEventListener('click', () => {
    if (state.selectedAugs.size===50) state.selectedAugs.clear();
    else state.selectedAugs = new Set(ALL_IDS);
    render();
  });

  // Presets
  document.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => { state.selectedAugs = new Set(PRESETS[btn.dataset.preset]); render(); });
  });

  // Category toggle
  document.querySelectorAll('[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      const ids = AUGMENTATIONS.filter(a=>a.category===btn.dataset.cat).map(a=>a.id);
      const allOn = ids.every(id=>state.selectedAugs.has(id));
      if (allOn) ids.forEach(id=>state.selectedAugs.delete(id));
      else ids.forEach(id=>state.selectedAugs.add(id));
      render();
    });
  });

  // Collapse toggle
  document.querySelectorAll('[data-collapse]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.collapse;
      if (state.collapsedCats.has(cat)) state.collapsedCats.delete(cat);
      else state.collapsedCats.add(cat);
      render();
    });
  });

  // Individual aug toggle
  document.querySelectorAll('[data-aug]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = +btn.dataset.aug;
      if (state.selectedAugs.has(id)) state.selectedAugs.delete(id);
      else state.selectedAugs.add(id);
      render();
    });
  });

  // Generate
  const genBtn = document.getElementById('generate-btn');
  if (genBtn) genBtn.addEventListener('click', processAugmentations);

  // Compare mode
  const cmpBtn = document.getElementById('compare-btn');
  if (cmpBtn) cmpBtn.addEventListener('click', () => {
    state.compareMode = !state.compareMode;
    if (!state.compareMode) state.selectedForCompare = [];
    render();
  });

  // Redo
  const redoBtn = document.getElementById('redo-btn');
  if (redoBtn) redoBtn.addEventListener('click', () => { state.augmented=[]; render(); });

  // Download all
  const dlAllBtn = document.getElementById('dl-all-btn');
  if (dlAllBtn) dlAllBtn.addEventListener('click', downloadAll);

  // Clear compare
  const clearCmp = document.getElementById('clear-compare-btn');
  if (clearCmp) clearCmp.addEventListener('click', () => { state.selectedForCompare=[]; render(); });

  // Preview / download buttons in grid
  document.querySelectorAll('[data-preview]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const id = el.dataset.preview;
      const aug = state.augmented.find(a=>a.id===id);
      if (aug) { state.previewImage=aug; renderModal(); }
    });
  });
  document.querySelectorAll('[data-dl]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const aug = state.augmented.find(a=>a.id===el.dataset.dl);
      if (aug) downloadSingle(aug);
    });
  });
  document.querySelectorAll('[data-toggle-compare]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const id = el.dataset.toggleCompare;
      const aug = state.augmented.find(a=>a.id===id);
      if (!aug) return;
      const idx = state.selectedForCompare.findIndex(x=>x.id===id);
      if (idx>=0) state.selectedForCompare.splice(idx,1);
      else if (state.selectedForCompare.length<4) state.selectedForCompare.push(aug);
      render();
    });
  });
  document.querySelectorAll('[data-rm-compare]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.rmCompare;
      state.selectedForCompare = state.selectedForCompare.filter(x=>x.id!==id);
      render();
    });
  });
  document.querySelectorAll('[data-compare-preview]').forEach(el => {
    el.addEventListener('click', () => {
      const aug = state.selectedForCompare.find(x=>x.id===el.dataset.comparePreview);
      if (aug) { state.previewImage=aug; renderModal(); }
    });
  });
}

// ──────────────────────────────────────────────────────────────────────────────
// File loading
// ──────────────────────────────────────────────────────────────────────────────
function loadFiles(files) {
  const imgs = Array.from(files).filter(f=>f.type.startsWith('image/'));
  if (!imgs.length) return;
  Promise.all(imgs.map(file=>new Promise((res,rej)=>{
    const r=new FileReader();
    r.onload=ev=>{const i=new Image();i.onload=()=>res({file,img:i,url:ev.target.result});i.onerror=rej;i.src=ev.target.result;};
    r.onerror=rej; r.readAsDataURL(file);
  }))).then(loaded=>{
    state.images=loaded; state.augmented=[]; state.errors=[];
    state.selectedForCompare=[]; state.compareMode=false;
    render();
  }).catch(()=>{ state.errors=['Failed to load one or more images.']; render(); });
}

// ──────────────────────────────────────────────────────────────────────────────
// Processing
// ──────────────────────────────────────────────────────────────────────────────
async function processAugmentations() {
  if (!state.images.length) return;
  state.processing=true; state.progress=0; state.errors=[]; state.augmented=[];
  const selAugs = AUGMENTATIONS.filter(a=>state.selectedAugs.has(a.id));
  state.totalCount = state.images.length * selAugs.length;
  state.processedCount = 0;
  render();

  const allAug = [];
  for (let ii=0;ii<state.images.length;ii++) {
    const {img,file}=state.images[ii];
    const scale=Math.min(1,MAX_DIM/Math.max(img.width,img.height));
    const W=Math.round(img.width*scale), H=Math.round(img.height*scale);
    for (let ai=0;ai<selAugs.length;ai++) {
      const aug=selAugs[ai];
      const cv=document.createElement('canvas'); cv.width=W; cv.height=H;
      const ctx=cv.getContext('2d');
      try {
        if (aug.type==='transform') { ctx.save(); aug.apply(ctx,W,H); ctx.drawImage(img,0,0,W,H); ctx.restore(); }
        else { ctx.drawImage(img,0,0,W,H); aug.apply(ctx,W,H); }
      } catch(e) { state.errors.push(`${aug.name} on "${file.name}": ${e.message}`); }
      allAug.push({ originalName:file.name, augmentation:aug, dataUrl:cv.toDataURL('image/jpeg',0.92), id:`${ii}-${aug.id}` });
      state.processedCount++;
      state.progress=(state.processedCount/state.totalCount)*100;
      if ((ai+1)%5===0) { await new Promise(r=>requestAnimationFrame(r)); updateProgress(); }
    }
  }
  state.augmented=allAug; state.processing=false; render();
}

function updateProgress() {
  const fill = document.querySelector('.progress-fill');
  const label = document.querySelector('.progress-label span:last-child');
  const sub = document.querySelector('.progress-sub');
  if (fill) fill.style.width = state.progress+'%';
  if (label) label.textContent = Math.round(state.progress)+'% complete';
  if (sub) sub.textContent = `Processing ${state.processedCount} / ${state.totalCount} images…`;
}

// ──────────────────────────────────────────────────────────────────────────────
// Download
// ──────────────────────────────────────────────────────────────────────────────
function downloadSingle(aug) {
  const a=document.createElement('a');
  a.download=`${aug.originalName.replace(/\.[^/.]+$/,'')}_${aug.augmentation.name.replace(/[^a-zA-Z0-9]/g,'_')}.jpg`;
  a.href=aug.dataUrl; document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

async function downloadAll() {
  if (state.downloadStatus==='zipping') return;
  if (!window.JSZip) { alert('JSZip not loaded yet, please wait a moment and try again.'); return; }
  state.downloadStatus='zipping'; state.zipProgress=0; render();
  try {
    const zip = new window.JSZip();
    state.augmented.forEach(aug=>{
      const b64=aug.dataUrl.split(',')[1];
      const name=aug.originalName.replace(/\.[^/.]+$/,'');
      const slug=aug.augmentation.name.replace(/[^a-zA-Z0-9]/g,'_');
      const folder=aug.augmentation.category.replace(/[^a-zA-Z0-9]/g,'_');
      zip.folder(folder).file(`${name}_${slug}.jpg`,b64,{base64:true});
    });
    zip.file('augmentation_log.json',JSON.stringify(state.augmented.map(aug=>({
      filename:`${aug.augmentation.category.replace(/[^a-zA-Z0-9]/g,'_')}/${aug.originalName.replace(/\.[^/.]+$/,'')}_${aug.augmentation.name.replace(/[^a-zA-Z0-9]/g,'_')}.jpg`,
      original:aug.originalName, augmentation:aug.augmentation.name,
      category:aug.augmentation.category, augmentation_id:aug.augmentation.id,
    })),null,2));
    const blob=await zip.generateAsync(
      {type:'blob',compression:'DEFLATE',compressionOptions:{level:6}},
      m=>{ state.zipProgress=Math.round(m.percent); updateZipProgress(); }
    );
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a'); a.href=url; a.download=`augmented_dataset_${state.augmented.length}imgs.zip`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(()=>URL.revokeObjectURL(url),2000);
    state.downloadStatus='done'; render(); setTimeout(()=>{state.downloadStatus=null;render();},4000);
  } catch(err) {
    console.error(err); state.downloadStatus='error'; render(); setTimeout(()=>{state.downloadStatus=null;render();},4000);
  }
}

function updateZipProgress() {
  const fill = document.querySelector('.zip-box .progress-fill');
  const label = document.querySelector('.zip-box .label');
  if (fill) fill.style.width=state.zipProgress+'%';
  if (label) label.innerHTML=`${icon('loader','width:1.1em;height:1.1em;')} Building ZIP archive… ${state.zipProgress}%`;
}

// ──────────────────────────────────────────────────────────────────────────────
// Keyboard
// ──────────────────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key==='Escape' && state.previewImage) closeModal();
});

// ── Boot ──
render();
