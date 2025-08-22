# 📚 BookNest

BookNest is a simple **Next.js + React** project built with the new App Router.  
It demonstrates a clean landing page, product listing, dynamic product details, and authentication pages (login/register).

---

## 🚀 Features
- **Landing Page** – Hero banner + featured books.
- **Products Page** – Lists products with name, description, price, and detail button.
- **Product Detail Page** – Dynamic route showing full details of a single product.
- **Login Page** – Simple authentication form with email & password.
- **Register Page** – Easy setup for user signup.
- **TailwindCSS Styling** – Modern responsive UI.

---

## 🛠️ Tech Stack
- [Next.js 15 (App Router)](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
---

## ⚡ Getting Started

1. Clone the repo
```bash
git clone https://github.com/your-username/booknest.git
cd booknest
2. Install dependencies
npm install
3. Run the dev server
npm run dev
```
---

## 📂 Project Structure
src/app/
├── page.jsx # Landing page
├── products/
│ ├── page.jsx # Products list
│ └── [id]/page.jsx # Product details
├── login/page.jsx # Login page
└── register/page.jsx # Register page (optional)
