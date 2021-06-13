import * as actionTypes from "./actionTypes"

export const shakeTree = (props) => ({
    type: actionTypes.SHAKE_TREE,
    payload: props.randomAppleCount
})
