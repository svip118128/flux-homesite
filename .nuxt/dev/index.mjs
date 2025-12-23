import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, getCookie, setCookie, removeResponseHeader, getQuery as getQuery$1, readBody, getRouterParam, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatusText } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/@vue/shared/dist/shared.cjs.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, joinRelativeURL, parsePath, withLeadingSlash, withTrailingSlash, decodePath, withoutTrailingSlash } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/ufo/dist/index.mjs';
import destr, { destr as destr$1 } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/klona/dist/index.mjs';
import defu, { defuFn, createDefu } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/source-map/source-map.js';
import { createRouterMatcher } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/vue-router/vue-router.node.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/errx/dist/index.js';
import { isVNode, toValue, isRef } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/vue/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/unhead/dist/server.mjs';
import process$1 from 'node:process';
import { renderToString } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file:///Users/nguyenngockhanh/Downloads/vue-app/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/nguyenngockhanh/Downloads/vue-app/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/nguyenngockhanh/Downloads/vue-app","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/nguyenngockhanh/Downloads/vue-app/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/nguyenngockhanh/Downloads/vue-app/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/nguyenngockhanh/Downloads/vue-app/.nuxt/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/nguyenngockhanh/Downloads/vue-app/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "zh",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "zh",
          "name": "中文",
          "language": ""
        },
        {
          "code": "en",
          "name": "English",
          "language": ""
        },
        {
          "code": "vi",
          "name": "Tiếng Việt",
          "language": ""
        }
      ],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "jdchat_lang",
        "cookieSecure": false,
        "fallbackLocale": "zh",
        "redirectOn": "root",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10
      },
      "domainLocales": {
        "zh": {
          "domain": ""
        },
        "en": {
          "domain": ""
        },
        "vi": {
          "domain": ""
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const iframeStorageBridge = (nonce) => (
  /* js */
  `
(function() {
  const memoryStore = {};

  const NONCE = ${JSON.stringify(nonce)}
  
  const mockStorage = {
    getItem: function(key) {
      return memoryStore[key] !== undefined ? memoryStore[key] : null;
    },
    setItem: function(key, value) {
      memoryStore[key] = String(value);
      window.parent.postMessage({
        type: 'storage-set',
        key: key,
        value: String(value),
        nonce: NONCE
      }, '*');
    },
    removeItem: function(key) {
      delete memoryStore[key];
      window.parent.postMessage({
        type: 'storage-remove',
        key: key,
        nonce: NONCE
      }, '*');
    },
    clear: function() {
      for (const key in memoryStore) {
        delete memoryStore[key];
      }
      window.parent.postMessage({
        type: 'storage-clear',
        nonce: NONCE
      }, '*');
    },
    key: function(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] !== undefined ? keys[index] : null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };
  
  try {
    Object.defineProperty(window, 'localStorage', {
      value: mockStorage,
      writable: false,
      configurable: true
    });
  } catch (e) {
    window.localStorage = mockStorage;
  }
  
  window.addEventListener('message', function(event) {
    if (event.data.type === 'storage-sync-data' && event.data.nonce === NONCE) {
      const data = event.data.data;
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          memoryStore[key] = data[key];
        }
      }
      if (typeof window.initTheme === 'function') {
        window.initTheme();
      }
      window.dispatchEvent(new Event('storage-ready'));
    }
  });
  
  window.parent.postMessage({ 
    type: 'storage-sync-request',
    nonce: NONCE
  }, '*');
})();
`
);
const parentStorageBridge = (nonce) => (
  /* js */
  `
(function() {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;
  
  // Wait for shadow root to be attached
  const checkShadow = setInterval(function() {
    if (host.shadowRoot) {
      clearInterval(checkShadow);
      const iframe = host.shadowRoot.getElementById('frame');
      if (!iframe) return;

      const NONCE = ${JSON.stringify(nonce)}
      
      window.addEventListener('message', function(event) {
        if (!event.data || event.data.nonce !== NONCE) return;
        
        const data = event.data;
        
        if (data.type === 'storage-set') {
          localStorage.setItem(data.key, data.value);
        } else if (data.type === 'storage-remove') {
          localStorage.removeItem(data.key);
        } else if (data.type === 'storage-clear') {
          localStorage.clear();
        } else if (data.type === 'storage-sync-request') {
          const allData = {};
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            allData[key] = localStorage.getItem(key);
          }
          iframe.contentWindow.postMessage({
            type: 'storage-sync-data',
            data: allData,
            nonce: NONCE
          }, '*');
        }
      });
    }
  }, 10);
})();
`
);
const errorCSS = (
  /* css */
  `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  right: 5px;
  bottom: 5px;
  left: auto;
  top: auto;
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: bottom right;
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  right: 5px;
  bottom: 5px;
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 8px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  right: 5px;
  bottom: 5px;
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 3px;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`
);
function webComponentScript(base64HTML, startMinimized) {
  return (
    /* js */
    `
  (function() {
    try {
      const host = document.querySelector('nuxt-error-overlay');
      if (!host) return;
      
      const shadow = host.attachShadow({ mode: 'open' });
      
      // Create elements
      const style = document.createElement('style');
      style.textContent = ${JSON.stringify(errorCSS)};
      
      const iframe = document.createElement('iframe');
      iframe.id = 'frame';
      iframe.src = 'data:text/html;base64,${base64HTML}';
      iframe.title = 'Detailed error stack trace';
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      
      const preview = document.createElement('div');
      preview.id = 'preview';
      
      const button = document.createElement('button');
      button.id = 'toggle';
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('type', 'button');
      button.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';
      
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('role', 'status');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.className = 'sr-only';
      
      // Update preview snapshot
      function updatePreview() {
        try {
          let previewIframe = preview.querySelector('iframe');
          if (!previewIframe) {
            previewIframe = document.createElement('iframe');
            previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
            previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
            preview.appendChild(previewIframe);
          }
          
          const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
          const cleanedHTML = document.documentElement.outerHTML
            .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
            .replace(/<script[^>]*>.*?<\\/script>/gs, '');
          
          const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
          iframeDoc.open();
          iframeDoc.write(doctype + cleanedHTML);
          iframeDoc.close();
        } catch (error) {
          console.error('Failed to update preview:', error);
        }
      }
      
      function toggleView() {
        const isMinimized = iframe.hasAttribute('inert');
        
        if (isMinimized) {
          updatePreview();
          iframe.removeAttribute('inert');
          button.setAttribute('aria-expanded', 'true');
          liveRegion.textContent = 'Showing detailed error view';
          setTimeout(function() {
            try { iframe.contentWindow.focus(); } catch {}
          }, 100);
        } else {
          iframe.setAttribute('inert', '');
          button.setAttribute('aria-expanded', 'false');
          liveRegion.textContent = 'Showing error page';
          button.focus();
        }
      }
      
      button.onclick = toggleView;
      
      document.addEventListener('keydown', function(e) {
        if ((e.key === 'Escape' || e.key === 'Esc') && !iframe.hasAttribute('inert')) {
          toggleView();
        }
      });
      
      // Append to shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(liveRegion);
      shadow.appendChild(iframe);
      shadow.appendChild(preview);
      shadow.appendChild(button);
      
      if (${startMinimized}) {
        iframe.setAttribute('inert', '');
        button.setAttribute('aria-expanded', 'false');
      }
      
      // Initialize preview
      setTimeout(updatePreview, 100);
      
    } catch (error) {
      console.error('Failed to initialize Nuxt error overlay:', error);
    }
  })();
  `
  );
}
function generateErrorOverlayHTML(html, options) {
  const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
  const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
  const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
  return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return error500; });
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    if (header === "set-cookie") {
      appendResponseHeader(event, header, value);
      continue;
    }
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  if (!globalThis._importMeta_.test && typeof html === "string") {
    const prettyResponse = await defaultHandler(error, event, { json: false });
    return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= statusCode && statusCode < 500 })}</body>`));
  }
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _i77tt_XVdr1RI6Cd5jePc7nkerAe0ihhFmYaoyxIvC8 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

/*!
  * shared v11.2.7
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => x.default);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
const isResolvedModule = (val) => isModule(val) || true;
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isResolvedModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

// @ts-nocheck
const localeCodes =  [
  "zh",
  "en",
  "vi"
];
const localeLoaders = {
  zh: [
    {
      key: "locale_zh_46json_0af17d20",
      load: () => Promise.resolve().then(function () { return zh$1; }),
      cache: true
    }
  ],
  en: [
    {
      key: "locale_en_46json_99eeb786",
      load: () => Promise.resolve().then(function () { return en$1; }),
      cache: true
    }
  ],
  vi: [
    {
      key: "locale_vi_46json_919fccfc",
      load: () => Promise.resolve().then(function () { return vi$1; }),
      cache: true
    }
  ]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    code: "zh",
    name: "中文",
    language: undefined
  },
  {
    code: "en",
    name: "English",
    language: undefined
  },
  {
    code: "vi",
    name: "Tiếng Việt",
    language: undefined
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

function useRuntimeI18n(nuxtApp, event) {
  {
    return useRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || defaultLocale);
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"Jdchat - Enterprise-grade IM with end-to-end encryption"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"}],"style":[],"script":[],"noscript":[],"title":"Jdchat - Enterprise IM"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {};
const i18nPathToPath = {};

const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) {
    return;
  }
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") {
    return;
  }
  if (path.endsWith("/__nuxt_error")) {
    return;
  }
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") {
    return;
  }
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    return withLeadingSlash(joinURL("", match.path));
  }
}

function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
const _nTFSgXj5ZHYfrbyAeWIB0HiOoyALVppB31Yotzt0GKA = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "no_prefix" === "prefix") ;
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async ({ event }) => {
    const ctx = useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const path = (pathLocale && url.pathname.slice(pathLocale.length + 1)) ?? url.pathname;
    if (!url.pathname.includes("/_i18n/-Rmd1BFh") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(event, path, pathLocale, ctx.vueI18nOptions.defaultLocale, detector);
    if (resolved.path && resolved.path !== url.pathname) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      await sendRedirect(
        event,
        joinURL(baseUrlGetter(event, ctx.vueI18nOptions.defaultLocale), resolved.path + url.search),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

const rootDir = "/Users/nguyenngockhanh/Downloads/vue-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _erdJcAwiqkjv5tIFXvR7XglKxpFpCRE_dcyNjVm0xw = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const plugins = [
  _i77tt_XVdr1RI6Cd5jePc7nkerAe0ihhFmYaoyxIvC8,
_nTFSgXj5ZHYfrbyAeWIB0HiOoyALVppB31Yotzt0GKA,
_erdJcAwiqkjv5tIFXvR7XglKxpFpCRE_dcyNjVm0xw
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _SRgOVR = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
  const ssrContext = {
    url: event.path,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || (false),
    head: createHead(unheadOptions),
    error: false,
    nuxt: void 0,
    /* NuxtApp */
    payload: {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set()
  };
  return ssrContext;
}
function setSSRError(ssrContext, error) {
  ssrContext.error = true;
  ssrContext.payload = { error };
  ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('file:///Users/nguyenngockhanh/Downloads/vue-app/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
const getClientManifest = () => import('file:///Users/nguyenngockhanh/Downloads/vue-app/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const precomputed = void 0 ;
  const renderer = createRenderer(createSSRApp, {
    precomputed,
    manifest: await getClientManifest() ,
    renderToString: renderToString$1,
    buildAssetsURL
  });
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process$1.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const precomputed = void 0 ;
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
      const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
      const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
      const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
      return appTemplate + loaderTemplate;
    }
  });
  const renderer = createRenderer(() => () => {
  }, {
    precomputed,
    manifest: await getClientManifest() ,
    renderToString: () => spaTemplate,
    buildAssetsURL
  });
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function getRenderer(ssrContext) {
  return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  setResponseHeaders(event, {
    "content-type": "application/json;charset=utf-8",
    "x-powered-by": "Nuxt"
  });
  const islandContext = await getIslandContext(event);
  const ssrContext = {
    ...createSSRContext(event),
    islandContext,
    noSSR: false,
    url: islandContext.url
  };
  const renderer = await getSSRRenderer();
  const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
    await ssrContext.nuxt?.hooks.callHook("app:error", err);
    throw err;
  });
  if (ssrContext.payload?.error) {
    throw ssrContext.payload.error;
  }
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult });
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  {
    const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      ssrContext.head.push({ link }, { mode: "server" });
    }
  }
  const islandHead = {};
  for (const entry of ssrContext.head.entries.values()) {
    for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
      const currentValue = islandHead[key];
      if (Array.isArray(currentValue)) {
        currentValue.push(...value);
      }
      islandHead[key] = value;
    }
  }
  const islandResponse = {
    id: islandContext.id,
    head: islandHead,
    html: getServerComponentHTML(renderResult.html),
    components: getClientIslandResponse(ssrContext),
    slots: getSlotIslandResponse(ssrContext)
  };
  await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
  return islandResponse;
});
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr$1(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

const storage = prefixStorage(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: -1 ,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  async shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) {
      return false;
    }
    const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
    return !ctx.localeConfigs?.[locale]?.cacheable;
  }
});
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _YuFYg8 = _messagesHandler ;

const _lazy_OL9R0b = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _SRgOVR, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_OL9R0b, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _YuFYg8, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_OL9R0b, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "statusCode": 500, "statusMessage": "Internal server error", "description": "This page is temporarily unavailable.", "refresh": "Refresh this page" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(messages.statusCode) + " - " + escapeHtml(messages.statusMessage) + " | " + escapeHtml(messages.appName) + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class="antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide"><div class="max-w-520px text-center"><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]">` + escapeHtml(messages.statusCode) + '</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl">' + escapeHtml(messages.statusMessage) + '</h2><p class="mb-4 px-2 text-[#64748B] text-md">' + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

