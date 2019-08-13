// import qs from 'qs';

import request from '@/api';
// import { picaBeURL } from '@/api/config';
// import { getItem } from '@/utils';

/**
 * 获取省份列表
 * @return {[type]} [description]
 */
export const getProvince = async () => {
  return request({ url: '/basic-data/position/provinces' });
};
