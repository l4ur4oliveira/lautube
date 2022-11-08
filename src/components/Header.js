import styled from "styled-components";
import config from '../../config.json';

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

const StyledBanner = styled.div`
  background-color: lightgray;
  height: 230px;
  width: 100%;
  background-image: url(${config.banner});
  background-size: cover;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
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

export default Header;