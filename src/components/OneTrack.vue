<template>

  <div
    :class="['card', track[0].isActive ? 'opentrack' : 'alltrack']"
    style="width: 30rem"
  >
    <div class="card-body" style="padding: 0">
      <div class="card-header">
        <div
          class="card-header-icon text-center"
          :style="
            track[0].isActive
              ? 'background: rgb(202,41,228)'
              : 'background: rgb(53,93,255)'
          "
        >
          <img
            style="padding: 5px"
            src="https://img.icons8.com/ios/20/000000/user--v3.png"
          />
        </div>
        <div class="card-header-randomname">
          <strong
            ><p class="name_user">{{ track[0].sessionId }}</p></strong
          >
          <p
            class="name_time"
            style="fontsize: 0.7rem; color: rgba(0, 0, 0, 0.4)"
          >
            {{ new Date(track[0].timestamp).toLocaleTimeString()
            }}{{
              track[0].isActive
                ? `-${new Date(track[1].timestamp).toLocaleTimeString()}`
                : null
            }}
          </p>
        </div>
        <div class="card-header-buttons">
          <div v-if="track[0].isActive">
            <img
              style="margin-right: 5px"
              src="https://img.icons8.com/small/30/000000/paste.png"
            />
            <img src="https://img.icons8.com/color/30/000000/menu-2.png" />
          </div>
          <div v-else>
            <img
              src="https://img.icons8.com/color/30/000000/checkmark--v1.png"
            />
          </div>
        </div>
      </div>
      <div class="card-subtitle">
        <p class="status" style="color: red">Вход</p>
        <p class="time_status">
          {{ new Date(track[0].timestamp).toLocaleTimeString() }}
        </p>

        <img
          v-if="track[0].isActive"
          src="https://img.icons8.com/fluency-systems-regular/30/000000/append-clip.png"
        />
      </div>
      <div class="card-list-event">
        <list-events
        :mass="listsEvent"
        :isExit="track[0].isActive"
        ></list-events>
      </div>
    </div>
    <div v-if="track[0].isActive" class="card-bottom">
      <button class="btn btn-outline-primary" @click="openModal">Добавить событие</button>
      <button class="btn btn-primary" @click="saveSession(track[0])">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import ListEvents from './ListEvents';
import { listEvent } from '../use/ListEvent';



export default {
  props: {
    track: {
      type: Array,
    },
  },

  components: {
    ListEvents,
  },
  setup() {
    const store = useStore()
    const route = useRoute();
    const openModal = ()=>{
       store.commit('session/changeShowModal',true)
    }
    const saveSession = async(track)=>{
      track.isActive = false
      await store.dispatch('trunstileEvents/updateActive',track)
    }
    return {
      openModal,
      saveSession,
      ...listEvent(route.params.id),
    };
  },
};
</script>

<style>
.card {
  margin: 30px auto;
}
.opentrack {
  border: 2px solid rgb(202, 41, 228);
}
.alltrack {
  border-left: 3px solid rgb(53, 93, 255);
}
.card-header {
  padding: 0 20px 0 20px;
  align-items: center;
  align-content: center;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  background: rgba(202, 41, 228, 0.03);
}
.card-header-icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  /* background: rgb(202,41,228); */
  background: rgb(53, 93, 255);
}

.card-subtitle {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);

  padding: 10px 25px 10px 25px;
}
.name_user,
.name_time,
.status,
.time_status,
.actions {
  margin: 0;
}

.card-list-event {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 15px 25px 15px 25px;
}
.card-bottom {
  padding: 10px 25px 10px 25px;
  display: flex;
  justify-content: space-between;
}
</style>
