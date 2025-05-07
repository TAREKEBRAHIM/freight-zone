<template>
  <section class="work-process-section">
    <div class="container">

      <h2 class="section-subtitle">
        <span>          <font-awesome-icon icon="truck" class="icon-style" aria-hidden="true" />
        </span>
        Our Work Process
      </h2>

      
      <h1 class="section-title">Make 4 Simple Steps</h1>

      <!-- Workers cards grid -->
      <div class="workers">
        <div
          class="worker-card"
          v-for="worker in workers"
          :key="worker.name"
          :aria-label="`Info about ${worker.name}, ${worker.title}`"
        >
          <!-- Descriptive alt text for better SEO -->
          <img
            :src="worker.image"
            :alt="`${worker.name} - ${worker.title}`"
            class="worker-avatar"
            loading="lazy"
          />
          <h3 class="worker-name">{{ worker.name }}</h3>
          <p class="worker-title">{{ worker.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import team member images
import William from '@/assets/imgs/William.png'
import Amelia from '@/assets/imgs/Amelia.png'
import Andrew from '@/assets/imgs/Andrew.png'

// Define list of workers
const workers = [
  {
    name: 'William Samuel',
    title: 'Branch Manager',
    image: William
  },
  {
    name: 'Amelia Harper',
    title: 'Branch Manager',
    image: Amelia
  },
  {
    name: 'Andrew Joseph',
    title: 'Branch Manager',
    image: Andrew
  }
]
</script>

<style scoped>
/* Section wrapper styling */
.work-process-section {
  padding: 80px 20px;
  background-color: #f3f7ff;
  text-align: center;
}


.workers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

h2 span {
    color: red;
    margin-right: 5px;
  }

/* Individual card styling */
.worker-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 300px;
  max-width: 300px;
  padding: 20px;
  transition: transform 0.3s ease;
}
.worker-card:hover {
  transform: translateY(-5px);
}

/* Worker avatar */
.worker-avatar {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 20px;
}

.worker-name {
  font-size: 20px;
  font-weight: bold;
  color: #263238;
  margin-bottom: 5px;
}

.worker-title {
  color: #757575;
  font-size: 16px;
}

/* Responsive design */
@media (max-width: 768px) {
  .section-subtitle {
    font-size: 18px;
  }

  .section-title {
    font-size: 24px;
  }

  .worker-card {
    max-width: 100%;
  }
}
</style>
