<script context="module" lang="ts">
    import type { Preload } from '@sapper/common';
    import CovidChart from '../components/COVID/CovidChart/CovidChart.svelte';
    import CovidStats from '../components/COVID/CovidStats/CovidStats.svelte';
    import { getStateNames } from '../data/stateNames';
    export const preload: Preload = async function (this, { params }) {
        const state = params['state'];
        const stateNames = await getStateNames();
        if (stateNames.find(s => s === state.split('-').join(' ')) === undefined) {
            this.error(404, 'State Not Found');
            return;
        }
        return {
            state: params.state
        };
    };
</script>

<script lang="ts">
    export let state: string;
</script>

<svelte:head>
    <title>COVID-19 Tracker (US) | {state}</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>COVID-19 Tracker (US) | {state}</h1>
    </div>
</div>

<CovidStats />
<CovidChart />
