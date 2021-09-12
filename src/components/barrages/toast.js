import React, { useRef, useState, useEffect } from 'react';
import { Transition } from "react-transition-group";

import './toast.scss';

const Toast = (props) => {
    const {  content, time } = props;
    const [visiable, setVisiable] = useState(false);
    const timerID = useRef(0);

  const [exit, setExit] = useState(false);

    const nodeRef = useRef(null);
    const duration = 200;
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 1,
    };

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 0 },
        exiting: { opacity: 1 },
        exited: { opacity: 1 },
    };
    
    useEffect(() => {
        const show = () => {
            if (timerID.current) return;
            
            if (content) {
                setVisiable(true);
                timerID.current = setTimeout(() => {
                    setVisiable(false);
                }, time);
            }
        };
        const hide = () => {
            clearTimeout(timerID.current);

            setVisiable(false); //
            // 预留toast消失之后的回调
        };
        show();
        return () => {
            hide();
        };
    }, [content, time]);
    if (!visiable) return null;
    return (
        <Transition
          in={exit}
          timeout={duration}
          nodeRef={nodeRef}
          onEntered={() => {
            // setTimeout(() => {
            //   setExit(!exit);
            //   setTimeout(() => {
            //     // setUserInfo(!userInfo);
            //     // console.log(0, "onEntered");
            //   }, 800)
            // }, 3500);
          }}
        >
          {(state) => {
            return (
              <div
                className="cus_toast"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                  <div className="cus_toast_info">{content}</div>
              </div>
            );
          }}
        </Transition>
    );
};

export default Toast;