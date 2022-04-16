import classNames from 'classnames';
import { FC, memo, SFC, SVGProps } from 'react';
import s from './List.module.scss';

type Item = {
  label: string;
  link?: string;
  progress?: number;
  Icon?: SFC<SVGProps<SVGSVGElement>>;
};

type Props = {
  items: Item[];
};

const List: FC<Props> = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => {
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
            className={classNames(s.list__item, {
              [s.list__item_progress]: typeof item.progress === 'number',
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
