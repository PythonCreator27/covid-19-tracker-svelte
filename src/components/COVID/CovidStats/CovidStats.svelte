<script lang="ts">
    export let stats;
</script>

<div class="section">
    <div class="container">
        <div class="columns">
            <h2 class="is-3 column">Cases: {stats.cases}</h2>
            <h2 class="is-3 column">Deaths: {stats.deaths}</h2>
            <h2 class="is-3 column">Recovered: {stats.recovered}</h2>
            <h2 class="is-3 column">Active: {stats.active}</h2>
        </div>
    </div>
</div>
<div class="section">
    <div class="container">
        <div class="columns">
            <h2 class="is-3 column">Critical: {stats.critical}</h2>
            <h2 class="is-3 column">Tests: {stats.tests}</h2>
            <h2 class="is-3 column">Population: {stats.population}</h2>
            <h2 class="is-3 column">Updated: {stats.updated}</h2>
        </div>
    </div>
</div>

<style>
    .columns {
        border: solid 1px black;
    }
</style>
