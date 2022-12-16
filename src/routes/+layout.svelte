<script lang="ts">
	import '../app.css';
	import Navlink from './(root)/components/Navlink.svelte';

	const navStyles = {
		outerStyle: 'px-4 hover:text-neutral-600 transition-all',
		innerStyle: ''
	};

	let innerWidth: number;
	let isSmall: boolean = false;
	let navElement: HTMLUListElement;

	const hideElement = <T extends HTMLElement>(element: T, timeout: number) =>
		setTimeout(() => (element.style.display = 'none'), timeout);
	const showElement = <T extends HTMLElement>(element: T, display: string) =>
		(element.style.display = display);

	const handleResize = (e: UIEvent & { currentTarget: Window }) => {
		if (e.currentTarget.innerWidth < 640) {
			hideElement<HTMLUListElement>(navElement, 210);
		} else if (e.currentTarget.innerWidth >= 640) {
			showElement(navElement, 'flex');
		}
	};
</script>

<svelte:window on:resize={handleResize} on:resize={handleResize} />

<main class="app min-h-screen">
	<header class="h-14 w-screen flex shadow-md items-center relative z-10 ">
		<a
			href="/"
			class="app-brand px-8 font-extrabold text-4xl absolute sm:left-0 animate-brandCentre sm:animate-brandBack"
			>xpressions</a
		>
		<ul
			bind:this={navElement}
			class="app-nav flex animate-navExit sm:animate-navEnter sm:items-center pr-4 ml-[255px] "
		>
			<Navlink href="/" outerStyle={navStyles.outerStyle} innerStyle={navStyles.innerStyle}>
				Home
			</Navlink>
			<Navlink href="/about" outerStyle={navStyles.outerStyle} innerStyle={navStyles.innerStyle}>
				About
			</Navlink>
		</ul>
		<ul
			class="w-screen h-7 absolute bg-slate-300 bottom-[calc(0rem-1.75rem)] flex items-center justify-center shadow-md sm:hidden"
		>
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
