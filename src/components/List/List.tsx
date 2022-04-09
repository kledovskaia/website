import classNames from 'classnames';
import { FC, memo, SFC, SVGProps } from 'react';
import s from './List.module.scss';

type Item = {
  value: {
    name: string;
    progress?: number;
    label?: string;
  };
  Icon?: SFC<SVGProps<SVGSVGElement>>;
};

type Props = {
  items: Item[];
};

const List: FC<Props> = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <li
          className={classNames(s.list__item, {
            [s.list__item_progress]: typeof item.value.progress === 'number',
          })}
        >
          {item.Icon && <item.Icon className="icon icon_light" />}

          <div className={s.list__info}>
            <span>{item.value.name}</span>
            {item.value.progress && (
              <div className={s.list__progressBar}>
                <div style={{ width: `${item.value.progress}%` }}></div>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default memo(List);
