/*
 * 封装本地存储模块
 *
 */

export const getSessionItem = name => {
  const data = window.sessionStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

export const setSessionItem = (name, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(name, value)
}

export const removeSessionItem = name => {
  window.sessionStorage.removeItem(name)
}
