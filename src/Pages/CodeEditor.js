import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

// let text =
//     '{\n  "id": 0,\n  ' +
//     '"script": """\n   function add(x, y) {\n      return x + y;\n   }\n   add(1, 2);\n   """' +
//     ',\n   "descr": "add two numbers"\n}';

function onChange(newValue) {
    console.log("change", newValue);
}

function CodeEditor() {
    return (
        <div className="App">
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "5px",
                }}
            >
                <h1>Code Editor</h1>
            </div>
            <div
                className="Editor"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                }}
            >
                <AceEditor
                    mode="python"
                    theme="monokai"
                    onChange={onChange}
                    fontSize="16px"
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                    }}
                    style={{
                        backgroundColor: "#999",
                        fontSize: "2rem",
                        color: "white",
                        width: "39rem",
                        height: "50rem",
                    }}
                />
            </div>
        </div>
    );
}

export default CodeEditor;
