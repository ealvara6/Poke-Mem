const CurrentLevel = (props) => {
  const { level } = { ...props};
  console.log(level);
 
  return (
    <div className="current-level">
      <div>Level {level}</div>
    </div>
  )
}

export default CurrentLevel;