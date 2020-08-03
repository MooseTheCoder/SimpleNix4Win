# SimpleNix4Win

This repo contains a simplified collection of commands I used on Linux on a daily basis. Some of the work I've started doing has forced me to be on windows more than I would like to be, while solutions already exist to overcome this issue, I thought I'd make my own as well.

# Building

Building is simple. Pick the command you want to have access to and use `pkg` to build it to a single EXE.

`npm install pkg -g`

`cd cat`

`pkg . --targets win`

This will build `cat.exe`

Make a new folder somewhere on your machine and add it to your path `D:\NIX` in my case.

Place any exe in there to have access to in cmd.

## Currently Supported

### cat

Supported Arguments

- -E
- --show-ends
- --help
- --version
- -n