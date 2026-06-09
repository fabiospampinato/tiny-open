
/* IMPORT */

import os from 'node:os';
import process from 'node:process';

/* MAIN */

const IS_WSL = process.platform === 'linux' && os.release ().toLowerCase ().includes ( 'microsoft' );

/* EXPORT */

export {IS_WSL};
