
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "doc-header": {
    "position": "relative",
    "paddingTop": scalePx2dp(50),
    "paddingRight": scalePx2dp(30),
    "paddingBottom": scalePx2dp(15),
    "paddingLeft": scalePx2dp(30)
  },
  "doc-header__title": {
    "color": "#040404",
    "fontSize": scalePx2dp(21),
    "fontWeight": "bold",
    "lineHeight": 1.5
  },
  "doc-header__desc": {
    "marginTop": scalePx2dp(6),
    "color": "#A09EAE",
    "fontSize": scalePx2dp(15),
    "lineHeight": 1.5
  }
})
