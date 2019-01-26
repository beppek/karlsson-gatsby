import styled from 'styled-components';

const ContentWrapper = styled.div`
  position: absolute;
  top: ${props => (props.blog ? '100px' : '55px')};
  left: ${props => (props.blog ? '0' : '255px')};
  right: ${props => (props.blog ? '0' : '255px')};
  bottom: ${props => (props.blog ? '0' : '55px')};
  color: #f0f0f0;
  border-radius: 10px;
  filter: blur(5px);
  z-index: 1;
  @media only screen and (orientation: landscape) {
    background-image: ${props => `url(${props.landscape})`};
    background-repeat: no-repeat;
    background-size: fit;
    background-attachment: fixed;
  }
  @media only screen and (orientation: portrait) {
    background-image: ${props => `url(${props.portrait})`};
    background-repeat: no-repeat;
    background-size: fit;
    background-attachment: fixed;
  }
`;

export default ContentWrapper;
