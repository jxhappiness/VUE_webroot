import { getKeyApi, getBasicKeyApi } from '@/api/key';
import { saveLS, getLS } from '@/utils';

const key = getLS('key');
const basicKey = getLS('basicKey');

if (!key || !basicKey) {
  // 获取 basicKey 和 key
  getBasicKeyApi().then(({ data: { response } }) => {
    saveLS('basicKey', response);
    return getKeyApi(response);
  }).then(({ data: { response } }) => {
    saveLS('key', response);
  });
}

