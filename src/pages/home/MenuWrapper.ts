import styled from 'styled-components';

const MenuWrapper = styled.div`
  text-align: center;
  margin: 0;
  left: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  width: 200px;
  height: 100%;
  overflow: auto;
  color: #0f0f0f;

  > a {
    display: block;
    color: #fff;
    text-decoration: none;
  }
`;

export default MenuWrapper;
