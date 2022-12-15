<script lang="ts">
	export let href: string | undefined = undefined;
	export let outerStyle: string | undefined = undefined;
	export let innerStyle: string | undefined = undefined;
</script>

<li class="app-navlink cursor-pointer {outerStyle}">
	<a {href} class={innerStyle}><slot /></a>
</li>
