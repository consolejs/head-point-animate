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
  const { showBtn, userHead } = props; 

  // 弹幕屏幕
  const [screen, setScreen] = useState(null);
  const maxSend = 3;//最大发送次数
  const btnFirstCount = useRef(0);
  const btnSecondCount = useRef(0);

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
  const handleSend = (name, msg) => {
    screen.push({
        msg: msg,
        head: userHead,
    }, {
      delay: 0
    })
  };

  // 节流限制限制1s
 const throtteHandleSend= throttleFn((name,msg)=> {
    console.log('我是', name)

     if(name==="first"){
        btnFirstCount.current++;
        if(btnFirstCount.current <= maxSend){
            handleSend(name, msg);
            console.log('throtte', btnFirstCount.current);
        }
     }

     if(name==="second"){
        btnSecondCount.current++;
        if(btnSecondCount.current <= maxSend){
            handleSend(name, msg);
            console.log('throtte', btnSecondCount.current);
        }
     }
  }, 1200);



  return (
    <>
      <div style={{ height: '300px'}}></div>
      <div className={styles.wrap}  style={{ backgroundColor: '#482020'}}>
        <div className={['barrage_screen',`${styles.content}`].join(' ')} ></div>
        {
          ( !showBtn) ? null : <div className={styles['barrage-oper-wrap']}>
            <div className={styles['barrage-oper-item']} onClick={() => {throtteHandleSend('first','欢迎回家')}} >欢迎回家</div>
            <div className={styles['barrage-oper-item']} onClick={() => {throtteHandleSend('second','中国加油')}} >中国加油</div>
        </div>
        }
      </div>
    </>
  );
}