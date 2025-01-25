'use strict';

var jsxRuntime = require('react/jsx-runtime');

var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return jsxRuntime.jsx("button", { style: { background: "#dad" }, onClick: onClick, children: label });
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
