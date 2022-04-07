import { FC, memo, ReactNode } from 'react';
import s from './Page.module.scss';

type Props = {
  children?: ReactNode;
};

const Page: FC<Props> = ({ children }) => {
  return (
    <div className={s.page}>
      <div className={s.page__sidebar}>{/* <Sidebar /> */}</div>
      <main className={s.page__content}>{children}</main>
    </div>
  );
};

export default memo(Page);
