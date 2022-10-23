import ReactDOM from "react-dom"; // Update this line

const Portal = ({ children }) => {
  const el = document.getElementById("portal");
  return ReactDOM.createPortal(children, el);
};

export default Portal;
