<a href="https://github.com/alessandro-arg/altair" target="_blank">
  <picture>
    <source srcset="https://github.com/alessandro-arg/altair/blob/main/public/logo.png" media="(prefers-color-scheme: dark)">
    <img src="https://github.com/alessandro-arg/altair/blob/main/public/logo.png" width="80" alt="Altair logo" />
  </picture>
</a>

#

![Repo Size](https://img.shields.io/github/repo-size/alessandro-arg/altair?style=for-the-badge&color=6366F1)
![Last Commit](https://img.shields.io/github/last-commit/alessandro-arg/altair?style=for-the-badge&color=818CF8)

**Altair** is an **AI-powered browser IDE** that helps developers **build, edit, run, and iterate on projects directly in the browser** using intelligent AI assistance. It combines a modern coding workspace, live runtime tooling, multi-model AI integrations, and developer-focused workflows into a single polished environment.

> A practical and modern way to code, preview, and collaborate with AI inside a full in-browser development workspace.

### 🌍 Live Demo

🖥️ <a href="https://github.com/alessandro-arg/altair" target="_blank">Altair</a>

##

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| **🤖 AI Coding Assistant** | Generate, refactor, and improve code with integrated AI support. |
| **🧠 Multi-Model AI Support** | Built with AI SDK integrations for Anthropic and Google providers. |
| **💻 Browser-Based IDE** | Work directly in the browser with a real coding environment. |
| **📝 Advanced Code Editor** | CodeMirror 6 setup with language support, search, theming, minimap, and indentation markers. |
| **📦 Live Runtime Sandbox** | WebContainers power live project execution without leaving the browser. |
| **🖥 Integrated Terminal** | Xterm.js terminal support for a more complete dev workflow. |
| **⚙️ Workflow Automation** | Inngest-powered workflows and agents coordinate background AI tasks. |
| **🔐 Authentication Ready** | Clerk integration provides authentication and user management. |
| **📊 Visual Developer UX** | Rich UI components, motion, charts, flows, and panel systems for a polished IDE experience. |
| **📍 Type-Safe Foundation** | TypeScript + Zod ensure safer input, validation, and app logic. |

##

### 🛠 Tech Stack

#### IDE & Interface

- **Next.js 16** - App Router and application shell
- **React 19** + **TypeScript**
- **Tailwind CSS 4** - Modern utility-first styling
- **Radix UI** - Accessible UI primitives
- **CodeMirror 6** - Editor engine with language tooling
- **Allotment** + **react-resizable-panels** - Resizable IDE layouts
- **Motion** - Smooth animations and interactions
- **Lucide React** - Icon system

#### AI & Workflows

- **AI SDK** - Unified AI interaction layer
- **@ai-sdk/anthropic** - Anthropic model support
- **@ai-sdk/google** - Google model support
- **Inngest** - Background workflows and event-driven jobs
- **@inngest/agent-kit** - Agent orchestration toolkit
- **Firecrawl** - Web scraping and retrieval tooling

#### Runtime & Developer Tools

- **WebContainers API** - Run apps directly in the browser
- **Xterm.js** - Embedded terminal experience
- **Shiki** - Syntax highlighting
- **Streamdown** - Streaming markdown with code, math, and mermaid support
- **Octokit** - GitHub API integration
- **Sentry** - Error monitoring and observability

#### State, Validation & Forms

- **Zustand** - Lightweight state management
- **Zod** - Schema validation
- **React Hook Form** + **@hookform/resolvers**
- **@tanstack/react-form** - Form state and validation tooling

> *Note:* Exact application structure and environment configuration may vary depending on deployment setup and active integrations.

##

### 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/alessandro-arg/altair.git
cd altair
npm install
npm run dev
```

Then open:

```
http://localhost:3000
```

### ⚙️ Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_************************"
CLERK_SECRET_KEY="sk_test_************************"

# Inngest
INNGEST_EVENT_KEY="inngest_************************"
INNGEST_SIGNING_KEY="signkey_************************"

# AI Provider Keys
# -----------------------------------------------------------------------------
# ANTHROPIC_API_KEY="sk-ant-************************"
# GOOGLE_GENERATIVE_AI_API_KEY="************************"
# OPENAI_API_KEY="sk-************************"

# Optional Integrations
# -----------------------------------------------------------------------------
# FIRECRAWL_API_KEY="fc-************************"
# SENTRY_AUTH_TOKEN="************************"
```

##

### 📂 Project Structure

```text
/
├─ public/                       # static assets (icons, images, app visuals, etc.)
│
├─ src/
│  ├─ app/                       # Next.js App Router (routes + layouts)
│  │  ├─ (auth)/                 # authentication routes and Clerk pages
│  │  ├─ (workspace)/            # main IDE workspace routes
│  │  ├─ api/                    # route handlers / server endpoints
│  │  └─ layout.tsx
│  │
│  ├─ components/
│  │  ├─ ui/                     # reusable UI primitives
│  │  ├─ editor/                 # editor-related components
│  │  ├─ terminal/               # terminal components
│  │  ├─ workspace/              # IDE layout, panels, toolbars, sidebars
│  │  └─ shared/                 # shared components across features
│  │
│  ├─ features/                  # domain-first application logic
│  │  ├─ ai/                     # AI prompts, chats, completions, model logic
│  │  ├─ editor/                 # editor state, commands, extensions
│  │  ├─ files/                  # file tree, file actions, parsing
│  │  ├─ terminal/               # terminal session logic
│  │  ├─ workspace/              # layout, tabs, panels, IDE orchestration
│  │  ├─ workflows/              # AI workflows and automation
│  │  └─ auth/                   # auth helpers and guards
│  │
│  ├─ lib/
│  │  ├─ env.ts                  # typed env access + validation
│  │  ├─ utils.ts                # utility helpers
│  │  ├─ constants.ts            # shared constants
│  │  └─ validators/             # shared Zod schemas
│  │
│  ├─ hooks/                     # React hooks
│  ├─ styles/                    # global styles
│  ├─ store/                     # Zustand stores
│  └─ types/                     # shared TypeScript types
│
├─ .env.example
├─ components.json               # shadcn / UI config
├─ next.config.ts
├─ eslint.config.mjs
├─ tsconfig.json
├─ package.json
└─ README.md
```

##

### 📜 Scripts

| Command         | Action                   |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build production version |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

### 🚀 Deployment

#### **Deploy to Vercel (Recommended)**

```bash
npm install -g vercel
vercel
```

Ensure environment variables are set in the Vercel dashboard.

##

### 🤝 Contributing

```bash
git checkout -b feature/YourFeature
git commit -m "feat: add YourFeature"
git push origin feature/YourFeature
```

Open a Pull Request once done.

##

Made with ❤️ by **Alessandro Argenziano**
