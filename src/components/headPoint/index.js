import { useState } from "react";

import styles from "./index.module.css";
import { Fade, Zoom } from "@gfazioli/react-animatecss";

const Child = (info) => {
  return (
    <div
      style={{
        top: info.posY + "px",
        left: info.posX + "px",
      }}
      className={styles.head_point}
    >
      <div className={styles.cnt}>
        <div className={styles.pic}>
          <img src={info.src} alt="" />
        </div>
        <div className={styles.name}>{info.nickname}</div>
        <div className={styles.desc}>
          你是第<b>{info.number}</b>位点亮画卷，
          <br />
          欢迎一起回家
        </div>
      </div>
    </div>
  );
};

export const HeadPoint = (props) => {
  const [zoom, setZoom] = useState(false);
  const [fade, setFade] = useState(false);

  const info = {
    src: "https://i.picsum.photos/id/603/50/50.jpg?hmac=_USXyljqpKjZi8WyEyPYPDm9bjzp_mHNUwh6goOkQG8",
    number: "2123",
    nickname: "zhangsan",
    posX: 330,
    posY: 80,
  };

  return (
    <div className="head-point_wrap">
      <button onClick={() => setZoom(true)}>消失1</button>
      <button onClick={() => setFade(true)}>消失2</button>

      <Zoom
        animate={zoom}
        mode="out"
        as="div"
        block
        onAnimationEnd={() => setZoom(true)}
      >
        {Child(info)}
      </Zoom>

      <Fade
        animate={fade}
        mode="out"
        as="div"
        block
        onAnimationEnd={() => setFade(true)}
      >
        {Child(info)}
      </Fade>
    </div>
  );
};
