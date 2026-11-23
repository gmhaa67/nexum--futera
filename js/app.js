/* Nexium Futura Academy - App Logic */

const ADMINS = [
  { email: 'moh.ag.asal@gmail.com', password: 'Toota@74715', name: 'Mohamed Asal' },
  { email: 'dr.a.ayat.asal@gmail.com', password: 'Toota@74715', name: 'Dr. Ayat Asal' },
  { email: 'eng.a.asal@gmail.com', password: 'Toota@74715', name: 'Eng. Asal' }
];

const COUNTRIES = [
  { code: 'EG', ar: 'مصر', en: 'Egypt', cur: 'EGP', sym: 'ج.م', price: 375 },
  { code: 'SA', ar: 'السعودية', en: 'Saudi Arabia', cur: 'SAR', sym: 'ر.س', price: 120 },
  { code: 'AE', ar: 'الإمارات', en: 'UAE', cur: 'AED', sym: 'د.إ', price: 110 },
  { code: 'KW', ar: 'الكويت', en: 'Kuwait', cur: 'KWD', sym: 'د.ك', price: 12 },
  { code: 'QA', ar: 'قطر', en: 'Qatar', cur: 'QAR', sym: 'ر.ق', price: 110 },
  { code: 'BH', ar: 'البحرين', en: 'Bahrain', cur: 'BHD', sym: 'د.ب', price: 12 },
  { code: 'OM', ar: 'عُمان', en: 'Oman', cur: 'OMR', sym: 'ر.ع', price: 12 },
  { code: 'JO', ar: 'الأردن', en: 'Jordan', cur: 'JOD', sym: 'د.أ', price: 25 },
  { code: 'LB', ar: 'لبنان', en: 'Lebanon', cur: 'LBP', sym: 'ل.ل', price: 800000 },
  { code: 'IQ', ar: 'العراق', en: 'Iraq', cur: 'IQD', sym: 'د.ع', price: 45000 },
  { code: 'PS', ar: 'فلسطين', en: 'Palestine', cur: 'ILS', sym: '₪', price: 90 },
  { code: 'YE', ar: 'اليمن', en: 'Yemen', cur: 'YER', sym: 'ر.ي', price: 15000 }
];

const STAGES = [
  { id: 'kg', ar: 'رياض الأطفال', en: 'Kindergarten', icon: '🧸', grades: ['KG1', 'KG2'] },
  { id: 'primary', ar: 'الابتدائي', en: 'Primary', icon: '✏️', grades: ['G1','G2','G3','G4','G5','G6'] },
  { id: 'prep', ar: 'الإعدادي', en: 'Preparatory', icon: '📘', grades: ['G7','G8','G9'] },
  { id: 'sec', ar: 'الثانوي', en: 'Secondary', icon: '🎓', grades: ['G10','G11','G12'] },
  { id: 'summer', ar: 'دورات صيفية', en: 'Summer Courses', icon: '☀️', grades: ['All'] }
];

const SUBJECTS = [
  { id: 'arabic', ar: 'اللغة العربية', en: 'Arabic', icon: '📖', color: '#1e3a5f' },
  { id: 'english', ar: 'اللغة الإنجليزية', en: 'English', icon: '🔤', color: '#b45309' },
  { id: 'math', ar: 'الرياضيات', en: 'Mathematics', icon: '➗', color: '#047857' },
  { id: 'science', ar: 'العلوم', en: 'Science', icon: '🔬', color: '#1e40af' },
  { id: 'social', ar: 'الدراسات الاجتماعية', en: 'Social Studies', icon: '🌍', color: '#c2410c' },
  { id: 'religion', ar: 'التربية الدينية', en: 'Religious Education', icon: '🕌', color: '#1e3a5f' },
  { id: 'cs', ar: 'علوم الحاسوب وتقنية المعلومات', en: 'Computer Science & ICT', icon: '💻', color: '#92400e' },
  { id: 'art', ar: 'الفنون', en: 'Art', icon: '🎨', color: '#1e3a8a' },
  { id: 'second', ar: 'اللغة الأجنبية الثانية', en: 'Second Foreign Language', icon: '🗣️', color: '#1e3a5f' }
];

