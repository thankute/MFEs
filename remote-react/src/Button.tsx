import React, { useState } from 'react'

const Button = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Remote Click : {count}
            </button>
        </div>
    )
}

export default Button