'use strict';

// Professional experience supplied in the CV, confirmed in prior conversations,
// and extended by the user's October 19, 2026 optimization scope.
const projectDetails = {
  agentic: {
    en: {
      title:'Agentic Systems', meta:'Samsung Research · Winmate / Samsung Proposal Studio + SRNote',
      lead:'Two independently built agent systems: an enterprise proposal platform and a self-hosted knowledge agent. My work covers workflow decomposition, context and tool integration, model-assisted decisions, evaluation, and production operations.',
      tags:['Multi-agent orchestration','LangGraph','MCP','RAG / knowledge graphs','CLM-8B','Langfuse / OpenTelemetry'],
      groups:[
        {title:'Winmate / Samsung Proposal Studio',subtitle:'Internal B2B proposal platform · Internal AX Award',sections:[
          ['Business workflow → domain agents','Worked with business stakeholders to define PRDs and measurable success criteria. Mapped requirement analysis, product and solution recommendations, sales strategy, and editable PPTX generation to domain agents and reusable service contracts.'],
          ['Knowledge-grounded decisions & slide generation','Combined RAG and knowledge-graph context with a CLM-8B decision model. The decision model selects PPT layout templates from proposal context, and the selected template guides automated slide generation. The output is an editable PPTX.'],
          ['State, context & execution',['Designed multi-agent workflows with compressed global state and task-local context so domain agents receive relevant information without carrying the full conversation into every step.','Used Redis-backed gateway queues to handle burst traffic and long-running execution, with sandbox isolation and execution policies around agent tools.','Defined service boundaries and contracts so requirement analysis, recommendations, strategy, and document generation could be implemented and validated as separate responsibilities.']],
          ['Evaluation, observability & iteration','Established Langfuse LLMOps and SigNoz / OpenTelemetry tracing. Custom evaluators, persona-based proposal simulation, Persona QA, and contract / regression tests support evidence-grounded output checks, failure reproduction, and verification of fixes.'],
          ['Delivery & recognition','Designed, launched, and operate the internal platform. The project received an internal AX Award.']
        ]},
        {title:'SRNote',subtitle:'Self-hosted knowledge agent · Internal AI Agent Hackathon Award',sections:[
          ['Enterprise knowledge integration','Built a knowledge agent over notes, enterprise documents, and repository context. Integrated Confluence and GitHub through MCP for classification, summarization, and project-scoped hybrid RAG.'],
          ['Planning, retrieval & tool use','Connected autonomous planning and tool execution to project-specific retrieval. Project-scoped retrieval supplies relevant document and repository context to the current task.'],
          ['Scoped context & agent isolation','Applied NVIDIA NeMoClaw / OpenShell for per-agent knowledge and tool-access isolation. Enforced personal / enterprise context boundaries while preserving autonomous planning, retrieval, and execution.'],
          ['Recognition','SRNote received an internal AI Agent Hackathon Award.']
        ]}
      ]
    },
    ko: {
      title:'Agentic Systems',meta:'Samsung Research · Winmate / Samsung Proposal Studio + SRNote',
      lead:'기업용 제안서 플랫폼과 셀프 호스팅 지식 에이전트라는 서로 다른 두 시스템입니다. 업무 분해, 컨텍스트·도구 통합, 모델 기반 의사결정부터 평가·운영까지 연결한 경험을 묶었습니다.',
      tags:['멀티 에이전트 오케스트레이션','LangGraph','MCP','RAG / 지식그래프','CLM-8B','Langfuse / OpenTelemetry'],
      groups:[
        {title:'Winmate / Samsung Proposal Studio',subtitle:'사내 B2B 제안서 플랫폼 · 사내 AX 어워드',sections:[
          ['비즈니스 업무를 도메인 에이전트로 분해','현업 이해관계자와 PRD 및 측정 가능한 성공 기준을 정의했습니다. 요구사항 분석, 제품·솔루션 추천, 영업 전략, 편집 가능한 PPTX 생성을 도메인 에이전트와 재사용 가능한 서비스 계약으로 구성했습니다.'],
          ['지식 기반 의사결정과 슬라이드 생성','RAG·지식그래프 컨텍스트에 CLM-8B 의사결정 모델을 결합했습니다. 제안 컨텍스트를 바탕으로 PPT 레이아웃 템플릿을 선택하고, 선택된 템플릿을 조건으로 슬라이드 자동 생성을 진행하도록 구성했습니다. 결과물은 이미지로 고정하지 않고 편집 가능한 PPTX로 제공합니다.'],
          ['상태·컨텍스트·실행 관리',['압축된 전역 상태와 태스크별 로컬 컨텍스트를 구분해 도메인 에이전트가 해당 업무에 필요한 정보를 전달받도록 설계했습니다.','Redis 기반 게이트웨이 큐로 버스트 요청과 장시간 실행을 처리하고, 도구 실행에 샌드박스 격리 및 실행 정책을 적용했습니다.','요구사항 분석·추천·전략·문서 생성의 책임을 분리하고, 각 모듈의 서비스 경계와 계약을 정의했습니다.']],
          ['평가·관측성과 반복 개선','Langfuse LLMOps와 SigNoz / OpenTelemetry 추적을 구축했습니다. 커스텀 평가기, 페르소나 기반 제안 시뮬레이션, Persona QA, 계약·회귀 테스트를 통해 출력 근거를 검증하고, 실패 재현과 수정 검증을 반복했습니다.'],
          ['출시·운영과 성과','사내 플랫폼을 설계·출시하고 운영하고 있으며, 사내 AX 어워드를 수상했습니다.']
        ]},
        {title:'SRNote',subtitle:'셀프 호스팅 지식 에이전트 · 사내 AI 에이전트 해커톤 수상',sections:[
          ['기업 지식 통합','개인 노트, 기업 문서, 저장소 컨텍스트를 대상으로 지식 에이전트를 개발했습니다. MCP로 Confluence·GitHub를 연결하고 분류, 요약, 프로젝트 범위의 하이브리드 RAG를 구현했습니다.'],
          ['계획·검색·도구 실행','자율 계획과 도구 실행을 프로젝트별 검색에 연결했습니다. 모든 기업 지식을 하나의 프롬프트에 넣는 대신, 현재 태스크에 필요한 문서와 저장소 컨텍스트를 검색해 활용하도록 구성했습니다.'],
          ['컨텍스트 범위와 에이전트 격리','NVIDIA NeMoClaw / OpenShell로 에이전트별 지식·도구 접근을 격리했습니다. 자율 계획·검색·실행을 유지하면서 개인·기업 컨텍스트의 경계를 적용했습니다.'],
          ['성과','사내 AI 에이전트 해커톤에서 수상했습니다.']
        ]}
      ]
    }
  },
  ondevice: {
    en: {
      title:'On-device LLM Training & Evaluation',meta:'Samsung Research / AI System · Model training, post-training, and deployment',
      lead:'Trained and deployed compact language models for on-device tasks, and built the evaluation loop that turns model failures into data and training improvements. The work spans a 4B entity-extraction model, a 0.6B multitask model, and evaluation automation across 16 languages and seven tasks.',
      tags:['PyTorch','Hugging Face Transformers','SFT / LoRA','Knowledge distillation','DPO','LLM-as-a-Judge','GitHub Actions'],
      groups:[
        {title:'Model development',sections:[
          ['4B entity extraction · SFT / LoRA','Fine-tuned and deployed a 4B entity-extraction model with PyTorch and Hugging Face Transformers. Used supervised fine-tuning and LoRA to adapt model behavior to the information-extraction task.'],
          ['0.6B multitask model · Mid-training / post-training','Trained and deployed a 0.6B multitask on-device model. Used knowledge distillation in mid-training and DPO / SFT in post-training, connecting model customization to deployment requirements.']
        ]},
        {title:'Evaluation & improvement',sections:[
          ['16 languages × 7 tasks','Built GitHub Actions-based post-training and evaluation automation. Standardized task- and language-specific runs, benchmark execution, and regression checks so changes could be assessed repeatedly across the same task / language coverage.'],
          ['LLM-as-a-Judge + human feedback','Developed a hybrid evaluation loop combining automated model judgment with human feedback. Used failure analysis to identify recurring errors and translate them into data curation, training updates, and repeatable validation.'],
          ['A repeatable development loop','Connected evaluation, error analysis, data refinement, training, and validation. The evaluation pipeline provides an engineering feedback loop for deployed model behavior.']
        ]}
      ]
    },
    ko: {
      title:'온디바이스 LLM 학습·평가',meta:'Samsung Research / AI System · 모델 학습·후처리·배포',
      lead:'온디바이스 태스크용 소형 언어 모델을 학습·배포하고, 모델의 실패를 데이터·학습 개선으로 연결하는 평가 루프를 구축했습니다. 4B 개체 추출 모델, 0.6B 멀티태스크 모델과 16개 언어·7개 태스크의 평가 자동화를 포함합니다.',
      tags:['PyTorch','Hugging Face Transformers','SFT / LoRA','지식 증류','DPO','LLM-as-a-Judge','GitHub Actions'],
      groups:[
        {title:'모델 개발',sections:[
          ['4B 개체 추출 · SFT / LoRA','PyTorch·Hugging Face Transformers를 활용해 4B 개체 추출 모델을 파인튜닝하고 배포했습니다. 지도 미세조정과 LoRA로 정보 추출 태스크에 모델의 동작을 맞췄습니다.'],
          ['0.6B 멀티태스크 · Mid-training / Post-training','0.6B 멀티태스크 온디바이스 모델을 학습·배포했습니다. 중간 학습에는 지식 증류를, 후처리에는 DPO / SFT를 적용하며 모델 커스터마이징을 배포 요구사항과 연결했습니다.']
        ]},
        {title:'평가와 성능 개선',sections:[
          ['16개 언어 × 7개 태스크','GitHub Actions 기반의 후처리·평가 자동화를 구축했습니다. 태스크·언어별 실행, 벤치마크 수행, 회귀 검증을 표준화해 변경 사항을 동일한 평가 범위에서 반복 검증할 수 있도록 했습니다.'],
          ['LLM-as-a-Judge + 사람의 피드백','모델 기반 자동 평가와 사람의 피드백을 결합한 하이브리드 평가 루프를 개발했습니다. 실패 분석으로 반복 오류를 찾고, 데이터 정제·학습 개선·재검증으로 연결했습니다.'],
          ['반복 가능한 개발 루프','평가 → 오류 분석 → 데이터 개선 → 학습 → 검증을 연결했습니다. 일회성 벤치마크에 그치지 않고, 배포 모델의 동작을 지속적으로 개선하는 엔지니어링 루프로 활용했습니다.']
        ]}
      ]
    }
  },
  optimization: {
    en: {
      title:'On-device Model Optimization',meta:'On-device inference · Commercialization experience',
      lead:'Commercialization work spanning NPU operator optimization, low-bit quantization, and lightweight Vision, LLM, VLM, and Mamba models. My experience includes integer-only computation and Microscaling (MX) numeric formats, connecting model compression to deployable on-device execution.',
      tags:['NPU operator optimization','Low-bit quantization','Vision / LLM / VLM / Mamba','Integer-only','Microscaling (MX)','Commercialization'],
      groups:[
        {title:'Hardware-aware model optimization',sections:[
          ['NPU operator optimization','Worked on operator-level optimization for NPU execution in commercial on-device applications. The scope connects model operators, supported hardware execution paths, and numerical constraints so model-level optimization can carry through to deployment.'],
          ['Low-bit quantization','Applied low-bit model quantization as part of commercialization work, addressing the relationship between numerical precision, model size, inference cost, and usable model quality. This work sits alongside my research in binary and sub-1-bit language-model compression.'],
          ['Vision · LLM · VLM · Mamba','Worked on lightweight models across vision, language, vision-language, and Mamba architectures. The optimization scope considers the structure and computation characteristics of each model family.']
        ]},
        {title:'Numerical formats & deployment',sections:[
          ['Integer-only computation','Commercialization experience with integer-only computation for on-device models. The technical focus is the quantized computation path and its scaling / numerical range, so the arithmetic used at inference aligns with the intended model representation.'],
          ['Microscaling (MX)','Worked with Microscaling numeric formats in commercialization. MX combines block-level scaling with narrow floating-point or integer element representations; the work concerns numerical representation and the compatibility of model execution with reduced-precision formats.'],
          ['From model compression to implementation','Connected architecture-level lightweighting, quantization, numeric-format choices, and operator-level execution in commercial deployment work. These are complementary parts of making a model practical on a device.']
        ]},
        {title:'Related research',sections:[['NanoQuant & RaBiT','Co-authored NanoQuant and RaBiT, accepted to ICML 2026. NanoQuant studies binary / sub-1-bit post-training quantization; RaBiT studies residual-aware binarization training. These publications are related research, separate from the product-specific commercialization work described above.']]}
      ],
      links:[{label:'NanoQuant · paper',href:'https://arxiv.org/abs/2602.06694'},{label:'RaBiT · paper',href:'https://arxiv.org/abs/2602.05367'}]
    },
    ko: {
      title:'온디바이스 모델 최적화',meta:'온디바이스 추론 · 상용화 경험',
      lead:'NPU 연산자 최적화, 저비트 양자화와 Vision·LLM·VLM·Mamba 모델 경량화에 대한 상용화 경험입니다. Integer-only 연산과 Microscaling(MX) 수치 포맷을 포함해 모델 압축을 실제 온디바이스 실행으로 연결했습니다.',
      tags:['NPU 연산자 최적화','저비트 양자화','Vision / LLM / VLM / Mamba','Integer-only','Microscaling (MX)','상용화'],
      groups:[
        {title:'하드웨어를 고려한 모델 최적화',sections:[
          ['NPU 연산자 최적화','상용 온디바이스 환경의 NPU 실행을 위한 연산자 수준 최적화를 수행했습니다. 모델 연산자, 하드웨어에서 지원하는 실행 경로, 수치 제약을 연결해 모델 수준의 최적화가 실제 배포와 실행으로 이어지도록 다뤘습니다.'],
          ['저비트 양자화','상용화 과정에서 저비트 모델 양자화를 적용했습니다. 수치 정밀도, 모델 크기, 추론 비용, 모델 품질의 관계를 고려했으며, 이와 연결되는 연구로 이진·1비트 미만 언어 모델 압축에도 참여했습니다.'],
          ['Vision · LLM · VLM · Mamba 경량화','비전, 언어, 비전-언어와 Mamba 아키텍처의 모델 경량화를 수행했습니다. 모델군별 구조와 연산 특성을 고려하는 최적화 경험으로, 다양한 아키텍처의 온디바이스 적용을 다뤘습니다.']
        ]},
        {title:'수치 포맷과 배포',sections:[
          ['Integer-only 연산','온디바이스 모델의 Integer-only 연산에 대한 상용화 경험이 있습니다. 양자화된 연산 경로와 스케일·수치 범위를 함께 다루며, 추론 시 사용하는 산술 연산을 모델 표현과 맞추는 작업을 수행했습니다.'],
          ['Microscaling(MX)','Microscaling 수치 포맷에 대한 상용화 경험이 있습니다. MX는 블록 단위 스케일과 저정밀 부동소수점 또는 정수 요소 표현을 결합하는 포맷으로, 수치 표현과 저정밀 모델 실행의 호환성을 다뤘습니다.'],
          ['모델 압축에서 실제 구현까지','아키텍처 경량화, 양자화, 수치 포맷 선택, 연산자 실행을 연결하는 상용화 작업을 수행했습니다. 저장 표현을 줄이는 것에 그치지 않고, 디바이스에서 실제로 실행 가능한 모델로 만드는 과정 전반을 다뤘습니다.']
        ]},
        {title:'관련 연구',sections:[['NanoQuant & RaBiT','ICML 2026에 채택된 NanoQuant와 RaBiT의 공동 저자입니다. NanoQuant는 이진·1비트 미만 학습 후 양자화를, RaBiT는 잔차 인식 이진화 학습을 다룹니다. 해당 논문은 위 제품별 상용화 경험과 구분되는 관련 연구입니다.']]}
      ],
      links:[{label:'NanoQuant · 논문',href:'https://arxiv.org/abs/2602.06694'},{label:'RaBiT · 논문',href:'https://arxiv.org/abs/2602.05367'}]
    }
  },
  hyundai: {
    en: {
      title:'Cloud Infrastructure',meta:'Hyundai Motor Company · Cloud Solution Engineer · March 2020 – August 2021',
      lead:'Private-cloud networking, software-routing migration, and operational automation at Hyundai Motor Company. The work combines day-to-day OpenStack operations with repeatable deployment, diagnosis, and maintenance workflows.',
      tags:['OpenStack','Network troubleshooting','Software routing','Ansible','Provisioning','Operational runbooks'],
      groups:[
        {title:'Private-cloud networking & automation',sections:[
          ['OpenStack operations & troubleshooting','Handled network incidents and private-cloud deployment / configuration issues. Diagnosed failures across the cloud networking and configuration environment, and supported the resolution of operational issues.'],
          ['Hardware routing → software routing','Owned the migration from legacy hardware-based routers to software-based routing. This work connected network changes with the private-cloud environment that depended on them.'],
          ['Provisioning, health checks & maintenance','Used Ansible to automate provisioning, health checks, incident-response workflows, and maintenance. Turned repeated operational procedures into reusable automation.'],
          ['Runbooks & repeatable diagnosis','Standardized operational runbooks so diagnosis and configuration could be performed consistently. The objective was a repeatable operating process across deployment, monitoring, incidents, and maintenance.']
        ]}
      ]
    },
    ko: {
      title:'클라우드 인프라',meta:'Hyundai Motor Company · Cloud Solution Engineer · 2020.03 – 2021.08',
      lead:'현대자동차에서 수행한 프라이빗 클라우드 네트워크 운영, 소프트웨어 라우팅 전환, 운영 자동화 경험입니다. 일상적인 OpenStack 운영을 반복 가능한 배포·진단·유지보수 워크플로와 연결했습니다.',
      tags:['OpenStack','네트워크 장애 대응','소프트웨어 라우팅','Ansible','프로비저닝','운영 런북'],
      groups:[
        {title:'프라이빗 클라우드 네트워크·운영 자동화',sections:[
          ['OpenStack 운영과 장애 진단','네트워크 장애와 프라이빗 클라우드 배포·설정 문제를 처리했습니다. 클라우드 네트워크와 구성 환경에서 발생하는 장애를 진단하고 운영 문제를 해결했습니다.'],
          ['하드웨어 라우팅 → 소프트웨어 라우팅','기존 하드웨어 기반 라우터에서 소프트웨어 기반 라우팅으로의 전환을 담당했습니다. 네트워크 변경을 해당 네트워크에 의존하는 프라이빗 클라우드 환경과 함께 다뤘습니다.'],
          ['프로비저닝·헬스 체크·유지보수 자동화','Ansible로 프로비저닝, 헬스 체크, 장애 대응 워크플로와 유지보수를 자동화했습니다. 반복되는 운영 절차를 재사용 가능한 자동화로 전환했습니다.'],
          ['운영 런북과 반복 가능한 진단','진단과 설정이 일관되게 수행되도록 운영 런북을 표준화했습니다. 배포, 모니터링, 장애 대응, 유지보수를 반복 가능한 운영 프로세스로 연결했습니다.']
        ]}
      ]
    }
  }
};
