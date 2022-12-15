<script lang="ts">
	import '../app.css';
	import Navlink from './(root)/components/Navlink.svelte';

	const navStyles = {
		outerStyle: 'px-4 hover:text-neutral-600 transition-all',
		innerStyle: ''
	};
</script>

<main class="app min-h-screen">
	<header class="h-14 w-screen flex shadow-md items-center justify-between">
		<a href="/" class="app-brand px-8 font-extrabold text-4xl">xpressions</a>
		<ul class="app-nav hidden sm:flex sm:items-center pr-4">
			<Navlink href="/" outerStyle={navStyles.outerStyle} innerStyle={navStyles.innerStyle}>
				Home
			</Navlink>
            <Navlink href="/about" outerStyle={navStyles.outerStyle} innerStyle={navStyles.innerStyle}>
				About
			</Navlink>
		</ul>
	</header>
	<div><slot /></div>
	<footer />
</main>
