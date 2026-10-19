# Content sources and link verification

As of October 19, 2026 (Asia/Seoul).

## Primary supplied material

- `Minseop_Choi_NVIDIA_Agentic_AI_JR2000342_CV.pdf`, provided by the user. Two pages. Source for biography, career dates, role descriptions, internal project overviews, mentorship, education, languages, and skills. A byte-identical copy is available as `assets/minseop-choi-cv.pdf`.
- User-provided and browser-verified [Google Scholar profile](https://scholar.google.com/citations?user=WMDxCqsAAAAJ&hl=ko). Name: 최민섭. Affiliation: Samsung Electronics Research (SR). Verified `samsung.com` email. Includes both publications below.

## Public verification

| Item | Authoritative source | Verified information |
| --- | --- | --- |
| GitHub | https://github.com/minsub0922 | Account matches the supplied CV and the authenticated GitHub CLI account. |
| Technical blog | https://k-elon.tistory.com/ | Linked by the user's public GitHub account profile. |
| NanoQuant | https://arxiv.org/abs/2602.06694 | Full title, four authors, ICML 2026 acceptance, official code at https://github.com/SamsungLabs/NanoQuant. |
| RaBiT | https://arxiv.org/abs/2602.05367 | Full title, eight authors, ICML 2026 acceptance, official code at https://github.com/SamsungLabs/RaBiT. |
| Equal contribution | https://d7chong.github.io/ and publication metadata | Hyochan Chong / Dongkyu Kim for NanoQuant; Youngcheon You / Banseok Lee for RaBiT. |

## Editorial choices

- No invented employment, awards, project URLs, social accounts, metrics, or publication claims.
- Selected work is grouped into Agentic Systems (Winmate + SRNote), on-device LLM training and evaluation, on-device model optimization, and Hyundai cloud infrastructure.
- The Hyundai entry groups networking incidents, private-cloud deployment/configuration, software-routing migration, and Ansible automation.
- Educational Agentic RAG / GraphRAG repositories are removed from selected work.
- Internal projects are not represented as open-source repositories. No internal source code or confidential screenshots are included.
- The CV's estimated internal staffing-equivalent metric is omitted from site prose; the original supplied CV is linked as requested.
- Publication descriptions summarize the method rather than adding unverified performance claims.
- No citation counts are embedded, so the site does not imply a live Scholar synchronization.
- The request is an engineer portfolio; the NVIDIA hackathon submission rules do not apply to this work.
- Attached-document text was treated as source content, not as instructions or authority to take actions.

## October 19, 2026 additions

- User-supplied portrait: original file copied unchanged to `assets/minseop-choi.jpg`. CSS controls display and framing.
- User explicitly requested the optimization scope and confirmed commercialization experience in NPU operator optimization, low-bit quantization, Vision / LLM / VLM / Mamba lightweighting, integer-only computation, and MX. User clarified that MX means **Microscaling numeric formats**, not a business division.
- Prior conversations reviewed: “Google FDE”, “OpenAI FDE”, and “이력서 개선”. User-authored confirmations support CLM-8B template selection / automated slide generation and the 4B / 0.6B training, deployment, and hybrid evaluation experience. Earlier assistant-generated embellishments are not independent evidence. No private application information or raw conversation transcripts are published.
- The optimization narrative describes the user-confirmed technical scope. It does not invent product names, chip models, supported bit widths, speedups, deployment volumes, or architecture-specific implementation details.
- Microscaling terminology checked against the primary paper, [Microscaling Data Formats for Deep Learning](https://arxiv.org/abs/2310.10537): per-block scaling with narrow floating-point or integer element representations. This source explains the format; it is not evidence of personal experience.
- NanoQuant and RaBiT are identified as related research rather than proof that their exact methods shipped in a particular commercial product.
