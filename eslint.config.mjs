// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.strict, {
  ignores: ['src/presentation/rest/types/generated-api.d.ts'],
  rules: {
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'twilio',
            importNames: ['default', 'Twilio'],
            message: "Please use import from '/lib/twilio/' to initialize Twilio client",
            allowTypeImports: true,
          },
        ],
      },
    ],
  },
})
