import { Link } from "react-router-dom";
export const HomePage = () => (
  <div>
    <h1>This is the Home Page</h1>
    Please go to <Link to="/sign-up">Sign Up</Link> page
  </div>
);
