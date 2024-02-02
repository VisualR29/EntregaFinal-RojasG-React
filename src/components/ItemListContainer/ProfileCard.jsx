function ProfileCard({ titulo, descripcion, precio, img })
{

    return (
        <div className="tarjetas card">
            <div className="card.image">
                <figure className="image is-4by3">
                    <img src={img} alt="imagen" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title">{titulo}</h3>
                    <p className="subtitle">{descripcion}</p>

                    <div className="columns">
                        <div className="column">
                            <p>Precio: {precio}</p>
                        </div>
                    </div> 

                </div>
            </div>
        </div>
    )
}

export default ProfileCard;