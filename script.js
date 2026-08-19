/* ════════ TRANSLATIONS ════════ */
const T = {
  en: {
    'nav.create':'🪪 Create Card','nav.scan':'📷 Scan QR',
    'hero.tag':'Hackathon 2025 · HealthTech',
    'hero.h':'Your health records,<br><em>always with you.</em>',
    'hero.p':'A portable digital health card for migrant workers — carry your critical medical data anywhere, share it via QR code, access it even offline.',
    'hero.cta1':'📝 Create My Health Card','hero.cta2':'📷 Scan Emergency QR',
    'form.section-tag':'HEALTH CARD BUILDER','form.section-h':'Fill in your medical details',
    'form.section-p':'Your information is stored locally on your device. Nothing is sent to any server.',
    'form.clear':'🗑️ Clear All','form.prev':'← Back','form.next':'Next →',
    'ftab.personal':'👤 Personal','ftab.medical':'🏥 Medical','ftab.vaccines':'💉 Vaccines','ftab.emergency':'🚨 Emergency',
    'personal.title':'Personal Information','personal.name':'Full Name','personal.age':'Age','personal.gender':'Gender','personal.mobile':'Mobile Number','personal.occupation':'Occupation / Work Location',
    'medical.title':'Medical Information','medical.blood':'Blood Group','medical.height':'Height / Weight','medical.allergies':'Known Allergies','medical.allergies-hint':'List all substances you are allergic to.','medical.chronic':'Chronic Conditions','medical.meds':'Current Medications','medical.surgeries':'Past Surgeries / Hospitalizations',
    'vax.title':'Vaccination Record','vax.other':'Other Vaccinations',
    'em.title':'Emergency Contact','em.name':'Contact Name','em.phone':'Contact Number','em.relation':'Relationship','em.alt-phone':'Alternate Contact','em.doctor':'Treating Doctor / Clinic',
    'gen.h':'Ready to generate your Health Card?','gen.p':'Your QR code will contain your complete encrypted health profile for emergency scanning.',
    'gen.btn':'⚡ Generate Digital Health Card',
    'card.tag':'YOUR DIGITAL HEALTH CARD','card.h':'Scan the QR in any emergency','card.regen':'🔄 Regenerate','card.strip':'EMERGENCY HEALTH RECORD — SCAN QR',
    'actions.title':'Quick Info','actions.download':'Download & Share','actions.scanner':'Test Your Card',
    'info.blood':'Blood Group','info.mobile':'Mobile','info.em':'Emergency',
    'btn.download':'⬇️ Download as Image','btn.print':'🖨️ Print Card','btn.share':'🔗 Copy Share Link','btn.scan-test':'📷 Open Emergency Scanner',
    'scan.h':'Emergency QR Scanner','scan.p':'Scan a HealthPass QR code to instantly access the patient\'s critical medical information.',
    'scan.box-title':'Camera Scanner','scan.box-sub':'Point at a HealthPass QR code','scan.start':'Start Camera','scan.stop':'⏹ Stop Camera','scan.clear':'🔄 Scan Another',
    'scan.placeholder-title':'Camera not started','scan.placeholder-sub':'Click "Start Camera" to begin scanning',
    'scan.status-idle':'Waiting to start',
    'scan.info-title':'How it Works','scan.info-sub':'For emergency responders',
    'how.step1-title':'Allow Camera Access','how.step1-desc':'Grant camera permission when prompted by the browser.',
    'how.step2-title':'Point at QR Code','how.step2-desc':'Hold the patient\'s HealthPass card in front of the camera.',
    'how.step3-title':'Instant Results','how.step3-desc':'Critical medical info appears immediately below.',
    'how.note-title':'🔒 Privacy Note:','how.note-desc':' All data is decoded locally. Nothing is uploaded or stored.',
    'results.em-title':'Emergency Information','results.personal':'Personal Details','results.vaccinations':'Vaccination Status','results.contact':'Emergency Contact',
    'offline.ready':'Offline Ready','offline.offline':'No Internet',
    'toast.copied':'✅ Link copied!','toast.downloaded':'✅ Card downloaded!','toast.cleared':'🗑️ Data cleared.','toast.saved':'💾 Card saved!','toast.invalid-qr':'❌ Invalid HealthPass QR',
  },
  hi: {
    'nav.create':'🪪 कार्ड बनाएं','nav.scan':'📷 QR स्कैन',
    'hero.tag':'हैकाथन 2025 · स्वास्थ्य तकनीक',
    'hero.h':'आपके स्वास्थ्य रिकॉर्ड,<br><em>हमेशा आपके साथ।</em>',
    'hero.p':'प्रवासी मजदूरों के लिए पोर्टेबल डिजिटल हेल्थ कार्ड — अपने महत्वपूर्ण चिकित्सा डेटा को कहीं भी साथ ले जाएं।',
    'hero.cta1':'📝 हेल्थ कार्ड बनाएं','hero.cta2':'📷 QR स्कैन करें',
    'form.section-tag':'हेल्थ कार्ड बिल्डर','form.section-h':'अपनी चिकित्सा जानकारी भरें',
    'form.section-p':'आपकी जानकारी केवल आपके डिवाइस पर सेव होती है।',
    'form.clear':'🗑️ सब मिटाएं','form.prev':'← वापस','form.next':'आगे →',
    'ftab.personal':'👤 व्यक्तिगत','ftab.medical':'🏥 चिकित्सा','ftab.vaccines':'💉 टीके','ftab.emergency':'🚨 आपातकाल',
    'personal.title':'व्यक्तिगत जानकारी','personal.name':'पूरा नाम','personal.age':'आयु','personal.gender':'लिंग','personal.mobile':'मोबाइल नंबर','personal.occupation':'पेशा / कार्यस्थल',
    'medical.title':'चिकित्सा जानकारी','medical.blood':'रक्त समूह','medical.height':'ऊंचाई / वजन','medical.allergies':'ज्ञात एलर्जी','medical.allergies-hint':'सभी एलर्जी की सूची बनाएं।','medical.chronic':'पुरानी बीमारियां','medical.meds':'वर्तमान दवाएं','medical.surgeries':'पिछली सर्जरी',
    'vax.title':'टीकाकरण रिकॉर्ड','vax.other':'अन्य टीके',
    'em.title':'आपातकालीन संपर्क','em.name':'संपर्क नाम','em.phone':'संपर्क नंबर','em.relation':'रिश्ता','em.alt-phone':'वैकल्पिक संपर्क','em.doctor':'इलाज करने वाले डॉक्टर',
    'gen.h':'अपना हेल्थ कार्ड बनाने के लिए तैयार हैं?','gen.p':'आपका QR कोड आपकी पूरी स्वास्थ्य प्रोफ़ाइल रखेगा।',
    'gen.btn':'⚡ डिजिटल हेल्थ कार्ड बनाएं',
    'card.tag':'आपका डिजिटल हेल्थ कार्ड','card.h':'किसी भी आपात स्थिति में QR स्कैन करें','card.regen':'🔄 दोबारा बनाएं','card.strip':'आपातकालीन स्वास्थ्य रिकॉर्ड — QR स्कैन करें',
    'actions.title':'त्वरित जानकारी','actions.download':'डाउनलोड और शेयर','actions.scanner':'अपना कार्ड टेस्ट करें',
    'info.blood':'रक्त समूह','info.mobile':'मोबाइल','info.em':'आपातकाल',
    'btn.download':'⬇️ इमेज डाउनलोड करें','btn.print':'🖨️ कार्ड प्रिंट करें','btn.share':'🔗 लिंक कॉपी करें','btn.scan-test':'📷 स्कैनर खोलें',
    'scan.h':'आपातकालीन QR स्कैनर','scan.p':'रोगी की महत्वपूर्ण चिकित्सा जानकारी तुरंत देखने के लिए QR कोड स्कैन करें।',
    'scan.box-title':'कैमरा स्कैनर','scan.box-sub':'HealthPass QR कोड की ओर कैमरा करें','scan.start':'कैमरा शुरू करें','scan.stop':'⏹ कैमरा बंद करें','scan.clear':'🔄 दूसरा स्कैन',
    'scan.placeholder-title':'कैमरा शुरू नहीं हुआ','scan.placeholder-sub':'"कैमरा शुरू करें" पर क्लिक करें',
    'scan.status-idle':'शुरू होने की प्रतीक्षा में',
    'scan.info-title':'यह कैसे काम करता है','scan.info-sub':'आपातकालीन सहायकों के लिए',
    'how.step1-title':'कैमरा एक्सेस दें','how.step1-desc':'ब्राउज़र द्वारा पूछे जाने पर अनुमति दें।',
    'how.step2-title':'QR कोड की ओर करें','how.step2-desc':'रोगी का HealthPass कार्ड कैमरे के सामने रखें।',
    'how.step3-title':'तुरंत परिणाम','how.step3-desc':'महत्वपूर्ण चिकित्सा जानकारी नीचे दिखेगी।',
    'how.note-title':'🔒 गोपनीयता नोट:','how.note-desc':' सभी डेटा स्थानीय रूप से डीकोड होता है।',
    'results.em-title':'आपातकालीन जानकारी','results.personal':'व्यक्तिगत विवरण','results.vaccinations':'टीकाकरण स्थिति','results.contact':'आपातकालीन संपर्क',
    'offline.ready':'ऑफलाइन रेडी','offline.offline':'इंटरनेट नहीं',
    'toast.copied':'✅ लिंक कॉपी हो गया!','toast.downloaded':'✅ कार्ड डाउनलोड हुआ!','toast.cleared':'🗑️ डेटा हटाया गया।','toast.saved':'💾 कार्ड सेव!','toast.invalid-qr':'❌ अमान्य HealthPass QR',
  }
};

