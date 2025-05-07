<template>
  <section class="logistics">
    <div class="container">
      <div class="logistics-container">

        <!-- Experience Section -->
        <div class="experience-block">
          <div class="top-row">
            <div class="experience-summary">
              <div class="experience-text">
                <h2>25+</h2>
                <p>Years of<br>experience</p>
              </div>
            </div>
            <div class="image-primary">
              <img src="@/assets/imgs/Airplane.png" alt="Airplane" />
            </div>
          </div>

          <div class="bottom-row">
            <div class="image-secondary">
              <img src="@/assets/imgs/truck.png" alt="Truck" />
            </div>
            <div class="image-secondary">
              <img src="@/assets/imgs/containers.png" alt="Containers" />
            </div>
          </div>
        </div>

        <!-- Info Section -->
        <div class="info-section">
          <h5 class="section-subtitle">
            <span><font-awesome-icon icon="truck" class="subtitle-icon" /></span>
            Our Work Process
          </h5>

          <h2 class="section-title">Experience Seamless Logistics with FreightZone</h2>
          <p>
            At FreightZone, we specialize in providing top-tier domestic shipping solutions across Australia.
            From reliable freight services to express deliveries, we connect customers with drivers for a smooth
            and efficient shipping experience. Our 25+ years of expertise ensure every shipment is handled with care and precision.
          </p>

          <div class="skills-progress-group">
            <div class="skills-progress-item" v-for="(item, index) in progressItems" :key="index">
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
import { ref } from 'vue'

const progressItems = ref([
  { label: 'FREIGHT TRUCK SHIPPING', value: 92 },
  { label: 'MOTORCYCLE DELIVERIES', value: 82 },
  { label: 'EXPRESS VAN SERVICES', value: 72 },
  { label: 'BIKE COURIER SERVICES', value: 62 },
])
</script>

<style scoped>
.logistics {
  background-color: #F3F7FF;
}

.subtitle-icon {
  color: #ed1c24;
}

.section-subtitle {
  font-size: 20px;
  color: #333333;
}

.logistics-container {
  display: flex;
  padding: 20px;
  gap: 30px;
}

.experience-block {
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

.top-row {
  display: flex;
  gap: 5px;
}

.experience-summary {
  background-color: #FC153B;
  padding: 45px;
  border-radius: 10px;
  display: flex;
  align-items: end;
  color: #fff;
}

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

.progress-text {
  position: absolute;
  right: 10px;
  top: -25px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
}

.image-primary {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-primary img {
  width: 100%;
  max-width: 315px;
  border-radius: 10px;
  object-fit: cover;
}

.bottom-row {
  display: flex;
  gap: 5px;
}

.image-secondary {
  flex: 1;
  overflow: hidden;
  border-radius: 10px;
}

.image-secondary img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.image-primary,
.image-secondary {
  overflow: hidden;
  position: relative;
}

.image-primary img,
.image-secondary img {
  width: 100%;
  transition: transform 0.3s ease;
  display: block;
}

.image-primary img:hover,
.image-secondary img:hover {
  transform: scale(1.1);
  cursor: pointer;
}

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

.skills-progress-group {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.skills-progress-item {
  margin-bottom: 15px;
}

.skills-progress-item label {
  font-size: 16px;
  font-weight: 500;
  font-family: 'rlway-regular';
}

.progress-container {
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 100%;
  height: 8px;
  margin-top: 5px;
  position: relative;
}

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

  .image-primary img {
    max-width: 100%;
  }

  .image-secondary img {
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

  .skills-progress-item label {
    font-size: 10px;
  }

  .progress-text {
    font-size: 10px;
  }
}
</style>
