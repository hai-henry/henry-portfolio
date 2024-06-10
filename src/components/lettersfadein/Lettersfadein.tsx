import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import './lettersfadein.css'

window.addEventListener('DOMContentLoaded', (event: any) => {
    let typeSplit = new SplitType('[text-split]', {
        types: 'words,chars',
        tagName: 'span',
    })
})

const LettersFadeIn: React.FC = () => {
    const elementsRef = useRef<NodeListOf<Element> | null>(null)
    useEffect(() => {
        if (elementsRef.current) {
            elementsRef.current.forEach((element, index) => {
                let tl = gsap.timeline({ paused: true })
                tl.from(element.querySelectorAll('.char'), {
                    opacity: 0,
                    duration: 0.2,
                    ease: 'power1.out',
                    stagger: { amount: 0.8 },
                })
                tl.play() // Play the animation
            })
        }
    }, [])

    return (
        <>
            <div className="info">
                <p letters-fade-in="" text-split="" className="info__name">
                    Henry Ho
                </p>
                <p letters-fade-in="" text-split="" className="info__desc">
                    Software + Architecture Portfolio
                </p>
            </div>
        </>
    )
}

export default LettersFadeIn
