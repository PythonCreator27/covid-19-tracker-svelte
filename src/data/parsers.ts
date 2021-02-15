import type { AxiosResponse } from 'axios';
import moment from 'moment';
import { number } from './format';

interface USShared {
    country: 'USA';
    countryInfo: {
        _id: 840;
        iso2: 'US';
        iso3: 'USA';
        lat: 38;
        long: -97;
        flag: 'https://disease.sh/assets/img/flags/us.png';
    };
    continent: 'North America';
    todayDeaths: number;
    todayRecovered: number;
    todayCases: number;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
}

interface USData extends USShared {
    updated: number;
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
}

interface USResponse extends USShared {
    cases: string;
    deaths: string;
    recovered: string;
    active: string;
    critical: string;
    casesPerOneMillion: string;
    deathsPerOneMillion: string;
    tests: string;
    testsPerOneMillion: string;
    population: string;
    activePerOneMillion: string;
    criticalPerOneMillion: string;
    updated: string;
}
export const parseUsStats = (data: AxiosResponse<USData>): USResponse => {
    const stats = data.data;
    return {
        ...stats,
        cases: number(stats.cases),
        active: number(stats.active),
        activePerOneMillion: number(stats.activePerOneMillion),
        casesPerOneMillion: number(stats.casesPerOneMillion),
        deaths: number(stats.deathsPerOneMillion),
        recovered: number(stats.recovered),
        critical: number(stats.critical),
        deathsPerOneMillion: number(stats.deathsPerOneMillion),
        tests: number(stats.tests),
        testsPerOneMillion: number(stats.testsPerOneMillion),
        population: number(stats.population),
        criticalPerOneMillion: number(stats.criticalPerOneMillion),
        updated: moment(stats.updated).format('LLLL')
    };
};
