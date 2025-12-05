<template>
  <div class="checkout-page">
    <!-- Хлебные крошки -->
    <section class="breadcrumb-section">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/">Главная</router-link>
          <span class="divider">/</span>
          <span class="current">Оформление заказа</span>
        </nav>
      </div>
    </section>

    <div class="container">
      <div class="checkout-layout">
        <!-- Левая колонка - Форма оформления -->
        <div class="checkout-form-section">
          <h1 class="checkout-title">Оформление заказа</h1>

          <!-- 1. Контакты получателя -->
          <div class="form-section">
            <h2 class="form-section-title">1. Контакты получателя</h2>
            
            <div class="form-group">
              <label class="form-label">Имя получателя</label>
              <input type="text" class="form-input" placeholder="Иван Иванов">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Адрес</label>
                <input type="text" class="form-input" placeholder="ул. Улицы, 12">
              </div>
              
              <div class="form-group">
                <label class="form-label">Время</label>
                <select class="form-select">
                  <option>6:00 - 9:00</option>
                  <option>9:00 - 12:00</option>
                  <option>12:00 - 15:00</option>
                  <option>15:00 - 18:00</option>
                  <option>18:00 - 21:00</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Тип</label>
                <select class="form-select">
                  <option>Номер телефона</option>
                  <option>Email</option>
                </select>
              </div>
              
              <div class="form-group">
                <label class="form-label">Контакт</label>
                <input type="text" class="form-input" placeholder="+380 (98) 00 00 000">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Дата доставки</label>
              <input type="text" class="form-input" placeholder="22.02.2021">
            </div>
          </div>

          <!-- Разделитель -->
          <div class="section-divider"></div>

          <!-- 2. Контакты отправителя -->
          <div class="form-section">
            <h2 class="form-section-title">2. Контакты отправителя</h2>
            
            <div class="form-group">
              <label class="form-label">Имя отправителя</label>
              <input type="text" class="form-input" placeholder="Иван Иванов">
            </div>

            <div class="form-group">
              <label class="form-label">Номер телефона</label>
              <input type="text" class="form-input" placeholder="+380 (98) 00 00 000">
            </div>
          </div>

          <!-- Разделитель -->
          <div class="section-divider"></div>

          <!-- 3. Детали доставки -->
          <div class="form-section">
            <h2 class="form-section-title">3. Детали доставки</h2>
            
            <div class="form-group">
              <label class="form-label">Открытие</label>
              <textarea class="form-textarea" placeholder="Текст открытия" rows="3"></textarea>
              <div class="char-counter">До 70 символов</div>
            </div>
          </div>
        </div>

        <!-- Правая колонка - Итоги заказа -->
        <div class="order-summary-section">
          <div class="order-summary-card">
            <h2 class="summary-title">Ваш заказ</h2>
            
            <div class="order-items">
              <div class="order-item">
                <span class="item-name">25 розовых плюновидных роз</span>
                <span class="item-price">777 ₽</span>
              </div>
            </div>

            <div class="summary-divider"></div>

            <div class="summary-row">
              <span class="summary-label">Сумма заказа</span>
              <span class="summary-value">6000 ₽</span>
            </div>

            <div class="summary-row">
              <span class="summary-label">Доставка</span>
              <span class="summary-value">100 ₽</span>
            </div>

            <div class="summary-divider"></div>

            <div class="summary-total">
              <span class="total-label">Всего:</span>
              <span class="total-value">5 304 ₽</span>
            </div>

            <button class="submit-order-button" @click="submitOrder">
              Оформить заказ
            </button>

            <!-- Сертификат -->
            <div class="certificate-section">
              <h3 class="certificate-title">Применить сертификат</h3>
              <p class="certificate-description">Введите номер подарочного сертификата</p>
              
              <div class="certificate-input-group">
                <input type="text" class="certificate-input" placeholder="Номер сертификата">
                <button class="apply-button">Применить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно с контактами после оформления -->
    <div v-if="showContactsModal" class="contacts-modal" @click="hideContacts">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="hideContacts">×</button>
        <h3>Спасибо за заказ!</h3>
        <p class="modal-subtitle">Ваш заказ успешно оформлен. Для подтверждения свяжитесь с нами:</p>
        
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-label">📞 Телефон:</span>
            <span class="contact-value">+7 (800) 555-35-35</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">📧 Email:</span>
            <span class="contact-value">info@tokusbloom.ru</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">📍 Адрес:</span>
            <span class="contact-value">г. Владивосток, ул. Шепеткого, д. 14</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">🕒 Время работы:</span>
            <span class="contact-value">Ежедневно с 9:00 до 21:00</span>
          </div>
        </div>
        
        <p class="modal-note">Позвоните или напишите нам для подтверждения заказа!</p>
        
        <button class="back-to-home-button" @click="goToHome">
          Вернуться на главную
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutView',
  data() {
    return {
      showContactsModal: false
    }
  },
  methods: {
    submitOrder() {
      // Здесь обычно отправка данных на сервер
      // Показываем контакты после оформления
      this.showContactsModal = true
    },
    hideContacts() {
      this.showContactsModal = false
    },
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.checkout-page {
  margin-top: 120px;
  min-height: 100vh;
  background-color: #ffffff;
  padding-bottom: 60px;
}

/* Хлебные крошки */
.breadcrumb-section {
  background-color: #ffffff;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 40px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Albert Sans', sans-serif;
  font-size: 14px;
}

.breadcrumb a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb a:hover {
  color: #292966;
}

.breadcrumb .current {
  color: #292966;
  font-weight: 600;
}

.breadcrumb .divider {
  color: #999;
}

/* Основной макет */
.checkout-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

/* Левая колонка - Форма */
.checkout-form-section {
  padding-right: 40px;
  border-right: 1px solid #e0e0e0;
}

.checkout-title {
  font-family: 'Albert Sans', sans-serif;
  font-size: 32px;
  color: #292966;
  margin-bottom: 40px;
  font-weight: 600;
}

.form-section {
  margin-bottom: 40px;
}

.form-section-title {
  font-family: 'Albert Sans', sans-serif;
  font-size: 20px;
  color: #292966;
  margin-bottom: 25px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 2px solid #A3A3CC;
}

.form-group {
  margin-bottom: 25px;
}

.form-label {
  display: block;
  font-family: 'Albert Sans', sans-serif;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Albert Sans', sans-serif;
  font-size: 16px;
  color: #292966;
  background-color: white;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #A3A3CC;
  box-shadow: 0 0 0 3px rgba(163, 163, 204, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.char-counter {
  text-align: right;
  font-family: 'Albert Sans', sans-serif;
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.section-divider {
  height: 1px;
  background-color: #e0e0e0;
  margin: 40px 0;
}

/* Правая колонка - Итоги */
.order-summary-section {
  position: sticky;
  top: 140px;
  align-self: start;
}

.order-summary-card {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 30px;
  border: 2px solid #A3A3CC;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

.summary-title {
  font-family: 'Albert Sans', sans-serif;
  font-size: 24px;
  color: #292966;
  margin-bottom: 25px;
  font-weight: 600;
  text-align: center;
}

.order-items {
  margin-bottom: 20px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
}

.item-name {
  font-family: 'Albert Sans', sans-serif;
  font-size: 16px;
  color: #292966;
  font-weight: 500;
}

.item-price {
  font-family: 'Albert Sans', sans-serif;
  font-size: 18px;
  color: #292966;
  font-weight: 600;
}

.summary-divider {
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.summary-label {
  font-family: 'Albert Sans', sans-serif;
  font-size: 16px;
  color: #666;
}

.summary-value {
  font-family: 'Albert Sans', sans-serif;
  font-size: 18px;
  color: #292966;
  font-weight: 500;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
  padding-top: 20px;
  border-top: 2px solid #292966;
}

.total-label {
  font-family: 'Albert Sans', sans-serif;
  font-size: 20px;
  color: #292966;
  font-weight: 600;
}

.total-value {
  font-family: 'Russo One', sans-serif;
  font-size: 28px;
  color: #292966;
  font-weight: bold;
}

.submit-order-button {
  background-color: #292966;
  color: white;
  border: none;
  padding: 18px 30px;
  border-radius: 10px;
  font-family: 'Albert Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 30px;
}

.submit-order-button:hover {
  background-color: #1a1a4d;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(41, 41, 102, 0.3);
}

/* Секция сертификата */
.certificate-section {
  padding-top: 25px;
  border-top: 1px solid #e0e0e0;
}

.certificate-title {
  font-family: 'Albert Sans', sans-serif;
  font-size: 18px;
  color: #292966;
  margin-bottom: 10px;
  font-weight: 600;
}

.certificate-description {
  font-family: 'Albert Sans', sans-serif;
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.certificate-input-group {
  display: flex;
  gap: 10px;
}

.certificate-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Albert Sans', sans-serif;
  font-size: 14px;
  color: #292966;
}

.apply-button {
  background-color: #A3A3CC;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-family: 'Albert Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.apply-button:hover {
  background-color: #9292c2;
  transform: translateY(-2px);
}

/* Модальное окно контактов */
.contacts-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.close-button {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #666;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #292966;
}

.modal-content h3 {
  font-family: 'Albert Sans', sans-serif;
  font-size: 28px;
  color: #292966;
  margin-bottom: 15px;
  text-align: center;
  font-weight: 600;
}

.modal-subtitle {
  font-family: 'Albert Sans', sans-serif;
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.contact-label {
  font-family: 'Albert Sans', sans-serif;
  font-weight: 600;
  color: #292966;
  font-size: 14px;
}

.contact-value {
  font-family: 'Albert Sans', sans-serif;
  color: #666;
  font-size: 16px;
  text-align: right;
}

.modal-note {
  font-family: 'Albert Sans', sans-serif;
  font-size: 14px;
  color: #666;
  text-align: center;
  font-style: italic;
  margin: 20px 0;
}

.back-to-home-button {
  background-color: #A3A3CC;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-family: 'Albert Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 20px;
}

.back-to-home-button:hover {
  background-color: #9292c2;
  transform: translateY(-2px);
}

/* Адаптивность */
@media (max-width: 992px) {
  .checkout-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .checkout-form-section {
    padding-right: 0;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 40px;
  }
  
  .order-summary-section {
    position: static;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .checkout-page {
    margin-top: 140px;
  }
  
  .checkout-title {
    font-size: 28px;
  }
  
  .form-section-title {
    font-size: 18px;
  }
  
  .summary-title {
    font-size: 22px;
  }
  
  .modal-content {
    padding: 30px 25px;
  }
  
  .modal-content h3 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .checkout-page {
    margin-top: 160px;
  }
  
  .checkout-title {
    font-size: 24px;
  }
  
  .certificate-input-group {
    flex-direction: column;
  }
  
  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  
  .contact-value {
    text-align: left;
  }
}
</style>