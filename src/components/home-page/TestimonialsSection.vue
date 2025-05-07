<template>
  <section class="testimonials-section" >
    <div class="container">

      <h2 class="section-subtitle" >
        <span><font-awesome-icon icon="truck" class="icon-style" aria-hidden="true" /></span>
        Testimonials
      </h2>

      
      <h1 class="section-title">
        What Our Customers Say About FreightZone
      </h1>

      <!-- Testimonials list -->
      <div class="testimonials">

        <article
          class="testimonial-card"
          v-for="testimonial in testimonials"
          :key="testimonial.name"
        >

        <img
            src="@/assets/imgs/Image.png"
            alt="Quote icon"
            loading="lazy"
          />

          <!-- Testimonial text -->
          <p class="testimonial-text">"{{ testimonial.text }}"</p>

          <!-- User info -->
          <div class="testimonial-user">
            <!-- User image (conditionally rendered if available) -->
            <img
              v-if="testimonial.image"
              :src="testimonial.image"
              :alt="`${testimonial.name} profile photo`"
              class="user-avatar"
              loading="lazy"
            />
            <div>
              <h4 class="user-name">{{ testimonial.name }}</h4>
              <p class="user-location">{{ testimonial.location }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup>
// Import user images (static assets)
import walker from '@/assets/imgs/walker.png'
import smith from '@/assets/imgs/smith.png'
import olivia from '@/assets/imgs/Carter.png'

// Testimonials data array
const testimonials = [
  {
    name: 'Liam Walker',
    location: 'Sydney, NSW',
    text: 'I’ve always struggled with finding reliable shipping services, but FreightZone changed everything for me. Posting my shipment details was super simple, and within minutes, I had multiple offers to choose from. The real-time tracking feature gave me peace of mind, and the package arrived on time without any issues. FreightZone is now my go-to platform for all my shipping needs!',
    image: walker
  },
  {
    name: 'Ethan Smith',
    location: 'Brisbane, QLD',
    text: 'As a small business owner, I need a logistics partner I can trust, and FreightZone delivered beyond my expectations. The platform helped me find the best rates for bulk shipments, and the drivers were professional and friendly. The transparency in pricing and the ability to compare offers made a huge difference for my business. I can’t imagine shipping without FreightZone anymore!',
    image: smith
  },
  {
    name: 'Olivia Carter',
    location: 'Melbourne, VIC',
    text: 'I was skeptical at first about using an online platform for shipping, but FreightZone proved me wrong. Their customer support team was incredibly helpful when I had questions about my shipment. The entire process—from booking to delivery—was seamless, and I appreciated how easy it was to track my package every step of the way. I’ll definitely recommend FreightZone to my friends and family!',
    image: olivia
  }
];
</script>


<style scoped>
.testimonials-section {
  padding: 80px 20px;
  text-align: center;
}


.icon-style {
  color: #FC153B;

}


.testimonials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.testimonial-card {
  background: #F3F7FF;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 300px;
  max-width: 350px;
  text-align: left;
}

.testimonial-text {
  color: #555;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 150%;
}

.testimonial-user {
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #fff;
  padding: 5px;
  height: 60px;
}

.user-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.user-name {

  padding-bottom: 5px;
  margin: 0;
  color: #263238;
}

.user-location {
  color: #455A64;
  font-size: 14px;
  margin: 0;
}



@media (max-width: 768px) {
  .section-subtitle {
    font-size: 18px;
  }


  .testimonial-text {
    font-size: 14px;


  }


}
</style>