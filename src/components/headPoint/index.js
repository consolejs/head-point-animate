import { useState } from "react";

import styles from "./index.module.css";
import { Zoom, Bounce, Pulse } from "@gfazioli/react-animatecss";

const getHeadPoint = (info) => {
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

  const [startOne, setStartOne] = useState(false);
  const [startTwo, setStartTwo] = useState(false);
  const [startThree, setStartThree] = useState(false);
  const [starEnd, setStarEnd] = useState(false);

  const info = {
    src: "https://i.picsum.photos/id/603/50/50.jpg?hmac=_USXyljqpKjZi8WyEyPYPDm9bjzp_mHNUwh6goOkQG8",
    number: "2123",
    nickname: "zhangsan",
    posX: 330,
    posY: 80,
  };

  const showPic = () => {
    console.log('截图开始~')
  }

  return (
    <div className="head-point_wrap">
      
      <button onClick={() => setStartOne(true)}>点亮</button>

      <Zoom
        animate={startOne}
        direction="down"
        duration="2s"
        mode="in"
        as="div"
        block
        onAnimationEnd={() => setStartTwo(true)}
      >
        <Bounce
          animate={startTwo}
          duration="1.5s"
          repeat="1"
          onAnimationEnd={() => setStartThree(true)}
          as="div"
        >
          <Pulse
            animate={startThree}
            duration="1.2s"
            repeat="2"
            onAnimationEnd={() => setStarEnd(true)}
            as="div"
          >
               <Zoom
                animate={starEnd}
                mode="out"
                delay="1s"
                duration="2s"
                as="div"
                block
                onAnimationEnd={()=>{
                  showPic()
                }}
              >
                {getHeadPoint(info)}
              </Zoom>
              
          </Pulse>
        </Bounce>
      </Zoom>

     
    </div>
  );
};