const TEACHERS = [
  { id:1, subject:'math', ar:'أ. سارة أحمد', en:'Ms. Sara Ahmed', title_ar:'معلمة رياضيات', title_en:'Math Teacher', free:3, rating:4.9, zoom:'https://zoom.us/j/nexium1' },
  { id:2, subject:'math', ar:'أ. محمد حسن', en:'Mr. Mohamed Hassan', title_ar:'مدرس رياضيات ثانوي', title_en:'Secondary Math', free:2, rating:4.8, zoom:'https://zoom.us/j/nexium2' },
  { id:3, subject:'math', ar:'أ. هدى إبراهيم', en:'Ms. Huda Ibrahim', title_ar:'معلمة جبر وهندسة', title_en:'Algebra & Geometry', free:2, rating:4.7, zoom:'https://zoom.us/j/nexium11' },
  { id:4, subject:'math', ar:'أ. ياسر خالد', en:'Mr. Yasser Khaled', title_ar:'مدرس تفاضل وتكامل', title_en:'Calculus Teacher', free:1, rating:4.9, zoom:'https://zoom.us/j/nexium12' },
  { id:5, subject:'english', ar:'أ. نورا خالد', en:'Ms. Noura Khaled', title_ar:'معلمة إنجليزي - IELTS', title_en:'English - IELTS', free:3, rating:4.9, zoom:'https://zoom.us/j/nexium3' },
  { id:6, subject:'english', ar:'أ. جون سميث', en:'Mr. John Smith', title_ar:'Native Speaker', title_en:'Native Speaker', free:2, rating:5.0, zoom:'https://zoom.us/j/nexium4' },
  { id:7, subject:'english', ar:'أ. إيمان فتحي', en:'Ms. Eman Fathy', title_ar:'محادثة ونطق', title_en:'Conversation & Pronunciation', free:3, rating:4.8, zoom:'https://zoom.us/j/nexium13' },
  { id:8, subject:'english', ar:'أ. رامي أسعد', en:'Mr. Rami Asaad', title_ar:'تحضير TOEFL', title_en:'TOEFL Prep', free:2, rating:4.6, zoom:'https://zoom.us/j/nexium14' },
  { id:9, subject:'science', ar:'د. فاطمة علي', en:'Dr. Fatima Ali', title_ar:'دكتوراه كيمياء', title_en:'PhD Chemistry', free:2, rating:4.7, zoom:'https://zoom.us/j/nexium5' },
  { id:10, subject:'science', ar:'أ. يوسف إبراهيم', en:'Mr. Youssef Ibrahim', title_ar:'فيزياء وأحياء', title_en:'Physics & Biology', free:3, rating:4.8, zoom:'https://zoom.us/j/nexium15' },
  { id:11, subject:'science', ar:'د. منى سالم', en:'Dr. Mona Salem', title_ar:'علوم متكاملة', title_en:'Integrated Science', free:2, rating:4.9, zoom:'https://zoom.us/j/nexium16' },
  { id:12, subject:'arabic', ar:'أ. محمود سعيد', en:'Mr. Mahmoud Saeed', title_ar:'معلم لغة عربية', title_en:'Arabic Teacher', free:3, rating:4.8, zoom:'https://zoom.us/j/nexium6' },
  { id:13, subject:'arabic', ar:'أ. نادية حسن', en:'Ms. Nadia Hassan', title_ar:'نحو وبلاغة', title_en:'Grammar & Rhetoric', free:2, rating:4.7, zoom:'https://zoom.us/j/nexium17' },
  { id:14, subject:'arabic', ar:'أ. طارق منصور', en:'Mr. Tarek Mansour', title_ar:'أدب ونصوص', title_en:'Literature', free:2, rating:4.6, zoom:'https://zoom.us/j/nexium18' },
  { id:15, subject:'cs', ar:'م. سارة ناصر', en:'Eng. Sara Nasser', title_ar:'مطورة Full-Stack', title_en:'Full-Stack Dev', free:2, rating:5.0, zoom:'https://zoom.us/j/nexium7' },
  { id:16, subject:'cs', ar:'م. كريم فؤاد', en:'Eng. Karim Fouad', title_ar:'ذكاء اصطناعي', title_en:'AI Specialist', free:1, rating:4.9, zoom:'https://zoom.us/j/nexium19' },
  { id:17, subject:'cs', ar:'م. دينا عادل', en:'Eng. Dina Adel', title_ar:'بايثون للمبتدئين', title_en:'Python for Beginners', free:3, rating:4.8, zoom:'https://zoom.us/j/nexium20' },
  { id:18, subject:'art', ar:'أ. ليلى محمود', en:'Ms. Laila Mahmoud', title_ar:'فنانة تشكيلية', title_en:'Visual Artist', free:4, rating:4.9, zoom:'https://zoom.us/j/nexium8' },
  { id:19, subject:'art', ar:'أ. باسم جابر', en:'Mr. Bassem Gaber', title_ar:'رسم وتصميم', title_en:'Drawing & Design', free:3, rating:4.7, zoom:'https://zoom.us/j/nexium21' },
  { id:20, subject:'social', ar:'أ. كريم فؤاد', en:'Mr. Karim Fouad', title_ar:'مدرس دراسات', title_en:'Social Studies', free:2, rating:4.6, zoom:'https://zoom.us/j/nexium9' },
  { id:21, subject:'social', ar:'أ. هبة شريف', en:'Ms. Heba Sherif', title_ar:'تاريخ وجغرافيا', title_en:'History & Geography', free:2, rating:4.8, zoom:'https://zoom.us/j/nexium22' },
  { id:22, subject:'religion', ar:'أ. أحمد يوسف', en:'Mr. Ahmed Youssef', title_ar:'معلم تربية دينية', title_en:'Religious Ed.', free:3, rating:4.8, zoom:'https://zoom.us/j/nexium10' },
  { id:23, subject:'religion', ar:'أ. سمر علي', en:'Ms. Samar Ali', title_ar:'تجويد وقرآن', title_en:'Quran & Tajweed', free:3, rating:4.9, zoom:'https://zoom.us/j/nexium23' },
  { id:24, subject:'second', ar:'أ. ماري كلير', en:'Ms. Marie Claire', title_ar:'فرنسي', title_en:'French Teacher', free:2, rating:4.7, zoom:'https://zoom.us/j/nexium24' },
  { id:25, subject:'second', ar:'أ. هانز مولر', en:'Mr. Hans Muller', title_ar:'ألماني', title_en:'German Teacher', free:2, rating:4.6, zoom:'https://zoom.us/j/nexium25' }
];

// State
let user = null;
let lang = localStorage.getItem('nfa_lang') || 'ar';
let theme = localStorage.getItem('nfa_theme') || 'light';
let users = JSON.parse(localStorage.getItem('nfa_users') || '[]');
let sessions = JSON.parse(localStorage.getItem('nfa_sessions') || '[]');
let currentStage = 'prep';
let currentGrade = 'G7';
let currentSubject = null;
let currentTeacher = null;

