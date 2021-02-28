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

export default {
    components: {
        Header
    }
}
</script>