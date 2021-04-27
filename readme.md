## 使用说明
方便实现网页元素随机漂浮移动效果。  
代码依赖TweenMax类库
```js
  import animUtil from 'bubbleanimation'
  animUtil.startAnim({
    targetList: $('.butterfly'),
    xRange: { min: 0, max: 10 },
    yRange: { min: 0, max: 10 },
    timeRange: { min: 2, max: 4 }
  })
  //停止动画
  animUtil.stopAnim($('.butterfly'))
```