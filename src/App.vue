<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="flex-container">
      <div class="title">
        <p>Google</p>
      </div>
      <div class="text_input">
        <input type="text" id="search" name="q" placeholder="Achievements">
        <button type="submit">Search</button>
        
          <div class="flex-container" id="links">
            <div>
              <RouterLink class="rounded-button" to="/">Profile</RouterLink>
            </div>
            <div>
              <RouterLink class="rounded-button" to="/projects">Projects</RouterLink>
            </div>
            <div>
              <RouterLink class="rounded-button" to="/publications">Publications</RouterLink>
            </div>  
            <div>
              <RouterLink class="rounded-button" to="/machine_learning">Machine Learning</RouterLink>
            </div>
            <div>
              <RouterLink class="rounded-button" to="/image_processing">Image Processing</RouterLink>
            </div>
            <div>
              <RouterLink class="rounded-button" to="/robots">Robots</RouterLink>
            </div>  
          </div>
          
      </div>
    </div>

  </header>
  <hr>
  
  <section class="content">
	<small>About 130 results (0.32 seconds)</small>
    <RouterView />
  </section>
</template>

<style scoped>
  header {
		margin: 5px 20px 5px 10px;
	}
  .flex-container {
      margin-top: -20px;
		display: flex;
		align-items: baseline;
		#height: 200px;
		#background-color: DodgerBlue;
	}
	.flex-container > div {
		margin: 10px;
		#background-color: #f1f1f1;
		#padding: 20px;
		#font-size: 30px;
	}
	.title > p {
		font-size: 30px;
        width: 100px;
	}
	.text_input > input {
		border: 0;
		background-color: #303134;
		color: #d9dbdf;
    font-size: 18px;
    border: none;
    padding: 10px;
    width: 400px;
    outline: none;
	}
    .text_input > input:hover {
    box-shadow: 1px 1px 1px #000000;
    }
	.text_input > button {
	  border: none;
	  padding: 10px 20px;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  font-size: 18px;
	  border-radius: 0 20px 20px 0; /*Matches form border radius*/
	  cursor: pointer;
	  #background-color: #4CAF50;
	  #color: white;
	}
  .rounded-button {
	  display: inline-block;
	  padding: 10px 20px;
	  border-radius: 20px; /* Adjust the value to change the roundness */
	  background-color: #202124;
	  color: #d7d9da;
	  text-align: center;
	  text-decoration: none;
	  cursor: pointer;
	  border: 1px solid #383c3e;
	  outline: none;
  }
	.rounded-button:hover {
      background-color: #303134;
	}
  #links {
      margin-top: 10px;
      margin-bottom: -10px;
    }
    
    .content {
      margin-top: 10px;
      margin-left: 100px;
      margin-right: 50px;
      color: #969ca2;

    }

</style>
