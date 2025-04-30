<template>
    <section class="mobile-app-section">
      <div class="container">
        <!-- Section Header -->
        <h5>
          <span><font-awesome-icon icon="truck" /></span>
          Mobile App
        </h5>
        <h2 class="title">Awesome App That Works For You</h2>
        <p class="subtitle">
          FreightZone streamlines your delivery needs. Easily input your shipment information<br>
          and let us handle the rest. Our network of professional drivers ensures your package is<br>
          delivered promptly and safely.
        </p>
  
        <!-- Download Buttons -->
        <div class="buttons">
          <a href="https://www.apple.com/app-store/" target="_blank" class="store-btn" aria-label="Download on App Store">
            <img src="../assets/imgs/apple.png" alt="Download on Apple App Store" class="store-icon" loading="lazy" />
            <div class="store-text">
              <small>Download on the</small>
              <strong>App Store</strong>
            </div>
          </a>
  
          <a href="https://play.google.com" target="_blank" class="store-btn" aria-label="Get it on Google Play">
            <img src="../assets/imgs/google.png" alt="Get it on Google Play" class="store-icon" loading="lazy" />
            <div class="store-text">
              <small>GET IT ON</small>
              <strong>Google Play</strong>
            </div>
          </a>
        </div>
  
        <!-- Info Cards -->
        <div class="cards">
          <!-- Card 1 -->
          <div class="card">
            <img src="../assets/imgs/Delivery.png" alt="Speedy Delivery Illustration" loading="lazy" />
            <div class="card-contant">
              <h3 class="card-title"><span class="gray-hash">#</span> Speedy Delivery FreightZone</h3>
              <p class="card-text">
                Welcome aboard! Let’s set up your account so you can start dispatching your
                parcels quickly—whether it’s a local drop-off or an international shipment.
              </p>
              <div class="slider-dots">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <div class="main-action">
                <button class="card-btn gray-btn">
                  Login <font-awesome-icon class="arrow-icon" icon="arrow-right" />
                </button>
              </div>
            </div>
          </div>
  
          <!-- Card 2 -->
          <div class="card middle-card">
            <img src="../assets/imgs/Delivery-sec.png" alt="Join the Revolution Image" loading="lazy" />
            <div class="card-contant">
              <h3 class="card-title"><span class="red-hash">#</span> Join the Delivery Revolution</h3>
              <p class="card-text">
                Seeking swift delivery for your items? We guarantee fast and reliable
                service, ensuring your parcels are delivered on time.
              </p>
              <div class="slider-dots">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <div class="btn-container">
                <button class="card-btn">
                  Next <font-awesome-icon class="arrow-icon" icon="arrow-right" />
                </button>
              </div>
            </div>
          </div>
  
          <!-- Card 3 -->
          <div class="card">
            <img src="../assets/imgs/Delivery-thr.png" alt="Welcome to FreightZone" loading="lazy" />
            <div class="card-contant">
              <h3 class="card-title"><span class="red-hash">#</span> Welcome to FreightZone</h3>
              <p class="card-text">
                Ready to deliver smarter? Our app empowers you to streamline your shipping needs
                with reliability and speed at every step.
              </p>
              <div class="slider-dots">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <div class="main-action">
                <button class="card-btn">
                  Get Started <font-awesome-icon class="arrow-icon" icon="arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No script content for now
  </script>
  
  <style scoped>
  .mobile-app-section {
    padding: 80px 20px;
    text-align: center;
    background-color: #f9f9f9;
  }
  
  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .mobile-app-section h5 {
    font-size: 20px;
  }
  
  h5 span {
    color: red;
    margin-right: 5px;
  }
  
  .title {
    font-size: 40px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    color: #777;
    margin-bottom: 60px;
    line-height: 26px;
  }
  
  .cards {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 50px;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }
  
  .card {
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .middle-card {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    margin-bottom: 60px;
  }
  
  .card img {
    width: 230px;
    height: 180px;
    max-width: 100%;
    margin-top: 30px;
  }
  
  .card-contant {
    padding: 20px;
  }
  
  .card-title {
    font-size: 22px;
    margin-bottom: 10px;
    text-transform: capitalize;
    line-height: 26px;
  }
  
  .card-text {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
  }
  
  .slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
  }
  
  .dot {
    width: 12px;
    height: 12px;
    background-color: #ccc;
    border-radius: 50%;
    transition: background-color 0.3s;
  }
  
  .dot.active {
    background-color: #000;
  }
  
  .main-action,
  .btn-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  
  .card-btn {
    background-color: rgba(228, 13, 13, 0.85);
    color: #fff;
    border: none;
    padding: 15px 50px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 6px;
    text-transform: capitalize;
    width: 100%;
    max-width: 220px;
  }
  
  .card-btn:hover {
    background-color: #c00000;
  }
  
  .gray-btn {
    background-color: #777 !important;
  }
  
  .gray-hash {
    color: #777;
  }
  
  .red-hash {
    color: red;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  
  .store-btn {
    display: flex;
    align-items: center;
    background-color: #000;
    color: white;
    padding: 12px 20px;
    border-radius: 12px;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .store-btn:hover {
    background-color: #333;
  }
  
  .store-icon {
    width: 32px;
    height: 35px;
    margin-right: 12px;
  }
  
  .store-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.2;
  }
  
  .store-text small {
    font-size: 12px;
  }
  
  .store-text strong {
    font-size: 18px;
  }
  
  .arrow-icon {
    margin-left: 5px;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .cards {
      flex-direction: column;
      gap: 30px;
    }
  
    .card {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }
  
    .title {
      font-size: 24px;
      margin-bottom: 20px;
    }
  
    .subtitle {
      font-size: 14px;
      margin-bottom: 30px;
      line-height: 22px;
    }
  
    .mobile-app-section h5 {
      font-size: 18px;
    }
  
    .buttons {
      flex-direction: column;
      gap: 15px;
    }
  
    .card-text {
      font-size: 14px;
      text-align: center;
    }
  
    .card-btn {
      font-size: 14px;
      padding: 12px 40px;
      max-width: 100%;
    }
  }
  </style>
  