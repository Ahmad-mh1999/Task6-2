import './OneFeature.css';

function OneFeature(props) {
    return (
        <div class=" ic text-center">
            <img src={props.image} />
                <h4 class="mt-3 mb-3 me-3">{props.spec}</h4>
                <h3>{props.title}</h3>
                <p class="obacity-50">Tristique senectus et netus et malesuada ant reiet fames.</p>
        </div>
    )
}

export default OneFeature