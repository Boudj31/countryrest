<template>
  <div id="app">
    <Header />
     <div class="container">
        <router-view></router-view>
     </div>
  
  </div>
</template>

<script>

import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
/* VARIABLE */
:root {
/*DARK*/
  --darkblue:hsl(209, 23%, 22%);
  --darkbg: hsl(207, 26%, 17%);
  --lighttxt:  hsl(200, 15%, 8%);
  --lightinput: hsl(0, 0%, 52%);
  --lightbg: hsl(0, 0%, 98%);
  --white: hsl(0, 0%, 100%);
  --items: 14px;
  --details: 16px;

}
* {
  margin: 0;
  text-decoration:none;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  max-width: 1440px;
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
.details{
  font-size : var(--details);
  font-weight: 600;
}
.items{
  font-size : var(--items);
  font-weight: 400;
}
body {
 overflow: auto;
 background-color: var(--darkbg);
 color: var(--white);
}
.light {
   background-color: var(--lightbg);
   color: var(--darkbg);
}
.box-sdw {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  
  }
  .container-sm {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
}

</style>
