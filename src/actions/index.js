export const ASYNC_WAIT = "ASYNC_WAIT"
export const HANDLE_WAIT = "HANDLE_WAIT"

export const handleWait = (n) => {
  return {
    type: HANDLE_WAIT,
    payload: n
  }
}

export const asyncWait = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(handleWait(Math.random()))
    }, 3000)
  }
}
