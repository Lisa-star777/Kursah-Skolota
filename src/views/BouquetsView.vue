<template>
  <div class="catalog-page">
    <!-- Верхняя часть над карточками -->
    <section class="catalog-top-section">
      <div class="container">
        <div class="catalog-header">
          <h1 class="catalog-main-title">Букеты</h1>
          <p class="catalog-main-subtitle">Говорите цветами. Мы поможем найти нужные слова</p>
        </div>
      </div>
    </section>

    <!-- Полоска между подзаголовком и каталогом -->
    <div class="catalog-divider-container">
      <div class="container">
        <div class="catalog-divider"></div>
      </div>
    </div>

    <!-- Сетка товаров -->
    <section class="catalog-products-section">
      <div class="container">
        <div class="products-grid">
          <div v-for="product in bouquetProducts" :key="product.id" class="product-card" @click="goToProduct(product.id)">
            <div class="product-image">
              <img 
                :src="product.images" 
                :alt="product.title" 
                class="product-img"
                @error="handleImageError"
              >
            </div>
            <h3 class="product-title">{{ product.title }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <div class="product-price">{{ formatPrice(product.price) }} ₽</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BouquetsView',
  data() {
    return {
      bouquetProducts: [
        { id: 9, title: '"Cotton candy"', price: 6550, description: 'Нежные розы для романтического настроения', images: '/assets/images/bouquets/bouquet5.JPG' },
        { id: 10, title: '«Утро в Париже»', price: 4900, description: 'Яркие цветы в естественной композиции', images: '/assets/images/bouquets/bouquet6.JPG' },
        { id: 11, title: '"Кружева"', price: 8200, description: 'Редкие цветы для особого случая', images: '/assets/images/bouquets/bouquet7.JPG' },
        { id: 12, title: '"Passion"', price: 5800, description: 'Элегантные розы', images: '/assets/images/bouquets/bouquet8.JPG' },
        { id: 13, title: '"Milkshake"', price: 4500, description: 'Свежие розы - символ нежности', images: '/assets/images/bouquets/bouquet9.JPG' },
        { id: 14, title: '"Apple Jack"', price: 12500, description: 'Букет из премиальных роз', images: '/assets/images/bouquets/bouquet10.JPG' },
        { id: 15, title: '"Coco Choco"', price: 6700, description: 'Яркая композиция из сезонных цветов', images: '/assets/images/bouquets/bouquet11.JPG' },
        { id: 16, title: 'Букет из бело-розовых гортензий с эвкалиптом', price: 5200, description: '', images: '/assets/images/bouquets/bouquet12.JPG' }
      ]
    }
  },
  methods: {
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
    goToProduct(productId) {
      this.$router.push(`/product/${productId}`)
    },
    handleImageError(event) {
      console.error('Ошибка загрузки изображения:', event.target.src);
      event.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23A3A3CC"/><text x="100" y="100" font-family="Arial" font-size="14" fill="white" text-anchor="middle" dy=".3em">Изображение не найдено</text></svg>';
    }
  }
}
</script>

<style scoped>
.catalog-page {
  margin-top: 120px !important;
  min-height: 100vh;
}

/* Верхняя часть над карточками */
.catalog-top-section {
  background-color: #ffffff;
  padding: 40px 0;
  border-bottom: 3px solid #292966;
  margin-bottom: 40px;
}

.catalog-header {
  text-align: center;
  padding: 30px 0;
}

.catalog-main-title {
  font-family: 'Russo One', sans-serif;
  font-size: 52px;
  color: #292966;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.2;
}

.catalog-main-subtitle {
  font-family: 'Albert Sans', sans-serif;
  font-size: 22px;
  color: #666;
  font-style: italic;
  margin: 0;
  line-height: 1.6;
  font-weight: 500;
}

/* Контейнер для полоски */
.catalog-divider-container {
  background-color: #ffffff;
  padding: 0;
}

.catalog-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #292966 20%, #292966 80%, transparent);
  margin: 20px 0 40px;
}

.catalog-products-section {
  padding: 20px 0 60px;
  background-color: #ffffff;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin: 0 auto;
}

/* Стили для карточек товаров */
.product-card {
  background-color: #B8B8B8;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 200px;
  background-color: #A3A3CC;
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.5s ease;
}

.product-card:hover .product-img {
  transform: scale(1.05);
}

.product-title {
  font-family: 'Albert Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;
  color: #292966;
  line-height: 1.3;
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-description {
  font-family: 'Albert Sans', sans-serif;
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.4;
  flex-grow: 1;
  min-height: 40px;
}

.product-price {
  font-family: 'Albert Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #292966;
  margin-bottom: 15px;
  margin-top: auto;
}

.product-button {
  background-color: #A3A3CC;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-family: 'Albert Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
}

.product-button:hover {
  background-color: #9292c2;
  transform: translateY(-2px);
}

/* Адаптивность */
@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (max-width: 992px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .catalog-main-title {
    font-size: 44px;
  }
  
  .catalog-main-subtitle {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .catalog-page {
    margin-top: 140px !important;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
  
  .catalog-main-title {
    font-size: 36px;
  }
  
  .catalog-main-subtitle {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .catalog-page {
    margin-top: 160px !important;
  }
  
  .catalog-main-title {
    font-size: 32px;
  }
  
  .catalog-main-subtitle {
    font-size: 16px;
  }
}
</style>