function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {date} Copyright </p>
    </footer>
  );
}

export default Footer;
