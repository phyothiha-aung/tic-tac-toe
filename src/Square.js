const Square = ({value, onClick}) => {

  const style = value? `t-square ${value}`: `t-square`;

  return (
    <button className={style} onClick={onClick}>
      {
        value
      }
    </button>
  );
}

export default Square;