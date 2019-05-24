<template>
  <b-navbar
    toggleable="lg"
    variant=""
    type="light">
    <b-navbar-brand @click.prevent="$router.push('/')" href="/">
      <b-img
        width="36"
        src="/images/heaven.svg"
        class="d-inline-block align-top"
        alt="heavenweb - разработка и
        сопровождение чат ботов и рекламных компаний"/>
        Heaven.web <span class="d-md-inline d-none">&mdash; дружим с ботами и чатами</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-main-collapse"></b-navbar-toggle>

    <b-collapse id="nav-main-collapse" is-nav>
      <div class="w-100">
        <b-navbar-nav align="right" class="mt-1">
          <li
            v-for="item in navigation"
            :key="item"
            class="nav-iten text-center text-md-left">
            <router-link
              :to="item"
              class="nav-link">{{ item }}
            </router-link>
          </li>

          <b-nav-item v-if="auth.user" @click="$router.push('/posts')" class="text-center text-md-left">
            Посты
          </b-nav-item>
          <b-nav-item v-if="auth.user" class="text-center text-md-left">
            {{auth.user.username}}
          </b-nav-item>
          <b-nav-item v-else @click="$router.push('/register')" class="text-center text-md-left">
            Регистрация
          </b-nav-item>

          <b-nav-item @click="$auth.logout()" v-if="auth.user" class="text-center text-md-left">
            Выйти
          </b-nav-item>
          <b-nav-item @click="$router.push('/login')" v-else class="text-center text-md-left">
            Войти
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav align="right" class="my-3">
          <b-nav-item
            href="tel:+79535105359"
            class="font-weight-bolder">
           +7 953 510 53 59
          </b-nav-item>
          <b-btn
            variant="subscribe"
            size="sm"
            class="my-2 my-sm-0"
            @click="$emit('show-lead')">
            Обратный звонок
          </b-btn>
        </b-navbar-nav>
      </div>
    </b-collapse>
  </b-navbar>
</template>
<script>
  export default {
    data() {
      return {
        navigation: [
          // 'Команда', 'Проекты'
        ],
        auth: this.$store.state.auth
      }
    }
  }
</script>
