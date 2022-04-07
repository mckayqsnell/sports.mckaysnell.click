<template>
  <div id="app">
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
        <meta charset="UTF-8"/>
        <title>BYU Intramurals</title>
        <link rel ="shortcut icon"  href ="images/kisspng-brigham-young-university-byu-cougars-football-byu-5af54649c39349.8547621515260237538011.ico">
    </head>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
          <a class="navbar-brand" href="/"><img src = "Byulogo.jpg" alt = "byu_ccexpress"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active roster">
                <router-link class = "link" to = 'roster'>Rosters</router-link>
              </li>
              <li class = "nav-item sign"> 
                <router-link class = "link" to = '/sign'>Sign Up!</router-link>
              </li>
            </ul>
          </div>
        </nav>

        <div class="footer">
          <a href = "https://github.com/mckayqsnell/sports.mckaysnell.click">Source</a><br>
          By McKay Snell and Thys Hansen
        </div>
    <router-view/>
  </div>
</template>

<style scoped>

.bg-dark {
  background-color: rgb(0, 0, 0) !important;
  width: 100%;
}

.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
  color: rgb(61, 57, 57);
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
  font-size:14pt;
}

.sign {
  margin-left:60px;
  font-size:15pt;
  margin-top:1px;
}

.roster {
  margin-left:40px;
  font-size: 16pt;
}

.link {
  color:whitesmoke;
}

.footer {
    position:fixed;
    bottom:0;
    width: 100%;
    height: 60px;
    background-color:rgb(0, 0, 0);
    color:white;
    font-size:9pt;
    width: 100%;
}

.footer a {
  color:white;
  font-size:13pt;
}
</style>
