
/* IMPORT */

import {IS_WSL} from './constants';
import {toWindowsPath, spawnBin} from './utils';
import type {Options} from './types';

/* MAIN */

const open = ( path: string, options?: Options ): Promise<boolean> => {

  const app = options?.app;

  if ( process.platform === 'win32' || IS_WSL ) {

    // The empty title "" prevents a quoted first arg from being treated as the window title.
    return spawnBin ( 'cmd.exe', ['/c', 'start', '', ...(app ? [app] : []), toWindowsPath ( path ).replace ( /[&^%]/g, '^$&' )] );

  } else if ( process.platform === 'linux' ) {

    return spawnBin ( app || 'xdg-open', [path] );

  } else if ( process.platform === 'darwin' ) {

    return spawnBin ( 'open', app ? ['-a', app, path] : [path] );

  } else {

    throw new Error ( `Unsupported platform, could not open "${path}"` );

  }

};

/* EXPORT */

export default open;
export type {Options};
