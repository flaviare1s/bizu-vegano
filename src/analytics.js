// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-6B5T5N7DN2");
};

export const sendPageview = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
