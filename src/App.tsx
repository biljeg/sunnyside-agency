import { RefObject, useRef } from "react";
import styled from "styled-components/macro";

import Footer from "./components/footer";
import Header from "./components/header";
import GlobalStyle, { breakpoints } from "./components/shared/global";
import CSSReset from "./components/shared/reset";
import ArrowIcon from "./assets/icons/icon-arrow-down.svg";
import HeroImageDesktop from "./assets/images/desktop/image-header.jpg";
import HeroImageMobile from "./assets/images/mobile/image-header.jpg";
import StandOutDesktop from "./assets/images/desktop/image-stand-out.jpg";
import StandOutMobile from "./assets/images/mobile/image-stand-out.jpg";
import TransformDesktop from "./assets/images/desktop/image-transform.jpg";
import TransformMobile from "./assets/images/mobile/image-transform.jpg";
import GraphicDesignDesktop from "./assets/images/desktop/image-graphic-design.jpg";
import GraphicDesignMobile from "./assets/images/mobile/image-graphic-design.jpg";
import PhotographyDesktop from "./assets/images/desktop/image-photography.jpg";
import PhotographyMobile from "./assets/images/mobile/image-photography.jpg";
import GalleryDesktop1 from "./assets/images/desktop/image-gallery-cone.jpg";
import GalleryDesktop2 from "./assets/images/desktop/image-gallery-milkbottles.jpg";
import GalleryDesktop3 from "./assets/images/desktop/image-gallery-orange.jpg";
import GalleryDesktop4 from "./assets/images/desktop/image-gallery-sugarcubes.jpg";
import GalleryMobile1 from "./assets/images/mobile/image-gallery-cone.jpg";
import GalleryMobile2 from "./assets/images/mobile/image-gallery-milkbottles.jpg";
import GalleryMobile3 from "./assets/images/mobile/image-gallery-orange.jpg";
import GalleryMobile4 from "./assets/images/mobile/image-gallery-sugarcubes.jpg";
import ReviewImage1 from "./assets/images/image-emily.jpg";
import ReviewImage2 from "./assets/images/image-thomas.jpg";
import ReviewImage3 from "./assets/images/image-jennie.jpg";

interface ReviewType {
  id: number;
  clientName: string;
  clientJob: string;
  reviewText: string;
  profilePicture: string;
}
interface GalleryImageType {
  id: number;
  desktopImage: string;
  mobileImage: string;
}

const reviews: ReviewType[] = [
  {
    id: 0,
    clientName: "Emily R.",
    clientJob: "Marketing Director",
    reviewText:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    profilePicture: ReviewImage1,
  },
  {
    id: 1,
    clientName: "Thomas S.",
    clientJob: "Chief Operating Officer",
    reviewText:
      "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    profilePicture: ReviewImage2,
  },
  {
    id: 2,
    clientName: "Jennie F.",
    clientJob: "Business Owner",
    reviewText:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    profilePicture: ReviewImage3,
  },
];

const galleryImages: GalleryImageType[] = [
  {
    id: 0,
    desktopImage: GalleryDesktop1,
    mobileImage: GalleryMobile1,
  },
  {
    id: 1,
    desktopImage: GalleryDesktop2,
    mobileImage: GalleryMobile2,
  },
  {
    id: 2,
    desktopImage: GalleryDesktop3,
    mobileImage: GalleryMobile3,
  },
  {
    id: 3,
    desktopImage: GalleryDesktop4,
    mobileImage: GalleryMobile4,
  },
];

