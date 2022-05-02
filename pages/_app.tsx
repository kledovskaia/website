import { useCallback, useContext, useEffect, useState } from 'react';
import { AppInitialProps, AppProps } from 'next/app';

import '../styles/normalize.css';
import '../styles/index.scss';
import s from '../styles/App.module.scss';
import classNames from 'classnames';

import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

const App = ({ Component, pageProps }: AppProps) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarHidden((state) => !state);
  }, []);

  return (
    <div className={s.app}>
      <div
        className={classNames(s.app__sidebar, {
          [s.app__sidebar_hidden]: isSidebarHidden,
        })}
      >
        <Sidebar info={pageProps.profile?.info} />
      </div>
      <main className={s.app__content}>
        <Header toggleSidebar={toggleSidebar} />
        <div className={s.container}>
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  );
};

export default App;
