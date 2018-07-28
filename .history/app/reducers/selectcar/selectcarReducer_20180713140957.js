import * as types from '../../actions/selectcar/actionTypes';

const initialState = {
   carlist:{},

  }

  const selectcarReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.CARDATA:
        return { ...state, carlist: action.cardata }
      
        default: return state;
    }
  }

export default selectcarReducer;