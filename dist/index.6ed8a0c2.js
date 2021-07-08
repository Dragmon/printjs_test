// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iyk8B":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "c22175d22bace513";
module.bundle.HMR_BUNDLE_ID = "504ccad16ed8a0c2"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets /*: {|[string]: boolean|} */ , acceptedAssets /*: {|[string]: boolean|} */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event /*: {data: string, ...} */ ) {
        checkedAssets = {
        } /*: {|[string]: boolean|} */ ;
        acceptedAssets = {
        } /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8dZPq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _printJs = require("print-js");
var _printJsDefault = parcelHelpers.interopDefault(_printJs);
function printTest() {
    _printJsDefault.default({
        printable: 'app',
        type: 'html',
        style: '.result {visibility: visible;font-size: 30px;color: green;}',
        css: 'src/style.css'
    });
}
function printPdfBase64() {
    /* fetch('https://printjs.crabbly.com/docs/base64.txt').then((response) => {
    response.text().then((base64) => {
      printJS({
        printable: base64,
        type: 'pdf',
        base64: true,
      });
    });
  }); */ const facturaBase64 = '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AFJkICBkb3ViQG/gAAAAAAAAAAAAR3JuIGRvdWJAb+AAAAAAAAAAAABCbCAgZG91YkBv4AAAAAAAAAAAAEJyZFRVbnRGI1JsdAAAAAAAAAAAAAAAAEJsZCBVbnRGI1JsdAAAAAAAAAAAAAAAAFJzbHRVbnRGI1B4bEBSAAAAAAAAAAAACnZlY3RvckRhdGFib29sAQAAAABQZ1BzZW51bQAAAABQZ1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAAAAAAQY3JvcFdoZW5QcmludGluZ2Jvb2wAAAAADmNyb3BSZWN0Qm90dG9tbG9uZwAAAAAAAAAMY3JvcFJlY3RMZWZ0bG9uZwAAAAAAAAANY3JvcFJlY3RSaWdodGxvbmcAAAAAAAAAC2Nyb3BSZWN0VG9wbG9uZwAAAAAAOEJJTQPtAAAAAAAQAEgAAAABAAEASAAAAAEAAThCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAHjhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTScQAAAAAAAKAAEAAAAAAAAAAThCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADSwAAAAYAAAAAAAAAAAAAANUAAAFAAAAACwBwAGkAYwAwADIALQBsAGEAcgBnAGUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAUAAAADVAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAADVAAAAAFJnaHRsb25nAAABQAAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAA1QAAAABSZ2h0bG9uZwAAAUAAAAADdXJsVEVYVAAAAAEAAAAAAABudWxsVEVYVAAAAAEAAAAAAABNc2dlVEVYVAAAAAEAAAAAAAZhbHRUYWdURVhUAAAAAQAAAAAADmNlbGxUZXh0SXNIVE1MYm9vbAEAAAAIY2VsbFRleHRURVhUAAAAAQAAAAAACWhvcnpBbGlnbmVudW0AAAAPRVNsaWNlSG9yekFsaWduAAAAB2RlZmF1bHQAAAAJdmVydEFsaWduZW51bQAAAA9FU2xpY2VWZXJ0QWxpZ24AAAAHZGVmYXVsdAAAAAtiZ0NvbG9yVHlwZWVudW0AAAARRVNsaWNlQkdDb2xvclR5cGUAAAAATm9uZQAAAAl0b3BPdXRzZXRsb25nAAAAAAAAAApsZWZ0T3V0c2V0bG9uZwAAAAAAAAAMYm90dG9tT3V0c2V0bG9uZwAAAAAAAAALcmlnaHRPdXRzZXRsb25nAAAAAAA4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBBQAAAAAAAQAAAABOEJJTQQMAAAAABmzAAAAAQAAAKAAAABrAAAB4AAAyKAAABmXABgAAf/Y/+0ADEFkb2JlX0NNAAH/7gAOQWRvYmUAZIAAAAAB/9sAhAAMCAgICQgMCQkMEQsKCxEVDwwMDxUYExMVExMYEQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQ0LCw0ODRAODhAUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCABrAKADASIAAhEBAxEB/90ABAAK/8QBPwAAAQUBAQEBAQEAAAAAAAAAAwABAgQFBgcICQoLAQABBQEBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAEEAQMCBAIFBwYIBQMMMwEAAhEDBCESMQVBUWETInGBMgYUkaGxQiMkFVLBYjM0coLRQwclklPw4fFjczUWorKDJkSTVGRFwqN0NhfSVeJl8rOEw9N14/NGJ5SkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2N0dXZ3eHl6e3x9fn9xEAAgIBAgQEAwQFBgcHBgU1AQACEQMhMRIEQVFhcSITBTKBkRShsUIjwVLR8DMkYuFygpJDUxVjczTxJQYWorKDByY1wtJEk1SjF2RFVTZ0ZeLys4TD03Xj80aUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9ic3R1dnd4eXp7fH/9oADAMBAAIRAxEAPwDKxIcYJ29oce/l6n0VeLbHHjnkOBOn77fpf9XcxV6g9s7ogabANR98I1TGiXNG0dxEA/6/vJzEWzTXdsJDAfF4E/5/0f8Ape9U+v03M6f9pAa92O9trtsyWfzVrHg/yLPpbVZYXbQ6WQDG7UEeTi33V/8ATrRnsY9pDm7hBD2T7SHaO+j+a5v7yINEFaRYIPV5T08Zx3NIAsA9PQiR2nd7fpe16p3sLR3J03DiNFqZfSn4Qtuqb9s6e6DZW50PqM7WF0f5vren/wAasq3Kx2OIxWOH/HODtvf2MZ7P85T3Eiw1eCUTR6dWpYIYdfd3/kz+9/KQQGzES4AuAjw/O/s/S9yldY575e4mJIH9zfzVETJYwbrHtMN5kyHbf5TtFHItiA0fWq3MfXW+QW2NY+PzXB4a+WP+j7t3+EapuFRlwaQ8d/4OQqmuqproP+BrZXIP7jW1nt9L2opd7Q8ulh5/OH/R97Uxchc60iGt3vAI2HlwP5g930f5H6VcB9ceqtz8+vFoY5lWFuYWuncbnH9Y9v8Awe2ujb/wa7TrXUh0npt2awtNjQGYzXc+tZLaufpej78j/rK8w94i5riXlxgzJn957v5SVJCnQ9gdo0sDa9g8Y93+c7c9IQDJ4/O/8kk+Has0b2HA/wDOUhqQHaTrr3TkFYA6mNByEQMfOrYceAf+qU2sc6No3BusDy7lJrXFxmddQT/nSnALTJYM1+H+sqfpc7jtaPpHmB2/zkRjnOERqTEDkwtzonRRmPF2R7cOs/RGjrHeDAfzf30aFWx8UiQBu1+mdF+07b7mbMYfRrnabCPzPU92z+XYt0VVNaPRaKto9lY0bH7rdvtV97AG+wBzBo2dNo7NLP3EF9AdwBPbQA/2XNLf0n/VqGRJZ4ARH7X/0CVMqLdzHebd2pA/dsZ+dX/LrTOc1z9hYGOgkEElpH8ixrXf5j6lBvqaGoNcBqayDoT+dU5u3b/YRa22trNpJDSfaQCWgj812m6t/wDL2J7CxZSGkGh+57yG7GEbiSf5v0foudu/M/wiu29GvoYx2XW6gEfSYA4NB02us37PV3f9p3q70G2t+a5z7Nz21HZu9pD3FlciPz9u/wB66AOc2RyDo4RyP5TfouVbNzIxTETGwRZ/9BZsWE5IkiVG6eKv6Pbk0W01uGUx7XMc1rgy4Bw2x6WR/wClnrg+rYV3Ts+zEyw8hse5zS1/uY25rTy71Nj2+xy9d6l03Bbj25dZ+zuqaXbRqwn81jGE/oHWP9n6J2z/AINc/wBT6Ri5tIycp+7069uS17tLWg7qGva0Oua7Htu9l1bfU9K6yj16d6bL4jhxSgCSfcu41rHhGh/wvkTHks2QS0HpIET+9xPmG3l2sdyeVc6Ri3W9QpsaT+jsa4OHG+dzGNXR5v1Locz1Kv1N7mh1Q3G2tx/cf77bG+0/z+//AK3Z/Oq50X6s2Y1YyMdwhkhlh1LifbbbYysWuq9X+brZZ/gv8InHnMWQGOOVyOmnq4f63o9KvYOEieX0wv08Xp45D9D1fo/vydu1zSd8AyTo6CCf67dtjHf1lOmxwOjAHawd24Hx3/SWfZVn0S+6lzaO1lcOrkfnMtrLqWu/k76X/wDBPUq86qzaXvO0EbXtbBP7sfR9yk90USSABuxjGTQj6r2p5j67ZzcnPo6bRoMPc+8bvaLXhrnsn93HoZ7/AOvaxc27T2cNdBE6afm7/wB3ncrmY83dQy8hzvVZffafWGshz3W+oz/rbVXqLXP1iH68SNfzRuCniNBXVikSLsbIIDT/ACRyO6l6brDI08+w/O/6KO6tkkxAB0jTRGx62uDa2sc+yw7WNYJJk+32j/COd+4niKw5NLG7DCY613ptA3jUjiQB9Kf3m/nLROIHjY5g9VxEN1Lv+tMr3vf+5WxbnT/qRR6Yt6o+yu3tXjuDXMI+jvyNttfqM/cr/wC3lv8AT+kYPTi62gF1rx/SrAH2D+ywNY1j/wA70EuMAd1pxkm9nH6b9U66WizO1dyKG8Ac/p3uLrN377Nq2NrW1CrYA1ohkaAN52tb/r/11WbXuk1hw3ASNf8AqSf+oeqzbWt0c47jxHB+/wCimSkTuyRiI7D+KD0NrwWO3A8fLtr/ANQgW8R7XO4A+g6P5B+i5HfvB2tBaCdWCO37oQrHbZh0h2ji7ST/ACvpN9v+emMgf//RsNDo/Rw4HUy7t+Frf/BVBjmtsLKrdz3airc2HQPotdpW/wD8CepU/pZb6TbCO8xz/Idte13+vpoT+j4znOuaLADq6uGuLT+8xzSxz0/VgsdWyzJFNrg5ha17drmkatMh0gfS+k3+ads3rSxOqZVNe4OFtU6Bx3Mj+S8fpKv6lqyq2kMLHFzh2a4Hjy3f+SUHW3YbnPaNrnD6Wj2WAfvRFrXM/wC3U2cTIVQkP3Jbfb+jJfjnAH1XH+vD5o/4P6cXeyMp+f7q2EMx3176XEHc8y+S9p91Ta3Venv/AOuLHxrMfPzsqyp5dkN9PGADHNdVS1/2ge722u+22s+1eu39Xqs9Or/S+pbxLN7LPbtLrHOLR9Eyypmz+qj00MyHtG30rWyAW+0if3f3f7C5/OYSnIxuJPya8XpkYy4f8SLuY8RjCNni4dzXD6o/pcP95BdjuyM0UO9jXbfdpDWmd+n0d7vzFCvofVulwcN5yqx9HbM/2scn1P8A2GyLP+JU7MjGr6pQHPigOO57gXlx2ua1/s92xtzq9j//AFGt/GIcwWUWCyp3BB3A/MKPlcmXBK4x4sWT03KPpnKHo+b95i5sQy1CRFxF8PbjcnF6pSS71mmi5ulljCWmf3bYDX/9u1rF+trqtjRjMY+y6nIs31MDHPIZ6e1xq9j37bd+5n6Rdlk4+LltAy6RYR9Gz84f1bWe9qweofVaw31ZOBaLvTdPo2wHQfa/Za0enY/a7/CV1f8AGLWlzGGeI2OCQFiMvllw+rg4/wBHjc7Fy8sWaMgfRZ4q/rR4eKv6j5VG7EYBo4t2OkagiPWP9r9Eq7D6Zhwlo4PhK2+s9FyMLKuya2bsF7nFpEzWR/OVX/Ss3VbX/S/wbPU/0izDU18MZLiTqGtJJJ/qrSxTjkjGeM8UTt/6F/WauWEsc5Y8gojf+xk1gfDfzjwOeOdPo/5y6/6o9KfjV/te9hmxmzCafpbDpblO/lW/zVH/AAHq2/zdtSyek/U3rufbXVZjehibhvyLnsa1oLW2bC3e6ze5ntY30/8Ajf8Ag+yLLqnOourdVZVANcgOa36LHMb/ADdlW3/Rfo0J5YkDhIlxdY6ohjIkeLePQ9G1XdS5pa2shzuzSAD/AFmO+jtS3uDtrWmR2cAJ+fvY5CDGFgIO4/vDUf263+5qQssb7X+4HgtOvkmgriGVhY8bnAsdWPbY0kEDwn/yfsVGWWF5aRYwk7jABn+W3/vytOF3NDmgu1Ie0gGeXsc0/o3/AMlV6saljXH0hVc8+4saYP8AK2O2teiUhZu4tkbSBpJ8uGv3bv8ApqDhdZuPtHYg6if3S7Xbu/rf8WpkmAC3cRAc5hOo/qu/SKD3uDw6pxJiAXATH7jyPa9v9hBT/9KzWA15c0mXcwNR/Z/1rR22VsO3lz+NBB/k/mtf/Ud+lQq3+uD9Lczs12o/6lSDnbosl27812hP9V30dylaxZbY1BLWgyNCWg/ym/zjE9uPXkt2mWEalpMt019m73N3fuf9NI7T72P9N4EEHQ/h9NG9EFgdY3dU4GQDs0I93pvI9LclSLQZdL2PcSCadHPE/vNb7UcZT8fp9l1ztuxm31PpEj6DGMb/AISy/wCh7f0vqfo0WrKf6TRkUvutbDC+sNLTHtFh9/sfY3+crs/7cs/nFWtpOTaL8x7azXpj42oqrkbSXvH08lzTt9X+bp/wPqfz6wcfI555OCUTCMdOKuHh/u/5yX7nC7uTn8McYkCJE7RB4jLz/cQ4dNeZvueduRvO+tv0qgBsbU6Pdtr/AD37Ps3rWWv9T6Cu005GO8W0vMv1L2GJj4formqq3ErqM1uc2xv0Q+SNP3LAXP8A7bH/APbSsY+bbB3zbB949otGv535mR/xlldv/GLQ+7ZMQrDK4VXtT9UeFqDm8GYVngIy6ZYaH6/pf9w6NPV7GnbksFo/eYNrx/XrdDH/APQVPrww+o4nr1ZtlVGIHWZ+PVY6p1mNE5LLKBsdZbtb6eM936P9NaiNsx8lsNh/eOHD/rTju/t0WWf8Ws3qvSrcuprca81vpe17XlocWuad9TS536Sv9Nsfsez1P0ahmMJPqB5fIP3RxY/H0f8Aesg5fLQOOYz4z0Jqf0n8knPxb7qrzRmuZY+8vde5pJabC71Mhtf0q/QwrX/Y2Ox7f8D/ADON6lf2kVXQ+n012XYu9lhlnpCXNa0h7LrGu97sWvZ+lutbV/NVWVYf9IWX077WcnIL2urpa51VljtHesw76H3e7Z69W9/2j9HX6fv/AOEXRYtg9Xa2uwWFrmOpa33Bz2Orc6refS9rvcx7/wD0YquWeflcpjjmRHL6pCHyn9GUo/5uX+zbGPDh5jDGWSFzxXGJlofT6oxl+/H1fpOrjZNGG6s43squbDW3SwuBPrhw3nYyz9Le97Mj6fqfzv5i1Q/Bzam1XgS36M/muOhfRZ9FYGP0q6rCooyqvs/oMFTKRZ6p2tYMdjrr9lP6X02/RZX6bFvdLw8bI6ex9tlr7ri619j37yHO0cxk/wDadmz9FR/gVJ8PzRjLJy+S/TZjfaUtf6rX57l+IQzw0mfnPWwPT6kb+k01gvd7I4yaxtIjtfX/ADblmOeyx+wBocR2OoP8pjvpMd/mLa9LLoufRS19tdbGPc4s/ROFhsb6Ne5zvUsr9H9Yr/R+n6tKy8rHZS8uY0isn+bJnaT+Z7/zHfmf5n7m/Rw4fb4hHIZ4zRjGR4pYv8KXr4P3WhORlXFERl1kPSJ/T95rPphwADhr7mQOf3msJb/0EnDYdosbrprMH+S/cPpf56NYH7A7WxnJDxqB8v8Azj/i0n+mNDq6B7XGT/aP03N/cf8ApFOxtHJrhnqO2PjQ8te0fyXase1VDuePcXbhESeR/XWg0lzorDz3AABe3ycz272f56BcwNc2yt+4O+kxzdsz/K9v/ntIpBf/0zVua4Dc1pIgB5kHzY/85j/+MYitrc2QWg1xLuf+p+j/AG2IFbDA3nbEagiI8w/f6bv/AAFWqiWn2F8DsBx8azL2/wDWfUUoaxZUOYZEiwdjunyh+/6LlZbZYPYx4bu5qPtLv/RT/wCs1AFRDg4AEP40jXyI9n/S3qxX7R+kAaD/ACZ/BELSxDWNMvjceDAHyaf/ADhSl5BlrR23Eaf1HR7XM/r/APbiO8B7ZadpPcfRP+du2qLqbC2WACdCWkQT/U+gihCxv5oY6mfpaS0KLqWHX1AHsMEDVp+GnqMd/IZ+k/kI3uHtsG1w9un0ST93puUbGMt0fWGu0G4y10eB/wBfSSpVtdzG6ljC8jX2GHj4s/O/rtUhk27QXsF7YO0k/pGj+TazbaxEND3EHeWurOu7Uj4gnd/23YmuoDjMNf5tM8eP0fd/xn6RMnjjMVIAjxZcebJjNwkYnwatz8SxpNZYy4u3mu4NZueI3brmt9Oz1Gs9J+9lN+z/AAqN0uwsubSS7URTce7P9Dbr7LqvoIdmJVYyTucT7YcJkf1nfS/656iAIxmbXEPx3aPdrMDXa6Tu/R/9uf4T/B+os3m+QqPHiBuB4uHrw9eH+7+66XLfEDOYjlocQ4eLYf1eJ2r8mkWFoBsge60awTw1rPpO4/NVzo2XTXi+jaHNa2x3vgkAHX3fnt/zVj04fqlttTzaHQ4udq46eOm1qtGtuK211gLTVDtwdtcN49s+1384s/BKA5iE5g8Ev1ZlAHeY9P8Az27zMP1JEZgSHq9Xh3d/EtffjV3lhoe8S6ouZYWH9w20Ospf/Yep2sqtaW31hzSIJ4Ovmufo6p+c2qxrxo54ewGfB+wOrt/tK1+28ksIZS1xGhcSXEafn1shbJwneB/ZTke8NRMfUatDJodi5VlLXyGHRxkyCNzHOaPf9B30meoqxuYXAFu2wTtI1YQf3P8AX/raJeTkXOsc8+o47nl0/wCc39z+Rs/RINzbj7C4QTq5ro1/lNsb/Of1lYF0La5qzSN+wvh8Or12l0tLSfP3bFXuutYXDc8gHX84OHy3bv8Aq0a5vpu9MuZcCNQO/ltPuZ/r/OKq9gYRsZua76Lm/i2yv/yKRSH/1HxrnMAa4u3NMtkSROjnAH/0WrTX7nNLtrGOiNogRxp/g/8AX/BLPbZDQ3e4nktfLT/ne+l39dvpK22yCA4CXatLhtJ/lNc32v8A67FIC1yG4K/TkR6jDrubIIn/AKpWA5jjtL5a4aOJAI+M+1zFVaatAHQ7TaQAHD/0XaiRIADvTt/cIgHzrFk/S/0e9OWNlriHmpzttreztAR2+kpPpB1dNTjzEgEfvNcwuqf/AJqr1h7GgPggcMH0fPY13uq/q12ItW6ydoO3xGv+v/nxFCb1axUGgAu4lvB8tjv+oUWguEn2t4iNw/q/vNUW2RLXO1OhLoP+dLfd/aRfVYCQ8GDzAG4DxDmn9I1JSzWtf7u7dC6Zif3vzv8AtxL09kvgOd4RDo/s/TTB1ZcAQ1/g4nadfjt2pnB1byCz2fw/s7XM/spKYQx5JA3h3bx+P5zXf9uKDccPcbGQ140cSAHQP9Jy1yOXE6byZ8YdM+Lo3f56RbMQ8gjWD7gR/JY79J/229JSLFx30WxTY6kWammvaGPg/Soc/wBRlPu/0bvS/wCBRsm5hqbRTXa1+82Xuu+m98fSc785z/8AtrYz9F+j/RqDq69S07TMz+aT/W/eUfWc5paRvI/N7j+qZ3tVeXLYTMZOECQPFY6y7yZhnycPCZEiq17MWsDnQGuredNjho7/ADfz/wCz/YQfU2u2uHpOGjXjUf1HfnMd/rZWjNreGvLnksAlzXS4Afy2/mf10PYHtkjd2BkyP+3N+5v9tSkLQVC2wNLXEEgnQO11/Pr3/wDSQ77GPE7iBw5pA08BG72/56bQDY5ha4aNnUEf6/yrEM13ujcwOadNIJHlrtSUs77LLXQXPOjHkaH+Q7cG+/d+9Wg3Ne7QM2NPZokE8y36Xv8A8xTdaGbg4S0fTYWmREe783d/r+kVbIed0vJ3QA2QQXCdP0jP5z+Tv9VNK4P/1QO9S2ltR3MtYZrcdTA/N3/RsZ/JR6HPe30uZ12fRdPPt5Y7/qEGn6Ld23vO3/1H+f8AvbVNs6TMecbv+t7fcnsBbjMkhuzdvYNNru33y5itFzXgMI9x+gDEGPD82z+wqtm6WzxrHqbd3H5se5Tb/RHRtiNd/wBCP5W7/wA7TlpptNsY5sGGPGgMEgx+Y9vuUmNBO4NDS4dne0kfuu/NVev+1G1uyfpRGv8AK9L9z1v7CMPoumeR/V/65/LRWpd7w3Qt7iHQ7v8Am2Nl3/WrWW/11Ju/btmQNfaQR8Nh9zFFm6bYiYH04j/rs/nKQ4HhAiPpTH5n53pf9BJS9ZE7DJ8Dy2fB7T9H/OTtZUI1LHfmme0/9ShVzOkb+0R5fS3fodiLb/Nv28S3dP8AN/2fU93qf8WipW2pp1G4HWO4/l1ub7f6/wBBR9YMO0as8CYH9n6TU9f0W+G4RP0vl+cmyPpt45M+H+v721BTI3kEiQ3d5xPx/NTj036BmvJLYP8Aaaz/AMxUXT6Jj+G38UOifdPOmzbG7+1Ht9P/AMMJJSFjAGuaYeydr2yHDx/85UHEmOCH6Fze5/lM0du/1Ymv5P0vPw8/7P8AqxQtjeefnzGn85/3389BKJ52u2EB08tmAfg4nYgWgRqS0t0IcNr2mPoOd/1G/wDR/wCjSzu8/Ld9OPPb/wB+U3TsZun6B+lG7/of4JNXNfIfAD2h7Q78+NNNOB7fb+9W/wD62q/quFb62RcOwnQz/J/Msd/pKvR/4T1VNvFn85Om7Z/N9v5z83+p6aqifXs2+Bjjw/P9T8xBIf/ZADhCSU0EIQAAAAAAXQAAAAEBAAAADwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAAABcAQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAIABDAEMAIAAyADAAMQA1AAAAAQA4QklNBAYAAAAAAAcABgEBAAEBAP/hDPhodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNDU5REVCQjE4RDA4ODlGMzk4RkJERTk1RjEyMjA5NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MWU0NzE3YjAtYTA5OS00OTViLThjOGYtODliZTg1MWFjNDY0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0YzY0YThiLTQ5MWUtNDRiYi1hYzZiLTIzNDM4NWJkYTBmMSIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxNi0wNC0xM1QxMjoyMjozOS0wNDowMCIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDQtMTNUMTI6MTc6MjAtMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE2LTA0LTEzVDEyOjIyOjM5LTA0OjAwIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0YzY0YThiLTQ5MWUtNDRiYi1hYzZiLTIzNDM4NWJkYTBmMSIgc3RFdnQ6d2hlbj0iMjAxNi0wNC0xM1QxMjoyMjozOS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gxYSUNDX1BS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ZG9iagoyNSAwIG9iagooKQplbmRvYmoKMjYgMCBvYmoKKCkKZW5kb2JqCjI3IDAgb2JqCihXb3JkKQplbmRvYmoKMjggMCBvYmoKKEQ6MjAxNjA0MTQyMzU2MjJaMDAnMDAnKQplbmRvYmoKMjkgMCBvYmoKKCkKZW5kb2JqCjMwIDAgb2JqClsgKCkgXQplbmRvYmoKMSAwIG9iago8PCAvVGl0bGUgMjMgMCBSIC9BdXRob3IgMjUgMCBSIC9TdWJqZWN0IDI2IDAgUiAvUHJvZHVjZXIgMjQgMCBSIC9DcmVhdG9yCjI3IDAgUiAvQ3JlYXRpb25EYXRlIDI4IDAgUiAvTW9kRGF0ZSAyOCAwIFIgL0tleXdvcmRzIDI5IDAgUiAvQUFQTDpLZXl3b3JkcwozMCAwIFIgPj4KZW5kb2JqCnhyZWYKMCAzMQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwODkyNTAgMDAwMDAgbiAKMDAwMDAwMjg4OCAwMDAwMCBuIAowMDAwMDc1MDYzIDAwMDAwIG4gCjAwMDAwMDAwMjIgMDAwMDAgbiAKMDAwMDAwMjg2OCAwMDAwMCBuIAowMDAwMDAyOTkyIDAwMDAwIG4gCjAwMDAwNzIyNTEgMDAwMDAgbiAKMDAwMDAwMDAwMCAwMDAwMCBuIAowMDAwMDc1MTk2IDAwMDAwIG4gCjAwMDAwMDMxNDAgMDAwMDAgbiAKMDAwMDA2OTQ5MyAwMDAwMCBuIAowMDAwMDc1MDI2IDAwMDAwIG4gCjAwMDAwNjk1MTUgMDAwMDAgbiAKMDAwMDA3MjIzMCAwMDAwMCBuIAowMDAwMDcyMjg3IDAwMDAwIG4gCjAwMDAwNzUwMDUgMDAwMDAgbiAKMDAwMDA3NTE0NiAwMDAwMCBuIAowMDAwMDc2MDY4IDAwMDAwIG4gCjAwMDAwNzU1MTAgMDAwMDAgbiAKMDAwMDA3NjA0OCAwMDAwMCBuIAowMDAwMDc2MzA2IDAwMDAwIG4gCjAwMDAwODkwMTEgMDAwMDAgbiAKMDAwMDA4OTAzMyAwMDAwMCBuIAowMDAwMDg5MDUyIDAwMDAwIG4gCjAwMDAwODkxMDUgMDAwMDAgbiAKMDAwMDA4OTEyNCAwMDAwMCBuIAowMDAwMDg5MTQzIDAwMDAwIG4gCjAwMDAwODkxNjYgMDAwMDAgbiAKMDAwMDA4OTIwOCAwMDAwMCBuIAowMDAwMDg5MjI3IDAwMDAwIG4gCnRyYWlsZXIKPDwgL1NpemUgMzEgL1Jvb3QgMTcgMCBSIC9JbmZvIDEgMCBSIC9JRCBbIDw4ZWVkMTFkZTQ1OWMyZWQzNWZlYzQxMGJmMDU3YTg3MD4KPDhlZWQxMWRlNDU5YzJlZDM1ZmVjNDEwYmYwNTdhODcwPiBdID4+CnN0YXJ0eHJlZgo4OTQyNQolJUVPRgo=';
    _printJsDefault.default({
        printable: facturaBase64,
        type: 'pdf',
        base64: true
    });
}
document.getElementById('test-button').addEventListener('click', printTest);
document.getElementById('test-button2').addEventListener('click', printPdfBase64);

},{"print-js":"lTzUY","@parcel/transformer-js/src/esmodule-helpers.js":"obaoz"}],"lTzUY":[function(require,module,exports) {
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
    else if (typeof define === 'function' && define.amd) define([], factory);
    else if (typeof exports === 'object') exports["printJS"] = factory();
    else root["printJS"] = factory();
})(window, function() {
    return(/******/ (function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {
        };
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {
                }
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != 'string') for(var key in value)__webpack_require__.d(ns, key, (function(key1) {
                return value[key1];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module) {
            /******/ var getter = module && module.__esModule ? /******/ function getDefault() {
                return module['default'];
            } : /******/ function getModuleExports() {
                return module;
            };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 0);
    /******/ })({
        /***/ "./src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");
            /* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _js_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/init */ "./src/js/init.js");
            var printJS = _js_init__WEBPACK_IMPORTED_MODULE_1__["default"].init;
            if (typeof window !== 'undefined') window.printJS = printJS;
            /* harmony default export */ __webpack_exports__["default"] = printJS;
        /***/ },
        /***/ "./src/js/browser.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var Browser = {
                // Firefox 1.0+
                isFirefox: function isFirefox() {
                    return typeof InstallTrigger !== 'undefined';
                },
                // Internet Explorer 6-11
                isIE: function isIE() {
                    return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;
                },
                // Edge 20+
                isEdge: function isEdge() {
                    return !Browser.isIE() && !!window.StyleMedia;
                },
                // Chrome 1+
                isChrome: function isChrome() {
                    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
                    return !!context.chrome;
                },
                // At least Safari 3+: "[object HTMLElementConstructor]"
                isSafari: function isSafari() {
                    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
                },
                // IOS Chrome
                isIOSChrome: function isIOSChrome() {
                    return navigator.userAgent.toLowerCase().indexOf('crios') !== -1;
                }
            };
            /* harmony default export */ __webpack_exports__["default"] = Browser;
        /***/ },
        /***/ "./src/js/functions.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWrapper", function() {
                return addWrapper;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizePrint", function() {
                return capitalizePrint;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectStyles", function() {
                return collectStyles;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHeader", function() {
                return addHeader;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUp", function() {
                return cleanUp;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRawHTML", function() {
                return isRawHTML;
            });
            /* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
            /* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
            function _typeof(obj) {
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
                    return typeof obj1;
                };
                else _typeof = function _typeof2(obj1) {
                    return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
                };
                return _typeof(obj);
            }
            function addWrapper(htmlData, params) {
                var bodyStyle = 'font-family:' + params.font + ' !important; font-size: ' + params.font_size + ' !important; width:100%;';
                return '<div style="' + bodyStyle + '">' + htmlData + '</div>';
            }
            function capitalizePrint(obj) {
                return obj.charAt(0).toUpperCase() + obj.slice(1);
            }
            function collectStyles(element, params) {
                var win = document.defaultView || window; // String variable to hold styling for each element
                var elementStyle = ''; // Loop over computed styles
                var styles = win.getComputedStyle(element, '');
                for(var key = 0; key < styles.length; key++){
                    // Check if style should be processed
                    if (params.targetStyles.indexOf('*') !== -1 || params.targetStyle.indexOf(styles[key]) !== -1 || targetStylesMatch(params.targetStyles, styles[key])) {
                        if (styles.getPropertyValue(styles[key])) elementStyle += styles[key] + ':' + styles.getPropertyValue(styles[key]) + ';';
                    }
                } // Print friendly defaults (deprecated)
                elementStyle += 'max-width: ' + params.maxWidth + 'px !important; font-size: ' + params.font_size + ' !important;';
                return elementStyle;
            }
            function targetStylesMatch(styles, value) {
                for(var i = 0; i < styles.length; i++){
                    if (_typeof(value) === 'object' && value.indexOf(styles[i]) !== -1) return true;
                }
                return false;
            }
            function addHeader(printElement, params) {
                // Create the header container div
                var headerContainer = document.createElement('div'); // Check if the header is text or raw html
                if (isRawHTML(params.header)) headerContainer.innerHTML = params.header;
                else {
                    // Create header element
                    var headerElement = document.createElement('h1'); // Create header text node
                    var headerNode = document.createTextNode(params.header); // Build and style
                    headerElement.appendChild(headerNode);
                    headerElement.setAttribute('style', params.headerStyle);
                    headerContainer.appendChild(headerElement);
                }
                printElement.insertBefore(headerContainer, printElement.childNodes[0]);
            }
            function cleanUp(params) {
                // If we are showing a feedback message to user, remove it
                if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_0__["default"].close(); // Check for a finished loading hook function
                if (params.onLoadingEnd) params.onLoadingEnd(); // If preloading pdf files, clean blob url
                if (params.showModal || params.onLoadingStart) window.URL.revokeObjectURL(params.printable); // Run onPrintDialogClose callback
                var event = 'mouseover';
                if (_browser__WEBPACK_IMPORTED_MODULE_1__["default"].isChrome() || _browser__WEBPACK_IMPORTED_MODULE_1__["default"].isFirefox()) // Ps.: Firefox will require an extra click in the document to fire the focus event.
                event = 'focus';
                var handler = function handler1() {
                    // Make sure the event only happens once.
                    window.removeEventListener(event, handler1);
                    params.onPrintDialogClose(); // Remove iframe from the DOM
                    var iframe = document.getElementById(params.frameId);
                    if (iframe) iframe.remove();
                };
                window.addEventListener(event, handler);
            }
            function isRawHTML(raw) {
                var regexHtml = new RegExp('<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>');
                return regexHtml.test(raw);
            }
        /***/ },
        /***/ "./src/js/html.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
            /* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
            function _typeof(obj) {
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
                    return typeof obj1;
                };
                else _typeof = function _typeof2(obj1) {
                    return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
                };
                return _typeof(obj);
            }
            /* harmony default export */ __webpack_exports__["default"] = {
                print: function print(params, printFrame) {
                    // Get the DOM printable element
                    var printElement = isHtmlElement(params.printable) ? params.printable : document.getElementById(params.printable); // Check if the element exists
                    if (!printElement) {
                        window.console.error('Invalid HTML element id: ' + params.printable);
                        return;
                    } // Clone the target element including its children (if available)
                    params.printableElement = cloneElement(printElement, params); // Add header
                    if (params.header) Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params);
                     // Print html element contents
                    _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
                }
            };
            function cloneElement(element, params) {
                // Clone the main node (if not already inside the recursion process)
                var clone = element.cloneNode(); // Loop over and process the children elements / nodes (including text nodes)
                var childNodesArray = Array.prototype.slice.call(element.childNodes);
                for(var i = 0; i < childNodesArray.length; i++){
                    // Check if we are skipping the current element
                    if (params.ignoreElements.indexOf(childNodesArray[i].id) !== -1) continue;
                     // Clone the child element
                    var clonedChild = cloneElement(childNodesArray[i], params); // Attach the cloned child to the cloned parent node
                    clone.appendChild(clonedChild);
                } // Get all styling for print element (for nodes of type element only)
                if (params.scanStyles && element.nodeType === 1) clone.setAttribute('style', Object(_functions__WEBPACK_IMPORTED_MODULE_0__["collectStyles"])(element, params));
                 // Check if the element needs any state processing (copy user input data)
                switch(element.tagName){
                    case 'SELECT':
                        // Copy the current selection value to its clone
                        clone.value = element.value;
                        break;
                    case 'CANVAS':
                        // Copy the canvas content to its clone
                        clone.getContext('2d').drawImage(element, 0, 0);
                        break;
                }
                return clone;
            }
            function isHtmlElement(printable) {
                // Check if element is instance of HTMLElement or has nodeType === 1 (for elements in iframe)
                return _typeof(printable) === 'object' && printable && (printable instanceof HTMLElement || printable.nodeType === 1);
            }
        /***/ },
        /***/ "./src/js/image.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
            /* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
            /* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
            /* harmony default export */ __webpack_exports__["default"] = {
                print: function print(params, printFrame) {
                    // Check if we are printing one image or multiple images
                    if (params.printable.constructor !== Array) // Create array with one image
                    params.printable = [
                        params.printable
                    ];
                     // Create printable element (container)
                    params.printableElement = document.createElement('div'); // Create all image elements and append them to the printable container
                    params.printable.forEach(function(src) {
                        // Create the image element
                        var img = document.createElement('img');
                        img.setAttribute('style', params.imageStyle); // Set image src with the file url
                        img.src = src; // The following block is for Firefox, which for some reason requires the image's src to be fully qualified in
                        // order to print it
                        if (_browser__WEBPACK_IMPORTED_MODULE_2__["default"].isFirefox()) {
                            var fullyQualifiedSrc = img.src;
                            img.src = fullyQualifiedSrc;
                        } // Create the image wrapper
                        var imageWrapper = document.createElement('div'); // Append image to the wrapper element
                        imageWrapper.appendChild(img); // Append wrapper to the printable element
                        params.printableElement.appendChild(imageWrapper);
                    }); // Check if we are adding a print header
                    if (params.header) Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params); // Print image
                    _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
                }
            };
        /***/ },
        /***/ "./src/js/init.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
            /* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
            /* harmony import */ var _pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf */ "./src/js/pdf.js");
            /* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "./src/js/html.js");
            /* harmony import */ var _raw_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raw-html */ "./src/js/raw-html.js");
            /* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image */ "./src/js/image.js");
            /* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./json */ "./src/js/json.js");
            function _typeof(obj) {
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
                    return typeof obj1;
                };
                else _typeof = function _typeof2(obj1) {
                    return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
                };
                return _typeof(obj);
            }
            var printTypes = [
                'pdf',
                'html',
                'image',
                'json',
                'raw-html'
            ];
            /* harmony default export */ __webpack_exports__["default"] = {
                init: function init() {
                    var params = {
                        printable: null,
                        fallbackPrintable: null,
                        type: 'pdf',
                        header: null,
                        headerStyle: 'font-weight: 300;',
                        maxWidth: 800,
                        properties: null,
                        gridHeaderStyle: 'font-weight: bold; padding: 5px; border: 1px solid #dddddd;',
                        gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
                        showModal: false,
                        onError: function onError(error) {
                            throw error;
                        },
                        onLoadingStart: null,
                        onLoadingEnd: null,
                        onPrintDialogClose: function onPrintDialogClose() {
                        },
                        onIncompatibleBrowser: function onIncompatibleBrowser() {
                        },
                        modalMessage: 'Retrieving Document...',
                        frameId: 'printJS',
                        printableElement: null,
                        documentTitle: 'Document',
                        targetStyle: [
                            'clear',
                            'display',
                            'width',
                            'min-width',
                            'height',
                            'min-height',
                            'max-height'
                        ],
                        targetStyles: [
                            'border',
                            'box',
                            'break',
                            'text-decoration'
                        ],
                        ignoreElements: [],
                        repeatTableHeader: true,
                        css: null,
                        style: null,
                        scanStyles: true,
                        base64: false,
                        // Deprecated
                        onPdfOpen: null,
                        font: 'TimesNewRoman',
                        font_size: '12pt',
                        honorMarginPadding: true,
                        honorColor: false,
                        imageStyle: 'max-width: 100%;'
                    }; // Check if a printable document or object was supplied
                    var args = arguments[0];
                    if (args === undefined) throw new Error('printJS expects at least 1 attribute.');
                     // Process parameters
                    switch(_typeof(args)){
                        case 'string':
                            params.printable = encodeURI(args);
                            params.fallbackPrintable = params.printable;
                            params.type = arguments[1] || params.type;
                            break;
                        case 'object':
                            params.printable = args.printable;
                            params.fallbackPrintable = typeof args.fallbackPrintable !== 'undefined' ? args.fallbackPrintable : params.printable;
                            params.fallbackPrintable = params.base64 ? "data:application/pdf;base64,".concat(params.fallbackPrintable) : params.fallbackPrintable;
                            for(var k in params){
                                if (k === 'printable' || k === 'fallbackPrintable') continue;
                                params[k] = typeof args[k] !== 'undefined' ? args[k] : params[k];
                            }
                            break;
                        default:
                            throw new Error('Unexpected argument type! Expected "string" or "object", got ' + _typeof(args));
                    } // Validate printable
                    if (!params.printable) throw new Error('Missing printable information.'); // Validate type
                    if (!params.type || typeof params.type !== 'string' || printTypes.indexOf(params.type.toLowerCase()) === -1) throw new Error('Invalid print type. Available types are: pdf, html, image and json.');
                     // Check if we are showing a feedback message to the user (useful for large files)
                    if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_1__["default"].show(params); // Check for a print start hook function
                    if (params.onLoadingStart) params.onLoadingStart(); // To prevent duplication and issues, remove any used printFrame from the DOM
                    var usedFrame = document.getElementById(params.frameId);
                    if (usedFrame) usedFrame.parentNode.removeChild(usedFrame); // Create a new iframe for the print job
                    var printFrame = document.createElement('iframe');
                    if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) // Set the iframe to be is visible on the page (guaranteed by fixed position) but hidden using opacity 0, because
                    // this works in Firefox. The height needs to be sufficient for some part of the document other than the PDF
                    // viewer's toolbar to be visible in the page
                    printFrame.setAttribute('style', 'width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0');
                    else // Hide the iframe in other browsers
                    printFrame.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute; border: 0');
                     // Set iframe element id
                    printFrame.setAttribute('id', params.frameId); // For non pdf printing, pass an html document string to srcdoc (force onload callback)
                    if (params.type !== 'pdf') {
                        printFrame.srcdoc = '<html><head><title>' + params.documentTitle + '</title>'; // Attach css files
                        if (params.css) {
                            // Add support for single file
                            if (!Array.isArray(params.css)) params.css = [
                                params.css
                            ]; // Create link tags for each css file
                            params.css.forEach(function(file) {
                                printFrame.srcdoc += '<link rel="stylesheet" href="' + file + '">';
                            });
                        }
                        printFrame.srcdoc += '</head><body></body></html>';
                    } // Check printable type
                    switch(params.type){
                        case 'pdf':
                            // Check browser support for pdf and if not supported we will just open the pdf file instead
                            if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isIE()) try {
                                console.info('Print.js doesn\'t support PDF printing in Internet Explorer.');
                                var win = window.open(params.fallbackPrintable, '_blank');
                                win.focus();
                                params.onIncompatibleBrowser();
                            } catch (error) {
                                params.onError(error);
                            } finally{
                                // Make sure there is no loading modal opened
                                if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_1__["default"].close();
                                if (params.onLoadingEnd) params.onLoadingEnd();
                            }
                            else _pdf__WEBPACK_IMPORTED_MODULE_2__["default"].print(params, printFrame);
                            break;
                        case 'image':
                            _image__WEBPACK_IMPORTED_MODULE_5__["default"].print(params, printFrame);
                            break;
                        case 'html':
                            _html__WEBPACK_IMPORTED_MODULE_3__["default"].print(params, printFrame);
                            break;
                        case 'raw-html':
                            _raw_html__WEBPACK_IMPORTED_MODULE_4__["default"].print(params, printFrame);
                            break;
                        case 'json':
                            _json__WEBPACK_IMPORTED_MODULE_6__["default"].print(params, printFrame);
                            break;
                    }
                }
            };
        /***/ },
        /***/ "./src/js/json.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
            /* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
            function _typeof(obj) {
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
                    return typeof obj1;
                };
                else _typeof = function _typeof2(obj1) {
                    return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
                };
                return _typeof(obj);
            }
            /* harmony default export */ __webpack_exports__["default"] = {
                print: function print(params, printFrame) {
                    // Check if we received proper data
                    if (_typeof(params.printable) !== 'object') throw new Error('Invalid javascript data object (JSON).');
                     // Validate repeatTableHeader
                    if (typeof params.repeatTableHeader !== 'boolean') throw new Error('Invalid value for repeatTableHeader attribute (JSON).');
                     // Validate properties
                    if (!params.properties || !Array.isArray(params.properties)) throw new Error('Invalid properties array for your JSON data.');
                     // We will format the property objects to keep the JSON api compatible with older releases
                    params.properties = params.properties.map(function(property) {
                        return {
                            field: _typeof(property) === 'object' ? property.field : property,
                            displayName: _typeof(property) === 'object' ? property.displayName : property,
                            columnSize: _typeof(property) === 'object' && property.columnSize ? property.columnSize + ';' : 100 / params.properties.length + '%;'
                        };
                    }); // Create a print container element
                    params.printableElement = document.createElement('div'); // Check if we are adding a print header
                    if (params.header) Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params);
                     // Build the printable html data
                    params.printableElement.innerHTML += jsonToHTML(params); // Print the json data
                    _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
                }
            };
            function jsonToHTML(params) {
                // Get the row and column data
                var data = params.printable;
                var properties = params.properties; // Create a html table
                var htmlData = '<table style="border-collapse: collapse; width: 100%;">'; // Check if the header should be repeated
                if (params.repeatTableHeader) htmlData += '<thead>';
                 // Add the table header row
                htmlData += '<tr>'; // Add the table header columns
                for(var a = 0; a < properties.length; a++)htmlData += '<th style="width:' + properties[a].columnSize + ';' + params.gridHeaderStyle + '">' + Object(_functions__WEBPACK_IMPORTED_MODULE_0__["capitalizePrint"])(properties[a].displayName) + '</th>';
                 // Add the closing tag for the table header row
                htmlData += '</tr>'; // If the table header is marked as repeated, add the closing tag
                if (params.repeatTableHeader) htmlData += '</thead>';
                 // Create the table body
                htmlData += '<tbody>'; // Add the table data rows
                for(var i = 0; i < data.length; i++){
                    // Add the row starting tag
                    htmlData += '<tr>'; // Print selected properties only
                    for(var n = 0; n < properties.length; n++){
                        var stringData = data[i]; // Support nested objects
                        var property = properties[n].field.split('.');
                        if (property.length > 1) for(var p = 0; p < property.length; p++)stringData = stringData[property[p]];
                        else stringData = stringData[properties[n].field];
                         // Add the row contents and styles
                        htmlData += '<td style="width:' + properties[n].columnSize + params.gridStyle + '">' + stringData + '</td>';
                    } // Add the row closing tag
                    htmlData += '</tr>';
                } // Add the table and body closing tags
                htmlData += '</tbody></table>';
                return htmlData;
            }
        /***/ },
        /***/ "./src/js/modal.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var Modal = {
                show: function show(params) {
                    // Build modal
                    var modalStyle = "font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;"; // Create wrapper
                    var printModal = document.createElement('div');
                    printModal.setAttribute('style', modalStyle);
                    printModal.setAttribute('id', 'printJS-Modal'); // Create content div
                    var contentDiv = document.createElement('div');
                    contentDiv.setAttribute('style', 'display:table-cell; vertical-align:middle; padding-bottom:100px;'); // Add close button (requires print.css)
                    var closeButton = document.createElement('div');
                    closeButton.setAttribute('class', 'printClose');
                    closeButton.setAttribute('id', 'printClose');
                    contentDiv.appendChild(closeButton); // Add spinner (requires print.css)
                    var spinner = document.createElement('span');
                    spinner.setAttribute('class', 'printSpinner');
                    contentDiv.appendChild(spinner); // Add message
                    var messageNode = document.createTextNode(params.modalMessage);
                    contentDiv.appendChild(messageNode); // Add contentDiv to printModal
                    printModal.appendChild(contentDiv); // Append print modal element to document body
                    document.getElementsByTagName('body')[0].appendChild(printModal); // Add event listener to close button
                    document.getElementById('printClose').addEventListener('click', function() {
                        Modal.close();
                    });
                },
                close: function close() {
                    var printModal = document.getElementById('printJS-Modal');
                    if (printModal) printModal.parentNode.removeChild(printModal);
                }
            };
            /* harmony default export */ __webpack_exports__["default"] = Modal;
        /***/ },
        /***/ "./src/js/pdf.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
            /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
            /* harmony default export */ __webpack_exports__["default"] = {
                print: function print(params, printFrame) {
                    // Check if we have base64 data
                    if (params.base64) {
                        var bytesArray = Uint8Array.from(atob(params.printable), function(c) {
                            return c.charCodeAt(0);
                        });
                        createBlobAndPrint(params, printFrame, bytesArray);
                        return;
                    } // Format pdf url
                    params.printable = /^(blob|http|\/\/)/i.test(params.printable) ? params.printable : window.location.origin + (params.printable.charAt(0) !== '/' ? '/' + params.printable : params.printable); // Get the file through a http request (Preload)
                    var req = new window.XMLHttpRequest();
                    req.responseType = 'arraybuffer';
                    req.addEventListener('error', function() {
                        Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
                        params.onError(req.statusText, req); // Since we don't have a pdf document available, we will stop the print job
                    });
                    req.addEventListener('load', function() {
                        // Check for errors
                        if ([
                            200,
                            201
                        ].indexOf(req.status) === -1) {
                            Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
                            params.onError(req.statusText, req); // Since we don't have a pdf document available, we will stop the print job
                            return;
                        } // Print requested document
                        createBlobAndPrint(params, printFrame, req.response);
                    });
                    req.open('GET', params.printable, true);
                    req.send();
                }
            };
            function createBlobAndPrint(params, printFrame, data) {
                // Pass response or base64 data to a blob and create a local object url
                var localPdf = new window.Blob([
                    data
                ], {
                    type: 'application/pdf'
                });
                localPdf = window.URL.createObjectURL(localPdf); // Set iframe src with pdf document url
                printFrame.setAttribute('src', localPdf);
                _print__WEBPACK_IMPORTED_MODULE_0__["default"].send(params, printFrame);
            }
        /***/ },
        /***/ "./src/js/print.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
            /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
            var Print = {
                send: function send(params, printFrame) {
                    // Append iframe element to document body
                    document.getElementsByTagName('body')[0].appendChild(printFrame); // Get iframe element
                    var iframeElement = document.getElementById(params.frameId); // Wait for iframe to load all content
                    iframeElement.onload = function() {
                        if (params.type === 'pdf') {
                            // Add a delay for Firefox. In my tests, 1000ms was sufficient but 100ms was not
                            if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) setTimeout(function() {
                                return performPrint(iframeElement, params);
                            }, 1000);
                            else performPrint(iframeElement, params);
                            return;
                        } // Get iframe element document
                        var printDocument = iframeElement.contentWindow || iframeElement.contentDocument;
                        if (printDocument.document) printDocument = printDocument.document; // Append printable element to the iframe body
                        printDocument.body.appendChild(params.printableElement); // Add custom style
                        if (params.type !== 'pdf' && params.style) {
                            // Create style element
                            var style = document.createElement('style');
                            style.innerHTML = params.style; // Append style element to iframe's head
                            printDocument.head.appendChild(style);
                        } // If printing images, wait for them to load inside the iframe
                        var images = printDocument.getElementsByTagName('img');
                        if (images.length > 0) loadIframeImages(Array.from(images)).then(function() {
                            return performPrint(iframeElement, params);
                        });
                        else performPrint(iframeElement, params);
                    };
                }
            };
            function performPrint(iframeElement, params) {
                try {
                    iframeElement.focus(); // If Edge or IE, try catch with execCommand
                    if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isEdge() || _browser__WEBPACK_IMPORTED_MODULE_0__["default"].isIE()) try {
                        iframeElement.contentWindow.document.execCommand('print', false, null);
                    } catch (e) {
                        iframeElement.contentWindow.print();
                    }
                    else // Other browsers
                    iframeElement.contentWindow.print();
                } catch (error) {
                    params.onError(error);
                } finally{
                    if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
                        // Move the iframe element off-screen and make it invisible
                        iframeElement.style.visibility = 'hidden';
                        iframeElement.style.left = '-1px';
                    }
                    Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
                }
            }
            function loadIframeImages(images) {
                var promises = images.map(function(image) {
                    if (image.src && image.src !== window.location.href) return loadIframeImage(image);
                });
                return Promise.all(promises);
            }
            function loadIframeImage(image) {
                return new Promise(function(resolve) {
                    var pollImage = function pollImage1() {
                        !image || typeof image.naturalWidth === 'undefined' || image.naturalWidth === 0 || !image.complete ? setTimeout(pollImage1, 500) : resolve();
                    };
                    pollImage();
                });
            }
            /* harmony default export */ __webpack_exports__["default"] = Print;
        /***/ },
        /***/ "./src/js/raw-html.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
            /* harmony default export */ __webpack_exports__["default"] = {
                print: function print(params, printFrame) {
                    // Create printable element (container)
                    params.printableElement = document.createElement('div');
                    params.printableElement.setAttribute('style', 'width:100%'); // Set our raw html as the printable element inner html content
                    params.printableElement.innerHTML = params.printable; // Print html contents
                    _print__WEBPACK_IMPORTED_MODULE_0__["default"].send(params, printFrame);
                }
            };
        /***/ },
        /***/ "./src/sass/index.scss": function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/ },
        /***/ 0: function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! ./src/index.js */ "./src/index.js");
        /***/ }
    })["default"]);
});

},{}],"obaoz":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["iyk8B","8dZPq"], "8dZPq", "parcelRequirefbd2")

//# sourceMappingURL=index.6ed8a0c2.js.map
