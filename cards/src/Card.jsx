import './App.css';

function Card(props){
    function rotateCard(e){
        e.target.parentNode.classList.toggle('hover')

       
    }
    return(
        <div className="card">
            <div className="flipper" onClick={rotateCard}>
    <div className="front">
     {props.question}
      </div>
    <div className="back">
{props.answer}
{props.img && <img className='image' src={props.img} alt='ds'/>
}
      </div>
    </div>
        </div>
    )
}

export default Card;