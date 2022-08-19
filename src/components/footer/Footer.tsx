import styled from "styled-components/macro";

import GreenLogo from "../../assets/icons/logo-green.svg";
import IconInstagram from "../../assets/icons/icon-instagram.svg";
import IconPinterest from "../../assets/icons/icon-pinterest.svg";
import IconTwitter from "../../assets/icons/icon-twitter.svg";
import IconFacebook from "../../assets/icons/icon-facebook.svg";

// eslint-disable-next-line
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoContainer>
          <img src={GreenLogo} alt="Sunnyside logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink>About</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Projects</NavLink>
        </NavLinks>
        <SocialIconContainer>
          <a href="www.facebook.com">
            <SocialIcon src={IconFacebook} alt="Facebook" />
          </a>
          <a href="www.instagram.com">
            <SocialIcon src={IconInstagram} alt="Instagram" />
          </a>
          <a href="www.twitter.com">
            <SocialIcon src={IconTwitter} alt="Twitter" />
          </a>
          <a href="www.pinterest.com">
            <SocialIcon src={IconPinterest} alt="Pinterest" />
          </a>
        </SocialIconContainer>
      </FooterContent>
    </FooterWrapper>
  );
};
export default Footer;

const FooterWrapper = styled.footer`
  height: 350px;
  background-color: var(--desaturated-cyan);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 170px;
  cursor: pointer;
  margin-bottom: 40px;
  &:hover {
    img {
      transition: filter 0.3s ease;
      filter: brightness(0) invert(1);
    }
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 57px;
  align-items: center;
  margin-bottom: 88px;
`;

const NavLink = styled.a`
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: -0.128571px;
  color: var(--dark-moderate-cyan);
  cursor: pointer;
  transition: color 0.25s ease;
  line-height: 139%;
  &:hover {
    color: var(--white);
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;

const SocialIcon = styled.img`
  max-width: 20px;
  max-height: 20px;
  transition: filter 0.3s ease;
  &:hover {
    filter: brightness(0) invert(1);
  }
`;
