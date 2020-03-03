import React from 'react';
import styled from 'styled-components';
import Score from './score/index';
import Toolbar from './toolbar/index';

const Editor = () => (
  <Wrapper className="box">
    <Toolbar />
    <Score />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 50em;
  padding: 0;
  margin: 0;
`;

export default Editor;
