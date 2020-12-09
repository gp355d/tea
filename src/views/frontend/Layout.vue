<template>
<div>
  <Navbar/>
  <router-view/>
  <Footer/>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>
