<template>
  <div class="map-container">
    <iframe
      class="map-frame"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.690168866508!2d-6.263263584073649!3d53.34379367997995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9f3c2b95b5%3A0xb4b6cf96f3e0b6ad!2s1%20Grafton%20Street%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sie!4v1714229000000!5m2!1sen!2sie"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <!-- Toggle Button for Mobile (Always visible on mobile) -->
    <button 
      v-if="isMobile" 
      class="toggle-btn" 
      @click="toggleInfoCard">
      {{ toggleButtonText }}
    </button>
    <div v-show="!isMobile || isInfoCardVisible" class="info-card">
      <h3>Opening Hours</h3>
      <div class="work-days">
        <span>Workdays:</span> <span>9:00 - 20:00</span>
      </div>
      <div class="work-days">
        <span>Sunday:</span> <span>Close Office</span>
      </div>

      <h3 class="social-text">Social<br> Media</h3>

      <div class="social-icons">
        <div class="icon-container">
          <a href="#"><font-awesome-icon class="icons" :icon="['fab', 'twitter']" /></a>
        </div>
        <div class="icon-container">
          <a href="#"><font-awesome-icon class="icons" :icon="['fab', 'facebook-f']" /></a>
        </div>
        <div class="icon-container">
          <a href="#"><font-awesome-icon class="icons" :icon="['fab', 'instagram']" /></a>
        </div>
        <div class="icon-container">
          <a href="#"><font-awesome-icon class="icons" :icon="['fab', 'pinterest-p']" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const isInfoCardVisible = ref(false);
const isMobile = ref(false);

// Toggle the info card visibility
const toggleInfoCard = () => {
  isInfoCardVisible.value = !isInfoCardVisible.value;
};

// Check if the screen size is mobile or not
onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 768;
  });
});

// Computed property for toggle button text
const toggleButtonText = computed(() => {
  return isInfoCardVisible.value ? 'Hide Info' : 'Show Info';
});
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 500px;
}

.map-frame {
  width: 100%;
  height: 100%;
  border: 0;
}

.info-card {
  position: absolute;
  top: 16%;
  right: 12%;
  background: white;
  padding: 35px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 250px;
  display: block;
  transition: all 0.3s ease-in-out; /* Smooth transition */
}

.work-days {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  color: #74787c;
  border-bottom: 1px solid #e8e8e8;
  padding-top: 20px;
}

.social-text {
  line-height: 30px;
}

.social-icons {
  display: flex;
  gap: 30px;
  margin-top: 10px;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.3); 
  padding: 10px;
  border-radius: 50%; 
  width: 30px;
  height: 30px;
}

.social-icons .icons {
  color: #4c504d;
}

.social-icons a {
  color: black;
  font-size: 18px;
}

/* Hover effect on icons */
.social-icons .icons:hover {
  color: #007bff; /* Change to blue or any accent color */
}

/* Mobile styles */
@media (max-width: 768px) {
  .toggle-btn {
    position: absolute;
    top: 0%;
    right: 0%;
    background-color: #007bff;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    height: 40px;
  }
  
  .info-card {
    position: absolute;
    top: 18%;
    right: 6%;
    background: white;
    padding: 12px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    width: 250px;
    display: block;
  }

  .work-days span {
    font-size: 12px;
  }

  .info-card h3 {
    font-size: 14px;
  }

  .social-icons {
    justify-content: center;
  }

  .info-card h3 {
    line-height: normal;
  }
}

/* Adjust for very small screens */
@media (max-width: 375px) {
  .info-card {
    width: 200px; /* Reduce width on smaller screens */
  }
}
</style>
