<template>
  <div class="container">
    <div class="about-section">
      <div class="about-image">
        <img src="@/assets/imgs/delivery-man.png" alt="delivery-man-Image" />
      </div>
      <div class="about-content">
        <p>
          <h5 class="section-subtitle">
  <span><font-awesome-icon icon="truck" class="section-icon" /></span>
  Welcome to FreightZone
</h5>
        </p>
        <h2 class="section-title">Fast, Secure, and Transparent <br />Logistics Services</h2>

        <div class="feature-item" v-for="(item, index) in textItems" :key="index">
          <img :src="item.image" alt="Text Image" class="feature-image" />
          <div class="feature-text">
            <h3>{{ item.title }}</h3>
            <p>{{ item.paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import boxImg from '@/assets/imgs/box.png';
import contactImg from '@/assets/imgs/contact.png';

export default {
  data() {
    return {
      textItems: [
        {
          image: boxImg,
          title: " Real-Time Tracking:",
          paragraph: "Stay updated with live tracking, ensuring full transparency of your shipment's location and progress."
        },
        {
          image: contactImg,
          title: "Affordable Solutions:",
          paragraph: "Compare and choose the best offers to save on shipping costs without compromising quality."
        },
        {
          image: contactImg,
          title: "Reliable Delivery:",
          paragraph: "We connect you with trusted drivers for safe and timely deliveries across Australia."
        },
        {
          image: contactImg,
          title: "Easy Booking Process:",
          paragraph: "Simplified booking steps make it easy to schedule your shipment in just a few clicks."
        }
      ]
    };
  }
};
</script>

<style scoped>
.about-section {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
}

.about-image {
  width: 40%;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 16px;
}

.section-icon {
  color: red;
  font-size: 16px;
  margin-right: 8px;
}


.about-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.about-content p {
  font-size: 20px;
  margin: 0;
  color: #333333;
  font-family: 'poppins-bold';
}

.feature-item {
  display: flex;
  align-items: center;
  font-family: "poppins-regular";
}

.feature-item img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-right: 10px;
  flex-shrink: 0;
  padding: 10px;
}

.feature-item h3 {
  font-size: 24px;
  margin: 0;
  padding-bottom: 5px;
  font-family: "poppins-bold";
}

.feature-item p {
  font-size: 16px;
  color: #74787C;
  padding-bottom: 15px;
  width: 445px;
  line-height: 26px;
  font-family: 'poppins-regular';
}

.feature-text {
  display: flex;
  flex-direction: column;
}

/* Responsive design */

@media (max-width: 768px) {
  .container {
    max-width: 100%;
  }

  .about-section {
    flex-direction: column;
    gap: 15px;
    display: flex;
  }

  .feature-item p {
    width: fit-content;
  }

  .about-image {
    margin-top: 30px;
    width: 85%;
  }

  .about-content p {
    text-align: center;
    font-size: 16px;
  }

  .about-content h2 {
    text-align: center;
    font-size: 28px;
  }
}
</style>
