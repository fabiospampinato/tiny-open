
/* IMPORT */

import {spawnBin} from './utils';
import type {Options} from './types';

/* MAIN */

//TODO: Add some introspection/error handling

const open = ( path: string, options?: Options ): void => {

  const app = options?.app;

  if ( process.platform === 'win32' ) {

    spawnBin ( 'cmd.exe', ['/c', 'start', app || '', path.replace ( /[&^]/g, '^$&' )] );

  } else if ( process.platform === 'linux' ) {

    spawnBin ( app || 'xdg-open', [path] );

  } else if ( process.platform === 'darwin' ) {

    spawnBin ( 'open', app ? ['-a', app, path] : [path] );

  } else {

    throw new Error ( `Unsupported platform, could not open "${path}"` );

  }

};

/* EXPORT */

export default open;
export type {Options};
