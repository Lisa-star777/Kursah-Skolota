<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <nav>
          <ul class="footer-nav">
            <li><router-link to="/bouquets">БУКЕТЫ</router-link></li>
            <li><router-link to="/gifts">ПОДАРКИ</router-link></li>
            <li><router-link to="/box-flowers">ЦВЕТЫ В КОРОБКАХ</router-link></li>
            <li><router-link to="/certificates">СЕРТИФИКАТЫ</router-link></li>
            <li><router-link to="/about">О НАС</router-link></li>
          </ul>
        </nav>
        <div class="social-text">
          НАШИ СОЦИАЛЬНЫЕ СЕТИ
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background-color: #333333;
  color: white;
  padding: 50px 0 25px;
  margin-top: 80px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.footer-nav {
  display: flex;
  list-style: none;
  gap: 30px;
  flex-wrap: wrap;
}

.footer-nav a {
  color: white;
  text-decoration: none;
  font-family: 'Albert Sans', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 14px;
}

.footer-nav a:hover {
  color: #A3A3CC;
}

.social-text {
  font-family: 'Albert Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
}

/* Адаптивность */
@media (max-width: 992px) {
  .footer-content {
    flex-direction: column;
    gap: 25px;
    text-align: center;
  }
  
  .social-text {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .footer-nav {
    gap: 20px;
    justify-content: center;
  }
}
</style>