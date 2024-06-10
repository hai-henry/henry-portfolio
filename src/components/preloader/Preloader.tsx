import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './preloader.css'

const Preloader: React.FC = () => {
    const [width, setWidth] = useState<number>(1) // Loading bar & percentage value
    const intervalId = useRef<number | null>(null) // Store setInterval reference
    const load = useRef<gsap.core.Timeline>() // GSAP timeline reference

    useEffect(() => {
        // Pause animation
        load.current = gsap.timeline({ paused: true })
        // Percent & bar animates then fades out
        load.current.to('#percent, #bar', {
            duration: 0.8,
            opacity: 0, // Animate to 0 opacity
            zIndex: -1,
        })
        // Fade out loading screen
        load.current.to('.loader', { opacity: 0 })
    }, [])

    useEffect(() => {
        function frame() {
            setWidth((prev) => {
                if (prev < 100) {
                    return prev + 1 // Increase percent and loading bar width by 1
                } else {
                    if (intervalId.current) {
                        clearInterval(intervalId.current) // If percent reaches 100%, clear interval
                    }
                    load.current?.play() // Play GSAP timeline
                    return prev // Return value of percent and loading bar width
                }
            })
        }

        intervalId.current = window.setInterval(frame, 25) // Set interval to 25ms

        return () => {
            if (intervalId.current) {
                clearInterval(intervalId.current) // Clear interval on component unmount before
            }
        }
    }, [])

    return (
        <>
            <div className="loader">
                <div className="progress">
                    {/* <div id="bar">
                        <div
                            id="bar__confirm"
                            style={{ width: `${width}%` }} // Increase loading bar "width" css style
                        ></div>
                    </div> */}
                    <div id="percent">{width}</div>
                </div>
            </div>
        </>
    )
}

export default Preloader
