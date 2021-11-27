<template>
  <div class="content container">
    <button class="btn box-sdw" @click="back()">Back</button>
    <div class="description">
      <div class="left">
        <img :src="country[0].flags.png" alt="" />
      </div>
      <div class="right">
       <div class="cols">
          <div class="col">
          <h3 class="big-title">{{ country[0].name.common }}</h3>
          <p class="info items">
            Population: <span class="items">{{ country[0].population }}</span>
          </p>
          <p class="info items">
            NativeName:
            <span
              class="items"
              v-for="(reg, i) in country[0].name.nativeName"
              :key="i"
              >{{ reg }}</span
            >
          </p>
          <p class="info items">
            Région:<span
              class="items"
              v-for="(reg, i) in country[0].continents"
              :key="i"
            >
              {{ reg }}</span
            >
          </p>
          <p class="info items">
            SubRégion:<span
              class="items"
              v-for="(reg, i) in country[0].subregion"
              :key="i"
            >
              {{ reg }}</span
            >
          </p>
          <p class="info items">
            Capital:
            <span
              class="items"
              v-for="(cap, i) in country[0].capital"
              :key="i"
              >{{ cap }}</span
            >
          </p>
        </div>
         <div class="col">
          <p class="info items">
            Top Level Domain :
            <span class="items" v-for="(cap, i) in country[0].tld" :key="i">{{
              cap
            }}</span>
          </p>
          <p class="info items">
            Currencies:
            <span
              class="items"
              v-for="(cap, i) in country[0].currencies"
              :key="i"
              >{{ cap }}</span
            >
          </p>
          <p class="info items">
            Languages:
            <span
              class="items"
              v-for="(cap, i) in country[0].languages"
              :key="i"
              >{{ cap }},
            </span>
          </p>
        </div>
       </div>
    
        <div class="border">
            <p>Border: </p>
            <router-link v-for="(bor,i) in country[0].borders" :key="i" :to="'/country/'+ bor.toLowerCase()"  class="bor-cnt">{{ bor }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CountryPage",
  props: ["idCountry"],
  data() {
    return {
      country: "",
    };
  },
  methods: {
    async getTheCountry() {
      await axios
        .get("https://restcountries.com/v3.1/name" + "/" + this.idCountry)
        .then((res) => {
          console.log(res.data);
          this.country = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getTheCountry();
  },
};
</script>
<style>
.btn {
  display: block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--darkblue);
  color: white;
  
}
.light .btn {
    background-color: white;
    color: var(--darkblue);
}
.description {
  display: flex;
  justify-content: space-between;
  gap: 100px;
  padding: 20px 0;
  align-items: center;
}
.big-title {
  font-size: 30px;
}

.cols {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.content img {
    display: block;
    width: 100%;
    min-height: 400px;
    object-fit: contain;
  
}
.border {
    display: flex;
    gap: 20px;
}

@media screen and (max-width: 760px) {
   
   .description {
       flex-direction: column;
   }
   .cols {
       flex-direction: column;
   }
} 
</style>
