<template>
  <v-card elevation="3" class="mx-auto" max-width="400">
    <v-card-title class="justify-center">Вход</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-text class="justify-center">
      <div class="mb-2 mt-2 text-center">Войдите что бы начать сеанс</div>
      <v-text-field
          outlined
          type="email"
          label="E-mail"
          append-icon="fa-at"
          :rules="[rules.required]"
      ></v-text-field>
      <v-text-field
          outlined
          label="Пароль"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPass ? 'text' : 'password'"
          @click:append="showPass = !showPass"
          :rules="[rules.required]"
      ></v-text-field>

      <v-row style="margin-top: -30px">
        <v-col cols="8">
          <v-checkbox v-model="form.isAgree" label="Запомнить меня" />
        </v-col>
        <v-col cols="4" class="d-flex align-center">
          <v-btn color="primary">Войти</v-btn>
        </v-col>
      </v-row>

      <v-btn class="mt-2" color="#dc3545" block>
        <v-icon left class="fa-brands">fa-google-plus</v-icon>
        Sign up using Google+
      </v-btn>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LogInPage",
  data() {
    return {
      showPass: false,
      form: {
        email: '',
        password: '',
        isRememberMe: false
      },
      rules: {
        required: value => !!value || 'Поле обязательное для заполнения.',
      },
    }
  }
}
</script>
