
/* IMPORT */

import {spawn} from 'node:child_process';

/* MAIN */

const spawnBin = ( bin: string, args: string[] ): Promise<boolean> => {

  return new Promise ( resolve => {

    const process = spawn ( bin, args, {
      detached: true,
      shell: false,
      windowsHide: true
    });

    process.on ( 'close', code => {

      resolve ( !code );

    });

  });

};

/* EXPORT */

export {spawnBin};
