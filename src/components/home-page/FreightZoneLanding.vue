<template>
  <!-- Hero Section: This is the main section of the page displaying a background image and introductory content -->
  <section class="hero">
    <div class="container">
      <div class="freightzone-home">
        
        <!-- Hero Content -->
        <div class="hero-content">
          <h5 class="section-subtitle">
  <span><font-awesome-icon icon="truck" /></span>
  Welcome to FreightZone
</h5>

          <h1>FreightZone: Easy Shipping Across Australia</h1>
          <p>
            Connecting drivers and customers for fast, reliable, and affordable shipping.
            Compare prices, track shipments, and secure the best deal—all in one platform.
          </p>

          <!-- Estimate Request Form: This form allows users to request a shipping estimate -->
          <form class="estimate-form">
            <div class="form-header">
              <h3>Request Estimate</h3>
            </div>

            <div class="form-body">
              <!-- First Row: From and To location fields -->
              <div class="form-row">
                <div class="form-group">
                  <label for="from">From: *</label>
                  <input type="text" id="from" placeholder="Select your location" />
                </div>

                <div class="form-group">
                  <label for="to">To: *</label>
                  <input type="text" id="to" placeholder="Select your location" />
                </div>
              </div>

              <!-- Second Row: Pickup date and Material weight fields -->
              <div class="form-row">
                <div class="form-group">
                  <label for="datetime">Pickup date *</label>
                  <input type="text" id="datetime" placeholder="Select date and time " />
                </div>

                <div class="form-group">
                  <label for="weight">Material weight</label>
                  <input type="text" id="weight" placeholder="Ex: 50kg " />
                </div>
              </div>

              <!-- Third Row: Phone number and submit button -->
              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Phone number *</label>
                  <input type="text" id="phone" placeholder="(+234) 567-8912" />
                </div>

                <div class="form-group">
                  <label>&nbsp;</label>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

  /* hero section start */

.hero {
  background-image: url(@/assets/imgs/landing.png);  
  background-size: cover;
  background-position: center;
  padding: 60px 60px;
  color: white;
}
.section-subtitle {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
}


.quote-btn {
  background-color: #ef233c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
}

.hero-content {
  max-width: 600px;
}

.hero-content h1 {
  font-size: 45px;
  margin: 10px 0;
}

.hero-content p {
  font-size: 20px;
  line-height: 1.6;
  font-family: 'poppins-regular';
}
 

/* Form header style start */

.estimate-form {
  max-width: 470px;
  background-color: #fff;
  padding: 20px 20px 20px 20px;
  border-radius: 10px;
  position: relative;
  margin-top: 75px;
}

.form-header {
  position: absolute;
  top: -53px;
  left: 0;
  background-color: #fff;
  padding: 20px 50px;
  border-radius: 8px 8px 0 0;
}

.estimate-form h3 {
  color: #000;
  font-family: 'dm-bold';
  margin: 0;
  font-size: 24px;
}

.form-body {
  margin-top: 20px;
}

.form-row {
  display: flex;
  margin-bottom: 12px;
}

.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.estimate-form label {
  color: #333;
  font-family: 'dm-semi-bold';
  font-size: 16px;
  margin-bottom: 10px;
}

.estimate-form input,
.estimate-form button {
  padding: 6px 8px;
  font-size: 13px;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #000;
}

.estimate-form input {
  max-width: 220px;
}

.estimate-form button {
  max-width: 220px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
}

.estimate-form input::placeholder {
  color: #000;
  font-family: 'poppins-regular';
  font-size: 16px;
}

/* Form header style end */

/* Media query for responsiveness on smaller screens (max-width: 768px) */
@media (max-width: 768px) {
  .hero {
    background-image: url(@/assets/imgs/mobile-landing.png); 
    background-size: cover;
    background-position: top center;
    background-attachment: scroll;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 100%; 
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 18px;
  }

  .hero-content p {
    font-size: 16px;
  }

  .hero-content {
    text-align: center;
  }

  .hero-content h5 {
    font-size: 11px;
  }

  .form-header {
    left: 0;
    padding: 20px 28px;
  }

  .estimate-form {
    max-width: 100%;
  }

  .estimate-form h3 {
    font-size: 16px;
  }

  .estimate-form input::placeholder {
    font-size: 10px;
  }

  .estimate-form label {
    margin-top: 10px;
    font-size: 14px;
  }

  .form-row {
    flex-direction: column;
  }

  .form-group {
    flex: 1 1 100%;
  }

  .form-group input {
    width: 100%;
  }

  button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
