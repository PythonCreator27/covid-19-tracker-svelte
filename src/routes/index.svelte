<script lang="ts">
    import CovidChart from '../components/COVID/CovidChart/CovidChart.svelte';
    import CovidStats from '../components/COVID/CovidStats/CovidStats.svelte';
    import TableContainer from '../components/Table/TableContainer/TableContainer.svelte';
</script>

<svelte:head>
    <title>COVID-19 Tracker App for the US</title>
</svelte:head>

<CovidStats />
<CovidChart />
<TableContainer />
