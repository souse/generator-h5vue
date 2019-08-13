import { setItem } from '@/utils';
import { SET_PROVINCELIST } from './mutation-types';

export default {
  [SET_PROVINCELIST](state, { provinceList }) {
    state.provinceList = provinceList;

    setItem('provinceList', provinceList);
  }
};
