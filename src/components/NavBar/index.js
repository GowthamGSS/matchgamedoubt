const NavBar = props => {
  const {score, timer} = props
  return (
    <div className="navBar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="scoreTimer">
        <li>
          <p>Score:{score}</p>
        </li>
        <li className="timerCont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            alt="timer"
          />
          <p>Timer:{timer} sec</p>
        </li>
      </ul>
    </div>
  )
}
export default NavBar
