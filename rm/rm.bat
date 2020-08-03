@echo off

goto PROGSTART

:PROGSTART
if "%1%" == "--help" GOTO PROGHELP
if "%1%" == "--version" GOTO PROGVER
GOTO PROGRM

:PROGHELP
echo This RM command is a shadow of the windows del command.
echo The first argument if not --help or --version will be passed directly to del
goto PROGEND

:PROGVER
echo 0.0.1, del shadow
goto PROGEND

:PROGRM
del %1%

:PROGEND