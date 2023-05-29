import { Composition, staticFile } from 'remotion';
import KdosTemplate from './KdosTemplate';
import React from 'react';
import './style.css';

export const RemotionRoot: React.FC = (props) => {
  console.log('Prosp from Root', props);
  return (
    <>
      <Composition
        id="Main"
        component={KdosTemplate}
        durationInFrames={1290}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
