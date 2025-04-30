<template>
  <!-- Logistics Section -->
  <section class="logistics">
    <div class="container">
      <div class="logistics-container">

        <!-- Left Side: Experience Section -->
        <div class="experience-section">
          <div class="top-row">
            <!-- Experience Text -->
            <div class="left-sec">
              <div class="experience-text">
                <h2>25+</h2>
                <p>Years of<br>experience</p>
              </div>
            </div>

            <!-- Large Image (Airplane) -->
            <div class="image-large">
              <img src="../assets/Airplane.png" alt="Airplane">
            </div>
          </div>

          <!-- Bottom Row with Two Small Images -->
          <div class="bottom-row">
            <div class="image-small">
              <img src="../assets/truck.png" alt="Truck">
            </div>
            <div class="image-small">
              <img src="../assets/containers.png" alt="Containers">
            </div>
          </div>
        </div>

        <!-- Right Side: Info Section -->
        <div class="info-section">
          <!-- Subtitle with Icon -->
          <h5 class="section-subtitle">
            <span><font-awesome-icon icon="truck" class="icon-style" /></span> Our Work Process
          </h5>

          <!-- Title and Description -->
          <h2>Experience Seamless Logistics with FreightZone</h2>
          <p>
            At FreightZone, we specialize in providing top-tier domestic shipping solutions across Australia. 
            From reliable freight services to express deliveries, we connect customers with drivers for a smooth 
            and efficient shipping experience. Our 25+ years of expertise ensure every shipment is handled with care and precision.
          </p>

          <!-- Dynamic Progress Bars -->
          <div class="progress-bars">
            <!-- Loop through each progress item -->
            <div class="progress-bar" v-for="(item, index) in progressItems" :key="index">
              <label>{{ item.label }}</label>
              <div class="progress-container">
                <div class="progress" :style="{ width: item.value + '%' }">
                  <span class="progress-text">{{ item.value }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Importing reactive reference from Vue
import { ref } from 'vue'

// List of progress items used in the progress bar section
const progressItems = ref([
  { label: 'FREIGHT TRUCK SHIPPING', value: 92 },
  { label: 'MOTORCYCLE DELIVERIES', value: 82 },
  { label: 'EXPRESS VAN SERVICES', value: 71 },
  { label: 'BIKE COURIER SERVICES', value: 61 },
])
</script>

<style scoped>
/* Main section background */
.logistics {
  background-color: #F3F7FF;
}

/* Container max width and padding */
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Truck icon color */
.icon-style {
  color: #ed1c24;
}

/* Section subtitle styling */
.section-subtitle {
  font-size: 20px;
  color: #333333;
}

/* Layout for logistics content */
.logistics-container {
  display: flex;
  padding: 20px;
  gap: 30px;
}

/* Left section: experience block styling */
.experience-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 95px auto;
  padding: 10px;
}

/* Top row layout for experience and image */
.top-row {
  display: flex;
  gap: 5px;
}

/* Red background box with experience text */
.left-sec {
  background-color: #FC153B;
  padding: 45px;
  border-radius: 10px;
  display: flex;
  align-items: end;
  color: #fff;
}

/* Spacing inside the experience box */
.experience-text {
  margin-bottom: 20px;
}

.experience-text h2 {
  font-size: 48px;
  margin: 0;
}

.experience-text p {
  font-size: 20px;
  margin: 10px 0 0;
}

/* Position of progress text inside progress bar */
.progress-text {
  position: absolute;
  right: 10px;
  top: -25px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
}

/* Container for airplane image */
.image-large {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Grouping small bottom images */
.experience-images {
  flex: 2 1 500px;
  display: flex;
  flex-wrap: wrap;
}

/* Airplane image styles */
.image-large img {
  width: 100%;
  max-width: 315px;
  border-radius: 10px;
  object-fit: cover;
}

/* Layout for small truck/container images */
.bottom-row {
  display: flex;
  gap: 5px;
}

/* Placeholder: right section, unused here */
.right-sec {
  padding: 20px;
  gap: 20px;
  justify-content: center;
  background: #ffffff;
}

/* Small image containers */
.image-small {
  flex: 1;
  overflow: hidden;
  border-radius: 10px;
}

/* Small image styles */
.image-small img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

/* Info section (right column) styles */
.info-section {
  flex: 2;
  padding-left: 20px;
  margin-top: 60px;
}

.info-section h2 {
  font-size: 36px;
  font-family: 'poppins-extrabold';
}

.info-section p {
  margin: 20px 0;
  font-size: 16px;
  color: #757575;
  font-family: 'rlway-regular';
  line-height: 26px;
}

/* Container for all progress bars */
.progress-bars {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* Individual progress bar block */
.progress-bar {
  margin-bottom: 15px;
}

/* Label above each progress bar */
.progress-bar label {
  font-size: 16px;
  font-weight: 500;
  font-family: 'rlway-regular';
}

/* Background of progress bar */
.progress-container {
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 100%;
  height: 8px;
  margin-top: 5px;
  position: relative;
}

/* Actual progress fill */
.progress {
  background-color: #ff4d4f;
  height: 100%;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  color: white;
  font-weight: bold;
  font-size: 12px;
  transition: width 0.5s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    max-width: 100%;
  }

  .logistics-container {
    flex-direction: column;
  }

  .top-row,
  .bottom-row {
    flex-direction: column;
  }

  .image-large img {
    max-width: 100%;
  }

  .image-small img {
    height: auto;
  }

  .info-section h2 {
    font-size: 24px;
    text-align: center;
  }

  .info-section p {
    font-size: 14px;
    text-align: center;
  }

  .progress-bar label {
    font-size: 10px;
  }

  .progress-text {
    font-size: 10px;
  }
}
</style>
