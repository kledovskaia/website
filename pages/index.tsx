import { NextPage } from 'next';
import Experience from '../components/Experience/Experience';
import Languages from '../components/Languages/Languages';

const Resume: NextPage = () => {
  return (
    <div>
      <Experience />
      <Languages />
    </div>
  );
};

export default Resume;
