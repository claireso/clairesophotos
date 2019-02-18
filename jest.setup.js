import '@babel/polyfill'
import 'intersection-observer'
import 'jest-dom/extend-expect'
import fetchMock from 'jest-fetch-mock'
import 'react-testing-library/cleanup-after-each'
import 'jest-styled-components'

window.scroll = () => { }
global.fetch = fetchMock

// go offline
global.goOffline = () => {
  Object.defineProperty(window.navigator, 'onLine', {
    configurable: true,
    get: function () {
      return false
    },
  })
}

// go online
global.goOnline = () => {
  Object.defineProperty(window.navigator, 'onLine', {
    configurable: true,
    get: function () {
      return true
    },
  })
}

// update notification permission
global.setNotificationPermission = (status = 'default') => {
  Object.defineProperty(global, 'Notification', {
    configurable: true,
    get: function () {
      return {
        permission: status
      }
    }
  })
}

// default notification
global.setNotificationPermission()

// update service worker
global.setServiceWorker = ({ register, subscribe, ready, getSubscription } = {}) => {
  if (!register) {
    register = jest.fn()
  }

  if (!subscribe) {
    subscribe = jest.fn().mockImplementation(() => Promise.resolve())
  }

  if (!getSubscription) {
    getSubscription = jest.fn().mockImplementation(() => Promise.resolve({}))
  }

  if (!ready) {
    ready = Promise.resolve({
      pushManager: {
        subscribe: subscribe,
        getSubscription: getSubscription
      }
    })
  }

  Object.defineProperty(global.navigator, 'serviceWorker', {
    configurable: true,
    value: {
      register: register,
      ready: ready
    }
  })

  return {
    register, subscribe, ready, getSubscription
  }
}

// enable serviceWorker
setServiceWorker()