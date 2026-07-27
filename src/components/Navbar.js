function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        background: "#111827",
        color: "white",
        position: "sticky",
        top: "0",
        zIndex: "1000"
      }}
    >
      <h2>SAGI AMULYA</h2>

      <div>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#contact" style={linkStyle}>Contact</a>
		<a href="#education" style={linkStyle}>
		  Education
		</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginLeft: "25px",
  fontWeight: "bold"
};

export default Navbar;