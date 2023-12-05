import React from "react";
import './Fly-card.scss';

import { useSelector } from "react-redux";


const FlyCard = (props) => {


    const tabs = useSelector(state => state.tabs)
    const fl = useSelector(state => state.filters)

    const ticket = props.mainData
    const {price, carrier, segments} = ticket

    const transferCount1 = segments[0].stops.length
    const transferCount2 = segments[1].stops.length

    const date1 = segments[0].date
    let hours = Number(new Date(date1).getHours())
    const minutes = Number(new Date(date1).getMinutes())

    const date2 = segments[1].date
    let hours2 = new Date(date2).getHours()
    const minutes2 = new Date(date2).getMinutes()

    const flightDuration1 = Number((segments[0].duration / 60).toFixed(0))
    const flightDuration2 = (segments[1].duration / 60).toFixed(0)
   
    
    


    

    return (
        <div className="flycard">

            <div className="flycard__title">
                <div className="flycard__price">{price + ' P'}</div>
                <div className="flycard__logo">
                    <img className="flycard__logo_img" src={`http://pics.avs.io/150/250/${carrier}.png`} alt="airlines-logo"></img>
                </div>
            </div>

            {/* первая колонка */}
            <div className="flycard__first-direction">
            {/* расписание */}
            <div className="flycard__schedule">
            <span className="direction grey-colored">{ticket.segments[0].origin + ' ' + ticket.segments[0].destination}</span>
            <span className="time black-colored">
                {hours}:{minutes} - {hours + flightDuration1 >= 24 ? hours = 0 + (flightDuration1 - (24 - hours)) : hours + flightDuration1}:{minutes}
                </span>
            </div>
            {/* время прибытия */}
            <div className="flycard__arrival-time">
            <span className="timeleft grey-colored">В пути</span>
            <span className="timleft black-colored">
                {(ticket.segments[0].duration / 60).toFixed(0) + 'ч'}
                </span>
            </div>
            {/* кол-во пересадок */}
            <div className="flycard__transfer-count">
            <span className="transfer-count grey-colored">
            {transferCount1 === 1 ? '1 Пересадка' : transferCount1 > 1? transferCount1 + ' Пересадки' : 'Без пересадок'}
            
                </span>
            <span className="transfer-place black-colored">{ticket.segments[0].stops.join('-')}</span>
            </div>

            </div>

            {/* вторая колонка */}
            <div className="flycard__second-direction">
            {/* расписание */}
            <div className="flycard__schedule">
            <span className="direction grey-colored">{ticket.segments[1].origin + ' ' + ticket.segments[1].destination}</span>
            <span className="time black-colored">
            {hours2}:{minutes2} - {hours2 + flightDuration2 >= 24 ? hours2 = 0 + (flightDuration2 - (24 - hours2)) : hours2 + flightDuration2}:{minutes2}
                </span>
            </div>
            {/* время прибытия */}
            <div className="flycard__arrival-time">
            <span className="timeleft grey-colored">В пути</span>
            <span className="timleft black-colored">
            {(ticket.segments[1].duration / 60).toFixed(0) + 'ч'}
                </span>
            </div>
            {/* кол-во пересадок */}
            <div className="flycard__transfer-count">
            <span className="transfer-count grey-colored">
            {transferCount2 === 1 ? '1 Пересадка' : transferCount2 > 1? transferCount2 + ' Пересадки' : 'Без пересадок'}
                </span>
            <span className="transfer-place black-colored">{ticket.segments[1].stops.join('-')}</span>
            </div>

            </div>

        </div>
    )
}

export default FlyCard;