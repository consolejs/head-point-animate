import React, { useEffect, useState, useRef } from "react";
import BulletScreen from "rc-bullets";
import styles from "./index.module.css";
// import { isLogin } from "../../utils/login";
// import StatusButton from '../status-button/status-button';

const defaultBarrages = [
  "欢迎回家👏👏",
  "中国加油🇨🇳🇨🇳",
  "欢迎回家👏👏",
];

const throttleFn = (fn, delay) => {
  let prevTime = Date.now();
  return function() {
    let curTime = Date.now();
    if (curTime - prevTime > delay) {
      fn.apply(this, arguments);
      prevTime = curTime;
    }
  }
};

export function Barrages(props) {
  const { showBtn } = props; 

  // 弹幕屏幕
  const [screen, setScreen] = useState(null);
  const maxSend = 6;
  const btnCount = useRef(0);

  useEffect(() => {
    // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块
    let sc = new BulletScreen(".barrage_screen", {
      duration: 5,
      loopCount: "infinite",
      pauseOnHover: false,
      trackHeight: 38
    });

    let barrages = props.barrages || defaultBarrages,
      count = 0;

    function pushBarrage() {
      if (barrages[count]) {
        sc.push(barrages[count]);
      }
      count++;
      if (count > barrages.length) clearInterval(timer);
    }

    const timer = setInterval(() => {
      pushBarrage();
    }, 2000);

    setScreen(sc);
  }, [props.barrages]);

  // 发送弹幕
  const handleSend = (msg) => {
    screen.push(msg, {
      delay: 0
    })
  };

  // 节流限制限制1s
 const throtteHandleSend= throttleFn((msg)=> {
    btnCount.current++;
    if(btnCount.current < maxSend){
        handleSend(msg);
        console.log('throtte', msg);
    }
  }, 1000);




  return (
      <>
      <div className={styles.h300}></div>
    <div className={styles.wrap}>
      <div className={['barrage_screen',`${styles.content}`].join(' ')} ></div>
      {
         ( !showBtn) ? null : <div className={styles['barrage-oper-wrap']}>
          <div className={styles['barrage-oper-item']} onClick={(e) => {throtteHandleSend('欢迎回家')}} >欢迎回家</div>
          <div className={styles['barrage-oper-item']} onClick={(e) => {throtteHandleSend('中国加油')}} >中国加油</div>
       </div>
      }
    </div>
    </>
  );
}
