export default ({ app }, inject) => {
  inject('reachGoal', (goals) => {
    // send goals to Yandex.Metrika
    if (window.yaCounter53731057 && goals.ya && goals.ya.length) {
      window.yaCounter53731057.reachGoal(...goals.ya, () => {
        goals.callback = 'success'
        console.log(`success reach goal ${goals.ya}`)
      })
    } else {
      console.log('yandex goal', goals.ya)
    }

    // send goals to Google.Analytics
    if (window.ga && goals.ga && goals.ga.length) {
      window.ga(...goals.ga)
    } else {
      console.log('google goal', goals.ga)
    }

    // send goals to Facebook.JScall
    if (window.fbq && goals.fbq && goals.fbq.length) {
      window.fbq(...goals.fbq)
    } else {
      console.log('facebook goal', goals.fbq)
    }
  })
}
