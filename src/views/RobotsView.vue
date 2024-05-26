<script>
export default {
  data() {
    return {
      age: 20,
      count: 'Copy to clipboard',
    }
  },
  methods: {
    copy_id(profile) {
      if (profile=='gmail'){
        navigator.clipboard.writeText('farazahmed3071@gmail.com');
        this.count = 'Copied successfully!';
      }
      else if (profile == "linkedin"){
        navigator.clipboard.writeText('faraz-ahmed-as');
        this.count = 'Copied successfully!';
      }
      else if  (profile == "orcid"){
        navigator.clipboard.writeText('0000-0001-6807-1268');
        this.count = 'Copied successfully!';
      }
      else if ("google scholar") {
        navigator.clipboard.writeText('https://scholar.google.com/citations?user=-B9GXLQAAAAJ&hl=en');
        this.count = 'Copied successfully!';
      }
      setTimeout(() => { this.count = 'Copy to clipboard'; }, 2000);

      
    }
  },
  computed: {
    Age() {
      var birthDate = new Date("07/01/2001") // MM-DD-YYYY format
      // var currentDate = new Date().toLocaleString().split(',')[0]
      var currentDate = new Date();

      var years = (currentDate.getFullYear() - birthDate.getFullYear());
      if (currentDate.getMonth() < birthDate.getMonth() || 
        currentDate.getMonth() == birthDate.getMonth()) {
          years--;
      }
      return years;
    }
  },

}
</script>

<template>
  <div class="body">
    <div class="all-links">

      <!-- iop -->
      <a class="post-link" href="https://iopscience.iop.org/article/10.1088/1742-6596/2115/1/012007">
      <div class="post-head">
        <img class="logo" src="https://pbs.twimg.com/profile_images/1148137364801372160/KJ5zWoEh_400x400.png">
        <div class="links">
          <p>IOPscience</p>
          <small>https://iopscience.iop.org>article</small>
        </div>
      </div>
      </a>
      <div class="post-body">
        <a href="https://iopscience.iop.org/article/10.1088/1742-6596/2115/1/012007" target="_blank">Real-Time Motion Control of a Humanoid Robot Using Deep Learning</a>
        <p>by ASF Ahmed · 2021 · Cited by 1 — This paper proposes a novel method for controlling the humanoid using a 2D camera. The image from the 2D camera is processed and skeleton of the human body is captured using deep learning.</p>
      </div>

      <!-- ieee -->
      <a class="post-link" href="https://ieeexplore.ieee.org/document/10156947">
      <div class="post-head">
        <img class="logo" src="https://ieeexplore.ieee.org/assets/img/favicon.ico">
        <div class="links">
          <p>IEEE Xplore</p>
          <small>https://ieeexplore.ieee.org>document</small>
        </div>
      </div>
      </a>
      <div class="post-body">
        <a href="https://ieeexplore.ieee.org/document/10156947" target="_blank">Design of Biped Robot Using Reinforcement Learning and Asynchronous Actor-Critical ...</a>
        <p>by M Navaneethakrishnan · 2023 · Cited by 1 — Design of Biped Robot Using Reinforcement Learning and Asynchronous Actor-Critical Agent (A3C) Algorithm ... Abstract: The creation of a humanoid robot necessitates a ... </p>
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