const i18n = {
  ar: {
    login: 'تسجيل الدخول', register: 'إنشاء حساب جديد', parentData: 'بيانات ولي الأمر والطالب',
    orEmail: 'أو بالإيميل', studentName: 'اسم الطالب', parentName: 'اسم ولي الأمر',
    email: 'البريد الإلكتروني', country: 'الدولة', mobile: 'رقم الموبايل',
    stage: 'المرحلة', grade: 'الصف', password: 'كلمة المرور', passHint: 'أحرف على الأقل 6',
    createAcc: 'إنشاء الحساب', haveAcc: 'عندك حساب؟', signIn: 'سجّل دخول',
    promoTitle: 'تعليم بلا حدود،', promoTitle2: 'لكل المراحل والمواد',
    promoDesc: 'حصص مباشرة مع أفضل المدرسين من KG حتى الثانوية، ومتابعة كاملة لولي الأمر: الحضور، الواجبات، التقييم والشهادات.',
    contactUs: 'تواصل معنا', logout: 'تسجيل الخروج',
    welcome: 'مرحباً', home: 'الرئيسية', bookSession: 'حجز حصة', mySchedule: 'جدولي',
    myCourses: 'موادي وسجلي', subjectsPrices: 'المواد والأسعار', performance: 'الأداء والشهادات',
    messages: 'رسائل المدرسين', transactions: 'معاملاتي', settings: 'الإعدادات',
    changePass: 'تغيير كلمة المرور', doneSessions: 'حصص منتهية', scheduled: 'مجدولة',
    absent: 'غياب', cancelled: 'ملغاة', upcoming: 'الحصص القادمة', activeSubjects: 'المواد النشطة',
    noUpcoming: 'لا توجد حصص قادمة — احجز حصتك التالية', noSubjects: 'لا توجد مواد بعد',
    bookNow: 'احجز حصة', fullSchedule: 'الجدول الكامل', addSubject: 'إضافة مادة',
    pickStage: 'اختر المرحلة والمادة والمدرس ثم أحد أوقات المدرس المتاحة',
    teachers: 'المدرسون', freeLeft: 'جلسات مجانية', bookTrial: 'احجز جلسة تجريبية',
    joinZoom: 'انضم لـ Zoom', payContact: 'الدفع / التواصل', pricePer: 'سعر الحصة',
    emailL: 'البريد:', phoneL: 'الهاتف / واتساب:', payNote: 'بعد التحويل أرسل الإيصال على واتساب أو البريد لتفعيل الحساب.',
    close: 'إغلاق', trialTitle: 'حجز جلسة تجريبية مجانية', date: 'التاريخ', time: 'الوقت',
    openCam: 'فتح الكاميرا في Zoom', confirm: 'تأكيد الحجز', cancel: 'إلغاء',
    successBook: 'تم حجز الجلسة بنجاح! سنتواصل معك قريباً.',
    invalid: 'البريد أو كلمة المرور غير صحيحة', created: 'تم إنشاء الحساب! يمكنك تسجيل الدخول.',
    exists: 'هذا البريد مسجل مسبقاً', adminPanel: 'لوحة التحكم', overview: 'نظرة عامة',
    students: 'الطلاب وأولياء الأمور', allTeachers: 'المدرسون', allSessions: 'الجلسات',
    noData: 'لا توجد بيانات بعد', delete: 'حذف',
    chooseCountry: '-- اختر الدولة --'
  },
  en: {
    login: 'Sign In', register: 'Create Account', parentData: 'Parent & Student details',
    orEmail: 'or with email', studentName: 'Student name', parentName: 'Parent name',
    email: 'Email', country: 'Country', mobile: 'Mobile number',
    stage: 'Stage', grade: 'Grade', password: 'Password', passHint: 'At least 6 characters',
    createAcc: 'Create account', haveAcc: 'Have an account?', signIn: 'Sign in',
    promoTitle: 'Education without limits,', promoTitle2: 'for every stage & subject',
    promoDesc: 'Live sessions with top teachers from KG to Secondary, full parent follow-up: attendance, homework, assessment & certificates.',
    contactUs: 'Contact us', logout: 'Log out',
    welcome: 'Welcome', home: 'Home', bookSession: 'Book a session', mySchedule: 'My schedule',
    myCourses: 'My courses & history', subjectsPrices: 'Subjects & prices', performance: 'Performance & certificates',
    messages: 'Messages with teachers', transactions: 'My transactions', settings: 'Settings',
    changePass: 'Change password', doneSessions: 'Done sessions', scheduled: 'Scheduled',
    absent: 'Absent', cancelled: 'Cancelled', upcoming: 'Upcoming sessions', activeSubjects: 'Active subjects',
    noUpcoming: 'No upcoming sessions — book your next one', noSubjects: 'No subjects yet',
    bookNow: 'Book a session', fullSchedule: 'Full schedule', addSubject: 'Add subject',
    pickStage: 'Pick stage, subject and teacher, then one of the teacher’s free times',
    teachers: 'Teachers', freeLeft: 'Free sessions left', bookTrial: 'Book free trial',
    joinZoom: 'Join Zoom', payContact: 'Payment / Contact', pricePer: 'Price per session',
    emailL: 'Email:', phoneL: 'Phone / WhatsApp:', payNote: 'After transfer send receipt via WhatsApp or email to activate.',
    close: 'Close', trialTitle: 'Book free trial session', date: 'Date', time: 'Time',
    openCam: 'Open camera in Zoom', confirm: 'Confirm booking', cancel: 'Cancel',
    successBook: 'Trial booked! We will contact you soon.',
    invalid: 'Invalid email or password', created: 'Account created! You can now sign in.',
    exists: 'Email already registered', adminPanel: 'Control Panel', overview: 'Overview',
    students: 'Students & Parents', allTeachers: 'Teachers', allSessions: 'Sessions',
    noData: 'No data yet', delete: 'Delete',
    chooseCountry: '-- Select country --'
  }
};

function t(k) { return i18n[lang][k] || k; }
function saveUsers() { localStorage.setItem('nfa_users', JSON.stringify(users)); }
function saveSessions() { localStorage.setItem('nfa_sessions', JSON.stringify(sessions)); }
function saveSessionUser(u) {
  if (u) localStorage.setItem('nfa_session', JSON.stringify({
    email: u.email, name: u.name, role: u.role || 'student',
    id: u.id, country: u.country, stage: u.stage, grade: u.grade,
    parentName: u.parentName, mobile: u.mobile
  }));
  else localStorage.removeItem('nfa_session');
}
function loadSessionUser() {
  try {
    const raw = localStorage.getItem('nfa_session');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) { return null; }
}

function $(id) { return document.getElementById(id); }

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = $(id);
  if (el) el.classList.add('active');
}

function applyTheme(th) {
  theme = th;
  document.documentElement.setAttribute('data-theme', th);
  localStorage.setItem('nfa_theme', th);
}

function applyLang(l) {
  lang = l;
  localStorage.setItem('nfa_lang', l);
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  updateStaticTexts();
  fillCountries();
  if (user) renderCurrentPage();
}

function fillCountries() {
  const opts = COUNTRIES.map(c =>
    `<option value="${c.code}">${lang === 'ar' ? c.ar : c.en} (${c.cur})</option>`
  ).join('');
  const ph = `<option value="">${t('chooseCountry')}</option>`;
  ['regCountry', 'payCountry'].forEach(id => {
    const el = $(id);
    if (el) el.innerHTML = ph + opts;
  });
}

function updateStaticTexts() {
  // Will be called on lang switch; most text is rendered dynamically
  const map = {
    authTitleLogin: 'login', authTitleReg: 'register', authSub: 'parentData',
    orText: 'orEmail', lblStudent: 'studentName', lblParent: 'parentName',
    lblEmail: 'email', lblCountry: 'country', lblMobile: 'mobile',
    lblStage: 'stage', lblGrade: 'grade', lblPass: 'password',
    btnCreate: 'createAcc', switchToLogin: 'haveAcc', linkLogin: 'signIn',
    switchToReg: 'haveAcc', linkReg: 'createAcc', btnLogin: 'login',
    promoT1: 'promoTitle', promoT2: 'promoTitle2', promoD: 'promoDesc',
    waText: 'contactUs'
  };
  // simple ones
  if ($('btnLogin')) $('btnLogin').textContent = t('login');
  if ($('btnCreate')) $('btnCreate').textContent = t('createAcc');
  if ($('waText')) $('waText').textContent = t('contactUs');
}

/* ========== AUTH ========== */
function showLogin() {
  $('loginCard').style.display = 'block';
  $('regCard').style.display = 'none';
}
function showReg() {
  $('loginCard').style.display = 'none';
  $('regCard').style.display = 'block';
  fillStageGrade();
}

function fillStageGrade() {
  const stageSel = $('regStage');
  const gradeSel = $('regGrade');
  if (!stageSel) return;
  stageSel.innerHTML = STAGES.map(s =>
    `<option value="${s.id}">${lang === 'ar' ? s.ar : s.en}</option>`
  ).join('');
  updateGrades();
  stageSel.onchange = updateGrades;
}

function updateGrades() {
  const stage = STAGES.find(s => s.id === $('regStage').value) || STAGES[2];
  $('regGrade').innerHTML = stage.grades.map(g => `<option value="${g}">${g}</option>`).join('');
}

function doLogin(e) {
  e.preventDefault();
  const email = $('loginEmail').value.trim().toLowerCase();
  const pass = $('loginPass').value;

  const admin = ADMINS.find(a => a.email === email && a.password === pass);
  if (admin) {
    user = { email: admin.email, name: admin.name, role: 'admin', country: 'EG', stage: 'prep', grade: 'G7' };
    enterApp();
    return;
  }
  const u = users.find(x => x.email === email && x.password === pass);
  if (u) {
    user = u;
    enterApp();
  } else {
    alert(t('invalid'));
  }
}

