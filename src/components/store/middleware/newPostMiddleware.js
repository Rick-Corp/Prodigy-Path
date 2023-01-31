
import fetchApi from "../../../utility/fetchApi";
const newPostMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'newPost') {
    let url = `${process.env.REACT_APP_SERVER}/posts`;
    let body = {
      user: action.payload.user,
      text: action.payload.text,
      title: action.payload.title,
    };
    let method = 'post';
    let config = {
      bearerToken: action.payload.token
    };
    let response = await fetchApi(url, body, method, config);
    console.log(response);
    action.payload = response;
    // console.log(action.payload);
  }
  next(action);
};

export default newPostMiddleware;