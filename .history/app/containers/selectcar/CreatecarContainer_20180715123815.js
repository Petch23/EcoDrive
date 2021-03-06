import { connect } from 'react-redux';
import { CreateCar } from '../../components/selectcar/Createcar';

import {carlist,onValueChange} from '../../actions/selectcar/carlist'

const mapStateToProps = state => ({
    cardata: state.selectcarReducer.cardata,
    selected: state.selectcarReducer.selected,
});

const mapDispatchToProps =  dispatch => ({
    carlist:  dispatch(carlist()),
    onValueChange : dispatch(onValueChange())
})
  

export default connect(mapStateToProps,mapDispatchToProps)(CreateCar);