function doRegister(e) {
  e.preventDefault();
  const student = $('regStudent').value.trim();
  const parent = $('regParent').value.trim();
  const email = $('regEmail').value.trim().toLowerCase();
  const country = $('regCountry').value;
  const mobile = $('regMobile').value.trim();
  const stage = $('regStage').value;
  const grade = $('regGrade').value;
  const pass = $('regPass').value;

  if (!country) { alert(t('chooseCountry')); return; }
  // duplicate email check disabled for testing

  const newUser = {
    id: Date.now(), name: student, parentName: parent, email, password: pass,
    country, mobile, stage, grade, role: 'student', createdAt: new Date().toISOString()
  };
  users.push(newUser);
  saveUsers();
  alert(t('created'));
  showLogin();
  $('loginEmail').value = email;
}

function enterApp() {
  saveSessionUser(user);
  show('appShell');
  $('authScreen').classList.remove('active');
  updateSidebarUser();
  if (user.role === 'admin') {
    // Admin sees admin panel + can still use student features
    document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.student-only').forEach(el => el.style.display = 'block');
    renderAdmin('overview');
    setNav('admin-overview');
  } else {
    document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.student-only').forEach(el => el.style.display = 'block');
    renderHome();
    setNav('home');
  }
}

function logout() {
  user = null;
  saveSessionUser(null);
  show('authScreen');
  $('appShell').classList.remove('active');
  document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.student-only').forEach(el => el.style.display = 'block');
  $('loginEmail').value = '';
  $('loginPass').value = '';
}

function updateSidebarUser() {
  $('sideName').textContent = user.name;
  $('sideAvatar').textContent = user.name.charAt(0).toUpperCase();
  const st = STAGES.find(s => s.id === user.stage);
  $('sideStage').textContent = st ? (lang === 'ar' ? st.ar : st.en) : (user.stage || '');
  const c = COUNTRIES.find(x => x.code === user.country);
  $('topCountry').textContent = c ? `${c.code} · ${c.cur}` : user.country;
}

function setNav(id) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const el = document.querySelector(`.nav-item[data-page="${id}"]`);
  if (el) el.classList.add('active');
}

/* ========== PAGES ========== */
function renderCurrentPage() {
  const active = document.querySelector('.nav-item.active');
  if (active) navigate(active.dataset.page);
}

function navigate(page) {
  setNav(page);
  const content = $('mainContent');
  if (page === 'home') renderHome();
  else if (page === 'book') renderBook();
  else if (page === 'schedule') renderSchedule();
  else if (page === 'courses') renderCourses();
  else if (page === 'prices') renderPrices();
  else if (page === 'messages') renderMessages();
  else if (page === 'settings') renderSettings();
  else if (page.startsWith('admin-')) renderAdmin(page.replace('admin-', ''));
}

function renderHome() {
  const mySessions = sessions.filter(s => s.userId === user.id || s.userId === user.email);
  const done = mySessions.filter(s => s.status === 'done').length;
  const scheduled = mySessions.filter(s => s.status === 'scheduled' || s.type === 'free_trial').length;
  const next = mySessions.filter(s => s.status === 'scheduled' || s.type === 'free_trial').slice(-1)[0];

  $('mainContent').innerHTML = `
    <div class="breadcrumb"><span>${t('home')}</span></div>
    <h1 class="page-title">${t('welcome')} ${user.name.split(' ')[0]} 👋</h1>
    <p class="page-sub">${lang === 'ar' ? 'أكاديميتك أونلاين — احجز، انضم للزووم، وتابع تقدمك' : 'Your online academy — book, join Zoom, track progress'}</p>

    <div class="live-banner">
      <div style="position:relative;z-index:1;">
        <div style="font-size:12px;opacity:.85;margin-bottom:4px;">
          <span class="session-pill" style="background:rgba(34,197,94,.25);color:#86efac;">LIVE READY <span class="live-dot"></span></span>
        </div>
        <div style="font-size:18px;font-weight:800;margin-top:8px;">
          ${lang==='ar' ? 'حصص مباشرة على Zoom مع كاميرا وصوت' : 'Live Zoom classes with camera & audio'}
        </div>
        <div style="font-size:13px;opacity:.85;margin-top:6px;max-width:420px;">
          ${lang==='ar'
            ? 'احجز جلسة تجريبية مجانية، استلم الإيصال، ثم انضم للمدرس في الموعد.'
            : 'Book a free trial, get your receipt, then join your teacher on time.'}
        </div>
      </div>
      <button class="btn-gold" style="width:auto;padding:12px 22px;position:relative;z-index:1;" onclick="navigate('book')">
        ${lang==='ar' ? 'ابدأ الحجز' : 'Start booking'}
      </button>
    </div>

    <div class="stats-row">
      <div class="stat-card"><div class="stat-icon green">✓</div><div><div class="stat-num">${done}</div><div class="stat-label">${t('doneSessions')}</div></div></div>
      <div class="stat-card"><div class="stat-icon blue">📅</div><div><div class="stat-num">${scheduled}</div><div class="stat-label">${t('scheduled')}</div></div></div>
      <div class="stat-card"><div class="stat-icon red">⊘</div><div><div class="stat-num">0</div><div class="stat-label">${t('absent')}</div></div></div>
      <div class="stat-card"><div class="stat-icon yellow">✕</div><div><div class="stat-num">0</div><div class="stat-label">${t('cancelled')}</div></div></div>
    </div>

    <h3 style="font-size:15px;font-weight:700;margin-bottom:10px;">${lang==='ar'?'كيف تعمل الحصة الأونلاين؟':'How online sessions work'}</h3>
    <div class="how-grid">
      <div class="how-card"><div class="step">1</div><h4>${lang==='ar'?'اختر المادة':'Pick a subject'}</h4><p>${lang==='ar'?'مرحلة، صف، ومادة تناسبك':'Stage, grade & subject that fits'}</p></div>
      <div class="how-card"><div class="step">2</div><h4>${lang==='ar'?'احجز المدرس':'Book a teacher'}</h4><p>${lang==='ar'?'جلسة تجريبية مجانية متاحة':'Free trial session available'}</p></div>
      <div class="how-card"><div class="step">3</div><h4>${lang==='ar'?'استلم الإيصال':'Get receipt'}</h4><p>${lang==='ar'?'صورة شاشة وارفع الإثبات':'Screenshot & upload proof'}</p></div>
      <div class="how-card"><div class="step">4</div><h4>${lang==='ar'?'انضم لـ Zoom':'Join Zoom'}</h4><p>${lang==='ar'?'افتح الكاميرا وابدأ التعلم':'Turn on camera & start learning'}</p></div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <div><div class="card-title">${t('upcoming')}</div><div class="card-sub">${lang==='ar'?'التوقيت: Asia/Riyadh':'Times in Asia/Riyadh'}</div></div>
          <button class="btn-outline" style="padding:8px 14px;font-size:12px;" onclick="navigate('schedule')">${t('fullSchedule')}</button>
        </div>
        ${mySessions.length === 0
          ? `<div class="empty"><div style="font-size:40px;opacity:.3;">📅</div><p>${t('noUpcoming')}</p>
             <button class="btn-gold" style="width:auto;margin-top:12px;padding:10px 18px;" onclick="navigate('book')">${t('bookNow')}</button></div>`
          : mySessions.slice(-5).reverse().map(s => `
            <div style="padding:12px 0;border-bottom:1px solid var(--border);font-size:13px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">
              <div>
                <strong>${s.teacherName || '-'}</strong>
                <div style="color:var(--text-muted);font-size:12px;">${s.subject || ''} · ${s.date} ${s.time} · ${s.camera ? '📹 Cam on' : 'Cam off'}</div>
              </div>
              ${s.zoom || true ? `<a class="btn-success" style="padding:8px 12px;font-size:12px;text-decoration:none;" href="https://zoom.us/j/nexium1" target="_blank">${lang==='ar'?'انضم الآن':'Join now'}</a>` : ''}
            </div>`).join('')}
        ${next ? `<div class="join-ready">✅ ${lang==='ar'?'جهز جهازك قبل الموعد بـ 5 دقائق — اختبر الصوت والكاميرا':'Be ready 5 minutes early — test mic & camera'}</div>` : ''}
      </div>
      <div class="card">
        <div class="card-title">${lang==='ar'?'نصائح لجلسة ناجحة':'Tips for a great session'}</div>
        <div class="tips-row" style="grid-template-columns:1fr;margin-top:12px;">
          <div class="tip-card"><span class="emoji">🎧</span><div><strong>${lang==='ar'?'سماعات واضحة':'Clear headset'}</strong><br>${lang==='ar'?'صوت أفضل للمدرس ولك':'Better audio for you & teacher'}</div></div>
          <div class="tip-card"><span class="emoji">💡</span><div><strong>${lang==='ar'?'إضاءة جيدة':'Good lighting'}</strong><br>${lang==='ar'?'واجه مصدر الضوء للكاميرا':'Face a light source for camera'}</div></div>
          <div class="tip-card"><span class="emoji">📶</span><div><strong>${lang==='ar'?'إنترنت مستقر':'Stable internet'}</strong><br>${lang==='ar'?'يفضّل واي فاي وليس بيانات ضعيفة':'Prefer Wi‑Fi over weak mobile data'}</div></div>
          <div class="tip-card"><span class="emoji">📓</span><div><strong>${lang==='ar'?'دفتر وقلم جاهز':'Notebook ready'}</strong><br>${lang==='ar'?'سجّل الملاحظات أثناء الحصة':'Take notes during the class'}</div></div>
        </div>
      </div>
    </div>
  `;
}

