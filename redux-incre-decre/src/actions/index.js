export function increment() {
  console.log("increment happened");
  return {
    type : "INCREMENT"
  }
}

export function decrement() {
  console.log("decrement happened");
  return {
    type : "DECREMENT"
  }
}