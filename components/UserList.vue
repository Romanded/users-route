<template>
  <v-list v-if="!skeleton">
    <user-item :user="user" :key="user.price" v-for="user in users"/>
  </v-list>
  <v-list v-else>
    <v-skeleton-loader :key="n" v-for="n of 50" type="paragraph">
    </v-skeleton-loader>
  </v-list>
</template>

<script>
import UserItem from "./UI/UserItem.vue";

export default {
  components: {UserItem},
  props: {
    users: {
      type: Array,
      required: true
    },
    skeleton: {
      type: Boolean,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
