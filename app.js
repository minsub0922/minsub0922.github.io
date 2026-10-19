'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const scholarURL = 'https://scholar.google.com/citations?user=WMDxCqsAAAAJ';
let language = 'en';
let activeFilter = 'all';
let currentProject = null;
let currentBib = '';

const ko = {
  skip:'본문으로 이동', navWork:'프로젝트', navResearch:'연구', navAbout:'소개', navContact:'연락처',
  heroRole:'AI 시스템 엔지니어 · 서울', heroTitle:'모델에서 시작해,<br><span class="serif-word">작동하는 시스템으로.</span>',
  heroIntro:'삼성리서치 AI/ML 엔지니어 <strong>최민섭</strong>입니다. 에이전트 시스템을 설계하고, 언어 모델을 학습·최적화하며, 실제 서비스로 구현하고 운영합니다.',
  exploreWork:'프로젝트 살펴보기', viewCV:'이력서 보기', blog:'기술 블로그', currently:'현재 소속',
  diagramCaption:'모델은 시작점. 시스템으로 완성합니다.', focusLine:'에이전트 AI · 모델 커스터마이징 · 프로덕션 엔지니어링',
  workIndex:'01 / 주요 프로젝트', workTitle:'현장에서 작동하는 AI.', workIntro:'실제 운영 시스템부터 공개 실습 자료까지. 요구사항 정의에서 회귀 테스트까지 직접 연결합니다.',
  filterAll:'전체', filterProduction:'프로덕션', filterOpen:'오픈소스', internalPlatform:'사내 플랫폼', axAward:'AX 어워드',
  winmateDesc:'비즈니스 요구사항을 분석하고, 근거에 기반한 제안서와 편집 가능한 프레젠테이션을 생성하는 멀티 에이전트 플랫폼.',
  viewCase:'설계 노트 보기', internalAgent:'사내 지식 에이전트', hackathonAward:'해커톤 수상',
  srnoteDesc:'기업 문서와 저장소 컨텍스트를 연결하고, 에이전트별 지식·도구 접근을 분리한 셀프 호스팅 지식 에이전트.',
  modelEngineering:'모델 엔지니어링', onDeviceTitle:'온디바이스 언어 모델',
  onDeviceDesc:'4B·0.6B 모델의 학습과 후처리, 16개 언어·7개 태스크에 걸친 반복 가능한 평가 자동화.',
  publicResource:'공개 학습 자료',
  langgraphDesc:'도구 호출, 상태 기반 에이전트, 적응형 검색부터 법률 문서 질의응답까지 다루는 실습 노트북.',
  graphragDesc:'Cypher 기초에서 뉴스·재무 보고서·법률 문서의 하이브리드 검색까지 이어지는 지식그래프 기반 RAG 실습.',
  viewRepo:'저장소 살펴보기', moreGithub:'GitHub에서 더 많은 실험 보기',
  researchIndex:'02 / 주요 연구', researchTitle:'더 작은 모델, 더 넓은 가능성.',
  nanoDesc:'저랭크 이진 분해를 활용한 LLM의 1비트 및 1비트 미만 학습 후 양자화.',
  rabitDesc:'잔차의 오차 보정 계층을 유지해 정확도와 추론 효율을 높이는 이진화 학습.',
  researchNote:'* 공동 1저자. 도식은 개념을 설명하기 위한 일러스트입니다.',
  aboutIndex:'03 / 시스템을 만드는 사람', aboutTitle:'만드는 사람.<br>연구하는 사람.<br><span class="serif-word">함께 성장하는 사람.</span>',
  aboutIntro:'인프라, 모델, 에이전트, 그리고 사용하는 사람까지 연결합니다. 명확한 인터페이스와 측정 가능한 품질, 실패의 원인을 이해할 수 있는 시스템을 지향합니다.',
  basedSeoul:'대한민국 서울', education:'한국항공대학교 컴퓨터공학 학사', languages:'한국어 · 영어 · 일본어',
  experienceTitle:'경력', axDate:'2026.08 — 현재',
  axExperience:'기업용 멀티 에이전트 아키텍처, 모델 커스터마이징, 평가 체계 구축 및 서비스 운영.',
  aiExperience:'온디바이스 LLM 학습·배포, 다국어 평가 자동화, 셀프 호스팅 지식 에이전트 개발.',
  hyundaiExperience:'OpenStack 네트워크와 프라이빗 클라우드 운영, 소프트웨어 라우팅 전환, Ansible 자동화.',
  mentoringIndex:'지식과 경험을 나누는 일', mentoringTitle:'좋은 엔지니어링은 함께 만듭니다.', mentorDate:'2026 — 현재', mentorRole:'기술 멘토',
  mentorDesc:'과학기술정보통신부 장관 위촉. 에이전트 아키텍처, RAG, 모델 배포·평가를 멘토링하고 코딩 에이전트 실습 워크숍을 진행합니다.',
  reviewerRole:'문제 검수 / 평가', reviewerDesc:'문제·테스트 케이스·채점 기준의 정확성, 난이도, 평가 견고성을 검토했습니다.',
  toolkitIndex:'04 / 엔지니어링 도구', toolkitTitle:'스택 전체를 연결합니다.', toolAgents:'에이전트와 검색', toolModels:'모델과 학습', toolQuality:'품질과 관측성', toolInfra:'인프라와 보안',
  contactIndex:'05 / 연락하기', contactTitle:'함께 만들어요.<br><span class="serif-word">실제로 작동하는 것을.</span>',
  contactDesc:'에이전트 AI, 효율적인 모델, 더 나은 시스템을 만드는 이야기를 환영합니다.', copyEmail:'이메일 복사', footerNote:'고민하고, 만들고, 개선합니다.',
  engineeringNote:'엔지니어링 노트', internalNote:'사내 프로젝트입니다. 이력서를 기반으로 작성했으며 구현 코드는 공개하지 않습니다.', copyCitation:'인용 복사'
};

