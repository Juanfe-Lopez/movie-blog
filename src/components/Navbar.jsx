import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="brand">
          <a href="/">Kino </a>
        </div>
        <div>
          <a href="/Favs">Favs</a>
        </div>
        <div>
          <a href="/MustWatch">Must Watch</a>
        </div>

      </header>
      
    </>
  );
};

export default Navbar;
