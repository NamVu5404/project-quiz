import ResultItem from "./ResultItem";

function Result(props) {
  const { topicId } = props;

  return (
    <>
      <ResultItem topicId={topicId} />
    </>
  );
}

export default Result;
