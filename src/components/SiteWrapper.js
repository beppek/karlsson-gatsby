import styled from 'styled-components';

const SiteWrapper = styled.div`
  margin: 0;
  min-height: 100vh;
  min-width: 100%;
  background-color: ${props => (props.homePage ? '#063e6c' : '#f0f0f0')};
  color: #f0f0f0;
  @media only screen and (orientation: landscape) {
    background-image: ${props => `url(${props.landscape})`};
    background-repeat: no-repeat;
    background-size: fit;
  }
  @media only screen and (orientation: portrait) {
    background-image: ${props => `url(${props.portrait})`};
    background-repeat: no-repeat;
    background-size: fit;
  }
`;

export default SiteWrapper;
