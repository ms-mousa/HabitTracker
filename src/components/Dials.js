import { useState } from "react";
import { Box } from "@chakra-ui/core";
import { motion } from "framer-motion";
import { css } from "@emotion/core";
import { ThemeProvider } from "@chakra-ui/core/";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};

const Dial = ({ r, s, color, value }) => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "transparent"
    },
    back: {
      opacity: 0,
      pathLength: 1,
      fill: "transparent"
    },
    show: {
      opacity: 1,
      pathLength: value,
      fill: "transparent",
      transition: { type: "tween", duration: 1.5, ease: "backInOut" }
    },
    full: {
      opacity: 0.1,
      pathLength: 1,
      fill: "transparent"
    }
  };
  return (
    <>
      <motion.path
        d={`
            M 100, 100
            m 0, ${-r}
            a ${r},${r} 0 1,0 0,${r * 2}
            a ${r},${r} 0 1,0 0,${-r * 2}
        `}
        strokeWidth={s}
        strokeLinecap="round"
        stroke={color}
        variants={icon}
        initial="back"
        animate="full"
        transition={{
          type: "tween",
          duration: 0.4,
          ease: "easeIn"
        }}
      />
      <motion.path
        d={`
            M 100, 100
            m 0, ${-r}
            a ${r},${r} 0 1,0 0,${r * 2}
            a ${r},${r} 0 1,0 0,${-r * 2}
        `}
        strokeWidth={s}
        strokeLinecap="round"
        stroke={color}
        variants={icon}
      />
    </>
  );
};

const Dials = props => {
  const [animate, setAnimate] = useState("visible");

  return (
    <ThemeProvider>
      <Box w="400px" h="400px" bg="gray.800" p="2">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* <circle cx="100" cy="25" r="11" fill="white"/> */}
          <Dial r={65} s={15} color="#FC8181" value={0.6} />
          <Dial r={48} s={15} color="#63B3ED" value={0.5} />
          <Dial r={31} s={15} color="#B794F4" value={0.6} />
        </motion.svg>
        <button onClick={() => setAnimate("half")}>test</button>
      </Box>
    </ThemeProvider>
  );
};

export default Dials;
