import { Box } from "@chakra-ui/core"
import moment from "moment"

import { SCHEDULES } from "../constant/schedules"
import { Cage } from "../implements/models/Cage"

const devPages: React.FC = () => {
  const kandang = new Cage("Kandang 1", moment([2020, 7, 18]), SCHEDULES)
  console.log(kandang)
  return <Box>It's Works!</Box>
}

export default devPages
