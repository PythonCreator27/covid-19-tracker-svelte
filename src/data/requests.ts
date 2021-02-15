import axios from 'axios';
import { parseUsStats } from './parsers';

export const usStats = async () => {
    const res = await axios.get(
        'https://disease.sh/v3/covid-19/countries/US?allowNull=true'
    );
    return parseUsStats(res);
};
