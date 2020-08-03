# SimpleNix4Win

This repo contains a simplified collection of commands I used on Linux on a daily basis. Some of the work I've started doing has forced me to be on windows more than I would like to be, while solutions already exist to overcome this issue, I thought I'd make my own as well.

# Building

Building is simple. 

Pick the command you want to have access to, if it is a node project, use `pkg` to build it to a single EXE.

`npm install pkg -g`

`cd cat`

`pkg . --targets win`

This will build `cat.exe`

Make a new folder somewhere on your machine and add it to your path `D:\NIX` in my case.

Place any exe in there to have access to in cmd.

If the command folder only contains a batch file, do the same as above and put the .bat file in the directory that is in your PATH

## Currently Supported

### cat (node)

Supported Arguments

- -E
- --show-ends
- --help
- --version
- -n
- --show-tabs
- -t

### history (bat)

Shadow of `doskey /History`

### clear (bat)

Shadow of `cls`

### ls (bat)

Shadow of `dir` 

- Planning to add better listing formatting options

### rm (bat)

Shadow of `del`
- Planning on adding flag support for things like rm -rf

### touch (node)

Cut down version that can only create files, 

- Timestamp modification to be added at a later date