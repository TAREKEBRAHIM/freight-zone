<template>
    <section class="work-section">
      <h5 class="section-subtitle">
        <span><font-awesome-icon icon="truck" class="icon-style" /></span> Our Work Process
      </h5>
      <h2 class="section-title">Make 4 Simple Steps</h2>
      <div class="steps-grid">
        <div v-for="step in steps" :key="step.title" class="step-card">
          <div class="step-number">{{ step.number }}</div>
          <img :src="step.icon" class="step-icon" />
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
<script setup>


import orderIcon from '../assets/order.png';
import warehouseIcon from '../assets/warehouse.png';
import trackingIcon from '../assets/tracking.png';


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
 
 .container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
 }
 
 
 .work-section {
    padding: 60px 0;
    text-align: center;
    background-color: white;
  }
  
  .section-subtitle {
    font-size: 14px;
    font-weight: 600;
    color: #dc2626;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  
  .section-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 32px;
  }
  
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .step-card {
 background-color: #F4F5F8;
    border:1px solid #DDDDDD;
  width: 200px;
  height: 200px;
  padding: 20px;
  border-radius: 50%;
  margin: 0 auto;
}

.step-number {
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

  .step-icon {
    height: 48px;
    margin: 0 auto 16px;
    display: block;
  }
  
  .step-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .step-description {
    font-size: 14px;
    color: #4b5563;
}


@media (max-width: 768px) {
  .container {
    max-width: 100%;
  }
  .section-subtitle {
   font-size: 18px;
  }


}



  </style>
  