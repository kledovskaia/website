import classNames from 'classnames';
import { FC, memo } from 'react';
import { ReactComponent as ExperienceIcon } from '../../assets/icons/experience.svg';
import s from './Experience.module.scss';

type Props = {};

const experiences = [
  {
    from: 'Dec 2021',
    to: 'Feb 2022',
    company: 'Performance Lab',
    link: 'https://www.performance-lab.ru',
    position: 'Trainee Frontend Developer',
    responsibilities: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet distinctio aliquam modi alias, fugit impedit, autem quo labore velit, obcaecati fugiat id debitis doloremque error. Facere maxime eveniet quaerat?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet distinctio aliquam modi alias, fugit impedit, autem quo labore velit, obcaecati fugiat id debitis doloremque error. Facere maxime eveniet quaerat?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet distinctio aliquam modi alias, fugit impedit, autem quo labore velit, obcaecati fugiat id debitis doloremque error. Facere maxime eveniet quaerat?',
    ],
    achievements: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, animi.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, animi.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, animi.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, animi.',
    ],
  },
  {
    from: 'Sep 2021',
    to: 'Nov 2021',
    company: 'Ecohub',
    link: 'https://www.ecohubmap.com',
    position: 'Intern Developer',
    responsibilities: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet distinctio aliquam modi alias, fugit impedit, autem quo labore velit, obcaecati fugiat id debitis doloremque error. Facere maxime eveniet quaerat?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet distinctio aliquam modi alias, fugit impedit, autem quo labore velit, obcaecati fugiat id debitis doloremque error. Facere maxime eveniet quaerat?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet distinctio aliquam modi alias, fugit impedit, autem quo labore velit, obcaecati fugiat id debitis doloremque error. Facere maxime eveniet quaerat?',
    ],
    achievements: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, animi.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, animi.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, animi.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, animi.',
    ],
  },
];

const Experience: FC<Props> = ({}) => {
  return (
    <section className={s.experience}>
      <h3>
        <span className={s.experience__iconContainer}>
          <ExperienceIcon />
        </span>
        <span>Experience</span>
      </h3>
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
            {!!item.achievements.length && (
              <>
                <h4>Achievements</h4>
                <ul>
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
            {!!item.responsibilities.length && (
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
    </section>
  );
};

export default memo(Experience);
