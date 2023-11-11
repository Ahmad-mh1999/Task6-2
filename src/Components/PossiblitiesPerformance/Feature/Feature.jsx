import './Feature.css'

function Feature(props) {
    let FeaturType 
    if (props.type === 'one') {
        FeaturType=(
            <>
            <div className="point">
                <div className="Ah-spinner spinner-grow text-danger spinner-1 " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className="spec-info d-flex align-items-center justify-content-center flex-column  text-center ">
                <img src={props.img} alt="feature image" />
                <h5 className="mt-4">{props.title}</h5>
                <p>{props.spec}</p>
            </div>
            </>
        )
    } else{
        FeaturType=(
        <>
            <div className="point2">
                <div className="Ah-spinner spinner-grow text-danger spinner-1 " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className="spec-info2 d-flex align-items-center justify-content-center flex-column  text-center ">
                <img src={props.img} alt="feature image" />
                <h5 className="mt-4">{props.title}</h5>
                <p>{props.spec}</p>
            </div>
        </>
        )
    }
    
    
    return FeaturType
}

export default Feature