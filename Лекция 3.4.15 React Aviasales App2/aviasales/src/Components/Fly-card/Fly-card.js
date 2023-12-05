import React from "react";
import './Fly-card.scss';
import airlinesLogo from './s7-airlines-logo.png';


const FlyCard = () => {

    return (
        <div className="flycard">

            <div className="flycard__title">
                <div className="flycard__price">13 500 P</div>
                <div className="flycard__logo">
                    <img className="flycard__logo" src={airlinesLogo} alt="airlines-logo"></img>
                </div>
            </div>

            {/* первая колонка */}
            <div className="flycard__first-direction">
            {/* расписание */}
            <div className="flycard__schedule">
            <span className="direction grey-colored">MOW-HKT</span>
            <span className="time black-colored">11:20 - 00:50</span>
            </div>
            {/* время прибытия */}
            <div className="flycard__arrival-time">
            <span className="timeleft grey-colored">В пути</span>
            <span className="timleft black-colored">21ч 15м</span>
            </div>
            {/* кол-во пересадок */}
            <div className="flycard__transfer-count">
            <span className="transfer-count grey-colored">1 Пересадка</span>
            <span className="transfer-place black-colored">HKG</span>
            </div>

            </div>

            {/* вторая колонка */}
            <div className="flycard__second-direction">
            {/* расписание */}
            <div className="flycard__schedule">
            <span className="direction grey-colored">MOW-HKT</span>
            <span className="time black-colored">11:20 - 00:50</span>
            </div>
            {/* время прибытия */}
            <div className="flycard__arrival-time">
            <span className="timeleft grey-colored">В пути</span>
            <span className="timleft black-colored">21ч 15м</span>
            </div>
            {/* кол-во пересадок */}
            <div className="flycard__transfer-count">
            <span className="transfer-count grey-colored">1 Пересадка</span>
            <span className="transfer-place black-colored">HKG</span>
            </div>

            </div>

        </div>
    )
}

export default FlyCard;