// import ReactButton from 'remoteReactApp/Button';

import React from 'react';
import { mount } from 'remoteVueApp/VueApp';
import ReactButton from 'remoteReactApp/Button';
import { useRef, useEffect } from 'react';

function App() {

    const vueRef = useRef(null);

    useEffect(() => {
        mount(vueRef.current)
    }, [])

    return (
        <div className="App">
            Remote React
            <div ref={vueRef}></div>
            <React.Suspense fallback='Loading Button'>
                <ReactButton />
            </React.Suspense>
        </div>
    );
}

export default App;