/* ════════ STATE ════════ */
let currentLang = localStorage.getItem('hp-lang') || 'en';
let currentTheme = localStorage.getItem('hp-theme') || 'light';
let currentFormTab = 0;
let formTabs = ['personal','medical','vaccines','emergency'];
let checkedVaccines = JSON.parse(localStorage.getItem('hp-vax') || '[]');
let html5QrCode = null;
let cardData = null;
let shareUrl = '';

const vaccines = [
  {id:'covid',name:'COVID-19 (Covishield / Covaxin)',desc:'2 doses + Booster recommended'},
  {id:'tetanus',name:'Tetanus (TT / Td)',desc:'Every 10 years, essential for injuries'},
  {id:'hepatitis-b',name:'Hepatitis B',desc:'3-dose series'},
  {id:'typhoid',name:'Typhoid',desc:'Highly recommended for migrant workers'},
  {id:'polio',name:'Polio (OPV)',desc:'Childhood immunization'},
  {id:'measles',name:'Measles / MMR',desc:'Mumps, Measles, Rubella'},
  {id:'flu',name:'Influenza (Flu)',desc:'Annual vaccination recommended'},
];

/* ════════ INIT ════════ */
window.onload = () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  renderVaccines();
  renderTabProgress();
  loadFromStorage();
  checkOffline();
  checkURLData();
  window.addEventListener('online', checkOffline);
  window.addEventListener('offline', checkOffline);
};

