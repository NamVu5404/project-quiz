import Result from "./Result";
import GoBack from "../../../components/GoBack";
import { useLocation } from "react-router-dom";

function TabResult() {
  const topicId = useLocation().state;

  return (
    <>
      <Result topicId={topicId} />

      <span style={{marginRight: "15px"}}>
        <GoBack step={-1} name="Làm lại" />
      </span>
      <GoBack step={-2} name="Thoát" />
    </>
  )
}

export default TabResult;