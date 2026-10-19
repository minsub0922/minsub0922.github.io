'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const scholarURL = 'https://scholar.google.com/citations?user=WMDxCqsAAAAJ';
let language = 'en';
let currentProject = null;
let currentBib = '';

const ko = {
  skip:'본문으로 이동', navWork:'프로젝트', navResearch:'연구', navAbout:'경력', navContact:'연락처',
  heroTitle:'최민섭 <span class="name-native">Minseop Choi</span>', heroRole:'삼성리서치 <strong>AI/ML 엔지니어</strong>',
  heroIntro:'삼성리서치에서 <strong>에이전트 AI, 언어 모델, 프로덕션 시스템</strong>을 개발합니다. 기업용 멀티 에이전트 플랫폼과 온디바이스 모델을 만들고, 모델 학습·최적화·평가를 실제 서비스 운영으로 연결합니다.',
  profileBackground:'이전에는 현대자동차에서 프라이빗 클라우드 인프라를 담당했습니다. AI & SW 마에스트로 멘토로 개발팀을 지원하며, ICML 2026에 채택된 NanoQuant와 RaBiT 논문의 공동 저자입니다.',
  viewCV:'이력서', blog:'블로그', locationLabel:'거주지', educationLabel:'학력', languagesLabel:'언어',
  basedSeoul:'대한민국 서울', profileEducation:'한국항공대학교 컴퓨터공학 학사', languages:'한국어 · 영어 · 일본어', education:'한국항공대학교 컴퓨터공학 학사',
  cardTitle_agentic:'Agentic Systems', cardSub_agentic:'Winmate · SRNote',
  cardTitle_ondevice:'온디바이스 LLM 학습·평가', cardSub_ondevice:'4B 개체 추출 · 0.6B 멀티태스크',
  cardTitle_optimization:'온디바이스 모델 최적화', cardSub_optimization:'Vision · LLM · VLM · Mamba',
  cardTitle_hyundai:'클라우드 인프라', cardSub_hyundai:'프라이빗 클라우드 네트워크·운영 자동화',
  workIndex:'프로젝트', workTitle:'주요 프로젝트', workIntro:'에이전트 시스템, 모델 학습·최적화, 클라우드 인프라의 실제 프로젝트입니다.',
  enterpriseAgents:'기업용 에이전트', axAward:'사내 AX 어워드',
  winmateDesc:'요구사항 분석, 제품·솔루션 추천, 영업 전략, 편집 가능한 PPTX 생성까지 연결하는 사내 B2B 제안서 플랫폼을 설계·출시하고 운영합니다.',
  winmateContribution1:'현업과 PRD·도메인 에이전트 서비스 계약을 정의하고, RAG·지식그래프 컨텍스트와 CLM-8B 기반 슬라이드 레이아웃 선택을 구현했습니다.',
  winmateContribution2:'멀티 에이전트 오케스트레이션, Redis 게이트웨이 큐, 샌드박스 정책과 Langfuse·OpenTelemetry 기반 평가·추적 체계를 구축했습니다.',
  viewCase:'상세 보기', knowledgeAgent:'지식 에이전트', hackathonAward:'사내 해커톤 수상',
  srnoteDesc:'개인 노트, 기업 문서, 프로젝트별 저장소 컨텍스트를 연결하는 셀프 호스팅 지식 에이전트를 개발했습니다.',
  srnoteContribution1:'MCP로 Confluence·GitHub를 연결하고 분류, 요약, 프로젝트 범위의 하이브리드 검색을 구현했습니다.',
  srnoteContribution2:'NVIDIA NeMoClaw / OpenShell로 에이전트별 지식·도구 접근을 격리하면서 자율 계획과 실행을 유지했습니다.',
  modelEngineering:'온디바이스 AI', onDeviceTitle:'온디바이스 LLM 학습·평가',
  onDeviceDesc:'4B 개체 추출 모델과 0.6B 멀티태스크 모델을 학습·배포하고, 반복 가능한 후처리·평가 파이프라인을 구축했습니다.',
  ondeviceContribution1:'4B 모델에는 SFT / LoRA를, 0.6B 모델에는 지식 증류와 DPO / SFT를 적용했습니다.',
  ondeviceContribution2:'GitHub Actions로 16개 언어·7개 태스크 평가를 자동화하고, LLM-as-a-Judge와 사람 피드백을 데이터 정제·학습 개선에 연결했습니다.',
  cloudEngineering:'클라우드 인프라', hyundaiTitle:'프라이빗 클라우드 네트워크·운영 자동화',
  hyundaiDesc:'OpenStack 프라이빗 클라우드를 운영하고, 하드웨어 라우터에서 소프트웨어 기반 라우팅으로의 전환을 담당했습니다.',
  hyundaiContribution1:'프라이빗 클라우드의 네트워크 장애와 배포·설정 문제를 진단하고 해결했습니다.',
  hyundaiContribution2:'Ansible로 프로비저닝, 헬스 체크, 장애 대응, 유지보수를 자동화하고 운영 런북을 표준화했습니다.',
  researchIndex:'연구', researchTitle:'주요 논문',
  nanoDesc:'저랭크 이진 분해를 활용한 LLM의 1비트 및 1비트 미만 학습 후 양자화.',
  rabitDesc:'잔차의 오차 보정 계층을 유지해 정확도와 추론 효율을 높이는 이진화 학습.', researchNote:'* 공동 1저자.',
  aboutIndex:'배경', aboutTitle:'경력과 멘토링',
  aboutIntro:'클라우드 인프라에서 온디바이스 AI, 기업용 에이전트 시스템으로 경험을 넓혀왔습니다. 개발과 함께 팀 멘토링과 AI 챌린지 문제 검수에도 참여합니다.',
  experienceTitle:'경력', axDate:'2026.08 — 현재',
  axExperience:'기업용 멀티 에이전트 아키텍처, 모델 커스터마이징, 평가 체계 구축 및 서비스 운영.',
  aiExperience:'온디바이스 LLM 학습·배포, 다국어 평가 자동화, 셀프 호스팅 지식 에이전트 개발.',
  hyundaiExperience:'OpenStack 네트워크와 프라이빗 클라우드 운영, 소프트웨어 라우팅 전환, Ansible 자동화.',
  mentoringIndex:'멘토링과 기술 활동', mentoringTitle:'교육과 기술 활동', mentorDate:'2026 — 현재', mentorRole:'기술 멘토',
  mentorDesc:'과학기술정보통신부 장관 위촉. 에이전트 아키텍처, RAG, 모델 배포·평가를 멘토링하고 코딩 에이전트 실습 워크숍을 진행합니다.',
  reviewerRole:'문제 검수 / 평가', reviewerDesc:'문제·테스트 케이스·채점 기준의 정확성, 난이도, 평가 견고성을 검토했습니다.',
  toolkitIndex:'기술', toolkitTitle:'주로 사용하는 도구', toolAgents:'에이전트와 검색', toolModels:'모델과 학습', toolQuality:'품질과 관측성', toolInfra:'인프라와 보안',
  contactIndex:'연락처', contactTitle:'연락하기', contactDesc:'에이전트 AI, 효율적인 모델, 시스템 엔지니어링에 관한 이야기를 환영합니다.',
  copyEmail:'이메일 복사', footerNote:'Minseop Choi', engineeringNote:'프로젝트 상세',
  internalNote:'실무 프로젝트 소개입니다. 사내 구현과 제품별 세부 정보는 공개하지 않습니다.', copyCitation:'인용 복사'
};

