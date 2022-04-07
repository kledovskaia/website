import { FC, memo, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Page: FC<Props> = ({ children }) => {
  return (
    <div>
      {/* <Sidebar /> */}
      <main>{children}</main>
    </div>
  );
};

export default memo(Page);
