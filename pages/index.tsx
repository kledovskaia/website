import { NextPage } from 'next';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Experience from '../components/Experience/Experience';
import Languages from '../components/Languages/Languages';
import Wakatime from '../components/Wakatime/Wakatime';
import s from '../styles/Resume.module.scss';

type Props = {
  profile: TProfile;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Resume: NextPage<Props> = ({ profile }) => {
  return (
    <div className={s.resume}>
      <div className={s.resume__row}>
        <Experience
          className={s.resume__row_5}
          experiences={profile.experiences}
        />
        <Languages className={s.resume__row_1} languages={profile.languages} />
      </div>
      <div className={s.resume__row}>
        <Wakatime wakatime={profile.wakatime} />
      </div>
    </div>
  );
};

export default Resume;
