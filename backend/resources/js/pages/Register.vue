<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">ユーザー登録</div>

                    <div class="card-body">
                        <form @submit.prevent="register">
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">名前</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" v-model="registerForm.name">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">メールアドレス</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" v-model="registerForm.email">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">パスワード</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-model="registerForm.password">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">パスワード(確認用)</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control" v-model="registerForm.password_confirmation">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        登録
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
            registerForm: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        async register() {
            await this.$store.dispatch('auth/register', this.registerForm)
            this.$router.push('/')
        }
    }
}
</script>