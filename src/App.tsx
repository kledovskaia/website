import { FC, lazy, memo, Suspense, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { RootState } from './redux/store';
import s from './App.module.scss';
import classNames from 'classnames';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Resume from './pages/Resume';

type Props = {};

const App: FC<Props> = ({}) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const toggleSidebar = useCallback(() => {
    console.log('sidebar toggle');
    setIsSidebarHidden((state) => !state);
  }, []);

  return (
    <div className={s.app}>
      <div
        className={classNames(s.app__sidebar, {
          [s.app__sidebar_hidden]: isSidebarHidden,
        })}
      >
        <Sidebar />
      </div>
      <main className={s.app__content}>
        <Header toggleSidebar={toggleSidebar} />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({});
const actions = {};

export default connect(mapStateToProps, actions)(memo(App));
