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

// export async function createDesk(
//   params: {
//     deskInfo
//   },
// ) {
//   return request('/api/createDesk', {
//     method: 'POST',
//     params: {
//       ...params,
//     },
//   });
// }

export async function createDesk(
  deskInfo,
) {
  return request('api/createDesk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: deskInfo,
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

export async function enterDeskByDid(
  deskInfo,
) {
  return request('api/enterDeskByDid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: deskInfo,
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
