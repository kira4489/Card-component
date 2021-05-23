import imgHeader from "../../Assets/image-header-mobile.jpg";
import imgDesktop from "../../Assets/image-header-desktop.jpg";
import "./index.css"

const Img = () => {
  return (
    <div className="container-mobile__img">
      <img src={imgHeader} />
      <div className="container-desktop__img">
        <img src={imgDesktop} />
      </div>
    </div>
  );
};

export default Img;