const en = {};
$$('[data-i18n]').forEach(el => { en[el.dataset.i18n] = el.textContent; });
$$('[data-i18n-html]').forEach(el => { en[el.dataset.i18nHtml] = el.innerHTML; });

const projects = {
  winmate: {
    title:'Winmate / Proposal Studio',
    en:{ lead:'An internal B2B proposal platform at Samsung Research, spanning requirement analysis, product and solution recommendations, sales strategy, and editable PPTX generation.',
      sections:[['The problem','Enterprise proposals bring together scattered requirements, product knowledge, business strategy, and document creation. The workflow needs consistent context and verifiable outputs across multiple steps.'],
      ['What I built',['Worked with business stakeholders to define PRDs, success criteria, domain agents, and reusable service contracts.','Combined RAG and knowledge-graph context with a CLM-8B decision model for slide-layout selection.','Designed orchestration with compressed global and task-local context, Redis-backed gateway queues, and sandbox execution policies.']],
      ['Making it reliable','Established Langfuse LLMOps and SigNoz / OpenTelemetry tracing. Custom evaluators, persona-based proposal simulation, Persona QA, and contract / regression tests helped reproduce failures and validate fixes.'],
      ['Recognition','Designed, launched, and operate the platform. The project received an internal AX Award.']]},
    ko:{lead:'요구사항 분석, 제품·솔루션 추천, 영업 전략, 편집 가능한 PPTX 생성까지 연결하는 삼성리서치 사내 B2B 제안서 플랫폼입니다.',sections:[['해결하려는 문제','제안서 작성에는 분산된 요구사항, 제품 지식, 비즈니스 전략과 문서 작업이 함께 필요합니다. 여러 단계를 거쳐도 컨텍스트를 일관되게 유지하고 결과의 근거를 검증할 수 있어야 합니다.'],['구현한 내용',['현업 이해관계자와 PRD 및 성공 기준을 정의하고, 도메인별 에이전트와 재사용 가능한 서비스 계약을 설계했습니다.','RAG·지식그래프 컨텍스트와 슬라이드 레이아웃 선택을 위한 CLM-8B 의사결정 모델을 활용했습니다.','압축된 전역·태스크별 컨텍스트, Redis 게이트웨이 큐, 샌드박스 실행 정책을 갖춘 오케스트레이션을 설계했습니다.']],['신뢰성을 확보하는 방법','Langfuse LLMOps와 SigNoz / OpenTelemetry 추적을 구축했습니다. 커스텀 평가기, 페르소나 기반 제안 시뮬레이션, Persona QA, 계약·회귀 테스트로 실패를 재현하고 수정을 검증했습니다.'],['성과','플랫폼을 설계·출시하고 운영하고 있으며, 사내 AX 어워드를 수상했습니다.']]}
  },
  srnote:{ title:'SRNote',
    en:{lead:'A self-hosted knowledge agent for notes, enterprise documents, and project-specific repository context. An internal AI agent hackathon award winner.',sections:[['The problem','Knowledge is distributed across personal notes, enterprise documents, and source repositories. An autonomous agent must retrieve useful context while respecting boundaries between personal and enterprise knowledge.'],['What I built',['Connected Confluence and GitHub through MCP for classification, summarization, and project-scoped hybrid RAG.','Applied NVIDIA NeMoClaw / OpenShell for per-agent knowledge and tool-access isolation.','Preserved autonomous planning, retrieval, and tool execution while enforcing context and access boundaries.']],['Engineering focus','Explicitly scoped context, agent sandboxing, and controlled tool access are part of the system architecture.']]},
    ko:{lead:'개인 노트, 기업 문서, 프로젝트별 저장소 컨텍스트를 연결하는 셀프 호스팅 지식 에이전트입니다. 사내 AI 에이전트 해커톤에서 수상했습니다.',sections:[['해결하려는 문제','지식은 개인 노트, 기업 문서, 소스 저장소에 흩어져 있습니다. 자율 에이전트는 유용한 컨텍스트를 검색하면서도 개인·기업 지식의 경계를 지켜야 합니다.'],['구현한 내용',['MCP로 Confluence·GitHub를 연결하고 분류, 요약, 프로젝트 범위의 하이브리드 RAG를 구현했습니다.','NVIDIA NeMoClaw / OpenShell로 에이전트별 지식·도구 접근을 격리했습니다.','자율 계획·검색·도구 실행을 유지하면서 컨텍스트와 접근 경계를 적용했습니다.']],['설계의 중심','컨텍스트 범위, 에이전트 샌드박스, 도구 접근 제어를 시스템 아키텍처의 일부로 다뤘습니다.']]}
  },
  ondevice:{title:'On-device language models',koTitle:'온디바이스 언어 모델',
    en:{lead:'Model training, customization, evaluation, and deployment at Samsung Research / AI System, with repeatable post-training workflows.',sections:[['Models',['Trained and deployed a 4B entity-extraction model using SFT / LoRA with PyTorch and Hugging Face Transformers.','Built a 0.6B multitask model using knowledge distillation for mid-training and DPO / SFT for post-training.']],['Evaluation at scale','Built GitHub Actions-based post-training and evaluation automation across 16 languages and seven tasks, standardizing task / language-specific runs, benchmark execution, and regression checks.'],['Closing the loop','Combined LLM-as-a-Judge with human feedback to identify recurring failure patterns and turn them into data curation, training updates, and repeatable validation.']]},
    ko:{lead:'삼성리서치 AI System에서 진행한 모델 학습·커스터마이징·평가·배포와 반복 가능한 후처리 파이프라인 구축 경험입니다.',sections:[['모델',['PyTorch·Hugging Face Transformers로 SFT / LoRA 기반 4B 개체 추출 모델을 학습·배포했습니다.','지식 증류 기반 중간 학습과 DPO / SFT 후처리로 0.6B 멀티태스크 모델을 개발했습니다.']],['다국어 평가 자동화','16개 언어·7개 태스크의 후처리와 평가를 GitHub Actions로 자동화했습니다. 태스크·언어별 실행, 벤치마크 수행, 회귀 검증을 표준화했습니다.'],['평가에서 학습으로','LLM-as-a-Judge와 사람의 피드백을 결합해 반복되는 실패 패턴을 찾고 데이터 정제, 학습 개선, 재검증으로 연결했습니다.']]}
  }
};

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
function updateCount(){
  const count=$$('.project-card:not([hidden])').length;
  $('.work-count').textContent=language==='ko'?`${String(count).padStart(2,'0')}개 프로젝트`:`${String(count).padStart(2,'0')} PROJECTS`;
}
function syncThemeButton(){
  const dark=document.documentElement.dataset.theme==='dark';
  $('#theme-toggle').setAttribute('aria-pressed',String(dark));
  $('#theme-toggle').setAttribute('aria-label',language==='ko'?(dark?'밝은 테마로 전환':'어두운 테마로 전환'):(dark?'Switch to light theme':'Switch to dark theme'));
  $('meta[name="theme-color"]').content=dark?'#151815':'#fafaf8';
}
function setLanguage(next){
  language=next; document.documentElement.lang=next;
  const translations=next==='ko'?ko:en;
  $$('[data-i18n]').forEach(el=>{const value=translations[el.dataset.i18n];if(value!==undefined)el.textContent=value;});
  $$('[data-i18n-html]').forEach(el=>{const value=translations[el.dataset.i18nHtml];if(value!==undefined)el.innerHTML=value;});
  $('#language-toggle').textContent=next==='en'?'KR':'EN';
  $('#language-toggle').setAttribute('aria-label',next==='en'?'한국어로 전환':'Switch to English');
  $('#menu-toggle').setAttribute('aria-label',next==='ko'?'메뉴 열기':'Open navigation');
  $$('.close-dialog').forEach(el=>el.setAttribute('aria-label',next==='ko'?'창 닫기':'Close dialog'));
  $$('.profile-links a, .site-footer a, .research-section .section-heading>a').forEach(el=>{
    if(el.href.startsWith(scholarURL))el.href=`${scholarURL}&hl=${next}`;
  });
  $('#copy-status').textContent=''; $('#bib-status').textContent='';
  document.title=next==='ko'?'최민섭 — AI 시스템 엔지니어':'Minseop Choi — AI Systems Engineer';
  syncThemeButton();updateCount();remember('mc-language',next);
  if($('#detail-dialog').open&&currentProject)renderProject(currentProject);
}

