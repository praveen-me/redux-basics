const initState = {
  topics : []
}

const rootReducer = (state = initState, action ) => {
  switch(action.type) {
    case "ADD_TOPIC" : {
      console.log('topic added');
      return {
        topics : [...state.topics, {
          name : action.topic,
          comments : [], 
          id : state.topics.length
        }]
      };
    }
    case "ADD_COMMENT" : {
      const topic = state.topics[action.commentData.id].comments.push(action.commentData.comment)
      console.log('comment added')
      return {
        ...state,
        topic
      }
    }
    default : return state
  }
}

export default rootReducer;