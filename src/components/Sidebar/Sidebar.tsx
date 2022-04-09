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
    { type: 'telegram', value: { name: 'kledovskaia' } },
    { type: 'email', value: { name: 'email@gmail.com' } },
    { type: 'phone', value: { name: '+123456789' } },
  ],
  skills: [
    { value: { name: 'TypeScript', progress: 70 } },
    { value: { name: 'JavaScript', progress: 80 } },
    { value: { name: 'React', progress: 70 } },
    { value: { name: 'Redux', progress: 70 } },
    { value: { name: 'GraphQL', progress: 30 } },
    { value: { name: 'Git', progress: 50 } },
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
    <List
      items={profile.skills.map((skill) => ({
        ...skill,
        Icon: skillIcons[skill.value.name as keyof typeof skillIcons],
      }))}
    />
    <footer>
      <ContactIcon className="icon icon_dark" />
      <h3>Contact me</h3>
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
