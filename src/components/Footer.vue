<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-container">
        <!-- Logo and Description -->
        <div class="footer-section">
          <div class="logo">
            <img src="../assets/logo.png" alt="FreightZone Logo" />
          </div>
          <p class="description">
            We understand that every business is unique, which is why we tailor our services to meet your specific needs.
          </p>
        </div>

        <!-- Our Company -->
        <div class="footer-section">
          <h3>Our Company</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Partners & Certifications</a></li>
            <li><a href="#">Reviews & Awards</a></li>
          </ul>
        </div>

        <!-- Contact Us -->
        <div class="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>E: info@FreightZone.com</li>
            <li>P: +25 3692 3256</li>
            <li>T: 1-900-322-8422</li>
          </ul>
        </div>

        <!-- Our Address -->
        <div class="footer-section">
          <h3>Our Address</h3>
          <p>
            365 Hilton Street KYU 3269<br />
            London, United Kingdom
          </p>
          <a href="#" class="view-link">View all locations</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>Copyright © 2024 FreightZone. All Rights Reserved.</p>
        <div class="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #111;
  color: #ccc;
  font-size: 14px;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  padding-top: 40px;
}

.footer-section h3 {
  color: #fff;
  margin-bottom: 15px;
  font-size: 16px;
  position: relative;
}

.footer-section h3::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: #e63946;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
  color: #74787C;
}

.footer-section ul li a {
  color: #74787C;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #fff;
}

.footer-section .view-link {
  color: #e63946;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
}

.footer-section .view-link:hover {
  text-decoration: underline;
}

.logo {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.logo img {
  height: 50px;
  margin-right: 10px;
}

.logo span {
  color: #e63946;
  font-size: 20px;
  font-weight: bold;
}

.description {
  color: #74787C;
  font-size: 16px;
  line-height: 26px;
  width: 288px;
}

.footer-bottom {
  border-top: 1px solid #333;
  margin-top: 40px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  margin: 0;
  margin-bottom: 10px;
  color: #fff;
}

.footer-section p {
  color: #74787C;
  font-size: 16px;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #74787C;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr; 
    gap: 40px; 
    padding-top: 20px;
  }

  .footer-section h3::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 43%;
    width: 30px;
    height: 2px;
    background-color: #e63946;
  }

  .footer-section p {
    margin-top: 30px;
  }

  .footer {
    text-align: center;
  }

  .logo {
    justify-content: center;
  }

  .footer-section h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .footer-section ul li {
    margin-bottom: 8px;
    font-size: 14px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-bottom p {
    margin-bottom: 15px;
  }

  .footer-links {
    gap: 15px;
    margin-top: 15px;
  }

  .logo img {
    height: 40px;
  }

  .description {
    width: 100%;
    font-size: 14px;
    line-height: 22px;
    margin-top: 10px;
  }
}
</style>
