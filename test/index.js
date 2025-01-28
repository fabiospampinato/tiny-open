
/* IMPORT */

import open from '../dist/index.js';

/* MAIN */

const URL = 'https://example.com';

const chrome = await open ( URL, { app: 'google chrome' } );
const firefox = await open ( URL, { app: 'firefox' } );
const edge = await open ( URL, { app: 'microsoft edge' } );
const safari = await open ( URL, { app: 'safari' } );

console.log ( 'chrome', chrome );
console.log ( 'firefox', firefox );
console.log ( 'edge', edge );
console.log ( 'safari', safari );
