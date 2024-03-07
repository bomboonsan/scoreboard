
export default function ItemScore( { number , name , point } ) {
  return (
    <>
    <div className="item-score">
        <div className="flex items-center justify-between">
            <div className="flex-initial score-number pr-5">
                {number}
            </div>
            <div className="flex-auto">
                <p className="score-name">
                    {name}
                </p>
                <p className="score-point">
                    {point}
                </p>
            </div>
        </div>
    </div>
    </>
  );
}
