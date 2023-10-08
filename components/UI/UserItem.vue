<template>
  <v-list-item>
    <v-list-item-title>{{user.name}}</v-list-item-title>
    <v-list-item-title>{{user.phone}}</v-list-item-title>
    <v-list-item-subtitle>
      <a :href="cityLink"  target="_blank" >{{user.city.title}}</a>
    </v-list-item-subtitle>
    <v-list-item-subtitle>
      Накоплено: {{user.saveCount}} руб.<br/>
      Потрачено: {{user.spendCount}} руб.
    </v-list-item-subtitle>
    <v-list-item-subtitle>{{user.lastVisit}}</v-list-item-subtitle>
    <v-list-item-subtitle>{{user.balance}} руб.</v-list-item-subtitle>
    <v-btn>Detail</v-btn>
  </v-list-item>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
  },
  computed: {
    cityLink() {
      return "https://ru.wikipedia.org/wiki/" + this.user.city.title
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
