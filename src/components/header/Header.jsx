import React from 'react';
import LogoIcon from '../../app/icons/logoIcon';

export const Header = () => {
  return (
    <header className={'header'}>
      <div className={'header__logo'}>
        <LogoIcon />
      </div>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
