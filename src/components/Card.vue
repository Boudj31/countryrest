<template>
        <div class="card box-sdw">
            <img :src="country.flags.png" alt="">
            <div class="infos">
            <router-link :to="'/country/'+ country.name.common.toLowerCase()"  class="card-title details">{{ country.name.common }}</router-link>
            <p class="info items">Population: <span class="items">{{ country.population }}</span></p>
            <p class="info items">Région:<span class="items" v-for="(reg,i) in country.continents" :key="i"> {{ reg }}</span> </p>
            <p class="info items">Capital: <span class="items" v-for="(cap,i) in country.capital" :key="i">{{ cap }}</span> </p>
            </div>
    
        <!-- {{ country. }}-->
        
    </div>
</template>
<script>
export default {
    name:'Card',
    props: ['country']
}
</script>
<style>

.light .card {
    background-color: white;
}

.card {
    background-color: var(--darkblue);
    border-radius: 5px;
    max-width: 23%;
    margin-bottom: 30px;
}
.card img {
    display: block;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
    border-top-left-radius: 5px;
     border-top-right-radius:5px;

}

.infos{
    padding: 30px 15px;
}
.card-title {
   margin-bottom: 10px;
}
.info {
    font-weight: 500;
}
@media screen and (max-width: 760px) {
   
   .card {
     display: block;
        margin-left: auto;
       margin-right: auto;
       min-width: 70%;
      
   }
} 
</style>
