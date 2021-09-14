import React, { useEffect, useState, useRef } from "react";
import BulletScreen from "rc-bullets";
import styles from "./index.module.css";
// import { isLogin } from "../../utils/login";
// import StatusButton from '../status-button/status-button';
import StatusButton from '../status-button/status-button';

// import Toast from "./toast";

const defaultBarrages = [
  "欢迎回家👏👏",
  "中国加油💪🏻💪🏻",
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
        duration: 4,
        loopCount: 1,
        pauseOnHover: false,
        trackHeight: 26,
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
      }, 1800);

      setScreen(sc);
    };

    performBarrage();

  }, [props.barrages]);

  const throttleFn = (func, delay = 60, toast, ctx) => {
    let previous = null;
    let t = null;
    return (...args) => {
      let now = +new Date();
      // !previous -> 捕获第一次
      if (!previous || now - previous > delay) {
        previous = now;
        clearTimeout(t);
        func.apply(ctx, args);
        return;
      } else {
        toast.apply(ctx, args);
      }
      // 捕获最后一次
      clearTimeout(t);
      t = setTimeout(() => {
        previous = null;
        func.apply(ctx, args);
      }, delay);
    };
  }

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
  }, 3000, ()=>{
    console.log('调用toast~')
  });


  return (
    <>
      <div style={{ height: '500px'}}></div>
      {/* { toast ? <Toast className='toast'  content="点击过快~"  time='2000' /> : null } */}
      <div className={styles.wrap}  style={{ backgroundColor: '#3c2f2f'}}>
        <div className={['barrage_screen',`${styles.content}`].join(' ')}></div>
        {
          ( !showBtn) ? null : <div className={styles['barrage-oper-wrap']} >
            <StatusButton><div className={styles['barrage-oper-item']} onClick={() => {throtteHandleSend('欢迎回家👏👏')}} >欢迎回家</div></StatusButton>
            <StatusButton><div className={styles['barrage-oper-item']} onClick={() => {throtteHandleSend('中国加油💪🏻💪🏻')}} >中国加油</div></StatusButton>
        </div>
        }
      </div>
    </>
  );
}
