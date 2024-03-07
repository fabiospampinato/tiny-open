# Tiny Open

A tiny utility for opening a file or a URL with its default application, or a custom one.

This uses `open` under macOS, `xdg-open` under Linux, and `start` under Windows.

## Install

```sh
npm install --save tiny-open
```

## Usage

```ts
import open from 'tiny-open';

// Open a file

open ( '/path/to/some/file.txt' );

// Open a URL

open ( 'https://google.com' );

// Open a URL with a custom application

open ( 'https://google.com', 'Google Chrome' ); // MacOS
open ( 'https://google.com', 'chrome' ); // Windows
open ( 'https://google.com', 'google-chrome' ); // Linux
```

## License

MIT © Fabio Spampinato
