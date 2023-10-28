import './Header.scss';

const Header = () => {
  return (
    <header>
      <span className="logo">Nicole S</span>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">My work</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
