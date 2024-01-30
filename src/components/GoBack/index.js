import { useNavigate } from "react-router-dom";

function GoBack(props) {
  const navigate = useNavigate();
  const { step, name } = props;

  const handleClick = () => {
    navigate(step);
  }

  return (
    <>
      <button className="btn" onClick={handleClick}>{name}</button>
    </>
  )
}

export default GoBack;