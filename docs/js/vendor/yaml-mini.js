/* yaml-mini.js — malý YAML parser pro datový soubor menu (PRD §7.3).
   Podporuje podmnožinu YAML, kterou používá web/data/menu.yaml:
   mapy (key: value), vnořené bloky, seznamy map (- key: …), inline pole [a, b],
   skaláry (string/number/bool), komentáře (#). Žádné závislosti, funguje i přes file://.
   Export: window.parseYAML(text) → objekt. (V node: module.exports.) */
(function (root) {
  function parseScalar(s) {
    s = s.trim();
    if (s === '' || s === '~' || s === 'null') return null;
    if (s[0] === '[' && s[s.length - 1] === ']') {
      var inner = s.slice(1, -1).trim();
      if (inner === '') return [];
      return inner.split(',').map(function (x) { return parseScalar(x); });
    }
    if (s === 'true') return true;
    if (s === 'false') return false;
    if (/^-?\d+$/.test(s)) return parseInt(s, 10);
    if (/^-?\d+\.\d+$/.test(s)) return parseFloat(s);
    if ((s[0] === '"' && s[s.length - 1] === '"') || (s[0] === "'" && s[s.length - 1] === "'")) {
      return s.slice(1, -1);
    }
    return s;
  }

  function parseYAML(text) {
    // 1) tokenizace na řádky se zachováním odsazení; bez komentářů a prázdných
    var lines = [];
    text.split('\n').forEach(function (raw) {
      var line = raw.replace(/\r$/, '');
      // odstranit komentáře: celořádkové i koncové (# uvozené mezerou)
      line = line.replace(/^\s*#.*$/, '').replace(/\s+#.*$/, '');
      if (line.trim() === '') return;
      var indent = line.length - line.replace(/^ +/, '').length;
      lines.push({ indent: indent, text: line.trim() });
    });

    var i = 0;
    function parseBlock(indent) {
      return lines[i].text[0] === '-' ? parseList(indent) : parseMap(indent);
    }
    function parseMap(indent) {
      var obj = {};
      while (i < lines.length && lines[i].indent === indent && lines[i].text[0] !== '-') {
        var t = lines[i].text;
        var ci = t.indexOf(':');
        var key = t.slice(0, ci).trim();
        var rest = t.slice(ci + 1).trim();
        i++;
        if (rest === '') {
          obj[key] = (i < lines.length && lines[i].indent > indent) ? parseBlock(lines[i].indent) : null;
        } else {
          obj[key] = parseScalar(rest);
        }
      }
      return obj;
    }
    function parseList(indent) {
      var arr = [];
      while (i < lines.length && lines[i].indent === indent && lines[i].text.indexOf('- ') === 0) {
        var after = lines[i].text.slice(2);
        i++;
        if (after.indexOf(':') !== -1) {
          var ci = after.indexOf(':');
          var key = after.slice(0, ci).trim();
          var rest = after.slice(ci + 1).trim();
          var obj = {};
          if (rest === '') {
            obj[key] = (i < lines.length && lines[i].indent > indent) ? parseBlock(lines[i].indent) : null;
          } else {
            obj[key] = parseScalar(rest);
          }
          while (i < lines.length && lines[i].indent > indent && lines[i].text[0] !== '-') {
            var sub = parseMap(lines[i].indent);
            for (var k in sub) obj[k] = sub[k];
          }
          arr.push(obj);
        } else {
          arr.push(parseScalar(after));
        }
      }
      return arr;
    }

    return lines.length ? parseBlock(lines[0].indent) : {};
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = parseYAML;
  else root.parseYAML = parseYAML;
})(typeof window !== 'undefined' ? window : this);
