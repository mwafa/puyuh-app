import { Box, theme } from "@chakra-ui/core"

export const ContainerBody: React.FC = ({ children }) => {
  return (
    <Box backgroundColor={theme.colors.gray[50]} minHeight="100vh">
      <Box
        p={4}
        border={["none", "solid 1px #eee"]}
        maxWidth={["100%", "56rem"]}
        margin={"auto"}
        borderRadius={5}
      >
        {children}
      </Box>
    </Box>
  )
}
