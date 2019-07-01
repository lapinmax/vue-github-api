<template>
  <div id="app" class="container">
    <div v-if="visible"></div>
    <router-link :to="link">
      <button @click="visible = !visible" class="btn btn-outline-dark">
        {{text}}
      </button>
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                visible: true,
            }
        },
        computed: {
            text() {
                return this.visible ? 'To search page' : 'Return start page';
            },
            link() {
                return this.visible ? '/' : '/home';
            }
        }
    }
</script>