import {Dimensions} from 'react-native';

export const FRAME_PER_SEC = 1;
export const FRAME_WIDTH = 120;

export const {width, height} = Dimensions.get('screen');

export const FRAME_STATUS = Object.freeze({
  LOADING: {name: Symbol('LOADING')},
  READY: {name: Symbol('READY')},
});

export const getFileNameFromPath = path => {
  const fragments = path.split('/');
  let fileName = fragments[fragments.length - 1];
  fileName = fileName.split('.')[0];
  return fileName;
};
