import "./index.css";

import { HeadPoint } from "./components/headPoint";

export default function App() {

  const userIno = {
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

  return (
    <div className="App">
      <HeadPoint userIno={userIno} />
      <div className="lightup-btn">
        <span  className="tx">
          点亮画卷
        </span>
      </div>
    </div>
  );
}