function renderProject(key){
  const project=projects[key], content=project[language], target=$('#dialog-content');
  target.replaceChildren();
  const title=document.createElement('h2');title.id='dialog-title';title.textContent=language==='ko'&&project.koTitle?project.koTitle:project.title;target.append(title);
  const lead=document.createElement('p');lead.className='dialog-lead';lead.textContent=content.lead;target.append(lead);
  content.sections.forEach(([heading,body])=>{
    const section=document.createElement('section');section.className='case-section';
    const h3=document.createElement('h3');h3.textContent=heading;section.append(h3);
    if(Array.isArray(body)){const list=document.createElement('ul');body.forEach(text=>{const li=document.createElement('li');li.textContent=text;list.append(li);});section.append(list);}
    else{const p=document.createElement('p');p.textContent=body;section.append(p);}
    target.append(section);
  });
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

$$('.filter-button').forEach(button=>button.addEventListener('click',()=>{
  activeFilter=button.dataset.filter;
  $$('.filter-button').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
  $$('.project-card').forEach(card=>{card.hidden=activeFilter!=='all'&&card.dataset.category!==activeFilter;});
  updateCount();
}));

$$('.case-button').forEach(button=>button.addEventListener('click',()=>{
  currentProject=button.dataset.project;renderProject(currentProject);$('#detail-dialog').showModal();document.body.classList.add('dialog-open');
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
