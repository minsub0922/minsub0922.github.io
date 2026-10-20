# Design references

Reviewed October 19, 2026. These are references for information design and visual hierarchy; no source code, page copy, photographs, or brand assets were copied.

| Reference | What informed this site |
| --- | --- |
| [Jon Barron](https://jonbarron.info/) | Name and affiliation first, concise biography with direct profile links, and publication entries that prioritize authorship and substance. |
| [Shu Ding](https://shud.in/) | Restrained typography, ample whitespace, personal introduction, simple navigation, direct profile links. |
| [Lee Robinson](https://leerob.com/) | A clear first-person engineering introduction, readable content, and direct access to writing. |
| [Hyochan Chong](https://d7chong.github.io/) | A particularly relevant research-engineer reference: compact publication records with explicit authorship, venue, paper, and official code links. NanoQuant and RaBiT are shared publications. |

## Direction

A personal engineer and researcher profile. The page begins with the real name, current role, concise biography, education/location, and Email / CV / Scholar / GitHub / Blog links. There is no system-architecture illustration, marketing headline, or hero CTA.

The user-supplied portrait is positioned to the left of the identity and biography. The original image is served unchanged; aspect ratio and responsive positioning are handled in CSS.

Selected work is a responsive 2 × 2 grid. Each card pairs a simple original SVG diagram with project names and technical keywords. The groups are Agentic Systems (Winmate + SRNote); on-device LLM training and evaluation; on-device model optimization; and Hyundai cloud infrastructure. Long-form engineering details live in accessible modal dialogs. Winmate and SRNote remain separate narratives within their shared Agentic Systems group.

The diagrams explain the general theme of each card, independently of Minseop's projects:

- Agentic Systems: goal, agent reasoning, context / memory, tools, action, and observation feedback.
- Training & Evaluation: a dataset, learned network parameters, evaluation, and a parameter-update loop.
- Model Optimization: a dense model, a compact representation, and efficient device inference; memory, latency, and energy are qualitative objectives, not measured results.
- Cloud Infrastructure: applications / services on virtualized compute / storage and networking / physical infrastructure.

Project names, model sizes, language/task counts, specific formats, and vendor/tool names are excluded from the illustrations. The card labels and detailed project narratives retain the actual experience. Diagrams are original conceptual drawings; no quantitative size ratio or deployed architecture is implied.


Publication entries are text-focused, with year, venue, authors, description, and paper / official code / Scholar links. Experience, mentorship, and technical focus follow. The portrait is supplied by the user. No fabricated screenshots or photographs are included. The layout uses a narrow reading width, restrained blue links, small contextual labels, and clear section boundaries. Core profile and project content remains readable without JavaScript; project details, Korean translation, theme preferences, and citation copying enhance it.
