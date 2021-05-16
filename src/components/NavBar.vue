<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <span v-if="isLoggedIn">
        <a @click="logout">Logout</a>
      </span>
    <span v-else>
        <router-link to="/login">Login</router-link>
      </span>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
  },
  methods: {
    async logout (){
      await this.$store.dispatch('LogOut')
      this.$router.push('/login')
    }
  },
}
</script>

