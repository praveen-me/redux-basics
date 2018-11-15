let initialStore = {
  count : 0
}

export default function reducer (store = initialStore, action) {
  switch(action.type) {
    case "INCREMENT" : {
      return {count : ++store.count}
    }
    case "DECREMENT" : {
      return {count : --store.count}
    }
    default : return store
  }
} 