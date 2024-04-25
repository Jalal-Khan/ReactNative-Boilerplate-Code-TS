// module.exports = {
//   root: true,
//   extends: '@react-native',
// };

//BELOW IS NEW SETTING
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
        'import', // Ensure 'import' plugin is included
    ],
    rules: {
        // your rules
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        // other rules...
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        // other settings...
    },
};
