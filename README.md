# AI Video Shorts Skills Suite

A unified collection of AI coding agent skills and plugins for creating automated, high-retention vertical short-form videos (YouTube Shorts, TikTok, Instagram Reels) entirely through code.

Compatible with **Google Antigravity**, **Claude Code**, **Cursor**, and **Gemini CLI**.

---

## 🌟 Included Skills & Capabilities

| Skill / Plugin | Purpose | Tech Stack |
| :--- | :--- | :--- |
| **`faceless-shorts`** | 100% code-driven vertical video generator with word-synced subtitles across 6 distinct narrative styles (Deep Dive 3D, Night File 3D, Inside Out, Stick Story, Paper Atlas, Tall Tale 3D). | Three.js, Canvas2D, Headless Chrome, FFmpeg |
| **`cartoon-3d-short`** | 2D illustrated character cards in a colourful, ink-outlined 3D world with smooth gliding cameras and post-processing passes. | Three.js, Remotion, Canvas2D, WebGL |
| **`polyfork`** | Search, download, and seamlessly integrate thousands of low-poly 3D assets and themed kits (buildings, vehicles, terrain, characters) via MCP tools. | Polyfork Catalog, Model-Viewer, Three.js |
| **`voicestudio`** | Local neural speech generation, voice cloning, audio mastering, and word-boundary subtitle alignment. | VoiceStudio REST / MCP, Edge TTS, Whisper |

---

## 📁 Repository Structure

```text
ai-shorts-skills-suite/
├── skills/                     # Standalone skills (SKILL.md definitions)
│   ├── faceless-shorts/        # Code-driven faceless production engine
│   ├── cartoon-3d-short/       # 2D characters in 3D stylized scenes
│   ├── polyfork/               # 3D low-poly asset explorer
│   ├── voicestudio/            # AI voice generation & audio mastering
│   └── voicestudio-maintainer/ # Maintenance & diagnostics tools
├── plugins/                    # Namespaced agent plugins (plug-and-play)
│   ├── faceless-shorts/        # Plugin bundle with rules & assets
│   ├── cartoon-3d-short/       # Plugin bundle with styles & templates
│   ├── polyfork/               # Plugin bundle with MCP config
│   └── voicestudio/            # Plugin bundle with audio skills
├── rules/                      # AI Agent behavioral rules (AGENTS.md)
│   ├── faceless-shorts.md      # Production guidelines & camera rules
│   ├── cartoon-3d-short.md     # Visual style bible & ink guidelines
│   └── polyfork.md             # Coordinate systems & scaling guidelines
├── scripts/                    # Automated installation helpers
│   ├── install-windows.ps1     # 1-click installer for Windows
│   └── install-mac-linux.sh    # 1-click installer for macOS / Linux
├── examples/                   # Sample project templates & script formats
└── README.md                   # Documentation & usage guide
```

---

## 🚀 Quick Start & Installation

### Option 1: Automated Install (Recommended)

#### On Windows (PowerShell):
```powershell
.\scripts\install-windows.ps1
```

#### On macOS / Linux:
```bash
chmod +x ./scripts/install-mac-linux.sh
./scripts/install-mac-linux.sh
```

### Option 2: Manual Install

To install as namespaced plugins in your AI environment:
- **Windows**: Copy the folders inside `plugins/` to `%USERPROFILE%\.gemini\config\plugins\`
- **macOS / Linux**: Copy the folders inside `plugins/` to `~/.gemini/config/plugins/`

To install as standalone agent skills:
- **Windows**: Copy the folders inside `skills/` to `%USERPROFILE%\.gemini\config\skills\`
- **macOS / Linux**: Copy the folders inside `skills/` to `~/.gemini/config/skills/`

---

## 💡 How to Use with AI Coding Agents

Once installed, simply prompt your coding assistant naturally:

- **Create a 3D Short**:
  > *"Create a 60-second vertical short explaining how honey never spoils, using the faceless-shorts Deep Dive 3D style."*

- **Create an Animated Cartoon Short**:
  > *"Make a funny historical story short in the 2D characters in 3D world cartoon style about the invention of the sandwich."*

- **Discover 3D Models**:
  > *"Use the polyfork skill to search for desert dunes and ancient palm trees for our Three.js background."*

- **Generate Audio & Subtitles**:
  > *"Generate natural voiceover narration for this script and extract millisecond-aligned word timestamps for captions."*

---

## 📤 Publishing This Suite to Your GitHub

Follow these steps to upload this repository to your GitHub account:

1. Open your terminal in this repository folder:
   ```bash
   cd ai-shorts-skills-suite
   ```

2. Initialize Git and commit the files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Video Shorts Skills Suite"
   ```

3. Create a new repository on [GitHub](https://github.com/new) (e.g. `ai-shorts-skills-suite`).

4. Link and push to your remote repository:
   ```bash
   git remote add origin https://github.com/<YOUR_USERNAME>/ai-shorts-skills-suite.git
   git branch -M main
   git push -u origin main
   ```

---

## 📜 Credits & Acknowledgments

This suite aggregates and builds upon incredible open-source innovations:
- **Polyfork** by [Lucas Martinic](https://github.com/lucas-martinic/polyfork-catalog) (CC BY 4.0 low-poly 3D models).
- **Claude Animated Shorts** by [mromidev](https://github.com/mromidev/claude-animated-shorts) (Three.js & Remotion cartoon rendering).
- **VoiceStudio** by [debpalash](https://github.com/debpalash/VoiceStudio) (AI speech & transcription platform).
- **Faceless Shorts Engine** (Code-driven 9:16 vertical video production).

---

## 📄 License

This repository is distributed under the [MIT License](LICENSE).
Individual 3D assets and upstream projects retain their respective open-source licenses.
