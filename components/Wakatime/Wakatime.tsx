import Section from '../Section/Section';
import TimerIcon from '../../assets/icons/timer.svg';
import s from './Wakatime.module.scss';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

type Props = {
  wakatime: TProfile['wakatime'];
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Wakatime: FC<Props> = ({ className, wakatime }) => {
  return (
    <Section
      Icon={TimerIcon}
      title="Coding Activity"
      className={classNames(className)}
    >
      <div className={s.wakatime}>
        <figure className={s.wakatime__chart}>
          <embed src={wakatime.languages}></embed>
        </figure>
        <figure className={s.wakatime__chart}>
          <embed src={wakatime.coding}></embed>
        </figure>
      </div>
    </Section>
  );
};
export default Wakatime;
