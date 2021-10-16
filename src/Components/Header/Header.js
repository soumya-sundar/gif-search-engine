import './Header.css';

function Header(props) {
  return(
    <header className="header">
      <div className="title"><h3>Gif Search Engine</h3></div>
      <ul className="menu">
        <li className="menu-items" onClick={() => props.onClick(1)}><p>Search</p></li>
        <li className="menu-items" onClick={() => props.onClick(2)}><p>Favourites</p></li>
      </ul>
    </header>
  );
}
  
export default Header;