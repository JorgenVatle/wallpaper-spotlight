windows-highlight-for-desktop
=============================

Random high quality wallpapers daily - Inspired by Windows 10&#39;s lock-screen highlight.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/windows-highlight-for-desktop.svg)](https://npmjs.org/package/windows-highlight-for-desktop)
[![CircleCI](https://circleci.com/gh/[object Object]/tree/master.svg?style=shield)](https://circleci.com/gh/[object Object]/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/windows-highlight-for-desktop.svg)](https://npmjs.org/package/windows-highlight-for-desktop)
[![License](https://img.shields.io/npm/l/windows-highlight-for-desktop.svg)](https://github.com/[object Object]/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g wallpaper-spotlight
$ spotlight COMMAND
running command...
$ spotlight (-v|--version|version)
wallpaper-spotlight/1.0.0 win32-x64 node-v10.1.0
$ spotlight --help [COMMAND]
USAGE
  $ spotlight COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`spotlight download`](#spotlight-download)
* [`spotlight help [COMMAND]`](#spotlight-help-command)
* [`spotlight wallpaper`](#spotlight-wallpaper)

## `spotlight download`

Fetch a random wallpaper

```
USAGE
  $ spotlight download
```

_See code: [src\commands\download.ts](https://github.com/JorgenVatle/windows-highlight-for-desktop/blob/v1.0.0/src\commands\download.ts)_

## `spotlight help [COMMAND]`

display help for spotlight

```
USAGE
  $ spotlight help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src\commands\help.ts)_

## `spotlight wallpaper`

Set a random image as the desktop wallpaper.

```
USAGE
  $ spotlight wallpaper
```

_See code: [src\commands\wallpaper.ts](https://github.com/JorgenVatle/windows-highlight-for-desktop/blob/v1.0.0/src\commands\wallpaper.ts)_
<!-- commandsstop -->
