import React from 'react';
import Ticker from 'react-ticker';

const NewsTicker = ({ items, speed = 5 }) => {
    return (
        <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
            <Ticker speed={speed}>
                {({ index }) => (
                    <>
                        {items.map((item, idx) => (
                            <h4 key={idx} style={{ margin: '0 10px', display: 'inline-block' }}>{item}</h4>
                        ))}
                    </>
                )}
            </Ticker>
        </div>
    );
}

export default NewsTicker;
