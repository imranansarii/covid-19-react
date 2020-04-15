import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
      changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        return error;
    }
};

export const fetchDailyData = async () => {
    try {
      const { data } =   await axios.get(`${url}/daily`)
      console.log(data);

      const modifiedData = data.map(({confirmed, deaths, reportDate}) => ({
          confirmed : confirmed.total,
          deaths : deaths.total,
          date : reportDate
      }));

      return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data : { countries } } = await axios.get(`${url}/countries`)

        return countries.map(({name}) => name);
    } catch (error) {
        console.log(error)
    }
}