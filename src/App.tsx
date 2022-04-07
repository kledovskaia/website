import { FC, memo } from 'react';
import { connect } from 'react-redux';
import { RootState } from './redux/store';

type Props = {};

const App: FC<Props> = ({}) => {
  return <div>Hello World</div>;
};

const mapStateToProps = (state: RootState) => ({});
const actions = {};

export default connect(mapStateToProps, actions)(memo(App));
