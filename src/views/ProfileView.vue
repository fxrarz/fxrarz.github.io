<script>
// import TheWelcome from '../components/TheWelcome.vue'
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

  // mounted() {
  //   window.addEventListener('hashchange', () => {
	// 	  this.currentPath = window.location.hash
	// 	})
  // }
}
</script>
<!-- 
<style scoped>
  .all-links{
    width: 500px;
  }
</style> -->

<template>
  <div class="body">
    <div class="all-links">

      <!-- github -->
      <a class="post-link" href="https://github.com/fxrarz">
      <div class="post-head">
        <img class="logo" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png">
        <div class="links">
          <p>Github</p>
          <small>https://github.com/fxrarz</small>
        </div>
      </div>
      </a>
      <div class="post-body">
        <a href="https://github.com/fxrarz" target="_blank">Github Profile</a>
        <p> Faraz Ahmed ASF | fxrarz | Pull Shark. GitHub is a developer platform that allows developers to create, store, manage and share their code.</p>
      </div>

      <!-- linkedin -->
      <a class="post-link" href="https://in.linkedin.com/in/faraz-ahmed-as">
      <div class="post-head">
        <img class="logo" src="https://thumbs.dreamstime.com/b/linkedin-logo-editorial-illustrative-white-background-linkedin-logo-editorial-illustrative-white-background-eps-download-208329500.jpg">
        <div class="links">
          <p>LinkedIn - FARAZ AHMED</p>
          <small>200+ followers</small>
        </div>
      </div>
      </a>
      <div class="post-body">
        <a href="https://in.linkedin.com/in/faraz-ahmed-as" target="_blank">FARAZ AHMED - Research Staff - Vellore Institute of Technology</a>
        <p>Chennai, Tamil Nadu, India · Research Staff · Vellore Institute of Technology</p>
      </div>
        
      <!-- kaggle -->
      <a class="post-link" href="https://www.kaggle.com/towhitebot">
      <div class="post-head">
        <img class="logo" src="https://static-00.iconduck.com/assets.00/kaggle-icon-2048x2048-fxhlmjy3.png">
        <div class="links">
          <p>Kaggle</p>
          <small>https://www.kaggle.com/towhitebot</small>
        </div>
      </div>
      </a>
      <div class="post-body">
        <a href="https://www.kaggle.com/towhitebot" target="_blank">Kaggle Profile</a>
        <p>Kaggle is a data science competition platform and online community of data scientists and machine learning practitioners under Google LLC.</p>
      </div>
        
      <!-- youtube -->
      <a class="post-link" href="https://www.youtube.com/channel/UCTc0HHvI87URVDB1qIgtQ-w">
      <div class="post-head">
        <img class="logo" src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg">
        <div class="links">
          <p>Youtube - Faraz Official</p>
          <small>5+ followers</small>
        </div>
      </div>
      </a>
      <div class="post-body">
        <a href="https://www.youtube.com/channel/UCTc0HHvI87URVDB1qIgtQ-w" target="_blank">Faraz Official</a>
        <p>YouTube is an American online video sharing and social media platform owned by Google. </p>
      </div>

      <!-- medium -->
      <a class="post-link" href="https://www.medium.com/">
      <div class="post-head">
        <img class="logo" src="https://findingtom.com/images/uploads/medium-logo/article-image-00.jpeg">
        <div class="links">
          <p>Medium - Faraz Ahmed</p>
          <small>70+ followers</small>
        </div>
      </div>
      </a>
      <div class="post-body">
        <a href="https://www.youtube.com/" target="_blank">Faraz Ahmed - Medium</a>
        <p>Medium is an American online publishing platform developed by Evan Williams and launched in August 2012.</p>
      </div>

    </div>

    <div class="about">
      <h3><b>About</b></h3>
      <img class="center"  src="@/assets/digital_twin_half.gif" />
      <p style="text-align: center;"><b>Digital Twins</b></p>
      <p>Faraz Ahmed Abdul Settu (a.k.a) Faraz Ahmed is a Robotics and Artificial Intelligence Researcher doing his PhD in VIT University, India.</p>
      <p><b>Born:</b> DD-MM-2001 (age {{ Age }} years), <a href="http://www.google.com/search?q=Chennai" target="_blank"  class="about-link">Chennai, India</a></p>
      <p><b>Gender & Martial Status:</b> Male, Single</p>
      <p><b>Awards & Honors: </b> Hindustan Petrolium Corporation Limited, </p>
      <p><b>Publications: </b> 
        <a href="https://iopscience.iop.org/article/10.1088/1742-6596/2115/1/012007" target="_blank" class="about-link">Motion Control of a Humanoid Robot</a>,
      </p>
      <p><b>Patents:</b> 2 patients (under process)</p>
      <p><b>Projects: </b>  
        <a href="https://genqr-web.web.app/" target="_blank" class="about-link">GenQR</a>, 
        <a href="http://13.48.72.172/live" target="_blank" class="about-link">Studio Live</a>
      </p>
      <!-- <p><b>Work Experience:</b> Project Staff, Single</p> -->
      <p><b>Technology:</b> Tensorflow, OpenCV, Vue.js, Pandas, Gym, AWS, Firebase</p>
      <p><b>Certification:</b> $$$expensive</p>
      <hr>

      <h3><b>Contact</b></h3>
      <div class="profile-flex-container">
        <!-- gmail id -->
        <div class="profile-logo tooltip">
          <img v-on:click.prevent="copy_id('gmail')" src="https://static-00.iconduck.com/assets.00/gmail-old-icon-2048x2048-czq9w1ua.png">
          <h4 v-on:click.prevent="copy_id('gmail')"><b>Gmail</b></h4>          
          <span class="tooltiptext">{{ count }}</span>
        </div>
        <!-- linkedin id -->
        <div class="profile-logo tooltip">
          <img v-on:click.prevent="copy_id('linkedin')" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png">
          <h4 v-on:click.prevent="copy_id('linkedin')"><b>Linkedin</b></h4>          
          <span class="tooltiptext">{{ count }}</span>
        </div>
      </div>
      <hr>

      <h3><b>People also search for</b></h3>
      <div class="profile-flex-container">
        <!-- orcid id -->
        <div class="profile-logo tooltip">
          <img v-on:click.prevent="copy_id('orcid')" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ORCID_iD.svg/1024px-ORCID_iD.svg.png">
          <h4 v-on:click.prevent="copy_id('orcid')"><b>ORCID</b></h4>          
          <span class="tooltiptext">{{ count }}</span>
        </div>
        <!-- google scholar id -->
        <div class="profile-logo tooltip">
          <img v-on:click.prevent="copy_id('google scholar')" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/768px-Google_Scholar_logo.svg.png">
          <h4 v-on:click.prevent="copy_id('google scholar')"><b>Google Scholar</b></h4>          
          <span class="tooltiptext">{{ count }}</span>
        </div>
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
