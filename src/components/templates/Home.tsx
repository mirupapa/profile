import Activity from "components/organism/home/Activity"
import SNS from "components/organism/home/SNS"
import Top from "components/organism/home/Top"
import Topics from "components/organism/home/Topics"
import Works from "components/organism/home/Works"
import React from "react"

const Home: React.FC = () => {
  return (
    <div>
      <Top />
      <Works />
      <Topics />
      <Activity />
      <SNS />
    </div>
  )
}

export default Home
