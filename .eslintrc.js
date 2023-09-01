module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "react"
    ],
    "rules": {
        // Verifica que las importaciones estén ordenadas alfabéticamente
        "import/order": ["error", { "alphabetize": { "order": "asc" } }],
        // Verifica que no haya importaciones duplicadas
        "no-duplicate-imports": "error",
        // Verifica que las importaciones resuelvan correctamente
        "import/no-unresolved": ["error", { "commonjs": true, "caseSensitive": true }],
        // Prohíbe el uso de rutas relativas en las importaciones
        "import/no-relative-parent-imports": "error",
        // Verifica el uso de comillas simples en las importaciones
        "import/no-dynamic-require": "error",
      }
    };
   
    
    
    
    

