// import { useEffect, useState } from "react";
// import { css } from "styled-system/css";
// import { hstack, vstack } from "styled-system/patterns";

import { hstack, vstack } from "styled-system/patterns";
import { OAuthButton } from "./OAuthButton";
import { css } from "styled-system/css";
import { Carousel } from "@ark-ui/react";
import { CarouselRoot } from "./Carousel";

const SUB_TITLES = [
  "예산 설정을  통해\n효율적인 소비습관을 형성해요",
  "매달 나가는 고정지출을\n설정하고 간편하게 등록해요",
  "소비패턴을 정교하게\n분석해 드려요",
];

export default function Login() {
  return (
    <div
      className={vstack({
        justify: "space-between",
        height: "100%",
        pt: 120,
        px: 20,
        pb: 192,
        textAlign: "center",
        position: "relative",
      })}
    >
      <h1>소처럼 일하고 쥐처럼 써라!</h1>
      <CarouselRoot
        itemLength={SUB_TITLES.length}
        slidesPerView={1}
        loop
        className={vstack({ gap: 32 })}
      >
        <Carousel.Viewport className={vstack({ overflowX: "hidden" })}>
          <Carousel.ItemGroup>
            {SUB_TITLES.map((value, index) => (
              <Carousel.Item key={value} index={index}>
                {value}
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
        </Carousel.Viewport>
        <Carousel.IndicatorGroup
          className={hstack({
            gap: 8,
          })}
        >
          {SUB_TITLES.map((value, index) => (
            <Carousel.Indicator
              key={value}
              index={index}
              className={css({
                width: 6,
                height: 6,
                borderRadius: "50%",
                bg: "default300",
                "&[data-current]": {
                  bg: "primary",
                },
              })}
            />
          ))}
        </Carousel.IndicatorGroup>
      </CarouselRoot>
      <div
        className={css({
          position: "absolute",
          bottom: 20,
          px: 20,
          width: "100%",
        })}
      >
        <OAuthButton type="kakao" className={css({ bg: "kakao" })}>
          카카오 로그인
        </OAuthButton>
      </div>
    </div>
  );
}
