import { NextPage } from 'next';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Experience from '../components/Experience/Experience';
import Languages from '../components/Languages/Languages';
import Wakatime from '../components/Wakatime/Wakatime';

type Props = {
  profile: TProfile;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Resume: NextPage<Props> = ({ profile }) => {
  return (
    <div>
      <Experience experiences={profile.experiences} />
      <Languages languages={profile.languages} />
      <Wakatime wakatime={profile.wakatime} />
    </div>
  );
};

export default Resume;
