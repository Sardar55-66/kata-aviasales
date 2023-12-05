import React from "react";
import './Button.scss'
import { useDispatch } from "react-redux";
import { getFiveMoreTickets,  } from "../../async-actions/async-actions";


const Btn = () => {

    const dispatch = useDispatch()

    return <div className="show-more-tickets-btn">
        <button 
        className="btn"
        onClick ={() => dispatch(getFiveMoreTickets())}
        >
            Показать еще 5 билетов
        </button>
    </div>
}

export default Btn;