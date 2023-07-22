import Score from './Score';
import icon from './assets/memory-64.png';

const Header = () => {
  return (
    <div className="header">
      <div className="title-icon">
      <img src={icon} alt="" />
      <h1 className="title">Memory Card Game</h1>
      </div>
      <Score />
    </div>
  )
}

export default Header;
