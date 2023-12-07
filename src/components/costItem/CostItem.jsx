import './CostItem.scss'

const CostItem = (props) => {

    const month = props.date.toLocaleString('ru-RU', {month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('ru-RU', {day:'2-digit'});

    return(
        <div className="costItem__card">
            <div className="container">
                <div className="costItem__row">
                    <div className="costItem__titles">
                        <div className='costItem__date'>
                            <div className="date__month">{month}</div>
                            <div className="date__year">{year}</div>
                            <div className="date__day">{day}</div>
                        </div>
                        <h2 className='costItem__name'>{props.name}</h2>
                    </div>
                    <div className="costItem__price">${props.price}</div>
                </div>
            </div>
        </div>
    )
}

export default CostItem