const en = {};
$$('[data-i18n]').forEach(el => { en[el.dataset.i18n] = el.textContent; });
$$('[data-i18n-html]').forEach(el => { en[el.dataset.i18nHtml] = el.innerHTML; });

const bibs = {
  nanoquant:`@inproceedings{chong2026nanoquant,
  title     = {NanoQuant: Efficient Sub-1-Bit Quantization of Large Language Models},
  author    = {Chong, Hyochan and Kim, Dongkyu and Kim, Changdong and Choi, Minseop},
  booktitle = {International Conference on Machine Learning},
  year      = {2026},
  eprint    = {2602.06694},
  archivePrefix = {arXiv},
  url       = {https://arxiv.org/abs/2602.06694}
}`,
  rabit:`@inproceedings{you2026rabit,
  title     = {RaBiT: Residual-Aware Binarization Training for Accurate and Efficient LLMs},
  author    = {You, Youngcheon and Lee, Banseok and Choi, Minseop and Kim, Seonyoung and Chong, Hyochan and Kim, Changdong and Kim, Youngmin and Kim, Dongkyu},
  booktitle = {International Conference on Machine Learning},
  year      = {2026},
  eprint    = {2602.05367},
  archivePrefix = {arXiv},
  url       = {https://arxiv.org/abs/2602.05367}
}`
};

