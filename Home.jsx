// eslint-disable-next-line no-unused-vars
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Task Manager</h1>
        <p>Your go-to app for managing tasks efficiently!</p>
      </header>

      <main className="home-main">
        <section className="home-section">
          <h2>Start managing your tasks now</h2>
          <button className="btn-start">Get Started</button>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 Task Manager. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
