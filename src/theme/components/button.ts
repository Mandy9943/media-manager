export const buttonStyles = {
  components: {
    Button: {
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          boxShadow: "0 0 2px 2px #efdfde",
        },
        "no-hover": {
          _hover: {
            boxShadow: "none",
          },
        },
        "transparent-with-icon": {
          bg: "transparent",
          fontWeight: "bold",
          borderRadius: "inherit",
          cursor: "pointer",

          _active: {
            bg: "transparent",
            transform: "none",
            borderColor: "transparent",
          },
          _focus: {
            boxShadow: "none",
          },
          _hover: {
            boxShadow: "none",
          },
        },
        brand: {
          bg: "brand.200",
          color: "#fff",
          _hover: {
            bg: "brand.300",
          },
          _active: {
            bg: "brand.400",
          },
          _focus: {
            boxShadow: "none",
          },
        },
        outlineWhite: {
          bg: "transparent",
          color: "#fff",
          borderColor: "white",
          borderWidth: "1px",
          _hover: {
            bg: "whiteAlpha.100",
          },
          _active: {
            bg: "whiteAlpha.200",
          },
          _focus: {
            boxShadow: "none",
          },
        },
      },
      baseStyle: {
        borderRadius: "12px",
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
};
