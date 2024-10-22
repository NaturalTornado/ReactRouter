  import { Outlet, useParams } from "react-router-dom";
  import DefaultProfile from "./DefaultProfile";
  import Spinach from "./Spinach";
  import Popeye from "./Popeye";
  import { Link } from "react-router-dom";

  const Profile = () => {
    const { name } = useParams();

    return (  
      <div>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
        <hr />
        <h2>The profile visited is here:</h2>
        {name === "popeye" ? (
          <Outlet />
        ) : name === "spinach" ? (
          <Outlet />
        ) : (
          <DefaultProfile />
        )}
        <div>
        <Link to="/">Click here to go back</Link>
        </div>
      </div>
    );
  };

  export default Profile;
