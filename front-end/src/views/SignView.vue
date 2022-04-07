<template>
  <div class="sign">
    <h1>Sign up here!</h1>
    
    <div class ="heading">
      <div class = "circle">1</div>
      <h3>Enter your information</h3>
    </div>

    <div class="add">
      <div class="form">
        <input v-model="name" placeholder="Name">
        <input v-model="netid" placeholder="NetID">
        <input v-model="number" placeholder="Phone Number"><br>
        <input v-model="team" placeholder="Team">
        <input v-model="email" placeholder="Email">
        <input v-model="color" placeholder="Favorite Color"><br><br>
        <input type="file" name="photo" @change="fileChanged">
        <button @click="upload">Upload</button>
      </div>

      <div class="upload" v-if="addData">
        <h2>{{addData.name}}</h2>
        <h2>{{addData.netid}}</h2>
        <h2>{{addData.number}}</h2>
        <h2>{{addData.team}}</h2>
        <h2>{{addData.email}}</h2>
        <h2>{{addData.color}}</h2>
        <img :src="addData.path" />
      </div>
    </div>

    <div class="heading">
      <div class="circle">2</div>
      <h3>Delete/Edit information</h3>
    </div>

    <div class="edit">
      <div class="form">
        <input v-model="findName" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectdata(s)">{{s.name}}</div>
        </div>
      </div>

      <div class="upload" v-if="finddata">
        <input v-model="finddata.name">
        <input v-model ="finddata.netid"><br>
        <input v-model="finddata.number">
        <input v-model ="finddata.email"> <br>
        <input v-model="finddata.team">
        <input v-model ="finddata.color">
        <p></p>
        <img :src="finddata.path" />
      </div>

      <div class="actions" v-if="finddata">
        <button @click="deletedata(finddata)">Delete</button>
        <button @click="editdata(finddata)">Edit</button>
      </div>
    </div>
  
  <br><br><br><br>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Sign-View',
    data() {
    return {
      name: "",
      netid: "",
      number: "",
      team: "",
      email: "",
      color:"",
      file: null,
      addData: null,
      datas: [],
      findName: "",
      findNetid: "",
      findNumber:"",
      findTeam: "",
      findEmail: "",
      findColor: "",
      finddata: null,
    }
  },
    computed: {
    suggestions() {
      let datas = this.datas.filter(data => data.name.toLowerCase().startsWith(this.findName.toLowerCase()));
      return datas.sort((a, b) => a.name > b.name);
    }
  },
    created() {
    this.getdatas();
  },
    methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name,)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/datas', {
          name: this.name,
          netid: this.netid,
          number:this.number,
          team:this.team,
          email:this.email,
          color:this.color,
          path: r1.data.path
        });
        this.addData = r2.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getdatas() {
    try {
    let response = await axios.get("/api/datas");
    this.datas = response.data;
    return true;
  } catch (error) {
    console.log(error);
    }
  },
      selectdata(data) {
      this.findName = "";
      this.finddata = data;
    },

      async deletedata(data) {
      try {
        await axios.delete("/api/datas/" + data._id);
        this.finddata = null;
        this.getdatas();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
        async editdata(data) {
      try {
        await axios.put("/api/datas/" + data._id, {
          name: this.finddata.name,
          netid:this.finddata.netid,
          number:this.finddata.number,
          team:this.finddata.team,
          email:this.finddata.email,
          color:this.finddata.color,
        });
        this.finddata = null;
        this.getdatas();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    
  } 
}
</script>

<style scoped>

.sign {
  margin-left:50px;
  margin-top:5px;
}

.add,
.edit {
  display: flex;
}
.upload img {
  max-width: 300px;
}

.upload h2 {
  font-size:12pt;
}


.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

button  {
  width:100px;
  border:solid rgb(126, 126, 126);
  border-radius: 5%;
}

button:hover {
  background:rgb(229, 229, 229);
}

.heading h3 {
  margin-top: 8px;
  margin-left: 20px;
}
.circle {
  border-radius: 50%;
  width: 45px;
  height: 45px;
  padding: 8px;
  background: rgb(0, 0, 0);
  color: #fff;
  text-align: center;
  padding:5px;
  font-size:16pt;
}
/* Suggestions */
.suggestions {
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #27ccf5;
  color: #fff;
}



</style>