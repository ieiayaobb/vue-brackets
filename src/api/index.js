import {http} from 'vue'

export const initAPI = () => {
  const ROOT = '/'
  const ACCEPT = 'application/json'
  const CONTENT_TYPE = 'application/json'


  http.options.root = ROOT
  http.headers.common['Accept'] = ACCEPT
  http.headers.common['Content-Type'] = CONTENT_TYPE
  http.headers.put['Content-Type'] = CONTENT_TYPE
  http.headers.post['Content-Type'] = CONTENT_TYPE
  http.headers.patch['Content-Type'] = CONTENT_TYPE
  http.headers.delete['Content-Type'] = CONTENT_TYPE

  http.interceptors.push((req, next) => {
    next((res) => {

    })
  })
}

export const api = (type = 'get', url, ...tail) => {
  return http[type](url, ...tail)
    .then((res) => {
      return JSON.parse(res.body)
    })
    .catch(() => {
      console.log('Hmm.. Something has gone awry. Please try again in a bit, or contact support.')
    })
}

export const loadMock = (callback) => {
  const data = require('../data/mock')
  return callback(data)
}
