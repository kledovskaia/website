import { useCallback, useState } from 'react';
import { AppProps } from 'next/app';

import '../styles/normalize.css';
import '../styles/index.scss';
import s from '../styles/App.module.scss';
import classNames from 'classnames';

import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { InferGetStaticPropsType } from 'next';

const profile = {
  info: {
    name: 'Kseniia Ledovskaia',
    jobTitle: 'Frontend Developer',
    contacts: [
      {
        type: 'github',
        label: 'kledovskaia',
        link: 'https://github.com/kledovskaia',
      },
      {
        type: 'email',
        label: 'email@gmail.com',
        link: 'mailto:email@gmail.com',
      },
      { type: 'phone', label: '+123456789', link: 'tel:123456789' },
      {
        type: 'telegram',
        label: 'kledovskaia',
        link: 'https://t.me/kledovskaia',
      },
    ],
    skills: [
      { label: 'React', progress: 70 },
      { label: 'Redux', progress: 70 },
      { label: 'GraphQL', progress: 30 },
      { label: 'TypeScript', progress: 70 },
      { label: 'JavaScript', progress: 80 },
      { label: 'Git', progress: 50 },
    ],
  },
  languages: [
    { label: 'English', progress: 3, level: 'B1' },
    { label: 'Russian', progress: 6, level: 'Native' },
  ],
  experiences: [
    {
      from: 'Dec 2021',
      to: 'Feb 2022',
      company: 'Performance Lab',
      link: 'https://www.performance-lab.ru',
      position: 'Trainee Frontend Developer',
    },
    {
      from: 'Sep 2021',
      to: 'Nov 2021',
      company: 'Ecohub',
      link: 'https://www.ecohubmap.com',
      position: 'Intern Developer',
    },
  ],
  wakatime: {
    languages:
      'https://wakatime.com/share/@kledovskaia/bcb1b033-ac41-44ff-a49d-83bda8fe22b9.svg',
    coding:
      'https://wakatime.com/share/@kledovskaia/9da6b3ef-9f9e-463a-8990-62a1765e3e92.svg',
  },
};

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
        <Sidebar info={profile.info} />
      </div>
      <main className={s.app__content}>
        <Header toggleSidebar={toggleSidebar} />
        <div className={s.container}>
          <Component profile={profile} {...pageProps} />
        </div>
      </main>
    </div>
  );
};

export default App;
