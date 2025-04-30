<template>
  <header class="navbar">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="top-bar-container">
        <div class="top-content">
          <span>Welcome To FreightZone Service Theme</span>
          <span>Office Hours: Mon-Fri 09:00AM-6:00PM</span>
        </div>
        <div class="social-icons">
          <font-awesome-icon title="facebook" :icon="['fab', 'facebook-f']" />
          <font-awesome-icon title="twitter" :icon="['fab', 'twitter']" />
          <font-awesome-icon title="youtube" :icon="['fab', 'youtube']" />
          <font-awesome-icon title="linkedin" :icon="['fab', 'linkedin-in']" />
        </div>
      </div>
    </div>

    <!-- Main Navbar -->
    <nav class="main-nav">
      <div class="nav-container">
        <div class="logo">
          <img src="../assets/logo.png" alt="FreightZone Logo" />
        </div>

        <ul class="nav-links" :class="{ active: menuOpen }">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/project">Project</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
          <li class="dropdown">
            <span @click="toggleDropdown">Pages <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </span>
            <ul v-if="dropdownOpen" class="dropdown-menu">
              <li><router-link to="/page1">Page 1</router-link></li>
              <li><router-link to="/page2">Page 2</router-link></li>
            </ul>
          </li>
        </ul>

        <div class="cta-button">
  <a href="#contact" class="btn-link">
    Get A Quote<img src="../assets/logo.png" alt="freightzone logo" loading="lazy" />
  </a>
</div>


        <div class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faTwitter, faYoutube, faLinkedinIn);

const menuOpen = ref(false);
const dropdownOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  if (!menuOpen.value) dropdownOpen.value = false;
}

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}
</script>

<style scoped>
/* Top Bar */
.top-bar {
  background: black;
  color: white;
  font-size: 14px;
  padding: 5px 0;
  font-family: 'KumbhSans';
}

.top-bar-container {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-content {
  display: flex;
  gap: 45px;
  align-items: center;
position: relative;
}

.top-content::after {
  left: 50%;
    content: "";
    position: absolute;
    top: -16px;
    bottom: -17px;
    width: 1px;
    background-color: #ece3e3;
}

.cta-button img {
margin-left: 5px;
width: 10px;
height: 10px;
}

.social-icons {
  display: flex;
  gap: 15px;
  position: relative;
}

.social-icons::after {
  left: -19%;
    content: "";
    position: absolute;
    top: -20px;
    bottom: -20px;
    width: 1px;
    background-color: #ECE3E2;
}


/* Main Navbar */
.main-nav {
  background: white;
  display: flex;
  justify-content: center;
}

.nav-container {
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  position: relative;
}

.logo img {
  height: 50px;
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 55px; 
}

.nav-links li {
  position: relative;
}

.nav-links a, .nav-links span {
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding-bottom: 5px;
 
}

.nav-links a:hover, .nav-links span:hover {
  border-bottom: 2px solid #FC153B; 
}

.dropdown-menu li a {
  display: block;
  width: 100%;
  color: black;
}

.dropdown-menu li a:hover {
  background: #f0f0f0;
  border-bottom: none; 
}

/* Dropdown */
.dropdown-menu {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  min-width: 120px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
}
.dropdown-menu li {
  padding: 10px;
}
.dropdown-menu li:hover {
  background: #f0f0f0;
}

/* Get A Quote button */
.cta-button a {
  background: #ff1744;
  color: white;
  border: none;
  padding: 15px 20px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
text-decoration: none;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
.hamburger span {
  width: 25px;
  height: 3px;
  background: black;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: white;
    padding: 10px 0;
    text-align: center;
  }

  .nav-links.active {
    display: flex;
  }

  .cta-button {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .nav-container {
    flex-wrap: wrap;
  }


  .top-bar {
   display: none;
  }

.top-bar-container {
   max-width: 100%;
  padding: 0;
  }

}
</style>
