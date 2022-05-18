var it = Object.defineProperty,
  ot = Object.defineProperties;
var st = Object.getOwnPropertyDescriptors;
var Qe = Object.getOwnPropertySymbols;
var ut = Object.prototype.hasOwnProperty,
  ct = Object.prototype.propertyIsEnumerable;
var en = (e, n, t) =>
    n in e
      ? it(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t),
  nn = (e, n) => {
    for (var t in n || (n = {})) ut.call(n, t) && en(e, t, n[t]);
    if (Qe) for (var t of Qe(n)) ct.call(n, t) && en(e, t, n[t]);
    return e;
  },
  tn = (e, n) => ot(e, st(n));
import {
  _ as pt,
  X as dt,
  e as J,
  Y as gt,
  Z as ye,
  $ as kn,
  a0 as ft,
  a1 as Ne,
  s as xe,
  j as he,
  a2 as vt,
  r as ht,
  a3 as mt,
  a4 as yt,
  a5 as bt
} from './iframe.37e1393d.js';
var En = Ce;
Ce.displayName = 'jsx';
Ce.aliases = [];
function Ce(e) {
  (function (n) {
    var t = n.util.clone(n.languages.javascript),
      a = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
      r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
      i = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function d(g, b) {
      return (
        (g = g
          .replace(/<S>/g, function () {
            return a;
          })
          .replace(/<BRACES>/g, function () {
            return r;
          })
          .replace(/<SPREAD>/g, function () {
            return i;
          })),
        RegExp(g, b)
      );
    }
    (i = d(i).source),
      (n.languages.jsx = n.languages.extend('markup', t)),
      (n.languages.jsx.tag.pattern = d(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
          .source
      )),
      (n.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
      (n.languages.jsx.tag.inside['attr-value'].pattern =
        /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
      (n.languages.jsx.tag.inside.tag.inside['class-name'] =
        /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
      (n.languages.jsx.tag.inside.comment = t.comment),
      n.languages.insertBefore(
        'inside',
        'attr-name',
        { spread: { pattern: d(/<SPREAD>/.source), inside: n.languages.jsx } },
        n.languages.jsx.tag
      ),
      n.languages.insertBefore(
        'inside',
        'special-attr',
        {
          script: {
            pattern: d(/=<BRACES>/.source),
            alias: 'language-javascript',
            inside: {
              'script-punctuation': {
                pattern: /^=(?=\{)/,
                alias: 'punctuation'
              },
              rest: n.languages.jsx
            }
          }
        },
        n.languages.jsx.tag
      );
    var l = function (g) {
        return g
          ? typeof g == 'string'
            ? g
            : typeof g.content == 'string'
            ? g.content
            : g.content.map(l).join('')
          : '';
      },
      f = function (g) {
        for (var b = [], v = 0; v < g.length; v++) {
          var m = g[v],
            w = !1;
          if (
            (typeof m != 'string' &&
              (m.type === 'tag' && m.content[0] && m.content[0].type === 'tag'
                ? m.content[0].content[0].content === '</'
                  ? b.length > 0 &&
                    b[b.length - 1].tagName === l(m.content[0].content[1]) &&
                    b.pop()
                  : m.content[m.content.length - 1].content === '/>' ||
                    b.push({
                      tagName: l(m.content[0].content[1]),
                      openedBraces: 0
                    })
                : b.length > 0 && m.type === 'punctuation' && m.content === '{'
                ? b[b.length - 1].openedBraces++
                : b.length > 0 &&
                  b[b.length - 1].openedBraces > 0 &&
                  m.type === 'punctuation' &&
                  m.content === '}'
                ? b[b.length - 1].openedBraces--
                : (w = !0)),
            (w || typeof m == 'string') &&
              b.length > 0 &&
              b[b.length - 1].openedBraces === 0)
          ) {
            var $ = l(m);
            v < g.length - 1 &&
              (typeof g[v + 1] == 'string' || g[v + 1].type === 'plain-text') &&
              (($ += l(g[v + 1])), g.splice(v + 1, 1)),
              v > 0 &&
                (typeof g[v - 1] == 'string' ||
                  g[v - 1].type === 'plain-text') &&
                (($ = l(g[v - 1]) + $), g.splice(v - 1, 1), v--),
              (g[v] = new n.Token('plain-text', $, null, $));
          }
          m.content && typeof m.content != 'string' && f(m.content);
        }
      };
    n.hooks.add('after-tokenize', function (g) {
      (g.language !== 'jsx' && g.language !== 'tsx') || f(g.tokens);
    });
  })(e);
}
var xt = En,
  St = Fe;
Fe.displayName = 'bash';
Fe.aliases = ['shell'];
function Fe(e) {
  (function (n) {
    var t =
        '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
      a = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: !0,
        alias: 'punctuation',
        inside: null
      },
      r = {
        bash: a,
        environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
        variable: [
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: !0,
            inside: {
              variable: [
                { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                /^\$\(\(/
              ],
              number:
                /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              operator:
                /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              punctuation: /\(\(?|\)\)?|,|;/
            }
          },
          {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: !0,
            inside: { variable: /^\$\(|^`|\)$|`$/ }
          },
          {
            pattern: /\$\{[^}]+\}/,
            greedy: !0,
            inside: {
              operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
              punctuation: /[\[\]]/,
              environment: {
                pattern: RegExp('(\\{)' + t),
                lookbehind: !0,
                alias: 'constant'
              }
            }
          },
          /\$(?:\w+|[#?*!@$])/
        ],
        entity:
          /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
      };
    (n.languages.bash = {
      shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
      comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
      'function-name': [
        {
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: !0,
          alias: 'function'
        },
        { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' }
      ],
      'for-or-select': {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: 'variable',
        lookbehind: !0
      },
      'assign-left': {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
            lookbehind: !0,
            alias: 'constant'
          }
        },
        alias: 'variable',
        lookbehind: !0
      },
      string: [
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: !0,
          greedy: !0,
          inside: r
        },
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: !0,
          greedy: !0,
          inside: { bash: a }
        },
        {
          pattern:
            /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: !0,
          greedy: !0,
          inside: r
        },
        { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
        {
          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
          greedy: !0,
          inside: { entity: r.entity }
        }
      ],
      environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
      variable: r.variable,
      function: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      keyword: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      builtin: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: !0,
        alias: 'class-name'
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
      operator: {
        pattern:
          /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 }
    }),
      (a.inside = n.languages.bash);
    for (
      var i = [
          'comment',
          'function-name',
          'for-or-select',
          'assign-left',
          'string',
          'environment',
          'function',
          'keyword',
          'builtin',
          'boolean',
          'file-descriptor',
          'operator',
          'punctuation',
          'number'
        ],
        d = r.variable[1].inside,
        l = 0;
      l < i.length;
      l++
    )
      d[i[l]] = n.languages.bash[i[l]];
    n.languages.shell = n.languages.bash;
  })(e);
}
var wt = St,
  $n = Te;
Te.displayName = 'css';
Te.aliases = [];
function Te(e) {
  (function (n) {
    var t =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (n.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: 'selector'
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
        }
      },
      url: {
        pattern: RegExp(
          '\\burl\\((?:' +
            t.source +
            '|' +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ')\\)',
          'i'
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' }
        }
      },
      selector: {
        pattern: RegExp(
          `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
            t.source +
            ')*(?=\\s*\\{)'
        ),
        lookbehind: !0
      },
      string: { pattern: t, greedy: !0 },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/
    }),
      (n.languages.css.atrule.inside.rest = n.languages.css);
    var a = n.languages.markup;
    a && (a.tag.addInlined('style', 'css'), a.tag.addAttribute('style', 'css'));
  })(e);
}
var At = $n,
  kt = Le;
Le.displayName = 'jsExtras';
Le.aliases = [];
function Le(e) {
  (function (n) {
    n.languages.insertBefore('javascript', 'function-variable', {
      'method-variable': {
        pattern: RegExp(
          '(\\.\\s*)' +
            n.languages.javascript['function-variable'].pattern.source
        ),
        lookbehind: !0,
        alias: ['function-variable', 'method', 'function', 'property-access']
      }
    }),
      n.languages.insertBefore('javascript', 'function', {
        method: {
          pattern: RegExp('(\\.\\s*)' + n.languages.javascript.function.source),
          lookbehind: !0,
          alias: ['function', 'property-access']
        }
      }),
      n.languages.insertBefore('javascript', 'constant', {
        'known-class-name': [
          {
            pattern:
              /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: 'class-name'
          },
          { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' }
        ]
      });
    function t(f, g) {
      return RegExp(
        f.replace(/<ID>/g, function () {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
            .source;
        }),
        g
      );
    }
    n.languages.insertBefore('javascript', 'keyword', {
      imports: {
        pattern: t(
          /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
            .source
        ),
        lookbehind: !0,
        inside: n.languages.javascript
      },
      exports: {
        pattern: t(
          /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
            .source
        ),
        lookbehind: !0,
        inside: n.languages.javascript
      }
    }),
      n.languages.javascript.keyword.unshift(
        { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
        {
          pattern:
            /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: 'control-flow'
        },
        { pattern: /\bnull\b/, alias: ['null', 'nil'] },
        { pattern: /\bundefined\b/, alias: 'nil' }
      ),
      n.languages.insertBefore('javascript', 'operator', {
        spread: { pattern: /\.{3}/, alias: 'operator' },
        arrow: { pattern: /=>/, alias: 'operator' }
      }),
      n.languages.insertBefore('javascript', 'punctuation', {
        'property-access': {
          pattern: t(/(\.\s*)#?<ID>/.source),
          lookbehind: !0
        },
        'maybe-class-name': {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: !0
        },
        dom: {
          pattern:
            /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: 'variable'
        },
        console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' }
      });
    for (
      var a = [
          'function',
          'function-variable',
          'method',
          'method-variable',
          'property-access'
        ],
        r = 0;
      r < a.length;
      r++
    ) {
      var i = a[r],
        d = n.languages.javascript[i];
      n.util.type(d) === 'RegExp' &&
        (d = n.languages.javascript[i] = { pattern: d });
      var l = d.inside || {};
      (d.inside = l), (l['maybe-class-name'] = /^[A-Z][\s\S]*/);
    }
  })(e);
}
var Et = kt,
  $t = _e;
_e.displayName = 'json';
_e.aliases = ['webmanifest'];
function _e(e) {
  (e.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: !0,
      greedy: !0
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: !0,
      greedy: !0
    },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: 'keyword' }
  }),
    (e.languages.webmanifest = e.languages.json);
}
var Nt = $t,
  Ct = Ie;
Ie.displayName = 'graphql';
Ie.aliases = [];
function Ie(e) {
  (e.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern:
        /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: !0,
      alias: 'string',
      inside: {
        'language-markdown': {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: e.languages.markdown
        }
      }
    },
    string: {
      pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
      greedy: !0
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
    'attr-name': {
      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: !0
    },
    'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    'class-name': {
      pattern:
        /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: !0
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function'
    },
    'definition-mutation': {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function'
    },
    'definition-query': {
      pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function'
    },
    keyword:
      /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    'property-query': /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/
  }),
    e.hooks.add('after-tokenize', function (t) {
      if (t.language !== 'graphql') return;
      var a = t.tokens.filter(function (S) {
          return (
            typeof S != 'string' && S.type !== 'comment' && S.type !== 'scalar'
          );
        }),
        r = 0;
      function i(S) {
        return a[r + S];
      }
      function d(S, N) {
        N = N || 0;
        for (var o = 0; o < S.length; o++) {
          var s = i(o + N);
          if (!s || s.type !== S[o]) return !1;
        }
        return !0;
      }
      function l(S, N) {
        for (var o = 1, s = r; s < a.length; s++) {
          var c = a[s],
            u = c.content;
          if (c.type === 'punctuation' && typeof u == 'string') {
            if (S.test(u)) o++;
            else if (N.test(u) && (o--, o === 0)) return s;
          }
        }
        return -1;
      }
      function f(S, N) {
        var o = S.alias;
        o ? Array.isArray(o) || (S.alias = o = [o]) : (S.alias = o = []),
          o.push(N);
      }
      for (; r < a.length; ) {
        var g = a[r++];
        if (g.type === 'keyword' && g.content === 'mutation') {
          var b = [];
          if (
            d(['definition-mutation', 'punctuation']) &&
            i(1).content === '('
          ) {
            r += 2;
            var v = l(/^\($/, /^\)$/);
            if (v === -1) continue;
            for (; r < v; r++) {
              var m = i(0);
              m.type === 'variable' &&
                (f(m, 'variable-input'), b.push(m.content));
            }
            r = v + 1;
          }
          if (
            d(['punctuation', 'property-query']) &&
            i(0).content === '{' &&
            (r++, f(i(0), 'property-mutation'), b.length > 0)
          ) {
            var w = l(/^\{$/, /^\}$/);
            if (w === -1) continue;
            for (var $ = r; $ < w; $++) {
              var A = a[$];
              A.type === 'variable' &&
                b.indexOf(A.content) >= 0 &&
                f(A, 'variable-input');
            }
          }
        }
      }
    });
}
var Ft = Ct,
  Nn = Oe;
Oe.displayName = 'markup';
Oe.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss'];
function Oe(e) {
  (e.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        'internal-subset': {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
        },
        'special-attr': [],
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
          }
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ }
        }
      }
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
      /&#x?[\da-f]{1,8};/i
    ]
  }),
    (e.languages.markup.tag.inside['attr-value'].inside.entity =
      e.languages.markup.entity),
    (e.languages.markup.doctype.inside['internal-subset'].inside =
      e.languages.markup),
    e.hooks.add('wrap', function (n) {
      n.type === 'entity' &&
        (n.attributes.title = n.content.value.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(e.languages.markup.tag, 'addInlined', {
      value: function (t, a) {
        var r = {};
        (r['language-' + a] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: e.languages[a]
        }),
          (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
        var i = {
          'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r }
        };
        i['language-' + a] = { pattern: /[\s\S]+/, inside: e.languages[a] };
        var d = {};
        (d[t] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function () {
                return t;
              }
            ),
            'i'
          ),
          lookbehind: !0,
          greedy: !0,
          inside: i
        }),
          e.languages.insertBefore('markup', 'cdata', d);
      }
    }),
    Object.defineProperty(e.languages.markup.tag, 'addAttribute', {
      value: function (n, t) {
        e.languages.markup.tag.inside['special-attr'].push({
          pattern: RegExp(
            /(^|["'\s])/.source +
              '(?:' +
              n +
              ')' +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            'i'
          ),
          lookbehind: !0,
          inside: {
            'attr-name': /^[^\s=]+/,
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [t, 'language-' + t],
                  inside: e.languages[t]
                },
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
              }
            }
          }
        });
      }
    }),
    (e.languages.html = e.languages.markup),
    (e.languages.mathml = e.languages.markup),
    (e.languages.svg = e.languages.markup),
    (e.languages.xml = e.languages.extend('markup', {})),
    (e.languages.ssml = e.languages.xml),
    (e.languages.atom = e.languages.xml),
    (e.languages.rss = e.languages.xml);
}
var Tt = Nn,
  Lt = Re;
Re.displayName = 'markdown';
Re.aliases = ['md'];
function Re(e) {
  (function (n) {
    var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function a(v) {
      return (
        (v = v.replace(/<inner>/g, function () {
          return t;
        })),
        RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + v + ')')
      );
    }
    var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
      i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function () {
          return r;
        }
      ),
      d = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
        .source;
    (n.languages.markdown = n.languages.extend('markup', {})),
      n.languages.insertBefore('markdown', 'prolog', {
        'front-matter-block': {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            punctuation: /^---|---$/,
            'front-matter': {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ['yaml', 'language-yaml'],
              inside: n.languages.yaml
            }
          }
        },
        blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
        table: {
          pattern: RegExp('^' + i + d + '(?:' + i + ')*', 'm'),
          inside: {
            'table-data-rows': {
              pattern: RegExp('^(' + i + d + ')(?:' + i + ')*$'),
              lookbehind: !0,
              inside: {
                'table-data': {
                  pattern: RegExp(r),
                  inside: n.languages.markdown
                },
                punctuation: /\|/
              }
            },
            'table-line': {
              pattern: RegExp('^(' + i + ')' + d + '$'),
              lookbehind: !0,
              inside: { punctuation: /\||:?-{3,}:?/ }
            },
            'table-header-row': {
              pattern: RegExp('^' + i + '$'),
              inside: {
                'table-header': {
                  pattern: RegExp(r),
                  alias: 'important',
                  inside: n.languages.markdown
                },
                punctuation: /\|/
              }
            }
          }
        },
        code: [
          {
            pattern:
              /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: 'keyword'
          },
          {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
              'code-block': {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: !0
              },
              'code-language': { pattern: /^(```).+/, lookbehind: !0 },
              punctuation: /```/
            }
          }
        ],
        title: [
          {
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: 'important',
            inside: { punctuation: /==+$|--+$/ }
          },
          {
            pattern: /(^\s*)#.+/m,
            lookbehind: !0,
            alias: 'important',
            inside: { punctuation: /^#+|#+$/ }
          }
        ],
        hr: {
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: !0,
          alias: 'punctuation'
        },
        list: {
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: !0,
          alias: 'punctuation'
        },
        'url-reference': {
          pattern:
            /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
            string:
              /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
          },
          alias: 'url'
        },
        bold: {
          pattern: a(
            /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: !0,
              inside: {}
            },
            punctuation: /\*\*|__/
          }
        },
        italic: {
          pattern: a(
            /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^.)[\s\S]+(?=.$)/,
              lookbehind: !0,
              inside: {}
            },
            punctuation: /[*_]/
          }
        },
        strike: {
          pattern: a(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: !0,
              inside: {}
            },
            punctuation: /~~?/
          }
        },
        'code-snippet': {
          pattern:
            /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: !0,
          greedy: !0,
          alias: ['code', 'keyword']
        },
        url: {
          pattern: a(
            /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            operator: /^!/,
            content: {
              pattern: /(^\[)[^\]]+(?=\])/,
              lookbehind: !0,
              inside: {}
            },
            variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
            url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
            string: {
              pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
              lookbehind: !0
            }
          }
        }
      }),
      ['url', 'bold', 'italic', 'strike'].forEach(function (v) {
        ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (
          m
        ) {
          v !== m &&
            (n.languages.markdown[v].inside.content.inside[m] =
              n.languages.markdown[m]);
        });
      }),
      n.hooks.add('after-tokenize', function (v) {
        if (v.language !== 'markdown' && v.language !== 'md') return;
        function m(w) {
          if (!(!w || typeof w == 'string'))
            for (var $ = 0, A = w.length; $ < A; $++) {
              var S = w[$];
              if (S.type !== 'code') {
                m(S.content);
                continue;
              }
              var N = S.content[1],
                o = S.content[3];
              if (
                N &&
                o &&
                N.type === 'code-language' &&
                o.type === 'code-block' &&
                typeof N.content == 'string'
              ) {
                var s = N.content
                  .replace(/\b#/g, 'sharp')
                  .replace(/\b\+\+/g, 'pp');
                s = (/[a-z][\w-]*/i.exec(s) || [''])[0].toLowerCase();
                var c = 'language-' + s;
                o.alias
                  ? typeof o.alias == 'string'
                    ? (o.alias = [o.alias, c])
                    : o.alias.push(c)
                  : (o.alias = [c]);
              }
            }
        }
        m(v.tokens);
      }),
      n.hooks.add('wrap', function (v) {
        if (v.type === 'code-block') {
          for (var m = '', w = 0, $ = v.classes.length; w < $; w++) {
            var A = v.classes[w],
              S = /language-(.+)/.exec(A);
            if (S) {
              m = S[1];
              break;
            }
          }
          var N = n.languages[m];
          if (N) v.content = n.highlight(b(v.content.value), N, m);
          else if (m && m !== 'none' && n.plugins.autoloader) {
            var o =
              'md-' +
              new Date().valueOf() +
              '-' +
              Math.floor(Math.random() * 1e16);
            (v.attributes.id = o),
              n.plugins.autoloader.loadLanguages(m, function () {
                var s = document.getElementById(o);
                s &&
                  (s.innerHTML = n.highlight(s.textContent, n.languages[m], m));
              });
          }
        }
      });
    var l = RegExp(n.languages.markup.tag.pattern.source, 'gi'),
      f = { amp: '&', lt: '<', gt: '>', quot: '"' },
      g = String.fromCodePoint || String.fromCharCode;
    function b(v) {
      var m = v.replace(l, '');
      return (
        (m = m.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (w, $) {
          if ((($ = $.toLowerCase()), $[0] === '#')) {
            var A;
            return (
              $[1] === 'x'
                ? (A = parseInt($.slice(2), 16))
                : (A = Number($.slice(1))),
              g(A)
            );
          } else {
            var S = f[$];
            return S || w;
          }
        })),
        m
      );
    }
    n.languages.md = n.languages.markdown;
  })(e);
}
var _t = Lt,
  It = je;
je.displayName = 'yaml';
je.aliases = ['yml'];
function je(e) {
  (function (n) {
    var t = /[*&][^\s[\]{},]+/,
      a =
        /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
      r =
        '(?:' +
        a.source +
        '(?:[ 	]+' +
        t.source +
        ')?|' +
        t.source +
        '(?:[ 	]+' +
        a.source +
        ')?)',
      i =
        /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
          /<PLAIN>/g,
          function () {
            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
              .source;
          }
        ),
      d = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    function l(f, g) {
      g = (g || '').replace(/m/g, '') + 'm';
      var b =
        /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
          .replace(/<<prop>>/g, function () {
            return r;
          })
          .replace(/<<value>>/g, function () {
            return f;
          });
      return RegExp(b, g);
    }
    (n.languages.yaml = {
      scalar: {
        pattern: RegExp(
          /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
            /<<prop>>/g,
            function () {
              return r;
            }
          )
        ),
        lookbehind: !0,
        alias: 'string'
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(
          /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
            .replace(/<<prop>>/g, function () {
              return r;
            })
            .replace(/<<key>>/g, function () {
              return '(?:' + i + '|' + d + ')';
            })
        ),
        lookbehind: !0,
        greedy: !0,
        alias: 'atrule'
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: !0,
        alias: 'important'
      },
      datetime: {
        pattern: l(
          /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
            .source
        ),
        lookbehind: !0,
        alias: 'number'
      },
      boolean: {
        pattern: l(/false|true/.source, 'i'),
        lookbehind: !0,
        alias: 'important'
      },
      null: {
        pattern: l(/null|~/.source, 'i'),
        lookbehind: !0,
        alias: 'important'
      },
      string: { pattern: l(d), lookbehind: !0, greedy: !0 },
      number: {
        pattern: l(
          /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
            .source,
          'i'
        ),
        lookbehind: !0
      },
      tag: a,
      important: t,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }),
      (n.languages.yml = n.languages.yaml);
  })(e);
}
var Ot = It,
  Cn = De;
De.displayName = 'typescript';
De.aliases = ['ts'];
function De(e) {
  (function (n) {
    (n.languages.typescript = n.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    })),
      n.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        /\btype\b(?=\s*(?:[\{*]|$))/
      ),
      delete n.languages.typescript.parameter,
      delete n.languages.typescript['literal-property'];
    var t = n.languages.extend('typescript', {});
    delete t['class-name'],
      (n.languages.typescript['class-name'].inside = t),
      n.languages.insertBefore('typescript', 'function', {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            at: { pattern: /^@/, alias: 'operator' },
            function: /^[\s\S]+/
          }
        },
        'generic-function': {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function:
              /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: t }
          }
        }
      }),
      (n.languages.ts = n.languages.typescript);
  })(e);
}
var Rt = Cn,
  jt = En,
  Dt = Cn,
  Mt = Me;
Me.displayName = 'tsx';
Me.aliases = [];
function Me(e) {
  e.register(jt),
    e.register(Dt),
    (function (n) {
      var t = n.util.clone(n.languages.typescript);
      (n.languages.tsx = n.languages.extend('jsx', t)),
        delete n.languages.tsx.parameter,
        delete n.languages.tsx['literal-property'];
      var a = n.languages.tsx.tag;
      (a.pattern = RegExp(
        /(^|[^\w$]|(?=<\/))/.source + '(?:' + a.pattern.source + ')',
        a.pattern.flags
      )),
        (a.lookbehind = !0);
    })(e);
}
var Bt = Mt;
function Ht(e, n) {
  if (e == null) return {};
  var t = pt(e, n),
    a,
    r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      (a = i[r]),
        !(n.indexOf(a) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, a) || (t[a] = e[a]));
  }
  return t;
}
function be(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {},
      a = Object.keys(t);
    typeof Object.getOwnPropertySymbols == 'function' &&
      a.push.apply(
        a,
        Object.getOwnPropertySymbols(t).filter(function (r) {
          return Object.getOwnPropertyDescriptor(t, r).enumerable;
        })
      ),
      a.forEach(function (r) {
        dt(e, r, t[r]);
      });
  }
  return e;
}
function zt(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = arguments.length > 2 ? arguments[2] : void 0;
  return e.reduce(function (a, r) {
    return be({}, a, t[r]);
  }, n);
}
function an(e) {
  return e.join(' ');
}
function Ut(e, n) {
  var t = 0;
  return function (a) {
    return (
      (t += 1),
      a.map(function (r, i) {
        return Fn({
          node: r,
          stylesheet: e,
          useInlineStyles: n,
          key: 'code-segment-'.concat(t, '-').concat(i)
        });
      })
    );
  };
}
function Fn(e) {
  var n = e.node,
    t = e.stylesheet,
    a = e.style,
    r = a === void 0 ? {} : a,
    i = e.useInlineStyles,
    d = e.key,
    l = n.properties,
    f = n.type,
    g = n.tagName,
    b = n.value;
  if (f === 'text') return b;
  if (g) {
    var v = Ut(t, i),
      m =
        i &&
        l.className &&
        l.className.filter(function (S) {
          return !t[S];
        }),
      w = m && m.length ? m : void 0,
      $ = i
        ? be(
            {},
            l,
            { className: w && an(w) },
            { style: zt(l.className, Object.assign({}, l.style, r), t) }
          )
        : be({}, l, { className: an(l.className) }),
      A = v(n.children);
    return J.createElement(g, gt({ key: d }, $), A);
  }
}
var Gt = function (e, n) {
    var t = e.listLanguages();
    return t.indexOf(n) !== -1;
  },
  qt = /\n/g;
function Pt(e) {
  return e.match(qt);
}
function Zt(e) {
  var n = e.lines,
    t = e.startingLineNumber,
    a = e.style;
  return n.map(function (r, i) {
    var d = i + t;
    return J.createElement(
      'span',
      {
        key: 'line-'.concat(i),
        className: 'react-syntax-highlighter-line-number',
        style: typeof a == 'function' ? a(d) : a
      },
      ''.concat(
        d,
        `
`
      )
    );
  });
}
function Wt(e) {
  var n = e.codeString,
    t = e.codeStyle,
    a = e.containerStyle,
    r = a === void 0 ? { float: 'left', paddingRight: '10px' } : a,
    i = e.numberStyle,
    d = i === void 0 ? {} : i,
    l = e.startingLineNumber;
  return J.createElement(
    'code',
    { style: Object.assign({}, t, r) },
    Zt({
      lines: n.replace(/\n$/, '').split(`
`),
      style: d,
      startingLineNumber: l
    })
  );
}
function Xt(e) {
  var n = e.toString().length;
  return ''.concat(n, 'em');
}
function Tn(e, n) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(e),
      className: [
        'comment',
        'linenumber',
        'react-syntax-highlighter-line-number'
      ],
      style: n
    },
    children: [{ type: 'text', value: e }]
  };
}
function Ln(e, n, t) {
  var a = {
      display: 'inline-block',
      minWidth: Xt(t),
      paddingRight: '1em',
      textAlign: 'right',
      userSelect: 'none'
    },
    r = typeof e == 'function' ? e(n) : e,
    i = be({}, a, r);
  return i;
}
function me(e) {
  var n = e.children,
    t = e.lineNumber,
    a = e.lineNumberStyle,
    r = e.largestLineNumber,
    i = e.showInlineLineNumbers,
    d = e.lineProps,
    l = d === void 0 ? {} : d,
    f = e.className,
    g = f === void 0 ? [] : f,
    b = typeof l == 'function' ? l(t) : l;
  if (((b.className = g), t && i)) {
    var v = Ln(a, t, r);
    n.unshift(Tn(t, v));
  }
  return { type: 'element', tagName: 'span', properties: b, children: n };
}
function _n(e) {
  for (
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      a = 0;
    a < e.length;
    a++
  ) {
    var r = e[a];
    if (r.type === 'text') t.push(me({ children: [r], className: n }));
    else if (r.children) {
      var i = n.concat(r.properties.className);
      t = t.concat(_n(r.children, i));
    }
  }
  return t;
}
function Yt(e, n, t, a, r, i, d, l) {
  var f,
    g = _n(e.value),
    b = [],
    v = -1,
    m = 0;
  function w(c, u) {
    var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return me({
      children: c,
      lineNumber: u,
      lineNumberStyle: l,
      largestLineNumber: d,
      showInlineLineNumbers: r,
      lineProps: t,
      className: p
    });
  }
  function $(c, u) {
    if (u && r) {
      var p = Ln(l, u, d);
      c.unshift(Tn(u, p));
    }
    return c;
  }
  function A(c, u) {
    var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return n || p.length > 0 ? w(c, u, p) : $(c, u);
  }
  for (
    var S = function () {
      var u = g[m],
        p = u.children[0].value,
        y = Pt(p);
      if (y) {
        var x = p.split(`
`);
        x.forEach(function (h, k) {
          var C = a && b.length + i,
            j = {
              type: 'text',
              value: ''.concat(
                h,
                `
`
              )
            };
          if (k === 0) {
            var B = g
                .slice(v + 1, m)
                .concat(
                  me({ children: [j], className: u.properties.className })
                ),
              G = A(B, C);
            b.push(G);
          } else if (k === x.length - 1) {
            var z = g[m + 1] && g[m + 1].children && g[m + 1].children[0];
            if (z) {
              var D = { type: 'text', value: ''.concat(h) },
                q = me({ children: [D], className: u.properties.className });
              g.splice(m + 1, 0, q);
            } else {
              var F = [j],
                I = A(F, C, u.properties.className);
              b.push(I);
            }
          } else {
            var _ = [j],
              T = A(_, C, u.properties.className);
            b.push(T);
          }
        }),
          (v = m);
      }
      m++;
    };
    m < g.length;

  )
    S();
  if (v !== g.length - 1) {
    var N = g.slice(v + 1, g.length);
    if (N && N.length) {
      var o = b.length + i,
        s = A(N, o);
      b.push(s);
    }
  }
  return n ? b : (f = []).concat.apply(f, b);
}
function Vt(e) {
  var n = e.rows,
    t = e.stylesheet,
    a = e.useInlineStyles;
  return n.map(function (r, i) {
    return Fn({
      node: r,
      stylesheet: t,
      useInlineStyles: a,
      key: 'code-segement'.concat(i)
    });
  });
}
function In(e) {
  return e && typeof e.highlightAuto != 'undefined';
}
function Kt(e) {
  var n = e.astGenerator,
    t = e.language,
    a = e.code,
    r = e.defaultCodeValue;
  if (In(n)) {
    var i = Gt(n, t);
    return t === 'text'
      ? { value: r, language: 'text' }
      : i
      ? n.highlight(t, a)
      : n.highlightAuto(a);
  }
  try {
    return t && t !== 'text' ? { value: n.highlight(a, t) } : { value: r };
  } catch {
    return { value: r };
  }
}
function Jt(e, n) {
  return function (a) {
    var r = a.language,
      i = a.children,
      d = a.style,
      l = d === void 0 ? n : d,
      f = a.customStyle,
      g = f === void 0 ? {} : f,
      b = a.codeTagProps,
      v =
        b === void 0
          ? {
              className: r ? 'language-'.concat(r) : void 0,
              style: l['code[class*="language-"]']
            }
          : b,
      m = a.useInlineStyles,
      w = m === void 0 ? !0 : m,
      $ = a.showLineNumbers,
      A = $ === void 0 ? !1 : $,
      S = a.showInlineLineNumbers,
      N = S === void 0 ? !1 : S,
      o = a.startingLineNumber,
      s = o === void 0 ? 1 : o,
      c = a.lineNumberContainerStyle,
      u = a.lineNumberStyle,
      p = u === void 0 ? {} : u,
      y = a.wrapLines,
      x = a.lineProps,
      h = x === void 0 ? {} : x,
      k = a.renderer,
      C = a.PreTag,
      j = C === void 0 ? 'pre' : C,
      B = a.CodeTag,
      G = B === void 0 ? 'code' : B,
      z = a.code,
      D = z === void 0 ? (Array.isArray(i) ? i[0] : i) : z,
      q = a.astGenerator,
      F = Ht(a, [
        'language',
        'children',
        'style',
        'customStyle',
        'codeTagProps',
        'useInlineStyles',
        'showLineNumbers',
        'showInlineLineNumbers',
        'startingLineNumber',
        'lineNumberContainerStyle',
        'lineNumberStyle',
        'wrapLines',
        'lineProps',
        'renderer',
        'PreTag',
        'CodeTag',
        'code',
        'astGenerator'
      ]);
    q = q || e;
    var I = A
        ? J.createElement(Wt, {
            containerStyle: c,
            codeStyle: v.style || {},
            numberStyle: p,
            startingLineNumber: s,
            codeString: D
          })
        : null,
      _ = l.hljs || l['pre[class*="language-"]'] || { backgroundColor: '#fff' },
      T = In(q) ? 'hljs' : 'prismjs',
      O = w
        ? Object.assign({}, F, { style: Object.assign({}, _, g) })
        : Object.assign({}, F, {
            className: F.className ? ''.concat(T, ' ').concat(F.className) : T,
            style: Object.assign({}, g)
          });
    if (!q) return J.createElement(j, O, I, J.createElement(G, v, D));
    (y = k && y === void 0 ? !0 : y), (k = k || Vt);
    var te = [{ type: 'text', value: D }],
      M = Kt({ astGenerator: q, language: r, code: D, defaultCodeValue: te });
    M.language === null && (M.value = te);
    var X = M.value.length + s,
      V = Yt(M, y, h, A, N, s, X, p);
    return J.createElement(
      j,
      O,
      J.createElement(
        G,
        v,
        !N && I,
        k({ rows: V, stylesheet: l, useInlineStyles: w })
      )
    );
  };
}
var Qt = na,
  ea = Object.prototype.hasOwnProperty;
function na() {
  for (var e = {}, n = 0; n < arguments.length; n++) {
    var t = arguments[n];
    for (var a in t) ea.call(t, a) && (e[a] = t[a]);
  }
  return e;
}
var On = Rn,
  Be = Rn.prototype;
Be.space = null;
Be.normal = {};
Be.property = {};
function Rn(e, n, t) {
  (this.property = e), (this.normal = n), t && (this.space = t);
}
var rn = Qt,
  ta = On,
  aa = ra;
function ra(e) {
  for (var n = e.length, t = [], a = [], r = -1, i, d; ++r < n; )
    (i = e[r]), t.push(i.property), a.push(i.normal), (d = i.space);
  return new ta(rn.apply(null, t), rn.apply(null, a), d);
}
var He = la;
function la(e) {
  return e.toLowerCase();
}
var jn = Dn,
  Z = Dn.prototype;
Z.space = null;
Z.attribute = null;
Z.property = null;
Z.boolean = !1;
Z.booleanish = !1;
Z.overloadedBoolean = !1;
Z.number = !1;
Z.commaSeparated = !1;
Z.spaceSeparated = !1;
Z.commaOrSpaceSeparated = !1;
Z.mustUseProperty = !1;
Z.defined = !1;
function Dn(e, n) {
  (this.property = e), (this.attribute = n);
}
var Y = {},
  ia = 0;
Y.boolean = ne();
Y.booleanish = ne();
Y.overloadedBoolean = ne();
Y.number = ne();
Y.spaceSeparated = ne();
Y.commaSeparated = ne();
Y.commaOrSpaceSeparated = ne();
function ne() {
  return Math.pow(2, ++ia);
}
var Mn = jn,
  ln = Y,
  Bn = ze;
ze.prototype = new Mn();
ze.prototype.defined = !0;
var Hn = [
    'boolean',
    'booleanish',
    'overloadedBoolean',
    'number',
    'commaSeparated',
    'spaceSeparated',
    'commaOrSpaceSeparated'
  ],
  oa = Hn.length;
function ze(e, n, t, a) {
  var r = -1,
    i;
  for (on(this, 'space', a), Mn.call(this, e, n); ++r < oa; )
    (i = Hn[r]), on(this, i, (t & ln[i]) === ln[i]);
}
function on(e, n, t) {
  t && (e[n] = t);
}
var sn = He,
  sa = On,
  ua = Bn,
  ce = ca;
function ca(e) {
  var n = e.space,
    t = e.mustUseProperty || [],
    a = e.attributes || {},
    r = e.properties,
    i = e.transform,
    d = {},
    l = {},
    f,
    g;
  for (f in r)
    (g = new ua(f, i(a, f), r[f], n)),
      t.indexOf(f) !== -1 && (g.mustUseProperty = !0),
      (d[f] = g),
      (l[sn(f)] = f),
      (l[sn(g.attribute)] = f);
  return new sa(d, l, n);
}
var pa = ce,
  da = pa({
    space: 'xlink',
    transform: ga,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    }
  });
function ga(e, n) {
  return 'xlink:' + n.slice(5).toLowerCase();
}
var fa = ce,
  va = fa({
    space: 'xml',
    transform: ha,
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
  });
function ha(e, n) {
  return 'xml:' + n.slice(3).toLowerCase();
}
var ma = ya;
function ya(e, n) {
  return n in e ? e[n] : n;
}
var ba = ma,
  zn = xa;
function xa(e, n) {
  return ba(e, n.toLowerCase());
}
var Sa = ce,
  wa = zn,
  Aa = Sa({
    space: 'xmlns',
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    transform: wa,
    properties: { xmlns: null, xmlnsXLink: null }
  }),
  Ue = Y,
  ka = ce,
  U = Ue.booleanish,
  P = Ue.number,
  ee = Ue.spaceSeparated,
  Ea = ka({
    transform: $a,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: U,
      ariaAutoComplete: null,
      ariaBusy: U,
      ariaChecked: U,
      ariaColCount: P,
      ariaColIndex: P,
      ariaColSpan: P,
      ariaControls: ee,
      ariaCurrent: null,
      ariaDescribedBy: ee,
      ariaDetails: null,
      ariaDisabled: U,
      ariaDropEffect: ee,
      ariaErrorMessage: null,
      ariaExpanded: U,
      ariaFlowTo: ee,
      ariaGrabbed: U,
      ariaHasPopup: null,
      ariaHidden: U,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: ee,
      ariaLevel: P,
      ariaLive: null,
      ariaModal: U,
      ariaMultiLine: U,
      ariaMultiSelectable: U,
      ariaOrientation: null,
      ariaOwns: ee,
      ariaPlaceholder: null,
      ariaPosInSet: P,
      ariaPressed: U,
      ariaReadOnly: U,
      ariaRelevant: null,
      ariaRequired: U,
      ariaRoleDescription: ee,
      ariaRowCount: P,
      ariaRowIndex: P,
      ariaRowSpan: P,
      ariaSelected: U,
      ariaSetSize: P,
      ariaSort: null,
      ariaValueMax: P,
      ariaValueMin: P,
      ariaValueNow: P,
      ariaValueText: null,
      role: null
    }
  });
function $a(e, n) {
  return n === 'role' ? n : 'aria-' + n.slice(4).toLowerCase();
}
var le = Y,
  Na = ce,
  Ca = zn,
  E = le.boolean,
  Fa = le.overloadedBoolean,
  ie = le.booleanish,
  L = le.number,
  H = le.spaceSeparated,
  ge = le.commaSeparated,
  Ta = Na({
    space: 'html',
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv'
    },
    transform: Ca,
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: ge,
      acceptCharset: H,
      accessKey: H,
      action: null,
      allow: null,
      allowFullScreen: E,
      allowPaymentRequest: E,
      allowUserMedia: E,
      alt: null,
      as: null,
      async: E,
      autoCapitalize: null,
      autoComplete: H,
      autoFocus: E,
      autoPlay: E,
      capture: E,
      charSet: null,
      checked: E,
      cite: null,
      className: H,
      cols: L,
      colSpan: null,
      content: null,
      contentEditable: ie,
      controls: E,
      controlsList: H,
      coords: L | ge,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: E,
      defer: E,
      dir: null,
      dirName: null,
      disabled: E,
      download: Fa,
      draggable: ie,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: E,
      formTarget: null,
      headers: H,
      height: L,
      hidden: E,
      high: L,
      href: null,
      hrefLang: null,
      htmlFor: H,
      httpEquiv: H,
      id: null,
      imageSizes: null,
      imageSrcSet: ge,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: E,
      itemId: null,
      itemProp: H,
      itemRef: H,
      itemScope: E,
      itemType: H,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: E,
      low: L,
      manifest: null,
      max: null,
      maxLength: L,
      media: null,
      method: null,
      min: null,
      minLength: L,
      multiple: E,
      muted: E,
      name: null,
      nonce: null,
      noModule: E,
      noValidate: E,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: E,
      optimum: L,
      pattern: null,
      ping: H,
      placeholder: null,
      playsInline: E,
      poster: null,
      preload: null,
      readOnly: E,
      referrerPolicy: null,
      rel: H,
      required: E,
      reversed: E,
      rows: L,
      rowSpan: L,
      sandbox: H,
      scope: null,
      scoped: E,
      seamless: E,
      selected: E,
      shape: null,
      size: L,
      sizes: null,
      slot: null,
      span: L,
      spellCheck: ie,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: ge,
      start: L,
      step: null,
      style: null,
      tabIndex: L,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: E,
      useMap: null,
      value: ie,
      width: L,
      wrap: null,
      align: null,
      aLink: null,
      archive: H,
      axis: null,
      background: null,
      bgColor: null,
      border: L,
      borderColor: null,
      bottomMargin: L,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: E,
      declare: E,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: L,
      leftMargin: L,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: L,
      marginWidth: L,
      noResize: E,
      noHref: E,
      noShade: E,
      noWrap: E,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: L,
      rules: null,
      scheme: null,
      scrolling: ie,
      standby: null,
      summary: null,
      text: null,
      topMargin: L,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: L,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: E,
      disableRemotePlayback: E,
      prefix: null,
      property: null,
      results: L,
      security: null,
      unselectable: null
    }
  }),
  La = aa,
  _a = da,
  Ia = va,
  Oa = Aa,
  Ra = Ea,
  ja = Ta,
  Da = La([Ia, _a, Oa, Ra, ja]),
  Ma = He,
  Ba = Bn,
  Ha = jn,
  Ge = 'data',
  za = qa,
  Ua = /^data[-\w.:]+$/i,
  Un = /-[a-z]/g,
  Ga = /[A-Z]/g;
function qa(e, n) {
  var t = Ma(n),
    a = n,
    r = Ha;
  return t in e.normal
    ? e.property[e.normal[t]]
    : (t.length > 4 &&
        t.slice(0, 4) === Ge &&
        Ua.test(n) &&
        (n.charAt(4) === '-' ? (a = Pa(n)) : (n = Za(n)), (r = Ba)),
      new r(a, n));
}
function Pa(e) {
  var n = e.slice(5).replace(Un, Xa);
  return Ge + n.charAt(0).toUpperCase() + n.slice(1);
}
function Za(e) {
  var n = e.slice(4);
  return Un.test(n)
    ? e
    : ((n = n.replace(Ga, Wa)), n.charAt(0) !== '-' && (n = '-' + n), Ge + n);
}
function Wa(e) {
  return '-' + e.toLowerCase();
}
function Xa(e) {
  return e.charAt(1).toUpperCase();
}
var Ya = Va,
  un = /[#.]/g;
function Va(e, n) {
  for (var t = e || '', a = n || 'div', r = {}, i = 0, d, l, f; i < t.length; )
    (un.lastIndex = i),
      (f = un.exec(t)),
      (d = t.slice(i, f ? f.index : t.length)),
      d &&
        (l
          ? l === '#'
            ? (r.id = d)
            : r.className
            ? r.className.push(d)
            : (r.className = [d])
          : (a = d),
        (i += d.length)),
      f && ((l = f[0]), i++);
  return { type: 'element', tagName: a, properties: r, children: [] };
}
var qe = {};
qe.parse = Qa;
qe.stringify = er;
var cn = '',
  Ka = ' ',
  Ja = /[ \t\n\r\f]+/g;
function Qa(e) {
  var n = String(e || cn).trim();
  return n === cn ? [] : n.split(Ja);
}
function er(e) {
  return e.join(Ka).trim();
}
var Pe = {};
Pe.parse = nr;
Pe.stringify = tr;
var Ee = ',',
  pn = ' ',
  se = '';
function nr(e) {
  for (
    var n = [], t = String(e || se), a = t.indexOf(Ee), r = 0, i = !1, d;
    !i;

  )
    a === -1 && ((a = t.length), (i = !0)),
      (d = t.slice(r, a).trim()),
      (d || !i) && n.push(d),
      (r = a + 1),
      (a = t.indexOf(Ee, r));
  return n;
}
function tr(e, n) {
  var t = n || {},
    a = t.padLeft === !1 ? se : pn,
    r = t.padRight ? pn : se;
  return (
    e[e.length - 1] === se && (e = e.concat(se)), e.join(r + Ee + a).trim()
  );
}
var ar = za,
  dn = He,
  rr = Ya,
  gn = qe.parse,
  fn = Pe.parse,
  lr = or,
  ir = {}.hasOwnProperty;
function or(e, n, t) {
  var a = t ? dr(t) : null;
  return r;
  function r(d, l) {
    var f = rr(d, n),
      g = Array.prototype.slice.call(arguments, 2),
      b = f.tagName.toLowerCase(),
      v;
    if (
      ((f.tagName = a && ir.call(a, b) ? a[b] : b),
      l && sr(l, f) && (g.unshift(l), (l = null)),
      l)
    )
      for (v in l) i(f.properties, v, l[v]);
    return (
      Gn(f.children, g),
      f.tagName === 'template' &&
        ((f.content = { type: 'root', children: f.children }),
        (f.children = [])),
      f
    );
  }
  function i(d, l, f) {
    var g, b, v;
    f == null ||
      f !== f ||
      ((g = ar(e, l)),
      (b = g.property),
      (v = f),
      typeof v == 'string' &&
        (g.spaceSeparated
          ? (v = gn(v))
          : g.commaSeparated
          ? (v = fn(v))
          : g.commaOrSpaceSeparated && (v = gn(fn(v).join(' ')))),
      b === 'style' && typeof f != 'string' && (v = pr(v)),
      b === 'className' && d.className && (v = d.className.concat(v)),
      (d[b] = cr(g, b, v)));
  }
}
function sr(e, n) {
  return typeof e == 'string' || 'length' in e || ur(n.tagName, e);
}
function ur(e, n) {
  var t = n.type;
  return e === 'input' || !t || typeof t != 'string'
    ? !1
    : typeof n.children == 'object' && 'length' in n.children
    ? !0
    : ((t = t.toLowerCase()),
      e === 'button'
        ? t !== 'menu' && t !== 'submit' && t !== 'reset' && t !== 'button'
        : 'value' in n);
}
function Gn(e, n) {
  var t, a;
  if (typeof n == 'string' || typeof n == 'number') {
    e.push({ type: 'text', value: String(n) });
    return;
  }
  if (typeof n == 'object' && 'length' in n) {
    for (t = -1, a = n.length; ++t < a; ) Gn(e, n[t]);
    return;
  }
  if (typeof n != 'object' || !('type' in n))
    throw new Error('Expected node, nodes, or string, got `' + n + '`');
  e.push(n);
}
function cr(e, n, t) {
  var a, r, i;
  if (typeof t != 'object' || !('length' in t)) return vn(e, n, t);
  for (r = t.length, a = -1, i = []; ++a < r; ) i[a] = vn(e, n, t[a]);
  return i;
}
function vn(e, n, t) {
  var a = t;
  return (
    e.number || e.positiveNumber
      ? !isNaN(a) && a !== '' && (a = Number(a))
      : (e.boolean || e.overloadedBoolean) &&
        typeof a == 'string' &&
        (a === '' || dn(t) === dn(n)) &&
        (a = !0),
    a
  );
}
function pr(e) {
  var n = [],
    t;
  for (t in e) n.push([t, e[t]].join(': '));
  return n.join('; ');
}
function dr(e) {
  for (var n = e.length, t = -1, a = {}, r; ++t < n; )
    (r = e[t]), (a[r.toLowerCase()] = r);
  return a;
}
var gr = Da,
  fr = lr,
  qn = fr(gr, 'div');
qn.displayName = 'html';
var vr = qn,
  hr = vr;
const mr = '\xC6',
  yr = '&',
  br = '\xC1',
  xr = '\xC2',
  Sr = '\xC0',
  wr = '\xC5',
  Ar = '\xC3',
  kr = '\xC4',
  Er = '\xA9',
  $r = '\xC7',
  Nr = '\xD0',
  Cr = '\xC9',
  Fr = '\xCA',
  Tr = '\xC8',
  Lr = '\xCB',
  _r = '>',
  Ir = '\xCD',
  Or = '\xCE',
  Rr = '\xCC',
  jr = '\xCF',
  Dr = '<',
  Mr = '\xD1',
  Br = '\xD3',
  Hr = '\xD4',
  zr = '\xD2',
  Ur = '\xD8',
  Gr = '\xD5',
  qr = '\xD6',
  Pr = '"',
  Zr = '\xAE',
  Wr = '\xDE',
  Xr = '\xDA',
  Yr = '\xDB',
  Vr = '\xD9',
  Kr = '\xDC',
  Jr = '\xDD',
  Qr = '\xE1',
  el = '\xE2',
  nl = '\xB4',
  tl = '\xE6',
  al = '\xE0',
  rl = '&',
  ll = '\xE5',
  il = '\xE3',
  ol = '\xE4',
  sl = '\xA6',
  ul = '\xE7',
  cl = '\xB8',
  pl = '\xA2',
  dl = '\xA9',
  gl = '\xA4',
  fl = '\xB0',
  vl = '\xF7',
  hl = '\xE9',
  ml = '\xEA',
  yl = '\xE8',
  bl = '\xF0',
  xl = '\xEB',
  Sl = '\xBD',
  wl = '\xBC',
  Al = '\xBE',
  kl = '>',
  El = '\xED',
  $l = '\xEE',
  Nl = '\xA1',
  Cl = '\xEC',
  Fl = '\xBF',
  Tl = '\xEF',
  Ll = '\xAB',
  _l = '<',
  Il = '\xAF',
  Ol = '\xB5',
  Rl = '\xB7',
  jl = '\xA0',
  Dl = '\xAC',
  Ml = '\xF1',
  Bl = '\xF3',
  Hl = '\xF4',
  zl = '\xF2',
  Ul = '\xAA',
  Gl = '\xBA',
  ql = '\xF8',
  Pl = '\xF5',
  Zl = '\xF6',
  Wl = '\xB6',
  Xl = '\xB1',
  Yl = '\xA3',
  Vl = '"',
  Kl = '\xBB',
  Jl = '\xAE',
  Ql = '\xA7',
  ei = '\xAD',
  ni = '\xB9',
  ti = '\xB2',
  ai = '\xB3',
  ri = '\xDF',
  li = '\xFE',
  ii = '\xD7',
  oi = '\xFA',
  si = '\xFB',
  ui = '\xF9',
  ci = '\xA8',
  pi = '\xFC',
  di = '\xFD',
  gi = '\xA5',
  fi = '\xFF';
var vi = {
    AElig: mr,
    AMP: yr,
    Aacute: br,
    Acirc: xr,
    Agrave: Sr,
    Aring: wr,
    Atilde: Ar,
    Auml: kr,
    COPY: Er,
    Ccedil: $r,
    ETH: Nr,
    Eacute: Cr,
    Ecirc: Fr,
    Egrave: Tr,
    Euml: Lr,
    GT: _r,
    Iacute: Ir,
    Icirc: Or,
    Igrave: Rr,
    Iuml: jr,
    LT: Dr,
    Ntilde: Mr,
    Oacute: Br,
    Ocirc: Hr,
    Ograve: zr,
    Oslash: Ur,
    Otilde: Gr,
    Ouml: qr,
    QUOT: Pr,
    REG: Zr,
    THORN: Wr,
    Uacute: Xr,
    Ucirc: Yr,
    Ugrave: Vr,
    Uuml: Kr,
    Yacute: Jr,
    aacute: Qr,
    acirc: el,
    acute: nl,
    aelig: tl,
    agrave: al,
    amp: rl,
    aring: ll,
    atilde: il,
    auml: ol,
    brvbar: sl,
    ccedil: ul,
    cedil: cl,
    cent: pl,
    copy: dl,
    curren: gl,
    deg: fl,
    divide: vl,
    eacute: hl,
    ecirc: ml,
    egrave: yl,
    eth: bl,
    euml: xl,
    frac12: Sl,
    frac14: wl,
    frac34: Al,
    gt: kl,
    iacute: El,
    icirc: $l,
    iexcl: Nl,
    igrave: Cl,
    iquest: Fl,
    iuml: Tl,
    laquo: Ll,
    lt: _l,
    macr: Il,
    micro: Ol,
    middot: Rl,
    nbsp: jl,
    not: Dl,
    ntilde: Ml,
    oacute: Bl,
    ocirc: Hl,
    ograve: zl,
    ordf: Ul,
    ordm: Gl,
    oslash: ql,
    otilde: Pl,
    ouml: Zl,
    para: Wl,
    plusmn: Xl,
    pound: Yl,
    quot: Vl,
    raquo: Kl,
    reg: Jl,
    sect: Ql,
    shy: ei,
    sup1: ni,
    sup2: ti,
    sup3: ai,
    szlig: ri,
    thorn: li,
    times: ii,
    uacute: oi,
    ucirc: si,
    ugrave: ui,
    uml: ci,
    uuml: pi,
    yacute: di,
    yen: gi,
    yuml: fi
  },
  hi = {
    0: '\uFFFD',
    128: '\u20AC',
    130: '\u201A',
    131: '\u0192',
    132: '\u201E',
    133: '\u2026',
    134: '\u2020',
    135: '\u2021',
    136: '\u02C6',
    137: '\u2030',
    138: '\u0160',
    139: '\u2039',
    140: '\u0152',
    142: '\u017D',
    145: '\u2018',
    146: '\u2019',
    147: '\u201C',
    148: '\u201D',
    149: '\u2022',
    150: '\u2013',
    151: '\u2014',
    152: '\u02DC',
    153: '\u2122',
    154: '\u0161',
    155: '\u203A',
    156: '\u0153',
    158: '\u017E',
    159: '\u0178'
  },
  Pn = mi;
function mi(e) {
  var n = typeof e == 'string' ? e.charCodeAt(0) : e;
  return n >= 48 && n <= 57;
}
var yi = bi;
function bi(e) {
  var n = typeof e == 'string' ? e.charCodeAt(0) : e;
  return (n >= 97 && n <= 102) || (n >= 65 && n <= 70) || (n >= 48 && n <= 57);
}
var xi = Si;
function Si(e) {
  var n = typeof e == 'string' ? e.charCodeAt(0) : e;
  return (n >= 97 && n <= 122) || (n >= 65 && n <= 90);
}
var wi = xi,
  Ai = Pn,
  ki = Ei;
function Ei(e) {
  return wi(e) || Ai(e);
}
var fe,
  $i = 59,
  Ni = Ci;
function Ci(e) {
  var n = '&' + e + ';',
    t;
  return (
    (fe = fe || document.createElement('i')),
    (fe.innerHTML = n),
    (t = fe.textContent),
    (t.charCodeAt(t.length - 1) === $i && e !== 'semi') || t === n ? !1 : t
  );
}
var hn = vi,
  mn = hi,
  Fi = Pn,
  Ti = yi,
  Zn = ki,
  Li = Ni,
  _i = Pi,
  Ii = {}.hasOwnProperty,
  ae = String.fromCharCode,
  Oi = Function.prototype,
  yn = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: !1,
    nonTerminated: !0
  },
  Ri = 9,
  bn = 10,
  ji = 12,
  Di = 32,
  xn = 38,
  Mi = 59,
  Bi = 60,
  Hi = 61,
  zi = 35,
  Ui = 88,
  Gi = 120,
  qi = 65533,
  re = 'named',
  Ze = 'hexadecimal',
  We = 'decimal',
  Xe = {};
Xe[Ze] = 16;
Xe[We] = 10;
var Se = {};
Se[re] = Zn;
Se[We] = Fi;
Se[Ze] = Ti;
var Wn = 1,
  Xn = 2,
  Yn = 3,
  Vn = 4,
  Kn = 5,
  $e = 6,
  Jn = 7,
  Q = {};
Q[Wn] = 'Named character references must be terminated by a semicolon';
Q[Xn] = 'Numeric character references must be terminated by a semicolon';
Q[Yn] = 'Named character references cannot be empty';
Q[Vn] = 'Numeric character references cannot be empty';
Q[Kn] = 'Named character references must be known';
Q[$e] = 'Numeric character references cannot be disallowed';
Q[Jn] =
  'Numeric character references cannot be outside the permissible Unicode range';
function Pi(e, n) {
  var t = {},
    a,
    r;
  n || (n = {});
  for (r in yn) (a = n[r]), (t[r] = a == null ? yn[r] : a);
  return (
    (t.position.indent || t.position.start) &&
      ((t.indent = t.position.indent || []), (t.position = t.position.start)),
    Zi(e, t)
  );
}
function Zi(e, n) {
  var t = n.additional,
    a = n.nonTerminated,
    r = n.text,
    i = n.reference,
    d = n.warning,
    l = n.textContext,
    f = n.referenceContext,
    g = n.warningContext,
    b = n.position,
    v = n.indent || [],
    m = e.length,
    w = 0,
    $ = -1,
    A = b.column || 1,
    S = b.line || 1,
    N = '',
    o = [],
    s,
    c,
    u,
    p,
    y,
    x,
    h,
    k,
    C,
    j,
    B,
    G,
    z,
    D,
    q,
    F,
    I,
    _,
    T;
  for (
    typeof t == 'string' && (t = t.charCodeAt(0)),
      F = O(),
      k = d ? te : Oi,
      w--,
      m++;
    ++w < m;

  )
    if ((y === bn && (A = v[$] || 1), (y = e.charCodeAt(w)), y === xn)) {
      if (
        ((h = e.charCodeAt(w + 1)),
        h === Ri ||
          h === bn ||
          h === ji ||
          h === Di ||
          h === xn ||
          h === Bi ||
          h !== h ||
          (t && h === t))
      ) {
        (N += ae(y)), A++;
        continue;
      }
      for (
        z = w + 1,
          G = z,
          T = z,
          h === zi
            ? ((T = ++G),
              (h = e.charCodeAt(T)),
              h === Ui || h === Gi ? ((D = Ze), (T = ++G)) : (D = We))
            : (D = re),
          s = '',
          B = '',
          p = '',
          q = Se[D],
          T--;
        ++T < m && ((h = e.charCodeAt(T)), !!q(h));

      )
        (p += ae(h)), D === re && Ii.call(hn, p) && ((s = p), (B = hn[p]));
      (u = e.charCodeAt(T) === Mi),
        u && (T++, (c = D === re ? Li(p) : !1), c && ((s = p), (B = c))),
        (_ = 1 + T - z),
        (!u && !a) ||
          (p
            ? D === re
              ? (u && !B
                  ? k(Kn, 1)
                  : (s !== p && ((T = G + s.length), (_ = 1 + T - G), (u = !1)),
                    u ||
                      ((C = s ? Wn : Yn),
                      n.attribute
                        ? ((h = e.charCodeAt(T)),
                          h === Hi
                            ? (k(C, _), (B = null))
                            : Zn(h)
                            ? (B = null)
                            : k(C, _))
                        : k(C, _))),
                (x = B))
              : (u || k(Xn, _),
                (x = parseInt(p, Xe[D])),
                Wi(x)
                  ? (k(Jn, _), (x = ae(qi)))
                  : x in mn
                  ? (k($e, _), (x = mn[x]))
                  : ((j = ''),
                    Xi(x) && k($e, _),
                    x > 65535 &&
                      ((x -= 65536),
                      (j += ae((x >>> 10) | 55296)),
                      (x = 56320 | (x & 1023))),
                    (x = j + ae(x))))
            : D !== re && k(Vn, _)),
        x
          ? (M(),
            (F = O()),
            (w = T - 1),
            (A += T - z + 1),
            o.push(x),
            (I = O()),
            I.offset++,
            i && i.call(f, x, { start: F, end: I }, e.slice(z - 1, T)),
            (F = I))
          : ((p = e.slice(z - 1, T)), (N += p), (A += p.length), (w = T - 1));
    } else y === 10 && (S++, $++, (A = 0)), y === y ? ((N += ae(y)), A++) : M();
  return o.join('');
  function O() {
    return { line: S, column: A, offset: w + (b.offset || 0) };
  }
  function te(X, V) {
    var K = O();
    (K.column += V), (K.offset += V), d.call(g, Q[X], K, X);
  }
  function M() {
    N && (o.push(N), r && r.call(l, N, { start: F, end: O() }), (N = ''));
  }
}
function Wi(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111;
}
function Xi(e) {
  return (
    (e >= 1 && e <= 8) ||
    e === 11 ||
    (e >= 13 && e <= 31) ||
    (e >= 127 && e <= 159) ||
    (e >= 64976 && e <= 65007) ||
    (e & 65535) === 65535 ||
    (e & 65535) === 65534
  );
}
var Qn = { exports: {} };
(function (e) {
  var n =
    typeof window != 'undefined'
      ? window
      : typeof WorkerGlobalScope != 'undefined' &&
        self instanceof WorkerGlobalScope
      ? self
      : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */ var t = (function (a) {
    var r = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      i = 0,
      d = {},
      l = {
        manual: a.Prism && a.Prism.manual,
        disableWorkerMessageHandler:
          a.Prism && a.Prism.disableWorkerMessageHandler,
        util: {
          encode: function o(s) {
            return s instanceof f
              ? new f(s.type, o(s.content), s.alias)
              : Array.isArray(s)
              ? s.map(o)
              : s
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ');
          },
          type: function (o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          objId: function (o) {
            return (
              o.__id || Object.defineProperty(o, '__id', { value: ++i }), o.__id
            );
          },
          clone: function o(s, c) {
            c = c || {};
            var u, p;
            switch (l.util.type(s)) {
              case 'Object':
                if (((p = l.util.objId(s)), c[p])) return c[p];
                (u = {}), (c[p] = u);
                for (var y in s) s.hasOwnProperty(y) && (u[y] = o(s[y], c));
                return u;
              case 'Array':
                return (
                  (p = l.util.objId(s)),
                  c[p]
                    ? c[p]
                    : ((u = []),
                      (c[p] = u),
                      s.forEach(function (x, h) {
                        u[h] = o(x, c);
                      }),
                      u)
                );
              default:
                return s;
            }
          },
          getLanguage: function (o) {
            for (; o; ) {
              var s = r.exec(o.className);
              if (s) return s[1].toLowerCase();
              o = o.parentElement;
            }
            return 'none';
          },
          setLanguage: function (o, s) {
            (o.className = o.className.replace(RegExp(r, 'gi'), '')),
              o.classList.add('language-' + s);
          },
          currentScript: function () {
            if (typeof document == 'undefined') return null;
            if ('currentScript' in document && 1 < 2)
              return document.currentScript;
            try {
              throw new Error();
            } catch (u) {
              var o = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(u.stack) ||
                [])[1];
              if (o) {
                var s = document.getElementsByTagName('script');
                for (var c in s) if (s[c].src == o) return s[c];
              }
              return null;
            }
          },
          isActive: function (o, s, c) {
            for (var u = 'no-' + s; o; ) {
              var p = o.classList;
              if (p.contains(s)) return !0;
              if (p.contains(u)) return !1;
              o = o.parentElement;
            }
            return !!c;
          }
        },
        languages: {
          plain: d,
          plaintext: d,
          text: d,
          txt: d,
          extend: function (o, s) {
            var c = l.util.clone(l.languages[o]);
            for (var u in s) c[u] = s[u];
            return c;
          },
          insertBefore: function (o, s, c, u) {
            u = u || l.languages;
            var p = u[o],
              y = {};
            for (var x in p)
              if (p.hasOwnProperty(x)) {
                if (x == s)
                  for (var h in c) c.hasOwnProperty(h) && (y[h] = c[h]);
                c.hasOwnProperty(x) || (y[x] = p[x]);
              }
            var k = u[o];
            return (
              (u[o] = y),
              l.languages.DFS(l.languages, function (C, j) {
                j === k && C != o && (this[C] = y);
              }),
              y
            );
          },
          DFS: function o(s, c, u, p) {
            p = p || {};
            var y = l.util.objId;
            for (var x in s)
              if (s.hasOwnProperty(x)) {
                c.call(s, x, s[x], u || x);
                var h = s[x],
                  k = l.util.type(h);
                k === 'Object' && !p[y(h)]
                  ? ((p[y(h)] = !0), o(h, c, null, p))
                  : k === 'Array' &&
                    !p[y(h)] &&
                    ((p[y(h)] = !0), o(h, c, x, p));
              }
          }
        },
        plugins: {},
        highlightAll: function (o, s) {
          l.highlightAllUnder(document, o, s);
        },
        highlightAllUnder: function (o, s, c) {
          var u = {
            callback: c,
            container: o,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          l.hooks.run('before-highlightall', u),
            (u.elements = Array.prototype.slice.apply(
              u.container.querySelectorAll(u.selector)
            )),
            l.hooks.run('before-all-elements-highlight', u);
          for (var p = 0, y; (y = u.elements[p++]); )
            l.highlightElement(y, s === !0, u.callback);
        },
        highlightElement: function (o, s, c) {
          var u = l.util.getLanguage(o),
            p = l.languages[u];
          l.util.setLanguage(o, u);
          var y = o.parentElement;
          y && y.nodeName.toLowerCase() === 'pre' && l.util.setLanguage(y, u);
          var x = o.textContent,
            h = { element: o, language: u, grammar: p, code: x };
          function k(j) {
            (h.highlightedCode = j),
              l.hooks.run('before-insert', h),
              (h.element.innerHTML = h.highlightedCode),
              l.hooks.run('after-highlight', h),
              l.hooks.run('complete', h),
              c && c.call(h.element);
          }
          if (
            (l.hooks.run('before-sanity-check', h),
            (y = h.element.parentElement),
            y &&
              y.nodeName.toLowerCase() === 'pre' &&
              !y.hasAttribute('tabindex') &&
              y.setAttribute('tabindex', '0'),
            !h.code)
          ) {
            l.hooks.run('complete', h), c && c.call(h.element);
            return;
          }
          if ((l.hooks.run('before-highlight', h), !h.grammar)) {
            k(l.util.encode(h.code));
            return;
          }
          if (s && a.Worker) {
            var C = new Worker(l.filename);
            (C.onmessage = function (j) {
              k(j.data);
            }),
              C.postMessage(
                JSON.stringify({
                  language: h.language,
                  code: h.code,
                  immediateClose: !0
                })
              );
          } else k(l.highlight(h.code, h.grammar, h.language));
        },
        highlight: function (o, s, c) {
          var u = { code: o, grammar: s, language: c };
          if ((l.hooks.run('before-tokenize', u), !u.grammar))
            throw new Error(
              'The language "' + u.language + '" has no grammar.'
            );
          return (
            (u.tokens = l.tokenize(u.code, u.grammar)),
            l.hooks.run('after-tokenize', u),
            f.stringify(l.util.encode(u.tokens), u.language)
          );
        },
        tokenize: function (o, s) {
          var c = s.rest;
          if (c) {
            for (var u in c) s[u] = c[u];
            delete s.rest;
          }
          var p = new v();
          return m(p, p.head, o), b(o, p, s, p.head, 0), $(p);
        },
        hooks: {
          all: {},
          add: function (o, s) {
            var c = l.hooks.all;
            (c[o] = c[o] || []), c[o].push(s);
          },
          run: function (o, s) {
            var c = l.hooks.all[o];
            if (!(!c || !c.length)) for (var u = 0, p; (p = c[u++]); ) p(s);
          }
        },
        Token: f
      };
    a.Prism = l;
    function f(o, s, c, u) {
      (this.type = o),
        (this.content = s),
        (this.alias = c),
        (this.length = (u || '').length | 0);
    }
    f.stringify = function o(s, c) {
      if (typeof s == 'string') return s;
      if (Array.isArray(s)) {
        var u = '';
        return (
          s.forEach(function (k) {
            u += o(k, c);
          }),
          u
        );
      }
      var p = {
          type: s.type,
          content: o(s.content, c),
          tag: 'span',
          classes: ['token', s.type],
          attributes: {},
          language: c
        },
        y = s.alias;
      y &&
        (Array.isArray(y)
          ? Array.prototype.push.apply(p.classes, y)
          : p.classes.push(y)),
        l.hooks.run('wrap', p);
      var x = '';
      for (var h in p.attributes)
        x +=
          ' ' +
          h +
          '="' +
          (p.attributes[h] || '').replace(/"/g, '&quot;') +
          '"';
      return (
        '<' +
        p.tag +
        ' class="' +
        p.classes.join(' ') +
        '"' +
        x +
        '>' +
        p.content +
        '</' +
        p.tag +
        '>'
      );
    };
    function g(o, s, c, u) {
      o.lastIndex = s;
      var p = o.exec(c);
      if (p && u && p[1]) {
        var y = p[1].length;
        (p.index += y), (p[0] = p[0].slice(y));
      }
      return p;
    }
    function b(o, s, c, u, p, y) {
      for (var x in c)
        if (!(!c.hasOwnProperty(x) || !c[x])) {
          var h = c[x];
          h = Array.isArray(h) ? h : [h];
          for (var k = 0; k < h.length; ++k) {
            if (y && y.cause == x + ',' + k) return;
            var C = h[k],
              j = C.inside,
              B = !!C.lookbehind,
              G = !!C.greedy,
              z = C.alias;
            if (G && !C.pattern.global) {
              var D = C.pattern.toString().match(/[imsuy]*$/)[0];
              C.pattern = RegExp(C.pattern.source, D + 'g');
            }
            for (
              var q = C.pattern || C, F = u.next, I = p;
              F !== s.tail && !(y && I >= y.reach);
              I += F.value.length, F = F.next
            ) {
              var _ = F.value;
              if (s.length > o.length) return;
              if (!(_ instanceof f)) {
                var T = 1,
                  O;
                if (G) {
                  if (((O = g(q, I, o, B)), !O || O.index >= o.length)) break;
                  var V = O.index,
                    te = O.index + O[0].length,
                    M = I;
                  for (M += F.value.length; V >= M; )
                    (F = F.next), (M += F.value.length);
                  if (((M -= F.value.length), (I = M), F.value instanceof f))
                    continue;
                  for (
                    var X = F;
                    X !== s.tail && (M < te || typeof X.value == 'string');
                    X = X.next
                  )
                    T++, (M += X.value.length);
                  T--, (_ = o.slice(I, M)), (O.index -= I);
                } else if (((O = g(q, 0, _, B)), !O)) continue;
                var V = O.index,
                  K = O[0],
                  we = _.slice(0, V),
                  Je = _.slice(V + K.length),
                  Ae = I + _.length;
                y && Ae > y.reach && (y.reach = Ae);
                var de = F.prev;
                we && ((de = m(s, de, we)), (I += we.length)), w(s, de, T);
                var lt = new f(x, j ? l.tokenize(K, j) : K, z, K);
                if (((F = m(s, de, lt)), Je && m(s, F, Je), T > 1)) {
                  var ke = { cause: x + ',' + k, reach: Ae };
                  b(o, s, c, F.prev, I, ke),
                    y && ke.reach > y.reach && (y.reach = ke.reach);
                }
              }
            }
          }
        }
    }
    function v() {
      var o = { value: null, prev: null, next: null },
        s = { value: null, prev: o, next: null };
      (o.next = s), (this.head = o), (this.tail = s), (this.length = 0);
    }
    function m(o, s, c) {
      var u = s.next,
        p = { value: c, prev: s, next: u };
      return (s.next = p), (u.prev = p), o.length++, p;
    }
    function w(o, s, c) {
      for (var u = s.next, p = 0; p < c && u !== o.tail; p++) u = u.next;
      (s.next = u), (u.prev = s), (o.length -= p);
    }
    function $(o) {
      for (var s = [], c = o.head.next; c !== o.tail; )
        s.push(c.value), (c = c.next);
      return s;
    }
    if (!a.document)
      return (
        a.addEventListener &&
          (l.disableWorkerMessageHandler ||
            a.addEventListener(
              'message',
              function (o) {
                var s = JSON.parse(o.data),
                  c = s.language,
                  u = s.code,
                  p = s.immediateClose;
                a.postMessage(l.highlight(u, l.languages[c], c)),
                  p && a.close();
              },
              !1
            )),
        l
      );
    var A = l.util.currentScript();
    A &&
      ((l.filename = A.src), A.hasAttribute('data-manual') && (l.manual = !0));
    function S() {
      l.manual || l.highlightAll();
    }
    if (!l.manual) {
      var N = document.readyState;
      N === 'loading' || (N === 'interactive' && A && A.defer)
        ? document.addEventListener('DOMContentLoaded', S)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(S)
        : window.setTimeout(S, 16);
    }
    return l;
  })(n);
  e.exports && (e.exports = t), typeof ye != 'undefined' && (ye.Prism = t);
})(Qn);
var Yi = Ye;
Ye.displayName = 'clike';
Ye.aliases = [];
function Ye(e) {
  e.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ }
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
}
var Vi = Ve;
Ve.displayName = 'javascript';
Ve.aliases = ['js'];
function Ve(e) {
  (e.languages.javascript = e.languages.extend('clike', {
    'class-name': [
      e.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          '(?:' +
          (/NaN|Infinity/.source +
            '|' +
            /0[bB][01]+(?:_[01]+)*n?/.source +
            '|' +
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
            '|' +
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
            '|' +
            /\d+(?:_\d+)*n/.source +
            '|' +
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
              .source) +
          ')' +
          /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  })),
    (e.languages.javascript['class-name'][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    e.languages.insertBefore('javascript', 'keyword', {
      regex: {
        pattern:
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          'regex-source': {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: 'language-regex',
            inside: e.languages.regex
          },
          'regex-delimiter': /^\/|\/$/,
          'regex-flags': /^[a-z]+$/
        }
      },
      'function-variable': {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function'
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: e.languages.javascript
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: e.languages.javascript
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: e.languages.javascript
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: e.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }),
    e.languages.insertBefore('javascript', 'string', {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
      'template-string': {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\$\{|\}$/,
                alias: 'punctuation'
              },
              rest: e.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      'string-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: 'property'
      }
    }),
    e.languages.insertBefore('javascript', 'operator', {
      'literal-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: 'property'
      }
    }),
    e.languages.markup &&
      (e.languages.markup.tag.addInlined('script', 'javascript'),
      e.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        'javascript'
      )),
    (e.languages.js = e.languages.javascript);
}
var ue =
    typeof globalThis == 'object'
      ? globalThis
      : typeof self == 'object'
      ? self
      : typeof window == 'object'
      ? window
      : typeof ye == 'object'
      ? ye
      : {},
  Ki = go();
ue.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
var Ji = hr,
  Qi = _i,
  et = Qn.exports,
  eo = Nn,
  no = $n,
  to = Yi,
  ao = Vi;
Ki();
var Ke = {}.hasOwnProperty;
function nt() {}
nt.prototype = et;
var R = new nt(),
  tt = R;
R.highlight = lo;
R.register = pe;
R.alias = ro;
R.registered = io;
R.listLanguages = oo;
pe(eo);
pe(no);
pe(to);
pe(ao);
R.util.encode = co;
R.Token.stringify = so;
function pe(e) {
  if (typeof e != 'function' || !e.displayName)
    throw new Error('Expected `function` for `grammar`, got `' + e + '`');
  R.languages[e.displayName] === void 0 && e(R);
}
function ro(e, n) {
  var t = R.languages,
    a = e,
    r,
    i,
    d,
    l;
  n && ((a = {}), (a[e] = n));
  for (r in a)
    for (
      i = a[r], i = typeof i == 'string' ? [i] : i, d = i.length, l = -1;
      ++l < d;

    )
      t[i[l]] = t[r];
}
function lo(e, n) {
  var t = et.highlight,
    a;
  if (typeof e != 'string')
    throw new Error('Expected `string` for `value`, got `' + e + '`');
  if (R.util.type(n) === 'Object') (a = n), (n = null);
  else {
    if (typeof n != 'string')
      throw new Error('Expected `string` for `name`, got `' + n + '`');
    if (Ke.call(R.languages, n)) a = R.languages[n];
    else throw new Error('Unknown language: `' + n + '` is not registered');
  }
  return t.call(this, e, a, n);
}
function io(e) {
  if (typeof e != 'string')
    throw new Error('Expected `string` for `language`, got `' + e + '`');
  return Ke.call(R.languages, e);
}
function oo() {
  var e = R.languages,
    n = [],
    t;
  for (t in e) Ke.call(e, t) && typeof e[t] == 'object' && n.push(t);
  return n;
}
function so(e, n, t) {
  var a;
  return typeof e == 'string'
    ? { type: 'text', value: e }
    : R.util.type(e) === 'Array'
    ? uo(e, n)
    : ((a = {
        type: e.type,
        content: R.Token.stringify(e.content, n, t),
        tag: 'span',
        classes: ['token', e.type],
        attributes: {},
        language: n,
        parent: t
      }),
      e.alias && (a.classes = a.classes.concat(e.alias)),
      R.hooks.run('wrap', a),
      Ji(a.tag + '.' + a.classes.join('.'), po(a.attributes), a.content));
}
function uo(e, n) {
  for (var t = [], a = e.length, r = -1, i; ++r < a; )
    (i = e[r]), i !== '' && i !== null && i !== void 0 && t.push(i);
  for (r = -1, a = t.length; ++r < a; )
    (i = t[r]), (t[r] = R.Token.stringify(i, n, t));
  return t;
}
function co(e) {
  return e;
}
function po(e) {
  var n;
  for (n in e) e[n] = Qi(e[n]);
  return e;
}
function go() {
  var e = 'Prism' in ue,
    n = e ? ue.Prism : void 0;
  return t;
  function t() {
    e ? (ue.Prism = n) : delete ue.Prism, (e = void 0), (n = void 0);
  }
}
var at = Jt(tt, {});
at.registerLanguage = function (e, n) {
  return tt.register(n);
};
var W = at,
  fo = kn(2)(function (e) {
    return ft(e);
  });
function vo(e, n) {
  if (e == null) return {};
  var t = ho(e, n),
    a,
    r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      (a = i[r]),
        !(n.indexOf(a) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, a) || (t[a] = e[a]));
  }
  return t;
}
function ho(e, n) {
  if (e == null) return {};
  var t = {},
    a = Object.keys(e),
    r,
    i;
  for (i = 0; i < a.length; i++)
    (r = a[i]), !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
function Sn(e, n, t, a, r, i, d) {
  try {
    var l = e[i](d),
      f = l.value;
  } catch (g) {
    t(g);
    return;
  }
  l.done ? n(f) : Promise.resolve(f).then(a, r);
}
function mo(e) {
  return function () {
    var n = this,
      t = arguments;
    return new Promise(function (a, r) {
      var i = e.apply(n, t);
      function d(f) {
        Sn(i, a, r, d, l, 'next', f);
      }
      function l(f) {
        Sn(i, a, r, d, l, 'throw', f);
      }
      d(void 0);
    });
  };
}
function yo(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[n] = t),
    e
  );
}
function rt(e, n) {
  return wo(e) || So(e, n) || xo(e, n) || bo();
}
function bo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xo(e, n) {
  if (!!e) {
    if (typeof e == 'string') return wn(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return wn(e, n);
  }
}
function wn(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
  return a;
}
function So(e, n) {
  if (!(typeof Symbol == 'undefined' || !(Symbol.iterator in Object(e)))) {
    var t = [],
      a = !0,
      r = !1,
      i = void 0;
    try {
      for (
        var d = e[Symbol.iterator](), l;
        !(a = (l = d.next()).done) && (t.push(l.value), !(n && t.length === n));
        a = !0
      );
    } catch (f) {
      (r = !0), (i = f);
    } finally {
      try {
        !a && d.return != null && d.return();
      } finally {
        if (r) throw i;
      }
    }
    return t;
  }
}
function wo(e) {
  if (Array.isArray(e)) return e;
}
var ve = Ne.navigator,
  oe = Ne.document,
  An = Ne.window;
W.registerLanguage('jsextra', Et);
W.registerLanguage('jsx', xt);
W.registerLanguage('json', Nt);
W.registerLanguage('yml', Ot);
W.registerLanguage('md', _t);
W.registerLanguage('bash', wt);
W.registerLanguage('css', At);
W.registerLanguage('html', Tt);
W.registerLanguage('tsx', Bt);
W.registerLanguage('typescript', Rt);
W.registerLanguage('graphql', Ft);
var Ao = kn(2)(function (e) {
    return Object.entries(e.code || {}).reduce(function (n, t) {
      var a = rt(t, 2),
        r = a[0],
        i = a[1];
      return Object.assign({}, n, yo({}, '* .'.concat(r), i));
    }, {});
  }),
  ko = Eo();
function Eo() {
  return ve != null && ve.clipboard
    ? function (e) {
        return ve.clipboard.writeText(e);
      }
    : (function () {
        var e = mo(
          regeneratorRuntime.mark(function n(t) {
            var a, r;
            return regeneratorRuntime.wrap(function (d) {
              for (;;)
                switch ((d.prev = d.next)) {
                  case 0:
                    (a = oe.createElement('TEXTAREA')),
                      (r = oe.activeElement),
                      (a.value = t),
                      oe.body.appendChild(a),
                      a.select(),
                      oe.execCommand('copy'),
                      oe.body.removeChild(a),
                      r.focus();
                  case 8:
                  case 'end':
                    return d.stop();
                }
            }, n);
          })
        );
        return function (n) {
          return e.apply(this, arguments);
        };
      })();
}
var $o = xe.div(
    function (e) {
      var n = e.theme;
      return {
        position: 'relative',
        overflow: 'hidden',
        color: n.color.defaultText
      };
    },
    function (e) {
      var n = e.theme,
        t = e.bordered;
      return t
        ? {
            border: '1px solid '.concat(n.appBorderColor),
            borderRadius: n.borderRadius,
            background: n.background.content
          }
        : {};
    }
  ),
  No = xe(function (e) {
    var n = e.children,
      t = e.className;
    return he(vt, { horizontal: !0, vertical: !0, className: t, children: n });
  })(
    { position: 'relative' },
    function (e) {
      var n = e.theme;
      return { '& code': { paddingRight: n.layoutMargin } };
    },
    function (e) {
      var n = e.theme;
      return Ao(n);
    }
  ),
  Co = xe.pre(function (e) {
    var n = e.theme,
      t = e.padded;
    return {
      display: 'flex',
      justifyContent: 'flex-start',
      margin: 0,
      padding: t ? n.layoutMargin : 0
    };
  }),
  Fo = xe.code({ flex: 1, paddingRight: 0, opacity: 1 }),
  To = function (n) {
    var t = n.children,
      a = n.language,
      r = a === void 0 ? 'jsx' : a,
      i = n.copyable,
      d = i === void 0 ? !1 : i,
      l = n.bordered,
      f = l === void 0 ? !1 : l,
      g = n.padded,
      b = g === void 0 ? !1 : g,
      v = n.format,
      m = v === void 0 ? !0 : v,
      w = n.className,
      $ = w === void 0 ? null : w,
      A = n.showLineNumbers,
      S = A === void 0 ? !1 : A,
      N = vo(n, [
        'children',
        'language',
        'copyable',
        'bordered',
        'padded',
        'format',
        'className',
        'showLineNumbers'
      ]);
    if (typeof t != 'string' || !t.trim()) return null;
    var o = m ? fo(t) : t.trim(),
      s = ht.exports.useState(!1),
      c = rt(s, 2),
      u = c[0],
      p = c[1],
      y = function (h) {
        h.preventDefault();
        var k = An.getSelection().toString(),
          C = h.type !== 'click' && k ? k : o;
        ko(C)
          .then(function () {
            p(!0),
              An.setTimeout(function () {
                return p(!1);
              }, 1500);
          })
          .catch(bt.error);
      };
    return mt($o, {
      bordered: f,
      padded: b,
      className: $,
      onCopyCapture: y,
      children: [
        he(No, {
          children: he(
            W,
            tn(
              nn(
                {
                  padded: b || f,
                  language: r,
                  showLineNumbers: S,
                  showInlineLineNumbers: S,
                  useInlineStyles: !1,
                  PreTag: Co,
                  CodeTag: Fo,
                  lineNumberContainerStyle: {}
                },
                N
              ),
              { children: o }
            )
          )
        }),
        d
          ? he(yt, {
              actionItems: [{ title: u ? 'Copied' : 'Copy', onClick: y }]
            })
          : null
      ]
    });
  };
To.displayName = 'SyntaxHighlighter';
export {
  To as SyntaxHighlighter,
  Eo as createCopyToClipboardFunction,
  To as default
};
//# sourceMappingURL=syntaxhighlighter.f918d1ae.js.map
