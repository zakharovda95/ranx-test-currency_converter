<template>
  <div class="the-navbar">
    <div class="select">
      <select v-model="$i18n.locale">
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
    <div class="date">
      <span>{{ $t('date.date') }} {{ $store.state.currencies.date }}</span>
    </div>
    <div class="link-group">
      <nuxt-link class="link" :to="localePath('/list')"> {{ $t('links.toList') }} </nuxt-link>
      <nuxt-link class="link" :to="localePath('/converter')">
        {{ $t('links.toConverter') }}
      </nuxt-link>
    </div>
    <div class="date">
      <span>{{ $t('date.updated') }} {{ $store.state.currencies.previousDate }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheNavbar',
});
</script>

<style lang="scss">
@media (max-width: 1023px) {
  .the-navbar {
    width: 100vw;
    min-height: 60px;
    background: #969696;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .date {
      font-size: 0.7rem;
      margin: 10px 0;
    }

    .link-group {
      display: flex;
      justify-content: space-around;
      .link {
        text-decoration: none;
        font-size: 1.1rem;
        padding: 8px;
        border-radius: 16px;
        color: black;
      }
      .link:hover {
        background: #8c8b8b;
      }
    }
  }
}

@media (min-width: 1024px) {
  .the-navbar {
    width: 100vw;
    height: 60px;
    background: #969696;
    display: flex;
    justify-content: center;
    align-items: center;

    .select {
      margin: 12px;
      select {
        padding: 5px;
      }
      option {
        padding: 5px;
      }
    }

    .date {
      margin: 0;
      font-size: 0.7rem;
    }

    .link-group {
      display: flex;
      justify-content: space-around;
      width: 30%;
      .link {
        text-decoration: none;
        font-size: 1.3rem;
        padding: 8px;
        border-radius: 16px;
        color: black;
      }
      .link:hover {
        background: #8c8b8b;
      }
    }
  }
}

.nuxt-link-active {
  font-weight: bold;
}
</style>
