Here is a professional and structured **README.md** file for your Leo Art Gallery application. This is designed to highlight your skills in React, state management, and UI design, which is perfect for your software engineering coursework.

---

# 🦁 Leo Art Gallery

A sophisticated, persistent digital art gallery built with **React**, **Tailwind CSS**, and **LocalStorage**. This application features a curated collection of permanent artworks alongside a user-driven contribution system.

## 🖼️ Project Overview

The Leo Art Gallery is designed to provide a seamless visual experience. It blends a "Featured Collection" (hardcoded projects) with a "Community Gallery" where users can add their own art pieces. The application ensures that user contributions are preserved even after a browser refresh using custom React hooks and LocalStorage synchronization.

## 🚀 Key Features

* **Persistent Storage:** Uses a custom `useState` initializer to merge static data with `localStorage` data, ensuring no loss of user-added projects.
* **Curated & Community Sections:** A blend of 5 permanent featured artworks and unlimited user-added projects.
* **Real-time Search:** A dedicated `ProjectsSearch` component that filters the gallery by title as the user types.
* **Responsive Design:** Fully mobile-responsive layout using Tailwind CSS, featuring a sophisticated "Serif" aesthetic.
* **Dynamic UI:** Includes a dedicated project submission form and an "About" section for gallery context.

## 🛠️ Tech Stack

* **Frontend:** React.js (Hooks: `useState`, `useEffect`)
* **Styling:** Tailwind CSS (Modern Serif/Gallery aesthetic)
* **Data Persistence:** Browser LocalStorage API
* **Icons:** Lucide-React / Emoji integration

## 📂 Project Structure

```text
src/
├── components/
│   ├── About.jsx            # Gallery description and mission
│   ├── ProjectsCard.jsx     # Grid display for project items
│   ├── ProjectsForm.jsx     # Submission form for new projects
│   ├── ProjectsSearch.jsx   # Search input with live filtering
│   └── StaticProjects.js    # Data file for permanent artworks
├── App.js                   # Main logic, state management, and persistence
└── index.js                 # Entry point

```

## ⚙️ Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/leo-art-gallery.git

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the application:**

```bash
   npm start

```

## 💡 Technical Implementation Details

### Data Persistence Logic

To avoid the common "flicker" of loading data after a component mounts, this project uses **Lazy State Initialization**:

```javascript
const [projects, setProjects] = useState(() => {
  const saved = localStorage.getItem("gallery_projects");
  const userProjects = saved ? JSON.parse(saved) : [];
  
  // Logic to prevent duplication of featured items
  const uniqueUserProjects = userProjects.filter(
    (up) => !featuredProjects.some((fp) => fp.id === up.id)
  );

  return [...featuredProjects, ...uniqueUserProjects];
});

```

### Search Functionality

The search is implemented using a case-insensitive filter on the master `projects` state, allowing users to find specific pieces instantly across both collections.