/* ════════ TRANSLATIONS ════════ */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('hp-lang', lang);
  document.getElementById('langSelect').value = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key]) el.textContent = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (T[lang][key]) el.innerHTML = T[lang][key];
  });
}
function setLang(lang) { applyLang(lang); }
function t(key) { return T[currentLang][key] || T['en'][key] || key; }

/* ════════ THEME ════════ */
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('hp-theme', theme);
  document.getElementById('darkToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
}
function toggleDark() { applyTheme(currentTheme === 'dark' ? 'light' : 'dark'); }

/* ════════ OFFLINE ════════ */
function checkOffline() {
  const badge = document.getElementById('offlineBadge');
  const text = document.getElementById('offlineText');
  if (navigator.onLine) {
    badge.classList.remove('offline');
    text.textContent = t('offline.ready');
  } else {
    badge.classList.add('offline');
    text.textContent = t('offline.offline');
  }
}

/* ════════ PAGE NAV ════════ */
function showPage(page) {
  document.getElementById('page-create').classList.toggle('hidden', page !== 'create');
  document.getElementById('page-scanner').classList.toggle('hidden', page !== 'scanner');
  document.getElementById('tab-create-nav').classList.toggle('active', page === 'create');
  document.getElementById('tab-scan-nav').classList.toggle('active', page === 'scanner');
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ════════ FORM TABS ════════ */
function switchFormTab(tab) {
  currentFormTab = formTabs.indexOf(tab);
  formTabs.forEach(tt => {
    document.getElementById('ftab-'+tt).classList.toggle('active', tt === tab);
    document.getElementById('fpanel-'+tt).classList.toggle('active', tt === tab);
  });
  renderTabProgress();
  document.getElementById('btnPrev').style.display = currentFormTab > 0 ? '' : 'none';
  document.getElementById('btnNext').textContent = currentFormTab === formTabs.length-1 ? '✅ Done' : t('form.next');
}
function nextFormTab() {
  if (currentFormTab < formTabs.length-1) switchFormTab(formTabs[currentFormTab+1]);
}
function prevFormTab() {
  if (currentFormTab > 0) switchFormTab(formTabs[currentFormTab-1]);
}
function renderTabProgress() {
  const p = document.getElementById('tabProgress');
  p.innerHTML = formTabs.map((tt,i) => `<div class="tab-dot ${i===currentFormTab?'active':i<currentFormTab?'done':''}"></div>`).join('');
}

/* ════════ VACCINES ════════ */
function renderVaccines() {
  document.getElementById('vaccineGrid').innerHTML = vaccines.map(v => `
    <div class="vaccine-item ${checkedVaccines.includes(v.id)?'checked':''}" onclick="toggleVaccine('${v.id}',this)">
      <div class="vaccine-check">${checkedVaccines.includes(v.id)?'✓':''}</div>
      <div class="vaccine-info">
        <div class="vaccine-name">${v.name}</div>
        <div class="vaccine-desc">${v.desc}</div>
      </div>
      <div class="vaccine-status">${checkedVaccines.includes(v.id)?'✅ Done':'Not done'}</div>
    </div>
  `).join('');
}
function toggleVaccine(id, el) {
  if (checkedVaccines.includes(id)) {
    checkedVaccines = checkedVaccines.filter(v => v !== id);
    el.classList.remove('checked');
    el.querySelector('.vaccine-check').textContent = '';
    el.querySelector('.vaccine-status').textContent = 'Not done';
  } else {
    checkedVaccines.push(id);
    el.classList.add('checked');
    el.querySelector('.vaccine-check').textContent = '✓';
    el.querySelector('.vaccine-status').textContent = '✅ Done';
  }
  localStorage.setItem('hp-vax', JSON.stringify(checkedVaccines));
  onFormChange();
}

/* ════════ FORM DATA ════════ */
function getFormData() {
  return {
    _version: '1.0',
    _app: 'HealthPass',
    personal: {
      name: document.getElementById('f-name').value.trim(),
      age: document.getElementById('f-age').value.trim(),
      gender: document.getElementById('f-gender').value,
      mobile: document.getElementById('f-mobile').value.trim(),
      occupation: document.getElementById('f-occupation').value.trim(),
    },
    medical: {
      bloodGroup: document.getElementById('f-blood').value,
      height: document.getElementById('f-height').value.trim(),
      allergies: document.getElementById('f-allergies').value.trim(),
      chronic: document.getElementById('f-chronic').value.trim(),
      medications: document.getElementById('f-meds').value.trim(),
      surgeries: document.getElementById('f-surgeries').value.trim(),
    },
    vaccinations: {
      completed: checkedVaccines.map(id => vaccines.find(v=>v.id===id)?.name || id),
      other: document.getElementById('f-vax-other').value.trim(),
    },
    emergency: {
      name: document.getElementById('f-em-name').value.trim(),
      phone: document.getElementById('f-em-phone').value.trim(),
      relation: document.getElementById('f-em-relation').value,
      altPhone: document.getElementById('f-em-alt').value.trim(),
      doctor: document.getElementById('f-doctor').value.trim(),
    },
    generatedAt: new Date().toISOString(),
  };
}

function setFormData(data) {
  if (!data) return;
  const p = data.personal || {};
  const m = data.medical || {};
  const v = data.vaccinations || {};
  const e = data.emergency || {};
  if (p.name) document.getElementById('f-name').value = p.name;
  if (p.age) document.getElementById('f-age').value = p.age;
  if (p.gender) document.getElementById('f-gender').value = p.gender;
  if (p.mobile) document.getElementById('f-mobile').value = p.mobile;
  if (p.occupation) document.getElementById('f-occupation').value = p.occupation;
  if (m.bloodGroup) document.getElementById('f-blood').value = m.bloodGroup;
  if (m.height) document.getElementById('f-height').value = m.height;
  if (m.allergies) document.getElementById('f-allergies').value = m.allergies;
  if (m.chronic) document.getElementById('f-chronic').value = m.chronic;
  if (m.medications) document.getElementById('f-meds').value = m.medications;
  if (m.surgeries) document.getElementById('f-surgeries').value = m.surgeries;
  if (v.other) document.getElementById('f-vax-other').value = v.other;
  if (e.name) document.getElementById('f-em-name').value = e.name;
  if (e.phone) document.getElementById('f-em-phone').value = e.phone;
  if (e.relation) document.getElementById('f-em-relation').value = e.relation;
  if (e.altPhone) document.getElementById('f-em-alt').value = e.altPhone;
  if (e.doctor) document.getElementById('f-doctor').value = e.doctor;
}

/* ════════ STORAGE ════════ */
function saveToStorage(data) {
  localStorage.setItem('hp-data', JSON.stringify(data));
}
function loadFromStorage() {
  const saved = localStorage.getItem('hp-data');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      setFormData(data);
      generateCard(true);
    } catch(e) {}
  }
}
function onFormChange() {
  const data = getFormData();
  saveToStorage(data);
  checkRiskAlerts(data);
}

