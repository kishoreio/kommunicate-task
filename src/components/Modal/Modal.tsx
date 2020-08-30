import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
`;

const Modal: React.FC = (props) => (
  <ModalWrapper>{props.children}</ModalWrapper>
);

export default Modal;
