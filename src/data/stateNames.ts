import axios from 'axios';

export const getStateNames = async () => {
    return (await axios.get('https://disease.sh/v3/covid-19/historical/usacounties'))
        .data;
};
