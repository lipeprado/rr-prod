import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

container.propTypes = {
  children: PropTypes.node,
};

export { container };