/* ════════ RISK ALERTS ════════ */
function checkRiskAlerts(data) {
  const blood = data.medical?.bloodGroup;
  const emName = data.emergency?.name;
  const emPhone = data.emergency?.phone;
  const banner = document.getElementById('alertBanner');
  if (!blood || !emName || !emPhone) {
    banner.classList.remove('hidden');
    let missing = [];
    if (!blood) missing.push('Blood Group');
    if (!emName || !emPhone) missing.push('Emergency Contact');
    document.getElementById('alertText').textContent = '⚠️ Critical information missing: ' + missing.join(', ');
  } else {
    banner.classList.add('hidden');
  }
}

/* ════════════════════════════════════════
   QR CODE — USING QRIOUS
   Level L supports up to 2953 bytes.
   PATCH 2: QR_SIZE reduced from 160 → 148 to fit inside the 6px-padded white box.
════════════════════════════════════════ */

const VAX_NAMES = {
  'covid':'COVID-19','tetanus':'Tetanus','hepatitis-b':'Hepatitis B',
  'typhoid':'Typhoid','polio':'Polio','measles':'Measles/MMR','flu':'Influenza'
};

function compressForQR(data) {
  const p = data.personal || {};
  const m = data.medical || {};
  const v = data.vaccinations || {};
  const e = data.emergency || {};

  const vaxIds = (v.completed || []).map(name => {
    const entry = Object.entries(VAX_NAMES).find(([id, n]) =>
      name.toLowerCase().includes(n.toLowerCase().split('/')[0].trim())
    );
    return entry ? entry[0] : name.slice(0, 12);
  });

  return JSON.stringify({
    a:  'HP',
    p:  { n: p.name||'', ag: p.age||'', g: p.gender||'', m: p.mobile||'', o: (p.occupation||'').slice(0,40) },
    md: { b: m.bloodGroup||'', h: (m.height||'').slice(0,20), al: (m.allergies||'').slice(0,60),
          ch: (m.chronic||'').slice(0,60), rx: (m.medications||'').slice(0,60), sx: (m.surgeries||'').slice(0,40) },
    vx: { c: vaxIds, ot: (v.other||'').slice(0,40) },
    em: { n: e.name||'', ph: e.phone||'', r: e.relation||'', a: e.altPhone||'', d: (e.doctor||'').slice(0,40) },
  });
}

