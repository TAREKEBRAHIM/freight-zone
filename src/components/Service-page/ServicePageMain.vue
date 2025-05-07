<template>
  <div class="breadcrumb-container">
    <p class="breadcrumb"><font-awesome-icon icon="home" /> > Our Services</p>
  </div>
  <div class="container">

    <section class="our-services-section">
      <div class="header">
        <h1>Our Services</h1>
        <p class="description">
          At FreightZone, we offer a unique approach to shipping. Simply enter
          your budget and shipment details, and our network of drivers will bid
          to provide the best delivery options. Our platform ensures you get
          competitive rates and quality service.
        </p>
      </div>

      <div class="services-intro">
        <p class="small-title">
          <font-awesome-icon
            icon="truck"
            class="icon-style"
            aria-hidden="true"
          />
          Service We Provide
        </p>
        <h2>Our Services To Explore</h2>
      </div>

      <div class="cards-wrapper">
      
        <div class="service-card" v-for="n in 3" :key="n">
          <img src="@/assets/imgs/service-img.png" alt="Service Image" />
          <div class="card-content">
            <p class="subtitle">Service 2</p>
            <h3>Car Freight</h3>
            <p class="text">
              We’ll keep your items damage-free with our reliable car freight
              services.
            </p>

            <ul class="features">
              <li>
                <font-awesome-icon icon="check-circle" class="check-icon" />
                Flexibility & Versatility
              </li>
              <li>
                <font-awesome-icon icon="check-circle" class="check-icon" />
                Controlled Environment
              </li>
              <li>
                <font-awesome-icon icon="check-circle" class="check-icon" />
                Speed and Efficiency
              </li>
            </ul>

            <div class="details-btn-container">
              <button class="details-btn">
                <span class="plus">+</span> Read Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

</div>
</template>
  
  <script setup>
</script>
  
  <style scoped>

.breadcrumb-container {
  text-align: center;
  background-color: #f5f5f5;
  padding: 10px;
}

.details-btn-container {
  text-align: center;
  margin-top: 35px;
margin-bottom: 15px;
}

.our-services-section {
  text-align: center;
margin-bottom: 150px;
}

.breadcrumb {
  font-size: 14px;
  color: #263238;
  margin-bottom: 10px;
}
.header h1 {
  font-size: 48px;
  margin-bottom: 10px;
  color: #232323;
}
.description {
  color: #757575;
  font-size: 18px;
  max-width: 800px;
  margin: 20px auto 40px;
  line-height: 150%;
}
.services-intro {
  margin-bottom: 50px;
  margin-top: 150px;
}
.services-intro .small-title {
  color: #fc153b;
  font-weight: bold;
  font-size: 20px;
}
.services-intro h2 {
  font-size: 40px;
  font-weight: 700;
  font-family: "poppins-bold";
}

.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.service-card {
  background: #F5F5F5;
  border: 1px solid #eee;
  width: 300px;
  overflow: hidden;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}
.service-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-content {
  padding: 20px;
}
.subtitle {
  color: red;
  font-family: 'poppins-regular';
  font-size: 14px;
  margin: 0;

}
.card-content h3 {
  font-size: 24px;
  font-family: 'poppins-bold';
  margin-bottom: 10px;
}


.check-icon {
  color: red;
  margin-right: 8px;
  font-size: 14px;
}


.text {
  font-size: 16px;
  color: #74787C;
  margin-bottom: 12px;

}
.features {
  padding-left: 0;
  list-style: none;
  margin-bottom: 16px;
}
.features li {
  font-size: 14px;
  margin-bottom: 6px;
color: #74787C;
}
.details-btn {
  background: none;
  border: none;
  color: #000;
  font-weight: bold;
  cursor: pointer;
}
.plus {
  background: red;
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
  margin-right: 6px;
}
</style>
  