<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/all.scss';
</style>
