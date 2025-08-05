 # 📖 Library Management Frontend

A user-friendly frontend for the Library Management System built with **React**, **TypeScript**, and **Tailwind CSS**. It interacts with the backend API to display books, view details, and borrow books.

---

## ⚙️ Tech Stack

- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM**
- **Lucide React**
- **React Hook Form + Zod**
- **Shadcn UI**

---

 

## 🧪 Features

- ✅ View all available books
- ✅ See detailed view of a single book
- ✅ Borrow a book (availability checked)
- ✅ Form validation using Zod
- ✅ Loading, error, and empty states
- ✅ Responsive design (Mobile-first)

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/library-management-frontend.git
cd library-management-frontend
```

### 2. Install dependencies

```bash
npm install
```

---

## 🚀 Running the App

### Development mode:

```bash
npm run dev
```

Make sure the backend is running at the correct port (e.g. `http://localhost:5000`), and update the API base URL in your Axios instance if needed.

---

## 🔌 API Integration

This frontend interacts with the following backend API endpoints:

| Method | Endpoint           | Usage                |
|--------|--------------------|----------------------|
| GET    | `/api/books`       | Fetch all books      |
| GET    | `/api/book/:id`    | Fetch single book    |
| POST   | `/api/borrow`      | Borrow a book        |

---

 

## 🧑‍💻 Author

- **Eliash**  
 
 
