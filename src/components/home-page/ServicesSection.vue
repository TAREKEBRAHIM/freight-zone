<template>
  <!-- Services Section -->
  <section class="services-section" aria-labelledby="services-title">
    <div class="container">
      <!-- Section subtitle with icon -->
      <h2 id="services-title" class="section-subtitle">
        <span>
          <font-awesome-icon icon="truck" class="icon-style" aria-hidden="true" />
        </span>
        <span class="sr-only">Delivery Services Icon</span>
        Service We Provide
      </h2>

      <h3 class="section-title">Our Services To Explore</h3>

      <!-- Services grid layout -->
      <div class="services-grid">
        <article
          v-for="service in services"
          :key="service.title"
          class="service-card"
          :aria-label="service.title"
        >
          <img
            :src="service.icon"
            :alt="`${service.title} icon`"
            class="service-icon"
            loading="lazy"
          />

          <h4 class="service-title">{{ service.title }}</h4>

          <p class="service-description">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import service icons (local images)
import carIcon from '@/assets/imgs/car.png';
import   houseIcon  from '@/assets/imgs/house.png';
import mapIcon from '@/assets/imgs/map.png';

// Define array of service objects
const services = [
  {
    title: "Fast Delivery Services",
    icon: carIcon,
    description:
      "Deliver your packages quickly and reliably. Our delivery service ensures timely arrivals with precision.",
  },
  {
    title: "Real-Time Tracking",
    icon: mapIcon,
    description:
      "Track your packages in real time with our live monitoring system for full transparency and control.",
  },
  {
    title: "Bulk Shipping Solutions",
    icon: houseIcon,
    description:
      "Cost-effective logistics for high-volume shipments. Ideal for businesses that require efficient distribution.",
  },
];
</script>

<style scoped>
.services-section {
  background-color: #f3f4f6;
  padding: 60px 0;
  text-align: center;
}

.icon-style {
  color: red;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.service-card {
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1);
}


.service-icon {
  height: 80px;
  margin: 0 auto 16px;
  display: block;
}

.service-title {
  font-size: 28px;
  color: #FC153B;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: 'dm-bold';
}

.service-description {
  font-size: 16px;
  color: #757575;
  font-family: 'poppins-regular';
  line-height: 20px;
}


@media (max-width: 768px) {
  .services-grid {
    display: grid;
    grid-template-columns: 1fr;

  }


  .service-title {
  font-size: 20px;
  
}

  .section-title {
    font-size: 28px;

  }


  .section-subtitle {
    font-size: 18px;

  }

}
</style>