function renderBook() {
  currentStage = currentStage || user.stage || 'prep';
  const stage = STAGES.find(s => s.id === currentStage) || STAGES[2];

  $('mainContent').innerHTML = `
    <div class="breadcrumb">${t('home')} › <span>${t('bookSession')}</span></div>
    <h1 class="page-title">${t('bookSession')}</h1>
    <p class="page-sub">${t('pickStage')}</p>

    <div class="stages-row" id="stagesRow">
      ${STAGES.map(s => `
        <div class="stage-card ${s.id === currentStage ? 'active' : ''}" data-stage="${s.id}">
          <div class="icon">${s.icon}</div>
          <div class="name">${lang === 'ar' ? s.ar : s.en}</div>
          <div class="range">${s.grades[0]}${s.grades.length > 1 ? ' – ' + s.grades[s.grades.length-1] : ''}</div>
        </div>`).join('')}
    </div>

    <div class="grades-row" id="gradesRow">
      ${stage.grades.map(g => `
        <button class="grade-pill ${g === currentGrade ? 'active' : ''}" data-grade="${g}">${g}</button>
      `).join('')}
    </div>

    <h3 style="font-size:16px;font-weight:700;margin-bottom:14px;">${lang==='ar'?'المواد':'Subjects'}</h3>
    <div class="subjects-grid" id="subjectsGrid">
      ${SUBJECTS.map(s => {
        const count = TEACHERS.filter(t => t.subject === s.id).length;
        return `
          <div class="subject-card" style="background:${s.color}" data-sub="${s.id}">
            <div class="s-icon">${s.icon}</div>
            <div class="s-name">${lang === 'ar' ? s.ar : s.en}</div>
            <div class="s-meta">${count} ${lang==='ar'?'مدرس':'teachers'}</div>
          </div>`;
      }).join('')}
    </div>
  `;

  document.querySelectorAll('.stage-card').forEach(c => {
    c.onclick = () => {
      currentStage = c.dataset.stage;
      const st = STAGES.find(s => s.id === currentStage);
      currentGrade = st.grades[0];
      renderBook();
    };
  });
  document.querySelectorAll('.grade-pill').forEach(p => {
    p.onclick = () => { currentGrade = p.dataset.grade; renderBook(); };
  });
  document.querySelectorAll('.subject-card').forEach(c => {
    c.onclick = () => {
      currentSubject = c.dataset.sub;
      renderTeachers();
    };
  });
}

function renderTeachers() {
  const sub = SUBJECTS.find(s => s.id === currentSubject);
  const list = TEACHERS.filter(t => t.subject === currentSubject);

  $('mainContent').innerHTML = `
    <div class="breadcrumb">${t('home')} › <span>${t('bookSession')}</span> › ${lang==='ar'?sub.ar:sub.en}</div>
    <button class="btn-outline" style="margin-bottom:16px;padding:8px 14px;" onclick="renderBook()">← ${lang==='ar'?'العودة':'Back'}</button>
    <h1 class="page-title">${lang==='ar'?sub.ar:sub.en} — ${t('teachers')}</h1>
    <div class="teachers-grid">
      ${list.map(tch => `
        <div class="teacher-card" data-id="${tch.id}">
          <div class="t-header">
            <div class="t-avatar">${(lang==='ar'?tch.ar:tch.en).charAt(0)}</div>
            <div>
              <div class="t-name">${lang==='ar'?tch.ar:tch.en}</div>
              <div class="t-title">${lang==='ar'?tch.title_ar:tch.title_en}</div>
            </div>
          </div>
          <div style="display:flex;gap:8px;margin-bottom:10px;">
            <span class="badge free">🎁 ${tch.free} ${t('freeLeft')}</span>
            <span class="badge">⭐ ${tch.rating}</span>
          </div>
        </div>`).join('')}
    </div>
  `;
  document.querySelectorAll('.teacher-card').forEach(c => {
    c.onclick = () => {
      currentTeacher = TEACHERS.find(t => t.id === +c.dataset.id);
      renderTeacherDetail();
    };
  });
}

