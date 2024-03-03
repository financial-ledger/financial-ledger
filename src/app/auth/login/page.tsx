// import { useEffect, useState } from "react";
// import { css } from "styled-system/css";
// import { hstack, vstack } from "styled-system/patterns";

import { OAuthButton } from "./OAuthButton";

const SUB_TITLES = [
  "매달 나가는 고정지출을\n설정하고 간편하게 등록해요",
  "예산 설정을  통해\n효율적인 소비습관을 형성해요",
  "소비패턴을 정교하게\n분석해 드려요",
];

export default function Login() {
  /* const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCarouselIndex((prev) => {
        if (prev <= SUB_TITLES.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3 * 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []); */
  return (
    <OAuthButton type="kakao" backgroundColor="kakao">
      카카오 로그인
    </OAuthButton>
    /* <Carousel.Root slidesPerView={1} loop asChild index={carouselIndex}>
      <div
        className={vstack({
          justify: "space-between",
          height: "100%",
          paddingTop: "10rem",
          paddingBottom: "4.8rem",
          textAlign: "center",
          px: "20",
        })}
      >
        <div className={vstack({ gap: "0.8rem" })}>
          <h1>소처럼 일하고 쥐처럼 써라!</h1>
          <Carousel.Viewport className={css({ overflowX: "hidden" })}>
            <Carousel.ItemGroup>
              {SUB_TITLES.map((value, index) => (
                <Carousel.Item key={value} index={index}>
                  {value}
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>
          </Carousel.Viewport>
        </div>
        <div className={vstack({ gap: "8rem", alignSelf: "stretch" })}>
          <Carousel.IndicatorGroup
            className={hstack({
              gap: "0.8rem",
            })}
          >
            {SUB_TITLES.map((value, index) => (
              <Carousel.Indicator
                key={value}
                index={index}
                className={css({
                  width: "0.6rem",
                  height: "0.6rem",
                  borderRadius: "50%",
                  backgroundColor: "default300",
                  "&[data-current]": {
                    backgroundColor: "primary",
                  },
                })}
              />
            ))}
          </Carousel.IndicatorGroup>
          <OAuthButton type="kakao" backgroundColor="kakao" icon={<SvgKakao />}>
            카카오 로그인
          </OAuthButton>
        </div>
      </div>
    </Carousel.Root> */
  );
}
