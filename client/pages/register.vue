<template>
  <div>
    <section class="section mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3 text-center">
            <h2 class="title has-text-centered">Регистрация</h2>

            <b-alert
              dismissible
              :show="!!error"
              class=""
              variant="danger">{{error}}</b-alert>


            <form method="post" @submit.prevent="register">

              <div class="field">
                <label class="label">Имя пользователя</label>

                <div class="control">
                  <input
                    type="text"
                    class="input"
                    name="username"
                    v-model="username"
                    required
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>

                <div class="control">
                  <input
                    type="email"
                    class="input"
                    name="email"
                    v-model="email"
                    required
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">Пароль</label>

                <div class="control">
                  <input
                    type="password"
                    class="input"
                    name="password1"
                    v-model="password1"
                    required
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">Пароль еще раз</label>

                <div class="control">
                  <input
                    type="password"
                    class="input"
                    name="password2"
                    v-model="password2"
                    required
                  >
                </div>
              </div>

              <div class="control">
                <button type="submit" class="button is-dark is-fullwidth">Зарегистрироваться</button>
              </div>
            </form>

            <div class="has-text-centered" style="margin-top: 20px">
              Есть аккаунт? <nuxt-link to="/login">Вход</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import Notification from '~/components/Notification';
  import NavbarTop from '~/components/NavbarTop.vue'

export default {
  middleware: 'guest',

  components: {
    Notification,
    NavbarTop,
  },

  data() {
    return {
      username: '',
      email: '',
      password1: '',
      password2: '',
      error: null,
    };
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('rest-auth/registration/', {
          username: this.username,
          email: this.email,
          password1: this.password1,
          password2: this.password2,
        });

        let {key} = await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password1,
          },
        });

        this.$router.push('/');
      } catch (e) {
        this.error = e.response.data;
      }
    },
  },
};
</script>

