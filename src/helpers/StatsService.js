const baseURL = 'http://api.coronavirus.data.gov.uk/v1/data?'

export default {
    getData(location, filters) {
        console.log('statService location:', location)
        console.log('statService filters:', filters)
        const search = (baseURL + 'filters=areaName=' + location.areaName + ';' + 'areaType=' + location.areaType + '&structure={"date":"date",' + filters + '}')
        console.log(search)
        return fetch(search)
        .then(res => res.json())
    }
}