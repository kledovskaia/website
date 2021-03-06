import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';
import Section from '../Section/Section';
import LanguageIcon from '../../assets/icons/language.svg';
import s from './Languages.module.scss';
import classNames from 'classnames';

type Props = {
  languages: TProfile['languages'];
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Languages: FC<Props> = ({ className, languages }) => {
  return (
    <Section Icon={LanguageIcon} title="Languages" className={className}>
      <ul className={s.languages}>
        {languages.map((lang) => (
          <li key={lang.label} className={s.languages__item}>
            <div className={s.languages__label}>{lang.label}</div>
            <div className={s.languages__progress}>
              <div className={s.languages__pointContainer}>
                {new Array(6).fill(null).map((_, i) => (
                  <div key={i + 1} className={s.languages__point_ghost} />
                ))}
              </div>
              <div className={s.languages__pointContainer}>
                {new Array(lang.progress).fill(null).map((_, i) => (
                  <div key={i + 1} className={s.languages__point} />
                ))}
              </div>
            </div>
            <div className={s.languages__level}>{lang.level}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default memo(Languages);
