import { FC, RefObject, useState } from "react";
import styled from "styled-components/macro";

import LogoIcon from "../../assets/icons/logo.svg";
import HamburgerIcon from "../../assets/icons/icon-hamburger.svg";
import { breakpoints } from "../shared/global";
import MobileMenu from "../mobileMenu";

interface HeaderProps {
  featuresRef: RefObject<HTMLDivElement>;
  servicesRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  // eslint-disable-next-line
  scrollToElement: (elementRef: RefObject<HTMLDivElement>) => void;
}

const Header: FC<HeaderProps> = ({
  featuresRef,
  servicesRef,
  projectsRef,
  scrollToElement,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <DesktopHeader>
        <NavBar>
          <LogoContainer>
            <img src={LogoIcon} alt="Sunnyside logo" />
          </LogoContainer>
          <NavLinks>
            <NavLink onClick={() => scrollToElement(featuresRef)}>
              About
            </NavLink>
            <NavLink onClick={() => scrollToElement(servicesRef)}>
              Services
            </NavLink>
            <NavLink onClick={() => scrollToElement(projectsRef)}>
              Projects
            </NavLink>
            <ContactLink>Contact</ContactLink>
          </NavLinks>
        </NavBar>
      </DesktopHeader>
      <MobileHeader>
        <NavBar>
          <LogoContainer>
            <img src={LogoIcon} alt="Sunnyside logo" />
          </LogoContainer>
          <MenuBtn onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={HamburgerIcon} alt="" />
          </MenuBtn>
          {isMenuOpen && (
            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
              <NavLink
                color="var(--dark-grayish-blue)"
                onClick={() => {
                  scrollToElement(featuresRef);
                  setIsMenuOpen(false);
                }}
              >
                About
              </NavLink>
              <NavLink
                color="var(--dark-grayish-blue)"
                onClick={() => {
                  scrollToElement(servicesRef);
                  setIsMenuOpen(false);
                }}
              >
                Services
              </NavLink>
              <NavLink
                color="var(--dark-grayish-blue)"
                onClick={() => {
                  scrollToElement(projectsRef);
                  setIsMenuOpen(false);
                }}
              >
                Projects
              </NavLink>
              <ContactLink
                color="var(--very-dark-desaturated-blue)"
                backgroundColor="var(--yellow)"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </ContactLink>
            </MobileMenu>
          )}
        </NavBar>
      </MobileHeader>
    </>
  );
};
export default Header;

const DesktopHeader = styled.header`
  background-color: var(--bright-blue);
  padding: 34px 40px;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 124px;
  cursor: pointer;
  @media (min-width: ${breakpoints.tablet}) {
    width: 173px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 47px;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavLink = styled.a<{
  color?: string;
}>`
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: -0.128571px;
  color: ${({ color }) => color || "var(--white)"};
  cursor: pointer;
  transition: color 0.25s ease;
  line-height: 139%;
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const ContactLink = styled.a<{
  color?: string;
  backgroundColor?: string;
}>`
  padding: 16px 32px;
  border-radius: 28px;
  color: ${({ color }) => color || "var(--white)"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--very-dark-desaturated-blue)"};
  font-family: "Fraunces";
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.107143px;
  line-height: 167%;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.25s ease, background-color 0.25s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: var(--white);
  }
`;

const MobileHeader = styled.header`
  background-color: var(--bright-blue);
  padding: 32px 24px;
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const MenuBtn = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  transition: opacity 0.25s ease;
  &:hover {
    opacity: 0.5;
  }
`;
