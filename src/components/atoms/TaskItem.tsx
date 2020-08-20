import { BoxProps, Box, Checkbox } from "@chakra-ui/core"

interface TaskItemProps extends BoxProps {}
export const TaskItem: React.FC = ({ children, ...rest }) => {
  return (
    <Checkbox
      boxShadow={"3px 3px 5px gray"}
      borderRadius={100}
      bg="white"
      px={5}
      py={2}
      size="lg"
      mb={2}
    >
      {children}
    </Checkbox>
  )
}
