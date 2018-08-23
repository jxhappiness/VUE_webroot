/* 工具方法 */

/**
 * 获取屏幕可视高度宽度
 * @param {String} type width(宽度) height(高度)
 * @return {String|Oject} 有 type 参数则返回参数对应的 String 否则返回一个含有全部内容的 Object
 */
export function client(type) {
  var obj = {}
  if (window.innerWidth != null) { // ie9 +  最新浏览器
    obj.width = window.innerWidth
    obj.height = window.innerHeight
  } else if (document.compatMode === 'CSS1Compat') { // 标准浏览器
    obj.width = document.documentElement.clientWidth
    obj.height = document.documentElement.clientHeight
  }
  // 怪异浏览器
  obj.width = document.body.clientWidth
  obj.height = document.body.clientHeight
  if (type === 'width') {
    return obj.width
  } else if (type === 'height') {
    return obj.height
  } else {
    return obj
  }
}

export function cleanArray(actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

export function param(json) {
  if (!json) return '';
  return cleanArray(Object.keys(json).map(key => {
    if (json[key] === undefined || json[key] == null) return '';
    return encodeURIComponent(key) + '=' +
      encodeURIComponent(json[key]);
  })).join('&');
}

// save to localStorage
export const saveLS = (name, value) => {
  const ls = window.localStorage;
  ls.setItem(name, value);
};

// get from localStorage
export const getLS = (name) => {
  const ls = window.localStorage;
  return ls.getItem(name);
};
