

const InnovativeFeatures = (props) => {
    let card
    if (props.left ==='true') {
        card =(
            <>
            <div>
                <h6 className="text-dark">INTELLIGENT PROCESSOR</h6>
                <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
            </div>
            <img src={props.img} alt="Feature image" />
        </>
        )}else{
            card=(
                <>
                    <img src={props.img} alt="Feature image" /> 
                    <div>
                        <h6 className="text-dark">INTELLIGENT PROCESSOR</h6>
                        <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                    </div>
                </>
            )
        }

    return (

        <div className="row p-3">
            <div className="col-12 d-flex  gap-5">
                {card}
            </div>
        </div>

    )
}

export default InnovativeFeatures






