import { getProvince } from '@/service/common';

export default {
  getProvinceList({ commit, state }) {
    getProvince().then(res => {
      if (!res || res.code != '000000') return;

      commit('SET_PROVINCELIST', res.data);
    });
  }
};
