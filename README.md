React Todo App - Documentation

# 📝 React Todo App

A responsive and user-friendly Todo App built with **React**. It allows users to manage daily tasks with ease — add, update, complete, or delete todos. Data is persisted using **localStorage** so users won't lose their tasks on page reload.

## ✨ Features

-   ✅ Add new todos
-   ✏️ Edit and update existing todos
-   ❌ Delete todos
-   ✔️ Mark todos as completed
-   💾 Save todos to localStorage
-   🚫 Show empty state image when no todos exist
-   💻 Responsive and accessible UI

## 🔧 Technologies Used

-   React (with hooks: `useState`, `useEffect`)
-   JavaScript (ES6+)
-   HTML5 & CSS3
-   Font Awesome (for icons)
-   localStorage (for data persistence)

## 📁 Project Structure

TODO-APP/
├── public/
│ └── images/
│ └── no-todos.png # Image used for empty todos
├── src/
│ ├── components/
│ │ └── TodoList.jsx # Main Todo component
│ ├── utils/
│ │ └── textUtils.js # Utility for capitalizing words
│ ├── assets/
│ │ └── css/
│ │ └── todo.css # CSS file for styling
│ ├── App.jsx
│ ├── index.js
├── package.json
├── README.md

## 🖼️ UI Preview

![Todo App Preview](/src/assets/todo-app.jpeg)

## 🚀 Getting Started

### Prerequisites

-   Node.js (>= 14)
-   npm or yarn

📌 Notes

-   The app saves todos in `localStorage`, so reloading won't lose your data.
-   Input validation is included: update field cannot be empty.
-   Responsive design ensures mobile usability.


<!-- 1. **Clone the repository**

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

4. Open http://localhost:3000 in your browser.

## 🧠 Folder/Asset Usage

### CSS

Import your CSS file in the component where it's needed:

```jsx
import '../assets/todo.css';
```

### Image (Empty Todo)

If your image is in `public/images/no-todos.png`, you can use it like this:

```jsx
<img src='/images/no-todos.png' alt='No tasks' />
```



## 📦 Build for Production

```bash
npm run build
```

## 🧑💻 Author

-   **Your Name**
-   GitHub: https://github.com/your-username -->

## 📃 License

This project is licensed under the MIT License.

<!-- ## 🏁 Deployment Tips

If you're deploying to GitHub Pages or a subdirectory:

```jsx
<img src={`${process.env.PUBLIC_URL}/images/no-todos.png`} alt='No tasks' />
```

## 🗂️ Future Improvements

-   Drag-and-drop task reordering
-   Dark mode toggle
-   Todo categories/tags
-   Firebase or MongoDB backend support -->