function renderTeacherDetail() {
  const tch = currentTeacher;
  const sub = SUBJECTS.find(s => s.id === tch.subject);

  $('mainContent').innerHTML = `
    <button class="btn-outline" style="margin-bottom:16px;padding:8px 14px;" onclick="renderTeachers()">← ${lang==='ar'?'العودة':'Back'}</button>
    <div class="card" style="max-width:640px;">
      <div class="t-header" style="margin-bottom:20px;">
        <div class="t-avatar" style="width:64px;height:64px;font-size:24px;">${(lang==='ar'?tch.ar:tch.en).charAt(0)}</div>
        <div>
          <div class="t-name" style="font-size:20px;">${lang==='ar'?tch.ar:tch.en}</div>
          <div class="t-title">${lang==='ar'?tch.title_ar:tch.title_en} · ${lang==='ar'?sub.ar:sub.en}</div>
          <div style="margin-top:8px;display:flex;gap:8px;">
            <span class="badge free">🎁 ${tch.free} ${t('freeLeft')}</span>
            <span class="badge">⭐ ${tch.rating}</span>
          </div>
        </div>
      </div>
      <div style="background:var(--bg);border-radius:12px;padding:14px;margin-bottom:16px;border:1px solid var(--border);">
        <div style="font-size:13px;margin-bottom:6px;"><strong>Zoom:</strong> ${tch.zoom}</div>
        <div style="font-size:12px;color:var(--text-muted);">📹 ${t('openCam')}</div>
        <div style="font-size:13px;margin-top:8px;color:var(--success);font-weight:700;">🎁 ${tch.free} ${t('freeLeft')}</div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <button class="btn-success" onclick="openTrial()">🎁 ${t('bookTrial')}</button>
        <a href="${tch.zoom}" target="_blank" class="btn-outline" style="text-decoration:none;padding:12px 20px;">${t('joinZoom')}</a>
        <button class="btn-outline" style="padding:12px 20px;" onclick="openPay()">${t('payContact')}</button>
      </div>
    </div>
  `;
}

function renderSchedule() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startDay = first.getDay();
  const days = last.getDate();
  const today = now.getDate();
  const monthNames = lang === 'ar'
    ? ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
    : ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dayNames = lang === 'ar' ? ['أحد','إثن','ثلا','أرب','خمي','جمع','سبت'] : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  let cells = '';
  for (let i = 0; i < startDay; i++) cells += '<div class="cal-cell" style="opacity:.3;"></div>';
  for (let d = 1; d <= days; d++) {
    cells += `<div class="cal-cell ${d === today ? 'today' : ''}"><div class="num">${d}</div></div>`;
  }

  $('mainContent').innerHTML = `
    <div class="breadcrumb">${t('home')} › <span>${t('mySchedule')}</span></div>
    <h1 class="page-title">${t('mySchedule')}</h1>
    <div class="card">
      <div class="cal-header">
        <div style="display:flex;gap:8px;">
          <button class="btn-outline" style="padding:6px 12px;">‹</button>
          <button class="btn-outline" style="padding:6px 12px;background:var(--gold);color:#1a1a1a;border-color:var(--gold);">Today</button>
          <button class="btn-outline" style="padding:6px 12px;">›</button>
        </div>
        <strong>${monthNames[month]} ${year}</strong>
        <span style="font-size:12px;color:var(--text-muted);">${lang==='ar'?'التوقيت: Asia/Riyadh':'Times in Asia/Riyadh'}</span>
      </div>
      <div class="cal-grid">
        ${dayNames.map(d => `<div class="cal-day-name">${d}</div>`).join('')}
        ${cells}
      </div>
    </div>
  `;
}

function renderCourses() {
  $('mainContent').innerHTML = `
    <div class="breadcrumb">${t('home')} › <span>${t('myCourses')}</span></div>
    <h1 class="page-title">${t('myCourses')}</h1>
    <p class="page-sub">${lang==='ar'?'المواد والحضور مع كل مدرس والحصص المتبقية':'Subjects, attendance with each teacher, and remaining sessions'}</p>
    <div class="card">
      <div class="empty"><div style="font-size:40px;opacity:.3;">📋</div><p>${t('noData')}</p></div>
    </div>
  `;
}

function renderPrices() {
  const c = COUNTRIES.find(x => x.code === (user?.country || 'EG')) || COUNTRIES[0];
  $('mainContent').innerHTML = `
    <div class="breadcrumb">${t('home')} › <span>${t('subjectsPrices')}</span></div>
    <h1 class="page-title">${t('subjectsPrices')}</h1>
    <p class="page-sub">${lang==='ar'?'المواد حسب المرحلة الدراسية + الدورات الصيفية':'Subjects by school stage, plus summer courses'}</p>
    <div style="text-align:end;margin-bottom:16px;">
      <span class="topbar-chip">🌐 ${lang==='ar'?'الأسعار بـ':'Prices in'} ${c.cur}</span>
    </div>
    <div class="stages-row" style="margin-bottom:24px;">
      ${STAGES.map(s => `
        <div class="stage-card">
          <div class="icon">${s.icon}</div>
          <div class="name">${lang==='ar'?s.ar:s.en}</div>
          <div class="range">${s.grades.length} ${lang==='ar'?'مواد':'subjects'}</div>
        </div>`).join('')}
    </div>
    <div class="subjects-grid">
      ${SUBJECTS.map(s => `
        <div class="subject-card" style="background:${s.color}">
          <div class="s-icon">${s.icon}</div>
          <div class="s-name">${lang==='ar'?s.ar:s.en}</div>
          <div class="s-meta">${lang==='ar'?'من':'from'} ${c.price.toLocaleString()} ${c.sym} / ${lang==='ar'?'حصة':'session'}</div>
        </div>`).join('')}
    </div>
  `;
}

function renderMessages() {
  $('mainContent').innerHTML = `
    <div class="breadcrumb">${t('home')} › <span>${t('messages')}</span></div>
    <h1 class="page-title">${t('messages')}</h1>
    <p class="page-sub">${lang==='ar'?'راسل أي مدرس أخذ طفلك حصصاً معه':'Message any teacher your child has had sessions with'}</p>
    <div class="card" style="min-height:320px;display:flex;align-items:center;justify-content:center;">
      <div class="empty"><div style="font-size:40px;opacity:.3;">💬</div><p>${lang==='ar'?'لا توجد محادثات':'No conversations'}</p></div>
    </div>
  `;
}

function renderSettings() {
  $('mainContent').innerHTML = `
    <div class="breadcrumb">${t('home')} › <span>${t('settings')}</span></div>
    <h1 class="page-title">${t('settings')}</h1>
    <div class="card" style="max-width:480px;">
      <div class="form-group"><label>${t('email')}</label><input value="${user.email}" disabled></div>
      <div class="form-group"><label>${lang==='ar'?'الاسم':'Name'}</label><input value="${user.name}" disabled></div>
      <div class="form-group"><label>${t('country')}</label><input value="${user.country}" disabled></div>
      <p style="font-size:13px;color:var(--text-muted);margin-top:12px;">
        📧 dr.a.ayat.asal@gmail.com<br>📱 01001074715
      </p>
    </div>
  `;
}

