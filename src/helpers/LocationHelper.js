export default {
  getNation(areaCode) {
    const nationConversion = {
      E: "England",
      S: "Scotland",
      N: "Northern Ireland",
      W: "Wales",
    };
    const code = areaCode[0];
    return nationConversion[code];
  },
};
