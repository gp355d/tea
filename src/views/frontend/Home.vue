<template>
  <div>
    <Banner/>
    <Content/>
    <About/>
    <Recommender/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Content from '@/components/Content.vue'
import About from '@/components/About.vue'
import Recommender from '@/components/Recommender.vue'
export default {
  components: {
    Banner,
    Content,
    About,
    Recommender
  }
}
</script>