function remember(key,value){try{localStorage.setItem(key,value);}catch(error){/* Browsing preferences are optional. */}}
function syncThemeButton(){
  const dark=document.documentElement.dataset.theme==='dark';
  $('#theme-toggle').setAttribute('aria-pressed',String(dark));
  $('#theme-toggle').setAttribute('aria-label',language==='ko'?(dark?'밝은 테마로 전환':'어두운 테마로 전환'):(dark?'Switch to light theme':'Switch to dark theme'));
  $('meta[name="theme-color"]').content=dark?'#171b1e':'#fdfdfc';
}
function setLanguage(next){
  language=next; document.documentElement.lang=next;
  const translations=next==='ko'?ko:en;
  $$('[data-i18n]').forEach(el=>{const value=translations[el.dataset.i18n];if(value!==undefined)el.textContent=value;});
  $$('[data-i18n-html]').forEach(el=>{const value=translations[el.dataset.i18nHtml];if(value!==undefined)el.innerHTML=value;});
  $$('.project-open').forEach(button=>{button.setAttribute('aria-label',`${$('h3',button.closest('.project-card')).textContent}: ${next==='ko'?'상세 보기':'View details'}`);});
  $('#language-toggle').textContent=next==='en'?'KR':'EN';
  $('#language-toggle').setAttribute('aria-label',next==='en'?'한국어로 전환':'Switch to English');
  $('#menu-toggle').setAttribute('aria-label',next==='ko'?'메뉴 열기':'Open navigation');
  $$('.close-dialog').forEach(el=>el.setAttribute('aria-label',next==='ko'?'창 닫기':'Close dialog'));
  $$('.profile-links a, .site-footer a, .research-section .section-heading>a').forEach(el=>{
    if(el.href.startsWith(scholarURL))el.href=`${scholarURL}&hl=${next}`;
  });
  $('#copy-status').textContent=''; $('#bib-status').textContent='';
  document.title=next==='ko'?'최민섭 — AI 시스템 엔지니어':'Minseop Choi — AI Systems Engineer';
  syncThemeButton();remember('mc-language',next);
  if($('#detail-dialog').open&&currentProject)renderProject(currentProject);
}

function renderProject(key){
  const project=projectDetails[key], content=project[language], target=$('#dialog-content');
  target.replaceChildren();
  const title=document.createElement('h2');title.id='dialog-title';title.textContent=content.title;target.append(title);
  const meta=document.createElement('p');meta.className='dialog-meta';meta.textContent=content.meta;target.append(meta);
  const lead=document.createElement('p');lead.className='dialog-lead';lead.textContent=content.lead;target.append(lead);
  const tags=document.createElement('div');tags.className='dialog-tags';
  content.tags.forEach(text=>{const tag=document.createElement('span');tag.textContent=text;tags.append(tag);});target.append(tags);
  content.groups.forEach((group,index)=>{
    const article=document.createElement('article');article.className='case-group';
    if(group.title){const heading=document.createElement('h3');heading.className='case-group-title';heading.textContent=group.title;article.append(heading);}
    if(group.subtitle){const subtitle=document.createElement('p');subtitle.className='case-group-subtitle';subtitle.textContent=group.subtitle;article.append(subtitle);}
    group.sections.forEach(([heading,body])=>{
      const section=document.createElement('section');section.className='case-section';
      const h4=document.createElement('h4');h4.textContent=heading;section.append(h4);
      if(Array.isArray(body)){const list=document.createElement('ul');body.forEach(text=>{const li=document.createElement('li');li.textContent=text;list.append(li);});section.append(list);}
      else{const p=document.createElement('p');p.textContent=body;section.append(p);}
      article.append(section);
    });target.append(article);
  });
  if(content.links){const links=document.createElement('div');links.className='case-links';content.links.forEach(({label,href})=>{const a=document.createElement('a');a.textContent=label+' ↗';a.href=href;a.target='_blank';a.rel='noopener noreferrer';links.append(a);});target.append(links);}
}

