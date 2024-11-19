// src/App.js
import React from "react";
import BlogList from "./components/BlogList";
import "./App.css";

const App = () => {
  // Static JSON data with Picsum images, fallback to local images on error
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Components",
      author: "John Doe",
      content: "React components are the building blocks of any React application. They help in breaking down the UI into reusable pieces...",
      date: "October 10, 2024",
      image: "https://picsum.photos/id/237/600/400",
      fallbackImage: "/images/default1.jpg"
    },
    {
      id: 2,
      title: "A Guide to React Props",
      author: "Jane Smith",
      content: "Props are a mechanism to pass data from one component to another. They make components more reusable by allowing them to receive data...",
      date: "October 15, 2024",
      image: "https://picsum.photos/id/238/600/400",
      fallbackImage: "/images/default2.jpg"
    },
    {
      id: 3,
      title: "State Management in React",
      author: "Alex Johnson",
      content: "State is one of the most important concepts in React for managing data within a component. By using state, you can make components dynamic...",
      date: "October 20, 2024",
      image: "https://picsum.photos/id/239/600/400",
      fallbackImage: "/images/default3.jpg"
    },
    {
      id: 4,
      title: "Introduction to React Hooks",
      author: "Emily Davis",
      content: "React Hooks allow you to use state and other React features in function components without needing a class component...",
      date: "October 25, 2024",
      image: "https://picsum.photos/id/240/600/400",
      fallbackImage: "/images/default4.jpg"
    },
    {
      id: 5,
      title: "React Router for Navigation",
      author: "Michael Brown",
      content: "React Router is a powerful library for handling navigation and routing in React applications. It helps you build single-page applications...",
      date: "October 30, 2024",
      image: "https://picsum.photos/id/241/600/400",
      fallbackImage: "/images/default5.jpg"
    },
    {
      id: 6,
      title: "Building Forms with React",
      author: "Sarah Lee",
      content: "Handling forms in React can be a bit challenging, but with controlled components and a clear understanding of state management, it becomes easier...",
      date: "November 5, 2024",
      image: "https://picsum.photos/id/242/600/400",
      fallbackImage: "/images/default6.jpg"
    }
  ];

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <BlogList posts={blogPosts} />
    </div>
  );
};

export default App;



