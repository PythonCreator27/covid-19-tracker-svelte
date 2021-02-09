<script context="module" lang="ts">
    import type { Preload } from '@sapper/common';
    import CovidChart from '../components/COVID/CovidChart/CovidChart.svelte';
    import CovidStats from '../components/COVID/CovidStats/CovidStats.svelte';
    export const preload: Preload = async ({ params }) => {
        return {
            state: params.state
        };
    };
</script>

<script lang="ts">
    export let state: string;
</script>

<h1>{state}</h1>

<CovidStats />
<CovidChart />
