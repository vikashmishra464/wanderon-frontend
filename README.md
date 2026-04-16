# WanderOn - Modern Authentication UI

The frontend for WanderOn is a sleek, premium authentication interface built with React and Vite. It emphasizes a modern glassmorphic aesthetic with smooth, interactive transitions.

## ✨ Highlights

- **Premium UI Design**: A stunning glassmorphic interface with vibrant gradients and deep shadows.
- **Dynamic Animations**: Smooth page transitions and micro-interactions powered by Framer Motion.
- **Robust State Management**: Centralized authentication state using React's Context API.
- **Protected Routing**: Intelligent route management to secure user-only pages.
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile viewing.
- **Visual Feedback**: Real-time loading states and error notifications for a seamless experience.

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Styling**: Vanilla CSS (Modern Design System)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Routing**: React Router DOM

## 📂 Architecture

```text
frontend/
├── src/
│   ├── assets/     # Static images and icons
│   ├── context/    # AuthContext for global state
│   ├── pages/      # Full-page components (Login, Register, Dashboard)
│   ├── App.jsx     # Route configuration
│   ├── index.css   # Main design system & global styles
│   └── main.jsx    # Entry point
└── public/         # Static public assets
```

## ⚙️ Configuration

Create a `.env` file in the root of the `frontend` directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## 🏁 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🎨 Design Philosophy

WanderOn utilizes a "premium-first" approach. By combining HSL color systems with dynamic glassmorphism, the app provides an immersive experience that feels state-of-the-art. Every interaction is designed to feel fluid and responsive.

---
*Built for the modern web.*
