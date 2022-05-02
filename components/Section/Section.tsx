import classNames from 'classnames';
import { FC, memo, ReactNode, SVGProps } from 'react';
import s from './Section.module.scss';

type Props = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  className?: string;
  children?: ReactNode;
};

const Section: FC<Props> = ({ className, Icon, title, children }) => {
  return (
    <section className={classNames(s.section, className)}>
      <h3>
        <span className={s.section__iconContainer}>{<Icon />}</span>
        <span>{title}</span>
      </h3>
      {children}
    </section>
  );
};

export default memo(Section);
