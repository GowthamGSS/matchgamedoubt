const ScoreCard = props => {
  const {score, btnClick} = props

  const clickBtn = () => {
    btnClick()
  }

  return (
    <div className="scoreCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <p>{score}</p>
      <button type="button" onClick={clickBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        Play Again
      </button>
    </div>
  )
}
export default ScoreCard