var viewNews$2 = "查看新闻";
const zh = {
	"brand.name": "Jdchat",
	"nav.home": "首页",
	"kf.title": "在线客服",
	"kf.lead": "通常 2 分钟内响应",
	"kf.email": "发邮件",
	"kf.docs": "文档",
	"kf.faq": "FAQ",
	"kf.placeholder": "请输入消息…",
	"kf.send": "发送",
	"kf.tg": "Telegram 在线客服",
	"kf.upload": "发送图片/文件",
	"kf.drop": "拖拽图片到此处或粘贴剪贴板图片",
	"kf.download": "下载",
	"kf.preview": "预览",
	"kf.intro": "你可以直接在此发送消息；也可点击📎上传图片或文件。",
	"nav.features": "特色",
	"nav.functions": "功能",
	"nav.transfer": "传输",
	"nav.solutions": "方案",
	"nav.news": "新闻",
	"nav.help": "帮助",
	"nav.faq": "问答",
	"nav.download": "下载",
	"page.title.transfer": "文件传输",
	"hero.badge": "新一代 · IM + AI",
	"hero.title": "企业级 IM 通讯，让协作更智能",
	"hero.lead": "Jdchat 采用端到端加密、分布式架构与 AI 智能助手，支持多平台、多语言，覆盖消息、群组、文件、音视频会议与机器人生态。",
	"hero.cta.getStarted": "立即开始",
	"hero.cta.download": "下载客户端",
	"hero.cta.contact": "联系销售",
	"section.features": "核心特色",
	"feature.secure": "银行级安全",
	"feature.secure.desc": "端到端加密、二次验证与权限矩阵，保障数据全生命周期安全。",
	"feature.fast": "极速可靠",
	"feature.fast.desc": "自研分布式消息队列与重试机制，超大规模下依然稳定。",
	"feature.global": "多语言多区域",
	"feature.global.desc": "内置中/英/越语言包与时区处理，支持全球团队协作。",
	"section.clients": "客户与案例",
	"section.screens": "产品截图",
	"section.download": "立即部署",
	"download.lead": "支持 iOS / Android / Windows / macOS，多平台一致体验。",
	"footer.cta": "联系我们",
	"footer.rights": "© 2025 Jdchat. All rights reserved.",
	"download.title": "下载中心",
	"download.card.ios": "iOS 安装包（TestFlight）",
	"download.card.android": "Android APK",
	"download.card.desktop": "桌面客户端",
	"download.note": "下载即表示你同意《用户协议》和《隐私政策》。",
	"page.title.features": "特色",
	"page.title.functions": "功能",
	"page.title.solutions": "方案",
	"page.title.news": "新闻资讯",
	"page.title.help": "使用帮助",
	"page.title.faq": "常见问答",
	"page.title.contact": "联系",
	"table.feature": "功能点",
	"table.desc": "说明",
	"table.status": "状态",
	"status.ready": "已支持",
	"status.dev": "开发中",
	"news.sample1": "Jdchat v1.0 发布：支持多平台与端到端加密",
	"news.sample2": "Jdchat 接入 AI 智能助手，提升客服效率 60%",
	"help.sample1": "如何创建团队与频道？",
	"help.sample2": "如何启用两步验证与安全策略？",
	"faq.q1": "Jdchat 是否支持离线消息与多设备同步？",
	"faq.a1": "支持。消息在云端加密存储，并在设备上线时自动同步。",
	"detected.os": "为你推荐的下载：",
	"section.usecases": "适用场景",
	"uc.enterprise": "企业内部沟通",
	"uc.enterprise.desc": "组织架构/审批/权限/SSO/审计留痕。",
	"uc.crossborder": "跨境团队协作",
	"uc.crossborder.desc": "多语言多时区，全球成员沟通无障碍。",
	"uc.support": "客服联络中心",
	"uc.support.desc": "多渠道接入、AI 机器人、工单与 SLA。",
	"uc.finance": "金融合规模块",
	"uc.finance.desc": "细粒度权限、加密策略与合规审计。",
	"uc.healthcare": "医疗隐私场景",
	"uc.healthcare.desc": "隐私保护、加密传输、本地化部署。",
	"uc.education": "教育教学协作",
	"uc.education.desc": "班级群、作业互动、直播课堂。",
	"section.casestudies": "落地案例",
	"case.enterprise.title": "OrionTech · 企业内部沟通",
	"case.enterprise.m1": "上线时间 3 天",
	"case.enterprise.m2": "流程效率 +40%",
	"case.enterprise.m3": "通讯成本 -25%",
	"case.crossborder.title": "Globex · 跨境协作",
	"case.crossborder.m1": "跨时区延迟 -45%",
	"case.crossborder.m2": "自动翻译命中率 95%",
	"case.crossborder.m3": "交付周期 -20%",
	"case.support.title": "MetaRetail · 客服中台",
	"case.support.m1": "响应时间 -35%",
	"case.support.m2": "一次解决率 +18%",
	"case.support.m3": "满意度 +12pt",
	"case.finance.title": "BlueBank · 金融合规",
	"case.finance.m1": "消息送达率 99.99%",
	"case.finance.m2": "审计覆盖 100%",
	"case.finance.m3": "变更可追溯",
	"case.healthcare.title": "Medix · 医疗隐私",
	"case.healthcare.m1": "PHI 全程加密",
	"case.healthcare.m2": "审计事件 0 漏记",
	"case.healthcare.m3": "本地化部署",
	"case.education.title": "NextEdu · 教学协作",
	"case.education.m1": "作业提交率 +30%",
	"case.education.m2": "课堂参与度 +22%",
	"case.education.m3": "直播稳定性 99.95%",
	"section.steps": "如何开始",
	"steps.subtitle": "三步即可拥有属于你的 Jdchat",
	"step1.title": "选择部署 & 获取安装包",
	"step1.desc": "公有云/私有化任选，下载适配你平台的客户端与服务组件。",
	"step2.title": "品牌化 & 导入团队",
	"step2.desc": "上传 Logo/主题色，导入组织与成员，设置权限与安全策略。",
	"step3.title": "上线 & 集成扩展",
	"step3.desc": "开启频道与机器人，接入 Webhook/OpenAPI，与业务系统联动。",
	"steps.cta.download": "前往下载",
	"steps.cta.help": "查看文档",
	"steps.cta.contact": "联系顾问",
	"section.faqInline": "常见问题",
	"faqinline.q1": "私有化与云部署如何选择？",
	"faqinline.a1": "看合规与运维能力：有合规要求/内网系统建议私有化，否则云更省心。",
	"faqinline.q2": "是否支持对接现有账号体系？",
	"faqinline.a2": "支持 OIDC/SAML 与自定义 Webhook，同步组织架构与单点登录。",
	"faqinline.q3": "迁移成本如何评估？",
	"faqinline.a3": "提供导入工具与顾问：成员/频道/历史消息可分批迁移。",
	"transfer.badge": "文件传输 · 即将上线",
	"transfer.title": "大文件极速传输，企业级安全",
	"transfer.lead": "支持超大文件、断点续传、端到端加密与权限控制；跨平台一致体验。",
	"transfer.cta.contact": "联系顾问",
	"transfer.cta.download": "下载客户端",
	"transfer.drop.tip": "拖拽文件到此或点击选择（静态演示）",
	"transfer.note": "当前为静态入口，功能开发中；可通过 API 接入断点续传与加密策略。",
	"transfer.f1": "极速传输",
	"transfer.f1.desc": "多线程并发、分片与压缩优化。",
	"transfer.f2": "安全合规",
	"transfer.f2.desc": "E2E 加密、到期自动销毁、审计留痕。",
	"transfer.f3": "跨平台",
	"transfer.f3.desc": "iOS / Android / Windows / macOS 全覆盖。",
	"feature.ecosystem": "开放生态",
	"feature.ecosystem.desc": "机器人、Webhook、企业 SSO、审计与归档。",
	"solutions.enterprise": "企业内聊",
	"solutions.enterprise.desc": "组织架构、审批、SSO 接入；支持多租户与分区隔离。",
	"solutions.crossborder": "跨境团队",
	"solutions.crossborder.desc": "多语言协作、国际化短信/邮件、合规审计。",
	"solutions.support": "客服中台",
	"solutions.support.desc": "AI 机器人、工单与知识库、满意度评价。",
	"solutions.finance": "金融行业",
	"solutions.finance.desc": "合规与加密策略、细粒度权限管理。",
	"solutions.healthcare": "医疗行业",
	"solutions.healthcare.desc": "隐私保护、留痕审计、专有部署。",
	"solutions.education": "教育行业",
	"solutions.education.desc": "班级群、作业协作、直播课堂工具链。",
	"features.lead": "围绕安全、性能、全球化、可扩展性四大维度，打造企业级沟通基座。",
	"feature.e2e.desc": "端到端加密，安全传输与存储",
	"feature.av.desc": "高清音视频会议，噪声抑制",
	"feature.bot.desc": "机器人平台、Webhook、指令路由",
	"feature.audit.desc": "安全审计、数据合规与归档",
	"feature.sso.desc": "OIDC/SAML 单点登录",
	"feature.storage.desc": "分片与断点续传、加密存储",
	"feature.international.desc": "多语言、多时区、多货币",
	"func.chat": "聊天",
	"func.chat.desc": "单聊/群聊、已读回执、消息撤回、置顶与收藏",
	"func.security": "安全",
	"func.security.desc": "端到端加密、2FA、会话风控、设备管理",
	"func.performance": "性能",
	"func.performance.desc": "海量并发、弱网优化、消息重试与幂等",
	"func.collab": "协作",
	"func.collab.desc": "文件共享、任务、公告、{'@'}组织/群组",
	"func.support": "客服",
	"func.support.desc": "多渠道接入、智能分配、SLA 监控",
	"func.admin": "管理",
	"func.admin.desc": "分级权限、审计日志、行为留痕",
	"func.platform": "开放平台",
	"func.platform.desc": "Bot、Webhook、OpenAPI",
	"func.multi": "多端",
	"func.multi.desc": "iOS/Android/Windows/macOS",
	"faq.q2": "如何私有化部署？",
	"faq.a2": "支持容器化部署（Docker Compose/K8s），可按需扩展。",
	"help.item1": "如何创建团队与频道？",
	"help.item2": "如何启用两步验证与安全策略？",
	"help.item3": "批量导入成员与组织架构",
	"news.item1.title": "Jdchat v1.0 发布：支持多平台与端到端加密",
	"news.item1.date": "2025-08-26 • Jdchat Team",
	"news.item1.desc": "首次公开发布，提供移动与桌面多平台客户端。",
	"news.item2.title": "Jdchat 接入 AI 智能助手，提升客服效率 60%",
	"news.item2.date": "2025-08-10 • Jdchat Team",
	"news.item2.desc": "AI 智能助手上线，自动归类意图与回复建议。",
	"contact.lead": "请填写你的需求，我们将在 1 个工作日内与您联系。",
	"contact.label.name": "公司/姓名",
	"contact.label.email": "邮箱",
	"contact.label.phone": "电话/微信",
	"contact.label.edition": "意向版本",
	"contact.option.private": "私有化部署",
	"contact.option.cloud": "公有云",
	"contact.label.message": "需求描述",
	"contact.placeholder": "请描述你的场景、预计用户规模等",
	"contact.submit": "提交",
	"contact.emailDirect": "或直接邮箱",
	"contact.notice": "提示：表单为纯前端实现，若需后端收件，请提供第三方表单网关地址。",
	"transfer.chooseFiles": "选择文件",
	"helpDetail.team.title": "如何创建团队与频道？",
	"helpDetail.team.intro": "前往“管理后台 → 团队”，新建团队后可创建频道，支持公开/私有与权限设置。",
	"helpDetail.2fa.title": "如何启用两步验证与安全策略？",
	"helpDetail.2fa.intro": "在“设置 → 安全”，开启二次验证（GA/短信），并配置登录/IP 白名单策略。",
	"helpDetail.import.title": "批量导入成员与组织架构",
	"helpDetail.import.intro": "支持 CSV/Excel 导入，字段包括姓名/邮箱/部门/角色。",
	"helpDetail.steps": "操作步骤",
	"helpDetail.step1": "登录 Jdchat 管理后台。",
	"helpDetail.step2": "按照页面提示填写配置。",
	"helpDetail.step3": "保存后在客户端验证效果。",
	"helpDetail.tip": "提示：如需 API 自动化，请联系技术支持开通。",
	"helpDetail.back": "← 返回帮助列表",
	"newsDetail.v1.title": "Jdchat v1.0 发布：支持多平台与端到端加密",
	"newsDetail.v1.date": "2025-08-26 • Jdchat Team",
	"newsDetail.v1.content": "我们正式发布 v1.0 版本，支持端到端加密与跨平台同步，适配 iOS/Android/Windows/macOS。后续将引入机器人平台、开放 API 与更完整的合规审计能力。",
	"newsDetail.ai.title": "Jdchat 接入 AI 智能助手，提升客服效率 60%",
	"newsDetail.ai.date": "2025-08-10 • Jdchat Team",
	"newsDetail.ai.content": "我们上线 AI 智能助手，通过知识库与上下文检索，自动生成回复建议，大幅提升客服处理效率与用户满意度。",
	"newsDetail.back": "← 返回新闻列表",
	"footer.docs": "文档",
	"footer.faq": "常见问答",
	"footer.legal": "法律",
	"footer.privacy": "隐私政策",
	"footer.terms": "使用条款",
	"footer.sitemap": "站点地图",
	"footer.contact": "联系",
	viewNews: viewNews$2,
	"detected.os.zh": "为你推荐的下载：",
	"page.title.sitemap": "站点地图",
	"page.title.privacy": "隐私政策",
	"page.title.terms": "使用条款",
	"sitemap.main": "主要页面",
	"sitemap.news": "新闻资讯",
	"sitemap.help": "帮助与支持",
	"privacy.lastUpdated": "最后更新",
	"privacy.section1.title": "1. 信息收集",
	"privacy.section1.content": "我们收集您在使用 JDChat 时提供的信息，包括注册信息、通讯内容和使用数据。",
	"privacy.section2.title": "2. 信息使用",
	"privacy.section2.content": "您的信息用于以下目的：",
	"privacy.section2.item1": "提供和维护服务",
	"privacy.section2.item2": "改善用户体验",
	"privacy.section2.item3": "发送服务通知",
	"privacy.section2.item4": "保障账户安全",
	"privacy.section3.title": "3. 信息保护",
	"privacy.section3.content": "我们采取多种安全措施保护您的信息：",
	"privacy.section3.item1": "端到端加密",
	"privacy.section3.item2": "安全数据存储",
	"privacy.section3.item3": "访问控制",
	"privacy.section4.title": "4. 信息共享",
	"privacy.section4.content": "我们不会出售您的个人信息。仅在法律要求或您明确同意的情况下才会共享信息。",
	"privacy.section5.title": "5. 您的权利",
	"privacy.section5.content": "您有权访问、更正或删除您的个人信息。请通过以下方式联系我们行使这些权利。",
	"privacy.section6.title": "6. 联系我们",
	"privacy.contact": "如有隐私相关问题，请联系",
	"terms.lastUpdated": "最后更新",
	"terms.section1.title": "1. 服务接受",
	"terms.section1.content": "使用 JDChat 即表示您同意这些条款。如果不同意，请勿使用我们的服务。",
	"terms.section2.title": "2. 用户责任",
	"terms.section2.content": "使用我们的服务时，您同意：",
	"terms.section2.item1": "遵守所有适用法律",
	"terms.section2.item2": "不发送垃圾信息或恶意内容",
	"terms.section2.item3": "保护账户凭证安全",
	"terms.section2.item4": "尊重其他用户",
	"terms.section3.title": "3. 知识产权",
	"terms.section3.content": "JDChat 及其内容的所有知识产权归我们所有。未经许可不得复制或分发。",
	"terms.section4.title": "4. 服务变更",
	"terms.section4.content": "我们保留随时修改或终止服务的权利，恕不另行通知。",
	"terms.section5.title": "5. 免责声明",
	"terms.section5.content": "服务按现状提供，不提供任何明示或暗示的保证。",
	"terms.section6.title": "6. 联系我们",
	"terms.contact": "如有法律相关问题，请联系",
	"terms.title": "胜启园用户服务协议",
	"terms.updateDate": "更新日期",
	"terms.effectiveDate": "生效日期",
	"terms.welcome": "欢迎使用胜启园及服务！",
	"terms.s1.title": "一、定义条款",
	"terms.s1.p1": "胜启园个人用户，是指个人通过手机号码和验证码注册胜启园账号，或使用胜启园允许的第三方账号授权登录胜启园，未加入任何胜启园企业组织或不以企业组织最终用户身份使用胜启园服务的用户。",
	"terms.s1.p2": "胜启园企业组织用户，是指经企业组织授权的管理员创建胜启园企业组织架构，邀请组织成员作为企业组织最终用户下载、注册胜启园账号或为最终用户配置企业账号，完成胜启园企业组织创建后，由企业组织授权管理员配置、开通、管理和使用胜启园办公应用进行在线移动办公、沟通与协同的用户。",
	"terms.s1.p3": "胜启园企业组织管理员，指经胜启园企业组织用户授权或指定，拥有胜启园企业组织用户管理权限的企业组织成员。管理权限包括但不限于管理企业组织通讯录及组织成员、设定子管理员、代表企业组织开通和管理第三方应用、确认和签署相应的胜启园在线协议、注销企业组织等。",
	"terms.s1.p4": "企业组织控制数据，指企业组织用户及最终用户使用胜启园服务过程中提交或产生的与企业用户相关的信息和数据，包括企业用户及其管理员提交或要求最终用户提供的信息、企业用户分配给最终用户的信息。",
	"terms.s1.p5": "个人信息处理者，是指胜启园个人用户或认证企业组织用户在使用胜启园服务进行在线移动办公、沟通与协同中，有权决定个人信息处理目的、方式的组织或个人。",
	"terms.s2.title": "二、缔约主体",
	"terms.s2.p1": "本协议是由无企业组织身份的胜启园个人用户以及企业组织用户（含管理员及最终用户）与胜启园服务提供者之间关于用户下载、安装、使用、复制本软件，以及使用胜启园相关服务的协议。",
	"terms.s2.p2": "胜启园个人用户、胜启园企业组织用户及其管理员、最终用户，统称为用户或您。",
	"terms.s2.p3": "胜启园服务提供者包括武汉市铭古尚科技有限公司，统称为胜启园或我们。",
	"terms.s3.title": "三、协议内容和效力",
	"terms.s3.p1": "本协议内容包括本协议正文、已经发布或将来可能发布的各项政策、规则、声明、通知、提示，包括《胜启园隐私政策》。前述规则为本协议不可分割的组成部分，与本协议具有同等法律效力。",
	"terms.s3.p2": "胜启园公司有权根据需要不时制订、修改本协议及相关规则，变更后的协议和规则将通过胜启园客户端通知。如您不同意相关变更，应当立即停止使用胜启园服务；如您继续使用胜启园服务，即表示您已接受经修订的协议和规则。",
	"terms.s4.title": "四、服务内容",
	"terms.s4.sub1.title": "（一）胜启园服务内容",
	"terms.s4.sub1.p1": "胜启园服务包括胜启园客户端、胜启园官网形式提供的胜启园文档、胜启园音视频服务以及将胜启园部分功能。",
	"terms.s4.sub1.p2": "本服务中胜启园提供包括但不限于iOS、Android以及其他操作系统适配服务等多个应用版本。用户可自行选择安装与终端设备相匹配的软件版本。",
	"terms.s4.sub1.p3": "您同意胜启园可以自行或由第三方通过消息通知、短信、推送等多种方式向您发送、展示信息（包括商业信息和非商业信息）。",
	"terms.s4.sub2.title": "（二）胜启园服务形式",
	"terms.s4.sub2.intro": "胜启园服务包括面向胜启园个人用户提供的服务，以及面向胜启园企业组织用户提供的数字化在线移动办公、沟通与协同服务。",
	"terms.s4.sub2.personal.title": "胜启园个人用户服务",
	"terms.s4.sub2.personal.desc": "胜启园个人用户服务，是指个人用户通过手机号码和验证码注册胜启园账号，或使用胜启园允许的第三方账号授权登录胜启园，不以企业组织最终用户身份使用的服务。包括个人信息展示、即时通讯、添加好友等功能。",
	"terms.s4.sub2.enterprise.title": "胜启园企业组织服务",
	"terms.s4.sub2.enterprise.desc": "胜启园企业组织服务，是指管理员代表胜启园企业组织用户创建胜启园企业组织架构，邀请组织成员下载并注册成为胜启园最终用户，由管理员配置、开通、管理和使用胜启园办公应用，实现企业组织的组织数字化和业务数字化。",
	"terms.s5.title": "四、胜启园软件许可使用",
	"terms.s5.p1": "授权使用。胜启园依据本协议，许可您一项不可转让的、非排他性的许可使用胜启园服务。您可以制作本软件的一个副本，仅用作备份。",
	"terms.s5.p2": "授权使用限制。除非另有说明，您就本协议项下胜启园服务仅限于非商业用途使用。您承诺不对本服务任何部分或本服务之使用或获得，进行复制、拷贝、出售、转售或用于包括但不限于广告及任何其它商业目的。",
	"terms.s5.p3": "权利保留。本条及本协议其他条款未明示授权的其他一切权利仍由胜启园公司保留，您在行使这些权利时须另外取得胜启园公司的书面许可。",
	"terms.s6.title": "五、软件更新",
	"terms.s6.p1": "为了改善用户体验、完善服务内容及形式，胜启园将不断努力开发新的服务，并为用户不时提供软件更新，包括可能采取软件替换、修改、功能强化、版本升级等形式。",
	"terms.s6.p2": "为了保证本软件及服务的安全性和功能的一致性，胜启园有权不经向用户特别通知而对软件进行更新，或者对软件的部分功能效果进行改变或限制。",
	"terms.s6.p3": "用户理解并同意，胜启园可能通过公告、更新日志等方式，通过胜启园官网、胜启园客户端页面向用户通知软件更新情况。",
	"terms.s7.title": "六、账号注册与管理",
	"terms.s7.intro": "您可以通过使用个人手机号注册胜启园账号、使用胜启园认可的其他第三方应用账号授权登录胜启园、使用企业组织配置的企业账号三种账号方式登录和使用胜启园服务。",
	"terms.s8.title": "七、胜启园服务使用规范",
	"terms.s8.intro": "您承诺不会利用本服务进行任何违法或不当的活动。",
	"terms.s8.sub1.title": "（一）内容发布规范",
	"terms.s8.sub1.desc": "您作为胜启园用户和内容生产者，禁止使用胜启园服务制作、复制、发布含有违反宪法、危害国家安全、损害国家荣誉、散布谣言、侮辱诽谤他人等违法信息及外部链接。",
	"terms.s8.sub2.title": "（二）软件使用规范",
	"terms.s8.sub2.desc": "您承诺不对本软件和服务从事干扰、破坏或限制任何计算机软件、硬件或通讯设备功能的行为，不通过非胜启园授权的第三方软件、插件、外挂、系统登录或使用软件及服务。",
	"terms.s8.sub3.title": "（三）行为规范",
	"terms.s8.sub3.desc": "您使用本服务过程中不得提交、发布虚假信息，诱导其他用户点击链接页面或分享信息，虚构事实、隐瞒真相以误导、欺骗他人，侵害他人合法权益，或从事任何违法犯罪活动。",
	"terms.s9.title": "九、服务费用",
	"terms.s9.p1": "本服务的任何免费试用、免费功能和服务，不应视为胜启园公司放弃后续收费的权利。胜启园公司有权提前7天在胜启园官网或具体胜启园服务应用内以公告等形式通知您收费标准及收费方式。",
	"terms.s9.p2": "胜启园有权根据实际情况提前7天单方调整费用标准及收费方式，并以公告形式通知您，而无需获得您的事先同意。",
	"terms.s9.p3": "您应当自行支付使用本服务可能产生的上网费、流量费以及其他第三方收取的通讯费、信息费等。",
	"terms.s10.title": "十、服务中止或终止",
	"terms.s10.p1": "鉴于互联网服务的特殊性，胜启园公司有权对服务内容进行变更，也可能会中止或终止全部或部分的服务（包括免费服务或收费服务），并在胜启园官网以公示等形式通知您。",
	"terms.s10.p2": "您了解并同意，胜启园公司可能定期或不定期地对提供网络服务的平台设备、设施和软硬件进行维护或检修，如因此类情况而造成收费服务在合理时间内中止，胜启园公司经提前通知后无需承担责任。",
	"terms.s11.title": "十一、隐私政策",
	"terms.s11.p1": "胜启园公司努力采取各种合理的物理、电子和管理方面的安全措施来保护您的信息，使您存储在胜启园中的信息和通信内容不会被泄露、毁损或者丢失。",
	"terms.s11.p2": "您应当保管好使用胜启园的设备、账号及密码，并妥善保管相关信息和内容。因您自身原因导致的数据丢失或被盗以及在本软件及服务中相关数据的删除或储存失败的责任由您自行承担。",
	"terms.s11.p3": "具体隐私条款见《胜启园隐私政策》",
	"terms.s12.title": "十三、有限责任",
	"terms.s12.p1": "服务将按现状和按可得到的状态提供。胜启园对服务所涉的技术和信息的有效性、准确性、可靠性、稳定性、完整性和及时性均不作承诺和保证。",
	"terms.s12.p2": "不论在何种情况下，胜启园均不对由于网络连接故障，设备故障，通讯系统故障，电力故障，黑客攻击或网络攻击，罢工，暴乱骚乱，火灾，自然灾害，战争，政府行为等情形而造成的不能服务或延迟服务、数据丢失、系统故障等后果承担责任。",
	"terms.s12.p3": "不论是否可以预见，不论是源于何种形式的行为，胜启园不对间接的损害（包括但不限于利润或利息的损失，营业中止）承担责任。",
	"terms.s12.p4": "您充分了解并同意，由于互联网的特殊性，您在服务中分享的信息及个人资料有可能会被他人复制、转载或用于其它用途；您在此已充分意识此类风险的存在，并确认此等风险应完全由您自行承担。",
	"terms.s13.title": "十六、争议解决及其他",
	"terms.s13.p1": "本协议的解释与适用，以及与本协议有关的争议，均应适用中华人民共和国法律法规予以处理，并以本协议签订地有管辖权的人民法院管辖。",
	"terms.s13.p2": "如本协议的任何条款被视作无效或无法执行，其余部分则仍具有法律效力。",
	"terms.s14.title": "十七、联系方式",
	"terms.s14.intro": "您可以通过【胜启园客户端-关于我们-客服与帮助】进行在线咨询、或者通过我们的电话、邮箱联系进行咨询和服务。",
	"terms.s14.address": "联系地址",
	"terms.s14.addressValue": "湖北省武汉市武昌区杨园街纺机路29号万科金域华府商业中心1栋1单元13层3号B91",
	"terms.s14.email": "电子邮箱",
	"privacy.title": "胜启园基本功能隐私政策",
	"privacy.updateDate": "更新日期",
	"privacy.effectiveDate": "生效日期",
	"privacy.intro.title": "引言",
	"privacy.intro.p1": "欢迎使用我们的产品与服务！我们深知个人信息对您的重要性，因此特制定本《胜启园基本功能隐私政策》。在使用本产品前，请您仔细阅读并充分理解本政策的全部内容，特别是其中以加粗方式标注的重要条款。",
	"privacy.intro.p2": "\"胜启园\"是一款集即时通信与协作功能于一体的工具型应用。为向您提供文字、图片、语音、视频等基础通信服务，以及笔记记录、在线协同文档功能，我们可能会收集以下必要信息：",
	"privacy.intro.item1": "注册时提供的手机号码",
	"privacy.intro.item2": "账号信息（如通信联系人列表、昵称、头像等）",
	"privacy.intro.item3": "基础设备信息（如设备型号、操作系统版本、唯一设备标识符等）",
	"privacy.intro.item4": "日志信息（如登录时间、操作记录、崩溃日志等）",
	"privacy.intro.item5": "网络连接信息（如IP地址、网络类型等）",
	"privacy.intro.p3": "本政策仅适用于\"胜启园\"基础功能中涉及的个人信息收集和使用行为。如您使用拓展功能，我们将在获得您的明确授权后，另行说明并征求您的同意。",
	"privacy.toc.title": "政策目录",
	"privacy.toc.s1": "适用范围",
	"privacy.toc.s2": "信息收集及使用",
	"privacy.toc.s3": "信息的共享、转移与披露",
	"privacy.toc.s4": "您的权利",
	"privacy.toc.s5": "信息的存储",
	"privacy.toc.s6": "未成年人保护",
	"privacy.toc.s7": "联系我们",
	"privacy.s1.title": "一、适用范围",
	"privacy.s1.p1": "本政策适用于\"胜启园\"软件及后续更新形态所提供的即时通信与在线办公基本功能。",
	"privacy.s1.p2": "本政策不适用于由关联公司或第三方服务商提供的产品与服务，其隐私政策请参考其单独说明。",
	"privacy.s2.title": "二、信息收集及使用",
	"privacy.s2.intro": "我们将仅在您授权同意后收集必要信息以提供基础功能。如您拒绝，将无法正常使用服务。",
	"privacy.s2.sub1.title": "账号注册与管理",
	"privacy.s2.sub1.desc": "您需提供手机号码注册账户，可自愿完善昵称、头像、性别等信息，其中部分信息（如昵称、头像）将对外展示。",
	"privacy.s2.sub2.title": "授权登录",
	"privacy.s2.sub2.desc": "您可选择授权将胜启园账号用于登录第三方应用，或通过第三方登录胜启园，我们将依授权范围处理相关信息。",
	"privacy.s2.sub3.title": "即时通信功能",
	"privacy.s2.sub3.desc": "在使用聊天功能时，我们将记录必要的消息数据（文字、图片、语音等）和操作日志，以实现信息传输及同步。发送相册照片、文件需授权存储权限，发送语音、拍摄内容需麦克风和摄像头权限。共享位置时，我们需获取您的地理位置权限。",
	"privacy.s2.sub4.title": "为您提供安全保障",
	"privacy.s2.sub4.desc": "我们致力于为您提供安全的通信环境。为预防和治理电信网络诈骗，维护网络正常稳定运行，我们会收集设备标识符、可变标识符、应用信息、设备参数及系统信息、设备网络环境信息、运营商信息等。",
	"privacy.s2.sub5.title": "基于系统权限的附加服务",
	"privacy.s2.sub5.desc": "我们在附加服务中可能会申请开启系统权限以收集和使用您的个人信息。如果您不同意开启相关权限，不会影响您使用胜启园的基本服务，但您将无法使用这些附加服务。您可随时开启或关闭这些权限。",
	"privacy.s2.sub6.title": "Cookie和同类技术的服务",
	"privacy.s2.sub6.desc": "当您使用我们的服务时，我们可能会使用Cookie或匿名标识符，以收集、标识和存储您访问、使用本产品时的信息。我们承诺，不会将Cookie用于本隐私政策所述目的之外的任何其他用途。",
	"privacy.s2.sub7.title": "收集和使用个人信息的其他规则",
	"privacy.s2.sub7.desc": "若您提供的信息中含有他人的个人信息，在向胜启园提供这些个人信息之前，您需确保您已经取得合法的授权。若我们将信息用于本政策未载明的其他用途，均会事先获得您的同意。",
	"privacy.s3.title": "三、信息的共享、转移与披露",
	"privacy.s3.sub1.title": "信息转移",
	"privacy.s3.sub1.desc": "如果我们因合并、分立、解散、被宣告破产等原因需要转移个人信息的，我们会向您告知接收方的名称和联系方式。接收方将继续履行本政策及其他法定义务。",
	"privacy.s3.sub2.title": "公开披露",
	"privacy.s3.sub2.desc": "我们仅会在您主动选择或以其他方式获得您单独同意的情况下公开披露您的个人信息。如我们确定您违反法律法规或胜启园相关协议及规则，我们可能披露您的个人信息。",
	"privacy.s3.sub3.title": "停止运营",
	"privacy.s3.sub3.desc": "若我们停止运营产品或服务，将及时停止收集您的个人信息，并通过逐一通知或公告的形式告知您。我们将对所持有的相关个人信息进行删除或匿名化处理。",
	"privacy.s3.sub4.title": "无需征得授权的情形",
	"privacy.s3.sub4.desc": "根据法律法规，为订立、履行合同或人力资源管理所必需；为履行法定职责或义务所必需；为应对突发公共卫生事件或紧急情况下保护自然人生命健康、财产安全所必需等情形中无需征得您的授权同意。",
	"privacy.s4.title": "四、您的权利",
	"privacy.s4.p1": "您可以删除您的部分信息或申请注销账户以删除您的全部信息。",
	"privacy.s4.p2": "在以下情形中，您可以与客服联系，向我们提出删除个人信息的请求：",
	"privacy.s4.item1": "我们处理个人信息的行为违反法律法规",
	"privacy.s4.item2": "我们收集、使用您的个人信息，却未征得您的明确同意",
	"privacy.s4.item3": "我们处理个人信息的行为严重违反了与您的约定",
	"privacy.s4.item4": "我们的处理目的已实现、无法实现或者为实现处理目的不再必要",
	"privacy.s4.item5": "我们停止提供产品或服务，或者保存期限已届满",
	"privacy.s4.p3": "您可以通过胜启园 App 中\"设置与隐私-安全中心-数据权利\"或通过我们的联系方式向胜启园提出数据权利请求。胜启园个人用户可登录胜启园客户端，依次点击\"我的-账号设置-注销胜启园账号\"进行注销。",
	"privacy.s5.title": "五、信息的存储",
	"privacy.s5.p1": "我们只会在达成本政策所述目的所需的期限内保留您的个人信息，除非法律有强制的留存要求。如《电子商务法》要求商品和服务信息、交易信息保存时间自交易完成之日起不少于三年。",
	"privacy.s5.p2": "在超出保留期限后，我们会根据适用法律的要求删除或匿名化处理您的个人信息。如您担心自己的个人信息，尤其是账户或密码发生泄露，请立即联络我们的客服。",
	"privacy.s6.title": "六、未成年人保护",
	"privacy.s6.p1": "在数字化办公、沟通与协同活动中，我们推定您具有相应的民事行为能力。如您为未成年人，我们要求您请您的父母或其他监护人仔细阅读本政策，并在征得其同意的前提下使用我们的服务或向我们提供信息。",
	"privacy.s6.p2": "如果您是儿童的父母或其他监护人，请您关注儿童是否是在取得您的授权同意之后使用我们的服务。如您对儿童的个人信息有疑问，请与我们的个人信息保护专职部门联系。",
	"privacy.s7.title": "七、联系我们",
	"privacy.s7.p1": "您可以通过以下方式与我们联系，我们将在10个工作日内回复您的请求。如您对本政策内容有任何疑问、意见或建议，可通过\"我的-联系我们-在线服务\"与我们联系。",
	"privacy.s7.company": "公司",
	"privacy.s7.companyValue": "武汉市铭古尚科技有限公司",
	"privacy.s7.email": "电子邮箱",
	"privacy.s7.address": "联系地址",
	"privacy.s7.addressValue": "湖北省武汉市武昌区杨园街纺机路29号万科金域华府商业中心1栋1单元13层3号B91",
	"privacy.sdk.title": "附录：第三方 SDK 收集使用信息说明",
	"privacy.sdk.intro": "为实现与保障应用部分功能的实现与稳定运行，我们可能会接入由第三方提供的软件开发工具包（SDK）。这些SDK可能会收集您的设备信息或其他必要信息。我们会对合作方获取信息的行为进行严格监督，以保障您的信息安全。",
	"privacy.sdk.note": "我们仅在必要时调用相关SDK服务，接入前已进行合规性审核，并与第三方签署数据保护协议。这些第三方SDK的收集行为受其各自隐私政策约束，请您仔细阅读其隐私说明以获得更全面的了解。"
};

