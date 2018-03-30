'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('debug-arg.prompt', promptForArg));
}

export function deactivate() {
}

async function promptForArg(context: vscode.ExtensionContext): Promise<string[]> {
    let options: vscode.InputBoxOptions = {
        prompt: "Argument: ",
        placeHolder: ""
    }
    
    return vscode.window.showInputBox(options)
        .then(value => {
            return value.split(" ")
        });
}