const App = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToElement = (elementRef: RefObject<HTMLDivElement>): void => {
    // eslint-disable-next-line
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        featuresRef={featuresRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        scrollToElement={scrollToElement}
      />
      <Main>
        <HeroSection>
          <HeroContent>
            <H1>We are creatives</H1>
            <ArrowDown onClick={() => scrollToElement(featuresRef)}>
              <img src={ArrowIcon} alt="" />
            </ArrowDown>
          </HeroContent>
        </HeroSection>
        <FeaturesGrid ref={featuresRef}>
          <Feature order="right">
            <FeatureText>
              <H2>Transform your brand</H2>
              <P>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </P>
              <CallToAction>
                <span>Learn More</span>
                <Underline underlineColor="var(--yellow)" />
              </CallToAction>
            </FeatureText>
          </Feature>
          <FeatureImage firstImage>
            <picture>
              <source srcSet={TransformDesktop} />
              <img src={TransformMobile} alt="Egg with a yellow background" />
            </picture>
          </FeatureImage>
          <FeatureImage>
            <picture>
              <source srcSet={StandOutDesktop} />
              <img
                src={StandOutMobile}
                alt="Wine glass with a soft red background"
              />
            </picture>
          </FeatureImage>
          <Feature order="left">
            <FeatureText>
              <H2>Stand out to the right audience</H2>
              <P>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we&apos;ll build
                and extend your brand in digital places.
              </P>
              <CallToAction>
                <span>Learn More</span>
                <Underline underlineColor="var(--soft-red)" />
              </CallToAction>
            </FeatureText>
          </Feature>
          <Service
            image={GraphicDesignDesktop}
            mobileImage={GraphicDesignMobile}
            ref={servicesRef}
          >
            <H3 color="var(--dark-desaturated-cyan)">Graphic Design</H3>
            <P color="var(--dark-desaturated-cyan)">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential
              clients&apos; attention.
            </P>
          </Service>
          <Service image={PhotographyDesktop} mobileImage={PhotographyMobile}>
            <H3 color="var(--dark-blue)">Photography</H3>
            <P color="var(--dark-blue)">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </P>
          </Service>
        </FeaturesGrid>
        <ReviewSection>
          <H4>Client testimonials</H4>
          <ReviewGrid>
            {reviews.map(item => (
              <Review key={item.id}>
                <ProfilePicture>
                  <img src={item.profilePicture} alt="Client profile" />
                </ProfilePicture>
                <P color="var(--very-dark-grayish-blue)">{item.reviewText}</P>
                <ReviewFooter>
                  <H5>{item.clientName}</H5>
                  <P size="1.4rem" color="var(--grayish-blue)">
                    {item.clientJob}
                  </P>
                </ReviewFooter>
              </Review>
            ))}
          </ReviewGrid>
        </ReviewSection>
        <GallerySection ref={projectsRef}>
          {galleryImages.map(item => (
            <picture key={item.id}>
              <source
                media="(min-width: var(--breakpoint-tablet))"
                src={item.desktopImage}
              />
              <img src={item.mobileImage} alt="3 bottles of milk" />
            </picture>
          ))}
        </GallerySection>
      </Main>
      <Footer />
      <GlobalStyle />
      <CSSReset />
    </>
  );
};

export default App;

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  font-family: "Fraunces", serif;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 8.75px;
  text-align: center;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 5.6rem;
  }
`;

const H2 = styled.h2`
  font-size: 3.2rem;
  font-weight: 900;
  font-family: "Fraunces", serif;
  color: var(--very-dark-desaturated-blue);
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 4rem;
  }
  @media (min-width: ${breakpoints.tablet}) and (max-width: 1000px) {
    font-size: 3.4rem;
  }
`;

const H3 = styled.h3<{ color: string }>`
  font-size: 2.8rem;
  font-weight: 900;
  font-family: "Fraunces", serif;
  color: ${({ color }) => color};
`;

const H4 = styled.h4`
  font-size: 1.6rem;
  font-weight: 900;
  font-family: "Fraunces", serif;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--grayish-blue);
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const H5 = styled.h5`
  font-size: 1.8rem;
  font-weight: 900;
  font-family: "Fraunces", serif;
  color: var(--very-dark-desaturated-blue);
  letter-spacing: -0.128571px;
`;

