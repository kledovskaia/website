import classNames from 'classnames';
import { FC, memo, SVGProps } from 'react';
import s from './List.module.scss';

type Item = {
  label: string;
  link?: string;
  progress?: number;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  level?: string;
};

type Props = {
  items?: Item[];
  type?: 'bar' | 'bullet';
};

const List: FC<Props> = ({ items, type }) => {
  return (
    <ul className={s.list}>
      {items?.map((item) => {
        const content = (
          <>
            {item.Icon && <item.Icon />}
            <div className={s.list__info}>
              <span>{item.label}</span>
              {item.progress && (
                <div className={s.list__progressBar}>
                  <div style={{ width: `${item.progress}%` }}></div>
                </div>
              )}
            </div>
          </>
        );

        return (
          <li
            key={item.label + item.link}
            className={classNames(s.list__item, {
              [s.list__item_progress]: type === 'bar',
            })}
          >
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer">
                {content}
              </a>
            )}
            {!item.link && content}
          </li>
        );
      })}
    </ul>
  );
};

export default memo(List);
