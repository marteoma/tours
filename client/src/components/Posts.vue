<template>
  <div>
    <h1>Posts</h1>
    <div v-for="p in posts" v-bind:key="p.title">
      <div>
        <h3>{{ p.title }}</h3>
        <p>{{ p.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'Posts',
  data () {
    return {
      msg: 'This file lists all the posts',
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      if (response.data === 'No autorizado') {
        this.$router.push({ name: 'Login' })
      } else {
        this.posts = response.data
      }
    }
  }
}
</script>