const zh$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: zh,
  viewNews: viewNews$2
}, Symbol.toStringTag, { value: 'Module' }));

var viewNews$1 = "View news";
const en = {
	"brand.name": "Jdchat",
	"nav.home": "Home",
	"kf.title": "Live Support",
	"kf.lead": "Typically responds in 2 minutes",
	"kf.email": "Email us",
	"kf.docs": "Docs",
	"kf.faq": "FAQ",
	"kf.placeholder": "Type a message…",
	"kf.send": "Send",
	"kf.tg": "Telegram Support",
	"kf.upload": "Send Image/File",
	"kf.drop": "Drop image here or paste from clipboard",
	"kf.download": "Download",
	"kf.preview": "Preview",
	"kf.intro": "You can msg here directly; or click 📎 to send image/file.",
	"nav.features": "Features",
	"nav.functions": "Functions",
	"nav.transfer": "Transfer",
	"nav.solutions": "Solutions",
	"nav.news": "News",
	"nav.help": "Help",
	"nav.faq": "FAQ",
	"nav.download": "Download",
	"page.title.transfer": "File Transfer",
	"hero.badge": "Next-gen · IM + AI",
	"hero.title": "Enterprise IM that makes work smarter",
	"hero.lead": "Jdchat brings end-to-end encryption, distributed reliability and AI assistants across chat, groups, files, meetings and bots.",
	"hero.cta.getStarted": "Get Started",
	"hero.cta.download": "Download App",
	"hero.cta.contact": "Contact Sales",
	"section.features": "Key Features",
	"feature.secure": "Bank-grade Security",
	"feature.secure.desc": "E2E encryption, 2FA and role-based permissions secure data end-to-end.",
	"feature.fast": "Fast & Reliable",
	"feature.fast.desc": "Custom distributed MQ with retries keeps delivery rock-solid at scale.",
	"feature.global": "Global & Multilingual",
	"feature.global.desc": "Built-in Chinese/English/Vietnamese with timezone care for global teams.",
	"section.clients": "Customers & Case Studies",
	"section.screens": "Screenshots",
	"section.download": "Deploy Now",
	"download.lead": "Available for iOS / Android / Windows / macOS.",
	"footer.cta": "Contact Us",
	"footer.rights": "© 2025 Jdchat. All rights reserved.",
	"download.title": "Downloads",
	"download.card.ios": "iOS (TestFlight)",
	"download.card.android": "Android APK",
	"download.card.desktop": "Desktop App",
	"download.note": "By downloading you agree to the Terms and Privacy Policy.",
	"page.title.features": "Features",
	"page.title.functions": "Functions",
	"page.title.solutions": "Solutions",
	"page.title.news": "News",
	"page.title.help": "Help",
	"page.title.faq": "FAQ",
	"page.title.contact": "Contact",
	"table.feature": "Feature",
	"table.desc": "Description",
	"table.status": "Status",
	"status.ready": "Ready",
	"status.dev": "In Dev",
	"news.sample1": "Jdchat v1.0 launched: multi-platform with end-to-end encryption",
	"news.sample2": "AI assistants boost support efficiency by 60%",
	"help.sample1": "How to create teams and channels?",
	"help.sample2": "How to enable 2FA and security policies?",
	"faq.q1": "Does Jdchat support offline messages and multi-device sync?",
	"faq.a1": "Yes. Messages are encrypted in the cloud and sync on reconnect.",
	"detected.os": "Recommended download:",
	"section.usecases": "Use Cases",
	"uc.enterprise": "Internal Communications",
	"uc.enterprise.desc": "Org chart, approvals, RBAC/SSO, audit trails.",
	"uc.crossborder": "Cross‑border Teams",
	"uc.crossborder.desc": "Multi‑language & timezones for global work.",
	"uc.support": "Support Contact Center",
	"uc.support.desc": "Omnichannel, AI bots, tickets & SLA.",
	"uc.finance": "Financial Compliance",
	"uc.finance.desc": "Fine‑grained permissions, encryption, audits.",
	"uc.healthcare": "Healthcare Privacy",
	"uc.healthcare.desc": "Data privacy, encrypted transport, on‑prem.",
	"uc.education": "Education & Teaching",
	"uc.education.desc": "Class groups, assignments, live classes.",
	"section.casestudies": "Case Studies",
	"case.enterprise.title": "OrionTech · Internal Comms",
	"case.enterprise.m1": "Go‑live in 3 days",
	"case.enterprise.m2": "Workflow efficiency +40%",
	"case.enterprise.m3": "Comms cost −25%",
	"case.crossborder.title": "Globex · Cross‑border",
	"case.crossborder.m1": "Timezone delay −45%",
	"case.crossborder.m2": "Auto‑translation hit 95%",
	"case.crossborder.m3": "Delivery cycle −20%",
	"case.support.title": "MetaRetail · Support Center",
	"case.support.m1": "Response time −35%",
	"case.support.m2": "FCR +18%",
	"case.support.m3": "CSAT +12pt",
	"case.finance.title": "BlueBank · Compliance",
	"case.finance.m1": "Delivery 99.99%",
	"case.finance.m2": "Audit coverage 100%",
	"case.finance.m3": "Full change traceability",
	"case.healthcare.title": "Medix · Healthcare",
	"case.healthcare.m1": "PHI encrypted end‑to‑end",
	"case.healthcare.m2": "0 missed audit events",
	"case.healthcare.m3": "On‑prem deployment",
	"case.education.title": "NextEdu · Education",
	"case.education.m1": "Assignments submitted +30%",
	"case.education.m2": "Class participation +22%",
	"case.education.m3": "Live uptime 99.95%",
	"section.steps": "How to Start",
	"steps.subtitle": "Own your Jdchat in 3 steps",
	"step1.title": "Choose deployment & get installers",
	"step1.desc": "Cloud or on‑prem. Download apps and server components.",
	"step2.title": "Brand & import your team",
	"step2.desc": "Upload logo/theme, import org & members, set RBAC & policies.",
	"step3.title": "Go live & integrate",
	"step3.desc": "Enable channels & bots, plug Webhook/OpenAPI to your systems.",
	"steps.cta.download": "Go to Download",
	"steps.cta.help": "Read Docs",
	"steps.cta.contact": "Talk to Us",
	"section.faqInline": "FAQ",
	"faqinline.q1": "Cloud vs on‑prem?",
	"faqinline.a1": "Depends on compliance & ops: choose on‑prem for strict data control, otherwise cloud is easier.",
	"faqinline.q2": "Integrate with existing identity?",
	"faqinline.a2": "Supports OIDC/SAML & custom Webhooks; sync org structure & SSO.",
	"faqinline.q3": "Migration cost?",
	"faqinline.a3": "Import tools & advisory: members/channels/history can be migrated in batches.",
	"transfer.badge": "File Transfer · Coming soon",
	"transfer.title": "Fast large‑file transfer with enterprise security",
	"transfer.lead": "Supports huge files, resumable uploads, E2E encryption & permissions.",
	"transfer.cta.contact": "Contact Sales",
	"transfer.cta.download": "Download App",
	"transfer.drop.tip": "Drag files here or click to choose (static demo)",
	"transfer.note": "Static entry for now; resumable uploads & encryption will be exposed via API.",
	"transfer.f1": "Fast",
	"transfer.f1.desc": "Parallel chunks, compression pipeline.",
	"transfer.f2": "Secure & compliant",
	"transfer.f2.desc": "E2E encryption, auto-expiry, audit trails.",
	"transfer.f3": "Cross‑platform",
	"transfer.f3.desc": "iOS / Android / Windows / macOS.",
	"feature.ecosystem": "Open Ecosystem",
	"feature.ecosystem.desc": "Bots, Webhooks, Enterprise SSO, Audit & Archiving.",
	"solutions.enterprise": "Enterprise Chat",
	"solutions.enterprise.desc": "Org chart, approvals, SSO; Multi-tenant & partition isolation.",
	"solutions.crossborder": "Cross-border Teams",
	"solutions.crossborder.desc": "Multi-language collab, Int'l SMS/Email, Compliance audits.",
	"solutions.support": "Customer Support",
	"solutions.support.desc": "AI Bots, Tickets & Knowledge Base, CSAT surveys.",
	"solutions.finance": "Finance",
	"solutions.finance.desc": "Compliance & Encryption policies, Granular permissions.",
	"solutions.healthcare": "Healthcare",
	"solutions.healthcare.desc": "Privacy protection, Audit trails, Private deployment.",
	"solutions.education": "Education",
	"solutions.education.desc": "Class groups, Assignments, Live classroom tools.",
	"features.lead": "Built on security, performance, globalization, and scalability.",
	"feature.e2e.desc": "E2E encryption, secure transport & storage",
	"feature.av.desc": "HD Video/Audio meetings, noise suppression",
	"feature.bot.desc": "Bot platform, Webhooks, Command routing",
	"feature.audit.desc": "Security audit, compliance & archiving",
	"feature.sso.desc": "OIDC/SAML Single Sign-On",
	"feature.storage.desc": "Chunked resumable uploads, encrypted storage",
	"feature.international.desc": "Multi-language, timezones, multi-currency",
	"func.chat": "Chat",
	"func.chat.desc": "1-on-1/Group, Read receipts, Recall, Pin & Favorite",
	"func.security": "Security",
	"func.security.desc": "E2E Encryption, 2FA, Session risk control, Device mgmt",
	"func.performance": "Performance",
	"func.performance.desc": "Massive concurrency, Weak network optimization, Idempotency",
	"func.collab": "Collaboration",
	"func.collab.desc": "File sharing, Tasks, Announcements, {'@'}Org/Groups",
	"func.support": "Support",
	"func.support.desc": "Omnichannel, Smart routing, SLA monitoring",
	"func.admin": "Management",
	"func.admin.desc": "Tiered permissions, Audit logs, Activity tracking",
	"func.platform": "Open Platform",
	"func.platform.desc": "Bot, Webhook, OpenAPI",
	"func.multi": "Multi-platform",
	"func.multi.desc": "iOS/Android/Windows/macOS",
	"faq.q2": "How to deploy on-premise?",
	"faq.a2": "Supports containerized deployment (Docker Compose/K8s), scale as needed.",
	"help.item1": "How to create teams and channels?",
	"help.item2": "How to enable 2FA and security policies?",
	"help.item3": "Batch import members and org structure",
	"news.item1.title": "Jdchat v1.0 launched: multi-platform with E2E encryption",
	"news.item1.date": "2025-08-26 • Jdchat Team",
	"news.item1.desc": "First public release with mobile and desktop clients.",
	"news.item2.title": "Jdchat integrates AI assistant, boosting support efficiency by 60%",
	"news.item2.date": "2025-08-10 • Jdchat Team",
	"news.item2.desc": "AI assistant launched with intent classification and reply suggestions.",
	"contact.lead": "Fill in your requirements and we'll contact you within 1 business day.",
	"contact.label.name": "Company/Name",
	"contact.label.email": "Email",
	"contact.label.phone": "Phone/WeChat",
	"contact.label.edition": "Preferred Edition",
	"contact.option.private": "On-premise",
	"contact.option.cloud": "Public Cloud",
	"contact.label.message": "Requirements",
	"contact.placeholder": "Describe your use case, expected user scale, etc.",
	"contact.submit": "Submit",
	"contact.emailDirect": "Or email directly",
	"contact.notice": "Note: This form is front-end only. For backend receipt, provide a form gateway URL.",
	"transfer.chooseFiles": "Choose Files",
	"helpDetail.team.title": "How to create teams and channels?",
	"helpDetail.team.intro": "Go to 'Admin Panel → Teams', create a team then add channels. Supports public/private visibility and permissions.",
	"helpDetail.2fa.title": "How to enable 2FA and security policies?",
	"helpDetail.2fa.intro": "In 'Settings → Security', enable two-factor auth (GA/SMS) and configure login/IP whitelist policies.",
	"helpDetail.import.title": "Batch import members and org structure",
	"helpDetail.import.intro": "Supports CSV/Excel import with fields: name/email/department/role.",
	"helpDetail.steps": "Steps",
	"helpDetail.step1": "Log into Jdchat admin panel.",
	"helpDetail.step2": "Fill in the configuration as prompted.",
	"helpDetail.step3": "Save and verify the results in the client.",
	"helpDetail.tip": "Tip: For API automation, contact technical support.",
	"helpDetail.back": "← Back to help list",
	"newsDetail.v1.title": "Jdchat v1.0 launched: multi-platform with E2E encryption",
	"newsDetail.v1.date": "2025-08-26 • Jdchat Team",
	"newsDetail.v1.content": "We officially release v1.0 with E2E encryption and cross-platform sync for iOS/Android/Windows/macOS. Coming soon: bot platform, open API, and full compliance auditing.",
	"newsDetail.ai.title": "Jdchat integrates AI assistant, boosting support efficiency by 60%",
	"newsDetail.ai.date": "2025-08-10 • Jdchat Team",
	"newsDetail.ai.content": "We launched AI assistant with knowledge base and context retrieval, auto-generating reply suggestions to significantly improve support efficiency and user satisfaction.",
	"newsDetail.back": "← Back to news list",
	"footer.docs": "Docs",
	"footer.faq": "FAQ",
	"footer.legal": "Legal",
	"footer.privacy": "Privacy Policy",
	"footer.terms": "Terms of Use",
	"footer.sitemap": "Sitemap",
	"footer.contact": "Contact",
	viewNews: viewNews$1,
	"page.title.sitemap": "Sitemap",
	"page.title.privacy": "Privacy Policy",
	"page.title.terms": "Terms of Use",
	"sitemap.main": "Main Pages",
	"sitemap.news": "News",
	"sitemap.help": "Help & Support",
	"privacy.lastUpdated": "Last Updated",
	"privacy.section1.title": "1. Information We Collect",
	"privacy.section1.content": "We collect information you provide when using JDChat, including registration data, communication content, and usage data.",
	"privacy.section2.title": "2. How We Use Your Information",
	"privacy.section2.content": "Your information is used for the following purposes:",
	"privacy.section2.item1": "Providing and maintaining the service",
	"privacy.section2.item2": "Improving user experience",
	"privacy.section2.item3": "Sending service notifications",
	"privacy.section2.item4": "Ensuring account security",
	"privacy.section3.title": "3. Information Protection",
	"privacy.section3.content": "We implement various security measures to protect your information:",
	"privacy.section3.item1": "End-to-end encryption",
	"privacy.section3.item2": "Secure data storage",
	"privacy.section3.item3": "Access controls",
	"privacy.section4.title": "4. Information Sharing",
	"privacy.section4.content": "We do not sell your personal information. Information is only shared when legally required or with your explicit consent.",
	"privacy.section5.title": "5. Your Rights",
	"privacy.section5.content": "You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.",
	"privacy.section6.title": "6. Contact Us",
	"privacy.contact": "For privacy-related questions, please contact",
	"terms.lastUpdated": "Last Updated",
	"terms.section1.title": "1. Acceptance of Terms",
	"terms.section1.content": "By using JDChat, you agree to these terms. If you do not agree, please do not use our services.",
	"terms.section2.title": "2. User Responsibilities",
	"terms.section2.content": "When using our services, you agree to:",
	"terms.section2.item1": "Comply with all applicable laws",
	"terms.section2.item2": "Not send spam or malicious content",
	"terms.section2.item3": "Keep your account credentials secure",
	"terms.section2.item4": "Respect other users",
	"terms.section3.title": "3. Intellectual Property",
	"terms.section3.content": "All intellectual property rights in JDChat and its content belong to us. Reproduction or distribution without permission is prohibited.",
	"terms.section4.title": "4. Service Changes",
	"terms.section4.content": "We reserve the right to modify or discontinue the service at any time without notice.",
	"terms.section5.title": "5. Disclaimer",
	"terms.section5.content": "The service is provided as is without any express or implied warranties.",
	"terms.section6.title": "6. Contact Us",
	"terms.contact": "For legal inquiries, please contact",
	"terms.title": "JDChat User Service Agreement",
	"terms.updateDate": "Update Date",
	"terms.effectiveDate": "Effective Date",
	"terms.welcome": "Welcome to JDChat and our services!",
	"terms.s1.title": "1. Definitions",
	"terms.s1.p1": "JDChat Personal User refers to an individual who registers a JDChat account using a mobile phone number and verification code, or logs in to JDChat using a third-party account authorized by JDChat, and is not a member of any JDChat enterprise organization.",
	"terms.s1.p2": "JDChat Enterprise Organization User refers to users who, after being authorized by an enterprise organization administrator, create the JDChat enterprise organization structure, invite organization members to download and register as end users.",
	"terms.s1.p3": "JDChat Enterprise Organization Administrator refers to enterprise organization members who are authorized or designated by the JDChat enterprise organization user and have management authority over the enterprise organization.",
	"terms.s1.p4": "Enterprise Organization Control Data refers to information and data related to enterprise users submitted or generated during the use of JDChat services by enterprise organization users and end users.",
	"terms.s1.p5": "Personal Information Processor refers to an organization or individual who has the right to determine the purpose and method of personal information processing.",
	"terms.s2.title": "2. Contracting Parties",
	"terms.s2.p1": "This agreement is between JDChat personal users without enterprise organization identity, enterprise organization users (including administrators and end users), and JDChat service providers regarding downloading, installing, using, and copying this software.",
	"terms.s2.p2": "JDChat personal users, enterprise organization users, administrators, and end users are collectively referred to as 'Users' or 'You'.",
	"terms.s2.p3": "JDChat service providers include Wuhan Minggushan Technology Co., Ltd., collectively referred to as 'JDChat' or 'We'.",
	"terms.s3.title": "3. Agreement Content and Effect",
	"terms.s3.p1": "This agreement includes the main text, policies, rules, statements, notices, and tips that have been or will be published, including the JDChat Privacy Policy. These rules are an integral part of this agreement and have the same legal effect.",
	"terms.s3.p2": "JDChat has the right to formulate and modify this agreement and related rules as needed. Changes will be notified through the JDChat client. If you disagree, you should stop using JDChat services immediately.",
	"terms.s4.title": "4. Service Content",
	"terms.s4.sub1.title": "(1) JDChat Service Content",
	"terms.s4.sub1.p1": "JDChat services include the JDChat client, documentation, audio/video services, and various features provided through the official website.",
	"terms.s4.sub1.p2": "JDChat provides multiple application versions including but not limited to iOS, Android, and other operating system adaptations. Users can choose to install the software version that matches their terminal device.",
	"terms.s4.sub1.p3": "You agree that JDChat may send and display information (including commercial and non-commercial) to you through notifications, SMS, push notifications, and other methods.",
	"terms.s4.sub2.title": "(2) JDChat Service Forms",
	"terms.s4.sub2.intro": "JDChat services include both personal user services and digital online mobile office, communication, and collaboration services for enterprise organization users.",
	"terms.s4.sub2.personal.title": "JDChat Personal User Services",
	"terms.s4.sub2.personal.desc": "Services for personal users who register using phone number and verification code, including personal information display, instant messaging, and friend adding features.",
	"terms.s4.sub2.enterprise.title": "JDChat Enterprise Organization Services",
	"terms.s4.sub2.enterprise.desc": "Services where administrators create enterprise organization structures, invite members, and configure office applications to achieve organizational and business digitization.",
	"terms.s5.title": "5. JDChat Software License",
	"terms.s5.p1": "Authorization. JDChat grants you a non-transferable, non-exclusive license to use JDChat services under this agreement. You may make one backup copy.",
	"terms.s5.p2": "Usage Restrictions. Unless otherwise stated, JDChat services are limited to non-commercial use. You agree not to copy, sell, or resell any part of the service for commercial purposes.",
	"terms.s5.p3": "Rights Reserved. All rights not expressly granted in this agreement are reserved by JDChat. You must obtain written permission for additional rights.",
	"terms.s6.title": "6. Software Updates",
	"terms.s6.p1": "To improve user experience, JDChat will continuously develop new services and provide software updates, including replacements, modifications, enhancements, and upgrades.",
	"terms.s6.p2": "To ensure software security and functionality, JDChat may update the software without prior notice.",
	"terms.s6.p3": "You understand and agree that JDChat may notify users of updates through announcements and changelogs on the official website and client.",
	"terms.s7.title": "7. Account Registration and Management",
	"terms.s7.intro": "You can log in and use JDChat services through personal phone registration, authorized third-party accounts, or enterprise-configured accounts.",
	"terms.s8.title": "8. JDChat Service Usage Rules",
	"terms.s8.intro": "You agree not to use this service for any illegal or improper activities.",
	"terms.s8.sub1.title": "(1) Content Publishing Rules",
	"terms.s8.sub1.desc": "As a JDChat user, you are prohibited from creating, copying, or publishing content that violates the constitution, endangers national security, defames others, or spreads rumors.",
	"terms.s8.sub2.title": "(2) Software Usage Rules",
	"terms.s8.sub2.desc": "You agree not to interfere with or damage any computer software, hardware, or communication equipment, and not to use unauthorized third-party software or plugins.",
	"terms.s8.sub3.title": "(3) Behavior Rules",
	"terms.s8.sub3.desc": "You shall not submit false information, mislead others, infringe on others' rights, or engage in any illegal activities.",
	"terms.s9.title": "9. Service Fees",
	"terms.s9.p1": "Any free trial or features shall not be deemed as JDChat waiving the right to charge fees. JDChat may notify you of charging standards 7 days in advance.",
	"terms.s9.p2": "JDChat reserves the right to adjust fees with 7 days notice without your prior consent.",
	"terms.s9.p3": "You are responsible for internet, data, and other third-party communication fees.",
	"terms.s10.title": "10. Service Suspension or Termination",
	"terms.s10.p1": "Due to the special nature of internet services, JDChat may change, suspend, or terminate all or part of the services with notice on the official website.",
	"terms.s10.p2": "You understand that JDChat may periodically maintain or repair platform equipment, and shall not be liable for service interruptions with prior notice.",
	"terms.s11.title": "11. Privacy Policy",
	"terms.s11.p1": "JDChat strives to take reasonable physical, electronic, and administrative security measures to protect your information from disclosure, damage, or loss.",
	"terms.s11.p2": "You are responsible for safeguarding your devices, accounts, and passwords. Data loss due to your own reasons is your responsibility.",
	"terms.s11.p3": "See the JDChat Privacy Policy for specific privacy terms.",
	"terms.s12.title": "12. Limited Liability",
	"terms.s12.p1": "Services are provided 'as is' without any commitment or guarantee regarding the effectiveness, accuracy, reliability, stability, completeness, or timeliness of the technology and information.",
	"terms.s12.p2": "JDChat is not liable for service interruptions caused by network failures, equipment failures, communication failures, power outages, hacker attacks, strikes, riots, fires, natural disasters, wars, or government actions.",
	"terms.s12.p3": "JDChat is not liable for indirect damages including loss of profits or business interruption.",
	"terms.s12.p4": "You understand that information shared may be copied or used by others, and you assume all such risks.",
	"terms.s13.title": "13. Dispute Resolution",
	"terms.s13.p1": "The interpretation and application of this agreement shall be governed by the laws of the People's Republic of China.",
	"terms.s13.p2": "If any provision is deemed invalid, the remaining provisions shall remain in effect.",
	"terms.s14.title": "14. Contact Information",
	"terms.s14.intro": "You can contact us through the JDChat client's About Us - Customer Service or via phone and email.",
	"terms.s14.address": "Address",
	"terms.s14.addressValue": "B91, 13F, Building 1, Unit 1, Vanke Golden Domain Commercial Center, No. 29 Fangji Road, Yangyuan Street, Wuchang District, Wuhan City, Hubei Province, China",
	"terms.s14.email": "Email",
	"privacy.title": "JDChat Basic Function Privacy Policy",
	"privacy.updateDate": "Update Date",
	"privacy.effectiveDate": "Effective Date",
	"privacy.intro.title": "Introduction",
	"privacy.intro.p1": "Welcome to our products and services! We understand the importance of personal information to you, so we have formulated this JDChat Basic Function Privacy Policy. Please read and fully understand all the contents of this policy before using this product, especially the important clauses marked in bold.",
	"privacy.intro.p2": "JDChat is a tool-type application that integrates instant messaging and collaboration functions. To provide you with basic communication services such as text, pictures, voice, and video, as well as note-taking and online collaborative document functions, we may collect the following necessary information:",
	"privacy.intro.item1": "Phone number provided during registration",
	"privacy.intro.item2": "Account information (such as contact list, nickname, avatar, etc.)",
	"privacy.intro.item3": "Basic device information (such as device model, OS version, unique device identifier, etc.)",
	"privacy.intro.item4": "Log information (such as login time, operation records, crash logs, etc.)",
	"privacy.intro.item5": "Network connection information (such as IP address, network type, etc.)",
	"privacy.intro.p3": "This policy only applies to the collection and use of personal information in the basic functions of JDChat. If you use extended functions, we will explain and obtain your consent separately after obtaining your explicit authorization.",
	"privacy.toc.title": "Policy Directory",
	"privacy.toc.s1": "Scope of Application",
	"privacy.toc.s2": "Information Collection and Use",
	"privacy.toc.s3": "Information Sharing, Transfer and Disclosure",
	"privacy.toc.s4": "Your Rights",
	"privacy.toc.s5": "Information Storage",
	"privacy.toc.s6": "Minor Protection",
	"privacy.toc.s7": "Contact Us",
	"privacy.s1.title": "1. Scope of Application",
	"privacy.s1.p1": "This policy applies to the instant messaging and online office basic functions provided by JDChat software and subsequent updates.",
	"privacy.s1.p2": "This policy does not apply to products and services provided by affiliated companies or third-party service providers. Please refer to their separate privacy policies.",
	"privacy.s2.title": "2. Information Collection and Use",
	"privacy.s2.intro": "We will only collect necessary information after you authorize consent to provide basic functions. If you refuse, you will not be able to use the service normally.",
	"privacy.s2.sub1.title": "Account Registration and Management",
	"privacy.s2.sub1.desc": "You need to provide a phone number to register an account, and you can voluntarily complete information such as nickname, avatar, and gender. Some information (such as nickname, avatar) will be publicly displayed.",
	"privacy.s2.sub2.title": "Authorized Login",
	"privacy.s2.sub2.desc": "You can choose to authorize the use of your JDChat account to log in to third-party applications, or log in to JDChat through third parties. We will process relevant information according to the scope of authorization.",
	"privacy.s2.sub3.title": "Instant Messaging Function",
	"privacy.s2.sub3.desc": "When using chat functions, we will record necessary message data (text, pictures, voice, etc.) and operation logs to enable information transmission and synchronization. Sending photos and files requires storage permission, sending voice and capturing content requires microphone and camera permissions. Sharing location requires your location permission.",
	"privacy.s2.sub4.title": "Security Protection",
	"privacy.s2.sub4.desc": "We are committed to providing you with a secure communication environment. To prevent and control telecom network fraud and maintain normal network operation, we will collect device identifiers, variable identifiers, application information, device parameters and system information, device network environment information, carrier information, etc.",
	"privacy.s2.sub5.title": "Additional Services Based on System Permissions",
	"privacy.s2.sub5.desc": "We may request system permissions in additional services to collect and use your personal information. If you do not agree to enable related permissions, it will not affect your use of JDChat basic services, but you will not be able to use these additional services. You can enable or disable these permissions at any time.",
	"privacy.s2.sub6.title": "Cookie and Similar Technology Services",
	"privacy.s2.sub6.desc": "When you use our services, we may use cookies or anonymous identifiers to collect, identify, and store information about your visits and use of this product. We promise not to use cookies for any purpose other than those described in this privacy policy.",
	"privacy.s2.sub7.title": "Other Rules for Collecting and Using Personal Information",
	"privacy.s2.sub7.desc": "If the information you provide contains personal information of others, you need to ensure that you have obtained legal authorization before providing it to JDChat. If we use information for purposes not stated in this policy, we will obtain your consent in advance.",
	"privacy.s3.title": "3. Information Sharing, Transfer and Disclosure",
	"privacy.s3.sub1.title": "Information Transfer",
	"privacy.s3.sub1.desc": "If we need to transfer personal information due to merger, division, dissolution, or bankruptcy, we will inform you of the name and contact information of the recipient. The recipient will continue to fulfill this policy and other legal obligations.",
	"privacy.s3.sub2.title": "Public Disclosure",
	"privacy.s3.sub2.desc": "We will only publicly disclose your personal information when you actively choose or otherwise obtain your separate consent. If we determine that you have violated laws and regulations or JDChat-related agreements and rules, we may disclose your personal information.",
	"privacy.s3.sub3.title": "Cessation of Operations",
	"privacy.s3.sub3.desc": "If we stop operating products or services, we will promptly stop collecting your personal information and notify you through individual notifications or announcements. We will delete or anonymize the relevant personal information we hold.",
	"privacy.s3.sub4.title": "Cases Not Requiring Authorization",
	"privacy.s3.sub4.desc": "According to laws and regulations, your authorization consent is not required for: concluding and performing contracts or human resource management; performing legal duties or obligations; protecting natural person life, health, and property safety in emergencies.",
	"privacy.s4.title": "4. Your Rights",
	"privacy.s4.p1": "You can delete some of your information or apply for account cancellation to delete all your information.",
	"privacy.s4.p2": "In the following situations, you can contact customer service to request deletion of personal information:",
	"privacy.s4.item1": "Our handling of personal information violates laws and regulations",
	"privacy.s4.item2": "We collected and used your personal information without your explicit consent",
	"privacy.s4.item3": "Our handling of personal information seriously violates our agreement with you",
	"privacy.s4.item4": "Our processing purpose has been achieved, cannot be achieved, or is no longer necessary",
	"privacy.s4.item5": "We have stopped providing products or services, or the retention period has expired",
	"privacy.s4.p3": "You can submit data rights requests through 'Settings & Privacy - Security Center - Data Rights' in the JDChat App or through our contact methods. Personal users can log in to the client and click 'Me - Account Settings - Cancel JDChat Account' to cancel.",
	"privacy.s5.title": "5. Information Storage",
	"privacy.s5.p1": "We will only retain your personal information for the period necessary to achieve the purposes described in this policy, unless the law requires mandatory retention. For example, the E-commerce Law requires that product and service information and transaction information be retained for no less than three years from the date of completion of the transaction.",
	"privacy.s5.p2": "After the retention period expires, we will delete or anonymize your personal information in accordance with applicable law. If you are concerned about your personal information, especially account or password leakage, please contact our customer service immediately.",
	"privacy.s6.title": "6. Minor Protection",
	"privacy.s6.p1": "In digital office, communication and collaboration activities, we assume that you have the corresponding civil capacity. If you are a minor, we require your parents or other guardians to read this policy carefully and use our services or provide information to us with their consent.",
	"privacy.s6.p2": "If you are the parent or other guardian of a child, please pay attention to whether the child uses our services after obtaining your authorization and consent. If you have questions about the child's personal information, please contact our personal information protection department.",
	"privacy.s7.title": "7. Contact Us",
	"privacy.s7.p1": "You can contact us through the following methods, and we will reply to your request within 10 working days. If you have any questions, opinions, or suggestions about this policy, you can contact us through 'Me - Contact Us - Online Service'.",
	"privacy.s7.company": "Company",
	"privacy.s7.companyValue": "Wuhan Minggushan Technology Co., Ltd.",
	"privacy.s7.email": "Email",
	"privacy.s7.address": "Address",
	"privacy.s7.addressValue": "B91, 13F, Building 1, Unit 1, Vanke Golden Domain Commercial Center, No. 29 Fangji Road, Yangyuan Street, Wuchang District, Wuhan City, Hubei Province, China",
	"privacy.sdk.title": "Appendix: Third-party SDK Information Collection Statement",
	"privacy.sdk.intro": "To realize and ensure the implementation and stable operation of some functions of the application, we may access software development kits (SDKs) provided by third parties. These SDKs may collect your device information or other necessary information. We will strictly supervise partners' information acquisition behavior to protect your information security.",
	"privacy.sdk.note": "We only call relevant SDK services when necessary, conduct compliance reviews before access, and sign data protection agreements with third parties. The collection behavior of these third-party SDKs is subject to their respective privacy policies. Please read their privacy statements carefully for a more comprehensive understanding."
};

