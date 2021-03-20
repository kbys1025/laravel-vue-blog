<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <router-link to="/" class="navbar-brand">Laravel-Vue-Blog</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/blog" class="nav-link">ブログ一覧</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/user" class="nav-link">ユーザー一覧</router-link>
                    </li>
                    <li class="nav-item dropdown" v-if="isLogin">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ username }}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <router-link to="#" class="dropdown-item">マイブログ一覧</router-link>
                            <a class="dropdown-item" href="#" @click.prevent="logout">ログアウト</a>
                        </div>
                    </li>
                    <template v-else>
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link">ユーザー登録</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link">ログイン</router-link>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$store.dispatch('auth/logout')
            if (this.apiStatus) {
                this.$router.push('/login')
            }
        }
    },
    computed: {
        apiStatus() {
            return this.$store.state.auth.apiStatus
        },
        isLogin() {
            return this.$store.getters['auth/check']
        },
        username() {
            return this.$store.getters['auth/username']
        }
    }
}
</script>