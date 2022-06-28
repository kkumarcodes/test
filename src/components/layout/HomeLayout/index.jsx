import { useOutlet } from "react-router-dom";
import "./styles.scss";

export const HomeLayout = () => {
  const outlet = useOutlet();

  return (
    <div className="homelayout">
      <div className="leftpanel">{outlet}</div>
      <div className="rightpanel">
        <h2>Dummy Heading</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
      </div>
    </div>
  );
};
