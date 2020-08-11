export default {
  getAreaTypeRank(areaType) {
    const ranking = {
      nation: 5,
      region: 4,
      nhsRegion: 3,
      utla: 2,
      ltla: 1,
    };
    return ranking[areaType];
  },

  sortLocations(a, b) {
    // Sort by area code, i.e. all England together, all Scotland together
    if (a.areaCode[0] > b.areaCode[0]) {
      return 1;
    } else if (a.areaCode[0] < b.areaCode[0]) {
      return -1;
    }
    // If same, area code, sort by area type, i.e. country first, then region, then utla
    else {
      if (this.getAreaTypeRank(a.areaType) < this.getAreaTypeRank(b.areaType)) {
        return 1;
      } else if (
        this.getAreaTypeRank(a.areaType) > this.getAreaTypeRank(b.areaType)
      ) {
        return -1;
      }
    }
  },
};
