/* build-menu-data.mjs — přegeneruje web/js/menu-data.js z web/data/menu.yaml.
   Není to build webu; jen zrcadlí YAML do JS (aby web fungoval bez fetch i přes file://).
   Spuštění z kořene repa:  node scripts/build-menu-data.mjs
*/
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'web/data/menu.yaml');
const dst = path.join(root, 'web/js/menu-data.js');

const yaml = fs.readFileSync(src, 'utf8');
const esc = yaml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const header = `/* menu-data.js — AUTO-generováno z web/data/menu.yaml (zdroj pravdy).
   Načítá menu bez fetch (funguje i přes file://). Přegeneruj:
   node scripts/build-menu-data.mjs   — NEEDITOVAT RUČNĚ. */
`;
fs.writeFileSync(dst, header + 'window.MENU_YAML = `\n' + esc + '`;\n');
console.log('OK → web/js/menu-data.js (' + (header.length + esc.length) + ' B)');
