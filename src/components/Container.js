import { Flex } from "@chakra-ui/core";
import NavBar from "../components/NavBar";

const Container = props => {
  return (
    <Flex direction="column" margin="0 auto" w="80vw">
      <NavBar />
      {props.children}
    </Flex>
  );
};

export default Container;
