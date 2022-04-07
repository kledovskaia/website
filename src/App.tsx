import { FC, lazy, memo, Suspense } from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Page from './containers/Page/Page';
import { RootState } from './redux/store';

type Props = {};

const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));
const Education = lazy(() => import('./pages/Education'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: FC<Props> = ({}) => {
  return (
    <Page>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Navigate to="/skills" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Page>
  );
};

const mapStateToProps = (state: RootState) => ({});
const actions = {};

export default connect(mapStateToProps, actions)(memo(App));
