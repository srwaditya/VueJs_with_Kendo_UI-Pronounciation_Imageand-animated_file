<template>
  <div id="app">
    <h1>HDY PT</h1>
    <h4>a site ask how you pronouse your languagae</h4>
    <term-list></term-list>
  </div>
</template>

<script>
import TermList from "./components/TermList";

export default {
  name: "App",
  components: {
    TermList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
