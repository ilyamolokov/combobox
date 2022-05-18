var k = Object.defineProperty,
  D = Object.defineProperties;
var N = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty,
  L = Object.prototype.propertyIsEnumerable;
var w = (t, e, n) =>
    e in t
      ? k(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  O = (t, e) => {
    for (var n in e || (e = {})) W.call(e, n) && w(t, n, e[n]);
    if (S) for (var n of S(e)) L.call(e, n) && w(t, n, e[n]);
    return t;
  },
  E = (t, e) => D(t, N(e));
import {
  s as o,
  c as s,
  w as A,
  g,
  e as i,
  R as j,
  r as y,
  D as x,
  j as b,
  T as R,
  S as F,
  a as z,
  b as B,
  A as $,
  P as H,
  d as _
} from './iframe.37e1393d.js';
import {
  N as ke,
  h as De,
  Q as Ne,
  A as We,
  K as Le,
  n as Ae,
  O as Re,
  C as Fe,
  b as ze,
  o as Be,
  q as $e,
  D as He,
  a as _e,
  U as Me,
  V as Ye,
  H as Ge,
  M as Ke,
  P as Ue,
  t as qe,
  u as Je,
  x as Qe,
  z as Ve,
  y as Xe,
  m as Ze,
  d as et,
  I as tt,
  l as nt,
  J as rt,
  f as at,
  L as it,
  i as lt,
  k as ot,
  p as ct,
  v as st,
  F as ut,
  G as mt,
  E as pt,
  B as ft
} from './iframe.37e1393d.js';
function p() {
  return (
    (p =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    p.apply(this, arguments)
  );
}
function M(t, e) {
  if (t == null) return {};
  var n = Y(t, e),
    r,
    a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (a = 0; a < l.length; a++)
      (r = l[a]),
        !(e.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
function Y(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    a,
    l;
  for (l = 0; l < r.length; l++)
    (a = r[l]), !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
var G = o.div(function (t) {
    var e = t.theme;
    return {
      marginRight: 30,
      fontSize: ''.concat(e.typography.size.s1, 'px'),
      color:
        e.base === 'light'
          ? s(0.4, e.color.defaultText)
          : s(0.6, e.color.defaultText)
    };
  }),
  K = o.div({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }),
  U = o.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    '&:not(:last-child)': { marginBottom: '1rem' }
  }),
  q = o.div(A, function (t) {
    var e = t.theme;
    return Object.assign({}, g(e), {
      margin: '25px 0 40px',
      padding: '30px 20px'
    });
  }),
  J = function (e) {
    var n = e.fontFamily,
      r = e.fontSizes,
      a = e.fontWeight,
      l = e.sampleText,
      u = M(e, ['fontFamily', 'fontSizes', 'fontWeight', 'sampleText']);
    return i.createElement(
      q,
      p({}, u, { className: 'docblock-typeset' }),
      r.map(function (c) {
        return i.createElement(
          U,
          { key: c },
          i.createElement(G, null, c),
          i.createElement(
            K,
            {
              style: {
                fontFamily: n,
                fontSize: c,
                fontWeight: a,
                lineHeight: 1.2
              }
            },
            l || 'Was he a beast if music could move him so?'
          )
        );
      })
    );
  };
J.displayName = 'Typeset';
function f() {
  return (
    (f =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    f.apply(this, arguments)
  );
}
function Q(t, e) {
  if (t == null) return {};
  var n = V(t, e),
    r,
    a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (a = 0; a < l.length; a++)
      (r = l[a]),
        !(e.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
function V(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    a,
    l;
  for (l = 0; l < r.length; l++)
    (a = r[l]), !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
var X = o.div(function (t) {
    var e = t.theme;
    return { fontWeight: e.typography.weight.bold, color: e.color.defaultText };
  }),
  Z = o.div(function (t) {
    var e = t.theme;
    return {
      color:
        e.base === 'light'
          ? s(0.2, e.color.defaultText)
          : s(0.6, e.color.defaultText)
    };
  }),
  ee = o.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 }),
  te = o.div(function (t) {
    var e = t.theme;
    return {
      flex: 1,
      textAlign: 'center',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      lineHeight: 1,
      overflow: 'hidden',
      color:
        e.base === 'light'
          ? s(0.4, e.color.defaultText)
          : s(0.6, e.color.defaultText),
      '> div': {
        display: 'inline-block',
        overflow: 'hidden',
        maxWidth: '100%',
        textOverflow: 'ellipsis'
      },
      span: { display: 'block', marginTop: 2 }
    };
  }),
  I = o.div({ display: 'flex', flexDirection: 'row' }),
  ne = o.div(function (t) {
    var e = t.background;
    return {
      position: 'relative',
      flex: 1,
      '&::before': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: e,
        content: '""'
      }
    };
  }),
  T = o.div(function (t) {
    var e = t.theme;
    return Object.assign({}, g(e), {
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      marginBottom: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      backgroundImage:
        'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
      backgroundClip: 'padding-box'
    });
  }),
  P = o.div({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    position: 'relative',
    marginBottom: 30
  }),
  re = o.div({ flex: 1, display: 'flex', flexDirection: 'row' }),
  ae = o.div({ display: 'flex', alignItems: 'flex-start' }),
  ie = o.div({ flex: '0 0 30%' }),
  le = o.div({ flex: 1 }),
  oe = o.div(function (t) {
    var e = t.theme;
    return {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
      fontWeight: e.typography.weight.bold,
      color:
        e.base === 'light'
          ? s(0.4, e.color.defaultText)
          : s(0.6, e.color.defaultText)
    };
  }),
  ce = o.div(function (t) {
    var e = t.theme;
    return {
      fontSize: e.typography.size.s2,
      lineHeight: '20px',
      display: 'flex',
      flexDirection: 'column'
    };
  });
function d(t, e) {
  return i.createElement(ne, {
    key: ''.concat(t, '-').concat(e),
    title: t,
    background: t
  });
}
d.displayName = 'renderSwatch';
function v(t, e, n) {
  return i.createElement(
    te,
    { key: ''.concat(t, '-').concat(e), title: t },
    i.createElement('div', null, t, n && i.createElement('span', null, n))
  );
}
v.displayName = 'renderSwatchLabel';
function C(t) {
  return Array.isArray(t)
    ? i.createElement(
        P,
        null,
        i.createElement(
          T,
          null,
          t.map(function (e, n) {
            return d(e, n);
          })
        ),
        i.createElement(
          I,
          null,
          t.map(function (e, n) {
            return v(e, n);
          })
        )
      )
    : i.createElement(
        P,
        null,
        i.createElement(
          T,
          null,
          Object.values(t).map(function (e, n) {
            return d(e, n);
          })
        ),
        i.createElement(
          I,
          null,
          Object.keys(t).map(function (e, n) {
            return v(e, n, t[e]);
          })
        )
      );
}
C.displayName = 'renderSwatchSpecimen';
var se = function (e) {
  var n = e.title,
    r = e.subtitle,
    a = e.colors;
  return i.createElement(
    ae,
    null,
    i.createElement(
      ee,
      null,
      i.createElement(X, null, n),
      i.createElement(Z, null, r)
    ),
    i.createElement(re, null, C(a))
  );
};
se.displayName = 'ColorItem';
var ue = function (e) {
  var n = e.children,
    r = Q(e, ['children']);
  return i.createElement(
    j,
    null,
    i.createElement(
      ce,
      f({}, r, { className: 'docblock-colorpalette' }),
      i.createElement(
        oe,
        null,
        i.createElement(ie, null, 'Name'),
        i.createElement(le, null, 'Swatches')
      ),
      n
    )
  );
};
ue.displayName = 'ColorPalette';
function h() {
  return (
    (h =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    h.apply(this, arguments)
  );
}
function me(t, e) {
  if (t == null) return {};
  var n = pe(t, e),
    r,
    a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (a = 0; a < l.length; a++)
      (r = l[a]),
        !(e.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
function pe(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    a,
    l;
  for (l = 0; l < r.length; l++)
    (a = r[l]), !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
var fe = o.div(function (t) {
    var e = t.theme;
    return {
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2
    };
  }),
  de = o.div(function (t) {
    var e = t.theme;
    return Object.assign({}, g(e), {
      overflow: 'hidden',
      height: 40,
      width: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      '> img, > svg': { width: 20, height: 20 }
    });
  }),
  ve = o.div({
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: '0 1 calc(20% - 10px)',
    minWidth: 120,
    margin: '0px 10px 30px 0'
  }),
  he = o.div({ display: 'flex', flexFlow: 'row wrap' }),
  ge = function (e) {
    var n = e.name,
      r = e.children;
    return i.createElement(
      ve,
      null,
      i.createElement(de, null, r),
      i.createElement(fe, null, n)
    );
  };
ge.displayName = 'IconItem';
var ye = function (e) {
  var n = e.children,
    r = me(e, ['children']);
  return i.createElement(
    j,
    null,
    i.createElement(he, h({}, r, { className: 'docblock-icongallery' }), n)
  );
};
ye.displayName = 'IconGallery';
var xe = /\s*\/\s*/,
  be = function (e) {
    var n = e.title,
      r = n.trim().split(xe);
    return (r && r[r.length - 1]) || n;
  },
  Se = function (e) {
    var n = e.children,
      r = y.exports.useContext(x),
      a = n;
    return (
      a || (a = be(r)),
      a ? b(R, { className: 'sbdocs-title', children: a }) : null
    );
  },
  we = function (e) {
    var n = e.children,
      r = y.exports.useContext(x),
      a = r.id,
      l = r.storyById,
      u = l(a),
      c = u.parameters,
      m = n;
    return (
      m || (m = c == null ? void 0 : c.componentSubtitle),
      m ? b(F, { className: 'sbdocs-subtitle', children: m }) : null
    );
  },
  Oe = function (e) {
    var n = e.name,
      r = y.exports.useContext(x),
      a = r.componentStories,
      l = a(),
      u;
    return (
      l &&
        (u = n
          ? l.find(function (c) {
              return c.name === n;
            })
          : l[0]),
      u ? b(z, E(O({}, u), { expanded: !1, withToolbar: !0 })) : null
    );
  },
  Te = function () {
    return i.createElement(
      i.Fragment,
      null,
      i.createElement(Se, null),
      i.createElement(we, null),
      i.createElement(B, null),
      i.createElement(Oe, null),
      i.createElement($, { story: H }),
      i.createElement(_, null)
    );
  },
  Pe = function (e) {
    var n = e.children;
    return i.createElement('div', { style: { fontFamily: 'sans-serif' } }, n);
  };
export {
  ke as AddContext,
  De as Anchor,
  Ne as AnchorMdx,
  We as ArgsTable,
  Le as CURRENT_SELECTION,
  Ae as Canvas,
  Re as CodeOrSourceMdx,
  se as ColorItem,
  ue as ColorPalette,
  Fe as ComponentsTable,
  ze as Description,
  Be as DescriptionType,
  $e as DocsContainer,
  He as DocsContext,
  Te as DocsPage,
  _e as DocsStory,
  Me as HeaderMdx,
  Ye as HeadersMdx,
  Ge as Heading,
  ye as IconGallery,
  ge as IconItem,
  Ke as Meta,
  Ue as PRIMARY_STORY,
  qe as Preview,
  Oe as Primary,
  Je as Props,
  Qe as Source,
  Ve as SourceContainer,
  Xe as SourceContext,
  Ze as SourceState,
  et as Stories,
  tt as Story,
  nt as StoryTable,
  rt as Subheading,
  we as Subtitle,
  Se as Title,
  J as Typeset,
  Pe as Wrapper,
  at as anchorBlockIdFromId,
  it as assertIsFn,
  lt as extractComponentArgTypes,
  be as extractTitle,
  ot as getComponent,
  ct as getDescriptionProps,
  st as getSourceProps,
  ut as getStoryId,
  mt as getStoryProps,
  pt as lookupStoryId,
  ft as storyBlockIdFromId
};
//# sourceMappingURL=index.0237a05f.js.map
