# Osahon React Starter 🚀

A **production-ready React + TypeScript starter template** built for scalable web applications using a feature-based architecture.

This template is designed to remove setup fatigue and enforce **consistent, high-quality patterns** across projects.

---

## ✨ Tech Stack

- **React + TypeScript**
- **Vite**
- **Tailwind CSS**
- **shadcn/ui**
- **@tanstack/react-query**
- **Axios**
- **Zod**
- **ESLint + Prettier**

---

## 🎯 Why This Template Exists

This starter solves common problems in frontend projects:

- ❌ Inconsistent folder structures
- ❌ Inline API calls in components
- ❌ Repeated setup across projects
- ❌ UI inconsistency
- ❌ Weak separation of concerns

Instead, it enforces:

- Feature-based architecture
- Centralized data fetching
- Reusable UI and hooks
- Clean, readable code

---

## 📦 Getting Started

### 1. Use the template

Click **"Use this template"** on GitHub to create a new repo.

### 2. Install dependencies

```bash
npm install
```

### 3. Start development

```bash
npm run dev
```

---

## 🗂️ Folder Structure

```
src/
 ├─ app/              # app-level setup (providers, query client)
 ├─ components/       # reusable UI components
 │   ├─ ui/           # shadcn components
 │   └─ shared/       # custom shared components
 ├─ features/         # feature-based modules (core business logic)
 ├─ hooks/            # reusable cross-feature hooks
 ├─ lib/              # utilities, configs, helpers
 ├─ layouts/
 ├─ pages/
 ├─ styles/
 └─ main.tsx
```

---

## 🧠 Architecture Philosophy

### Feature-Based Structure (Mandatory)

Each feature lives in its own folder:

```
features/
 └─ users/
    ├─ users.api.ts
    ├─ users.hooks.ts
    ├─ users.types.ts
    ├─ UsersTable.tsx
    └─ UserForm.tsx
```

**Rules**

- ❌ Components do NOT fetch data directly
- ✅ Components consume hooks
- ✅ API logic lives in `*.api.ts`
- ✅ React Query logic lives in `*.hooks.ts`
- ✅ Types are explicit

---

## 🔄 Data Fetching (React Query)

All server communication uses React Query.

Example:

```ts
export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
```

**Benefits:**

- Automatic caching
- Consistent loading & error handling
- Predictable mutations

---

## 🎨 UI System

- Tailwind CSS for styling
- shadcn/ui for UI primitives
- Variant-based components encouraged

❌ No raw Tailwind buttons — use reusable components and variants instead.

---

## 📝 Environment Variables

Create a `.env` file based on `.env.example`:

```
VITE_API_BASE_URL=https://example.com/api
```

---

## ✅ Definition of Done (Quality Checklist)

Before marking any feature complete:

- No TypeScript errors
- Loading & error states handled
- API logic extracted
- Reusable logic abstracted
- UI follows system rules
- ESLint passes

---

## 📜 Scripts

```bash
npm run dev       # start dev server
npm run build     # build for production
npm run lint      # run eslint
npm run preview   # preview build
```

---

## 🧩 Customization Guide

After creating a new project from this template:

- Rename the app
- Update `.env`
- Remove placeholder files
- Start adding real features in `/features`

---

## 🔮 Roadmap (Optional Enhancements)

- Husky + lint-staged
- Auth scaffolding
- Form boilerplate (react-hook-form + zod)
- SPFx-specific version
- Next.js variant

---

## 🧑‍💻 Author

**Osahon Usuanlele**  
Frontend Engineer | React | TypeScript

---
