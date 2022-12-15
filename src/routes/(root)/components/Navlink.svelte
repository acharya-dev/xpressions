<script lang="ts">
    import { page } from '$app/stores';

	export let href: string | undefined = undefined;
	export let outerStyle: string | undefined = undefined;
	export let innerStyle: string | undefined = undefined;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li class="app-navlink cursor-pointer {outerStyle}">
	<a {href} class="{innerStyle} {$page.url.pathname === href ? 'font-semibold' : ''}"><slot /></a>
</li>