$('#theme-toggle').addEventListener('click',()=>{
  const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
  document.documentElement.dataset.theme=theme;remember('mc-theme',theme);syncThemeButton();
});
$('#language-toggle').addEventListener('click',()=>setLanguage(language==='en'?'ko':'en'));

function closeMenu(){ $('#mobile-nav').hidden=true;$('#menu-toggle').setAttribute('aria-expanded','false'); }
$('#menu-toggle').addEventListener('click',()=>{
  const open=$('#menu-toggle').getAttribute('aria-expanded')!=='true';
  $('#mobile-nav').hidden=!open;$('#menu-toggle').setAttribute('aria-expanded',String(open));
});
$$('#mobile-nav a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
const desktopQuery=matchMedia('(min-width:581px)');desktopQuery.addEventListener('change',event=>{if(event.matches)closeMenu();});

$$('.case-button').forEach(button=>button.addEventListener('click',()=>{
  currentProject=button.dataset.project;renderProject(currentProject);$('#detail-dialog').showModal();$('#detail-dialog').scrollTop=0;document.body.classList.add('dialog-open');
}));
$$('.bib-button').forEach(button=>button.addEventListener('click',()=>{
  currentBib=bibs[button.dataset.bib];$('#bib-content').textContent=currentBib;$('#bib-status').textContent='';$('#bib-dialog').showModal();document.body.classList.add('dialog-open');
}));
$$('dialog').forEach(dialog=>{
  $('.close-dialog',dialog).addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
  dialog.addEventListener('click',event=>{
    if(event.target!==dialog)return;
    const rect=dialog.getBoundingClientRect();
    if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();
  });
});

async function copyText(text,status,selectionTarget){
  try{
    if(!navigator.clipboard)throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    status.textContent=language==='ko'?'복사했습니다.':'Copied to clipboard.';
  }catch(error){
    const range=document.createRange();range.selectNodeContents(selectionTarget);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);
    status.textContent=language==='ko'?'텍스트를 선택했습니다. ⌘C / Ctrl+C로 복사하세요.':'Text selected. Press ⌘C / Ctrl+C to copy.';
  }
}
$('#copy-email').addEventListener('click',()=>copyText('minsub0922@gmail.com',$('#copy-status'),$('.email-link')));
$('#copy-bib').addEventListener('click',()=>copyText(currentBib,$('#bib-status'),$('#bib-content')));

let scrollScheduled=false;
function updateProgress(){
  const range=document.documentElement.scrollHeight-window.innerHeight;
  $('.page-progress').style.transform=`scaleX(${range>0?window.scrollY/range:0})`;
  scrollScheduled=false;
}
window.addEventListener('scroll',()=>{if(!scrollScheduled){scrollScheduled=true;requestAnimationFrame(updateProgress);}},{passive:true});
window.addEventListener('resize',updateProgress);
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting);
    if(visible.length){const id=visible[visible.length-1].target.id;$$('.desktop-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${id}`));}
  },{rootMargin:'-10% 0px -65% 0px',threshold:0});
  ['work','research','about','contact'].forEach(id=>observer.observe(document.getElementById(id)));
}
$('#year').textContent=String(new Date().getFullYear());
try{if(localStorage.getItem('mc-language')==='ko')language='ko';}catch(error){/* Default to English. */}
setLanguage(language);updateProgress();
