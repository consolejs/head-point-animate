import {useState, useRef} from 'react';
import  {HeadPoint} from "./components/headPoint";
import "./index.css";

export default function App() {
  const [btnShow, setBtnShow] = useState(false);
  const headPointRef = useRef();
  const userInfo = {
    src:
      "https://i.picsum.photos/id/603/50/50.jpg?hmac=_USXyljqpKjZi8WyEyPYPDm9bjzp_mHNUw" +
      "h6goOkQG8",
    number: "2123",
    nickname: "zhangsan",
    posX: "50%",
    posY: "45%",
    posW: "60vw",
    posH: "20vh",
  }

  const updateChildState = () => {
		// startToAnimation为头像组件暴露出的方法
		headPointRef.current.startToAnimation(userInfo);
    setBtnShow(!btnShow)
    console.log(btnShow)
	}

  return (
    <div className="App">
      <HeadPoint ref={headPointRef} />
      <div className="lightup-btn">
        <span className="tx" onClick={updateChildState}  style={{display: btnShow ? 'none' : 'block'}}>
          点亮画卷
        </span>
      </div>
    </div>
  );
}
