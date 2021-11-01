import { computed, ref} from 'vue';
import { useStore } from 'vuex';

export function openEventTrack() {
  const store = useStore();
  const lists = computed(() =>
    store.getters['trunstileEvents/getAllTrack'].filter(
      (list) => list.type === 'open'
    )
  );

  // const mergeEventTrack = (id) => {
  //   let isExit = false;
  //   if (exitEventTrackById(id).value) {
  //     isExit = true;
  //   }
  //   return isExit;

  return {
    lists,
    // mergeEventTrack,
  };
}


const exitEventTrackById = (id) => {
  const store = useStore();
  return computed(() =>
    store.getters['trunstileEvents/getAllTrack'].find(
      (track) => track.sessionId === id && track.type === 'exit'
    )
  );
};
export function mergeEventTrack(id){
  const isExit = ref(false)
   if (exitEventTrackById(id).value){
     isExit.value = true
   }
     return {
       isExit,

     }
   }
export function setSession(id) {
  const store = useStore();
  store.commit('trunstileEvent/setActiveEvent', id);
}
