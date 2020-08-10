const baseURL = 'api.coronavirus.data.gov.uk/v1/data?'

export default {
    getData(filters) {
        const search = (baseURL + 'filters=' + 'areaName=City of Edinburgh;areaType=utla' + '&structure={"date":"date",' + filters + '}')
        console.log(filters)
        console.log(search)
        return fetch(search)
        .then(res => res.json())
    }
}