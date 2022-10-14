import { useContext } from "react";
import Button from "./Button";
import { AuthContext } from "context/AuthProvider";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <Button
      type={"button"}
      text={"Log out"}
      onClick={onLogout}
      bg={"mainButtonBg"}
    />
  );
};

export default Logout;
