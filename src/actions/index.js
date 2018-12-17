import { IMAGES } from '../constants';

const loadImages = () => ({
  type: IMAGES.LOAD
});

const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images
});

const setFail = error => ({
  type: IMAGES.LOAD_FAIL,
  error
});

export {
  loadImages,
  setImages,
  setFail
}
