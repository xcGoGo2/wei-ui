import * as fs from 'fs';
import * as path from 'path';
import type { Plugin } from 'vite';

const lineRE = /[-_]/;

export default function (): Plugin {
  return {
    name: 'waycloud-ui-vite-plugin',
    config() {
      return {
        css: {
          modules: {
            /*
            generateScopedName: function (name) {
              return 'mui-' + name;
            },
            */
            getJSON: function (cssFileName, json) {
              if (fs.existsSync(cssFileName)) {
                const dir = path.dirname(cssFileName);
                const data = `// Auto generate\nexport default interface Style {\n${Object.keys(
                  json
                )
                  .map(
                    (name) =>
                      `  readonly ${
                        lineRE.test(name) ? "'" + name + "'" : name
                      }: string;`
                  )
                  .join('\n')}\n  readonly [name: string]: string;\n}\n`;
                fs.writeFileSync(path.join(dir, 'style.d.ts'), data, 'utf-8');
              }
            },
          },
        },

        resolve: {
          alias: {
            '~': path.resolve(path.dirname(__dirname)),
          },
        },
      };
    },
  };
}
