import React, { useEffect, useState, useRef } from "react";
import BulletScreen from "rc-bullets";
import styles from "./index.module.css";
// import { isLogin } from "../../utils/login";
// import StatusButton from '../status-button/status-button';

// import Toast from "./toast";

const defaultBarrages = [
  "欢迎回家👏👏",
  "中国加油🇨🇳🇨🇳",
  "欢迎回家👏👏",
];


export function Barrages(props) {
  const { showBtn, userHead } = props; 

  // 弹幕屏幕
  const [screen, setScreen] = useState(null);
  // const [toast, setToast] = useState(false);

  useEffect(() => {
    
    const performBarrage = () => {
      // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块
      let sc = new BulletScreen(".barrage_screen", {
        duration: 5,
        loopCount: 1,
        pauseOnHover: false,
        trackHeight: 38,
        onEnd: () => {
          // console.log('每执行1条结束后',  sc.bullets.length, sc.bullets);
          if (sc.bullets.length === 1) {
            // console.log("已清空~");
            // performBarrage();
          }
        },
      });

      let barrages = props.barrages || defaultBarrages,
        count = 0;

      function pushBarrage() {
        if (barrages[count]) {
          sc.push(barrages[count]);
        }
        count++;
        if (count > barrages.length) {
          // clearInterval(timer);
          count=0;
        }
      }
      setInterval(() => {
        pushBarrage();
      }, 1500);

      setScreen(sc);
    };

    performBarrage();

  }, [props.barrages]);

  const throttleFn = (fn, delay) => {
    let prevTime = Date.now();
    return function() {
      let curTime = Date.now();
      if (curTime - prevTime > delay) {
        fn.apply(this, arguments);
        prevTime = curTime;
        // setToast(false)
      } else{
        console.log('点击过快~', '调用Toast!');
        // setToast(true);
      }
    }
  };

  // 发送弹幕
  const handleSend = (msg) => {
    screen.push({
        msg: msg,
        head: userHead,
    }, {
      delay: 0
    })
  };

  
  // 节流限制限制1s
 const throtteHandleSend= throttleFn((msg)=> {
    handleSend(msg);
  }, 1500);


  return (
    <>
      <div style={{ height: '500px'}}></div>
      {/* { toast ? <Toast className='toast'  content="点击过快~"  time='2000' /> : null } */}
      <div className={styles.wrap}  style={{ backgroundColor: '#482020'}}>
        <div className={['barrage_screen',`${styles.content}`].join(' ')} ></div>
        {
          ( !showBtn) ? null : <div className={styles['barrage-oper-wrap']}>
            <div className={styles['barrage-oper-item']} onClick={() => {throtteHandleSend('欢迎回家')}} >欢迎回家</div>
            <div className={styles['barrage-oper-item']} onClick={() => {throtteHandleSend('中国加油')}} >中国加油</div>
        </div>
        }
      </div>
    </>
  );
}
