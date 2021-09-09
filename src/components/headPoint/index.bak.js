import {
    useState,
    useRef,
    useEffect,
    useImperativeHandle,
    forwardRef,
  } from "react";
  import { CSSTransition, Transition } from "react-transition-group";
  
  import "./index.scss";
  
  import { Rank } from "./rank";
  
  let HeadPointApp = (props, ref) => {
    const [userInfo, setUserInfo] = useState(false);
    const [inProp, setInProp] = useState(false);
    const [inPropCent , setPropCent] = useState(false);
  
    const nodeRef = useRef(null);
  
    const duration = 500;
  
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
        }, 1000);
      },
    }));
  
    const showPic = () => {
      console.log("通知，截图开始~");
    };
  
    const onEnter = () => {
      console.log("onEnter");
    };
    const onExit = () => {
      console.log("onExit");
    };
  
    const T = ()=>{
      return(<div>99</div>)
    }
  
    const Child = (props) => {
      const {childinfo} = props
      return(
        <div className="">
        <div className="head_point_cnt">
          <div className="pic rotate">
            <img src={childinfo.src} alt="" />
          </div>
  
          <CSSTransition
            in={inProp}
            classNames="fade"
            timeout={100}
            nodeRef={nodeRef}
            onEnter={onEnter}
            onExit={onExit}
            onEntered={() => {
              // 3s,销毁
              console.log("onEntered");
              setTimeout(() => {
                console.log(444)
                showPic();
                setUserInfo(false);
              }, 2000);
            }}
            unmountOnExit
          >
            {() => {
              return (
                <div>
                  <div className="name">{childinfo.nickname}</div>
                  <div className="desc">
                    你是第
                    <Rank count={childinfo.number} />
                    位点亮画卷，
                    <br />
                    欢迎一起回家
                  </div>
                </div>
              );
            }}
          </CSSTransition>
        </div>
      </div>
  
      )
    }
  
    const getDomStr = (info) => {
      return (
        <Transition 
        in={inProp} timeout={duration} 
        nodeRef={nodeRef}
        onEntered={() => {
          console.log(0,"onEntered");
          setPropCent(true)
        }}
        >
          {(state) => 
          {
          console.log(99,inPropCent)
  
          return (
            <div
              className="head_point_wrap"
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              { console.log(88,inPropCent) }
             { inPropCent ? <Child childinfo={info} /> : null}
  
            </div>
          )}}
        </Transition>
      );
    };
  
    return <>{userInfo && userInfo.src ? getDomStr(userInfo) : null}</>;
  };
  
  export const HeadPoint = forwardRef(HeadPointApp);
  