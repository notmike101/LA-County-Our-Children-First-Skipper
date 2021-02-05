(() => {
  let isVideo = false

  try {
    document.querySelector('#divContinue').style.display = 'initial';
    isVideo = true
  } catch (err) {
    console.log('Not a video page')
  }

  if (isVideo) return 0

  try {
    const answerDisplay = document.createElement('div');
    answerDisplay.style.cssText = 'display:block;position:absolute;bottom:0;left:0;width:150px;height:150px;background-color:black;color:white;z-index:100;'

    document.querySelectorAll('[id^="questionText"]').forEach((elm) => {
      const questionNumber = elm.getAttribute('id').split('questionText')[1]
      const correctAnswerContainer = elm.parentNode.querySelector('p:last-of-type')
      const correctAnswer = correctAnswerContainer.textContent.match(/correct answer is\:? \(?([a-zA-Z0-9\ ]+)\)?/)[1]
      console.log(`Question ${questionNumber}: ${correctAnswer}`)

      const newElm = document.createElement('p')
      newElm.textContent = `Question ${questionNumber}: ${correctAnswer}`

      answerDisplay.appendChild(newElm)
    })

    document.body.appendChild(answerDisplay)
  } catch (err) {
    console.log('Not a question page')
  }

  return 0
})()
