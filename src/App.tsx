import { FC, lazy, memo, Suspense, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { RootState } from './redux/store';
import s from './App.module.scss';
import classNames from 'classnames';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

type Props = {};

const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));
const Education = lazy(() => import('./pages/Education'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} /> */}
            <Route path="/" element={<Navigate to="/skills" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({});
const actions = {};

export default connect(mapStateToProps, actions)(memo(App));
