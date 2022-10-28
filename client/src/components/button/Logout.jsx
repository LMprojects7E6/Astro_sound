import { useContext } from "react";
// import Button from "./Button";
import { AuthContext } from "context/AuthProvider";
import {  useNavigate } from "react-router-dom";
const Logout = ({className}) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (

  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a onClick={onLogout} className={className}>Logout</a>
  );
};

export default Logout;
