import config from '../config.json';
import styled from 'styled-components';

function HomePage() {
  return (
    <div>
      <Menu />
      <Header />
      <Timeline />
    </div>
  );
}

export default HomePage;

function Menu() {
  return (
    <div>Menu</div>
  );
}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 16px 32px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <img src="banner" />
      <div className='user-info'>
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </div>
    </StyledHeader>
  );
}

function Timeline() {
  return (
    <div>Timeline</div>
  );
}
