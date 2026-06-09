
/* IMPORT */

import {fileURLToPath} from 'node:url';
import {spawn, spawnSync} from 'node:child_process';
import {IS_WSL} from './constants';

/* MAIN */

const getWindowsPath = ( path: string ): string => {

  const process = spawnSync ( 'wslpath', ['-w', path], { encoding: 'utf8' } );

  return process.status === 0 ? process.stdout.trim () : path;

};

const toWindowsPath = ( path: string ): string => {

  if ( !IS_WSL ) return path;

  if ( !URL.canParse ( path ) ) { // Transform Linux path to Windows path

    return getWindowsPath ( path );

  } else if ( new URL ( path ).protocol === 'file:' ) { // Transform Linux file URL to Windows path.

    return getWindowsPath ( fileURLToPath ( path ) );

  } else { // Leave other URLs unchanged.

    return path;

  }

};

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

export {toWindowsPath, spawnBin};
