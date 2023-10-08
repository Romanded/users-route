<template>
  <v-container class="page">
    <v-app-bar class="page__header" fixed>
      <v-switch
        hide-details
        inset
        @change="$vuetify.theme.dark = !$vuetify.theme.dark"
      ></v-switch>
      <v-form class="page__search-form">
        <v-text-field class="page__search"
                      v-model="searchValue"
        ></v-text-field>
        <v-btn
        ></v-btn>
      </v-form>
      <div>
        <v-btn
          color="accent"
          @click="showSelect = !showSelect"
        >
          Dropdown
        </v-btn>
        <v-list class="page__select-list" v-show="showSelect">
          <v-list-item
            v-for="city in cities"
            :key="city.id"
          >
            <v-checkbox
              v-model="selectedCities"
              :label=city.title
              :value=city.title
            ></v-checkbox>
          </v-list-item>
        </v-list>
      </div>
    </v-app-bar>
    <user-list :users="currentUsers" :skeleton="skeleton"/>
    <div class="text-center">
      <v-pagination
        fixed
        color="accent"
        v-model="page"
        :length="pagesCount"
        :total-visible="40"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import UserList from "../../components/UserList.vue";

export default {
  components: {UserList},
  data() {
    return {
      users: [],
      page: 1,
      searchValue: "",
      showSelect: false,
      selectedCities: [

      ],
      limit: 100,
      skeleton: false,
    }
  },
  async fetch() {
    this.skeleton = true
    while (this.users.length < 800) {
      this.users.push(...JSON.parse(await this.$api.users.list({offset: 500, limit: this.limit})))
      this.limit = 500
    }
    this.skeleton = false
  },
  computed: {
    filteredUsers() {
      if (!this.users.length)  {
        return []
      }
      let arr = this.users.filter(e => e.phone.toLowerCase().includes(this.searchValue.toLowerCase()) || e.name.toLowerCase().includes(this.searchValue.toLowerCase()))
      if (this.selectedCities.length >= 1) {
        arr = arr.filter(e => this.selectedCities.includes(e.city.title))
      }
      return arr
    },
    pagesCount() {
      if (this.filteredUsers.length / 50 < 1 || !this.filteredUsers.length)  {
        return 1
      }
      return Math.ceil(this.filteredUsers.length / 50)
    },
    currentUsers() {
      return [...this.filteredUsers].splice((this.page - 1) * 50, 50)
    },
    cities() {
      let arr = []
      let id = 1
      this.users.forEach(e => {
          arr.push({id: id, title: e.city.title})
          id++
        }
      )
      arr.sort((a, b) => a.title.localeCompare(b.title))
      return [...new Set(arr)]
    }
  },
  watch: {
    page() {
      this.$router.replace({ path: '/users', query: { page: `${this.page}` } })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .page__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .page__search-form {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
    }
    .page__select-list {
      position: absolute;
      max-height: 60vh;
      overflow: hidden;
      overflow-y: scroll;
    }
  }
}
</style>
