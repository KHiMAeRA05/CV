<script lang="ts">
    import '/public/global.css'
    import API from './components/API.svelte';
    import Header from './components/Header.svelte'
    import Home from './components/Home.svelte'
    import Education from "./components/Education.svelte";
    import Skills from "./components/Skills.svelte";
    import Interests from "./components/Interests.svelte";
    import Awards from "./components/Awards.svelte";
    import Footer from "./components/Footer.svelte";
</script>

<body>
    <Header/>
    <main>
        <API/>
        <hr style="border-top: 1px solid #333333;">
        <Home/>
        <hr style="border-top: 1px solid #333333;">
        <Education/>
        <hr style="border-top: 1px solid #333333;">
        <Skills/>
        <hr style="border-top: 1px solid #333333;">
        <Interests/>
        <hr style="border-top: 1px solid #333333;">
        <Awards/>
        <hr style="border-top: 1px solid #333333;">
    </main>
    <Footer/>

</body>