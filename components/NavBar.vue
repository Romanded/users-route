<template>
      <v-navigation-drawer
        fixed
        permanent
        expand-on-hover
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link v-for="item in items" :to="item.to" :key="item.id">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      items: [
        {
          id: 1,
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          id: 2,
          icon: 'mdi-chart-bubble',
          title: 'Users',
          to: '/users'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
