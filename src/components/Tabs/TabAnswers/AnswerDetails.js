import ResultItem from "../TabResult/ResultItem";
import GoBack from "../../../components/GoBack"
import { useLocation } from "react-router-dom";

function AnswerDetails() {
  const topicId = useLocation().state;

  return (
    <>
      <GoBack step={-1} name="Trở lại" />

      <ResultItem topicId={topicId} />
    </>
  )
}

export default AnswerDetails;