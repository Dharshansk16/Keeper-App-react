function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <p>copyright &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
