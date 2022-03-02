<template>
  <v-card elevation="3" class="mx-auto" max-width="400">
    <v-card-title class="justify-center">Регистрация</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-text class="justify-center">
      <div class="mb-2 mt-2 text-center">Регистрация нового пользователя</div>
      <v-text-field
          outlined
          type="text"
          label="Фамилия Имя Отчество"
          append-icon="fa-user"
          :rules="[rules.required]"
          ></v-text-field>
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
      <v-text-field
          outlined
          label="Повторите пароль"
          :append-icon="showConfirmPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showConfirmPass ? 'text' : 'password'"
          @click:append="showConfirmPass = !showConfirmPass"
          :rules="[rules.required]"
      ></v-text-field>

      <v-row style="margin-top: -30px">
        <v-col cols="8">
          <v-checkbox v-model="form.isAgree" label="Я согласен с условиями" :rules="[rules.required]" />
        </v-col>
        <v-col cols="4" class="d-flex align-center">
          <v-btn color="primary">Register</v-btn>
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
  name: "SingInPage",
  data() {
    return {
      showPass: false,
      showConfirmPass: false,
      form: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAgree: false
      },
      rules: {
        required: value => !!value || 'Поле обязательное для заполнения.',
      },
    }
  }
}
</script>
