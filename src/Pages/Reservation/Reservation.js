import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Reservation.css'

const Reservation = () => {
    const { reserveId } = useParams();

    const [info, setInfo] = useState([])

    //converting to string the number that got via useParams
    const stringReserveId = (parseInt(reserveId))

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => data.filter(info => {
                // console.log(parseInt(info.id))
                // console.log(info.id === rid)
                return info.id === stringReserveId;

            }))
            .then(matched => setInfo(matched))
    }, [])

    // console.log(info)

    // reserve button click handler
    const handleReservation = () => {
        alert('This function still on beta testing')
    }


    return (
        <div className="container col-md-6 single-details">

            <h2 className="text-center">Welcome to reservation of <span>{info[0]?.name}</span>.</h2>

            <div className="detailsImg">
                <img src={info[0]?.img} alt="" className="img-fluid" />
            </div>

            <div className="details-contents">
                <p className="my-5">{info[0]?.longDesc}</p>

                <button onClick={handleReservation}>Make a Reservation</button>
            </div>
        </div>
    );
};

export default Reservation;