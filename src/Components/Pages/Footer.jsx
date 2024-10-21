import React from 'react'

const Footer = () => {
  const year= new Date().getFullYear();
  return (
    <footer>
      <p>Copyright {year} © </p>
      <p> Created by Zdravka Goranova </p>
    </footer>
  );
}

export default Footer