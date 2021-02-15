<script context="module" lang="ts">
    import type { Preload } from '@sapper/common';
    import CovidChart from '../components/COVID/CovidChart/CovidChart.svelte';
    import CovidStats from '../components/COVID/CovidStats/CovidStats.svelte';
    import TableContainer from '../components/Table/TableContainer/TableContainer.svelte';
    import { usStats } from '../data/requests';

    export const preload: Preload = async function () {
        try {
            const stats = await usStats();
            return { stats };
        } catch (err) {
            this.error(500, err.message);
            return;
        }
    };
</script>

<script lang="ts">
    export let stats;
</script>

<svelte:head>
    <title>COVID-19 Tracker (US)</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>COVID-19 Tracker (US)</h1>
    </div>
</div>

<CovidStats {stats} />
<CovidChart />
<TableContainer />
