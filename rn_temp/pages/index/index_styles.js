
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "page": {
    "display": "flex",
    "flexDirection": "column",
    "boxSizing": "border-box",
    "minHeight": "100vh"
  },
  "__viewportUnits": true,
  "example": {
    "paddingTop": scalePx2dp(5),
    "paddingRight": scalePx2dp(10),
    "paddingBottom": scalePx2dp(5),
    "paddingLeft": scalePx2dp(10),
    "marginBottom": scalePx2dp(5)
  },
  "example__header": {
    "marginBottom": scalePx2dp(10),
    "paddingBottom": scalePx2dp(5),
    "borderBottom": "0.5px solid #e5e5e5"
  },
  "example__header-title": {
    "color": "#999",
    "fontSize": scalePx2dp(14)
  },
  "example__header-note": {
    "fontSize": scalePx2dp(12),
    "marginLeft": scalePx2dp(10),
    "color": "#ccc"
  },
  "doc-body": {
    "paddingBottom": "calc(env(safe-area-inset-bottom) + 30px)"
  },
  "page-index": {
    "paddingTop": scalePx2dp(30),
    "paddingRight": 0,
    "paddingBottom": scalePx2dp(15),
    "paddingLeft": 0
  },
  "page-body": {
    "paddingTop": scalePx2dp(20),
    "paddingRight": scalePx2dp(20),
    "paddingBottom": scalePx2dp(20),
    "paddingLeft": scalePx2dp(20)
  },
  "component-group": {
    "fontSize": scalePx2dp(16)
  },
  "group-item": {
    "paddingTop": 0,
    "paddingRight": scalePx2dp(15),
    "paddingBottom": 0,
    "paddingLeft": scalePx2dp(15),
    "marginTop": scalePx2dp(10),
    "marginRight": 0,
    "marginBottom": scalePx2dp(10),
    "marginLeft": 0,
    "backgroundColor": "#fff",
    "borderRadius": scalePx2dp(2),
    "overflow": "hidden"
  },
  "group-info": {
    "paddingTop": scalePx2dp(15),
    "paddingRight": 0,
    "paddingBottom": scalePx2dp(15),
    "paddingLeft": 0,
    "display": "flex",
    "alignItems": "center",
    "transition": "opacity 0.3s"
  },
  "group-info-title": {
    "opacity": 0.5
  },
  "group-list": {
    "fontSize": scalePx2dp(14)
  }
})
