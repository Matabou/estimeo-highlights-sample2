
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Welcome = __webpack_require__(651);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Header = __webpack_require__(648);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(647);

var _Footer2 = _interopRequireDefault(_Footer);

var _HighlightGrid = __webpack_require__(649);

var _HighlightGrid2 = _interopRequireDefault(_HighlightGrid);

var _colors = __webpack_require__(545);

var _getMuiTheme = __webpack_require__(562);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(628);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactTapEventPlugin = __webpack_require__(655);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _isomorphicUnfetch = __webpack_require__(558);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mata/devops/estimeo-highlights-sample2/pages/index.js?entry';
/**
 * Created by Adrien on 30/06/2017.
 */


/**
 * Make sure react-tap-event-plugin only gets injected once
 * Needed for material-ui
 */
if (!process.tapEventInjected) {
    (0, _reactTapEventPlugin2.default)();
    process.tapEventInjected = true;
}

var muiTheme = {
    palette: {
        accent1Color: _colors.deepOrange500

        /**
         * Equivalent to the `render` function of React
         * @param props
         * @returns {XML}
         * @constructor
         */
    } };var Index = function Index(props) {
    var userAgent = props.userAgent.userAgent;

    return (
        /** Wrapper around the application to include material-ui **/
        _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: (0, _getMuiTheme2.default)((0, _extends3.default)({ userAgent: userAgent }, muiTheme)), __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }, _react2.default.createElement('div', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 41
            }
        }, _react2.default.createElement(_Header2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 43
            }
        }), _react2.default.createElement('div', { className: 'container grey100', __source: {
                fileName: _jsxFileName,
                lineNumber: 45
            }
        }, _react2.default.createElement(_Welcome2.default, { title: 'Bienvenue !', msg: 'Voici quelques start-ups mise en avant par Estimeo.', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
            }
        }), _react2.default.createElement(_HighlightGrid2.default, { highlights: props.highlights, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
            }
        }), _react2.default.createElement(_Footer2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 54
            }
        }))))
    );
};

/**
 * Get the initial properties (async) to fill the list of highlights
 * @param context
 * @returns {Promise.<{userAgent: *, highlights: *}>}
 */
Index.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
        var userAgent, res, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        /**
                         * Ensures material-ui renders the correct css prefixes server-side
                         */
                        userAgent = void 0;

                        if (process.browser) {
                            userAgent = navigator.userAgent;
                        } else {
                            userAgent = context.req.headers['user-agent'];
                        }

                        /**
                         * Fetch the data
                         */
                        _context.next = 4;
                        return (0, _isomorphicUnfetch2.default)('http://localhost:3000/api/s/all');

                    case 4:
                        res = _context.sent;
                        _context.next = 7;
                        return res.json();

                    case 7:
                        data = _context.sent;

                        console.log('Show data fetched. Count: ' + data.length);

                        /**
                         * List of the properties of this component, which we can access via `props.*`
                         */
                        return _context.abrupt('return', {
                            userAgent: userAgent,
                            highlights: data
                        });

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

/**
 * Export the component / page
 */
exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/mata/devops/estimeo-highlights-sample2/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/mata/devops/estimeo-highlights-sample2/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57), "?entry"))

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Divider = __webpack_require__(607);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mata/devops/estimeo-highlights-sample2/components/Footer.js';
/**
 * Created by Adrien on 28/06/2017.
 */


var style = {
    margin: 32,
    textAlign: 'center'
};

