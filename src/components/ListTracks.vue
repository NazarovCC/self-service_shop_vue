<template>
  <div class="container">
    <div v-if="lists" class="list-track">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Session_id</th>
            <th scope="col">Date</th>
            <th scope="col">id</th>
          </tr>
        </thead>
        <tbody v-for="list in lists" :key="list.id">
          <tr @click="handlerListClick(list.sessionId)">
            <td>{{ list.sessionId }}</td>
            <td>{{ new Date(list.timestamp).toLocaleTimeString() }}</td>
            <td>{{ list.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 class="text-center" v-else>Нет сессий</h4>
  </div>
</template>

<script>
// import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {openEventTrack} from "../use/oneTrackEvents"
export default {
  setup() {
    const store = useStore()
    const router = useRouter();
    const handlerListClick = (id) => {
      store.commit('session/setActiveSession',id)
      router.push(`/session/${id}`);
    };

    return {
      // lists,
      handlerListClick,
      ...openEventTrack()
    };
  },
};
</script>

<style></style>
