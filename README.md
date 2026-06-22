# 🏋️ CoachBoard

**A management dashboard for professional sports coaches, built with Next.js, TypeScript, and Tailwind CSS.**

_Work in Progress – Currently building the core features, starting with client management!_

CoachBoard helps independent sports coaches manage their daily activity: clients, training sessions, attendance, and progress tracking. All in one simple tool, replacing paper notebooks or scattered spreadsheets. Built as a portfolio project to demonstrate real-world frontend architecture, TypeScript modeling, and state management.

🔗 **Live Demo** _(coming soon)_

---

## 🛠️ **Technologies Used**

| Technology       | Purpose                                                       |
| ---------------- | ------------------------------------------------------------- |
| **Next.js**      | React framework with App Router for file-based routing.       |
| **TypeScript**   | Strict typing of domain data (members, sessions, attendance). |
| **Tailwind CSS** | Utility-first styling for a fast, consistent design system.   |
| **Zustand**      | Lightweight state management shared across pages.             |
| **localStorage** | Client-side data persistence (no backend for V1).             |
| **Vercel**       | Hosting for deployment.                                       |

---

## 🎨 **Design & UX Choices**

### **Clean, focused dashboard**

- **Light theme** with a custom teal/cyan accent palette, built as reusable Tailwind design tokens.
- **Card-based layout** to organize clients, sessions, and stats at a glance.
- **Subtle hover effects and transitions** for a polished, professional feel.

### **User Flow**

1. **Dashboard** showing key stats and recent/upcoming sessions at a glance.
2. **Client list** with quick access to each client's full profile.
3. **Client detail page** to view, edit, or archive a member.
4. **Session management** (in progress) to plan and track training sessions.
5. **Attendance tracking** (planned) to check off present members per session.

### **Why This Design?**

- Built for a **real professional workflow**, not a generic CRUD demo: a coach managing several clients across different disciplines (running, crossfit, weight management, strength training, etc.).
- **Feature-based architecture**: each domain (clients, sessions, attendance, planning) is self-contained with its own components, hooks, and types.
- **Type-safe data modeling**: clear relationships between Members, Sessions, and Attendance, designed to scale toward a real backend later.

---

## 🎯 **Features**

### ✅ **Current Features**

- Add, edit, and archive clients (members).
- Client detail page with full profile view.
- Persistent data storage via localStorage (Zustand + persist middleware).
- Reusable UI components (buttons, inputs, cards).
- Custom design system with a dedicated color palette.

### 🚀 **Upcoming Features (Work in Progress)**

- **Sessions module**: create, edit, and list training sessions (date, time, duration, type, location), linked to clients.
- **Attendance module**: quick checklist to mark present/absent members per session.
- **Stats dashboard**: monthly attendance rate, session count, most active members.
- **Export/Import**: download and re-upload data as a JSON file (backup without a backend).
- **Planning view**: calendar overview of upcoming sessions.
- Polished responsive design for mobile and tablet.
- Dark mode.

---

## 💡 **Why This Project?**

### **Learning Goals**

- Practice **Next.js App Router**: file-based routing, dynamic routes, Server vs Client Components.
- Master **TypeScript** for modeling real business entities and their relationships.
- Learn **state management with Zustand**, including persistence across sessions.
- Build a **consistent design system** with Tailwind CSS v4 custom theme tokens.
- Think through **data architecture** before adding a real backend (localStorage now, Supabase as a possible next step).

### **Challenges Tackled**

- **Data modeling**: defining clear relationships between Members, Sessions, and Attendance from the start.
- **State persistence**: keeping client-side data reliable across page reloads without a backend.
- **Dynamic routing**: handling Next.js 15+ async `params` for client detail pages.
- **Design consistency**: building a reusable color palette and UI components instead of hardcoded one-off styles.

---

## 📢 Contribution & Feedback

This project is open source! Contributions and feedback are welcome:

Suggestions: New features, UI improvements, or bug fixes. Issues: Open an issue or contact me directly.

---

## 📧 Get in Touch

Have questions, suggestions, or just want to chat about the project? I'd love to hear from you! 😊

📩 Email me at: aurelieraout@gmail.com Whether it’s feedback, collaboration ideas, or even a friendly "hello," don’t hesitate to reach out!
