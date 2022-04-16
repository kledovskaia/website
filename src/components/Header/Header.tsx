import { FC, memo, useCallback, useState } from 'react';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as DarkIcon } from '../../assets/icons/night.svg';
import { ReactComponent as LightIcon } from '../../assets/icons/day.svg';
import { ReactComponent as RussianIcon } from '../../assets/icons/russia.svg';
import { ReactComponent as EnglishIcon } from '../../assets/icons/united-states.svg';
import s from './Header.module.scss';
import classNames from 'classnames';

type Props = {
  toggleSidebar: () => void;
};

const Header: FC<Props> = ({ toggleSidebar }) => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('ru');

  const toggleTheme = useCallback(
    () => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark')),
    []
  );
  const toggleLanguage = useCallback(
    () => setLanguage((lang) => (lang === 'ru' ? 'en' : 'ru')),
    []
  );

  return (
    <header className={s.header}>
      <button className={s.header__toggle} onClick={toggleSidebar}>
        <MenuIcon />
      </button>
      {/* <button
        onClick={toggleTheme}
        className={classNames(s.header__switch, {
          [s.header__switch_left]: theme === 'dark',
          [s.header__switch_right]: theme === 'light',
        })}
      >
        <div>
          {theme === 'dark' && <DarkIcon />}
          {theme === 'light' && <LightIcon />}
        </div>
      </button>
      <button
        onClick={toggleLanguage}
        className={classNames(s.header__switch, {
          [s.header__switch_left]: language === 'en',
          [s.header__switch_right]: language === 'ru',
        })}
      >
        <div>
          {language === 'ru' && <RussianIcon />}
          {language === 'en' && <EnglishIcon />}
        </div>
      </button> */}
    </header>
  );
};

export default memo(Header);
