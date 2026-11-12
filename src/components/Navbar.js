
/* Light mode navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: rgba(37, 99, 235, 0.22);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
}

/* Dark mode navbar - preserve dark appearance */
.navbar.dark {
  background: rgba(17, 24, 39, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Light mode navigation text */
.navbar:not(.dark) .navbar-logo,
.navbar:not(.dark) .navbar-link,
.navbar:not(.dark) .theme-icon {
  color: #ffffff;
}

/* Light mode navigation hover */
.navbar:not(.dark) .navbar-link:hover {
  color: #dbeafe;
}

/* Light mode logout button */
.navbar:not(.dark) .logout-button {
  color: #ffffff;
}
