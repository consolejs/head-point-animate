import {useRef} from 'react';
import  {HeadPoint} from "./components/headPoint";
import "./index.css";

export default function App() {
  const headPointRef = useRef();
  const userInfo = {
    src:
      "https://i.picsum.photos/id/603/50/50.jpg?hmac=_USXyljqpKjZi8WyEyPYPDm9bjzp_mHNUw" +
      "h6goOkQG8",
    number: "2123",
    nickname: "zhangsan",
    posX: "50%",
    posY: "50%",
    posW: "200px",
    posH: "160px",
  }

  const updateChildState = () => {
		// startToAnimation为头像组件暴露出的方法
		headPointRef.current.startToAnimation(userInfo);
	}

  return (
    <div className="App">
      <HeadPoint ref={headPointRef} />
      <div className="lightup-btn">
        <span className="tx" onClick={updateChildState}>
          点亮画卷
        </span>
      </div>
    </div>
  );
}
