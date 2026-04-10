# 🎬 Movie Manager App

A simple React application that allows users to add movies with their name, genre, and duration, then display them dynamically as cards.

---

## 🚀 Features

* Add a movie with:

  * Name
  * Genre (dropdown list)
  * Duration (range slider)
* Display added movies instantly in a card layout
* Clean UI using React Bootstrap + custom CSS
* Component-based architecture

---

## 🛠️ Technologies Used

* React (Vite)
* React Hooks (`useState`)
* React Bootstrap
* CSS

---

## 📁 Project Structure

```id="n3tfk9"
src/
│
├── components/
│   ├── MovieManager.jsx   # Handles state and renders movie list
│   ├── moviesForm.jsx     # Form for adding movies
│   ├── movie.jsx          # Movie card component
│
├── App.jsx                # Root component
├── App.css                # Styling
├── index.css              # Global styles
├── main.jsx               # Entry point
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```id="u1f7j1"
git clone <your-repo-link>
```

2. Navigate into the project:

```id="t0fwqk"
cd movie-manager
```

3. Install dependencies:

```id="r7n2k0"
npm install
```

4. Run the project:

```id="z8q1ls"
npm run dev
```

---

## 💡 How It Works

* The form component collects movie data.
* Data is sent to `MovieManager.jsx`.
* Movies are stored in state using `useState`.
* Movies are rendered using `.map()` into reusable card components.

---

## 📌 Future Improvements

* Delete movie functionality
* Edit movie details
* Save movies using localStorage
* Add filtering by genre

---

## 👨‍💻 Author

Mohamed Ibrahim

---

## 📄 License

This project is for educational purposes.
