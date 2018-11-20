export function addTopic(topic) {
  return {type : "ADD_TOPIC", topic}
}
 
export function submitComment(commentData) {
  return {type : "ADD_COMMENT", commentData}
}