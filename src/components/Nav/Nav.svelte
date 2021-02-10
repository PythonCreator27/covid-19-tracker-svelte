<script lang="ts">
    let isOpen = false;
    export let segment: string;
    const toggleNav = () => (isOpen = !isOpen);
</script>

<nav class="navbar">
    <div class="navbar-brand">
        <a href="/" class="navbar-item">
            <img src="favicon.png" alt="Logo" />
        </a>
        <span class="navbar-burger" on:click={toggleNav} class:is-active={isOpen}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </span>
    </div>
    <div class="navbar-menu" class:is-active={isOpen}>
        <div class="navbar-start">
            <a href="/" class="navbar-item" class:is-active={segment === undefined}
                >Home</a
            >
            <a href="/about" class="navbar-item" class:is-active={segment === 'about'}
                >About</a
            >
        </div>
    </div>
</nav>

<style>
    @media (min-width: 769px) {
        nav {
            border-bottom: solid gray 1px;
        }
    }
</style>
