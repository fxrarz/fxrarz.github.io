<template>
  <div class="body">
    <div class="all-links">

      <!-- baggage ai -->
      <a class="post-link" href="https://github.com/fxrarz/Internship/tree/main/baggageAI">
      <div class="post-head">
        <img class="logo" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png">
        <div class="links">
          <p>Github</p>
          <small>https://github.com > fxrarz > Internship > baggageAI</small>
        </div>
      </div>
      </a>
      <div class="post-body">
        <a href="https://github.com/fxrarz/Internship/tree/main/baggageAI" target="_blank">Synthetic Data Generation | baggagaAI - Internship </a>
        <p> Computer Vision Assignment | Image Processing | Background images are the background x-ray images of baggage that gets generated after passing through a X-ray machine at airport. Threat images are the x-ray images ...</p>
      </div>

      <!-- exact space -->
      <a class="post-link" href="https://github.com/fxrarz/Internship/tree/main/ExactSpace">
      <div class="post-head">
        <img class="logo" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png">
        <div class="links">
          <p>Github</p>
          <small>https://github.com > fxrarz > Internship > ExactSpace</small>
        </div>
      </div>
      </a>
      <div class="post-body">
        <a href="https://github.com/fxrarz/Internship/tree/main/ExactSpace" target="_blank">Restful API | ExactSpace - Internship </a>
        <p> Linux | Find the largest log file (.log) in a directory and truncate it to 100 lines if it contains more than 100 lines. <br> Flask Server | Build an API server which accepts JSON as an input. Build a front-end UI that has a textarea and a ...</p>
      </div>
        
    </div>


  </div>
</template>

<style scoped>
.body {
  display: flex;
  /* flex-wrap: wrap; */
}
.all-links{
  width: 65%;
  padding-right: 20px;
  /* padding-left: 20px;
  background-color: #f1f1f1; */
}
.about {
  border-left: 1px solid;
  width: 35%;
  height: fit-content;
  padding-left: 20px;
  /* padding-right: 20px;
  background-color: yellow; */

}
.post-head {
	display: flex;
    margin-top: 25px;
}
.logo {
	width:38px;
  height:38px;
	border-radius: 50%;
  margin-right: 10px;

}
.links{
	margin-top: -3px;
	display: flex;
	flex-direction: column;
  line-height: 0px;
}
/* .links > p{
	width:280px;
}
.links > small{
	width:280px;
} */

.post-link {
  color: #969ca2;
  text-decoration: none;
}
.post-link:hover {
  color: #FFFFFF;
  text-decoration: none;
}
.post-body {
	margin-top: 6px;
  font-size: 20px;
  color: #8ab4f8;
  /* width: 800px; */
}
.post-body > a {
	text-decoration: none;
}
.post-body > a:hover {
	text-decoration: underline;
}
.post-body > p {
  margin-top: 6px;
	font-size: 15px;
  color: #bdc1c6;
}

.about-link {
	text-decoration: none;
}
.about-link:hover {
	text-decoration: underline;
}
.profile-flex-container {
  display: flex;
  flex-wrap: wrap;
}
.profile-logo {
  margin-top: 5px;
  margin-left: 28px;
  text-align: center;
  /* height: 100px;
  background-color: red; */
}
.profile-logo > img {
  width:45px;
  height:45px;
  cursor: pointer;
  /* margin-left: 15px;
  background-color: white;
	border-radius: 50%;
  margin-right: 10px; */
}
.profile-logo > h4 {
  margin-top: 10px;
  cursor: pointer;
  color: #969ca2;
  font-size: large;
  /* margin-left: 20px;
  margin-left: 3px;
  background-color: blue; */
}
.profile-logo > h4:hover {
  text-decoration: none;
  color: #4184c7;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 80%;
  left: 50%;
  margin-left: -60px;
}
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: 400px;
}
</style>
