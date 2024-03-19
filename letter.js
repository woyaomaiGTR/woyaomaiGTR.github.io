let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click', function () {
  card.setAttribute('style', 'opacity:0')
  let x = document.createElement('audio')
  x.setAttribute('src', 'qlx.mp3')
  x.setAttribute('autoplay', 'autoplay')

  // 打字效果
  let i = 0
  let str =
    '亲爱的臭宝，<我对昨晚的行为表示真诚的道歉，我很内疚，<首先，我要承认昨晚我的态度不对。工作的压力和疲劳让我变得易怒和冲动<但这并不是理由来对你发脾气和说出分手的话语<我很后悔一次又一次伤害你让我们感情出现裂痕<宝宝我找到一种新的摸鱼方法，我再也不会因为工作对宝宝发脾气<我想和你经历很多事情，不要和你吵架，不要冷落你<我要补偿宝宝给宝宝最好的<宝宝别因为我昨晚的事情对我失望<工作没有生活没有宝宝重要<我一直爱你臭宝<mua'
  let strp = ''

  function print() {
    if (str[i] == '<') {
      document.getElementById('box').innerHTML = strp + '<br><br>'
      strp += '<br><br>'
    } else {
      strp += str[i]
      box.innerHTML = strp + '|'
    }
    i++
  }
  setTimeout(() => {
    let printid = setInterval(() => {
      print()
      if (i == str.length) clearInterval(printid)
    }, 190) // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
  }, 5500) //5500毫秒开始打字
  // 背景出现
  function appearBackground() {
    setTimeout(() => {
      box.style.opacity = 1
    }, 1500)
  }
  appearBackground()
})