const en$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: en,
  viewNews: viewNews$1
}, Symbol.toStringTag, { value: 'Module' }));

var viewNews = "Xem tin tức";
const vi = {
	"brand.name": "Jdchat",
	"nav.home": "Trang chủ",
	"kf.title": "Hỗ trợ trực tuyến",
	"kf.lead": "Thường phản hồi trong 2 phút",
	"kf.email": "Email",
	"kf.docs": "Tài liệu",
	"kf.faq": "FAQ",
	"kf.placeholder": "Nhập tin nhắn…",
	"kf.send": "Gửi",
	"kf.tg": "Hỗ trợ Telegram",
	"kf.upload": "Gửi ảnh/tệp",
	"kf.drop": "Kéo ảnh vào đây hoặc dán từ clipboard",
	"kf.download": "Tải xuống",
	"kf.preview": "Xem trước",
	"kf.intro": "Bạn có thể nhắn trực tiếp tại đây; hoặc bấm 📎 để gửi ảnh/tệp.",
	"nav.features": "Đặc sắc",
	"nav.functions": "Chức năng",
	"nav.transfer": "Truyền tệp",
	"nav.solutions": "Giải pháp",
	"nav.news": "Tin tức",
	"nav.help": "Trợ giúp",
	"nav.faq": "Hỏi đáp",
	"nav.download": "Tải xuống",
	"page.title.transfer": "Truyền tệp",
	"hero.badge": "Thế hệ mới · IM + AI",
	"hero.title": "IM cấp doanh nghiệp thông minh hơn",
	"hero.lead": "Jdchat mang lại mã hóa đầu-cuối, kiến trúc phân tán và trợ lý AI cho chat, nhóm, tệp, họp và bot.",
	"hero.cta.getStarted": "Bắt đầu",
	"hero.cta.download": "Tải ứng dụng",
	"hero.cta.contact": "Liên hệ kinh doanh",
	"section.features": "Tính năng nổi bật",
	"feature.secure": "Bảo mật cấp ngân hàng",
	"feature.secure.desc": "Mã hóa E2E, 2FA và phân quyền dựa trên vai trò.",
	"feature.fast": "Nhanh & ổn định",
	"feature.fast.desc": "Hàng đợi thông điệp phân tán với cơ chế thử lại, bền vững ở quy mô lớn.",
	"feature.global": "Đa ngôn ngữ & Toàn cầu",
	"feature.global.desc": "Tích hợp Trung/Anh/Việt và xử lý múi giờ cho nhóm toàn cầu.",
	"section.clients": "Khách hàng & Case study",
	"section.screens": "Ảnh sản phẩm",
	"section.download": "Triển khai ngay",
	"download.lead": "Hỗ trợ iOS / Android / Windows / macOS.",
	"footer.cta": "Liên hệ",
	"footer.rights": "© 2025 Jdchat. Bảo lưu mọi quyền.",
	"download.title": "Tải xuống",
	"download.card.ios": "iOS (TestFlight)",
	"download.card.android": "Android APK",
	"download.card.desktop": "Ứng dụng máy tính",
	"download.note": "Tải xuống nghĩa là bạn đồng ý với Điều khoản và Chính sách riêng tư.",
	"page.title.features": "Đặc sắc",
	"page.title.functions": "Chức năng",
	"page.title.solutions": "Giải pháp",
	"page.title.news": "Tin tức",
	"page.title.help": "Trợ giúp",
	"page.title.faq": "Hỏi đáp",
	"page.title.contact": "Liên hệ",
	"table.feature": "Tính năng",
	"table.desc": "Mô tả",
	"table.status": "Trạng thái",
	"status.ready": "Sẵn sàng",
	"status.dev": "Đang phát triển",
	"news.sample1": "Ra mắt Jdchat v1.0: đa nền tảng và mã hóa đầu-cuối",
	"news.sample2": "Trợ lý AI tăng hiệu suất hỗ trợ 60%",
	"help.sample1": "Cách tạo nhóm và kênh?",
	"help.sample2": "Cách bật 2FA và chính sách bảo mật?",
	"faq.q1": "Jdchat có đồng bộ đa thiết bị và tin nhắn offline không?",
	"faq.a1": "Có. Tin nhắn được mã hóa trên đám mây và đồng bộ khi kết nối lại.",
	"detected.os": "Khuyến nghị tải:",
	"section.usecases": "Tình huống áp dụng",
	"uc.enterprise": "Giao tiếp nội bộ doanh nghiệp",
	"uc.enterprise.desc": "Sơ đồ tổ chức, phê duyệt, RBAC/SSO, nhật ký kiểm toán.",
	"uc.crossborder": "Nhóm làm việc xuyên biên giới",
	"uc.crossborder.desc": "Đa ngôn ngữ & múi giờ cho hợp tác toàn cầu.",
	"uc.support": "Trung tâm CSKH",
	"uc.support.desc": "Đa kênh, bot AI, ticket & SLA.",
	"uc.finance": "Tuân thủ tài chính",
	"uc.finance.desc": "Quyền chi tiết, mã hóa, kiểm toán.",
	"uc.healthcare": "Y tế & quyền riêng tư",
	"uc.healthcare.desc": "Bảo vệ dữ liệu, truyền mã hóa, triển khai on‑prem.",
	"uc.education": "Giáo dục & giảng dạy",
	"uc.education.desc": "Nhóm lớp, bài tập, lớp học trực tuyến.",
	"section.casestudies": "Case study",
	"case.enterprise.title": "OrionTech · Giao tiếp nội bộ",
	"case.enterprise.m1": "Triển khai trong 3 ngày",
	"case.enterprise.m2": "Hiệu quả quy trình +40%",
	"case.enterprise.m3": "Chi phí liên lạc −25%",
	"case.crossborder.title": "Globex · Xuyên biên giới",
	"case.crossborder.m1": "Độ trễ múi giờ −45%",
	"case.crossborder.m2": "Dịch tự động chính xác 95%",
	"case.crossborder.m3": "Chu kỳ bàn giao −20%",
	"case.support.title": "MetaRetail · Trung tâm CSKH",
	"case.support.m1": "Thời gian phản hồi −35%",
	"case.support.m2": "Tỷ lệ xử lý lần đầu +18%",
	"case.support.m3": "Hài lòng +12 điểm",
	"case.finance.title": "BlueBank · Tuân thủ",
	"case.finance.m1": "Tỷ lệ giao 99.99%",
	"case.finance.m2": "Kiểm toán bao phủ 100%",
	"case.finance.m3": "Truy vết thay đổi đầy đủ",
	"case.healthcare.title": "Medix · Y tế",
	"case.healthcare.m1": "Mã hoá PHI end‑to‑end",
	"case.healthcare.m2": "0 sự kiện kiểm toán bỏ sót",
	"case.healthcare.m3": "Triển khai on‑prem",
	"case.education.title": "NextEdu · Giáo dục",
	"case.education.m1": "Bài nộp +30%",
	"case.education.m2": "Tham gia lớp +22%",
	"case.education.m3": "Ổn định live 99.95%",
	"section.steps": "Bắt đầu",
	"steps.subtitle": "3 bước để sở hữu Jdchat",
	"step1.title": "Chọn triển khai & tải bộ cài",
	"step1.desc": "Cloud hoặc on‑prem. Tải ứng dụng và thành phần server.",
	"step2.title": "Gắn thương hiệu & nhập đội ngũ",
	"step2.desc": "Tải logo/chủ đề, nhập tổ chức & thành viên, thiết lập RBAC & policy.",
	"step3.title": "Vận hành & tích hợp",
	"step3.desc": "Bật kênh & bot, kết nối Webhook/OpenAPI với hệ thống của bạn.",
	"steps.cta.download": "Đi tới Tải xuống",
	"steps.cta.help": "Xem tài liệu",
	"steps.cta.contact": "Liên hệ",
	"section.faqInline": "Câu hỏi thường gặp",
	"faqinline.q1": "Chọn cloud hay on‑prem?",
	"faqinline.a1": "Tuỳ tuân thủ & vận hành: có yêu cầu dữ liệu -> on‑prem, còn lại cloud tiện hơn.",
	"faqinline.q2": "Kết nối hệ thống danh tính hiện có?",
	"faqinline.a2": "Hỗ trợ OIDC/SAML & Webhook; đồng bộ tổ chức & SSO.",
	"faqinline.q3": "Chi phí di chuyển?",
	"faqinline.a3": "Có công cụ import & tư vấn: thành viên/kênh/lịch sử có thể di chuyển từng đợt.",
	"transfer.badge": "Truyền tệp · Sắp ra mắt",
	"transfer.title": "Truyền tệp lớn nhanh, bảo mật doanh nghiệp",
	"transfer.lead": "Hỗ trợ tệp cực lớn, upload tiếp tục, mã hoá E2E & phân quyền.",
	"transfer.cta.contact": "Liên hệ",
	"transfer.cta.download": "Tải ứng dụng",
	"transfer.drop.tip": "Kéo thả tệp vào đây hoặc bấm chọn (demo)",
	"transfer.note": "Trang tĩnh trước mắt; API sẽ hỗ trợ resume & mã hoá.",
	"transfer.f1": "Nhanh",
	"transfer.f1.desc": "Chia mảnh song song, nén tối ưu.",
	"transfer.f2": "Bảo mật & tuân thủ",
	"transfer.f2.desc": "Mã hóa E2E, tự huỷ theo hạn, nhật ký kiểm toán.",
	"transfer.f3": "Đa nền tảng",
	"transfer.f3.desc": "iOS / Android / Windows / macOS.",
	"feature.ecosystem": "Hệ sinh thái mở",
	"feature.ecosystem.desc": "Bot, Webhook, SSO doanh nghiệp, Kiểm toán & Lưu trữ.",
	"solutions.enterprise": "Chat nội bộ",
	"solutions.enterprise.desc": "Sơ đồ tổ chức, phê duyệt, SSO; Đa thuê bao & cách ly phân vùng.",
	"solutions.crossborder": "Nhóm xuyên biên giới",
	"solutions.crossborder.desc": "Hợp tác đa ngôn ngữ, SMS/Email quốc tế, Kiểm toán tuân thủ.",
	"solutions.support": "Trung tâm hỗ trợ",
	"solutions.support.desc": "Bot AI, Vé & Cơ sở tri thức, Khảo sát hài lòng.",
	"solutions.finance": "Tài chính",
	"solutions.finance.desc": "Chính sách tuân thủ & mã hóa, Phân quyền chi tiết.",
	"solutions.healthcare": "Y tế",
	"solutions.healthcare.desc": "Bảo vệ quyền riêng tư, Nhật ký kiểm toán, Triển khai riêng.",
	"solutions.education": "Giáo dục",
	"solutions.education.desc": "Nhóm lớp, Bài tập, Công cụ lớp học trực tuyến.",
	"features.lead": "Xây dựng trên bốn trụ cột: bảo mật, hiệu năng, toàn cầu hóa và khả năng mở rộng.",
	"feature.e2e.desc": "Mã hóa đầu cuối, truyền & lưu trữ an toàn",
	"feature.av.desc": "Họp video/âm thanh HD, khử ồn",
	"feature.bot.desc": "Nền tảng Bot, Webhooks, Định tuyến lệnh",
	"feature.audit.desc": "Kiểm toán bảo mật, tuân thủ dữ liệu & lưu trữ",
	"feature.sso.desc": "Đăng nhập một lần OIDC/SAML",
	"feature.storage.desc": "Tải lên phân mảnh nối tiếp, lưu trữ mã hóa",
	"feature.international.desc": "Đa ngôn ngữ, múi giờ, đa tiền tệ",
	"func.chat": "Trò chuyện",
	"func.chat.desc": "1-1/Nhóm, Đã xem, Thu hồi, Ghim & Yêu thích",
	"func.security": "Bảo mật",
	"func.security.desc": "Mã hóa E2E, 2FA, Kiểm soát rủi ro phiên, Quản lý thiết bị",
	"func.performance": "Hiệu năng",
	"func.performance.desc": "Đồng thời lớn, Tối ưu mạng yếu, Thử lại & Idempotency",
	"func.collab": "Cộng tác",
	"func.collab.desc": "Chia sẻ tệp, Nhiệm vụ, Thông báo, {'@'}Tổ chức/Nhóm",
	"func.support": "Hỗ trợ",
	"func.support.desc": "Đa kênh, Định tuyến thông minh, Giám sát SLA",
	"func.admin": "Quản lý",
	"func.admin.desc": "Quyền phân cấp, Nhật ký kiểm toán, Theo dõi hành vi",
	"func.platform": "Nền tảng mở",
	"func.platform.desc": "Bot, Webhook, OpenAPI",
	"func.multi": "Đa nền tảng",
	"func.multi.desc": "iOS/Android/Windows/macOS",
	"faq.q2": "Làm sao để triển khai riêng?",
	"faq.a2": "Hỗ trợ triển khai container (Docker Compose/K8s), mở rộng theo nhu cầu.",
	"help.item1": "Cách tạo nhóm và kênh?",
	"help.item2": "Cách bật 2FA và chính sách bảo mật?",
	"help.item3": "Nhập hàng loạt thành viên và cấu trúc tổ chức",
	"news.item1.title": "Ra mắt Jdchat v1.0: đa nền tảng với mã hóa E2E",
	"news.item1.date": "2025-08-26 • Jdchat Team",
	"news.item1.desc": "Phiên bản công khai đầu tiên với ứng dụng di động và máy tính.",
	"news.item2.title": "Jdchat tích hợp trợ lý AI, tăng hiệu suất hỗ trợ 60%",
	"news.item2.date": "2025-08-10 • Jdchat Team",
	"news.item2.desc": "Trợ lý AI ra mắt với phân loại ý định và gợi ý trả lời.",
	"contact.lead": "Điền yêu cầu và chúng tôi sẽ liên hệ trong 1 ngày làm việc.",
	"contact.label.name": "Công ty/Tên",
	"contact.label.email": "Email",
	"contact.label.phone": "Điện thoại/WeChat",
	"contact.label.edition": "Phiên bản mong muốn",
	"contact.option.private": "Triển khai riêng",
	"contact.option.cloud": "Cloud công cộng",
	"contact.label.message": "Yêu cầu",
	"contact.placeholder": "Mô tả tình huống, quy mô người dùng dự kiến...",
	"contact.submit": "Gửi",
	"contact.emailDirect": "Hoặc gửi email trực tiếp",
	"contact.notice": "Lưu ý: Biểu mẫu chỉ hoạt động ở front-end. Để nhận backend, cung cấp URL gateway biểu mẫu.",
	"transfer.chooseFiles": "Chọn tệp",
	"helpDetail.team.title": "Cách tạo nhóm và kênh?",
	"helpDetail.team.intro": "Vào 'Quản trị → Nhóm', tạo nhóm rồi thêm kênh. Hỗ trợ công khai/riêng tư và phân quyền.",
	"helpDetail.2fa.title": "Cách bật 2FA và chính sách bảo mật?",
	"helpDetail.2fa.intro": "Trong 'Cài đặt → Bảo mật', bật xác thực hai bước (GA/SMS) và cấu hình danh sách trắng đăng nhập/IP.",
	"helpDetail.import.title": "Nhập hàng loạt thành viên và cấu trúc tổ chức",
	"helpDetail.import.intro": "Hỗ trợ nhập CSV/Excel với các trường: tên/email/phòng ban/vai trò.",
	"helpDetail.steps": "Các bước",
	"helpDetail.step1": "Đăng nhập bảng quản trị Jdchat.",
	"helpDetail.step2": "Điền cấu hình theo hướng dẫn.",
	"helpDetail.step3": "Lưu và kiểm tra kết quả trên ứng dụng.",
	"helpDetail.tip": "Mẹo: Để tự động hóa API, liên hệ hỗ trợ kỹ thuật.",
	"helpDetail.back": "← Quay lại danh sách trợ giúp",
	"newsDetail.v1.title": "Ra mắt Jdchat v1.0: đa nền tảng với mã hóa E2E",
	"newsDetail.v1.date": "2025-08-26 • Jdchat Team",
	"newsDetail.v1.content": "Chúng tôi chính thức phát hành v1.0 với mã hóa E2E và đồng bộ đa nền tảng cho iOS/Android/Windows/macOS. Sắp ra mắt: nền tảng bot, API mở và kiểm toán tuân thủ đầy đủ.",
	"newsDetail.ai.title": "Jdchat tích hợp trợ lý AI, tăng hiệu suất hỗ trợ 60%",
	"newsDetail.ai.date": "2025-08-10 • Jdchat Team",
	"newsDetail.ai.content": "Chúng tôi ra mắt trợ lý AI với cơ sở tri thức và tìm kiếm ngữ cảnh, tự động tạo gợi ý trả lời để nâng cao đáng kể hiệu quả hỗ trợ và sự hài lòng của người dùng.",
	"newsDetail.back": "← Quay lại danh sách tin tức",
	"footer.docs": "Tài liệu",
	"footer.faq": "Câu hỏi thường gặp",
	"footer.legal": "Pháp lý",
	"footer.privacy": "Chính sách bảo mật",
	"footer.terms": "Điều khoản sử dụng",
	"footer.sitemap": "Sơ đồ trang",
	"footer.contact": "Liên hệ",
	viewNews: viewNews,
	"page.title.sitemap": "Sơ đồ trang",
	"page.title.privacy": "Chính sách bảo mật",
	"page.title.terms": "Điều khoản sử dụng",
	"sitemap.main": "Trang chính",
	"sitemap.news": "Tin tức",
	"sitemap.help": "Trợ giúp & Hỗ trợ",
	"privacy.lastUpdated": "Cập nhật lần cuối",
	"privacy.section1.title": "1. Thông tin chúng tôi thu thập",
	"privacy.section1.content": "Chúng tôi thu thập thông tin bạn cung cấp khi sử dụng JDChat, bao gồm dữ liệu đăng ký, nội dung tin nhắn và dữ liệu sử dụng.",
	"privacy.section2.title": "2. Cách chúng tôi sử dụng thông tin",
	"privacy.section2.content": "Thông tin của bạn được sử dụng cho các mục đích sau:",
	"privacy.section2.item1": "Cung cấp và duy trì dịch vụ",
	"privacy.section2.item2": "Cải thiện trải nghiệm người dùng",
	"privacy.section2.item3": "Gửi thông báo dịch vụ",
	"privacy.section2.item4": "Đảm bảo bảo mật tài khoản",
	"privacy.section3.title": "3. Bảo vệ thông tin",
	"privacy.section3.content": "Chúng tôi áp dụng nhiều biện pháp bảo mật để bảo vệ thông tin của bạn:",
	"privacy.section3.item1": "Mã hóa đầu cuối",
	"privacy.section3.item2": "Lưu trữ dữ liệu an toàn",
	"privacy.section3.item3": "Kiểm soát truy cập",
	"privacy.section4.title": "4. Chia sẻ thông tin",
	"privacy.section4.content": "Chúng tôi không bán thông tin cá nhân của bạn. Thông tin chỉ được chia sẻ khi có yêu cầu pháp lý hoặc có sự đồng ý rõ ràng của bạn.",
	"privacy.section5.title": "5. Quyền của bạn",
	"privacy.section5.content": "Bạn có quyền truy cập, sửa đổi hoặc xóa thông tin cá nhân của mình. Liên hệ với chúng tôi để thực hiện các quyền này.",
	"privacy.section6.title": "6. Liên hệ",
	"privacy.contact": "Đối với câu hỏi về quyền riêng tư, vui lòng liên hệ",
	"terms.lastUpdated": "Cập nhật lần cuối",
	"terms.section1.title": "1. Chấp nhận điều khoản",
	"terms.section1.content": "Bằng việc sử dụng JDChat, bạn đồng ý với các điều khoản này. Nếu không đồng ý, vui lòng không sử dụng dịch vụ của chúng tôi.",
	"terms.section2.title": "2. Trách nhiệm người dùng",
	"terms.section2.content": "Khi sử dụng dịch vụ của chúng tôi, bạn đồng ý:",
	"terms.section2.item1": "Tuân thủ tất cả luật pháp hiện hành",
	"terms.section2.item2": "Không gửi spam hoặc nội dung độc hại",
	"terms.section2.item3": "Giữ thông tin đăng nhập an toàn",
	"terms.section2.item4": "Tôn trọng người dùng khác",
	"terms.section3.title": "3. Sở hữu trí tuệ",
	"terms.section3.content": "Tất cả quyền sở hữu trí tuệ trong JDChat và nội dung của nó thuộc về chúng tôi. Việc sao chép hoặc phân phối mà không có sự cho phép là bị cấm.",
	"terms.section4.title": "4. Thay đổi dịch vụ",
	"terms.section4.content": "Chúng tôi có quyền sửa đổi hoặc ngừng dịch vụ bất cứ lúc nào mà không cần thông báo trước.",
	"terms.section5.title": "5. Miễn trừ trách nhiệm",
	"terms.section5.content": "Dịch vụ được cung cấp nguyên trạng mà không có bất kỳ bảo đảm nào, dù rõ ràng hay ngụ ý.",
	"terms.section6.title": "6. Liên hệ",
	"terms.contact": "Đối với các vấn đề pháp lý, vui lòng liên hệ",
	"terms.title": "Thỏa thuận dịch vụ người dùng JDChat",
	"terms.updateDate": "Ngày cập nhật",
	"terms.effectiveDate": "Ngày hiệu lực",
	"terms.welcome": "Chào mừng bạn đến với JDChat và các dịch vụ của chúng tôi!",
	"terms.s1.title": "1. Các định nghĩa",
	"terms.s1.p1": "Người dùng cá nhân JDChat là người đăng ký tài khoản JDChat bằng số điện thoại và mã xác nhận, hoặc đăng nhập bằng tài khoản bên thứ ba được JDChat cho phép.",
	"terms.s1.p2": "Người dùng tổ chức doanh nghiệp JDChat là người dùng sau khi được quản trị viên ủy quyền tạo cấu trúc tổ chức doanh nghiệp JDChat, mời thành viên tải xuống và đăng ký làm người dùng cuối.",
	"terms.s1.p3": "Quản trị viên tổ chức doanh nghiệp JDChat là thành viên tổ chức được ủy quyền hoặc chỉ định, có quyền quản lý tổ chức doanh nghiệp.",
	"terms.s1.p4": "Dữ liệu kiểm soát tổ chức doanh nghiệp là thông tin và dữ liệu liên quan đến người dùng doanh nghiệp được gửi hoặc tạo ra trong quá trình sử dụng dịch vụ JDChat.",
	"terms.s1.p5": "Người xử lý thông tin cá nhân là tổ chức hoặc cá nhân có quyền quyết định mục đích và phương thức xử lý thông tin cá nhân.",
	"terms.s2.title": "2. Các bên ký kết",
	"terms.s2.p1": "Thỏa thuận này là giữa người dùng cá nhân JDChat, người dùng tổ chức doanh nghiệp (bao gồm quản trị viên và người dùng cuối), và nhà cung cấp dịch vụ JDChat.",
	"terms.s2.p2": "Người dùng cá nhân JDChat, người dùng tổ chức doanh nghiệp, quản trị viên và người dùng cuối được gọi chung là 'Người dùng' hoặc 'Bạn'.",
	"terms.s2.p3": "Nhà cung cấp dịch vụ JDChat bao gồm Công ty TNHH Công nghệ Minggushan Vũ Hán, gọi chung là 'JDChat' hoặc 'Chúng tôi'.",
	"terms.s3.title": "3. Nội dung và hiệu lực thỏa thuận",
	"terms.s3.p1": "Thỏa thuận này bao gồm nội dung chính, chính sách, quy tắc, thông báo đã hoặc sẽ được công bố, bao gồm Chính sách bảo mật JDChat.",
	"terms.s3.p2": "JDChat có quyền sửa đổi thỏa thuận này khi cần thiết. Thay đổi sẽ được thông báo qua ứng dụng JDChat. Nếu không đồng ý, bạn nên ngừng sử dụng dịch vụ ngay lập tức.",
	"terms.s4.title": "4. Nội dung dịch vụ",
	"terms.s4.sub1.title": "(1) Nội dung dịch vụ JDChat",
	"terms.s4.sub1.p1": "Dịch vụ JDChat bao gồm ứng dụng khách hàng, tài liệu, dịch vụ âm thanh/video và các tính năng khác được cung cấp qua trang web chính thức.",
	"terms.s4.sub1.p2": "JDChat cung cấp nhiều phiên bản ứng dụng bao gồm iOS, Android và các hệ điều hành khác. Người dùng có thể chọn cài đặt phiên bản phù hợp với thiết bị.",
	"terms.s4.sub1.p3": "Bạn đồng ý rằng JDChat có thể gửi thông tin (bao gồm thương mại và phi thương mại) qua thông báo, SMS, push và các phương thức khác.",
	"terms.s4.sub2.title": "(2) Các hình thức dịch vụ JDChat",
	"terms.s4.sub2.intro": "Dịch vụ JDChat bao gồm dịch vụ cho người dùng cá nhân và dịch vụ văn phòng di động trực tuyến cho người dùng tổ chức doanh nghiệp.",
	"terms.s4.sub2.personal.title": "Dịch vụ người dùng cá nhân JDChat",
	"terms.s4.sub2.personal.desc": "Dịch vụ cho người dùng cá nhân đăng ký bằng số điện thoại và mã xác nhận, bao gồm hiển thị thông tin cá nhân, nhắn tin tức thời và kết bạn.",
	"terms.s4.sub2.enterprise.title": "Dịch vụ tổ chức doanh nghiệp JDChat",
	"terms.s4.sub2.enterprise.desc": "Dịch vụ nơi quản trị viên tạo cấu trúc tổ chức doanh nghiệp, mời thành viên và cấu hình ứng dụng văn phòng để số hóa tổ chức và kinh doanh.",
	"terms.s5.title": "5. Giấy phép phần mềm JDChat",
	"terms.s5.p1": "Ủy quyền. JDChat cấp cho bạn giấy phép không chuyển nhượng, không độc quyền để sử dụng dịch vụ JDChat theo thỏa thuận này. Bạn có thể tạo một bản sao lưu.",
	"terms.s5.p2": "Hạn chế sử dụng. Trừ khi có quy định khác, dịch vụ JDChat chỉ được sử dụng cho mục đích phi thương mại. Bạn đồng ý không sao chép, bán hoặc bán lại bất kỳ phần nào của dịch vụ.",
	"terms.s5.p3": "Quyền bảo lưu. Tất cả các quyền không được cấp rõ ràng trong thỏa thuận này đều thuộc về JDChat. Bạn phải xin phép bằng văn bản cho các quyền bổ sung.",
	"terms.s6.title": "6. Cập nhật phần mềm",
	"terms.s6.p1": "Để cải thiện trải nghiệm người dùng, JDChat sẽ liên tục phát triển dịch vụ mới và cung cấp cập nhật phần mềm, bao gồm thay thế, sửa đổi, nâng cấp.",
	"terms.s6.p2": "Để đảm bảo bảo mật và chức năng phần mềm, JDChat có thể cập nhật phần mềm mà không cần thông báo trước.",
	"terms.s6.p3": "Bạn hiểu và đồng ý rằng JDChat có thể thông báo cập nhật qua thông báo và nhật ký thay đổi trên trang web và ứng dụng.",
	"terms.s7.title": "7. Đăng ký và quản lý tài khoản",
	"terms.s7.intro": "Bạn có thể đăng nhập và sử dụng dịch vụ JDChat thông qua đăng ký số điện thoại cá nhân, tài khoản bên thứ ba được ủy quyền hoặc tài khoản doanh nghiệp.",
	"terms.s8.title": "8. Quy tắc sử dụng dịch vụ JDChat",
	"terms.s8.intro": "Bạn đồng ý không sử dụng dịch vụ này cho bất kỳ hoạt động bất hợp pháp hoặc không phù hợp nào.",
	"terms.s8.sub1.title": "(1) Quy tắc đăng nội dung",
	"terms.s8.sub1.desc": "Là người dùng JDChat, bạn bị cấm tạo, sao chép hoặc đăng nội dung vi phạm hiến pháp, gây nguy hại an ninh quốc gia, vu khống người khác hoặc phát tán tin đồn.",
	"terms.s8.sub2.title": "(2) Quy tắc sử dụng phần mềm",
	"terms.s8.sub2.desc": "Bạn đồng ý không can thiệp hoặc làm hỏng bất kỳ phần mềm, phần cứng hoặc thiết bị truyền thông nào, và không sử dụng phần mềm hoặc plugin bên thứ ba trái phép.",
	"terms.s8.sub3.title": "(3) Quy tắc hành vi",
	"terms.s8.sub3.desc": "Bạn không được gửi thông tin sai, lừa đảo người khác, xâm phạm quyền người khác hoặc tham gia bất kỳ hoạt động bất hợp pháp nào.",
	"terms.s9.title": "9. Phí dịch vụ",
	"terms.s9.p1": "Bất kỳ dịch vụ dùng thử miễn phí nào không được coi là JDChat từ bỏ quyền thu phí. JDChat có thể thông báo tiêu chuẩn phí trước 7 ngày.",
	"terms.s9.p2": "JDChat có quyền điều chỉnh phí với thông báo trước 7 ngày mà không cần sự đồng ý của bạn.",
	"terms.s9.p3": "Bạn chịu trách nhiệm về phí internet, dữ liệu và các phí truyền thông của bên thứ ba khác.",
	"terms.s10.title": "10. Đình chỉ hoặc chấm dứt dịch vụ",
	"terms.s10.p1": "Do tính chất đặc biệt của dịch vụ internet, JDChat có thể thay đổi, đình chỉ hoặc chấm dứt tất cả hoặc một phần dịch vụ với thông báo trên trang web.",
	"terms.s10.p2": "Bạn hiểu rằng JDChat có thể bảo trì thiết bị định kỳ và không chịu trách nhiệm cho gián đoạn dịch vụ với thông báo trước.",
	"terms.s11.title": "11. Chính sách bảo mật",
	"terms.s11.p1": "JDChat cố gắng thực hiện các biện pháp bảo mật vật lý, điện tử và quản lý hợp lý để bảo vệ thông tin của bạn khỏi tiết lộ, hư hỏng hoặc mất mát.",
	"terms.s11.p2": "Bạn chịu trách nhiệm bảo vệ thiết bị, tài khoản và mật khẩu. Mất dữ liệu do lỗi bạn là trách nhiệm của bạn.",
	"terms.s11.p3": "Xem Chính sách bảo mật JDChat để biết các điều khoản bảo mật cụ thể.",
	"terms.s12.title": "12. Trách nhiệm giới hạn",
	"terms.s12.p1": "Dịch vụ được cung cấp 'nguyên trạng' mà không có bất kỳ cam kết hoặc bảo đảm nào về tính hiệu quả, độ chính xác, độ tin cậy, ổn định, đầy đủ hoặc kịp thời.",
	"terms.s12.p2": "JDChat không chịu trách nhiệm cho gián đoạn dịch vụ do lỗi mạng, lỗi thiết bị, lỗi hệ thống, mất điện, tấn công mạng, đình công, bạo loạn, hỏa hoạn, thiên tai, chiến tranh hoặc hành động chính phủ.",
	"terms.s12.p3": "JDChat không chịu trách nhiệm cho thiệt hại gián tiếp bao gồm mất lợi nhuận hoặc gián đoạn kinh doanh.",
	"terms.s12.p4": "Bạn hiểu rằng thông tin chia sẻ có thể bị sao chép hoặc sử dụng bởi người khác, và bạn chịu mọi rủi ro như vậy.",
	"terms.s13.title": "13. Giải quyết tranh chấp",
	"terms.s13.p1": "Việc giải thích và áp dụng thỏa thuận này sẽ được điều chỉnh bởi pháp luật của nước Cộng hòa Nhân dân Trung Hoa.",
	"terms.s13.p2": "Nếu bất kỳ điều khoản nào bị coi là không hợp lệ, các điều khoản còn lại vẫn có hiệu lực.",
	"terms.s14.title": "14. Thông tin liên hệ",
	"terms.s14.intro": "Bạn có thể liên hệ với chúng tôi thông qua phần Giới thiệu - Dịch vụ khách hàng trong ứng dụng JDChat hoặc qua điện thoại và email.",
	"terms.s14.address": "Địa chỉ",
	"terms.s14.addressValue": "B91, Tầng 13, Tòa nhà 1, Đơn vị 1, Trung tâm thương mại Vanke Golden Domain, Số 29 Đường Fangji, Phố Yangyuan, Quận Wuchang, Thành phố Vũ Hán, Tỉnh Hồ Bắc, Trung Quốc",
	"terms.s14.email": "Email",
	"privacy.title": "Chính sách bảo mật chức năng cơ bản JDChat",
	"privacy.updateDate": "Ngày cập nhật",
	"privacy.effectiveDate": "Ngày hiệu lực",
	"privacy.intro.title": "Giới thiệu",
	"privacy.intro.p1": "Chào mừng bạn đến với sản phẩm và dịch vụ của chúng tôi! Chúng tôi hiểu tầm quan trọng của thông tin cá nhân đối với bạn, vì vậy chúng tôi đã xây dựng Chính sách bảo mật chức năng cơ bản JDChat này. Vui lòng đọc và hiểu đầy đủ tất cả nội dung của chính sách này trước khi sử dụng sản phẩm.",
	"privacy.intro.p2": "JDChat là ứng dụng công cụ tích hợp chat tức thời và chức năng cộng tác. Để cung cấp cho bạn dịch vụ truyền thông cơ bản như văn bản, hình ảnh, giọng nói, video, cũng như ghi chú và tài liệu cộng tác trực tuyến, chúng tôi có thể thu thập các thông tin cần thiết sau:",
	"privacy.intro.item1": "Số điện thoại cung cấp khi đăng ký",
	"privacy.intro.item2": "Thông tin tài khoản (như danh sách liên lạc, biệt danh, ảnh đại diện, v.v.)",
	"privacy.intro.item3": "Thông tin thiết bị cơ bản (như model thiết bị, phiên bản OS, mã định danh thiết bị, v.v.)",
	"privacy.intro.item4": "Thông tin nhật ký (như thời gian đăng nhập, bản ghi hoạt động, nhật ký lỗi, v.v.)",
	"privacy.intro.item5": "Thông tin kết nối mạng (như địa chỉ IP, loại mạng, v.v.)",
	"privacy.intro.p3": "Chính sách này chỉ áp dụng cho việc thu thập và sử dụng thông tin cá nhân trong các chức năng cơ bản của JDChat. Nếu bạn sử dụng các chức năng mở rộng, chúng tôi sẽ giải thích và xin sự đồng ý của bạn sau khi có sự ủy quyền rõ ràng.",
	"privacy.toc.title": "Mục lục chính sách",
	"privacy.toc.s1": "Phạm vi áp dụng",
	"privacy.toc.s2": "Thu thập và sử dụng thông tin",
	"privacy.toc.s3": "Chia sẻ, chuyển và công khai thông tin",
	"privacy.toc.s4": "Quyền của bạn",
	"privacy.toc.s5": "Lưu trữ thông tin",
	"privacy.toc.s6": "Bảo vệ trẻ vị thành niên",
	"privacy.toc.s7": "Liên hệ với chúng tôi",
	"privacy.s1.title": "1. Phạm vi áp dụng",
	"privacy.s1.p1": "Chính sách này áp dụng cho các chức năng cơ bản chat tức thời và văn phòng trực tuyến do phần mềm JDChat và các bản cập nhật tiếp theo cung cấp.",
	"privacy.s1.p2": "Chính sách này không áp dụng cho sản phẩm và dịch vụ do các công ty liên kết hoặc nhà cung cấp dịch vụ bên thứ ba cung cấp. Vui lòng tham khảo chính sách bảo mật riêng của họ.",
	"privacy.s2.title": "2. Thu thập và sử dụng thông tin",
	"privacy.s2.intro": "Chúng tôi chỉ thu thập thông tin cần thiết sau khi bạn ủy quyền đồng ý để cung cấp các chức năng cơ bản. Nếu bạn từ chối, bạn sẽ không thể sử dụng dịch vụ bình thường.",
	"privacy.s2.sub1.title": "Đăng ký và quản lý tài khoản",
	"privacy.s2.sub1.desc": "Bạn cần cung cấp số điện thoại để đăng ký tài khoản, và có thể tự nguyện hoàn thiện thông tin như biệt danh, ảnh đại diện, giới tính. Một số thông tin (như biệt danh, ảnh đại diện) sẽ được hiển thị công khai.",
	"privacy.s2.sub2.title": "Đăng nhập được ủy quyền",
	"privacy.s2.sub2.desc": "Bạn có thể chọn ủy quyền sử dụng tài khoản JDChat để đăng nhập ứng dụng bên thứ ba, hoặc đăng nhập JDChat thông qua bên thứ ba. Chúng tôi sẽ xử lý thông tin liên quan theo phạm vi ủy quyền.",
	"privacy.s2.sub3.title": "Chức năng nhắn tin tức thời",
	"privacy.s2.sub3.desc": "Khi sử dụng chức năng chat, chúng tôi sẽ ghi lại dữ liệu tin nhắn cần thiết (văn bản, hình ảnh, giọng nói, v.v.) và nhật ký hoạt động để thực hiện truyền và đồng bộ thông tin. Gửi ảnh và tệp cần quyền lưu trữ, gửi giọng nói và chụp ảnh cần quyền micro và camera. Chia sẻ vị trí cần quyền vị trí của bạn.",
	"privacy.s2.sub4.title": "Bảo vệ an ninh",
	"privacy.s2.sub4.desc": "Chúng tôi cam kết cung cấp môi trường truyền thông an toàn cho bạn. Để ngăn chặn và kiểm soát gian lận mạng viễn thông và duy trì hoạt động mạng bình thường, chúng tôi sẽ thu thập mã định danh thiết bị, mã định danh biến đổi, thông tin ứng dụng, tham số thiết bị và thông tin hệ thống, thông tin môi trường mạng thiết bị, thông tin nhà mạng, v.v.",
	"privacy.s2.sub5.title": "Dịch vụ bổ sung dựa trên quyền hệ thống",
	"privacy.s2.sub5.desc": "Chúng tôi có thể yêu cầu quyền hệ thống trong các dịch vụ bổ sung để thu thập và sử dụng thông tin cá nhân của bạn. Nếu bạn không đồng ý bật các quyền liên quan, sẽ không ảnh hưởng đến việc sử dụng dịch vụ cơ bản JDChat, nhưng bạn sẽ không thể sử dụng các dịch vụ bổ sung này. Bạn có thể bật hoặc tắt các quyền này bất cứ lúc nào.",
	"privacy.s2.sub6.title": "Dịch vụ Cookie và công nghệ tương tự",
	"privacy.s2.sub6.desc": "Khi bạn sử dụng dịch vụ của chúng tôi, chúng tôi có thể sử dụng cookie hoặc mã định danh ẩn danh để thu thập, xác định và lưu trữ thông tin về các lần truy cập và sử dụng sản phẩm này của bạn. Chúng tôi cam kết không sử dụng cookie cho bất kỳ mục đích nào khác ngoài những gì được mô tả trong chính sách bảo mật này.",
	"privacy.s2.sub7.title": "Các quy tắc khác về thu thập và sử dụng thông tin cá nhân",
	"privacy.s2.sub7.desc": "Nếu thông tin bạn cung cấp chứa thông tin cá nhân của người khác, bạn cần đảm bảo rằng bạn đã có sự ủy quyền hợp pháp trước khi cung cấp cho JDChat. Nếu chúng tôi sử dụng thông tin cho các mục đích không được nêu trong chính sách này, chúng tôi sẽ xin sự đồng ý của bạn trước.",
	"privacy.s3.title": "3. Chia sẻ, chuyển và công khai thông tin",
	"privacy.s3.sub1.title": "Chuyển thông tin",
	"privacy.s3.sub1.desc": "Nếu chúng tôi cần chuyển thông tin cá nhân do sáp nhập, chia tách, giải thể hoặc phá sản, chúng tôi sẽ thông báo cho bạn tên và thông tin liên hệ của người nhận. Người nhận sẽ tiếp tục thực hiện chính sách này và các nghĩa vụ pháp lý khác.",
	"privacy.s3.sub2.title": "Công khai",
	"privacy.s3.sub2.desc": "Chúng tôi chỉ công khai thông tin cá nhân của bạn khi bạn chủ động chọn hoặc bằng cách khác có sự đồng ý riêng của bạn. Nếu chúng tôi xác định bạn vi phạm luật pháp hoặc các thỏa thuận và quy tắc liên quan đến JDChat, chúng tôi có thể tiết lộ thông tin cá nhân của bạn.",
	"privacy.s3.sub3.title": "Ngừng hoạt động",
	"privacy.s3.sub3.desc": "Nếu chúng tôi ngừng cung cấp sản phẩm hoặc dịch vụ, chúng tôi sẽ ngay lập tức ngừng thu thập thông tin cá nhân của bạn và thông báo cho bạn thông qua thông báo cá nhân hoặc thông báo. Chúng tôi sẽ xóa hoặc ẩn danh hóa thông tin cá nhân liên quan mà chúng tôi nắm giữ.",
	"privacy.s3.sub4.title": "Trường hợp không cần ủy quyền",
	"privacy.s3.sub4.desc": "Theo luật pháp, không cần sự đồng ý ủy quyền của bạn cho: ký kết và thực hiện hợp đồng hoặc quản lý nhân sự; thực hiện nghĩa vụ pháp lý; bảo vệ tính mạng, sức khỏe và an toàn tài sản của cá nhân trong trường hợp khẩn cấp.",
	"privacy.s4.title": "4. Quyền của bạn",
	"privacy.s4.p1": "Bạn có thể xóa một số thông tin của mình hoặc đăng ký hủy tài khoản để xóa tất cả thông tin của bạn.",
	"privacy.s4.p2": "Trong các trường hợp sau, bạn có thể liên hệ dịch vụ khách hàng để yêu cầu xóa thông tin cá nhân:",
	"privacy.s4.item1": "Việc xử lý thông tin cá nhân của chúng tôi vi phạm luật pháp",
	"privacy.s4.item2": "Chúng tôi thu thập và sử dụng thông tin cá nhân của bạn mà không có sự đồng ý rõ ràng của bạn",
	"privacy.s4.item3": "Việc xử lý thông tin cá nhân của chúng tôi vi phạm nghiêm trọng thỏa thuận của chúng tôi với bạn",
	"privacy.s4.item4": "Mục đích xử lý của chúng tôi đã đạt được, không thể đạt được hoặc không còn cần thiết",
	"privacy.s4.item5": "Chúng tôi đã ngừng cung cấp sản phẩm hoặc dịch vụ, hoặc thời gian lưu trữ đã hết",
	"privacy.s4.p3": "Bạn có thể gửi yêu cầu quyền dữ liệu thông qua 'Cài đặt & Bảo mật - Trung tâm an ninh - Quyền dữ liệu' trong ứng dụng JDChat hoặc thông qua các phương thức liên hệ của chúng tôi. Người dùng cá nhân có thể đăng nhập và nhấn 'Tôi - Cài đặt tài khoản - Hủy tài khoản JDChat' để hủy.",
	"privacy.s5.title": "5. Lưu trữ thông tin",
	"privacy.s5.p1": "Chúng tôi chỉ lưu giữ thông tin cá nhân của bạn trong thời gian cần thiết để đạt được các mục đích được mô tả trong chính sách này, trừ khi luật pháp yêu cầu lưu trữ bắt buộc. Ví dụ, Luật Thương mại điện tử yêu cầu thông tin sản phẩm và dịch vụ và thông tin giao dịch phải được lưu giữ không dưới ba năm kể từ ngày hoàn thành giao dịch.",
	"privacy.s5.p2": "Sau khi hết thời gian lưu trữ, chúng tôi sẽ xóa hoặc ẩn danh hóa thông tin cá nhân của bạn theo luật hiện hành. Nếu bạn lo lắng về thông tin cá nhân của mình, đặc biệt là rò rỉ tài khoản hoặc mật khẩu, vui lòng liên hệ ngay với dịch vụ khách hàng của chúng tôi.",
	"privacy.s6.title": "6. Bảo vệ trẻ vị thành niên",
	"privacy.s6.p1": "Trong các hoạt động văn phòng số, giao tiếp và cộng tác, chúng tôi giả định rằng bạn có năng lực dân sự tương ứng. Nếu bạn là người chưa thành niên, chúng tôi yêu cầu cha mẹ hoặc người giám hộ khác của bạn đọc kỹ chính sách này và sử dụng dịch vụ của chúng tôi hoặc cung cấp thông tin cho chúng tôi với sự đồng ý của họ.",
	"privacy.s6.p2": "Nếu bạn là cha mẹ hoặc người giám hộ khác của trẻ em, vui lòng chú ý xem trẻ có sử dụng dịch vụ của chúng tôi sau khi có sự ủy quyền và đồng ý của bạn hay không. Nếu bạn có câu hỏi về thông tin cá nhân của trẻ, vui lòng liên hệ với bộ phận bảo vệ thông tin cá nhân của chúng tôi.",
	"privacy.s7.title": "7. Liên hệ với chúng tôi",
	"privacy.s7.p1": "Bạn có thể liên hệ với chúng tôi thông qua các phương thức sau, và chúng tôi sẽ trả lời yêu cầu của bạn trong vòng 10 ngày làm việc. Nếu bạn có bất kỳ câu hỏi, ý kiến hoặc đề xuất nào về chính sách này, bạn có thể liên hệ với chúng tôi thông qua 'Tôi - Liên hệ chúng tôi - Dịch vụ trực tuyến'.",
	"privacy.s7.company": "Công ty",
	"privacy.s7.companyValue": "Công ty TNHH Công nghệ Minggushan Vũ Hán",
	"privacy.s7.email": "Email",
	"privacy.s7.address": "Địa chỉ",
	"privacy.s7.addressValue": "B91, Tầng 13, Tòa nhà 1, Đơn vị 1, Trung tâm thương mại Vanke Golden Domain, Số 29 Đường Fangji, Phố Yangyuan, Quận Wuchang, Thành phố Vũ Hán, Tỉnh Hồ Bắc, Trung Quốc",
	"privacy.sdk.title": "Phụ lục: Thông tin thu thập SDK bên thứ ba",
	"privacy.sdk.intro": "Để thực hiện và đảm bảo việc thực hiện và hoạt động ổn định của một số chức năng của ứng dụng, chúng tôi có thể truy cập các bộ công cụ phát triển phần mềm (SDK) do bên thứ ba cung cấp. Các SDK này có thể thu thập thông tin thiết bị của bạn hoặc thông tin cần thiết khác. Chúng tôi sẽ giám sát chặt chẽ hành vi thu thập thông tin của đối tác để bảo vệ an ninh thông tin của bạn.",
	"privacy.sdk.note": "Chúng tôi chỉ gọi các dịch vụ SDK liên quan khi cần thiết, thực hiện đánh giá tuân thủ trước khi truy cập và ký thỏa thuận bảo vệ dữ liệu với bên thứ ba. Hành vi thu thập của các SDK bên thứ ba này chịu sự ràng buộc của các chính sách bảo mật tương ứng của họ. Vui lòng đọc kỹ các tuyên bố bảo mật của họ để hiểu đầy đủ hơn."
};

const vi$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: vi,
  viewNews: viewNews
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    if (typeof ssrError.data === "string") {
      try {
        ssrError.data = destr(ssrError.data);
      } catch {
      }
    }
    setSSRError(ssrContext, ssrError);
  }
  const isRenderingPayload = PAYLOAD_URL_RE.test(ssrContext.url);
  if (isRenderingPayload) {
    const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
    ssrContext.url = url;
    event._path = event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const renderer = await getRenderer(ssrContext);
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response = renderPayloadResponse(ssrContext);
    return response;
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    if ("inline" in getQuery(resource.file)) {
      continue;
    }
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    const tagPosition = "head";
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  const result = [];
  for (const _chunk of chunks) {
    const chunk = _chunk?.trim();
    if (chunk) {
      result.push(chunk);
    }
  }
  return result;
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: renderer
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
