import styled from 'styled-components';

interface Props {
  homePage: Boolean;
  landscape: Boolean;
  portrait: Boolean;
}

const SiteWrapper = styled.div`
  margin: 0;
  min-height: 100vh;
  min-width: 100%;
  background-color: ${(props: Props) =>
    props.homePage ? '#063e6c' : '#f0f0f0'};
  color: #f0f0f0;
  @media only screen and (orientation: landscape) {
    background-image: ${(props: Props) => `url(${props.landscape})`};
    background-repeat: no-repeat;
    background-size: fit;
  }
  @media only screen and (orientation: portrait) {
    background-image: ${(props: Props) => `url(${props.portrait})`};
    background-repeat: no-repeat;
    background-size: fit;
  }
`;

export default SiteWrapper;