var Footer = function Footer() {
    return _react2.default.createElement('div', { style: style, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_Divider2.default, { inset: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'Footer made by someone with love '));
};

exports.default = Footer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/mata/devops/estimeo-highlights-sample2/components/Footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/mata/devops/estimeo-highlights-sample2/components/Footer.js"); } } })();

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mata/devops/estimeo-highlights-sample2/components/Header.js';
/**
 * Created by Adrien on 28/06/2017.
 */

exports.default = function () {
    return _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, 'Estimeo Highlights'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto',
        rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/estimeostyle.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), _react2.default.createElement('style', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/mata/devops/estimeo-highlights-sample2/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/mata/devops/estimeo-highlights-sample2/components/Header.js"); } } })();

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _GridList = __webpack_require__(615);

var _IconButton = __webpack_require__(550);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Subheader = __webpack_require__(620);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _starBorder = __webpack_require__(636);

var _starBorder2 = _interopRequireDefault(_starBorder);

var _StartupCard = __webpack_require__(650);

var _StartupCard2 = _interopRequireDefault(_StartupCard);

var _isomorphicUnfetch = __webpack_require__(558);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mata/devops/estimeo-highlights-sample2/components/HighlightGrid.js';
/**
 * Created by Adrien on 30/06/2017.
 */


var styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: '100%',
        height: 'auto',
        overflowY: 'auto'
    }
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */

var HighlightGridList = function HighlightGridList(props) {
    return _react2.default.createElement('div', { style: styles.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, props.highlights.map(function (high) {
        return _react2.default.createElement(_GridList.GridList, {
            cols: 2,
            cellHeight: 'auto',
            style: styles.gridList,
            key: high.periode, __source: {
                fileName: _jsxFileName,
                lineNumber: 33
            }
        }, _react2.default.createElement(_Subheader2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 38
            }
        }, high.periode), high.startups.map(function (tile) {
            return _react2.default.createElement(_GridList.GridTile, {
                cols: tile.size,
                rows: tile.size,
                key: tile.img, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_StartupCard2.default, {
                title: tile.title,
                pretty: tile.pretty,
                author: tile.author,
                avatar: tile.avatar,
                subtitle: tile.subtitle,
                description: tile.description,
                website: tile.website,
                youtubeLink: tile.youtubeLink,
                _id: tile._id,
                img: tile.img,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }));
        }));
    }));
};

HighlightGridList.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
        var res, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _isomorphicUnfetch2.default)('/api/s/all');

                    case 2:
                        res = _context.sent;
                        _context.next = 5;
                        return res.json();

                    case 5:
                        data = _context.sent;

                        console.log('Show data fetched. Count: ' + data.length);

                        return _context.abrupt('return', {
                            shows: data
                        });

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = HighlightGridList;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/mata/devops/estimeo-highlights-sample2/components/HighlightGrid.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/mata/devops/estimeo-highlights-sample2/components/HighlightGrid.js"); } } })();

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(605);

var _FlatButton = __webpack_require__(610);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _IconButton = __webpack_require__(550);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _videoLibrary = __webpack_require__(633);

var _videoLibrary2 = _interopRequireDefault(_videoLibrary);

var _link = __webpack_require__(645);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mata/devops/estimeo-highlights-sample2/components/StartupCard.js';
/**
 * Created by Adrien on 30/06/2017.
 */


var containerImgStyles = {
  'height': '30vh',
  'zIndex': '0'
};

var noContainerImgStyles = {
  'backgroundColor': '#fff',
  'zIndex': '999'
};

var youtubeColor = {
  color: '#c4302b'
};

function handleClick(link) {
  window.open(link, '_blank');
}

