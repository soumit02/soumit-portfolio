# Soumit Dey | Personal Portfolio

A modern, responsive, dark-themed portfolio website that presents my projects, research, experience and skills as an AI Engineer and Computer Science graduate.

## Live Website

**[https://soumit-portfolio.vercel.app](https://soumit-portfolio.vercel.app)**

> Replace this link with your real Vercel URL after deployment.

## About Me

I am a Computer Science and Engineering graduate from the University of Asia Pacific (CGPA 3.92/4.00), based in Dhaka, Bangladesh. I build AI agent systems, Retrieval-Augmented Generation (RAG) applications and LLM-powered tools using Python, FastAPI, CrewAI, LangChain and ChromaDB.

I also have an Embedded Systems and IoT background. I built an Arduino-based robot that won 2nd Runner-Up at Robo Expo 2.0, delivered two technical workshops as a trainer at eChithi, and presented my Smart-GaitBox research at IEEE MARSCON 2026.

I am looking for AI Engineering, Machine Learning, Generative AI and Software Engineering roles.

## Key Features

- Single-page design with smooth scrolling
- Sticky navigation bar that highlights the active section, with a mobile menu
- Fully responsive layout for mobile, tablet and desktop
- Dark theme with a restrained cyan accent
- Featured project cards with screenshots, tech tags, key features and live demo, GitHub and API docs links
- Subtle hover effects: card lift, image zoom, animated menu underline and button feedback (hover effects are disabled on touch devices and for users who prefer reduced motion)
- Contact section with clickable email, phone, LinkedIn and GitHub links and a message form that opens the visitor's email app
- Downloadable CV
- SEO metadata, Open Graph tags and a favicon
- All content is stored in separate data files, so updating the portfolio does not require editing the page components

## Sections

1. **Home** – introduction, headline and quick links
2. **About** – background and interests
3. **Education** – B.Sc. in CSE and HSC
4. **Projects** – Jibon Shohayok, Leo, Bangla Knowledge Base Chatbot and Multi-Tasking Robot
5. **Research** – Smart-GaitBox (IEEE MARSCON 2026)
6. **Experience** – System Support Executive (Intern) at eChithi
7. **Certifications** – Machine Learning course, Robo Expo 2.0 and the research presentation
8. **Skills** – grouped by category
9. **Awards & Achievements** – Vice-Chancellor's Award (5 times), Dean's Award (3 times) and Robo Expo 2.0 2nd Runner-Up
10. **Contact** – Get In Touch

## Technologies Used

| Area | Tools |
|---|---|
| Framework | Next.js 14 (App Router), React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS 3, custom CSS transitions |
| Font | Inter (Google Fonts) |
| Hosting | Vercel, with automatic deploys from GitHub |
| Version control | Git and GitHub |
| Editor | VS Code |

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/ projects/ research/
│   │   └── experience/ certificates/ awards/
│   └── Soumit_Dey_Master_CV.pdf
├── src/
│   ├── app/            # layout.tsx, page.tsx, globals.css
│   ├── components/     # Nav.tsx, Sections.tsx, ContactSection.tsx
│   └── data/           # profile.ts, projects.ts, other.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Run Locally

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
git clone https://github.com/soumit02/soumit-portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

To check a production build:

```bash
npm run build
npm start
```

## Updating the Content

| What to change | File |
|---|---|
| Name, headline, about text, contact details, links, profile photo | `src/data/profile.ts` |
| Projects | `src/data/projects.ts` |
| Education, research, experience, certifications, skills, awards, navigation | `src/data/other.ts` |
| Images | `public/images/...` |
| CV | replace `public/Soumit_Dey_Master_CV.pdf` |
| Colors | `tailwind.config.ts` |

## Deployment

The site is deployed on Vercel. Every push to the `main` branch builds and deploys the update automatically.

1. Push the code to GitHub.
2. Import the repository on [vercel.com](https://vercel.com).
3. Click **Deploy**.

## Contact

Feel free to connect with me for opportunities or collaboration.

- Email: soumitdey2002@gmail.com
- LinkedIn: https://www.linkedin.com/in/soumit-dey-b6632827a/
- GitHub: https://github.com/soumit02
