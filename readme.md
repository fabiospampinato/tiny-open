# Tiny Open

A tiny utility for opening a file or a URL with its default application.

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
```

## License

MIT © Fabio Spampinato