var StartupCard = function StartupCard(props) {
  return _react2.default.createElement(_Card.Card, {
    zDepth: 0, __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement(_Card.CardHeader, {
    style: noContainerImgStyles,
    title: props.author,
    subtitle: 'Fondateur(s)',
    avatar: props.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement(_Card.CardMedia, { style: containerImgStyles,
    overlay: _react2.default.createElement(_Card.CardTitle, { title: props.title,
      subtitle: props.subtitle, __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement('img', { src: props.img, alt: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  })), _react2.default.createElement(_Card.CardActions, { style: noContainerImgStyles, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement(_link2.default, { as: '/s/' + props._id,
    href: '/startup?id=' + props._id, prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement(_FlatButton2.default, { label: 'Voir', __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }))), _react2.default.createElement(_link2.default, { href: props.website, prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement('a', { target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement(_FlatButton2.default, { label: 'Site', __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }))), _react2.default.createElement(_link2.default, { href: props.youtubeLink, prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, _react2.default.createElement('a', { target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement(_FlatButton2.default, {
    label: 'Youtube',
    labelPosition: 'before',
    primary: true,
    icon: _react2.default.createElement(_videoLibrary2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      }
    }),
    style: youtubeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  })))));
};

exports.default = StartupCard;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/mata/devops/estimeo-highlights-sample2/components/StartupCard.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/mata/devops/estimeo-highlights-sample2/components/StartupCard.js"); } } })();

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mata/devops/estimeo-highlights-sample2/components/Welcome.js';
/**
 * Created by Adrien on 30/06/2017.
 */


var style = {
    textAlign: 'center'
};

var Welcome = function Welcome(props) {
    return _react2.default.createElement('div', { style: style, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, props.title), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, props.msg));
};

exports.default = Welcome;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/mata/devops/estimeo-highlights-sample2/components/Welcome.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/mata/devops/estimeo-highlights-sample2/components/Welcome.js"); } } })();

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(567);


/***/ })

},[666]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzlhMGY2ZTEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanM/OWEwZjZlMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz85YTBmNmUxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGlnaGxpZ2h0R3JpZC5qcz85YTBmNmUxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RhcnR1cENhcmQuanM/OWEwZjZlMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dlbGNvbWUuanM/OWEwZjZlMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgQWRyaWVuIG9uIDMwLzA2LzIwMTcuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBXZWxjb21lIGZyb20gJy4uL2NvbXBvbmVudHMvV2VsY29tZSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IEhpZ2hsaWdodEdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9IaWdobGlnaHRHcmlkJ1xuaW1wb3J0IHtkZWVwT3JhbmdlNTAwfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzJ1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSdcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJ1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG4vKipcbiAqIE1ha2Ugc3VyZSByZWFjdC10YXAtZXZlbnQtcGx1Z2luIG9ubHkgZ2V0cyBpbmplY3RlZCBvbmNlXG4gKiBOZWVkZWQgZm9yIG1hdGVyaWFsLXVpXG4gKi9cbmlmICghcHJvY2Vzcy50YXBFdmVudEluamVjdGVkKSB7XG4gICAgaW5qZWN0VGFwRXZlbnRQbHVnaW4oKVxuICAgIHByb2Nlc3MudGFwRXZlbnRJbmplY3RlZCA9IHRydWVcbn1cblxuY29uc3QgbXVpVGhlbWUgPSB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBhY2NlbnQxQ29sb3I6IGRlZXBPcmFuZ2U1MDBcbiAgICB9XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byB0aGUgYHJlbmRlcmAgZnVuY3Rpb24gb2YgUmVhY3RcbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMge1hNTH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHt1c2VyQWdlbnR9ID0gcHJvcHMudXNlckFnZW50XG4gICAgcmV0dXJuIChcbiAgICAgICAgLyoqIFdyYXBwZXIgYXJvdW5kIHRoZSBhcHBsaWNhdGlvbiB0byBpbmNsdWRlIG1hdGVyaWFsLXVpICoqL1xuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17Z2V0TXVpVGhlbWUoe3VzZXJBZ2VudCwgLi4ubXVpVGhlbWV9KX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHsvKiogU3BlY2lmeSB0aGUgaGVhZGVyIG9mIHRoZSBhcHBsaWNhdGlvbiAqKi99XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JleTEwMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiogU3BlY2lmeSB0aGUgd2VsY29tZSB0aXRsZSAvIG1lc3NhZ2UgKiovfVxuICAgICAgICAgICAgICAgICAgICA8V2VsY29tZSB0aXRsZT1cIkJpZW52ZW51ZSAhXCIgbXNnPVwiVm9pY2kgcXVlbHF1ZXMgc3RhcnQtdXBzIG1pc2UgZW4gYXZhbnQgcGFyIEVzdGltZW8uXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiogU3BlY2lmeSB0aGUgbGlzdCBvZiB0aGUgaGlnaGxpZ2h0cyAqKi99XG4gICAgICAgICAgICAgICAgICAgIDxIaWdobGlnaHRHcmlkIGhpZ2hsaWdodHM9e3Byb3BzLmhpZ2hsaWdodHN9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qKiBTcGVjaWZ5IHRoZSBmb290ZXIgKiovfVxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgIClcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGluaXRpYWwgcHJvcGVydGllcyAoYXN5bmMpIHRvIGZpbGwgdGhlIGxpc3Qgb2YgaGlnaGxpZ2h0c1xuICogQHBhcmFtIGNvbnRleHRcbiAqIEByZXR1cm5zIHtQcm9taXNlLjx7dXNlckFnZW50OiAqLCBoaWdobGlnaHRzOiAqfT59XG4gKi9cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAvKipcbiAgICAgKiBFbnN1cmVzIG1hdGVyaWFsLXVpIHJlbmRlcnMgdGhlIGNvcnJlY3QgY3NzIHByZWZpeGVzIHNlcnZlci1zaWRlXG4gICAgICovXG4gICAgbGV0IHVzZXJBZ2VudFxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHVzZXJBZ2VudCA9IGNvbnRleHQucmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSBkYXRhXG4gICAgICovXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcy9hbGwnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgY29tcG9uZW50LCB3aGljaCB3ZSBjYW4gYWNjZXNzIHZpYSBgcHJvcHMuKmBcbiAgICAgKi9cbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyQWdlbnQ6IHVzZXJBZ2VudCxcbiAgICAgICAgaGlnaGxpZ2h0czogZGF0YVxuICAgIH1cbn1cblxuLyoqXG4gKiBFeHBvcnQgdGhlIGNvbXBvbmVudCAvIHBhZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsIi8qKlxuICogQ3JlYXRlZCBieSBBZHJpZW4gb24gMjgvMDYvMjAxNy5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRGl2aWRlcic7XG5cbmNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbjogMzIsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xufTtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPERpdmlkZXIgaW5zZXQ9e3RydWV9Lz5cbiAgICAgICAgPHA+Rm9vdGVyIG1hZGUgYnkgc29tZW9uZSB3aXRoIGxvdmUgPC9wPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkcmllbiBvbiAyOC8wNi8yMDE3LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkVzdGltZW8gSGlnaGxpZ2h0czwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCxcbiAgICAgICAgICAgIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvY3NzL2VzdGltZW9zdHlsZS5jc3NcIi8+XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L0hlYWQ+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBBZHJpZW4gb24gMzAvMDYvMjAxNy5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7R3JpZExpc3QsIEdyaWRUaWxlfSBmcm9tICdtYXRlcmlhbC11aS9HcmlkTGlzdCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9JY29uQnV0dG9uJztcbmltcG9ydCBTdWJoZWFkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvU3ViaGVhZGVyJztcbmltcG9ydCBTdGFyQm9yZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy90b2dnbGUvc3Rhci1ib3JkZXInO1xuaW1wb3J0IFN0YXJ0dXBDYXJkIGZyb20gJy4vU3RhcnR1cENhcmQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgfSxcbiAgICBncmlkTGlzdDoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgfVxufTtcblxuLyoqXG4gKiBBIHNpbXBsZSBleGFtcGxlIG9mIGEgc2Nyb2xsYWJsZSBgR3JpZExpc3RgIGNvbnRhaW5pbmcgYSBbU3ViaGVhZGVyXSgvIy9jb21wb25lbnRzL3N1YmhlYWRlcikuXG4gKi9cblxuY29uc3QgSGlnaGxpZ2h0R3JpZExpc3QgPSAocHJvcHMpID0+IChcblxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5yb290fT5cbiAgICAgIHtwcm9wcy5oaWdobGlnaHRzLm1hcCgoaGlnaCkgPT4gKFxuICAgICAgPEdyaWRMaXN0XG4gICAgICAgIGNvbHM9ezJ9XG4gICAgICAgIGNlbGxIZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgc3R5bGU9e3N0eWxlcy5ncmlkTGlzdH1cbiAgICAgICAga2V5PXtoaWdoLnBlcmlvZGV9PlxuICAgICAgICA8U3ViaGVhZGVyPntoaWdoLnBlcmlvZGV9PC9TdWJoZWFkZXI+XG4gICAgICAgIHtoaWdoLnN0YXJ0dXBzLm1hcCgodGlsZSkgPT4gKFxuICAgICAgICAgIDxHcmlkVGlsZVxuICAgICAgICAgICAgY29scz17dGlsZS5zaXplfVxuICAgICAgICAgICAgcm93cz17dGlsZS5zaXplfVxuICAgICAgICAgICAga2V5PXt0aWxlLmltZ30+XG4gICAgICAgICAgICA8U3RhcnR1cENhcmRcbiAgICAgICAgICAgICAgdGl0bGU9e3RpbGUudGl0bGV9XG4gICAgICAgICAgICAgIHByZXR0eT17dGlsZS5wcmV0dHl9XG4gICAgICAgICAgICAgIGF1dGhvcj17dGlsZS5hdXRob3J9XG4gICAgICAgICAgICAgIGF2YXRhcj17dGlsZS5hdmF0YXJ9XG4gICAgICAgICAgICAgIHN1YnRpdGxlPXt0aWxlLnN1YnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dGlsZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgd2Vic2l0ZT17dGlsZS53ZWJzaXRlfVxuICAgICAgICAgICAgICB5b3V0dWJlTGluaz17dGlsZS55b3V0dWJlTGlua31cbiAgICAgICAgICAgICAgX2lkPXt0aWxlLl9pZH1cbiAgICAgICAgICAgICAgaW1nPXt0aWxlLmltZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZFRpbGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZExpc3Q+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuKTtcblxuSGlnaGxpZ2h0R3JpZExpc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9zL2FsbCcpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dzOiBkYXRhXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIaWdobGlnaHRHcmlkTGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGlnaGxpZ2h0R3JpZC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBBZHJpZW4gb24gMzAvMDYvMjAxNy5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRIZWFkZXIsIENhcmRNZWRpYSwgQ2FyZFRpdGxlLCBDYXJkVGV4dH0gZnJvbSAnbWF0ZXJpYWwtdWkvQ2FyZCc7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xuaW1wb3J0IFZpZGVvTGlicmFyeSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvYXYvdmlkZW8tbGlicmFyeSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuY29uc3QgY29udGFpbmVySW1nU3R5bGVzID0ge1xuICAgICdoZWlnaHQnOiAnMzB2aCcsXG4gICAgJ3pJbmRleCc6ICcwJ1xufVxuXG5jb25zdCBub0NvbnRhaW5lckltZ1N0eWxlcyA9IHtcbiAgICAnYmFja2dyb3VuZENvbG9yJzogJyNmZmYnLFxuICAgICd6SW5kZXgnOiAnOTk5J1xufVxuXG5jb25zdCB5b3V0dWJlQ29sb3IgPSB7XG4gICAgY29sb3I6ICcjYzQzMDJiJ1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGljayhsaW5rKSB7XG4gICAgd2luZG93Lm9wZW4obGluaywnX2JsYW5rJyk7XG59XG5cbmNvbnN0IFN0YXJ0dXBDYXJkID0gKHByb3BzKSA9PiAoXG5cbiAgICA8Q2FyZFxuICAgICAgICB6RGVwdGg9ezB9PlxuICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgc3R5bGU9e25vQ29udGFpbmVySW1nU3R5bGVzfVxuICAgICAgICB0aXRsZT17cHJvcHMuYXV0aG9yfVxuICAgICAgICBzdWJ0aXRsZT1cIkZvbmRhdGV1cihzKVwiXG4gICAgICAgIGF2YXRhcj17cHJvcHMuYXZhdGFyfVxuICAgICAgLz5cbiAgICAgIDxDYXJkTWVkaWEgc3R5bGU9e2NvbnRhaW5lckltZ1N0eWxlc31cbiAgICAgICAgICAgICAgICAgIG92ZXJsYXk9ezxDYXJkVGl0bGUgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e3Byb3BzLnN1YnRpdGxlfSAvPn1cbiAgICAgID5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltZ30gYWx0PVwiXCIgLz5cbiAgICAgIDwvQ2FyZE1lZGlhPlxuICAgICAgPENhcmRBY3Rpb25zIHN0eWxlPXtub0NvbnRhaW5lckltZ1N0eWxlc30+XG4gICAgICAgIDxMaW5rIGFzPXtgL3MvJHtwcm9wcy5faWR9YH1cbiAgICAgICAgaHJlZj17YC9zdGFydHVwP2lkPSR7cHJvcHMuX2lkfWB9IHByZWZldGNoPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPEZsYXRCdXR0b24gbGFiZWw9XCJWb2lyXCIvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtwcm9wcy53ZWJzaXRlfSBwcmVmZXRjaD5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiU2l0ZVwiLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvcHMueW91dHViZUxpbmt9IHByZWZldGNoPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJZb3V0dWJlXCJcbiAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9XG4gICAgICAgICAgICAgIGljb249ezxWaWRlb0xpYnJhcnkgLz59XG4gICAgICAgICAgICAgIHN0eWxlPXt5b3V0dWJlQ29sb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydHVwQ2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU3RhcnR1cENhcmQuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRyaWVuIG9uIDMwLzA2LzIwMTcuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY29uc3Qgc3R5bGUgPSB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xufVxuXG5cbmNvbnN0IFdlbGNvbWUgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgPHA+e3Byb3BzLm1zZ308L3A+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvV2VsY29tZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBYkE7Ozs7O0FBY0E7Ozs7QUFJQTtBQUVBO0FBQUE7OztBQUdBOztBQU1BO0FBQ0E7QUFQQTs7Ozs7O0FBRUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFLQTtBQUxBO0FBQUE7O0FBbEJBO0FBQ0E7QUF3QkE7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7O0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQVpBOzs7QUFBQTtBQWNBO0FBQ0E7QUFEQTtBQWRBO0FBQUE7QUFlQTtBQUNBO0FBREE7QUFmQTtBQUNBO0FBZ0JBO0FBQ0E7QUFsQkE7Ozs7QUF3QkE7QUFBQTtBQURBO0FBQ0E7QUF4QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOzs7QUErQkE7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFMQTs7Ozs7QUFNQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQVBBOzs7O0FBTUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFWQTs7Ozs7QUFXQTs7QUFHQTtBQUNBO0FBRUE7QUFKQTs7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU5BO0FBQ0E7QUFXQTs7OztBQUlBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUpBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFWQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBUEE7QUFIQTtBQUNBO0FBaUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBUkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBVEE7Ozs7O0FBV0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUNBO0FBR0E7QUFBQTtBQUVBO0FBQUE7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7O0FBREE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBTEE7QUFBQTtBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7Ozs7OztBQUpBOzs7OztBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        