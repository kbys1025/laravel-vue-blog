<template>
    <div>
        <Header />
        <main class="py-4">
            <RouterView />
        </main>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import { INTERNAL_SERVER_ERROR } from './util'

export default {
    components: {
        Header
    },
    computed: {
        errorCode() {
            return this.$store.state.error.code
        }
    },
    watch: {
        errorCode: {
            handler(val) {
                if (val === INTERNAL_SERVER_ERROR) {
                    this.$router.push('/500')
                }
            },
            immediate: true
        },
        $route() {
            this.$store.commit('error/setCode', null)
        }
    }
}
</script>