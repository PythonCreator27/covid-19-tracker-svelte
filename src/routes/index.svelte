<script context="module" lang="ts">
    import type { Preload } from '@sapper/common';
    import CovidChart from '../components/COVID/CovidChart/CovidChart.svelte';
    import CovidStats from '../components/COVID/CovidStats/CovidStats.svelte';
    import TableContainer from '../components/Table/TableContainer/TableContainer.svelte';
    import { usStats } from '../data/requests';

    export const preload: Preload = async () => {
        try {
            const stats = await usStats();
            return { usStats: stats };
        } catch (err) {
            console.log(err);
        }
    };
</script>

<script lang="ts">
    export let usStats;
    console.log(usStats.updated);
</script>

<svelte:head>
    <title>COVID-19 Tracker (US)</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>COVID-19 Tracker (US)</h1>
    </div>
</div>

<CovidStats />
<CovidChart />
<TableContainer />
