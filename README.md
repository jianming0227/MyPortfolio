# 🌐 3D Immersive Portfolio | React + Three.js

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Three.js](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.dot.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

An interactive, browser-based 3D self-introduction environment. This project bridges the gap between traditional web development and spatial computing, offering a navigable experience to explore my work and skills.

[🚀 View Live Demo](https://your-deployment-link.vercel.app) | [📂 View Portfolio](https://github.com/jianming0227/MyPortfolio)

---

## 🏗️ Technical Highlights

- **Spatial UI/UX:** Built with **React Three Fiber (R3F)** to render a responsive 3D canvas within a React lifecycle.
- **Optimized Assets:** Uses **GLTF/GLB** model compression and Draco loaders for fast initial load times.
- **Dynamic Lighting:** Interactive environment lighting and shadows that react to user input.
- **Physics & Motion:** Smooth camera transitions and hover effects powered by **Framer Motion 3D**.

---

## 🛠️ Tech Stack

| Category | Tools |
| :--- | :--- |
| **Framework** | React 18 (Vite) |
| **3D Engine** | Three.js / React Three Fiber |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion / GSAP |
| **Deployment** | Vercel / GitHub Pages |

---

## 🎮 Interactive Elements

* **Scroll-Bound Animations:** The 3D scene evolves as the user scrolls through different sections.
* **Raycasting:** Clickable 3D objects that trigger informational overlays about my projects.
* **Mouse Tracking:** Lighting and camera angles subtly follow the user's cursor movement.

---

## 📂 Project Structure

```text
├── src/
│   ├── components/       # Reusable 3D & UI components
│   ├── models/           # 3D Assets (GLB/GLTF)
│   ├── sections/         # Different areas of the portfolio (About, Work, Contact)
│   └── App.jsx           # Main Canvas and Scene setup

## 🚀 Getting Started
Clone the repository

Bash

git clone [https://github.com/jianming0227/MyPortfolio.git](https://github.com/jianming0227/MyPortfolio.git)
Install dependencies

Bash

npm install
Run the development server

Bash

npm run dev
👨‍💻 About Me
I am Leong Jian Ming, a Year 3 Multimedia Computing student passionate about creating interactive digital experiences. Currently exploring the intersection of WebGL and modern front-end frameworks.
