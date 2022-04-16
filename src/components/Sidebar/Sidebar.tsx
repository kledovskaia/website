import { memo } from 'react';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';
import { ReactComponent as ContactIcon } from '../../assets/icons/contact.svg';
import s from './Sidebar.module.scss';
import { contacts as contactIcons } from '../../constants/icons';
import { skills as skillIcons } from '../../constants/icons';
import List from '../List/List';
import Photo from '../../assets/images/profile-photo.jpg';

const profile = {
  name: 'Kseniia Ledovskaia',
  jobTitle: 'Frontend Developer',
  // photo: '',
  location: {
    city: 'Tbilisi',
    country: 'Georgia',
  },
  contacts: [
    {
      type: 'github',
      label: 'kledovskaia',
      link: 'https://github.com/kledovskaia',
    },
    { type: 'email', label: 'email@gmail.com', link: 'mailto:email@gmail.com' },
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
};

const Sidebar = () => (
  <section className={s.sidebar}>
    <header>
      <img src={Photo} alt={profile.name} />
      <div>
        <h1>{profile.name}</h1>
        <h2>{`<${profile.jobTitle} />`}</h2>
      </div>
      <a
        href={`https://www.google.com/maps/place/${profile.location.city},+${profile.location.country}/`}
        target="_blank"
        rel="noreferrer"
      >
        <LocationIcon />
        <span>
          {profile.location.city}, {profile.location.country}
        </span>
      </a>
    </header>
    <div className={s.sidebar__skills}>
      <List
        items={profile.skills.map((skill) => ({
          ...skill,
          Icon: skillIcons[skill.label as keyof typeof skillIcons],
        }))}
      />
    </div>
    <footer>
      <List
        items={profile.contacts.map((contact) => ({
          ...contact,
          Icon: contactIcons[contact.type as keyof typeof contactIcons],
        }))}
      />
    </footer>
  </section>
);

export default memo(Sidebar);
