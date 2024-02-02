import { useState } from "react";

function ProfileCard({ titulo, arroba, img })
{

    function handleClick() {
        setCount(count + 1);
    }

    function handleClickResta() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <div className="card.image">
                <figure className="image is-1by1">
                    <img src={img} alt="imagen" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title">{titulo}</h3>
                    <p className="subtitle">{arroba}</p>

                    <div className="columns">
                        <div className="column">
                            <button onClick={handleClick} className="button is-success is-fullwidth">+</button>
                        </div>
                        <div className="column">
                            <p>Likes: {count}</p>
                        </div>
                        <div className="column">
                            <button onClick={handleClickResta} className="button is-success is-fullwidth">-</button>
                        </div>
                    </div> 

                </div>
            </div>
        </div>
    )
}

export default ProfileCard;