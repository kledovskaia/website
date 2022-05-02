import { FC, memo } from 'react';
import Section from '../Section/Section';
import LanguageIcon from '../../assets/icons/language.svg';

type Props = {};

const languages = [
  { label: 'English', progress: 3, level: 'A2' },
  { label: 'Russian', progress: 6, level: 'Native' },
];

const Languages: FC<Props> = ({}) => {
  return (
    <Section Icon={LanguageIcon} title="Languages">
      <ul>
        {languages.map((lang) => (
          <li key={lang.label}>
            <div>{lang.label}</div>

            <div>{lang.level}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default memo(Languages);
