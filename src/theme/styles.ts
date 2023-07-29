import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
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
        fontFamily: inter.style.fontFamily,

        fontSize: "14px",
        bg: "mainLigt",
      },
      "*::placeholder": {
        color: "gray.500",
      },
      a: {
        textDecoration: "none !important",
        color: "inherit !important",
      },

      "& .swal2-modal": {
        bg: "brand.900",
        // color: "white",
      },
    }),
  },
};
