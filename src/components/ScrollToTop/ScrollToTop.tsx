import React from 'react';
// TODO: Create functionality for scrolltotop

const ScrollToTop = (props) => {
    return (
        <>
            <div>
                <button onClick={props.scrollUp}>Back to top</button>
            </div>
        </>
    );
};

export default ScrollToTop;
