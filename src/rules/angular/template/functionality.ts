export = {
    rules: {
        '@angular-eslint/template/accessibility-alt-text': 'error',
        '@angular-eslint/template/accessibility-elements-content': 'error',
        '@angular-eslint/template/accessibility-label-for': 'off',
        '@angular-eslint/template/accessibility-table-scope': 'warn',
        '@angular-eslint/template/accessibility-valid-aria': 'error',
        '@angular-eslint/template/banana-in-box': 'warn',
        '@angular-eslint/template/click-events-have-key-events': 'error',
        // TODO: Does not report "mouseover" events
        '@angular-eslint/template/mouse-events-have-key-events': 'error',
        '@angular-eslint/template/no-any': 'error',
        '@angular-eslint/template/no-autofocus': 'warn',
        '@angular-eslint/template/no-distracting-elements': 'warn',
        // TODO: Fails with "Cannot read property 'start' of undefined
        '@angular-eslint/template/no-negated-async': 'off',
        '@angular-eslint/template/no-positive-tabindex': 'error', // == accessibility-tabindex-no-positive
    },
};
