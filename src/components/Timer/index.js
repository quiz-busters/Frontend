import React, { useEffect, useState } from "react";

export default function Timer({setStop, currQues}) {
    const [timer, setTimer] = useState(15);

    useEffect(() => {
        if (timer === 0) return setStop();
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1 );
        }, 1000);
        return () => clearInterval(interval)
    }, [timer, setStop]);

    useEffect(() => {
        setTimer(15);
    }, [currQues] )
    return timer;
}
