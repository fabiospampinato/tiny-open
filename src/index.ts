
/* IMPORT */

import {spawnBin} from './utils';
import type {Options} from './types';

/* MAIN */

const open = ( path: string, options?: Options ): Promise<boolean> => {

  const app = options?.app;

  if ( process.platform === 'win32' ) {

    return spawnBin ( 'cmd.exe', ['/c', 'start', app || '', path.replace ( /[&^]/g, '^$&' )] );

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
