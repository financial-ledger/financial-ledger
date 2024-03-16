import { defineGlobalStyles } from "@pandacss/dev";

export const globalStyle = defineGlobalStyles({
  html: {
    minHeight: "100vh",
    "@supports (-webkit-touch-callout: none)": {
      minHeight: "-webkit-fill-available",
    },
  },
  body: {
    m: "0",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  "html, body, div#__next": {
    height: "100%",
  },
  "*": {
    boxSizing: "border-box",
    WebkitTouchCallout: "none",
    WebkitTapHighlightColor: "transparent",
    "&:not(input, textarea)": {
      userSelect: "none",
    },
  },
  "em, del, pre, strong, li9, ul, il, dl, dt, table, tbody, thead, tfoot, nav, main, menu":
    {
      margin: "0",
      padding: "0",
      font: "inherit",
      verticalAlign: "baseline",
    },
  li: {
    listStyle: "none",
  },
  input: {
    "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
      {
        display: "none",
        WebkitAppearance: "none",
      },
  },
  a: {
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
  },
  button: {
    background: "transparent",
    cursor: "pointer",
    border: "none",
    padding: "0",
  },
  img: {
    "-webkit-user-select": "none",
    "-khtml-user-select": "none",
    "-moz-user-select": "none",
    "-o-user-select": "none",
    "user-select": "none",
    "-webkit-user-drag": "none",
    "-khtml-user-drag": "none",
    "-moz-user-drag": "none",
    "-o-user-drag": "none",
    "user-drag": "none",
  },
});
