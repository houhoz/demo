import React from 'react';
import logo from '@/static/logo.svg';
import styles from './index.module.scss';
import { Button } from 'antd';
function Header() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <Button type="dashed">Button</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default Header;
