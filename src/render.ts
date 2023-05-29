import { bundle } from '@remotion/bundler';
import { getCompositions, renderMedia } from '@remotion/renderer';
import { fstat, writeFileSync } from 'fs';
import { mkdir } from 'fs/promises';
import path from 'path';

const start = async () => {
  const compositionId = 'Main';
  const entry = 'src/main.ts';
  const bundleLocation = await bundle(path.resolve(entry), () => undefined, {
    webpackOverride: (config) => config,
    enableCaching: false,
  });

  const compositions = await getCompositions(bundleLocation);
  const composition = compositions.find((c) => c.id === compositionId);
  const outputLocation = `./out/kdos.mp4`;
  console.log('Attempting to render:', outputLocation);
  const vid = await renderMedia({
    composition: composition!,
    serveUrl: bundleLocation,
    codec: 'h264',
    // outputLocation,
    inputProps: { name: 'Imran Sheikh' },
  });
  await mkdir(path.dirname(outputLocation), { recursive: true });
  writeFileSync(outputLocation, vid!);
  console.log('Render done!', vid);
  console.log(composition);
};

start();
