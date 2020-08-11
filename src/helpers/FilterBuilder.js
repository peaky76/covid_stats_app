const camelCaseToSentenceCase = (string) => {
  let result = string.replace(/([A-Z])/g, " $1");
  let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

export default {
  buildFilters() {
    let filterObjects = [];
    const govApiFilters = [
      "newCasesByPublishDate",
      // "cumCasesByPublishDate",
      "newCasesBySpecimenDate",
      // "cumCasesBySpecimenDate",
      // "maleCases",
      // "femaleCases",
      "newAdmissions",
      // "cumAdmissions",
      // "cumAdmissionsByAge",
      // "cumTestsByPublishDate",
      // "newTestsByPublishDate",
      // "covidOccupiedMVBeds",
      // "hospitalCases",
      // "plannedCapacityByPublishDate",
      "newDeathsByPublishDate",
      // "cumDeathsByPublishDate",
      "newDeathsByDeathDate",
      // "cumDeathsByDeathDate",
      // "femaleDeaths",
      // "maleDeaths",
    ];
    govApiFilters.forEach((filter) => {
      let prettyName = camelCaseToSentenceCase(filter);
      prettyName = prettyName.replace("New", "");
      filterObjects.push({
        name: filter,
        prettyName: prettyName,
        excludeFor: ["utla", "region"],
      });
    });

    return filterObjects;
  },
};
