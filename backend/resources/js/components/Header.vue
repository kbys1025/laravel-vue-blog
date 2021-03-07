<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">Laravel-Vue-Blog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/blog">ブログ一覧</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/user">ユーザー一覧</a>
                    </li>
                    <li class="nav-item dropdown" v-if="isLogin">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ username }}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">マイブログ一覧</a>
                            <a class="dropdown-item" href="#" @click.prevent="logout">ログアウト</a>
                        </div>
                    </li>
                    <template v-else>
                        <li class="nav-item">
                            <a class="nav-link" href="/register">ユーザー登録</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">ログイン</a>
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
            this.$router.push('/login')
        }
    },
    computed: {
        isLogin() {
            return this.$store.getters['auth/check']
        },
        username() {
            return this.$store.getters['auth/username']
        }
    }
}
</script>