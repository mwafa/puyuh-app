import { Box } from "@chakra-ui/core"
import moment from "moment"

import { SCHEDULES } from "../constant/schedules"
import { Cage } from "../implements/models/Cage"
import { CageCard } from "../components/molecules/CageCard"

const devPages: React.FC = () => {
  const kandang = new Cage("Kandang 1", moment([2020, 7, 18]), SCHEDULES)
  const kandang2 = new Cage("Kandang 2", moment([2020, 7, 10]), SCHEDULES)
  return (
    <Box>
      <CageCard cage={kandang} />
      <CageCard cage={kandang2} />
    </Box>
  )
}

export default devPages
