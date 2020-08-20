import { Text, Flex, Heading, theme, Link } from "@chakra-ui/core"

const Index: React.FC = () => {
  const { teal } = theme.colors
  return (
    <Flex
      direction="column"
      minH="100vh"
      p={2}
      justifyContent="center"
      alignItems="center"
      bgImage={`linear-gradient(to bottom right, ${teal[100]}, ${teal[300]})`}
    >
      <Heading color="gray" fontSize="5xl" p={5}>
        Puyuh App
      </Heading>
      <Text fontSize="xl">Aplikasi penetasan puyuh</Text>
      <Link
        textDecor="none"
        mt="80px"
        borderRadius="100vh"
        bg={teal[50]}
        py="20px"
        px="80px"
        boxShadow="3px 3px 5px gray"
        fontWeight="bold"
        href="https://github.com/mwafa/puyuh-app"
        _hover={{
          transform: "scale(1.2)",
          transition: "ease 0.2s",
        }}
      >
        Go to Github
      </Link>
    </Flex>
  )
}

export default Index
