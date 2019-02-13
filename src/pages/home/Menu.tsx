import React from 'react';

import MenuWrapper from './MenuWrapper';
import MenuBorder from './MenuBorder';

interface MenuProps {
  children: Array<JSX.Element>;
}

const Menu = (props: MenuProps) => {
  return (
    <MenuWrapper>
      <MenuBorder />
      {props.children}
      <div>some other stuff</div>
    </MenuWrapper>
  );
};

export default Menu;
