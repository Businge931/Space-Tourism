import classes from "./MobileDrawer.module.css";
const OverLay = ({ setShow }) => {
  return (
    <div
      className={classes.overlay_wrapper}
      onClick={() => setShow(false)}
    ></div>
  );
};

export default OverLay;
