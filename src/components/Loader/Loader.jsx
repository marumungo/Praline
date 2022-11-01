import { ThreeCircles } from  'react-loader-spinner'
import { useEffect } from 'react'

export const Loader = () => {
    useEffect (() => {
        console.log ("Está cargando")
        return () => console.log ("Se desmontó")
    }, [])

    return (
        <div className='cargando'>
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="#6B4F4F"
                middleCircleColor="#9d8484"
                innerCircleColor="#EED6C4"
            />
            <span>CARGANDO...</span>
        </div>
    );
}