<template>
  <section class="work-section">
    <h5 class="section-subtitle">
      <span>
        <font-awesome-icon icon="truck" class="subtitle-icon" />
      </span>
      Our Work Process
    </h5>
    <h2 class="section-title">Make 4 Simple Steps</h2>

    <div class="process-list">
      <div
        v-for="step in steps"
        :key="step.title"
        class="process-item"
      >
        <div class="process-number">{{ step.number }}</div>
        <img :src="step.icon" class="process-icon" />
        <h3 class="process-title">{{ step.title }}</h3>
        <p class="process-description">{{ step.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import orderIcon from '@/assets/imgs/order.png';
import warehouseIcon from '@/assets/imgs/warehouse.png';
import trackingIcon from '@/assets/imgs/tracking.png';

const steps = [
  {
    number: "01",
    title: "Order Processing",
    icon: orderIcon,
    description: "The logistics process to begins with the...",
  },
  {
    number: "02",
    title: "Warehousing",
    icon: warehouseIcon,
    description: "Goods that are ready for shipment...",
  },
  {
    number: "03",
    title: "Order Tracking",
    icon: trackingIcon,
    description: "Real-time tracking systems are used to monitor...",
  },
  {
    number: "04",
    title: "Product Delivery",
    icon: trackingIcon,
    description: "In the final stage of logistics services, the...",
  },
];
</script>

<style scoped>
.work-section {
  padding: 60px 0;
  text-align: center;
  background-color: white;
}

.section-subtitle {
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.subtitle-icon {
  color: red;
}

.process-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.process-item {
  background-color: #f4f5f8;
  border: 1px solid #dddddd;
  width: 200px;
  height: 200px;
  padding: 20px;
  border-radius: 50%;
  margin: 0 auto;
}

.process-number {
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #dc2626;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.process-icon {
  height: 48px;
  margin: 0 auto 16px;
  display: block;
}

.process-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.process-description {
  font-size: 14px;
  color: #4b5563;
}

@media (max-width: 768px) {
  .section-subtitle {
    font-size: 18px;
  }

  .process-item {
    width: 180px;
    height: 180px;
    padding: 16px;
  }

  .process-title {
    font-size: 16px;
  }

  .process-description {
    font-size: 13px;
  }
}
</style>
