# vscode-debug-arg README

This extension allows you to provide an argument when running a command in the VS Code debugger.

## How to

Simply place `${command:debug-arg.prompt}` in any part of your debugger command configuration.

Example running mocha tests with dynamic test regex flag `-g`:
```
{
    "type": "node",
    "request": "launch",
    "name": "Mocha Tests",
    "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
    "args": [
        "-u",
        "tdd",
        "--timeout",
        "999999",
        "--colors",
        "${workspaceFolder}/test",
        "-g",
        "${command:debug-arg.prompt}"
    ],
    "internalConsoleOptions": "openOnSessionStart"
},
```