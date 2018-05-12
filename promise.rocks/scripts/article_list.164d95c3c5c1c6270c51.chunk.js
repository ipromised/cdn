(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
  614: function (e, t, a) {
    "use strict";
    a.r(t);
    var n = a(0), r = a.n(n), c = a(17), s = a(6), l = a(35), o = e => {
      const {onSearch: t, changeSearch: a, search: n} = e;
      return r.a.createElement("main", {className: "container"}, r.a.createElement(m, {
        onSearch: t,
        changeSearch: a,
        search: n
      }), r.a.createElement("section", {
        "data-id": e.quote._id,
        className: "message"
      }, r.a.createElement("span", {
        className: "fa fa-book",
        onClick: e.fetchQ
      }), e.quote.quote), r.a.createElement("ul", {className: "articles"}, e.articles.map(i)))
    };
    const i = (e, t) => r.a.createElement("li", {key: e.id}, r.a.createElement(s.Link, {to: "/article/" + e.id}, r.a.createElement("i", {className: "fa fa-pencil"}), r.a.createElement("span", {dangerouslySetInnerHTML: {__html: l.a.renderInline(e.title || e.id)}}))),
      m = ({onSearch: e, changeSearch: t, search: a}) => r.a.createElement("p", {className: "control"}, r.a.createElement("input", {
        className: "input",
        type: "search",
        placeholder: "Search...",
        value: a,
        onChange: e => {
          t(e.target.value)
        },
        onKeyDown: t => {
          "Enter" === t.key && e()
        }
      }));
    var u = a(32), h = a(16), d = a(645), p = a(1), E = a.n(p);
    a(4), a(98);

    class f extends r.a.Component {
      constructor(e) {
        super(e), this.state = {quote: {}}, this.fetchQuote = this.fetchQuote.bind(this)
      }

      componentDidMount() {
        this.props.onSearch(), document.title = "Promise.rocks", this.fetchQuote()
      }

      fetchQuote() {
        fetch("https://ask.solutions/api/quote").then(e => e.json()).then(e => {
          e.ok && this.setState({quote: e.quote})
        }).catch(console.warn)
      }

      render() {
        const {articles: e} = this.props;
        return e ? r.a.createElement(o, {
          quote: this.state.quote,
          fetchQ: this.fetchQuote,
          articles: this.props.articles || [],
          onSearch: this.props.onSearch,
          changeSearch: this.props.changeSearch,
          search: this.props.search
        }) : r.a.createElement(d.a, null)
      }
    }

    f.propTypes = {
      articles: Object(p.arrayOf)(E.a.shape({
        id: p.string.isRequired,
        title: p.string.isRequired,
        content: p.string,
        modified: E.a.oneOfType([p.string, E.a.instanceOf(Date)]).isRequired
      })), onSearch: p.func.isRequired, changeSearch: p.func.isRequired, search: p.string
    };
    const g = {onSearch: u.f, changeSearch: h.b};
    t.default = Object(c.connect)(e => ({
      articles: e.markdownState.markdownList,
      limit: e.markdownState.limit,
      search: e.search
    }), g)(Object(s.withRouter)(f))
  }, 636: function (e, t, a) {
    "use strict";
    a.r(t), a.d(t, "default", function () {
      return s
    });
    var n = a(0), r = a.n(n), c = a(6);

    class s extends r.a.Component {
      render() {
        return r.a.createElement("div", {className: "container"}, r.a.createElement("div", {className: "columns"}, r.a.createElement("div", {className: "column"}, r.a.createElement(l, {
          title: "Tags",
          to: "/tags"
        }, "本站博客tags汇总."), r.a.createElement(l, {
          title: "MyBatis Generator",
          to: "/mybatis"
        }, r.a.createElement("p", null, "MyBatis Generator 网页版本.")), r.a.createElement(l, {
          title: "MyBatis SQL Formater",
          to: "/mybatis/sql"
        }, r.a.createElement("p", null, "将mybatis打印的单个sql语句粘贴进来，进行格式化输出.")), r.a.createElement(l, {
          title: "基金重仓股查询",
          to: "/d/基金重仓股分析"
        }, r.a.createElement("p", null, "将自己中意的股票名称粘贴进来(多个时用逗号隔开)，以查看重仓了这些股票的基金.")), r.a.createElement(l, {
          title: "股票交易记录",
          to: "/d/OrderAgg"
        }, r.a.createElement("p", null, "股票交易汇总以及单支股票的历史交易详情."))), r.a.createElement("div", {className: "column"}, r.a.createElement(l, {
          title: "股票数据",
          to: "/d/Stock"
        }, r.a.createElement("p", null, "股票常见数据查询: 单支股票历史净利润、增长率、收益率、近期公告等.")), r.a.createElement(l, {
          title: "旺仔烧烤点餐",
          to: "/d/旺仔烧烤"
        }, "旺仔烧烤是本地(梦想小镇附近)的一个烧烤卖点，味道不差:)", r.a.createElement("br", null), "使用本功能点餐后，复制菜单到旺仔烧烤微信群即可"), r.a.createElement(l, {
          title: "微信号功能",
          to: "/d/WeWeb"
        }, "我的公众号(logically)功能列表. ", r.a.createElement("a", {href: "https://1315331828.docs.qq.com/7DOQ6KCABTH"}, "查看文档"), r.a.createElement("br", null)), r.a.createElement(l, {
          title: "Browsing",
          to: "/d/Browsing"
        }, "我的网页浏览历史."))))
      }
    }

    const l = ({title: e = "What?", to: t, children: a} = {}) => r.a.createElement("article", {className: "message is-dark"}, r.a.createElement("div", {className: "message-header"}, r.a.createElement("p", null, t ? r.a.createElement(c.Link, {to: t}, e) : e)), r.a.createElement("div", {className: "message-body"}, a))
  }, 645: function (e, t, a) {
    "use strict";
    var n = a(0), r = a.n(n), c = a(648), s = a.n(c);

    function l(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e
    }

    t.a = (({name: e = "three-bounce", style: t = {}}) => r.a.createElement(s.a, {
      style: function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}, n = Object.keys(a);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function (e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable
          }))), n.forEach(function (t) {
            l(e, t, a[t])
          })
        }
        return e
      }({textAlign: "center", marginTop: "20%"}, t), name: e
    }))
  }
}]);
//# sourceMappingURL=article_list.164d95c3c5c1c6270c51.chunk.js.map
