import mixpanel from 'mixpanel-browser'

export const mixpanelTrack = (event, config = {}) => {
  console.log(process.env)
  if (process.env.GATSBY_MIXPANEL_KEY){
    mixpanel.init(process.env.GATSBY_MIXPANEL_KEY)
    mixpanel.track(event, config)
  }
}