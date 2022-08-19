// eslint-disable-next-line
import { Dispatch, SetStateAction, FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

// eslint-disable-next-line
const MobileMenu: FC<MobileMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  children,
}) => {
  if (!isMenuOpen) return null;
  return createPortal(
    <>
      <Overlay onClick={() => setIsMenuOpen(false)} />
      <Modal>{children}</Modal>
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default MobileMenu;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: transparent;
`;

const Modal = styled.div`
  position: absolute;
  background-color: white;
  width: 87vw;
  height: calc(87vw - 24px);
  top: 96px;
  right: 6.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  z-index: 3;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: -24px;
    width: 24px;
    height: 24px;
    background-color: white;
    clip-path: polygon(0 0, 100% 100%, 0 100%);
    transform: rotateZ(-90deg);
  }
`;
