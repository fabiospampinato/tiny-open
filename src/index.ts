
/* IMPORT */

import {execFile} from 'node:child_process';
import os from 'node:os';
import process from 'node:process';
import type {Options} from './types';

/* MAIN */

const open = ( path: string, options?: Options ): void => {

  const app = options?.app;

  if ( process.platform === 'win32' || ( process.platform === 'linux' && os.release ().toLowerCase ().includes ( 'windows' ) ) ) {

    execFile ( 'cmd.exe', ['/c', 'start', app || '', path.replace ( /[&^]/g, '^$&' )] );

  } else if ( process.platform === 'linux' ) {

    execFile ( app || 'xdg-open', [path] );

  } else if ( process.platform === 'darwin' ) {

    execFile ( 'open', app ? ['-a', app, path] : [path] );

  } else {

    throw new Error ( `Unsupported platform, could not open "${path}"` );

  }

};

/* EXPORT */

export default open;
export type {Options};
