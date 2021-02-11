<script lang="ts">
    import CovidChart from '../components/COVID/CovidChart/CovidChart.svelte';
    import CovidStats from '../components/COVID/CovidStats/CovidStats.svelte';
    import TableContainer from '../components/Table/TableContainer/TableContainer.svelte';
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
