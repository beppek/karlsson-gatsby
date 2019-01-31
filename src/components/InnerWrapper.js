import styled from 'styled-components';

const InnerWrapper = styled.div`
  position: fixed;
  top: ${props => (props.blog ? '100px' : '55px')};
  left: ${props => (props.blog ? '0' : '255px')};
  right: ${props => (props.blog ? '0' : '255px')};
  bottom: ${props => (props.blog ? '0' : '55px')};
  border-radius: ${props => (props.blog ? '0' : '5px')};
  box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.23);
  background-color: ${props =>
    props.blog ? 'rgb(200,200,200,0.85)' : 'rgb(25,25,25,0.8)'};
  color: #f0f0f0;
  z-index: 2;
`;

export default InnerWrapper;