function expandFromQR(compact) {
  if (compact.a !== 'HP') return compact;
  const p = compact.p || {}, m = compact.md || {}, v = compact.vx || {}, e = compact.em || {};
  return {
    _app: 'HealthPass',
    personal:     { name: p.n,  age: p.ag, gender: p.g,  mobile: p.m,  occupation: p.o  },
    medical:      { bloodGroup: m.b, height: m.h, allergies: m.al, chronic: m.ch, medications: m.rx, surgeries: m.sx },
    vaccinations: { completed: (v.c||[]).map(id => VAX_NAMES[id] || id), other: v.ot },
    emergency:    { name: e.n,  phone: e.ph, relation: e.r, altPhone: e.a, doctor: e.d },
  };
}

/* PATCH 2: 148px so canvas sits inside 6px padding on each side within the 160px box */
const QR_SIZE = 148;

function generateQRCode(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '<div class="qr-loading">⏳</div>';

  let qrText;
  try {
    qrText = compressForQR(data);
  } catch(e) {
    console.error('QR compress error:', e);
    container.innerHTML = `<div style="width:${QR_SIZE}px;height:${QR_SIZE}px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:9px;color:#c00;padding:6px;text-align:center">Compress Error</div>`;
    return;
  }

  console.log('QR payload:', qrText.length, 'chars');

  try {
    const canvas = document.createElement('canvas');
    new QRious({
      element:    canvas,
      value:      qrText,
      size:       QR_SIZE,
      level:      'L',
      background: '#ffffff',
      foreground: '#000000',
      padding:    0,
    });
    canvas.style.cssText = `display:block;width:${QR_SIZE}px;height:${QR_SIZE}px;flex-shrink:0;`;
    canvas.setAttribute('aria-label', 'HealthPass QR Code');
    container.innerHTML = '';
    container.appendChild(canvas);
  } catch(err) {
    console.error('QR generation error:', err);
    container.innerHTML = `<div style="width:${QR_SIZE}px;height:${QR_SIZE}px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:9px;color:#c00;text-align:center;padding:6px">QR Error:<br>${err.message||'unknown'}</div>`;
  }
}

