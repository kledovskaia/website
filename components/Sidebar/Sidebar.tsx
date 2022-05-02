import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';
import LocationIcon from '../../assets/icons/location.svg';
import ContactIcon from '../../assets/icons/contact.svg';
import s from './Sidebar.module.scss';
import { contacts as contactIcons } from '../../constants/icons';
import { skills as skillIcons } from '../../constants/icons';
import List from '../List/List';
import Photo from '../../assets/images/profile-photo.jpg';
import Image from 'next/image';
import classNames from 'classnames';

type Props = {
  info: TProfile['info'];
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Sidebar: FC<Props> = ({ className, info, ...props }) => (
  <section className={classNames(className, s.sidebar)} {...props}>
    <header>
      <Image
        priority={true}
        height={564}
        width={564}
        src={Photo}
        alt={info.name}
      />
      <div>
        <h1>{info.name}</h1>
        <h2>{`<${info.jobTitle} />`}</h2>
      </div>
      {info.location && (
        <a
          href={`https://www.google.com/maps/place/${info.location.city},+${info.location.country}/`}
          target="_blank"
          rel="noreferrer"
        >
          <LocationIcon />
          <span>
            {info.location.city}, {info.location.country}
          </span>
        </a>
      )}
    </header>
    <div className={s.sidebar__skills}>
      <List
        type="bar"
        items={info.skills.map((skill) => ({
          ...skill,
          Icon: skillIcons[skill.label as keyof typeof skillIcons],
        }))}
      />
    </div>
    <footer>
      <List
        items={info.contacts.map((contact) => ({
          ...contact,
          Icon: contactIcons[contact.type as keyof typeof contactIcons],
        }))}
      />
    </footer>
  </section>
);

export default memo(Sidebar);
