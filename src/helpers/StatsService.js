const baseURL = "http://api.coronavirus.data.gov.uk/v1/data?";

// API Issues:
// Call using newCasesByPubli, dateshDate, newCasesBySpecimenDate, newAdmissions,
// newDe// athsByPublishDate, newDeathsByDeathDate
// 
// Nations give all stats, except:
//      // Scotland doesn't give deaths by death date
//      N Ireland doesn't give deaths by death date or cases by specimen date

// Regions only give cases by specimen date, deaths by death date, no admissions

// UTLAs only give cases, not deaths or admissions
//      Scottish UTLAs only give stats for yesterday
//      N Ireland doesn't have any UTLAs

//filters = areaType, areaName, date
//e.g. filters=areaType=nation;areaName=england;date=2020-08-01

//structure =
//e.g. &structure=

export default {
  //   getData(structureString) {
  //     let filterString = "areaType=utla;areaName=Bridgend";
  //     // let structureString = {};
  //     const search =
  //       baseURL +
  //       "filters=" +
  //       filterString +
  //       '&structure={"date":"date",' +
  //       structureString +
  //       "}";
  //     console.log(search);
  //     return fetch(search).then((res) => res.json());
  //   },
  // };

  // THIS API CALL WORKS FOR NATIONS
  // https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=Scotland&structure={%22areaType%22:%22areaType%22,%22code%22:%22areaCode%22,%22areaName%22:%22areaName%22,%22date%22:%22date%22,%22newCases%22:%22newCasesByPublishDate%22,%22newAdmissions%22:%22newAdmissions%22,%22newDeaths%22:%22newDeathsByPublishDate%22}

  // THIS API CALL WORKS FOR REGIONS
  // https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=region;areaName=North%20East;date=2020-05-15&structure={%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22date%22:%22date%22,%22newCases%22:%22newCasesBySpecimenDate%22,%22cumulativeCases%22:%22cumCasesBySpecimenDate%22,%22newDeaths%22:%22newDeathsByDeathDate%22,%22cumulativeDeaths%22:%22cumDeathsByDeathDate%22}
  getData(location, filters, date='') {
    const dateString = (date) => {
      if (date === '') {
        return ''
      } 
      return ";" + "date=" + date
    }
    const search =
      baseURL +
      "filters=areaName=" +
      location.areaName +
      ";" +
      "areaType=" +
      location.areaType +
      dateString(date) +
      '&structure={"date":"date","areaName":"areaName",' +
      filters +
      "}";
    return fetch(search).then((res) => res.json());
  },
  getMultipleDates(location, filters, dates) {
    const promises = dates.map(date => {
      return this.getData(location, filters, date)
    })
    return Promise.all(promises)
  }
};
