import { FC, memo } from 'react';

type Props = {
  handleToggle: () => void;
};

const Header: FC<Props> = ({ handleToggle }) => {
  return (
    <header>
      <button onClick={handleToggle}>Toggle Sidebar</button>
    </header>
  );
};

export default memo(Header);
