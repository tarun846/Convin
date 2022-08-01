import React from 'react'
import {useSelector } from 'react-redux/es/hooks/useSelector';

function Iframeplayer() {

  const  currentvideourl =  useSelector((state) => state.form.currentvideourl)
  const bini = currentvideourl.replace('/watch?v=', '/embed/')
console.log(bini);
return (
    <div className='iframe_container' >
      <iframe src={bini}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        width = "400"
/>
    </div>
  )
}

export default Iframeplayer