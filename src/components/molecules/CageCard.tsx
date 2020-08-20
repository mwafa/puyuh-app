import { Box, FlexProps, theme, Flex, Divider, Alert } from "@chakra-ui/core"
import { ICageModel } from "../../interface/models/ICage"
import { LANG } from "../../constant/lang"
import { TaskItem } from "../atoms/TaskItem"

interface CageCardProps extends FlexProps {
  cage: ICageModel
}
export const CageCard: React.FC<CageCardProps> = ({ cage, ...rest }) => {
  const statusConverter = (key: string) => {
    switch (key) {
      case "danger":
        return "error"
      case "warning":
        return "warning"
      case "info":
        return "info"
    }
  }
  const currentTodo = cage.getCurrentTodo()
  return (
    <Flex
      flexDirection="column"
      borderRadius={"5px"}
      bgImage={`linear-gradient(to bottom right, ${theme.colors.blue[100]},${theme.colors.blue[50]})`}
      p={5}
      boxShadow="3px 3px 5px gray"
      mb={4}
      {...rest}
    >
      <Flex justifyContent="space-between">
        <Box fontSize="2xl">{cage.getName()}</Box>
        <Flex textAlign="right" width="100px" flexDirection="column">
          <Box fontSize="xs">{LANG.components.day_now(cage.getDay())}</Box>
          <Box fontSize="xs">{LANG.components.day_less(cage.getDayLess())}</Box>
        </Flex>
      </Flex>
      <Flex justifyContent="space-around" wrap="wrap" py={2}>
        <Flex>
          <Box fontSize="34px" pr={3}>
            {cage.getCurrentTodo().cageCondition.temp.ideal}&deg;C
          </Box>
          <Flex flexDirection="column" fontSize="small">
            <Box>{currentTodo.cageCondition.temp.max}&deg;C</Box>
            <Box>{currentTodo.cageCondition.temp.min}&deg;C</Box>
          </Flex>
        </Flex>
        <Flex>
          <Box fontSize="34px" pr={3}>
            {currentTodo.cageCondition.humidity.ideal}%
          </Box>
          <Flex flexDirection="column" fontSize="small">
            <Box>{currentTodo.cageCondition.humidity.max}%</Box>
            <Box>{currentTodo.cageCondition.humidity.min}%</Box>
          </Flex>
        </Flex>
      </Flex>
      {currentTodo.alerts &&
        currentTodo.alerts.map((alert) => {
          const status = statusConverter(alert.level)
          return (
            <Alert
              key={status + alert.message}
              variant="left-accent"
              color={status}
              mb={1}
              status={status}
            >
              {alert.message}
            </Alert>
          )
        })}
      <Divider />
      {currentTodo.tasks
        ? currentTodo.tasks.map((task, idx) => (
            <TaskItem key={`${idx}-${task.todo}`}>{task.todo}</TaskItem>
          ))
        : "Nothing Todo"}
    </Flex>
  )
}
