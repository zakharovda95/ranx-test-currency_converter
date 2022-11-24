<template>
  <div class="the-navbar">
    <div class="select">
      <select v-model="lang">
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
    <div class="date">
      <span>{{ $t('date.date') }} {{ dateNow }}</span>
    </div>
    <div class="link-group">
      <nuxt-link ref="link" class="link" active-class="nuxt-link-active" :to="localePath('/list')">
        {{ $t('links.toList') }}
      </nuxt-link>
      <nuxt-link active-class="nuxt-link-active" class="link" :to="localePath('/converter')">
        {{ $t('links.toConverter') }}
      </nuxt-link>
    </div>
    <div class="date">
      <span>{{ $t('date.updated') }} {{ lastUpdate }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import moment from 'moment';

export default defineComponent({
  name: 'TheNavbar',

  computed: {
    dateNow() {
      return moment(this.$store.state.currencies.date).format('DD.MM.yy');
    },

    lastUpdate() {
      return moment(this.$store.state.currencies.previousDate).format('DD.MM.yy');
    },

    lang: {
      get() {
        return this.$store.state.lang;
      },
      set(val) {
        this.$store.commit('setLang', val);
        localStorage.setItem('lang', JSON.stringify(val));
      },
    },
  },

  mounted() {
    this.$refs.link.className = 'nuxt-link-active';
  },
});
</script>

<style lang="scss">
@media (max-width: 1023px) {
  .the-navbar {
    width: 100vw;
    min-height: 60px;
    background: #71d7f1;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    display: flex;
    flex-direction: column;
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
    background: #71d7f1;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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

.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
