/** 公共信息作相关store */

import mutations from './mutations';
import actions from './action';

const state = {
  provinceList: []
};

export default {
  // name: true,
  state,
  mutations,
  actions
};
