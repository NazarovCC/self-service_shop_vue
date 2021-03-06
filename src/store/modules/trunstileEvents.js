export default {
  namespaced: true,
  state() {
    return {

      turnstileEvents: [
        {
          id: 4750,
          type: 'open',
          timestamp: 1634643425,
          sessionId: '143c1ddd-be57-4644-ae9a-6b16fee9078b',
        },
        // {
        //   id: 4757,
        //   type: 'exit',
        //   timestamp: 1634643732,
        //   sessionId: '143c1ddd-be57-4644-ae9a-6b16fee9078b',
        // },
        {
          id: 4752,
          type: 'open',
          timestamp: 1634643558,
          sessionId: '6822d3db-a766-499f-b6ca-b9d6382c94b0',
        },
        {
          id: 4755,
          type: 'exit',
          timestamp: 1634643669,
          sessionId: '6822d3db-a766-499f-b6ca-b9d6382c94b0',
        },
        {
          id: 4756,
          type: 'open',
          timestamp: 1634624193,
          sessionId: 'f159363a-6dc9-46b1-87f5-cf82bc145e48',
        },
        {
          id: 4735,
          type: 'exit',
          timestamp: 1634643677,
          sessionId: 'f159363a-6dc9-46b1-87f5-cf82bc145e48',
        },
      ],
    };
  },
  getters: {
    getAllTrack(state) {
      return state.turnstileEvents;
    },

  },
  mutations: {
    
  },
  actions: {},
};
