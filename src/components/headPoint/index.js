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
      <div className="head_point_wrap">
        <Transition
          in={inProp}
          timeout={duration}
          nodeRef={nodeRef}
          onEntered={() => {
            setTimeout(() => {
              console.log(0, "onEntered");
              setUserInfo(!userInfo);
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
            <img src={info.src} alt="" />
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
              console.log(1, state);
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

  return <>{userInfo && userInfo.src  ? getDomStr(userInfo) : null}</>;
};

export const HeadPoint = forwardRef(HeadPointApp);
