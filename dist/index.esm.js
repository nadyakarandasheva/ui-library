import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Button-module_buttonPrimary__i-jdh {\r\n  border: 1px solid #dad;\r\n  border-radius: 25px;\r\n  background-color: #dad;\r\n  padding: 10px 8px;\r\n}";
var styles = {"buttonPrimary":"Button-module_buttonPrimary__i-jdh"};
styleInject(css_248z);

var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return React.createElement(Button, { className: styles.buttonPrimary, onClick: onClick }, label);
};

export { Button };
//# sourceMappingURL=index.esm.js.map
