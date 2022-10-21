import { useContext } from "react";
import Button from "./Button";
import { AuthContext } from "hooks/context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const Logout = ({className}) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (

  <a onClick={onLogout} className={className}>Logout</a>
  );
};

export default Logout;
