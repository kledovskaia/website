import classNames from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';
import ExperienceIcon from '../../assets/icons/experience.svg';
import Section from '../Section/Section';
import s from './Experience.module.scss';

type Props = {
  experiences: TProfile['experiences'];
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Experience: FC<Props> = ({ className, experiences, ...props }) => {
  return (
    <Section
      Icon={ExperienceIcon}
      title="Experience"
      className={classNames(className, s.experience)}
    >
      <ul className={s.experience__companyList}>
        {experiences.map((item) => (
          <li
            className={classNames(s.experience__company, s.company)}
            key={item.company}
          >
            <div className={s.company__time}>
              {item.from} —
              <br />
              {item.to}
            </div>
            <div>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={s.company__name}
              >
                {item.company}
              </a>
              <p className={s.company__position}>{item.position}</p>
            </div>
            {!!item.achievements?.length && (
              <>
                <h4>Achievements</h4>
                <ul>
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
            {!!item.responsibilities?.length && (
              <>
                <h4>Responsibilities</h4>
                <ul>
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default memo(Experience);
