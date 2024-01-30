import "./TabTopic.scss";
import { Outlet } from "react-router-dom";

function TabTopic() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default TabTopic;