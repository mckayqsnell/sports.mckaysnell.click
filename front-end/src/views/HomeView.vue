<template>
  <div class = "home">
    <div class = "content">
      <div class = "text">
        <div class = "title">BYU</div>
        <div class = "intra">Intramurals</div>
      </div>
    </div>
    <div class = "button">
     <router-link to ='/sign'> <button>Sign up!</button></router-link>
    </div>
  </div>
</template>

<style scoped> 
.title {
  font-size:18pt;
}

.home {
    background-image: url('../assets/celebrating.jpeg');
    width: 100vw;
    height: 100vh;
   background-size: cover;
}

.button button:hover {
  background:rgb(0, 0, 27);
}

.button {
  margin:75px;
  color:white;
}
.button button {
  height:90px;
  width: 132px;
  text-decoration: none;
  color:white;
  background:rgb(1, 1, 52);
  font-size:24pt;
  border:solid rgb(1, 1, 255);
  border-radius:15%;
}

.content {
  margin-left:50px;
  padding-top:100px;
}

.title {
  color: #fff;
  font-family:"fantasy, luminari";
  font-size:500%;
  width:200px;
  height:90px;
  height:70px;
}

.intra {
  color: #fff;
  font-family:"fantasy, luminari";
  font-size:500%;
  width:400px;
  height:100px;
}
.text {
  background-color: rgba(0,0,0,.5);
  width:400px;
  height:190px;
  border-radius: 10%;
  text-align: center;
}

</style>

