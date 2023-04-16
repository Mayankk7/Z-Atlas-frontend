import React, { useEffect, useState } from 'react'
import { Map, Marker, Overlay } from "pigeon-maps"
import { createPath } from "pigeon-maps/providers"
import Nav from '../components/Nav'
const ResultScreen = ({data}) => {
    const log = localStorage.getItem('data');
    const Jlog = JSON.parse(log);
    console.log(Jlog);
    const [source, setSource] = useState(Jlog.source);
    const [destination, setDestination] = useState(Jlog.destination);
    let color = "#FF0000";

    return (
        <div>
            <Nav />
            <div className=' absolute w-[60vw] h-[70vh] ml-[20vw] overflow-hidden mt-[10vh] border-4 border-[#4E4B5C] rounded-xl'>
                <Map height={570} defaultCenter={source} defaultZoom={15}>
                    <Marker width={50} anchor={source} color="#366399"/>
                    <Marker width={50} anchor={destination} color="#366399"/>
                    {
                        Jlog.path.map((e)=>{
                            console.log(e);
                            return (
                                <Marker width={25} anchor={e.reverse()} color="#366399"/>
                            )
                        })
                    }

                </Map>
            </div>
            <div className='bg-[#AECDF7] h-[50vh] mt-[40vh]'></div>
        </div>
    )
}

export default ResultScreen
