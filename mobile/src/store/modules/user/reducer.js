import produce from 'immer';

const INITIAL_STATE = {
  name: null,
  email: null,
  avatar: null,
  id: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        draft.avatar = action.payload.avatar;
        draft.id = action.payload.id;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.user = null;
        break;
      }
      default:
    }
  });
}
