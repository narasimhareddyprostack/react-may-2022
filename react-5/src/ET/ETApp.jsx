import React, { useState } from 'react'
import ETForm from './ETForm'
import ETDetails from './ETDetails'
const ETApp = () => {
    let [track, setTrack] = useState([])
    return <>
        <ETForm track={track} setTrack={setTrack} />
        <ETDetails track={track} />
    </>
}

export default ETApp
