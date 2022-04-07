<template> 
    <div class = "roster">
        <div class = "header"><h2>See who is also doing intramurals!</h2></div> <br>
        <section class="display-data">
            <div class="data" v-for="data in datas" :key="data.id">
                <img :src="data.path" />
                <div class = "text">
                <h2>Name: {{data.name}}</h2>
                <h2>NetID: {{data.netid}} </h2>
                <h2>Number: {{data.number}} </h2>
                <h2>Email: {{data.email}} </h2>
                <h2>Team: {{data.team}} </h2>
                <h2>Favorite Color: {{data.color}} </h2> </div>
            </div>
        </section>
        <br><br><br>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Home-View',
    data() {
    return {
     datas: [],
    }
  },
    created() {
    this.getDatas();
  },
    methods: {
    async getDatas() {
      try {
        let response = await axios.get("/api/datas");
        this.datas = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>

.roster {
    color:black;
}

.header {
    margin-top:20px;
}

.text {
    background:rgb(0, 0, 0);
    color:white;
    padding:5%;
    border-radius: 1%;
}

.data h2 {
  font-style: italic;
  font-size:12pt;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.display-data {
  column-gap: 1.5em;
}

.data {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
   border:solid 4px gray;
}

.data img {
  width: 100%;
}

@media only screen and (min-width: 1024px) {
  .display-data {
    column-count: 4;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .display-data {
    column-count: 3;
  }
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
  .display-data {
    column-count: 2;
  }
}

</style>
