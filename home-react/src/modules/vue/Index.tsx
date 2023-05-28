import React from 'react';
import { mount } from 'remoteVueApp/VueApp';
import { useRef, useEffect } from 'react';

const Index = () => {

    const vueRef = useRef(null);

    useEffect(() => {
        mount(vueRef.current)
    }, [])

    return (
        <div>
            <div ref={vueRef}></div>
        </div>
    )
}

export default Index