import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

const TestProvider = ({ store, children }) => <Provider store={store}>{children}</Provider>;

export function testRender(ui, { store, ...otherOpts }) {
  return render(<TestProvider store={store}>{ui}</TestProvider>, otherOpts);
}

TestProvider.propTypes = {
  store: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

TestProvider.defaultProps = {
  store: {},
  children: ''
};
