import {useState, useRef} from 'react';
import  { HeadPoint } from "./components/headPoint/index";
import  { Barrages } from "./components/barrages/index";
// import MyAvatarPoint from "./components/myAvatarPoint/index";
import "./index.css";

export default function App() {
  const [btnShow, setBtnShow] = useState(false);

  const headPointRef = useRef();

  const userInfo = {
    src: "https://i.picsum.photos/id/690/200/200.jpg?hmac=DN6slU20ktSeMSXbM6U8BG_YHhebxEl3S70qNurkzk8",
    number: "22238",
    nickname: "Zhangsan",
  }

  const updateChildState = () => {
		// startToAnimation为头像组件暴露出的方法
		// headPointRef.current.startToAnimation(userInfo);
    setBtnShow(!btnShow)
    console.log(btnShow)
	}

  return (
    <div className="App">
      <HeadPoint ref={headPointRef} />
      {/* <MyAvatarPoint />  */}
      <Barrages showBtn={!btnShow} userHead={userInfo.src} />
      <div className="lightup-btn">
        <span className="tx" onClick={updateChildState}  style={{display: btnShow ? 'none' : 'block'}}>
          点亮画卷
        </span>
      </div>
    </div>
  );
}
