import React from 'react';

import MenuWrapper from './MenuWrapper';
import MenuBorder from './MenuBorder';

const Menu = props => {
  return (
    <MenuWrapper>
      <MenuBorder />
      {props.children}
      <div>some other stuff</div>
    </MenuWrapper>
  );
};

export default Menu;
