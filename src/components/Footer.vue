<template>
  <footer class="footer" aria-labelledby="footer-title">
    <div class="container">
      <h2 id="footer-title" class="visually-hidden">Footer Navigation and Contact Information</h2>

      <div class="footer-container">
        <!-- Logo and Description -->
        <div class="footer-section" aria-label="About FreightZone">
          <div class="logo">
            <img src="../assets/imgs/logo.png" alt="FreightZone Logo" />
          </div>
          <p class="description">
            We understand that every business is unique, which is why we tailor our services to meet your specific needs.
          </p>
        </div>

        <!-- Our Company -->
        <nav class="footer-section" aria-label="Our Company">
          <h3>Our Company</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Partners & Certifications</a></li>
            <li><a href="#">Reviews & Awards</a></li>
          </ul>
        </nav>

        <!-- Contact Us -->
        <section class="footer-section" aria-label="Contact Information">
          <h3>Contact Us</h3>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@FreightZone.com">info@FreightZone.com</a></li>
            <li><strong>Phone:</strong> +25 3692 3256</li>
            <li><strong>Toll-Free:</strong> 1-900-322-8422</li>
          </ul>
        </section>

        <!-- Our Address -->
        <section class="footer-section" aria-label="Our Address">
          <h3>Our Address</h3>
          <address>
            365 Hilton Street KYU 3269<br />
            London, United Kingdom
          </address>
          <a href="#" class="view-link">View all locations</a>
        </section>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2024 FreightZone. All Rights Reserved.</p>
        <nav class="footer-links" aria-label="Legal Links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No JS needed
</script>

<style scoped>
/* Visually hidden for accessibility heading */
.visually-hidden {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.footer {
  background-color: #111;
  color: #ccc;
  font-size: 14px;
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
  flex-wrap: wrap;
}

.footer-bottom p {
  margin: 0;
  color: #fff;
}

.footer-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #74787C;
}

address {
  font-style: normal;
  color: #74787C;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 20px;
  }

  .footer-section h3::after {
    left: 43%;
  }

  .footer-section p,
  .description,
  address {
    margin-top: 30px;
    font-size: 14px;
    line-height: 22px;
    width: 100%;
    text-align: center;
  }

  .footer {
    text-align: center;
  }

  .logo {
    justify-content: center;
  }

  .footer-section h3 {
    font-size: 18px;
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
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
  }

  .logo img {
    height: 40px;
  }
}
</style>
