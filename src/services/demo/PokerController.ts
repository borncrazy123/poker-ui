/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

export async function shuffle(
  params: {
  },
) {
  return request('/api/shuffle', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}

export async function getDeskList(
  params: {
  },
) {
  return request('/api/getDeskList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}

export async function loginPersonList(
  params: {
  },
) {
  return request('/api/loginPersonList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}

export async function getCurrentDeskPersonList(
  params: {
    id: Number
  },
) {
  return request('/api/getCurrentDeskPersonList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
