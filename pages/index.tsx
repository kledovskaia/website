import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Experience from '../components/Experience/Experience';
import Languages from '../components/Languages/Languages';
import Wakatime from '../components/Wakatime/Wakatime';
import { getProfile } from '../firebase/firebase';
import s from '../styles/Resume.module.scss';

export const getStaticProps: GetStaticProps<{
  profile: TProfile;
}> = async () => {
  const profile = await getProfile();
  if (!profile) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      profile,
      revalidate: 60 * 60 * 24, // every 24 hours
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps> &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

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