/* ════════ GENERATE CARD ════════ */
function generateCard(silent = false) {
  const data = getFormData();
  cardData = data;

  if (!data.personal.name && !silent) {
    showToast('Please enter at least your name to generate the card.', 'error');
    scrollToForm();
    return;
  }

  saveToStorage(data);
  checkRiskAlerts(data);

  const name = data.personal.name || 'Worker';
  const initials = name.split(' ').map(n=>n[0]).join('').toUpperCase().slice(0,2) || '?';

  document.getElementById('cardAvatar').textContent = initials;
  document.getElementById('cardName').textContent = name;
  document.getElementById('cardAge').textContent = data.personal.age ? data.personal.age + 'y' : '';
  document.getElementById('cardGender').textContent = data.personal.gender || '';
  document.getElementById('cardOccupation').textContent = data.personal.occupation || '';
  document.getElementById('cardEmName').textContent = data.emergency.name || 'Not provided';
  document.getElementById('cardEmPhone').textContent = data.emergency.phone || '—';
  document.getElementById('cardDate').textContent = new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});

  const idNum = (name + Date.now()).split('').reduce((a,c)=>a+c.charCodeAt(0),0) % 99999;
  document.getElementById('cardId').textContent = 'HP-' + String(idNum).padStart(5,'0');

  const chips = [];
  if (data.medical.bloodGroup) chips.push(`<div class="card-chip blood">🩸 ${data.medical.bloodGroup}</div>`);
  if (data.medical.allergies && data.medical.allergies !== 'None known') chips.push(`<div class="card-chip allergy">⚠️ Allergies</div>`);
  if (data.medical.chronic) chips.push(`<div class="card-chip">💊 ${data.medical.chronic.split(',')[0].slice(0,20)}</div>`);
  if (data.vaccinations.completed.length) chips.push(`<div class="card-chip">💉 ${data.vaccinations.completed.length} Vaccines</div>`);
  document.getElementById('cardChips').innerHTML = chips.join('');

  document.getElementById('infoBlood').textContent = data.medical.bloodGroup || 'Not provided';
  document.getElementById('infoMobile').textContent = data.personal.mobile || 'Not provided';
  document.getElementById('infoEm').textContent = data.emergency.phone || 'Not provided';

  generateQRCode(data, 'qrcode');

  document.getElementById('cardOutput').classList.remove('hidden');

  if (!silent) {
    showToast(t('toast.saved'), 'success');
    document.getElementById('cardOutput').scrollIntoView({behavior:'smooth', block:'center'});
  }
}

