'use client'

import axios from 'axios';
import Image from "next/image";
import { AutoTextSize } from 'auto-text-size'
import ItemScore from "../../../components/itemScore";
import { useEffect, useState } from 'react';

export default function Game1() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [showData, setShowData] = useState([]);

    const fetchData = async() => {
        axios.get('/api/game5')
            .then(function (response) {
                // handle success
                const newData = response.data.sort((a, b) => b.score - a.score);
                // add counter to array
                const finalData = newData.map((item, index) => ({ ...item, id: index + 1 }));
                setData(finalData);
                setPage(1);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    const handleData = () => {
        // max data array to show is 5
        const newData = data.slice((page - 1) * 5, page * 5);
        setShowData(newData);
    }
    const handleNext = () => {
        if(page === Math.ceil(data.length / 5)) return
        setPage(page + 1);
        handleData();
    }
    const handlePrev = () => {
        if (page === 1) return
        setPage(page - 1);
        handleData();
    }
    

    useEffect (() => {
        fetchData();
    }, []);

    useEffect (() => {
        handleData();
    }, [page]);
    

    if(!data) {
        return <div>Loading...</div>
    }

    // console.log(data);

    return (
        <>
        <div className="bgScoreBoard">
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex-1 max-w-[500px]">
                    <div className="boxScoreBoard">
                        <div className="scoreboard-title">
                            <AutoTextSize>
                            AIM AT PAIN
                            </AutoTextSize>
                        </div>
                        <div className="scoreboard-body">
                            <div className="lists-score">
                                {showData.map((item) => (
                                    <ItemScore key={item.id} number={item.id} name={item.name} point={item.score} />
                                ))}
                            </div>                        
                        </div>
                        <div className='scoreboard-prev'>
                            <button className="btn-prev" onClick={handlePrev}></button>
                        </div>
                        <div className='scoreboard-next'>
                            <button className="btn-next" onClick={handleNext}></button>
                        </div>
                        <div className='scoreboard-tryAgain'>
                            <a className="btn-tryAgain" href="https://www.wish-integrate.com/game5/"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}