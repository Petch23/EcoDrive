import * as types from './actionTypes';
import BluetoothSerial from 'react-native-bluetooth-serial';
import Toast from '@remobile/react-native-toast'


export const devices = () => ({
  type: types.DEVICES,
  devices:devices
});
export const unpairedDevices2 = device => ({
  type: types.UNPAIRDEVICES2,
  device: device,
  unpairedDevices:unpairedDevices
});
export const updateDevices = device=>({
  type: types.UPDATEDEVICES,
  device:device
});

 const connectingTrue = () =>({
  type: types.CONNECTINGTRUE
});
 const connectingFalse = () =>({
  type: types.CONNECTINGFALSE
});
 const connectedTrue = () =>({
  type: types.CONNECTEDTRUE
});
 const connectedFalse = () =>({
  type: types.CONNECTEDFALSE
});


 const connectdevice= device =>({
  type: types.CONNECTDEVICE,
  device 
});

const section = () =>({
  type:types.SECTION,
  
});

const devicelist = list =>({
  type:types.DEVICELIST,
  list
});

const isenable = enable =>({
  type:types.ISENABLE,
  enable
});






export const pairDevice = (device) => (
  dispatch => {
  BluetoothSerial.pairDevice(device.id)
  .then((paired) => {
    if (paired) {
      Toast.showShortBottom(`Device ${device.name} paired successfully`)
      // const devices = dispatch(devices())
      // devices.push(device)
      dispatch(updateDevices(device))
      // dispatch(unpairedDevices2(device))
    } else {
      Toast.showShortBottom(`Device ${device.name} pairing failed`)
    }
  })
  .catch((err) => Toast.showShortBottom(err.message))
  }
);

export const connect = (device) =>(
  dispatch => {
  dispatch(connectingTrue())
  BluetoothSerial.connect(device.id)
  .then((res) => {
    Toast.showShortBottom(`Connected to device ${device.name}`)
    dispatch(connectdevice(device))
  })
  .catch((err) => Toast.showShortBottom(err.message))
  }
);

export const onDevicePress = (device) => (
 dispatch => {
  if (dispatch(section())===0) {
    dispatch(connect(device))
  } else {
    dispatch(pairDevice(device))
  }
}
);

export const contedfalse = () => (
  dispatch => {
    dispatch(connectedFalse())
  }
);

export const list = () => (
  dispatch => { 
    BluetoothSerial.list()
    .then((list) => {
      dispatch(devicelist(list))
    })
    .catch((err) => Toast.showShortBottom(err.message))
   }
  )

  export const enabledevice = () => (
    dispatch => { 
      BluetoothSerial.isEnabled()
      .then((enable) => {
        dispatch(isenable(enable))
      })
      .catch((err) => Toast.showShortBottom(err.message))
     }
    )