/* ========== ADMIN ========== */
function renderAdmin(panel) {
  // Keep admin nav visible; do not hide student features
  document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'block');

  if (panel === 'overview') {
    $('mainContent').innerHTML = `
      <h1 class="page-title">${t('adminPanel')} — ${t('overview')}</h1>
      <div class="stats-row">
        <div class="stat-card"><div class="stat-icon blue">👥</div><div><div class="stat-num">${users.length}</div><div class="stat-label">${t('students')}</div></div></div>
        <div class="stat-card"><div class="stat-icon green">👨‍🏫</div><div><div class="stat-num">${TEACHERS.length}</div><div class="stat-label">${t('allTeachers')}</div></div></div>
        <div class="stat-card"><div class="stat-icon yellow">📅</div><div><div class="stat-num">${sessions.length}</div><div class="stat-label">${t('allSessions')}</div></div></div>
        <div class="stat-card"><div class="stat-icon red">🔑</div><div><div class="stat-num">3</div><div class="stat-label">Admins</div></div></div>
      </div>
      <div class="card" style="margin-top:16px;">
        <div class="card-title">Admin Accounts</div>
        <table class="admin-table" style="margin-top:12px;">
          <thead><tr><th>Email</th><th>Name</th></tr></thead>
          <tbody>
            ${ADMINS.map(a => `<tr><td>${a.email}</td><td>${a.name}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
  } else if (panel === 'students') {
    $('mainContent').innerHTML = `
      <h1 class="page-title">${t('students')}</h1>
      ${users.length === 0 ? `<div class="card"><div class="empty">${t('noData')}</div></div>` : `
      <div class="card" style="overflow-x:auto;">
        <table class="admin-table">
          <thead><tr><th>${lang==='ar'?'الاسم':'Name'}</th><th>Email</th><th>${t('country')}</th><th>${t('stage')}</th><th></th></tr></thead>
          <tbody>${users.map(u => {
            const c = COUNTRIES.find(x => x.code === u.country);
            return `<tr>
              <td>${u.name}${u.parentName ? ' <small>('+u.parentName+')</small>' : ''}</td>
              <td>${u.email}</td>
              <td>${c ? (lang==='ar'?c.ar:c.en) : u.country}</td>
              <td>${u.stage || '-'} / ${u.grade || '-'}</td>
              <td><button class="btn-sm" onclick="delUser(${u.id})">${t('delete')}</button></td>
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div>`}
    `;
  } else if (panel === 'teachers') {
    $('mainContent').innerHTML = `
      <h1 class="page-title">${t('allTeachers')}</h1>
      <div class="card" style="overflow-x:auto;">
        <table class="admin-table">
          <thead><tr><th>Name</th><th>Subject</th><th>${t('freeLeft')}</th><th>⭐</th></tr></thead>
          <tbody>${TEACHERS.map(tch => {
            const s = SUBJECTS.find(x => x.id === tch.subject);
            return `<tr>
              <td>${lang==='ar'?tch.ar:tch.en}</td>
              <td>${s ? (lang==='ar'?s.ar:s.en) : tch.subject}</td>
              <td>${tch.free}</td><td>${tch.rating}</td>
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div>
    `;
  } else if (panel === 'sessions') {
    $('mainContent').innerHTML = `
      <h1 class="page-title">${t('allSessions')}</h1>
      <p class="page-sub">${lang==='ar'?'كل الحجوزات والإيصالات من هذا الجهاز':'All bookings & receipts on this device'}</p>
      ${sessions.length === 0 ? `<div class="card"><div class="empty">${t('noData')}</div></div>` : `
      <div class="card" style="overflow-x:auto;">
        <table class="admin-table">
          <thead><tr>
            <th>${lang==='ar'?'الإيصال':'Receipt'}</th>
            <th>${lang==='ar'?'الطالب':'Student'}</th>
            <th>${lang==='ar'?'المدرس':'Teacher'}</th>
            <th>${lang==='ar'?'المادة':'Subject'}</th>
            <th>${lang==='ar'?'الموعد':'When'}</th>
            <th>Cam</th>
            <th>${lang==='ar'?'إثبات':'Proof'}</th>
          </tr></thead>
          <tbody>${sessions.slice().reverse().map(s => `
            <tr>
              <td><code style="font-size:11px;">${s.receiptNo||s.id}</code></td>
              <td>${s.userName||'-'}<br><small style="color:var(--text-muted)">${s.userEmail||''}</small></td>
              <td>${s.teacherName||'-'}</td>
              <td>${s.subject||'-'}</td>
              <td>${s.date} ${s.time}</td>
              <td>${s.camera?'✅':'❌'}</td>
              <td>${s.proofUploaded ? '✅ '+(s.proofName||'yes') : '⏳'}</td>
            </tr>`).join('')}</tbody>
        </table>
      </div>`}
    `;
  }
}

function delUser(id) {
  if (confirm('Delete?')) {
    users = users.filter(u => u.id !== id);
    saveUsers();
    renderAdmin('students');
  }
}

/* ========== MODALS ========== */
function openPay() {
  fillCountries();
  if (user?.country) $('payCountry').value = user.country;
  updatePrice();
  $('payModal').classList.add('show');
}
function updatePrice() {
  const c = COUNTRIES.find(x => x.code === $('payCountry').value);
  if (c) {
    $('payAmount').textContent = c.price.toLocaleString() + ' ' + c.sym;
    $('payCurrency').textContent = t('pricePer') + ' (' + c.cur + ')';
  }
}
function closePay() { $('payModal').classList.remove('show'); }

function openTrial() {
  $('trialTeacher').textContent = lang === 'ar' ? currentTeacher.ar : currentTeacher.en;
  const d = new Date(); d.setDate(d.getDate() + 1);
  $('trialDate').value = d.toISOString().slice(0, 10);
  $('trialModal').classList.add('show');
}
function closeTrial() { $('trialModal').classList.remove('show'); }
function confirmTrial() {
  const booking = {
    id: Date.now(),
    receiptNo: 'NFA-' + Date.now().toString().slice(-8),
    userId: user.id || user.email,
    userName: user.name,
    userEmail: user.email,
    parentName: user.parentName || '',
    country: user.country || '',
    grade: user.grade || currentGrade || '',
    stage: user.stage || currentStage || '',
    teacherId: currentTeacher.id,
    teacherName: lang === 'ar' ? currentTeacher.ar : currentTeacher.en,
    subject: currentSubject,
    subjectName: (SUBJECTS.find(s => s.id === currentSubject) || {}).ar || currentSubject,
    date: $('trialDate').value,
    time: $('trialTime').value,
    camera: $('trialCam').checked,
    type: 'free_trial',
    status: 'scheduled',
    proofUploaded: false,
    proofName: '',
    createdAt: new Date().toISOString()
  };
  sessions.push(booking);
  saveSessions();
  closeTrial();
  showReceipt(booking);
}

let lastReceiptId = null;

function showReceipt(b) {
  lastReceiptId = b.id;
  const sub = SUBJECTS.find(s => s.id === b.subject);
  const subName = sub ? (lang === 'ar' ? sub.ar : sub.en) : b.subjectName;
  const c = COUNTRIES.find(x => x.code === b.country);
  const countryName = c ? (lang === 'ar' ? c.ar : c.en) : (b.country || '-');
  const created = new Date(b.createdAt).toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-GB');

  $('receiptContent').innerHTML = `
    <div style="text-align:center;margin-bottom:16px;">
      <div style="font-size:11px;letter-spacing:2px;color:#c9a227;font-weight:800;">NEXIUM FUTURA ACADEMY</div>
      <div style="font-size:18px;font-weight:800;margin-top:4px;">${lang==='ar'?'إيصال حجز حصة':'Session Booking Receipt'}</div>
      <div style="font-size:12px;color:#64748b;margin-top:4px;">#${b.receiptNo}</div>
    </div>
    <div style="border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;padding:12px 0;font-size:13px;line-height:1.9;">
      <div><strong>${lang==='ar'?'الطالب':'Student'}:</strong> ${b.userName}</div>
      ${b.parentName ? `<div><strong>${lang==='ar'?'ولي الأمر':'Parent'}:</strong> ${b.parentName}</div>` : ''}
      <div><strong>Email:</strong> ${b.userEmail || '-'}</div>
      <div><strong>${lang==='ar'?'الدولة':'Country'}:</strong> ${countryName}</div>
      <div><strong>${lang==='ar'?'المرحلة / الصف':'Stage / Grade'}:</strong> ${b.stage || '-'} / ${b.grade || '-'}</div>
      <div><strong>${lang==='ar'?'المادة':'Subject'}:</strong> ${subName}</div>
      <div><strong>${lang==='ar'?'المدرس':'Teacher'}:</strong> ${b.teacherName}</div>
      <div><strong>${lang==='ar'?'التاريخ':'Date'}:</strong> ${b.date}</div>
      <div><strong>${lang==='ar'?'الوقت':'Time'}:</strong> ${b.time}</div>
      <div><strong>${lang==='ar'?'الكاميرا':'Camera'}:</strong> ${b.camera ? '✅ On' : '❌ Off'}</div>
      <div><strong>${lang==='ar'?'النوع':'Type'}:</strong> ${b.type === 'free_trial' ? (lang==='ar'?'جلسة تجريبية مجانية':'Free trial') : b.type}</div>
      <div><strong>${lang==='ar'?'الحالة':'Status'}:</strong> ${b.status}</div>
      <div style="font-size:11px;color:#94a3b8;margin-top:6px;">${lang==='ar'?'تاريخ الإصدار':'Issued'}: ${created}</div>
    </div>
    <div style="margin-top:14px;padding:10px;background:#fef9e7;border-radius:8px;font-size:12px;text-align:center;color:#78350f;">
      ${lang==='ar'
        ? '📸 التقط صورة شاشة لهذا الإيصال ثم ارفعه كإثبات، أو أرسله على واتساب: 01001074715'
        : '📸 Screenshot this receipt then upload as proof, or send on WhatsApp: 01001074715'}
    </div>
    <div style="text-align:center;margin-top:12px;font-size:11px;color:#94a3b8;">
      dr.a.ayat.asal@gmail.com · 01001074715
    </div>
  `;
  $('proofStatus').textContent = '';
  $('receiptModal').classList.add('show');
}

function closeReceipt() {
  $('receiptModal').classList.remove('show');
}

function uploadProof(e) {
  const file = e.target.files && e.target.files[0];
  if (!file || !lastReceiptId) return;
  const s = sessions.find(x => x.id === lastReceiptId);
  if (s) {
    s.proofUploaded = true;
    s.proofName = file.name;
    s.proofAt = new Date().toISOString();
    saveSessions();
    $('proofStatus').textContent = (lang === 'ar' ? '✅ تم رفع الإثبات: ' : '✅ Proof uploaded: ') + file.name;
    $('proofStatus').style.color = '#10b981';
  }
  e.target.value = '';
}

/* ========== INIT ========== */
// Expose for inline onclick handlers
window.navigate = navigate;
window.renderBook = renderBook;
window.renderTeachers = renderTeachers;
window.openTrial = openTrial;
window.closeTrial = closeTrial;
window.confirmTrial = confirmTrial;
window.openPay = openPay;
window.closePay = closePay;
window.logout = logout;
window.delUser = delUser;
window.showReceipt = showReceipt;
window.closeReceipt = closeReceipt;
window.uploadProof = uploadProof;

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(theme);
  applyLang(lang);
  fillCountries();
  fillStageGrade();

  // Stay logged in after refresh / restart
  const saved = loadSessionUser();
  if (saved && saved.email) {
    // Prefer full user record from users list if available
    const full = users.find(u => u.email === saved.email);
    if (full) user = full;
    else user = saved; // admin or cached session
    // delay enter until intro almost done so UI is ready
    setTimeout(() => {
      if (user) enterApp();
    }, 100);
  }

  $('loginForm').addEventListener('submit', doLogin);
  $('regForm').addEventListener('submit', doRegister);
  $('showReg').addEventListener('click', e => { e.preventDefault(); showReg(); });
  $('showLogin').addEventListener('click', e => { e.preventDefault(); showLogin(); });
  $('themeBtn').addEventListener('click', () => applyTheme(theme === 'light' ? 'dark' : 'light'));
  $('langBtn').addEventListener('click', () => applyLang(lang === 'ar' ? 'en' : 'ar'));
  $('payCountry').addEventListener('change', updatePrice);

  // Admin hint on login
  document.querySelectorAll('[data-role="admin"]').forEach(btn => {
    btn.addEventListener('click', () => {
      // credentials stay private
    });
  });

  // Cinematic intro: NEXIUM → FUTURA → ACADEMY → Logo → site
  (function runIntro() {
    const wordEl = $('introWord');
    const logoEl = $('introLogo');
    if (!wordEl) {
      setTimeout(() => $('loading').classList.add('hidden'), 800);
      return;
    }
    const sequence = [
      { text: 'NEXIUM', cls: 'gold' },
      { text: 'FUTURA', cls: 'blue' },
      { text: 'ACADEMY', cls: 'white' }
    ];
    let i = 0;
    function showLogo() {
      wordEl.classList.add('hidden-for-logo');
      if (!logoEl) {
        setTimeout(() => $('loading').classList.add('hidden'), 400);
        return;
      }
      logoEl.classList.remove('hide', 'show');
      // small delay so transition always runs
      setTimeout(() => {
        logoEl.classList.add('show');
      }, 80);
      // hold longer, then smooth fade out
      setTimeout(() => {
        logoEl.classList.remove('show');
        logoEl.classList.add('hide');
        setTimeout(() => {
          $('loading').classList.add('hidden');
        }, 1000);
      }, 2000);
    }
    function showNext() {
      if (i >= sequence.length) {
        showLogo();
        return;
      }
      const step = sequence[i];
      wordEl.textContent = step.text;
      wordEl.className = 'intro-word ' + step.cls;
      void wordEl.offsetWidth;
      wordEl.classList.add('show');
      setTimeout(() => {
        wordEl.classList.remove('show');
        wordEl.classList.add('hide');
        setTimeout(() => {
          wordEl.classList.remove('hide');
          i++;
          showNext();
        }, 750);
      }, 1200);
    }
    setTimeout(showNext, 200);
  })();
});
