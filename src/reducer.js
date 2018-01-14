const initialState = {
  mode: "desktop",
  currentRoom: "firstRoom"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ROOM':
      console.log("room changed" )
      return Object.assign({}, state, {
          currentRoom: action.room
      })
    case 'CHOOSE_DEVICE':
      console.log("device chosen" )
      return Object.assign({}, state, {
          mode: action.mode
      })
    default:
      return state
  }
}
