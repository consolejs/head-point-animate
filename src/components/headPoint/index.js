import {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

import { CSSTransition, Transition } from "react-transition-group";

import { Rank } from "./rank";

import "./index.scss";

let HeadPointApp = (props, ref) => {
  const [userInfo, setUserInfo] = useState(false);
  const [inProp, setInProp] = useState(false);
  const [rank, setRank] = useState(false);

  const [test, setTest] = useState(false);

  const nodeRef = useRef(null);
  const duration = 200;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  useImperativeHandle(ref, () => ({
    // startToAnimation,执行动画，暴露给点亮按钮
    startToAnimation: (passUserInfo) => {
      console.log("传值用户数据", passUserInfo);
      setUserInfo(passUserInfo);
      setTimeout(() => {
        setInProp(!inProp);
      }, 60);
    },
  }));

  const getRankDesc = (count) => {
    return (
      <div className="desc">
        你是第
        <Rank count={count} />
        位点亮画卷，
        <br />
        欢迎一起回家
      </div>
    );
  };

  const getDomStr = (info) => {
    return (
      <div className={`head_point_wrap ${ test ?"head_point_exit":''}`}>
        <Transition
          in={inProp}
          timeout={duration}
          nodeRef={nodeRef}
          onEntered={() => {
            setTimeout(() => {
              setTest(!test);
              setTimeout(() => {
                setUserInfo(!userInfo);
                console.log(0, "onEntered");
              }, 1000)
            }, 3000);
          }}
        >
          {(state) => {
            return (
              <div
                className="mask"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              ></div>
            );
          }}
        </Transition>
        <div className="head_point_cnt">
          <div className="pic">
          <img className="back" src={info.src} alt="" />
          <img className="middle m1" src={info.src} alt="" />
          <img className="middle m2" src={info.src} alt="" />
          <img className="middle m3" src={info.src} alt="" />
          <img className="middle m4" src={info.src} alt="" />
          <img className="middle m5" src={info.src} alt="" />
          <img className="middle m6" src={info.src} alt="" />
          <img className="front" src={info.src} alt="" />
          </div>
          <CSSTransition
            in={inProp}
            classNames="headpoint_desc"
            timeout={200}
            nodeRef={nodeRef}
            onEntered={(el) => {
              // console.log(1,'onEntered')
              setTimeout(() => {
                setRank(!rank);
              }, 500);
            }}
            unmountOnExit
          >
            {(state) => {
              return (
                <div ref={nodeRef}>
                  <div className="name">{info.nickname}</div>
                  {rank ? getRankDesc(info.number) : null}
                </div>
              );
            }}
          </CSSTransition>
        </div>
      </div>
    );
  };

  return <>{userInfo && userInfo.nickname  ? getDomStr(userInfo) : null}</>;
};

export const HeadPoint = forwardRef(HeadPointApp);
