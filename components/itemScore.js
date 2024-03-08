
export default function ItemScore( { number , name , point } ) {
  return (
    <>
    <div className="item-score">
        <div className="flex items-center justify-between">
            <div className="score-number">
                {number}
            </div>
            <div className="score-name">
                {name}
            </div>
            <div className="score-point">
                {point}
            </div>
        </div>
    </div>
    </>
  );
}
