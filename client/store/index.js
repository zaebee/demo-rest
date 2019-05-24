import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

// import auth from './modules/auth'

const environment = process.env.NODE_ENV
const METRO_JSON = process.env.METRO_JSON

const chat = process.env.chat

const inBrowser = typeof window !== 'undefined'

// if in browser, use pre-fetched state injected by SSR
// const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState

Vue.use(Vuex)

export const state = () => ({
  counter: 0,
  environment: environment,
  METRO_JSON: METRO_JSON,

  config: {
    app: chat,
    i18n: {
      en: {
        welcomeTitle: "Welcome to",
        muteTitle: "Mute Toggle",
        inputTitle: "Type your message",
        sendTitle: "Send",
        microphoneTitle: "Voice Input"
      },
      ru: {
        welcomeTitle: "Добро пожаловать в",
        muteTitle: "Режим звука",
        inputTitle: "Введите свое сообщение",
        sendTitle: "Отправить",
        microphoneTitle: "Голосовой ввод"
      },
      de: {
        welcomeTitle: "Wilkommen bei",
        muteTitle: "Stumm Modus",
        inputTitle: "Schreiben Sie ihre Nachricht",
        sendTitle: "Senden",
        microphoneTitle: "Spracheingabe"
      }
    }
  }
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
