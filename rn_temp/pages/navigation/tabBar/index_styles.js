
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
  "tab-content": {
    "paddingTop": scalePx2dp(50),
    "paddingRight": scalePx2dp(25),
    "paddingBottom": scalePx2dp(50),
    "paddingLeft": scalePx2dp(25),
    "fontSize": scalePx2dp(15),
    "textAlign": "center",
    "backgroundColor": "#fafbfc"
  },
  "tab-content--vertical": {
    "height": scalePx2dp(100),
    "paddingTop": scalePx2dp(50),
    "paddingRight": scalePx2dp(25),
    "paddingBottom": scalePx2dp(50),
    "paddingLeft": scalePx2dp(25),
    "fontSize": scalePx2dp(15),
    "textAlign": "center",
    "boxSizing": "border-box",
    "backgroundColor": "#fafbfc"
  }
})
