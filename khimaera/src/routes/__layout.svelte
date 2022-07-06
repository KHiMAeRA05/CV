<script lang="ts">
	import './items/global.css';
	import API from './API.svelte';
	import Header from './Header.svelte';
	import Home from './Home.svelte';
	import Education from './Education.svelte';
	import Skills from './Skills.svelte';
	import Interests from './Interests.svelte';
	import Awards from './Awards.svelte';
	import Footer from './Footer.svelte';
</script>

<body>
	<Header />
	<main>
		<API />
		<hr style="border-top: 1px solid #333333;" />
		<Home />
		<hr style="border-top: 1px solid #333333;" />
		<Education />
		<hr style="border-top: 1px solid #333333;" />
		<Skills />
		<hr style="border-top: 1px solid #333333;" />
		<Interests />
		<hr style="border-top: 1px solid #333333;" />
		<Awards />
		<hr style="border-top: 1px solid #333333;" />
	</main>
	<Footer />
</body>
