
/* IMPORT */

import {execFile} from 'node:child_process';
import os from 'node:os';
import process from 'node:process';

/* MAIN */

const open = ( path: string ): void => {

  if ( process.platform === 'win32' || ( process.platform === 'linux' && os.release ().toLowerCase ().includes ( 'windows' ) ) ) {

    execFile ( 'cmd.exe', ['/c', 'start', '', path.replace ( /[&^]/g, '^$&' )] );

  } else if ( process.platform === 'linux' ) {

    execFile ( 'xdg-open', [path] );

  } else if ( process.platform === 'darwin' ) {

    execFile ( 'open', [path] );

  } else {

    throw new Error ( `Unsupported platform, could not open "${path}"` );

  }

};

/* EXPORT */

export default open;
