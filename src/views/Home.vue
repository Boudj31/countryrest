<template>
  <div class="home">
      <form action="" class="form-group">
          <input type="text" placeholder="Search for an country.." class="form-item search box-sdw" v-model="search">
          <select name="" id="regions" v-model="regionFilter" class="form-item filter box-sdw">
                <option value="">-- Search by regions --</option>
                <option value="Asia">Asia</option>
                <option value="America">Amercia</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>


      </form>
    <div class="cards">
      <Card v-for="(country, i) in filterCountries" :key="i" :country='country' />
    </div>  
  </div>
</template>

<script>

import Card from '../components/Card'
import axios from 'axios'
export default {
  name: 'Home',
  data() {
      return {
          countries: [],
          search: '',
          regionFilter: "",

      }
  },
  components: {
      Card
  },
  methods: {
    async getCountries() {
         await axios.get('https://restcountries.com/v3.1/all')
         .then((res) => {
             this.countries = res.data.splice(0, 32)
         }).catch((e) => {
             console.log(e)
         })
      }
  },
  computed: {
        filterCountries() {
            let countriesAll = [...this.countries];
            const searchInput = this.search.length;
            const searchRegion = this.regionFilter.length;

            if (searchRegion > 0) {
              const regionGenre = this.countries.filter((count) => {
                 return count.continents.forEach(continent => {
                     continent.match(this.regionFilter);
                     console.log(continent)
                    
                 });
             });
                 countriesAll = regionGenre;
             }
    
            if (searchInput > 0) {
                const filterSearch = countriesAll.filter((count) => {
                    return (
                        count.name.common
                            .toLowerCase()
                            .match(this.search.toLowerCase())
                    );
                });
                countriesAll = filterSearch;
            }
            return countriesAll;
        }
    },
  created() {
      this.getCountries()
  }
}
</script>

<style>
.cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

}
.form-group {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
}
.form-item {
    background-color: var(--darkblue);
    color: white;
    padding: 10px;
    min-width: 40%;
    border: none;
    border-radius: 5px;
}
.light .form-item {
     background-color:white;
     color: var(--darkblue);
}
.search {
   min-width: 40%; 
}
.filter {
    min-width: 20%;
}
@media screen and (max-width: 760px) {
   
   .cards {
       flex-direction: column;
   }
   .form-group {
       flex-direction: column;
       gap: 30px;
   }
} 


</style>
