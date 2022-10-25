/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

export async function shuffle(
  params: {
  },
) {
  // http://127.0.0.1:7001
  return request('/api/shuffle', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
