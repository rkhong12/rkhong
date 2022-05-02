<template>
  <div>
      <AboutMe />
      <SkillBar />
      <CardList />
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue';
import SkillBar from '@/components/SkillBar.vue';
import CardList from '@/components/CardList.vue';

export default {
  name: 'App',
  components: {
    AboutMe, SkillBar, CardList
  }
}
</script>
