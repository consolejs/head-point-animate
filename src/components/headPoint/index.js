import { ReactFragment, useState, useImperativeHandle, forwardRef } from "react";
import { Zoom, Bounce, Pulse } from "@gfazioli/react-animatecss";
import styles from "./index.module.css";

let HeadPointApp = (props, ref) => {
  const [info, setInfo] = useState(false);
  const [startOne, setStartOne] = useState(false);
  const [startTwo, setStartTwo] = useState(false);
  const [startThree, setStartThree] = useState(false);

  useImperativeHandle(ref, () => ({
    // startToAnimation,执行动画，暴露给点亮按钮
    startToAnimation: (passUserInfo) => {
      console.log("传值用户数据", passUserInfo);
      setInfo(passUserInfo);
      setStartOne(true);
    }
  }))

  const showPic = () => {
    console.log("通知，截图开始~");
  };

  const resPos = () => {
    console.log("改变位置");
    setInfo({
      src: info.src,
      number: info.number,
      nickname: info.nickname,
      posX: "32px",
      posY: "32px",
      posW: "24px",
      posH: "24px",
      locate: true,
    });

    //2s后,启用截图
   setTimeout(() => {
      showPic();
    }, 2000);
  };

  const getHeadPoint = (info) => {
    return (
      <div className={styles.cnt}>
        <div className={styles.pic}><img src={info.src} alt="" /></div>
        <div className={styles.name}>{info.nickname}</div>
        <div className={styles.desc}>
          你是第<b>{info.number}</b>位点亮画卷，
          <br />
          欢迎一起回家
        </div>
      </div>
    );
  };

  return (
    <>
      {info && info.src && info.nickname ? (
        <div
          className={[`${ info.locate ?styles.locate : ''}`,`${styles.box}`].join(' ')}
          style={{
            top: info.posY,
            left: info.posX,
            width: info.posW,
            height: info.posH,
          }}
        >
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
                onAnimationEnd={() => {
                  setStartThree(false);
                  setTimeout(()=>{
                    resPos();
                  }, 1000)
                }}
                as="div"
              >
                {getHeadPoint(info)}
              </Pulse>
            </Bounce>
          </Zoom>
        </div>
      ) : null}
    </>
  );
};

export const HeadPoint = forwardRef(HeadPointApp);
