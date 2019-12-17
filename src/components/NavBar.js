import { Box, Link } from "@chakra-ui/core";

const NavBar = () => {
  return (
    <Box p={3} w="80vw" color="white" bg="gray.600" boxShadow="md">
      <Box float="right">
        <Link href="/" mr="4">
          Home
        </Link>
        <Link href="/user" mr="4">
          Profile
        </Link>
        <Link href="/stats" mr="4">
          Stats
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
