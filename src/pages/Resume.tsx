import { FC, memo } from 'react';
import Experience from '../components/Experience/Experience';
import Languages from '../components/Languages/Languages';
import s from './styles.module.scss';

type Props = {};

const Resume: FC<Props> = ({}) => {
  return (
    <div className={s.container}>
      <Experience />
      <Languages />
    </div>
  );
};

export default memo(Resume);
