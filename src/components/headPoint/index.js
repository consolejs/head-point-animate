import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import  "./index.scss";

import { Rank } from "./rank";

let HeadPointApp = (props, ref) => {

  const [userInfo, setUserInfo] = useState(false);

  useImperativeHandle(ref, () => ({
    // startToAnimation,执行动画，暴露给点亮按钮
    startToAnimation: (passUserInfo) => {
      console.log("传值用户数据", passUserInfo);
      setUserInfo(passUserInfo)
    }
  }))

  const showPic = () => {
    console.log("通知，截图开始~");
  };

  const getDomStr = (info) => {
    return (
      <div className="head_point_wrap">
        <div className="head_point_cnt">
          <div className="pic rotate">
            <img src={info.src} alt="" />
          </div>
          <div className="name">{info.nickname}</div>
          <div className="desc">
            你是第<Rank count={info.number}/>位点亮画卷，<br />欢迎一起回家
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      { userInfo && userInfo.src ?  getDomStr(userInfo) : null }
    </>
  );
};

export const HeadPoint = forwardRef(HeadPointApp);



{/* <CSSTransition
    in={head}
    classNames='show'
    timeout={300}
    unmountOnExit>
    {state => {
        if(state==='exited'){
            console.log(1,state)
        }
        return (
            <div className='pic' onClick={()=>setTimeout(()=>{
                
            }, 2000)}> 
                <img src={info.src} alt="" />
            </div>
        )
    }}
</CSSTransition> */}