const P = styled.p<{ color?: string; size?: string }>`
  font-size: ${({ size }) => size || "1.8rem"};
  font-weight: 600;
  color: ${({ color }) => color || "var(--dark-grayish-blue)"};
  line-height: 178%;
  letter-spacing: -0.128571px;
  @media (min-width: ${breakpoints.tablet}) and (max-width: 1000px) {
    font-size: 1.6rem;
  }
`;

const Underline = styled.div<{ underlineColor: string }>`
  width: 137px;
  height: 10px;
  background-color: ${({ underlineColor }) => underlineColor};
  opacity: 0.25;
  z-index: -1;
  border-radius: 28px;
  position: absolute;
  bottom: -2px;
  left: -8px;
  transition: all 0.3s ease;
`;

const CallToAction = styled.a`
  font-size: 1.5rem;
  font-weight: 900;
  font-family: "Fraunces", serif;
  color: var(--very-dark-desaturated-blue);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  position: relative;
  cursor: pointer;
  @media (min-width: ${breakpoints.tablet}) {
    margin-left: 10px;
  }
  &:hover {
    ${Underline} {
      opacity: 1;
    }
  }
`;

const Main = styled.main``;

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 5.2rem;
  background-image: url(${HeroImageMobile});
  background-position: center bottom;
  background-size: cover;
  height: 500px;
  background-repeat: no-repeat;
  padding-inline: 2vw;
  @media (min-width: ${breakpoints.tablet}) {
    background-image: url(${HeroImageDesktop});
    height: 675px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.2rem;
  margin-top: 54px;
  @media (min-width: ${breakpoints.tablet}) {
    gap: 9.8rem;
    margin-top: 74px;
  }
`;

const ArrowDown = styled.a`
  height: 108px;
  width: 30px;
`;

const FeaturesGrid = styled.section`
  display: grid;
  grid-template-rows: repeat(2, 1fr 1.4fr) repeat(2, 1.8fr);
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Feature = styled.div<{ order: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 5vw;
  @media (min-width: ${breakpoints.tablet}) {
    padding-inline: ${({ order }) =>
      order === "left" ? "8vw 11.8vw" : "11.8vw 8vw"};
  }
  @media (min-width: ${breakpoints.tablet}) and (max-width: 1000px) {
    padding-inline: ${({ order }) =>
      order === "left" ? "6vw 9.8vw" : "9.8vw 6vw"};
  }
`;

const FeatureText = styled.div`
  text-align: center;
  ${H2} {
    margin-bottom: 2.4rem;
  }
  ${P} {
    margin-bottom: 3.2rem;
  }
  @media (min-width: ${breakpoints.tablet}) {
    text-align: left;
    ${H2} {
      margin-bottom: 3.2rem;
    }
    ${P} {
      margin-bottom: 4rem;
    }
  }
  @media (min-width: ${breakpoints.tablet}) and (max-width: 1000px) {
    ${H2} {
      margin-bottom: 2.2rem;
    }
    ${P} {
      margin-bottom: 3rem;
    }
  }
`;

const FeatureImage = styled.div<{
  firstImage?: boolean;
}>`
  @media (max-width: ${breakpoints.tablet}) {
    order: ${({ firstImage }) => firstImage && "-1"};
  }
`;

const Service = styled.div<{
  image: string;
  mobileImage: string;
}>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 50px;
  background-image: url(${({ mobileImage }) => mobileImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-inline: 24px;
  flex-direction: column;
  text-align: center;
  gap: 27px;
  @media (min-width: ${breakpoints.tablet}) {
    background-image: url(${({ image }) => image});
  }
`;

const ReviewSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  margin: 64px 0 86px 0;
  @media (min-width: ${breakpoints.tablet}) {
    margin: 160px 0;
  }
`;

const ReviewGrid = styled.div`
  display: grid;
  gap: 60px;
  margin-inline: 2vw;
  @media (min-width: ${breakpoints.tablet}) {
    margin-inline: 8vw;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ReviewFooter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  margin-top: 32px;
  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 69px;
  }
`;

const ProfilePicture = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin-bottom: 32px;
  img {
    border-radius: 50%;
  }
  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 58px;
  }
`;

const GallerySection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`;
