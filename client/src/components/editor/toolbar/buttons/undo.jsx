/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { Undo } from 'styled-icons/material/Undo';
import socket from '../../score/models/socket';

const UndoButton = () => (
  <Button
    className="button is-dark"
    onClick={() => socket.sendUndo()}
  >
    <Undo size="1.4em" />
  </Button>
);

const Button = styled.button`
  width: 2em;
  height: 2em;
  padding: 0.25em;
  margin: 0.25em;
`;

export default UndoButton;