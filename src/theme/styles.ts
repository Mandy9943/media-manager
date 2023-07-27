export const globalStyles = {
  colors: {
    gray: {
      200: "#F5F5FF",
      300: "#A9A9B7",
      500: "#70707C",
      600: "#1E1E24",

      700: "#1f2733",
    },
    black: {
      400: " #0F0F13",
    },
    seaGreen: {
      500: "#15FFAB",
    },
    mainLigt:
      "linear-gradient(127.09deg, rgba(6, 11, 40, 0.626) 19.41%, rgba(10, 14, 35, 0.301) 76.65%)",
    main: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
    mainDark:
      "linear-gradient(127.09deg, rgba(3, 6, 22, 0.94) 19.41%, rgba(1, 2, 3, 0.49) 76.65%)",
    darkAmber: " #FE7E07",
    proteo: "#b28937",
    frostySkies: "#06D7F6",

    brand: {
      50: "#cbbff8",
      100: "#876cea",
      200: "#582CFF",
      300: "#542de1",
      400: "#4a25d0",
      500: "#3915bc",
      600: "#300eaa",
      700: "#1c0377",
      800: "#130156",
      900: "#0e0042",
    },
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Plus Jakarta Display",

        fontSize: "14px",
      },
      "*::placeholder": {
        color: "gray.500",
      },
      a: {
        textDecoration: "none !important",
        color: "inherit !important",
      },
      html: {
        fontFamily: "Plus Jakarta Display",
      },
    }),
  },
};
