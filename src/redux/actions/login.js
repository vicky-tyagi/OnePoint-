import CONSTANTS from '../constants'
import { postRequest } from '../../services'
import { APICONFIG } from '../apiConfig'

// Calls the API to get user token
export const userLogin = (creds) => (dispatch) => {
  dispatch({ type: CONSTANTS.LOGIN_REQUEST })
  return postRequest(APICONFIG.ApiUrl, creds).then((res) => {
    dispatch({ type: CONSTANTS.LOGIN_SUCCESS, data: res })
    return res
  }).catch((err) => {
    dispatch({ type: CONSTANTS.LOGIN_FAILURE })
    return err
  })
}