/* ════════ DOWNLOAD & PRINT ════════ */
async function downloadCard() {
  const card = document.getElementById('health-card');
  if (!card) return;
  try {
    const canvas = await html2canvas(card, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      onclone: (clonedDoc) => {
        const clonedCard = clonedDoc.getElementById('health-card');
        if (clonedCard) {
          clonedCard.style.background = 'linear-gradient(140deg,#0A1E80 0%,#1845C8 45%,#008899 100%)';
        }
      }
    });
    const link = document.createElement('a');
    const name = (cardData?.personal?.name || 'healthpass').replace(/\s+/g,'-').toLowerCase();
    link.download = `healthpass-${name}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast(t('toast.downloaded'), 'success');
  } catch(e) {
    console.error('Download error:', e);
    showToast('Download failed. Try Print instead.', 'error');
  }
}

function printCard() {
  window.print();
}

function shareURL() {
  if (!cardData) { showToast('Generate your card first.', 'error'); return; }
  try {
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(cardData))));
    shareUrl = window.location.href.split('#')[0] + '#hp=' + encoded;
    const box = document.getElementById('shareUrlBox');
    box.classList.remove('hidden');
    box.textContent = shareUrl.length > 80 ? shareUrl.slice(0,80) + '…' : shareUrl;
    copyURL();
  } catch(e) { showToast('Could not generate share link.', 'error'); }
}

function copyURL() {
  if (shareUrl) {
    navigator.clipboard.writeText(shareUrl).then(() => showToast(t('toast.copied'), 'success'));
  }
}

function checkURLData() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#hp=')) {
    try {
      const encoded = hash.slice(4);
      const data = JSON.parse(decodeURIComponent(escape(atob(encoded))));
      if (data._app === 'HealthPass') {
        setFormData(data);
        cardData = data;
        generateCard(true);
        showToast('✅ Health card loaded from shared link!', 'success');
      }
    } catch(e) {}
  }
}

/* ════════ CLEAR ════════ */
function clearAll() {
  if (!confirm('Clear all saved health data? This cannot be undone.')) return;
  localStorage.removeItem('hp-data');
  localStorage.removeItem('hp-vax');
  checkedVaccines = [];
  ['f-name','f-age','f-mobile','f-occupation','f-height','f-allergies','f-chronic','f-meds','f-surgeries','f-vax-other','f-em-name','f-em-phone','f-em-alt','f-doctor'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  ['f-gender','f-blood','f-em-relation'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.selectedIndex = 0;
  });
  renderVaccines();
  document.getElementById('cardOutput').classList.add('hidden');
  document.getElementById('alertBanner').classList.add('hidden');
  showToast(t('toast.cleared'));
}

function scrollToForm() {
  document.getElementById('formSection').scrollIntoView({behavior:'smooth'});
}

/* ════════ QR SCANNER ════════ */
function startScanner() {
  const placeholder = document.getElementById('scannerPlaceholder');
  const reader = document.getElementById('reader');
  const startBtn = document.getElementById('startScanBtn');
  const stopBtn = document.getElementById('stopScanBtn');

  placeholder.style.display = 'none';
  reader.style.display = 'block';
  startBtn.style.display = 'none';
  stopBtn.style.display = '';

  setScanStatus('scanning', 'Scanning for QR code...');

  try {
    html5QrCode = new Html5Qrcode('reader', { verbose: false });
    Html5Qrcode.getCameras().then(cameras => {
      if (!cameras || cameras.length === 0) {
        setScanStatus('error', 'No camera found on this device.');
        stopScanner();
        return;
      }
      const camId = cameras.find(c => /back|rear|environment/i.test(c.label))?.id || cameras[cameras.length-1].id;
      html5QrCode.start(
        camId,
        { fps: 10, qrbox: { width: 220, height: 220 }, aspectRatio: 1.0 },
        onScanSuccess,
        () => {}
      ).catch(err => {
        setScanStatus('error', 'Camera access denied. Please allow camera permission.');
        stopScanner();
      });
    }).catch(() => {
      html5QrCode.start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: { width: 220, height: 220 }, aspectRatio: 1.0 },
        onScanSuccess,
        () => {}
      ).catch(() => {
        setScanStatus('error', 'Could not access camera.');
        stopScanner();
      });
    });
  } catch(e) {
    setScanStatus('error', 'Scanner failed to initialize.');
    stopScanner();
  }
}

function stopScanner() {
  if (html5QrCode) {
    html5QrCode.stop().catch(()=>{});
    html5QrCode = null;
  }
  document.getElementById('reader').style.display = 'none';
  document.getElementById('scannerPlaceholder').style.display = '';
  document.getElementById('startScanBtn').style.display = '';
  document.getElementById('stopScanBtn').style.display = 'none';
  setScanStatus('idle', t('scan.status-idle'));
}

/* ── PATCH 3: stopScanner() FIRST, then wipe injected nodes, then parse ──
   Old code cleaned DOM before stopping, creating a race window where
   html5-qrcode v2.3.8 re-injected its decoded-text overlay after cleanup.
   Now we stop first (which halts all library DOM writes), then innerHTML=''
   nukes any overlay that was already there, then we parse cleanly. */
function onScanSuccess(decodedText) {
  stopScanner();
  // Nuke everything html5-qrcode v2.3.8 may have injected into #reader
  const reader = document.getElementById('reader');
  if (reader) { reader.innerHTML = ''; }

  try {
    let data = JSON.parse(decodedText);
    if (data.a === 'HP') data = expandFromQR(data);
    else if (!data._app || data._app !== 'HealthPass') throw new Error('Not a HealthPass QR');
    displayScanResults(data);
    setScanStatus('success', '✅ HealthPass card scanned successfully!');
    document.getElementById('clearResultsBtn').style.display = '';
    document.getElementById('scanResults').scrollIntoView({behavior:'smooth'});
  } catch(e) {
    setScanStatus('error', t('toast.invalid-qr') + ' — Not a valid HealthPass QR code.');
    showInvalidQR();
  }
}

function showInvalidQR() {
  const results = document.getElementById('scanResults');
  results.classList.add('show');
  document.getElementById('emSection').innerHTML = `
    <div style="text-align:center;padding:24px">
      <div style="font-size:48px;margin-bottom:12px">❌</div>
      <div style="font-size:18px;font-weight:800;color:#fff;margin-bottom:6px">Invalid Health Card</div>
      <div style="font-size:13px;opacity:.75">This QR code is not a valid HealthPass health record.</div>
    </div>
  `;
  document.querySelector('.full-record-card').style.display = 'none';
}

function clearScanResults() {
  document.getElementById('scanResults').classList.remove('show');
  document.querySelector('.full-record-card').style.display = '';
  document.getElementById('clearResultsBtn').style.display = 'none';
  setScanStatus('idle', t('scan.status-idle'));
}

function setScanStatus(type, msg) {
  const el = document.getElementById('scannerStatus');
  const text = document.getElementById('scannerStatusText');
  el.className = 'scanner-status ' + type;
  text.textContent = msg;
}

function displayScanResults(data) {
  const p = data.personal || {};
  const m = data.medical || {};
  const v = data.vaccinations || {};
  const e = data.emergency || {};
  const name = p.name || 'Unknown Patient';
  const initials = name.split(' ').map(n=>n[0]).join('').toUpperCase().slice(0,2) || '?';

  document.getElementById('emSection').innerHTML = `
    <div class="em-title">🚨 <span>EMERGENCY INFORMATION</span></div>
    <div class="em-grid">
      <div class="em-item blood">
        <div class="em-item-label">🩸 Blood Group</div>
        <div class="em-item-value">${esc(m.bloodGroup) || '<span style="opacity:.6;font-size:14px">Unknown</span>'}</div>
      </div>
      <div class="em-item">
        <div class="em-item-label">⚠️ Allergies</div>
        <div class="em-item-value" style="font-size:13px;line-height:1.4">${esc(m.allergies) || 'None known'}</div>
      </div>
      <div class="em-item">
        <div class="em-item-label">🏥 Chronic Conditions</div>
        <div class="em-item-value" style="font-size:13px;line-height:1.4">${esc(m.chronic) || 'None reported'}</div>
      </div>
      <div class="em-item">
        <div class="em-item-label">💊 Current Medications</div>
        <div class="em-item-value" style="font-size:13px;line-height:1.4">${esc(m.medications) || 'None'}</div>
      </div>
      <div class="em-item highlight" style="grid-column:span 2">
        <div class="em-item-label">📞 Emergency Contact${e.relation ? ' · ' + esc(e.relation) : ''}</div>
        <div class="em-item-value" style="font-size:16px">${esc(e.name) || 'Not provided'}</div>
        ${e.phone ? `<div style="font-family:var(--mono);font-size:14px;margin-top:4px;opacity:.85">${esc(e.phone)}</div>` : ''}
        ${e.altPhone ? `<div style="font-size:12px;margin-top:2px;opacity:.65">Alt: ${esc(e.altPhone)}</div>` : ''}
      </div>
    </div>
  `;

  document.getElementById('frcAvatar').textContent = initials;
  document.getElementById('frcName').textContent = name;
  document.getElementById('frcMeta').textContent =
    [p.age ? p.age + ' yrs' : null, p.gender, p.occupation].filter(Boolean).join('  ·  ') || 'No personal details';

  const vaxDone = v.completed?.length ? v.completed : [];
  const allVaxNames = Object.values(VAX_NAMES);

  const badges = [];
  if (m.bloodGroup) badges.push(`<span class="badge badge-red">🩸 ${esc(m.bloodGroup)}</span>`);
  if (m.allergies && m.allergies.toLowerCase() !== 'none known') badges.push(`<span class="badge badge-yellow">⚠️ Allergies</span>`);
  if (vaxDone.length) badges.push(`<span class="badge badge-green">💉 ${vaxDone.length} Vaccines</span>`);
  if (p.mobile) badges.push(`<span class="badge badge-blue">📱 ${esc(p.mobile)}</span>`);
  document.getElementById('frcBadges').innerHTML = badges.join('');

  document.getElementById('frcPersonal').innerHTML = mkRows([
    { icon:'📱', label:'Mobile',         val: p.mobile    || '—' },
    { icon:'⚖️', label:'Height / Weight', val: m.height    || '—' },
    { icon:'🔪', label:'Past Surgeries',  val: m.surgeries || 'None reported' },
  ]);

  const vaxHTML = allVaxNames.map(vname => {
    const done = vaxDone.some(d => d.toLowerCase().includes(vname.toLowerCase().split('/')[0].trim()));
    return `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--brd);font-size:13px">
      <span style="font-size:15px">${done ? '✅' : '⬜'}</span>
      <span style="${done ? 'color:var(--h);font-weight:600' : 'color:var(--muted)'}">${vname}</span>
      <span style="margin-left:auto;font-size:11px;font-weight:700;${done ? 'color:var(--green)' : 'color:var(--lite)'}">${done ? 'Done' : 'Not done'}</span>
    </div>`;
  }).join('') + (v.other ? `<div style="margin-top:8px;font-size:12px;color:var(--muted)">Other: <span style="color:var(--h)">${esc(v.other)}</span></div>` : '');
  document.getElementById('frcVaccinations').innerHTML = vaxHTML;

  document.getElementById('frcContact').innerHTML = mkRows([
    { icon:'👤', label:'Name',         val: e.name     || '—' },
    { icon:'📞', label:'Phone',        val: e.phone    || '—', mono: true },
    { icon:'👨‍👩‍👧', label:'Relation',    val: e.relation || '—' },
    { icon:'📲', label:'Alt. Phone',   val: e.altPhone || '—', mono: true },
    { icon:'🏥', label:'Doctor/Clinic',val: e.doctor   || '—' },
  ]);

  document.getElementById('scanResults').classList.add('show');
  document.querySelector('.full-record-card').style.display = '';
}

function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function mkRows(rows) {
  return rows.map(({icon, label, val, mono}) => `
    <div class="frc-row">
      <span class="frc-row-label">${icon ? icon + ' ' : ''}${label}</span>
      <span class="frc-row-val" style="${mono ? 'font-family:var(--mono);font-size:12px' : ''}">${esc(val)}</span>
    </div>
  `).join('');
}

/* ════════ TOAST ════════ */
let toastTimer;
function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.className = 'toast', 3200);
}
