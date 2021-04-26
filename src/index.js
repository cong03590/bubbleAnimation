let animUtil = {
  startAnim ({
    targetList,
    xRange,
    yRange,
    timeRange,
    angleRange
  }) {
    const randomX = xRange && this.random(xRange.min, xRange.max)
    const randomY = yRange && this.random(yRange.min, yRange.max)
    const randomTime = timeRange && this.random(timeRange.min, timeRange.max)
    const randomAngle = angleRange && this.random(angleRange.min, angleRange.max)
    targetList.map(i => {
      let $item = targetList.eq(i)
      randomX && moveX($item, 1)
      randomAngle && rotate($item, -11)
      randomY && moveY($item, 1)
    })
    function rotate (target, direction) {
      TweenMax.to(target, randomTime(), {
        rotation: randomAngle(direction),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1]
      })
    }

    function moveX (target, direction) {
      TweenMax.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1]
      })
    }

    function moveY (target, direction) {
      TweenMax.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1]
      })
    }
  },
  stopAnim ($list) {
    $list.map(i => {
      let $item = $list.eq(i)
      TweenMax.killTweensOf($item)
    })
  },
  random (min, max) {
    const delta = max - min
    return (direction = 1) => (min + delta * Math.random()) * direction
  }
}
export default animUtil
