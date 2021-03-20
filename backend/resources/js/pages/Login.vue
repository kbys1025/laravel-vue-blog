<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">ログイン</div>

                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div v-if="loginErrors" class="text-danger">
                                <ul v-if="loginErrors.email">
                                    <li v-for="msg in loginErrors.email" :key="msg">{{ msg }}</li>
                                </ul>
                                <ul v-if="loginErrors.password">
                                    <li v-for="msg in loginErrors.password" :key="msg">{{ msg }}</li>
                                </ul>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">メールアドレス</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" v-model="loginForm.email">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">パスワード</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-model="loginForm.password">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        ログイン
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        apiStatus() {
            return this.$store.state.auth.apiStatus
        },
        loginErrors () {
            return this.$store.state.auth.loginErrorMessages
        }
    },
    methods: {
        async login() {
            await this.$store.dispatch('auth/login', this.loginForm)

            if (this.apiStatus) {
                this.$router.push('/')
            }
        },
        clearError () {
            this.$store.commit('auth/setLoginErrorMessages', null)
        }
    },
    created() {
        this.clearError()
    }
}
</script>