import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  memo,
  useCallback,
  useState,
} from 'react';
import MenuIcon from '../../assets/icons/menu.svg';
import DarkIcon from '../../assets/icons/night.svg';
import LightIcon from '../../assets/icons/day.svg';
import RussianIcon from '../../assets/icons/russia.svg';
import EnglishIcon from '../../assets/icons/united-states.svg';
import s from './Header.module.scss';
import classNames from 'classnames';

type Props = {
  toggleSidebar: () => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Header: FC<Props> = ({ className, toggleSidebar, ...props }) => {
  // const [theme, setTheme] = useState('light');
  // const [language, setLanguage] = useState('ru');

  // const toggleTheme = useCallback(
  //   () => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark')),
  //   []
  // );
  // const toggleLanguage = useCallback(
  //   () => setLanguage((lang) => (lang === 'ru' ? 'en' : 'ru')),
  //   []
  // );

  return (
    <header className={classNames(s.header, className)} {...props}>
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
