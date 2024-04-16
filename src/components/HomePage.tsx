import Navbar from "./Navbar";
import classes from "./Homepage.module.css";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          width: "100%",
          paddingTop: "10rem",
          height: "100%",
        }}
      >
        <div className={classes.containerHomepage}>
          <div className={classes.textContainer}>
            <div style={{ color: "gray" }}>
              Less stress when sharing expenses
            </div>
            <span>with anyone.</span>
            <p style={{ fontSize: "0.8rem", width: "76%", color: "grey" }}>
              Keep track of your shared expenses and balances with housemates,
              trips, groups, friends, and family.
            </p>
            <NavLink to={"/signup"} className={classes.cta}>
              <span type="button">
                <div>Sign Up</div>
              </span>
            </NavLink>
          </div>
          <div className={classes.logoContainer}>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/expense-management-9522754-7740766.png"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
