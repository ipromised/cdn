(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
  617: function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(0), r = n.n(a), o = n(17), c = n(32),
      s = (n(6), ({total: e, tags: t}) => r.a.createElement("main", {className: "container"}, r.a.createElement("header", {style: {marginBottom: "10px"}}, "文章总数: ", e), function (e, t = 3) {
        return Array.from({length: Math.ceil(e.length / t)}).map((n, a) => e.slice(a * t, (a + 1) * t)).map((e, t) => r.a.createElement("div", {
          key: t,
          className: "columns"
        }, e.map(l)))
      }(t, 3)));

    function l(e) {
      const t = "#" + Math.floor(16777215 * Math.random()).toString(16);
      return r.a.createElement("div", {
        key: e.key,
        className: "column is-4"
      }, r.a.createElement("span", {
        className: "tag",
        style: {width: "100%", background: t}
      }, e.key, "(", e.doc_count, ")"))
    }

    var i = n(645), u = n(1);

    class m extends r.a.Component {
      componentDidMount() {
        this.props.getTags()
      }

      render() {
        const {total: e} = this.props;
        return -1 === e ? r.a.createElement(i.a, null) : r.a.createElement(s, this.props)
      }
    }

    m.propTypes = {total: u.number.isRequired};
    t.default = Object(o.connect)(e => e.tags, {getTags: c.g})(m)
  }, 645: function (e, t, n) {
    "use strict";
    var a = n(0), r = n.n(a), o = n(648), c = n.n(o);

    function s(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    t.a = (({name: e = "three-bounce", style: t = {}}) => r.a.createElement(c.a, {
      style: function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}, a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function (t) {
            s(e, t, n[t])
          })
        }
        return e
      }({textAlign: "center", marginTop: "20%"}, t), name: e
    }))
  }
}]);
//# sourceMappingURL=tags.fd1ddd19ab1cbc942fa9.chunk.js.map
