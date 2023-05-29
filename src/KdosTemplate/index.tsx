import React, { useEffect } from 'react';
import { AbsoluteFill, Img, Video, staticFile } from 'remotion';

const Credits: React.FC = (props) => {
  return (
    <AbsoluteFill>
      <Img
        className="w-full h-full absolute inset-0 object-cover"
        src={staticFile('template.jpg')}
      />
      <div className="h-full relative z-40 flex justify-center items-center flex-col">
        {/* <h1 className="text-black text-9xl font-bold">Hello wrold</h1> */}
        <div
          className="text-2xl bg-black text-white absolute left-0 top-0"
          style={{
            width: 1620,
            height: 920,
            transform: `matrix3d(0.491924, 0.0845145, 0, -0.0000287846, -0.0812591, 0.557701, 0, 0.00000624225, 0, 0, 1, 0, 632, 65, 0, 1)`,
            transformOrigin: '0px 0px 0px',
            // opacity: 0.5
          }}
        >
          <Video src={staticFile('video.mp4')} className="h-full" />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Credits;
