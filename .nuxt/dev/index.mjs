import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, getCookie, setCookie, removeResponseHeader, getQuery as getQuery$1, getHeader, readBody, getRouterParam, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatusText } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/@vue/shared/dist/shared.cjs.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, joinRelativeURL, parsePath, withLeadingSlash, withTrailingSlash, decodePath, withoutTrailingSlash } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/ufo/dist/index.mjs';
import destr, { destr as destr$1 } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/klona/dist/index.mjs';
import defu, { defuFn, createDefu } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/source-map/source-map.js';
import { createRouterMatcher } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/vue-router/vue-router.node.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/errx/dist/index.js';
import { isVNode, toValue, isRef } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/vue/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/unhead/dist/server.mjs';
import process$1 from 'node:process';
import { renderToString } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/nguyenngockhanh/projects/flux-homesite copy/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/nguyenngockhanh/projects/flux-homesite copy","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/nguyenngockhanh/projects/flux-homesite copy/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/nguyenngockhanh/projects/flux-homesite copy/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/nguyenngockhanh/projects/flux-homesite copy/.nuxt/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/nguyenngockhanh/projects/flux-homesite copy/.data/kv"}));

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
      "defaultLocale": "en",
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
      "detectBrowserLanguage": false,
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

const _q6ZvFSPNjPfoH1pj4pJU6wMtih3WUsV6wJdeGKPBaE = (function(nitro) {
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
      key: "locale_zh_46json_efe6c079",
      load: () => Promise.resolve().then(function () { return zh$1; }),
      cache: true
    }
  ],
  en: [
    {
      key: "locale_en_46json_f2523c2b",
      load: () => Promise.resolve().then(function () { return en$1; }),
      cache: true
    }
  ],
  vi: [
    {
      key: "locale_vi_46json_dfa6d82b",
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
const _5eLs6QmfOK3_vviQtiBww5436jnhkLtM0Zo32UVrEc = defineNitroPlugin(async (nitro) => {
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
    if (!url.pathname.includes("/_i18n/VhROWf8s") && !isExistingNuxtRoute(path)) {
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

const rootDir = "/Users/nguyenngockhanh/projects/flux-homesite copy";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _k4F4LlyV44IHpoeWumG7qhVf4geieeavrwVtOGE0Ac = (nitroApp) => {
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
  _q6ZvFSPNjPfoH1pj4pJU6wMtih3WUsV6wJdeGKPBaE,
_5eLs6QmfOK3_vviQtiBww5436jnhkLtM0Zo32UVrEc,
_k4F4LlyV44IHpoeWumG7qhVf4geieeavrwVtOGE0Ac
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
const _X_lgGK = eventHandler((event) => {
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

const _YRieo7 = defineEventHandler((event) => {
  const query = getQuery$1(event);
  const langParam = query.lang;
  const availableLocales = ["zh", "en", "vi"];
  const cookieName = "jdchat_lang";
  const defaultLocale = "en";
  if (langParam && availableLocales.includes(langParam)) {
    setCookie(event, cookieName, langParam, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365
      // 1 year
    });
    return;
  }
  const existingCookie = getCookie(event, cookieName);
  if (existingCookie && availableLocales.includes(existingCookie)) {
    return;
  }
  const acceptLanguage = getHeader(event, "accept-language");
  if (acceptLanguage) {
    const languages = acceptLanguage.split(",").map((lang) => {
      const [code, q = "q=1"] = lang.trim().split(";");
      const quality = parseFloat(q.replace("q=", "")) || 1;
      const primaryCode = code.split("-")[0].toLowerCase();
      return { code: primaryCode, quality };
    }).sort((a, b) => b.quality - a.quality);
    for (const lang of languages) {
      if (availableLocales.includes(lang.code)) {
        setCookie(event, cookieName, lang.code, {
          path: "/",
          maxAge: 60 * 60 * 24 * 365
        });
        return;
      }
    }
  }
  setCookie(event, cookieName, defaultLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365
  });
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
const getServerEntry = () => import('file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
const getClientManifest = () => import('file:///Users/nguyenngockhanh/projects/flux-homesite%20copy/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
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
const _Nc8FV1 = _messagesHandler ;

const _lazy_cMbiJr = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _X_lgGK, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _YRieo7, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_cMbiJr, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _Nc8FV1, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_cMbiJr, lazy: true, middleware: false, method: undefined }
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
	"func.multi.desc": "iOS / Android / Windows / macOS",
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
	"terms.title": "JDChat用户服务协议",
	"terms.lastUpdated": "更新日期：2025年12月24日",
	"terms.effectiveDate": "生效日期：2025年12月24日",
	"terms.intro": "欢迎使用JDChat及服务！",
	"terms.s1.title": "一、定义条款",
	"terms.s1.individualUser.title": "1、JDChat个人用户",
	"terms.s1.individualUser.p1": "是指通过手机号码或电子邮箱及验证码注册JDChat账号，或使用JDChat允许的第三方账号授权登录JDChat，且未加入任何JDChat企业组织，亦不以企业组织最终用户身份使用JDChat服务的个人。",
	"terms.s1.orgUser.title": "2、JDChat企业组织用户",
	"terms.s1.orgUser.p1": "是指经企业组织授权的管理员创建JDChat企业组织架构，邀请组织成员作为企业组织最终用户下载、注册JDChat账号或为最终用户配置企业账号，完成JDChat企业组织创建后，由企业组织授权管理员配置、开通、管理和使用JDChat办公应用进行在线移动办公、沟通与协同的用户。JDChat企业组织用户含JDChat认证企业组织用户和非认证企业组织用户。JDChat企业组织用户包括但不限于法人、政府机构、其他组织、合伙企业或个体工商户等合法主体。",
	"terms.s1.admin.title": "3、JDChat企业组织管理员",
	"terms.s1.admin.p1": "指经JDChat企业组织用户授权或指定，拥有JDChat企业组织用户管理权限的企业组织成员。管理权限包括但不限于管理企业组织通讯录及组织成员、设定子管理员、代表企业组织开通和管理第三方应用、确认和签署相应的JDChat在线协议、注销企业组织等。企业组织管理员可以为一人或多人，简称“管理员”。",
	"terms.s1.data.title": "4、企业组织控制数据",
	"terms.s1.data.p1": "指企业组织用户及最终用户使用JDChat服务过程中提交或产生的与企业用户相关的信息和数据，包括企业用户及其管理员提交或要求最终用户提供的信息、企业用户分配给最终用户的信息，以及为完成工作需求、满足企业日常管理需求由最终用户提交给企业用户的信息。",
	"terms.s1.processor.title": "5、个人信息处理者",
	"terms.s1.processor.p1": "是指JDChat个人用户或认证企业组织用户在使用JDChat服务进行在线移动办公、沟通与协同中，有权决定个人信息处理目的、方式的组织或个人。",
	"terms.s1.processor.p2": "具体的：",
	"terms.s1.processor.li1": "在JDChat个人用户服务场景，JDChat为个人信息处理者。",
	"terms.s1.processor.li2": "在企业组织用户及其管理员、最终用户使用JDChat服务进行移动办公、沟通与协同场景下，个人信息处理者为JDChat企业组织用户，JDChat是依据管理员操作、配置等指令，受委托对企业组织控制数据（含最终用户个人信息）进行收集、存储、使用、加工、传输、提供、公开、删除等处理。",
	"terms.s2.title": "二、缔约主体",
	"terms.s2.p1": "本协议是由无企业组织身份的JDChat个人用户以及企业组织用户（含管理员及最终用户）与JDChat服务提供者之间关于用户下载、安装、使用、复制本软件，以及使用JDChat相关服务，在 北京朝阳区共同缔结的协议。",
	"terms.s2.p2": "JDChat个人用户、JDChat企业组织用户及其管理员、最终用户，统称为“用户”或“您”。",
	"terms.s2.p3": "JDChat服务提供者包括JDchat数字技术有限公司以JDChat服务提供者统称为“JDChat”或“我们”。",
	"terms.s3.title": "三、协议内容和效力",
	"terms.s3.p1": "本协议内容包括本协议正文、已经发布或将来可能发布的各项政策、规则、声明、通知、提示（以下简称“规则”），包括《JDChat隐私政策》。前述规则为本协议不可分割的组成部分，与本协议具有同等法律效力。",
	"terms.s3.p2": "JDChat公司有权根据需要不时制订、修改本协议及相关规则，变更后的协议和规则将通过JDChat客户端端内以红点等形式通知，完毕后即取代原协议及规则生效。如您不同意相关变更，应当立即停止使用JDChat服务；如您继续使用JDChat服务，即表示您已接受经修订的协议和规则。",
	"terms.s4.title": "四、服务内容",
	"terms.s4.sub1.title": "（一）JDChat服务内容",
	"terms.s4.sub1.p1": "JDChat服务包括JDChat客户端、JDChat官网形式提供的JDChat文档、JDChat音视频服务以及将JDChat部分功能。",
	"terms.s4.sub1.p2": "本服务中JDChat提供包括但不限于iOS、Android以及其他操作系统适配服务等多个应用版本（具体以JDChat提供的版本为准）。用户可自行选择安装与终端设备相匹配的软件版本。JDChat会不断更新应用版本，如用户已注册使用一种版本的服务，则可以以同一账号使用其他版本的服务，本协议自动适用于用户所使用的所有版本的软件和服务。",
	"terms.s4.sub1.p3": "您同意JDChat可以自行或由第三方通过消息通知、短信、推送、小红点等多种方式向您发送、展示信息（包括商业信息和非商业信息），具体发送的形式、频次以JDChat实际提供为准。对推送通知，您可以在JDChatApp中“我的-设置-新消息通知”进行开关管理。",
	"terms.s4.sub2.title": "（二）JDChat服务形式",
	"terms.s4.sub2.intro": "JDChat服务包括面向JDChat个人用户提供的服务，以及面向JDChat企业组织用户提供的数字化在线移动办公、沟通与协同服务。",
	"terms.s4.sub2.indiv.title": "1、JDChat个人用户服务",
	"terms.s4.sub2.indiv.p1": "JDChat个人用户服务，是指个人用户通过手机号码和验证码注册JDChat账号，或使用JDChat允许的第三方账号授权登录JDChat，不以企业组织最终用户身份使用的服务，亦称“JDChat个人域服务”。JDChat个人用户服务包括但不限于如下内容：",
	"terms.s4.sub2.indiv.li1": "个人信息展示，包括昵称、头像、手机号、性别、生日、地区、个人实人认证、我的家庭等，您可以通过[JDChat移动端-我的-设置-我的信息]自行修改和完善您的个人信息。",
	"terms.s4.sub2.indiv.li2": "即时通讯，含创建单聊、群聊，并在群组中使用相关群插件等服务。",
	"terms.s4.sub2.indiv.li3": "添加好友，您可以通过搜索手机号或者JDChat号、扫描JDChat二维码等形式添加好友，或授权JDChat读取您的手机通讯录为您推荐JDChat好友。",
	"terms.s4.sub2.ent.title": "2、JDChat企业组织服务",
	"terms.s4.sub2.ent.p1": "（1）JDChat企业组织服务，是指管理员代表JDChat企业组织用户创建JDChat企业组织架构，邀请组织成员下载并注册成为JDChat最终用户，由管理员配置、开通、管理和使用JDChat办公应用，实现企业组织的组织数字化和业务数字化，亦称“JDChat办公域服务”。JDChat企业组织服务包括但不限于如下内容：",
	"terms.s4.sub2.ent.li1": "企业通讯录，由管理员导入企业组织通讯录并邀请最终用户加入。",
	"terms.s4.sub2.ent.li2": "认证组织同名保护服务，即对JDChat企业组织用户展示认证标识、对认证同名组织予以保护的服务。",
	"terms.s4.sub2.ent.li3": "管理权限：管理员有权管理企业组织成员及权限。",
	"terms.s4.sub2.ent.li4": "企业自建应用：企业组织用户需承担相关责任。",
	"terms.s4.sub2.ent.li5": "管理员行为代表企业组织行为。",
	"terms.s4.sub3.title": "（三）委托数据处理服务",
	"terms.s4.sub3.entData.title": "1、企业控制数据委托处理",
	"terms.s4.sub3.entData.p1": "就企业组织用户及管理员开通和使用相关JDChat服务，JDChat会根据管理员的行为和指令，处理最终用户使用JDChat相关功能/应用过程中提交或产生的企业组织控制数据，包括文本、图像、视频、音频、照片等。",
	"terms.s4.sub3.userData.title": "2、最终用户个人信息委托处理",
	"terms.s4.sub3.userData.p1": "企业组织用户及其管理员理解并同意：委托处理。最终用户使用企业组织服务过程中发布、传输的最终用户个人信息，企业组织用户有权作为个人信息处理者处理最终用户的个人信息，并委托JDChat基于合理必要性，处理最终用户的个人信息。",
	"terms.s5.title": "四、JDChat软件许可使用",
	"terms.s5.p1": "授权使用。JDChat依据本协议，许可您一项不可转让的、非排他性的许可使用JDChat服务。您可以制作本软件的一个副本，仅用作备份。",
	"terms.s5.p2": "授权使用限制。除非另有说明，您就本协议项下JDChat服务仅限于非商业用途使用。您承诺不对本服务任何部分或本服务之使用或获得，进行复制、拷贝、出售、转售或用于包括但不限于广告及任何其它商业目的。",
	"terms.s5.p3": "权利保留。本条及本协议其他条款未明示授权的其他一切权利仍由JDChat公司保留，您在行使这些权利时须另外取得JDChat公司的书面许可。",
	"terms.s6.title": "五、软件更新",
	"terms.s6.p1": "为了改善用户体验、完善服务内容及形式，JDChat将不断努力开发新的服务，并为用户不时提供软件更新，包括可能采取软件替换、修改、功能强化、版本升级等形式。",
	"terms.s6.p2": "为了保证本软件及服务的安全性和功能的一致性，JDChat有权不经向用户特别通知而对软件进行更新，或者对软件的部分功能效果进行改变或限制，请用户及时下载最新版本。",
	"terms.s6.p3": "用户理解并同意，JDChat可能通过公告、更新日志等方式，通过JDChat官网、JDChat客户端页面向用户通知软件更新情况，JDChat无需向用户作出特别通知。",
	"terms.s7.title": "六、账号注册与管理",
	"terms.s7.intro": "您可以通过以下方式登录和使用JDChat服务：",
	"terms.s7.li1": "使用个人手机号或电子邮箱注册JDChat账号",
	"terms.s7.li2": "使用JDChat认可的其他第三方应用账号授权登录JDChat",
	"terms.s7.li3": "使用企业组织配置的企业账号",
	"terms.s7.p1": "（具体账号权责条款保留原意）",
	"terms.s8.title": "七、JDChat服务使用规范",
	"terms.s8.intro": "您承诺不会利用本服务进行任何违法或不当的活动，包括但不限于下列行为：",
	"terms.s8.sub1.title": "（一）内容发布规范",
	"terms.s8.sub1.desc": "禁止发布含有违反法律法规、危害国家安全、侮辱诽谤、宣扬恐怖主义等内容。",
	"terms.s8.sub2.title": "（二）软件使用规范",
	"terms.s8.sub2.desc": "禁止制造病毒、破坏网络服务、修改软件指令数据、使用外挂等行为。",
	"terms.s8.sub3.title": "（三）行为规范",
	"terms.s8.sub3.desc": "禁止发布虚假信息、欺骗他人、侵犯他人权益等行为。",
	"terms.s10.title": "十、服务中止或终止",
	"terms.s10.p1": "鉴于互联网服务的特殊性，JDChat公司有权对服务内容进行变更，也可能会中止或终止全部或部分的服务（包括免费服务或收费服务）。",
	"terms.s10.p2": "如违约，JDChat有权中止或终止服务。",
	"terms.s11.title": "十一、隐私政策",
	"terms.s11.p1": "具体隐私条款见《JDChat隐私政策》",
	"terms.s12.title": "十三、有限责任",
	"terms.s12.p1": "服务按“现状”提供，不保证一定满足用户要求。",
	"terms.s12.p2": "不对不可抗力造成的服务中断负责。",
	"terms.s12.p3": "不对间接损失负责。",
	"terms.s12.p4": "用户自行承担分享信息的风险。",
	"terms.s13.title": "十六、争议解决及其他",
	"terms.s13.p1": "本协议适用中华人民共和国法律。争议提交协议签订地管辖法院解决。",
	"terms.s14.title": "十四、违约责任及赔偿",
	"terms.s14.p1": "用户需赔偿因违反协议给JDChat及其关联公司造成的损失。",
	"terms.s15.title": "十五、有效通知",
	"terms.s15.p1": "通知可通过邮件、公告、短信等方式送达。",
	"terms.s16.title": "十六、争议解决及其他",
	"terms.s16.p1": "适用中华人民共和国法律法规。协议签订地法院管辖。",
	"terms.s17.title": "十七、联系方式",
	"terms.s17.p1": "您可以通过【JDChat客户端-关于我们-客服与帮助】进行在线咨询、或者通过我们的电话、邮箱联系进行咨询和服务。",
	"terms.s17.p2": "您也可以选择通过邮件的方式联系我们，联系信息及地址如下：",
	"terms.s17.email": "电子邮箱",
	"terms.s17.address": "联系地址",
	"terms.s17.addressValue": "上海市浦东新区张江高科技园区科苑路88号汇智科创园3号楼17楼1702-1室",
	"terms.s9.title": "九、服务费用",
	"terms.s9.p1": "本服务的任何免费试用、免费功能和服务，不应视为JDChat公司放弃后续收费的权利。",
	"terms.s9.p2": "JDChat有权根据实际情况提前7天单方调整费用标准及收费方式。",
	"terms.s9.p3": "您应当自行支付使用本服务可能产生的上网费、流量费以及其他第三方收取的通讯费、信息费等。",
	"privacy.title": "JDChat基本功能隐私政策",
	"privacy.effectiveDate": "生效日期：2025年12月24日",
	"privacy.intro.title": "引言",
	"privacy.intro.p1": "本《JDChat基本功能隐私政策》（以下简称\"本政策\"）用于说明在您使用\"JDChat\"基础功能过程中，我们对个人信息的收集、使用及保护方式。",
	"privacy.intro.p2": "在开始使用本产品前，请您仔细阅读并充分理解本政策的全部内容。其中以加粗方式标注的条款，涉及对您个人信息权益具有重要影响的内容，请您重点关注。",
	"privacy.intro.p3": "\"JDChat\"是一款集即时通信与协作能力于一体的工具型应用。为向您提供文字、图片、语音、视频等基础通信服务，以及笔记记录、在线协同文档等功能，在符合法律法规及必要性原则的前提下，我们可能会收集以下信息：",
	"privacy.intro.item1": "注册或登录过程中提供的手机号码或电子邮箱地址；",
	"privacy.intro.item2": "账号相关信息（如通信联系人列表、昵称、头像等）；",
	"privacy.intro.item3": "设备基础信息（如设备型号、操作系统版本、唯一设备标识符等）；",
	"privacy.intro.item4": "日志信息（如登录时间、操作记录、崩溃日志等）；",
	"privacy.intro.item5": "网络连接信息（如IP地址、网络类型等）。",
	"privacy.intro.p4": "本政策仅适用于\"JDChat\"基础功能中涉及的个人信息收集和使用行为。如您使用拓展功能，我们将在获得您的明确授权后，另行说明并征求您的同意。",
	"privacy.toc.title": "政策目录",
	"privacy.toc.s1": "适用范围",
	"privacy.toc.s2": "信息收集与使用",
	"privacy.toc.s3": "信息的共享、转移与披露",
	"privacy.toc.s4": "您的权利",
	"privacy.toc.s5": "信息的存储",
	"privacy.toc.s6": "未成年人保护",
	"privacy.toc.s7": "联系我们",
	"privacy.s1.title": "一、适用范围",
	"privacy.s1.p1": "本政策适用于\"JDChat\"软件及后续更新形态所提供的即时通信与在线办公基本功能。",
	"privacy.s1.p2": "本政策不适用于由关联公司或第三方服务商提供的产品与服务，其隐私政策请参考其单独说明。",
	"privacy.s2.title": "二、信息收集及使用",
	"privacy.s2.intro": "我们将仅在您授权同意后收集必要信息以提供基础功能。如您拒绝，将无法正常使用服务。",
	"privacy.s2.sub1.title": "1. 账号注册与管理",
	"privacy.s2.sub1.desc": "您需提供手机号码注册账户，可自愿完善昵称、头像、性别等信息，其中部分信息（如昵称、头像）将对外展示。",
	"privacy.s2.sub2.title": "2. 授权登录",
	"privacy.s2.sub2.desc": "您可选择授权将JDChat账号用于登录第三方应用，或通过第三方登录JDChat，我们将依授权范围处理相关信息。",
	"privacy.s2.sub3.title": "3. 即时通信功能",
	"privacy.s2.sub3.p1": "在使用聊天功能时，我们将记录必要的消息数据（文字、图片、语音等）和操作日志，以实现信息传输及同步。发送相册照片、文件需授权存储权限，发送语音、拍摄内容需麦克风和摄像头权限。",
	"privacy.s2.sub3.p2": "共享位置时，我们需获取您的地理位置权限，同时可能调用加速度计、陀螺仪等传感器以提高定位准确性。",
	"privacy.s2.sub3.p3": "接收消息时，我们将通过注册手机号或设备向您推送相关内容。",
	"privacy.s2.sub3.p4": "在您使用聊天功能时，若主动执行粘贴操作（如粘贴文字、链接、邀请码、图片等），我们可能会访问您的剪切板内容，以协助您快速输入信息。相关内容仅在本地处理，不会被上传或保存。",
	"privacy.s2.sub4.title": "4. 为您提供安全保障",
	"privacy.s2.sub4.intro": "我们致力于为您提供安全的通信环境。为预防和治理电信网络诈骗，维护网络正常稳定运行，防范网络违法犯罪活动，有效应对网络安全事件，保护您或其他用户或公众的人身财产安全免遭侵害，更准确地识别违反法律法规或JDChat相关协议、规则的情况，我们会收集您的以下信息：",
	"privacy.s2.sub4.item1": "设备标识符（如Android ID、设备序列号（SN）、MAC地址）；",
	"privacy.s2.sub4.item2": "可变标识符（如IDFA、IDFV、Android OAID、HarmonyOS OAID、GAID）；",
	"privacy.s2.sub4.item3": "应用信息（如应用崩溃信息、通知开关状态、本App运行中进程和其他本App相关信息）；",
	"privacy.s2.sub4.item4": "设备参数及系统信息（如设备类型、设备型号、操作系统及硬件相关信息）；",
	"privacy.s2.sub4.item5": "设备网络环境信息（如IP地址、蓝牙信息、设备传感器信息及其他网络相关信息）；",
	"privacy.s2.sub4.item6": "运营商信息；",
	"privacy.s2.sub4.item7": "广播组件通讯信息等。",
	"privacy.s2.sub4.p1": "我们可能使用上述信息及JDChat账号信息、服务日志信息，以及我们的关联方、合作方获得您授权或依法可以提供给我们的信息，用于判断账户安全、交易安全、进行身份验证、识别违法违规情况、检测及防范安全事件，并依法采取必要的记录、分析、处置措施。",
	"privacy.s2.sub5.title": "5. 基于系统权限的附加服务",
	"privacy.s2.sub5.p1": "我们在以下附加服务中可能会申请开启系统权限以收集和使用您的个人信息，如果您不同意开启相关权限，不会影响您使用JDChat的基本服务，但您将无法使用这些附加服务。",
	"privacy.s2.sub5.p2": "您可随时开启或关闭这些权限，您开启任一权限即代表您授权我们可以收集和使用相关个人信息来为您提供对应服务。您关闭任一权限代表您取消了授权，我们将不再基于该权限继续收集和使用相关个人信息。关闭权限不会影响权限关闭前基于您的授权所进行的信息收集及使用。",
	"privacy.s2.sub6.title": "6. Cookie和同类技术的服务",
	"privacy.s2.sub6.p1": "Cookie和其他类似技术是互联网中普遍使用的技术。当您使用我们的服务时，我们可能会使用相关技术向您的设备发送一个或多个Cookie或匿名标识符，以收集、标识和存储您访问、使用本产品时的信息。",
	"privacy.s2.sub6.p2": "我们承诺，不会将Cookie用于本隐私政策所述目的之外的任何其他用途。我们使用Cookie主要为了保障产品与服务的安全、高效运转，使我们确认您账户与交易的安全状态，排查崩溃、延迟的相关异常情况。",
	"privacy.s2.sub7.title": "7. 收集和使用个人信息的其他规则",
	"privacy.s2.sub7.p1": "若您提供的信息中含有他人的个人信息，在向JDChat提供这些个人信息之前，您需确保您已经取得合法的授权。",
	"privacy.s2.sub7.p2": "若我们将信息用于本政策未载明的其他用途，均会事先获得您的同意。",
	"privacy.s3.title": "三、信息的共享、转移与披露",
	"privacy.s3.sub1.title": "1. 信息转移",
	"privacy.s3.sub1.desc": "如果我们因合并、分立、解散、被宣告破产等原因需要转移个人信息的，我们会向您告知接收方的名称和联系方式。接收方将继续履行本政策及其他法定义务。若接收方变更原先的处理目的和方式，应重新取得您的同意。",
	"privacy.s3.sub2.title": "2. 公开披露",
	"privacy.s3.sub2.intro": "我们仅会在以下情况下公开披露您的个人信息：",
	"privacy.s3.sub2.item1": "在您主动选择或以其他方式获得您单独同意的情况下；",
	"privacy.s3.sub2.item2": "如我们确定您违反法律法规或JDChat相关协议及规则，或为保护他人人身财产安全免遭侵害时，我们可能披露您的个人信息。",
	"privacy.s3.sub3.title": "3. 停止运营",
	"privacy.s3.sub3.desc": "若我们停止运营产品或服务，将及时停止收集您的个人信息，并通过逐一通知或公告的形式告知您。我们将对所持有的相关个人信息进行删除或匿名化处理。",
	"privacy.s3.sub4.title": "4. 无需征得授权的情形",
	"privacy.s3.sub4.intro": "根据法律法规，下列情形中无需征得您的授权同意即可共享、转移或披露您的个人信息：",
	"privacy.s3.sub4.item1": "为订立、履行合同或人力资源管理所必需；",
	"privacy.s3.sub4.item2": "为履行法定职责或义务所必需；",
	"privacy.s3.sub4.item3": "为应对突发公共卫生事件或紧急情况下保护自然人生命健康、财产安全所必需；",
	"privacy.s3.sub4.item4": "为公共利益实施新闻报道、舆论监督等，且在合理范围内处理；",
	"privacy.s3.sub4.item5": "已依法公开或您自行公开的个人信息；",
	"privacy.s3.sub4.item6": "法律、行政法规规定的其他情形。",
	"privacy.s4.title": "四、您的权利",
	"privacy.s4.p1": "您可以删除您的部分信息或申请注销账户以删除您的全部信息。",
	"privacy.s4.p2": "在以下情形中，您可以与客服联系，向我们提出删除个人信息的请求：",
	"privacy.s4.item1": "我们处理个人信息的行为违反法律法规；",
	"privacy.s4.item2": "我们收集、使用您的个人信息，却未征得您的明确同意；",
	"privacy.s4.item3": "我们处理个人信息的行为严重违反了与您的约定；",
	"privacy.s4.item4": "我们的处理目的已实现、无法实现或者为实现处理目的不再必要；",
	"privacy.s4.item5": "我们停止提供产品或服务，或者保存期限已届满。",
	"privacy.s4.p3": "若我们决定响应您的删除请求，我们还将尽可能通知从我们处获得您个人信息的主体，并要求其及时删除。",
	"privacy.s4.p4": "当您删除您的个人信息后，因法律法规或安全技术限制，我们可能无法立即从备份系统中删除该信息。我们将安全地存储您的个人信息并限制其进一步处理。",
	"privacy.s4.p5": "您可以通过JDChat App中\"设置与隐私-安全中心-数据权利\"或通过我们的联系方式向JDChat提出数据权利请求。",
	"privacy.s4.p6": "您也可以通过以下方式申请注销您的账户：",
	"privacy.s4.cancelItem": "JDChat个人用户：登录JDChat客户端，依次点击\"我的-账号设置-注销JDChat账号\"进行注销。",
	"privacy.s4.p7": "请注意，目前仅支持在手机端发起注销。在您主动注销账户之后，我们将停止为您提供产品或服务，并根据法律要求删除或匿名化处理您的个人信息。",
	"privacy.s4.p8": "响应您的请求方面，您可通过客服或联系个人信息保护专职部门发起投诉，我们将在10个工作日内做出答复。",
	"privacy.s4.p9": "为保障您的账户和个人信息安全，我们会在处理请求前验证您的身份。",
	"privacy.s4.p10": "对合理请求原则上不收取费用。但若请求多次重复、超出合理限度，我们可能酌情收费。",
	"privacy.s5.title": "五、信息的存储",
	"privacy.s5.p1": "我们只会在达成本政策所述目的所需的期限内保留您的个人信息，除非法律有强制的留存要求。如《电子商务法》要求商品和服务信息、交易信息保存时间自交易完成之日起不少于三年。",
	"privacy.s5.p2": "我们判断个人信息的存储期限主要依据以下标准：",
	"privacy.s5.item1": "完成与您相关的交易目的、维护相应交易及业务记录，以应对您可能的查询或投诉；",
	"privacy.s5.item2": "保证我们为您提供服务的安全和质量；",
	"privacy.s5.item3": "您是否同意更长的留存期限；",
	"privacy.s5.item4": "根据诉讼时效的相关需要；",
	"privacy.s5.item5": "是否存在关于保留期限的其他特别约定或法律法规规定。",
	"privacy.s5.p3": "在超出保留期限后，我们会根据适用法律的要求删除或匿名化处理您的个人信息。",
	"privacy.s5.p4": "如您担心自己的个人信息，尤其是账户或密码发生泄露，请立即联络我们的客服。",
	"privacy.s6.title": "六、未成年人保护",
	"privacy.s6.p1": "在数字化办公、沟通与协同活动中，我们推定您具有相应的民事行为能力。如您为未成年人，我们要求您请您的父母或其他监护人仔细阅读本政策，并在征得其同意的前提下使用我们的服务或向我们提供信息。",
	"privacy.s6.p2": "如果您是儿童的父母或其他监护人，请您关注儿童是否是在取得您的授权同意之后使用我们的服务。如您对儿童的个人信息有疑问，请与我们的个人信息保护专职部门联系。",
	"privacy.s7.title": "七、联系我们",
	"privacy.s7.p1": "您可以通过以下方式与我们联系，我们将在10个工作日内回复您的请求：",
	"privacy.s7.p2": "如您对本政策内容有任何疑问、意见或建议，可通过\"我的-联系我们-在线服务\"与我们联系。",
	"privacy.s7.p3": "您也可以发送邮件至feiyun88888888{'@'}gmail.com与我们的个人信息保护专职部门联系。",
	"privacy.s7.address": "办公地址",
	"privacy.s7.addressValue": "上海市浦东新区张江高科技园区科苑路88号汇智科创园3号楼17楼1702-1室",
	"privacy.s7.p4": "如果您对我们的回复不满意，特别是认为我们的个人信息处理行为损害了您的合法权益，您可以向被告住所地有管辖权的法院提起诉讼。",
	"privacy.s7.company": "公司",
	"privacy.s7.companyValue": "JDchat数字技术有限公司",
	"privacy.s7.email": "邮箱",
	"privacy.s7.emailValue": "feiyun88888888{'@'}gmail.com",
	"privacy.s7.effectiveDate": "生效日期：2025年12月24日",
	"privacy.s7.end": "（完）",
	"privacy.sdk.title": "附录：第三方SDK收集使用信息说明",
	"privacy.sdk.p1": "为实现与保障应用部分功能的实现与稳定运行，我们可能会接入由第三方提供的软件开发工具包（SDK）。这些SDK可能会收集您的设备信息或其他必要信息。我们会对合作方获取信息的行为进行严格监督，以保障您的信息安全。",
	"privacy.sdk.p2": "当您使用JDChat的音视频通信功能（语音通话、视频会议、直播）时，您需要授权我们获取设备的摄像头或麦克风权限。若拒绝授权，将无法使用该功能。",
	"privacy.sdk.p3": "此外，在进行音视频会议时，我们可能获取您的磁场传感器、距离传感器、加速度传感器、光线传感器信息，以实现自动息屏、屏幕旋转等功能。",
	"privacy.sdk.p4": "在即时通信过程中，若您和对方不在同一时区，JDChat会使用您的设备时区信息向对方展示当地时间。您可通过\"设置与隐私-对外信息权限-当前所在时区\"关闭该功能。",
	"privacy.sdk.tableIntro": "以下是我们接入的主要第三方SDK及其收集使用信息的说明：",
	"privacy.sdk.th.name": "SDK名称",
	"privacy.sdk.th.developer": "开发者",
	"privacy.sdk.th.function": "功能",
	"privacy.sdk.th.info": "收集个人信息类型",
	"privacy.sdk.th.privacy": "隐私政策链接",
	"privacy.sdk.note": "说明：我们仅在必要时调用相关SDK服务，接入前已进行合规性审核，并与第三方签署数据保护协议。这些第三方SDK的收集行为受其各自隐私政策约束，请您仔细阅读其隐私说明以获得更全面的了解。",
	"privacy.sdk.row1.name": "多线程库、性能加速库（com.huawei.hms.stats）",
	"privacy.sdk.row1.developer": "华为软件技术有限公司",
	"privacy.sdk.row1.function": "不涉及",
	"privacy.sdk.row1.info": "不涉及",
	"privacy.sdk.row2.name": "音视频通话TRTC SDK（Android）",
	"privacy.sdk.row2.developer": "深圳市腾讯计算机系统有限公司",
	"privacy.sdk.row2.function": "提供实时音视频通信服务",
	"privacy.sdk.row2.info": "Wi-Fi状态、系统属性、设备型号、操作系统、IP地址、相机、录音、传感器信息、CPU信息",
	"privacy.sdk.row3.name": "腾讯云即时通信IM SDK",
	"privacy.sdk.row3.developer": "腾讯云计算（北京）有限责任公司",
	"privacy.sdk.row3.function": "为用户提供单聊、群聊、关系链、资料管理功能服务",
	"privacy.sdk.row3.info": "用户标识信息、网络类型、系统语言类型",
	"privacy.sdk.row4.name": "全功能版视立方SDK（Android）",
	"privacy.sdk.row4.developer": "深圳市腾讯计算机系统有限公司",
	"privacy.sdk.row4.function": "提供音视频直播服务",
	"privacy.sdk.row4.info": "Wi-Fi状态、系统属性、设备型号、操作系统、IP地址、相机、录音、传感器信息、CPU信息",
	"privacy.sdk.row5.name": "直播SDK（Android）",
	"privacy.sdk.row5.developer": "深圳市腾讯计算机系统有限公司",
	"privacy.sdk.row5.function": "提供音视频直播服务",
	"privacy.sdk.row5.info": "Wi-Fi状态、系统属性、设备型号、操作系统、IP地址、相机、录音、传感器信息、CPU信息",
	"privacy.sdk.row6.name": "直播SDK（基础版）（Android）",
	"privacy.sdk.row6.developer": "深圳市腾讯计算机系统有限公司",
	"privacy.sdk.row6.function": "提供音视频直播服务",
	"privacy.sdk.row6.info": "Wi-Fi状态、系统属性、设备型号、操作系统、IP地址、相机、录音、传感器信息、CPU信息",
	"privacy.sdk.row7.name": "短视频UGSV SDK Android版本",
	"privacy.sdk.row7.developer": "深圳市腾讯计算机系统有限公司",
	"privacy.sdk.row7.function": "录制视频时候采集视频画面",
	"privacy.sdk.row7.info": "Android设备相机画面",
	"privacy.sdk.row8.name": "荣耀推送SDK（com.hihonor.push）",
	"privacy.sdk.row8.developer": "深圳荣耀软件技术有限公司",
	"privacy.sdk.row8.function": "用于JDChat App向荣耀手机用户推送消息",
	"privacy.sdk.row8.info": "设备信息（OAID）、本应用运行中的进程",
	"privacy.sdk.row9.name": "华为推送",
	"privacy.sdk.row9.developer": "华为终端有限公司",
	"privacy.sdk.row9.function": "用于JDChat App向华为手机用户推送消息",
	"privacy.sdk.row9.info": "设备信息（OAID）、本应用运行中的进程",
	"privacy.sdk.row10.name": "vivo推送SDK（com.vivo.push）",
	"privacy.sdk.row10.developer": "维沃移动通信有限公司",
	"privacy.sdk.row10.function": "用于JDChat App向VIVO手机用户推送消息",
	"privacy.sdk.row10.info": "设备信息（OAID）、本应用运行中的进程",
	"privacy.sdk.row11.name": "OPPO PUSH客户端SDK（com.heytap.msp）",
	"privacy.sdk.row11.developer": "广东欢太科技有限公司",
	"privacy.sdk.row11.function": "用于JDChat App向OPPO手机用户推送消息",
	"privacy.sdk.row11.info": "设备信息（OAID）、本应用运行中的进程",
	"privacy.sdk.row12.name": "小米推送SDK（com.xiaomi.push）",
	"privacy.sdk.row12.developer": "北京小米移动软件有限公司",
	"privacy.sdk.row12.function": "用于JDChat App向小米手机用户推送消息",
	"privacy.sdk.row12.info": "设备信息（OAID）、本应用运行中的进程",
	"privacy.sdk.row13.name": "魅族推送SDK（com.meizu.cloud.pushsdk）",
	"privacy.sdk.row13.developer": "珠海星纪魅族信息技术有限公司",
	"privacy.sdk.row13.function": "用于JDChat App向魅族手机用户推送消息",
	"privacy.sdk.row13.info": "设备信息（OAID）、本应用运行中的进程",
	"privacy.sdk.row14.name": "消息推送SDK Android（个推）（com.getui）",
	"privacy.sdk.row14.developer": "每日互动股份有限公司",
	"privacy.sdk.row14.function": "用于JDChat App推送消息",
	"privacy.sdk.row14.info": "设备平台、设备厂商、设备品牌、设备型号及系统版本、OAID、AndroidID、WIFI连接信息、运营商信息、DHCP、SSID、BSSID、IMEI、MAC、GAID、Serial Number、IMSI、ICCID、IP地址、基站信息",
	"privacy.sdk.row15.name": "Dynamic Ability SDK（com.huawei.hms.feature）",
	"privacy.sdk.row15.developer": "华为软件技术有限公司",
	"privacy.sdk.row15.function": "不涉及",
	"privacy.sdk.row15.info": "不涉及",
	"privacy.sdk.row16.name": "华为统一扫码SDK（Android版）（com.huawei.hms.scankit）",
	"privacy.sdk.row16.developer": "华为软件技术有限公司",
	"privacy.sdk.row16.function": "为应用提供扫码能力",
	"privacy.sdk.row16.info": "包括用户主动提交的数据（图片、文本）、应用信息、设备信息",
	"privacy.lastUpdated": "更新日期：2025年12月24日"
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
	"func.multi.desc": "iOS / Android / Windows / macOS",
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
	"privacy.title": "JDChat Basic Features Privacy Policy",
	"privacy.lastUpdated": "Last Updated: 2025-12-24",
	"privacy.effectiveDate": "Effective Date: 2025-12-24",
	"privacy.intro.title": "Introduction",
	"privacy.intro.p1": "This JDChat Basic Features Privacy Policy (hereinafter, \"this Policy\") explains how we collect, use, and protect personal information when you use the basic features of JDChat.",
	"privacy.intro.p2": "Before using this product, please read and fully understand all contents of this Policy carefully. Clauses highlighted in bold involve important impacts on your personal information rights and interests—please pay special attention.",
	"privacy.intro.p3": "\"JDChat\" is a utility application integrating instant messaging and collaboration. In order to provide you with basic communication services such as text, images, voice, and video, as well as features like note-taking and online collaborative documents, we may collect the following information, in compliance with applicable laws and regulations and the principle of necessity:",
	"privacy.intro.item1": "The mobile phone number or email address you provide during registration or login;",
	"privacy.intro.item2": "Account-related information (such as contact list, nickname, avatar, etc.);",
	"privacy.intro.item3": "Basic device information (such as device model, OS version, unique device identifiers, etc.);",
	"privacy.intro.item4": "Log information (such as login time, operation records, crash logs, etc.);",
	"privacy.intro.item5": "Network connection information (such as IP address, network type, etc.).",
	"privacy.intro.p4": "This Policy applies only to the collection and use of personal information involved in the basic features of \"JDChat.\" If you use extended features, we will provide separate explanations and obtain your consent after receiving your explicit authorization.",
	"privacy.toc.title": "Table of Contents",
	"privacy.toc.s1": "Scope of Application",
	"privacy.toc.s2": "Information Collection and Use",
	"privacy.toc.s3": "Sharing, Transfer, and Disclosure of Information",
	"privacy.toc.s4": "Your Rights",
	"privacy.toc.s5": "Information Storage",
	"privacy.toc.s6": "Protection of Minors",
	"privacy.toc.s7": "Contact Us",
	"privacy.s1.title": "I. Scope of Application",
	"privacy.s1.p1": "This Policy applies to the basic instant messaging and online office features provided by the \"JDChat\" software and its subsequent updated forms.",
	"privacy.s1.p2": "This Policy does not apply to products and services provided by affiliates or third-party service providers. Please refer to their separate privacy policies.",
	"privacy.s2.title": "II. Information Collection and Use",
	"privacy.s2.intro": "We will collect necessary information only after you authorize and consent, in order to provide basic features. If you refuse, you will not be able to use the services normally.",
	"privacy.s2.sub1.title": "1. Account Registration and Management",
	"privacy.s2.sub1.desc": "You need to provide a mobile phone number to register an account. You may optionally complete information such as nickname, avatar, gender, etc. Some information (such as nickname and avatar) will be displayed to others.",
	"privacy.s2.sub2.title": "2. Authorized Login",
	"privacy.s2.sub2.desc": "You may choose to authorize your JDChat account to log in to third-party applications, or use a third-party account to log in to JDChat. We will process relevant information within the scope of your authorization.",
	"privacy.s2.sub3.title": "3. Instant Messaging Features",
	"privacy.s2.sub3.p1": "When you use chat features, we will record necessary message data (text, images, voice, etc.) and operation logs to enable message transmission and synchronization. Sending photos from your album or files requires storage permission; sending voice messages or capturing content requires microphone and camera permissions.",
	"privacy.s2.sub3.p2": "When you share your location, we need to obtain your location permission, and may also access sensors such as the accelerometer and gyroscope to improve location accuracy.",
	"privacy.s2.sub3.p3": "When receiving messages, we may push relevant content to you via your registered phone number or device.",
	"privacy.s2.sub3.p4": "When using chat features, if you actively perform a paste action (such as pasting text, links, invitation codes, images, etc.), we may access your clipboard content to help you input information quickly. Such content is processed only locally and will not be uploaded or stored.",
	"privacy.s2.sub4.title": "4. Providing Security Protection",
	"privacy.s2.sub4.intro": "We are committed to providing a secure communication environment. To prevent and combat telecom and network fraud, maintain stable network operation, prevent illegal online activities, effectively respond to cybersecurity incidents, and protect the personal and property safety of you, other users, or the public from harm—and to more accurately identify violations of laws, regulations, or JDChat-related agreements and rules—we will collect the following information:",
	"privacy.s2.sub4.item1": "Device identifiers (such as Android ID, device serial number (SN), MAC address);",
	"privacy.s2.sub4.item2": "Resettable identifiers (such as IDFA, IDFV, Android OAID, HarmonyOS OAID, GAID);",
	"privacy.s2.sub4.item3": "App information (such as app crash information, notification toggle status, running processes of this App and other App-related information);",
	"privacy.s2.sub4.item4": "Device parameters and system information (such as device type, model, OS and hardware-related information);",
	"privacy.s2.sub4.item5": "Device network environment information (such as IP address, Bluetooth information, device sensor information and other network-related information);",
	"privacy.s2.sub4.item6": "Carrier information;",
	"privacy.s2.sub4.item7": "Broadcast component communication information, etc.",
	"privacy.s2.sub4.p1": "We may use the above information together with JDChat account information, service log information, and information that our affiliates or partners have obtained from you with authorization or may legally provide to us, to evaluate account and transaction security, perform identity verification, identify illegal or non-compliant behavior, detect and prevent security incidents, and take necessary measures such as recording, analysis, and handling in accordance with the law.",
	"privacy.s2.sub5.title": "5. Additional Services Based on System Permissions",
	"privacy.s2.sub5.p1": "For the following additional services, we may request system permissions to collect and use your personal information. If you do not agree to enable the relevant permissions, it will not affect your use of JDChat's basic services, but you will be unable to use these additional services.",
	"privacy.s2.sub5.p2": "You can enable or disable these permissions at any time. Enabling any permission means you authorize us to collect and use the relevant personal information to provide the corresponding service. Disabling any permission means you withdraw the authorization; we will no longer collect or use the relevant personal information based on that permission and will no longer provide the service supported by that permission. Disabling permissions does not affect information collection and use already carried out based on your authorization before the permission was disabled.",
	"privacy.s2.sub6.title": "6. Cookies and Similar Technologies",
	"privacy.s2.sub6.p1": "Cookies and other similar technologies are commonly used on the internet. When you use our services, we may use such technologies to send one or more Cookies or anonymous identifiers (collectively, \"Cookies\") to your device to collect, identify, and store information about your access to and use of this product.",
	"privacy.s2.sub6.p2": "We promise not to use Cookies for any purposes other than those described in this Policy. We mainly use Cookies to ensure secure and efficient operation of products and services, confirm the security status of your account and transactions, troubleshoot crashes and latency issues, and help you avoid repeatedly filling out forms and entering search content.",
	"privacy.s2.sub7.title": "7. Other Rules for Collecting and Using Personal Information",
	"privacy.s2.sub7.p1": "If the information you provide contains others' personal information, you must ensure that you have obtained lawful authorization before providing such personal information to JDChat.",
	"privacy.s2.sub7.p2": "If we use information for purposes not stated in this Policy, or use information collected for a specific purpose for other purposes, we will obtain your consent in advance.",
	"privacy.s3.title": "III. Sharing, Transfer, and Disclosure of Information",
	"privacy.s3.sub1.title": "1. Transfer of Information",
	"privacy.s3.sub1.desc": "If we need to transfer personal information due to merger, split, dissolution, bankruptcy, etc., we will inform you of the recipient's name and contact details. The recipient will continue to perform obligations under this Policy and other legal obligations. If the recipient changes the original processing purposes or methods, your consent will be obtained again.",
	"privacy.s3.sub2.title": "2. Public Disclosure",
	"privacy.s3.sub2.intro": "We will only publicly disclose your personal information under the following circumstances:",
	"privacy.s3.sub2.item1": "With your separate consent obtained proactively or by other means;",
	"privacy.s3.sub2.item2": "If we determine you have violated laws, regulations, or JDChat-related agreements and rules, or to protect others' personal and property safety from harm, we may disclose your personal information, including the relevant violations and measures taken.",
	"privacy.s3.sub3.title": "3. Cessation of Operations",
	"privacy.s3.sub3.desc": "If we cease operating the product or services, we will promptly stop collecting your personal information and inform you via individual notices or public announcements. We will delete or anonymize the personal information we hold.",
	"privacy.s3.sub4.title": "4. Circumstances Where Consent Is Not Required",
	"privacy.s3.sub4.intro": "According to laws and regulations, we may share, transfer, or disclose your personal information without obtaining your consent in the following circumstances:",
	"privacy.s3.sub4.item1": "Necessary for entering into or performing a contract, or for human resources management;",
	"privacy.s3.sub4.item2": "Necessary for performing statutory duties or obligations;",
	"privacy.s3.sub4.item3": "Necessary to respond to public health emergencies or to protect life, health, and property safety in emergencies;",
	"privacy.s3.sub4.item4": "For news reporting and public opinion supervision in the public interest, within a reasonable scope;",
	"privacy.s3.sub4.item5": "Personal information that has been legally disclosed or disclosed by you;",
	"privacy.s3.sub4.item6": "Other circumstances stipulated by laws and administrative regulations.",
	"privacy.s4.title": "IV. Your Rights",
	"privacy.s4.p1": "You may delete some of your information or request account cancellation to delete all your information.",
	"privacy.s4.p2": "You may contact customer service to request deletion of personal information under the following circumstances:",
	"privacy.s4.item1": "Our processing violates laws or regulations;",
	"privacy.s4.item2": "We collected or used your personal information without your explicit consent;",
	"privacy.s4.item3": "Our processing seriously violates our agreement with you;",
	"privacy.s4.item4": "The processing purpose has been achieved, cannot be achieved, or is no longer necessary;",
	"privacy.s4.item5": "We stop providing products/services, or the retention period has expired.",
	"privacy.s4.p3": "If we decide to respond to your deletion request, we will also notify, as much as possible, entities that obtained your personal information from us and require them to delete it in a timely manner (unless otherwise required by laws or regulations, or those entities have independently obtained your authorization).",
	"privacy.s4.p4": "After you delete personal information, due to legal or technical security constraints, we may not be able to immediately delete the information from backup systems. We will securely store it and restrict further processing until the backups can be cleared or anonymized.",
	"privacy.s4.p5": "You may submit data rights requests via \"Settings & Privacy – Security Center – Data Rights\" in the JDChat App or via our contact information. We will respond according to legal requirements.",
	"privacy.s4.p6": "You may also apply to cancel your account as follows:",
	"privacy.s4.cancelItem": "JDChat individual users: Log in to the JDChat client and tap \"Me – Account Settings – Cancel JDChat Account\".",
	"privacy.s4.p7": "Please note: currently, cancellation can only be initiated on mobile devices. After you cancel your account, we will stop providing products or services and delete or anonymize your personal information in accordance with legal requirements.",
	"privacy.s4.p8": "For requests, you may file a complaint through customer service or contact the dedicated personal information protection department. We will respond within 10 business days.",
	"privacy.s4.p9": "To protect your account and personal information security, we will verify your identity before processing requests (such as account verification, written application, or other methods).",
	"privacy.s4.p10": "Reasonable requests are generally free of charge. However, if requests are repeated frequently beyond a reasonable scope, we may charge a fee at our discretion. We may refuse requests that are unrelated to you, repeated without reasonable grounds, require extensive technical measures, affect others' lawful rights and interests, or are impractical.",
	"privacy.s5.title": "V. Information Storage",
	"privacy.s5.p1": "We will retain your personal information only for the period necessary to achieve the purposes described in this Policy, unless mandatory retention is required by law. For example, the E-commerce Law requires that information about goods and services and transaction information be kept for at least three years from the date the transaction is completed.",
	"privacy.s5.p2": "We mainly determine the retention period based on:",
	"privacy.s5.item1": "Completing transaction purposes related to you and maintaining corresponding records for possible inquiries or complaints;",
	"privacy.s5.item2": "Ensuring the security and quality of the services we provide;",
	"privacy.s5.item3": "Whether you consent to a longer retention period;",
	"privacy.s5.item4": "Needs related to statutes of limitations;",
	"privacy.s5.item5": "Other special agreements or legal requirements regarding retention periods.",
	"privacy.s5.p3": "After the retention period expires, we will delete or anonymize your personal information as required by applicable laws.",
	"privacy.s5.p4": "If you are concerned about your personal information, especially if your account or password may have been compromised, please contact customer service immediately so we can provide guidance and take measures accordingly. You may also use features such as \"Account Settings,\" \"Freeze/Unfreeze,\" \"Privacy Switches,\" etc., in \"Me – Settings & Privacy – Security Center,\" or submit fraud complaints.",
	"privacy.s6.title": "VI. Protection of Minors",
	"privacy.s6.p1": "In digital office, communication, and collaboration activities, we presume you have the corresponding civil capacity. If you are a minor, we require you to have your parents or other guardians carefully read this Policy and use our services or provide information only with their consent.",
	"privacy.s6.p2": "If you are a parent or guardian of a child, please pay attention to whether the child uses our services after obtaining your authorization. If you have questions about children's personal information, please contact our dedicated personal information protection department.",
	"privacy.s7.title": "VII. Contact Us",
	"privacy.s7.p1": "You may contact us through the following methods. We will respond within 10 business days:",
	"privacy.s7.p2": "If you have any questions, opinions, or suggestions about this Policy, you may contact us via \"Me – Contact Us – Online Service.\"",
	"privacy.s7.p3": "You may also email feiyun88888888{'@'}gmail.com to contact our dedicated personal information protection department.",
	"privacy.s7.address": "Office address",
	"privacy.s7.addressValue": "Room 1702-1, 17F, Building 3, Huizhi Sci-Tech Innovation Park, No. 88 Keyuan Road, Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai.",
	"privacy.s7.p4": "If you are not satisfied with our response—especially if you believe our processing of personal information infringes your legitimate rights and interests—you may file a lawsuit with the competent court at the defendant's domicile.",
	"privacy.s7.company": "Company",
	"privacy.s7.companyValue": "JDchat Digital Technology Co., Ltd.",
	"privacy.s7.email": "Email",
	"privacy.s7.emailValue": "feiyun88888888{'@'}gmail.com",
	"privacy.s7.effectiveDate": "Effective Date: December 24, 2025",
	"privacy.s7.end": "(End)",
	"privacy.sdk.title": "Appendix: Description of Personal Information Collected and Used by Third-Party SDKs",
	"privacy.sdk.p1": "To implement and ensure stable operation of some application functions, we may integrate software development kits (SDKs) provided by third parties. These SDKs may collect your device information or other necessary information. We strictly supervise partners' information collection behavior to protect your information security.",
	"privacy.sdk.p2": "When you use JDChat's audio/video communication features (voice calls, video conferences, live streaming), you need to authorize access to your device's camera or microphone permissions. If you refuse, you will not be able to use these features. We will also record your call status information (not call content) to enable information transmission and interaction.",
	"privacy.sdk.p3": "In addition, during audio/video meetings, we may obtain information from sensors such as the magnetic field sensor, proximity sensor, accelerometer, and ambient light sensor to support features like automatic screen-off and screen rotation.",
	"privacy.sdk.p4": "During instant messaging, if you and the other party are in different time zones, JDChat will use your device time zone information to display your local time to the other party to help them understand your local time, arrange communication reasonably, and avoid disturbance. You can disable this feature via \"Settings & Privacy – External Information Permissions – Current Time Zone.\"",
	"privacy.sdk.tableIntro": "Below is a description of major third-party SDKs we integrate and the information they collect/use:",
	"privacy.sdk.th.name": "SDK Name",
	"privacy.sdk.th.developer": "Developer",
	"privacy.sdk.th.function": "Function",
	"privacy.sdk.th.info": "Personal Information Collected",
	"privacy.sdk.th.privacy": "Privacy Policy",
	"privacy.sdk.note": "Note: We only invoke relevant SDK services when necessary. Before integration, we conduct compliance reviews and sign data protection agreements with third parties. The data collection behavior of these third-party SDKs is governed by their own privacy policies. Please read their privacy statements carefully for more comprehensive details.",
	"privacy.sdk.row1.name": "Multi-thread Library, Performance Acceleration Library (com.huawei.hms.stats)",
	"privacy.sdk.row1.developer": "Huawei Software Technologies Co., Ltd.",
	"privacy.sdk.row1.function": "Not involved",
	"privacy.sdk.row1.info": "Not involved",
	"privacy.sdk.row2.name": "TRTC Audio/Video Call SDK (Android)",
	"privacy.sdk.row2.developer": "Tencent Computer Systems Company Limited (Shenzhen)",
	"privacy.sdk.row2.function": "Real-time audio/video communication (voice/video calls)",
	"privacy.sdk.row2.info": "Wi-Fi status, system properties, device model, OS, IP address, camera, recording, sensor info, CPU info",
	"privacy.sdk.row3.name": "Tencent Cloud IM SDK",
	"privacy.sdk.row3.developer": "Tencent Cloud Computing (Beijing) Co., Ltd.",
	"privacy.sdk.row3.function": "1-to-1 chat, group chat, relationship chain, profile management",
	"privacy.sdk.row3.info": "User identifier info, network type, system language type",
	"privacy.sdk.row4.name": "VCube Full-Feature SDK (Android)",
	"privacy.sdk.row4.developer": "Tencent Computer Systems Company Limited (Shenzhen)",
	"privacy.sdk.row4.function": "Live streaming services",
	"privacy.sdk.row4.info": "Wi-Fi status, system properties, device model, OS, IP address, camera, recording, sensor info, CPU info",
	"privacy.sdk.row5.name": "Live Streaming SDK (Android)",
	"privacy.sdk.row5.developer": "Tencent Computer Systems Company Limited (Shenzhen)",
	"privacy.sdk.row5.function": "Live streaming services",
	"privacy.sdk.row5.info": "Wi-Fi status, system properties, device model, OS, IP address, camera, recording, sensor info, CPU info",
	"privacy.sdk.row6.name": "Live Streaming SDK (Basic Version) (Android)",
	"privacy.sdk.row6.developer": "Tencent Computer Systems Company Limited (Shenzhen)",
	"privacy.sdk.row6.function": "Live streaming services",
	"privacy.sdk.row6.info": "Wi-Fi status, system properties, device model, OS, IP address, camera, recording, sensor info, CPU info",
	"privacy.sdk.row7.name": "UGSV Short Video SDK (Android)",
	"privacy.sdk.row7.developer": "Tencent Computer Systems Company Limited (Shenzhen)",
	"privacy.sdk.row7.function": "Captures video frames during recording",
	"privacy.sdk.row7.info": "Android device camera frames",
	"privacy.sdk.row8.name": "HONOR Push SDK (com.hihonor.push)",
	"privacy.sdk.row8.developer": "Shenzhen HONOR Device Co., Ltd.",
	"privacy.sdk.row8.function": "Push notifications to HONOR devices",
	"privacy.sdk.row8.info": "Device info (OAID), this app's running processes",
	"privacy.sdk.row9.name": "Huawei Push",
	"privacy.sdk.row9.developer": "Huawei Device Co., Ltd.",
	"privacy.sdk.row9.function": "Push notifications to Huawei devices",
	"privacy.sdk.row9.info": "Device info (OAID), this app's running processes",
	"privacy.sdk.row10.name": "vivo Push SDK (com.vivo.push)",
	"privacy.sdk.row10.developer": "vivo Mobile Communication Co., Ltd.",
	"privacy.sdk.row10.function": "Push notifications to vivo devices",
	"privacy.sdk.row10.info": "Device info (OAID), this app's running processes",
	"privacy.sdk.row11.name": "OPPO PUSH Client SDK (com.heytap.msp)",
	"privacy.sdk.row11.developer": "Guangdong HeyTap Technology Co., Ltd.",
	"privacy.sdk.row11.function": "Push notifications to OPPO devices",
	"privacy.sdk.row11.info": "Device info (OAID), this app's running processes",
	"privacy.sdk.row12.name": "Xiaomi Push SDK (com.xiaomi.push)",
	"privacy.sdk.row12.developer": "Xiaomi Mobile Software Co., Ltd. (Beijing)",
	"privacy.sdk.row12.function": "Push notifications to Xiaomi devices",
	"privacy.sdk.row12.info": "Device info (OAID), this app's running processes",
	"privacy.sdk.row13.name": "Meizu Push SDK (com.meizu.cloud.pushsdk)",
	"privacy.sdk.row13.developer": "Zhuhai Xingji Meizu Information Technology Co., Ltd.",
	"privacy.sdk.row13.function": "Push notifications to Meizu devices",
	"privacy.sdk.row13.info": "Device info (OAID), this app's running processes",
	"privacy.sdk.row14.name": "Getui Push SDK (Android) (com.getui)",
	"privacy.sdk.row14.developer": "Daily Interactive Co., Ltd.",
	"privacy.sdk.row14.function": "Push notifications",
	"privacy.sdk.row14.info": "Device platform, manufacturer, brand, model, OS version, OAID, AndroidID, Wi-Fi connection info, carrier info, DHCP, SSID, BSSID, IMEI, MAC, GAID, Serial Number, IMSI, ICCID, IP address, base station info",
	"privacy.sdk.row15.name": "Dynamic Ability SDK (com.huawei.hms.feature)",
	"privacy.sdk.row15.developer": "Huawei Software Technologies Co., Ltd.",
	"privacy.sdk.row15.function": "Not involved",
	"privacy.sdk.row15.info": "Not involved",
	"privacy.sdk.row16.name": "Huawei Unified Scan SDK (Android) (com.huawei.hms.scankit)",
	"privacy.sdk.row16.developer": "Huawei Software Technologies Co., Ltd.",
	"privacy.sdk.row16.function": "Provides scanning capability",
	"privacy.sdk.row16.info": "User-submitted data (images, text), app info, device info",
	"terms.title": "JDChat User Service Agreement",
	"terms.lastUpdated": "Last Updated: December 24, 2025",
	"terms.effectiveDate": "Effective Date: December 24, 2025",
	"terms.intro": "Welcome to JDChat and its related services!",
	"terms.s1.title": "I. Definitions",
	"terms.s1.individualUser.title": "JDChat Individual User",
	"terms.s1.individualUser.p1": "Refers to an individual who registers a JDChat account using a mobile phone number or email address with a verification code, or logs in to JDChat via a third-party account authorized by JDChat, and who has not joined any JDChat enterprise organization, nor uses JDChat services as an end user of an enterprise organization.",
	"terms.s1.orgUser.title": "JDChat Enterprise Organization User",
	"terms.s1.orgUser.p1": "Refers to a user for whom an administrator, duly authorized by an enterprise organization, creates a JDChat enterprise organizational structure, invites organization members to download and register JDChat accounts or configures enterprise accounts for end users. After the enterprise organization is established, the authorized administrator configures, activates, manages, and uses JDChat workplace applications for online mobile office work, communication, and collaboration.",
	"terms.s1.orgUser.p2": "JDChat enterprise organization users include both JDChat verified enterprise organizations and non-verified enterprise organizations, including but not limited to legal entities, government agencies, other organizations, partnerships, or sole proprietorships.",
	"terms.s1.admin.title": "JDChat Enterprise Organization Administrator",
	"terms.s1.admin.p1": "Refers to an organization member who is authorized or designated by a JDChat enterprise organization user and has management permissions over enterprise users. Such permissions include but are not limited to managing the enterprise contact directory and members, assigning sub-administrators, activating and managing third-party applications on behalf of the enterprise organization, confirming and executing relevant JDChat online agreements, and dissolving the enterprise organization. There may be one or more administrators, collectively referred to as “Administrators”.",
	"terms.s1.data.title": "Enterprise Organization Controlled Data",
	"terms.s1.data.p1": "Refers to information and data related to enterprise users that is submitted or generated during the use of JDChat services by enterprise organization users and end users, including information submitted by enterprise users or administrators, information requested from end users, information assigned to end users by enterprise users, and information submitted by end users to meet work requirements or enterprise management needs.",
	"terms.s1.processor.title": "Personal Information Processor",
	"terms.s1.processor.p1": "Refers to an organization or individual that determines the purpose and method of processing personal information during the use of JDChat services for online mobile office work, communication, and collaboration.",
	"terms.s1.processor.p2": "Specifically:",
	"terms.s1.processor.li1": "In JDChat individual user scenarios, JDChat acts as the personal information processor.",
	"terms.s1.processor.li2": "In enterprise organization scenarios, the enterprise organization user acts as the personal information processor, while JDChat processes enterprise-controlled data (including end users’ personal information) as an entrusted processor based on the administrator’s instructions and configurations.",
	"terms.s2.title": "II. Contracting Parties",
	"terms.s2.p1": "This Agreement is entered into in Chaoyang District, Beijing, between JDChat individual users (without enterprise organization identity), JDChat enterprise organization users (including administrators and end users), and the JDChat service provider, regarding the download, installation, use, and duplication of the software, as well as the use of JDChat related services.",
	"terms.s2.p2": "JDChat individual users, JDChat enterprise organization users, administrators, and end users are collectively referred to as “Users” or “You”.",
	"terms.s2.p3": "The JDChat service provider refers to JDChat Digital Technology Co., Ltd., collectively referred to as “JDChat” or “We”.",
	"terms.s3.title": "III. Agreement Content and Effect",
	"terms.s3.p1": "This Agreement includes this main text and all policies, rules, statements, notices, and prompts that have been published or may be published in the future (collectively, the “Rules”), including the JDChat Privacy Policy. These Rules form an integral part of this Agreement and have the same legal effect.",
	"terms.s3.p2": "JDChat reserves the right to modify this Agreement and related Rules as necessary. Revised versions will be notified through in-app notices (such as red dots). Continued use of JDChat services constitutes acceptance of the revised Agreement.",
	"terms.s4.title": "IV. Services",
	"terms.s4.sub1.title": "(A) JDChat Services",
	"terms.s4.sub1.p1": "JDChat services include the JDChat client, JDChat official website documentation, JDChat audio and video services, and certain JDChat features provided through other forms.",
	"terms.s4.sub1.p2": "JDChat provides multiple versions for iOS, Android, and other operating systems. Users may choose versions compatible with their devices. One account may be used across multiple versions, and this Agreement applies to all versions.",
	"terms.s4.sub1.p3": "You agree that JDChat may send information (commercial or non-commercial) via messages, SMS, push notifications, badges, etc. Notification preferences may be managed in JDChat App → Me → Settings → Notifications.",
	"terms.s4.sub2.title": "(B) JDChat Service Types",
	"terms.s4.sub2.intro": "JDChat provides services for both individual users and enterprise organization users.",
	"terms.s4.sub2.indiv.title": "1. JDChat Individual User Services",
	"terms.s4.sub2.indiv.p1": "JDChat individual services refer to services used by individuals who register via phone number/email and verification code or log in via authorized third-party accounts, without using JDChat as an enterprise end user (“JDChat Personal Domain Services”), including but not limited to:",
	"terms.s4.sub2.indiv.li1": "Personal profile display and editing (nickname, avatar, phone number, gender, birthday, region, identity verification, family information)",
	"terms.s4.sub2.indiv.li2": "Instant messaging (one-to-one chats, group chats, group plugins)",
	"terms.s4.sub2.indiv.li3": "Adding contacts via phone number, JDChat ID, QR code scanning, or contact book authorization",
	"terms.s4.sub2.ent.title": "2. JDChat Enterprise Organization Services",
	"terms.s4.sub2.ent.p1": "JDChat enterprise services (“JDChat Workplace Domain Services”) include but are not limited to:",
	"terms.s4.sub2.ent.li1": "Enterprise contact directory management",
	"terms.s4.sub2.ent.li2": "Verified organization name protection services",
	"terms.s4.sub2.ent.li3": "Administrator management of enterprise members based on HR, operations, and information security needs",
	"terms.s4.sub2.ent.li4": "Enterprise-built applications and third-party application integrations (responsibility borne by respective providers)",
	"terms.s4.sub2.ent.li5": "Administrator actions represent enterprise organization actions",
	"terms.s4.sub3.title": "(C) Entrusted Data Processing Services",
	"terms.s4.sub3.entData.title": "Enterprise-Controlled Data Processing",
	"terms.s4.sub3.entData.p1": "JDChat processes enterprise-controlled data (text, images, videos, audio, etc.) strictly in accordance with administrator instructions.",
	"terms.s4.sub3.userData.title": "End User Personal Information Processing",
	"terms.s4.sub3.userData.p1": "Enterprise organization users act as personal information processors and entrust JDChat to process end users’ personal information only for enterprise digital office purposes, within the enterprise organization’s lifecycle, and subject to administrator authorization.",
	"terms.s5.title": "V. Software License",
	"terms.s5.p1": "JDChat grants a non-transferable, non-exclusive license to use the software. One backup copy may be made.",
	"terms.s5.p2": "Unless otherwise stated, JDChat services are for non-commercial use only.",
	"terms.s5.p3": "All rights not expressly granted are reserved by JDChat.",
	"terms.s6.title": "VI. Software Updates",
	"terms.s6.p1": "JDChat may update, modify, enhance, or restrict software features without prior notice to ensure security and service quality.",
	"terms.s7.title": "VII. Account Registration and Management",
	"terms.s7.intro": "Users may log in using:",
	"terms.s7.li1": "Phone number or email registration (“Standard Account”)",
	"terms.s7.li2": "Authorized third-party accounts",
	"terms.s7.li3": "Enterprise-configured enterprise accounts",
	"terms.s7.p1": "Account ownership belongs to JDChat. Users only obtain usage rights.",
	"terms.s8.title": "VIII. JDChat Service Usage Rules",
	"terms.s8.p1": "Users must not use JDChat to publish illegal, harmful, misleading, or infringing content, nor engage in activities that disrupt system security, violate laws, or infringe others’ rights.",
	"terms.s9.title": "IX. JDChat Enforcement Measures",
	"terms.s9.p1": "JDChat may supervise usage and take actions including content removal, service suspension or termination, and reporting to authorities.",
	"terms.s10.title": "X. Service Fees",
	"terms.s10.p1": "JDChat may charge fees for certain services with at least 7 days’ prior notice.",
	"terms.s11.title": "XI. Service Suspension or Termination",
	"terms.s11.p1": "JDChat may suspend or terminate services due to maintenance, violations, or legal requirements.",
	"terms.s12.title": "XII. Privacy Policy",
	"terms.s12.p1": "JDChat adopts reasonable technical and organizational measures to protect user information. Details are provided in the JDChat Privacy Policy.",
	"terms.s13.title": "XIII. Limitation of Liability",
	"terms.s13.p1": "JDChat provides services “as is” and does not guarantee uninterrupted or error-free operation.",
	"terms.s14.title": "XIV. Breach and Compensation",
	"terms.s14.p1": "Users shall compensate JDChat for losses arising from violations of this Agreement.",
	"terms.s15.title": "XV. Notices",
	"terms.s15.p1": "Notices may be delivered via email, in-app announcements, SMS, or other reasonable means.",
	"terms.s16.title": "XVI. Governing Law and Dispute Resolution",
	"terms.s16.p1": "This Agreement is governed by the laws of the People’s Republic of China. Disputes shall be submitted to the court with jurisdiction over the place of signing.",
	"terms.s17.title": "XVII. Contact Information",
	"terms.s17.p1": "You may contact us via:",
	"terms.s17.p2": "JDChat App → About Us → Customer Support",
	"terms.s17.email": "Email",
	"terms.s17.address": "Address",
	"terms.s17.addressValue": "Room 1702-1, 17/F, Building 3, Huizhi Innovation Park, No. 88 Keyuan Road, Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai, China"
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
	"func.multi.desc": "iOS / Android / Windows / macOS",
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
	"terms.title": "Thỏa thuận Dịch vụ Người dùng JDChat",
	"terms.lastUpdated": "Ngày cập nhật: 24/12/2025",
	"terms.effectiveDate": "Ngày có hiệu lực: 24/12/2025",
	"terms.intro": "Chào mừng bạn sử dụng JDChat và các dịch vụ liên quan!",
	"terms.s1.title": "I. Định nghĩa",
	"terms.s1.individualUser.title": "1. Người dùng cá nhân JDChat",
	"terms.s1.individualUser.p1": "Là cá nhân đăng ký tài khoản JDChat thông qua số điện thoại hoặc địa chỉ email và mã xác thực, hoặc đăng nhập JDChat bằng tài khoản bên thứ ba được JDChat cho phép, chưa tham gia bất kỳ tổ chức doanh nghiệp JDChat nào và không sử dụng dịch vụ JDChat với tư cách người dùng cuối của tổ chức doanh nghiệp.",
	"terms.s1.orgUser.title": "2. Người dùng tổ chức doanh nghiệp JDChat",
	"terms.s1.orgUser.p1": "Là người dùng được tổ chức doanh nghiệp ủy quyền cho quản trị viên tạo cơ cấu tổ chức doanh nghiệp trên JDChat, mời thành viên tổ chức tải xuống, đăng ký tài khoản JDChat hoặc cấu hình tài khoản doanh nghiệp cho người dùng cuối.",
	"terms.s1.orgUser.p2": "Sau khi tổ chức doanh nghiệp được tạo, quản trị viên được ủy quyền sẽ cấu hình, kích hoạt, quản lý và sử dụng các ứng dụng văn phòng JDChat để phục vụ làm việc di động trực tuyến, giao tiếp và cộng tác.",
	"terms.s1.orgUser.p3": "Người dùng tổ chức doanh nghiệp JDChat bao gồm tổ chức đã xác thực và chưa xác thực, bao gồm nhưng không giới hạn ở: pháp nhân, cơ quan nhà nước, tổ chức khác, doanh nghiệp hợp danh hoặc hộ kinh doanh cá thể hợp pháp.",
	"terms.s1.admin.title": "3. Quản trị viên tổ chức doanh nghiệp JDChat",
	"terms.s1.admin.p1": "Là thành viên trong tổ chức được người dùng tổ chức doanh nghiệp JDChat ủy quyền hoặc chỉ định, có quyền quản lý người dùng tổ chức doanh nghiệp JDChat. Quyền quản lý bao gồm nhưng không giới hạn ở: Quản lý danh bạ và thành viên tổ chức; Thiết lập quản trị viên phụ; Mở và quản lý ứng dụng bên thứ ba thay mặt tổ chức; Xác nhận và ký kết các thỏa thuận trực tuyến JDChat; Giải thể tổ chức doanh nghiệp. Quản trị viên có thể là một hoặc nhiều người, gọi chung là “Quản trị viên”.",
	"terms.s1.data.title": "4. Dữ liệu do tổ chức doanh nghiệp kiểm soát",
	"terms.s1.data.p1": "Là các thông tin và dữ liệu liên quan đến người dùng doanh nghiệp được nộp, tạo ra hoặc xử lý trong quá trình sử dụng JDChat, bao gồm: Thông tin do doanh nghiệp và quản trị viên cung cấp hoặc yêu cầu người dùng cuối cung cấp; Thông tin được doanh nghiệp phân bổ cho người dùng cuối; Thông tin do người dùng cuối cung cấp nhằm phục vụ công việc và quản lý doanh nghiệp.",
	"terms.s1.processor.title": "5. Chủ thể xử lý thông tin cá nhân",
	"terms.s1.processor.p1": "Là tổ chức hoặc cá nhân có quyền quyết định mục đích và phương thức xử lý thông tin cá nhân trong quá trình sử dụng JDChat.",
	"terms.s1.processor.p2": "Cụ thể:",
	"terms.s1.processor.li1": "Trong kịch bản người dùng cá nhân, JDChat là chủ thể xử lý thông tin cá nhân.",
	"terms.s1.processor.li2": "Trong kịch bản tổ chức doanh nghiệp, tổ chức doanh nghiệp JDChat là chủ thể xử lý thông tin cá nhân, còn JDChat là bên được ủy thác, thực hiện xử lý dữ liệu theo chỉ thị và cấu hình của quản trị viên.",
	"terms.s2.title": "II. Chủ thể ký kết",
	"terms.s2.p1": "Thỏa thuận này được ký kết giữa: Người dùng cá nhân JDChat không có tư cách tổ chức doanh nghiệp; Người dùng tổ chức doanh nghiệp JDChat (bao gồm quản trị viên và người dùng cuối); Và nhà cung cấp dịch vụ JDChat, tại Quận Triều Dương, Bắc Kinh.",
	"terms.s2.p2": "Người dùng cá nhân, người dùng tổ chức doanh nghiệp, quản trị viên và người dùng cuối được gọi chung là “Người dùng” hoặc “Bạn”.",
	"terms.s2.p3": "Nhà cung cấp dịch vụ JDChat là Công ty Công nghệ Số JDChat, gọi chung là “JDChat” hoặc “Chúng tôi”.",
	"terms.s3.title": "III. Nội dung và hiệu lực của thỏa thuận",
	"terms.s3.p1": "Nội dung thỏa thuận bao gồm: Nội dung chính của thỏa thuận này; Các chính sách, quy tắc, tuyên bố, thông báo, nhắc nhở đã hoặc sẽ được ban hành; Bao gồm 《Chính sách quyền riêng tư JDChat》. Các quy tắc trên là bộ phận không thể tách rời và có giá trị pháp lý tương đương với thỏa thuận này.",
	"terms.s3.p2": "JDChat có quyền sửa đổi hoặc cập nhật thỏa thuận và quy tắc khi cần thiết. Nội dung sửa đổi sẽ được thông báo trong ứng dụng JDChat. Nếu bạn không đồng ý, bạn phải ngừng sử dụng dịch vụ. Nếu tiếp tục sử dụng, được xem là đã chấp nhận nội dung sửa đổi.",
	"terms.s4.title": "IV. Nội dung dịch vụ",
	"terms.s4.sub1.title": "(I) Nội dung dịch vụ JDChat",
	"terms.s4.sub1.p1": "Dịch vụ JDChat bao gồm: Ứng dụng JDChat; Tài liệu trên website JDChat; Dịch vụ âm thanh – video JDChat; Các chức năng liên quan khác.",
	"terms.s4.sub1.p2": "JDChat hỗ trợ nhiều phiên bản như iOS, Android và các hệ điều hành khác. Người dùng có thể dùng cùng một tài khoản cho nhiều phiên bản. Thỏa thuận này áp dụng cho tất cả các phiên bản.",
	"terms.s4.sub1.p3": "Bạn đồng ý JDChat có thể gửi thông tin cho bạn qua: Thông báo trong ứng dụng; SMS; Push; Dấu chấm đỏ. Bạn có thể quản lý thông báo tại: JDChat App → Tôi → Cài đặt → Thông báo tin nhắn mới.",
	"terms.s4.sub2.title": "(II) Hình thức dịch vụ JDChat",
	"terms.s4.sub2.intro": "JDChat cung cấp dịch vụ cho cả người dùng cá nhân và tổ chức doanh nghiệp.",
	"terms.s4.sub2.indiv.title": "1. Dịch vụ người dùng cá nhân JDChat",
	"terms.s4.sub2.indiv.p1": "Áp dụng cho người dùng không sử dụng với tư cách thành viên tổ chức doanh nghiệp, bao gồm:",
	"terms.s4.sub2.indiv.li1": "Hiển thị và chỉnh sửa thông tin cá nhân (nickname, avatar, số điện thoại, giới tính, sinh nhật, khu vực, xác thực danh tính, gia đình…)",
	"terms.s4.sub2.indiv.li2": "Nhắn tin cá nhân và nhóm",
	"terms.s4.sub2.indiv.li3": "Thêm bạn bè bằng số điện thoại, JDChat ID, QR code hoặc đồng bộ danh bạ",
	"terms.s4.sub2.ent.title": "2. Dịch vụ tổ chức doanh nghiệp JDChat",
	"terms.s4.sub2.ent.p1": "Bao gồm nhưng không giới hạn:",
	"terms.s4.sub2.ent.li1": "Danh bạ doanh nghiệp",
	"terms.s4.sub2.ent.li2": "Bảo vệ tên tổ chức đã xác thực",
	"terms.s4.sub2.ent.li3": "Quản trị thành viên và quyền hạn",
	"terms.s4.sub2.ent.li4": "Quản lý bảo mật thông tin",
	"terms.s4.sub2.ent.li5": "Trách nhiệm quản lý thuộc về tổ chức doanh nghiệp và quản trị viên",
	"terms.s4.sub3.title": "(III) Dịch vụ xử lý dữ liệu được ủy thác",
	"terms.s4.sub3.entData.title": "Dữ liệu do tổ chức kiểm soát",
	"terms.s4.sub3.entData.p1": "JDChat xử lý dữ liệu do tổ chức kiểm soát theo chỉ thị của quản trị viên.",
	"terms.s4.sub3.userData.title": "Thông tin cá nhân của người dùng cuối",
	"terms.s4.sub3.userData.p1": "Do tổ chức doanh nghiệp xử lý với tư cách chủ thể. JDChat chỉ là bên được ủy thác xử lý. JDChat không chia sẻ dữ liệu nếu không có sự đồng ý của quản trị viên.",
	"terms.s5.title": "V. Giấy phép sử dụng phần mềm",
	"terms.s5.p1": "JDChat cấp cho bạn giấy phép không độc quyền, không chuyển nhượng. Chỉ được sử dụng cho mục đích phi thương mại, trừ khi có thỏa thuận khác.",
	"terms.s5.p2": "Mọi quyền không được nêu rõ đều thuộc về JDChat.",
	"terms.s5.p3": "",
	"terms.s6.title": "VI. Cập nhật phần mềm",
	"terms.s6.p1": "JDChat có quyền: Cập nhật, nâng cấp, chỉnh sửa tính năng; Thay đổi hoặc giới hạn một số chức năng; Không cần thông báo riêng lẻ cho người dùng.",
	"terms.s7.title": "VII. Đăng ký và quản lý tài khoản",
	"terms.s7.intro": "Hình thức đăng nhập:",
	"terms.s7.li1": "Số điện thoại hoặc email",
	"terms.s7.li2": "Tài khoản bên thứ ba",
	"terms.s7.li3": "Tài khoản doanh nghiệp",
	"terms.s7.p1": "(Phần chi tiết về quyền – nghĩa vụ tài khoản cá nhân, quản trị viên, tài khoản doanh nghiệp và hủy tài khoản được giữ nguyên theo bản gốc.)",
	"terms.s8.title": "VIII. Quy chuẩn sử dụng dịch vụ JDChat",
	"terms.s8.p1": "Người dùng không được: Đăng nội dung vi phạm pháp luật; Phát tán thông tin sai lệch, khiêu dâm, bạo lực, cực đoan; Xâm phạm quyền riêng tư, quyền sở hữu trí tuệ; Can thiệp trái phép vào hệ thống JDChat; Lạm dụng dịch vụ cho mục đích phi pháp.",
	"terms.s9.title": "IX. Xử lý vi phạm",
	"terms.s9.p1": "JDChat có quyền: Xóa nội dung; Hạn chế hoặc chấm dứt dịch vụ; Thu hồi tài khoản; Báo cáo cơ quan chức năng.",
	"terms.s10.title": "X. Phí dịch vụ",
	"terms.s10.p1": "Dịch vụ miễn phí không đồng nghĩa từ bỏ quyền thu phí. JDChat có quyền điều chỉnh phí và thông báo trước 7 ngày. Người dùng tự chịu chi phí internet, SMS, bên thứ ba.",
	"terms.s11.title": "XI. Tạm ngừng hoặc chấm dứt dịch vụ",
	"terms.s11.p1": "JDChat có thể: Tạm ngừng dịch vụ để bảo trì; Chấm dứt dịch vụ nếu người dùng vi phạm nghiêm trọng.",
	"terms.s12.title": "XII. Chính sách quyền riêng tư",
	"terms.s12.p1": "Chi tiết xem tại: 《Chính sách quyền riêng tư JDChat》",
	"terms.s13.title": "XIII. Giới hạn trách nhiệm",
	"terms.s13.p1": "JDChat không đảm bảo dịch vụ không gián đoạn; Không chịu trách nhiệm với thiệt hại gián tiếp; Không chịu trách nhiệm với rủi ro phát sinh từ môi trường internet.",
	"terms.s14.title": "XIV. Trách nhiệm vi phạm và bồi thường",
	"terms.s14.p1": "Người dùng phải bồi thường toàn bộ thiệt hại cho JDChat nếu hành vi của mình gây tổn thất cho JDChat hoặc bên thứ ba.",
	"terms.s15.title": "XV. Thông báo hợp lệ",
	"terms.s15.p1": "JDChat có thể gửi thông báo qua: Email; SMS; Thông báo trong ứng dụng; Thông báo công khai.",
	"terms.s16.title": "XVI. Giải quyết tranh chấp",
	"terms.s16.p1": "Áp dụng pháp luật Cộng hòa Nhân dân Trung Hoa. Tòa án nơi ký kết thỏa thuận có thẩm quyền giải quyết.",
	"terms.s17.title": "XVII. Thông tin liên hệ",
	"terms.s17.p1": "Trong app: JDChat → Giới thiệu → CSKH & Trợ giúp",
	"terms.s17.p2": "",
	"terms.s17.email": "Email",
	"terms.s17.address": "Địa chỉ",
	"terms.s17.addressValue": "Phòng 1702-1, Tầng 17, Tòa nhà 3, Công viên Khoa học & Sáng tạo Huizhi, Số 88 đường Keyuan, Khu công nghệ cao Trương Giang, Quận Phố Đông, Thượng Hải",
	"privacy.title": "Chính sách quyền riêng tư cho các tính năng cơ bản của JDChat",
	"privacy.lastUpdated": "Ngày cập nhật: 24/12/2025",
	"privacy.effectiveDate": "Ngày có hiệu lực: 24/12/2025",
	"privacy.intro.title": "Lời mở đầu",
	"privacy.intro.p1": "\"Chính sách quyền riêng tư cho các tính năng cơ bản của JDChat\" này (sau đây gọi là \"Chính sách\") nhằm giải thích cách thức chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn trong quá trình bạn sử dụng các tính năng cơ bản của \"JDChat\".",
	"privacy.intro.p2": "Trước khi bắt đầu sử dụng sản phẩm này, vui lòng đọc kỹ và hiểu đầy đủ toàn bộ nội dung Chính sách. Các điều khoản được in đậm là những nội dung có ảnh hưởng quan trọng đến quyền và lợi ích thông tin cá nhân của bạn, vui lòng đặc biệt lưu ý.",
	"privacy.intro.p3": "\"JDChat\" là một ứng dụng công cụ tích hợp nhắn tin tức thời và khả năng cộng tác. Để cung cấp các dịch vụ giao tiếp cơ bản như văn bản, hình ảnh, âm thanh, video, cũng như các chức năng như ghi chú, tài liệu cộng tác trực tuyến, trong phạm vi phù hợp pháp luật và theo nguyên tắc cần thiết, chúng tôi có thể thu thập các thông tin sau:",
	"privacy.intro.item1": "Số điện thoại hoặc địa chỉ email cung cấp trong quá trình đăng ký/đăng nhập;",
	"privacy.intro.item2": "Thông tin liên quan đến tài khoản (ví dụ: danh bạ liên hệ, biệt danh, ảnh đại diện…);",
	"privacy.intro.item3": "Thông tin cơ bản của thiết bị (ví dụ: model thiết bị, phiên bản hệ điều hành, mã định danh thiết bị duy nhất…);",
	"privacy.intro.item4": "Thông tin nhật ký (ví dụ: thời gian đăng nhập, lịch sử thao tác, nhật ký crash…);",
	"privacy.intro.item5": "Thông tin kết nối mạng (ví dụ: địa chỉ IP, loại mạng…).",
	"privacy.intro.p4": "Chính sách này chỉ áp dụng cho hành vi thu thập và sử dụng thông tin cá nhân trong các tính năng cơ bản của \"JDChat\". Nếu bạn sử dụng tính năng mở rộng, chúng tôi sẽ giải thích riêng và xin sự đồng ý rõ ràng của bạn sau khi được bạn ủy quyền.",
	"privacy.toc.title": "Mục lục chính sách",
	"privacy.toc.s1": "Phạm vi áp dụng",
	"privacy.toc.s2": "Thu thập và sử dụng thông tin",
	"privacy.toc.s3": "Chia sẻ, chuyển giao và công khai thông tin",
	"privacy.toc.s4": "Quyền của bạn",
	"privacy.toc.s5": "Lưu trữ thông tin",
	"privacy.toc.s6": "Bảo vệ trẻ vị thành niên",
	"privacy.toc.s7": "Liên hệ với chúng tôi",
	"privacy.s1.title": "I. Phạm vi áp dụng",
	"privacy.s1.p1": "Chính sách này áp dụng cho các tính năng cơ bản về nhắn tin tức thời và văn phòng trực tuyến do \"JDChat\" (bao gồm các bản cập nhật sau này) cung cấp.",
	"privacy.s1.p2": "Chính sách này không áp dụng đối với sản phẩm/dịch vụ do công ty liên kết hoặc bên cung cấp dịch vụ thứ ba cung cấp; vui lòng tham khảo chính sách riêng của họ.",
	"privacy.s2.title": "II. Thu thập và sử dụng thông tin",
	"privacy.s2.intro": "Chúng tôi chỉ thu thập thông tin cần thiết để cung cấp tính năng cơ bản sau khi bạn đồng ý/ủy quyền. Nếu bạn từ chối, bạn có thể không sử dụng được dịch vụ bình thường.",
	"privacy.s2.sub1.title": "1. Đăng ký và quản lý tài khoản",
	"privacy.s2.sub1.desc": "Bạn cần cung cấp số điện thoại để đăng ký tài khoản; bạn có thể tự nguyện bổ sung biệt danh, ảnh đại diện, giới tính… Trong đó một số thông tin (như biệt danh, ảnh đại diện) sẽ được hiển thị công khai.",
	"privacy.s2.sub2.title": "2. Đăng nhập được ủy quyền",
	"privacy.s2.sub2.desc": "Bạn có thể chọn ủy quyền dùng tài khoản JDChat để đăng nhập vào ứng dụng bên thứ ba, hoặc đăng nhập JDChat thông qua bên thứ ba. Chúng tôi sẽ xử lý thông tin trong phạm vi được ủy quyền.",
	"privacy.s2.sub3.title": "3. Chức năng nhắn tin tức thời",
	"privacy.s2.sub3.p1": "Khi dùng chức năng chat, chúng tôi ghi nhận dữ liệu tin nhắn cần thiết (văn bản/hình ảnh/giọng nói…) và nhật ký thao tác để thực hiện truyền và đồng bộ thông tin. Gửi ảnh từ album, gửi tệp: cần cấp quyền Lưu trữ. Gửi giọng nói, quay/chụp nội dung: cần quyền Micro và Camera.",
	"privacy.s2.sub3.p2": "Khi chia sẻ vị trí, chúng tôi cần quyền Vị trí địa lý, đồng thời có thể gọi cảm biến như gia tốc kế, con quay hồi chuyển… để tăng độ chính xác định vị.",
	"privacy.s2.sub3.p3": "Khi nhận tin nhắn, chúng tôi có thể đẩy thông báo tới bạn thông qua số điện thoại đăng ký hoặc thiết bị.",
	"privacy.s2.sub3.p4": "Khi bạn sử dụng chat và chủ động thực hiện thao tác dán (ví dụ dán văn bản/link/mã mời/hình ảnh…), chúng tôi có thể truy cập nội dung clipboard để giúp bạn nhập nhanh. Nội dung liên quan chỉ xử lý trên thiết bị, không tải lên và không lưu trữ.",
	"privacy.s2.sub4.title": "4. Cung cấp bảo đảm an toàn",
	"privacy.s2.sub4.intro": "Chúng tôi nỗ lực tạo môi trường liên lạc an toàn. Để phòng chống lừa đảo mạng viễn thông, duy trì vận hành ổn định, phòng ngừa tội phạm mạng, ứng phó sự cố an ninh mạng và bảo vệ an toàn tài sản/tính mạng của bạn và người khác, chúng tôi sẽ thu thập các thông tin sau:",
	"privacy.s2.sub4.item1": "Mã định danh thiết bị (ví dụ: Android ID, số serial/SN, địa chỉ MAC);",
	"privacy.s2.sub4.item2": "Mã định danh có thể thay đổi (ví dụ: IDFA, IDFV, Android OAID, HarmonyOS OAID, GAID);",
	"privacy.s2.sub4.item3": "Thông tin ứng dụng (ví dụ: crash app, trạng thái bật/tắt thông báo, tiến trình đang chạy của App…);",
	"privacy.s2.sub4.item4": "Thông số thiết bị và hệ thống (loại thiết bị, model, hệ điều hành và thông tin phần cứng);",
	"privacy.s2.sub4.item5": "Thông tin môi trường mạng (IP, bluetooth, thông tin cảm biến thiết bị…);",
	"privacy.s2.sub4.item6": "Thông tin nhà mạng;",
	"privacy.s2.sub4.item7": "Thông tin giao tiếp của thành phần broadcast, v.v.",
	"privacy.s2.sub4.p1": "Chúng tôi có thể sử dụng các thông tin trên cùng với thông tin tài khoản JDChat, nhật ký dịch vụ và các thông tin mà bên liên kết/đối tác cung cấp để: đánh giá an toàn tài khoản/giao dịch, xác thực danh tính, nhận diện vi phạm, phát hiện và phòng ngừa sự cố an toàn.",
	"privacy.s2.sub5.title": "5. Dịch vụ bổ sung dựa trên quyền hệ thống",
	"privacy.s2.sub5.p1": "Ở một số dịch vụ bổ sung, chúng tôi có thể yêu cầu bật quyền hệ thống để thu thập và sử dụng thông tin cá nhân. Nếu bạn không đồng ý bật quyền, không ảnh hưởng đến việc dùng dịch vụ cơ bản của JDChat, nhưng bạn sẽ không dùng được các dịch vụ bổ sung đó.",
	"privacy.s2.sub5.p2": "Bạn có thể bật/tắt quyền bất cứ lúc nào. Bật quyền = bạn cho phép chúng tôi thu thập/sử dụng thông tin. Tắt quyền = bạn rút lại ủy quyền. Việc tắt quyền không ảnh hưởng đến hoạt động thu thập/sử dụng trước đó.",
	"privacy.s2.sub6.title": "6. Cookie và công nghệ tương tự",
	"privacy.s2.sub6.p1": "Cookie và công nghệ tương tự là kỹ thuật phổ biến trên Internet. Khi bạn sử dụng dịch vụ, chúng tôi có thể gửi một hoặc nhiều Cookie hoặc mã định danh ẩn danh tới thiết bị của bạn để thu thập/nhận diện/lưu trữ thông tin truy cập và sử dụng sản phẩm.",
	"privacy.s2.sub6.p2": "Chúng tôi cam kết không dùng Cookie cho bất kỳ mục đích nào ngoài các mục đích nêu trong Chính sách này. Cookie chủ yếu dùng để đảm bảo an toàn và vận hành hiệu quả; xác nhận trạng thái an toàn tài khoản/giao dịch; xử lý bất thường như crash/độ trễ.",
	"privacy.s2.sub7.title": "7. Quy tắc khác về thu thập và sử dụng thông tin cá nhân",
	"privacy.s2.sub7.p1": "Nếu thông tin bạn cung cấp chứa thông tin cá nhân của người khác, trước khi cung cấp cho JDChat, bạn cần đảm bảo đã có ủy quyền hợp pháp.",
	"privacy.s2.sub7.p2": "Nếu chúng tôi sử dụng thông tin cho mục đích khác ngoài Chính sách này, chúng tôi sẽ xin sự đồng ý trước của bạn.",
	"privacy.s3.title": "III. Chia sẻ, chuyển giao và công khai thông tin",
	"privacy.s3.sub1.title": "1. Chuyển giao thông tin",
	"privacy.s3.sub1.desc": "Nếu do sáp nhập, chia tách, giải thể, phá sản… mà cần chuyển giao thông tin cá nhân, chúng tôi sẽ thông báo cho bạn tên và thông tin liên hệ của bên tiếp nhận. Bên tiếp nhận sẽ tiếp tục thực hiện Chính sách này. Nếu bên tiếp nhận thay đổi mục đích/phương thức xử lý, họ phải xin lại sự đồng ý của bạn.",
	"privacy.s3.sub2.title": "2. Công khai thông tin",
	"privacy.s3.sub2.intro": "Chúng tôi chỉ công khai thông tin cá nhân của bạn trong các trường hợp:",
	"privacy.s3.sub2.item1": "Bạn chủ động chọn hoặc có hình thức khác thể hiện đồng ý riêng;",
	"privacy.s3.sub2.item2": "Nếu xác định bạn vi phạm pháp luật hoặc quy tắc JDChat, hoặc để bảo vệ an toàn tài sản/tính mạng người khác, chúng tôi có thể công khai thông tin cá nhân của bạn.",
	"privacy.s3.sub3.title": "3. Ngừng hoạt động",
	"privacy.s3.sub3.desc": "Nếu chúng tôi ngừng vận hành sản phẩm/dịch vụ, chúng tôi sẽ ngừng thu thập thông tin cá nhân của bạn và thông báo bằng hình thức thông báo riêng lẻ hoặc công bố. Chúng tôi sẽ xóa hoặc ẩn danh hóa thông tin cá nhân đang nắm giữ.",
	"privacy.s3.sub4.title": "4. Trường hợp không cần xin ủy quyền",
	"privacy.s3.sub4.intro": "Theo pháp luật, các trường hợp sau có thể chia sẻ/chuyển giao/công khai mà không cần xin sự đồng ý:",
	"privacy.s3.sub4.item1": "Cần thiết để ký kết/thực hiện hợp đồng hoặc quản lý nhân sự;",
	"privacy.s3.sub4.item2": "Cần thiết để thực hiện nghĩa vụ/trách nhiệm pháp định;",
	"privacy.s3.sub4.item3": "Cần thiết để ứng phó sự kiện y tế công cộng hoặc bảo vệ an toàn tính mạng/tài sản trong tình huống khẩn cấp;",
	"privacy.s3.sub4.item4": "Thực hiện đưa tin/bình luận giám sát dư luận vì lợi ích công cộng trong phạm vi hợp lý;",
	"privacy.s3.sub4.item5": "Thông tin cá nhân đã được công khai hợp pháp hoặc do bạn tự công khai;",
	"privacy.s3.sub4.item6": "Các trường hợp khác theo luật và quy định hành chính.",
	"privacy.s4.title": "IV. Quyền của bạn",
	"privacy.s4.p1": "Bạn có thể xóa một phần thông tin hoặc yêu cầu hủy tài khoản để xóa toàn bộ thông tin.",
	"privacy.s4.p2": "Trong các trường hợp sau, bạn có thể liên hệ CSKH để yêu cầu xóa thông tin cá nhân:",
	"privacy.s4.item1": "Chúng tôi xử lý thông tin cá nhân trái pháp luật;",
	"privacy.s4.item2": "Chúng tôi thu thập/sử dụng thông tin nhưng chưa có sự đồng ý rõ ràng của bạn;",
	"privacy.s4.item3": "Việc xử lý vi phạm nghiêm trọng thỏa thuận với bạn;",
	"privacy.s4.item4": "Mục đích xử lý đã đạt được/không thể đạt/không còn cần thiết;",
	"privacy.s4.item5": "Chúng tôi ngừng cung cấp dịch vụ hoặc đã hết thời hạn lưu trữ.",
	"privacy.s4.p3": "Nếu chúng tôi đáp ứng yêu cầu xóa, chúng tôi sẽ cố gắng thông báo cho các bên đã nhận thông tin từ chúng tôi và yêu cầu họ xóa.",
	"privacy.s4.p4": "Sau khi bạn xóa thông tin, do hạn chế pháp luật/kỹ thuật an toàn, chúng tôi có thể không xóa ngay khỏi hệ thống sao lưu; chúng tôi sẽ lưu trữ an toàn và hạn chế xử lý thêm.",
	"privacy.s4.p5": "Bạn có thể gửi yêu cầu về quyền dữ liệu qua JDChat App: \"Cài đặt & Quyền riêng tư – Trung tâm an toàn – Quyền dữ liệu\" hoặc qua thông tin liên hệ của JDChat.",
	"privacy.s4.p6": "Bạn cũng có thể yêu cầu hủy tài khoản theo cách sau:",
	"privacy.s4.cancelItem": "Người dùng cá nhân JDChat: đăng nhập JDChat, vào \"Tôi – Cài đặt tài khoản – Hủy tài khoản JDChat\".",
	"privacy.s4.p7": "Lưu ý: hiện chỉ hỗ trợ hủy trên điện thoại. Sau khi hủy, chúng tôi sẽ ngừng cung cấp dịch vụ và xóa/ẩn danh hóa thông tin theo luật.",
	"privacy.s4.p8": "Khi phản hồi yêu cầu: bạn có thể khiếu nại qua CSKH hoặc bộ phận bảo vệ thông tin cá nhân; chúng tôi sẽ trả lời trong 10 ngày làm việc.",
	"privacy.s4.p9": "Để đảm bảo an toàn, trước khi xử lý yêu cầu chúng tôi sẽ xác minh danh tính (xác thực tài khoản/đơn giấy hoặc cách khác).",
	"privacy.s4.p10": "Về nguyên tắc, yêu cầu hợp lý không thu phí; nhưng nếu yêu cầu lặp lại nhiều lần hoặc vượt giới hạn hợp lý, chúng tôi có thể thu phí phù hợp.",
	"privacy.s5.title": "V. Lưu trữ thông tin",
	"privacy.s5.p1": "Chúng tôi chỉ lưu giữ thông tin cá nhân trong thời hạn cần thiết để đạt mục đích của Chính sách, trừ khi pháp luật yêu cầu lưu giữ bắt buộc. Ví dụ: \"Luật Thương mại điện tử\" yêu cầu lưu thông tin hàng hóa/dịch vụ và giao dịch ít nhất 3 năm.",
	"privacy.s5.p2": "Tiêu chí xác định thời hạn lưu trữ chủ yếu gồm:",
	"privacy.s5.item1": "Hoàn thành mục đích giao dịch liên quan, duy trì hồ sơ để xử lý truy vấn/khiếu nại;",
	"privacy.s5.item2": "Đảm bảo an toàn và chất lượng dịch vụ;",
	"privacy.s5.item3": "Bạn có đồng ý lưu lâu hơn hay không;",
	"privacy.s5.item4": "Nhu cầu về thời hiệu khởi kiện;",
	"privacy.s5.item5": "Có thỏa thuận đặc biệt hoặc luật quy định khác hay không.",
	"privacy.s5.p3": "Sau khi hết thời hạn, chúng tôi sẽ xóa hoặc ẩn danh hóa theo luật.",
	"privacy.s5.p4": "Nếu bạn lo ngại rò rỉ thông tin cá nhân (đặc biệt là tài khoản/mật khẩu), hãy liên hệ CSKH ngay để được hướng dẫn và hỗ trợ.",
	"privacy.s6.title": "VI. Bảo vệ trẻ vị thành niên",
	"privacy.s6.p1": "Trong hoạt động văn phòng số, giao tiếp và cộng tác, chúng tôi mặc định bạn có năng lực hành vi dân sự tương ứng. Nếu bạn là người chưa thành niên, vui lòng yêu cầu cha mẹ/người giám hộ đọc kỹ Chính sách này và sử dụng dịch vụ sau khi đã được họ đồng ý.",
	"privacy.s6.p2": "Nếu bạn là cha mẹ/người giám hộ của trẻ, vui lòng theo dõi việc trẻ có sử dụng dịch vụ sau khi được bạn cho phép hay không. Nếu có thắc mắc về thông tin cá nhân của trẻ, hãy liên hệ bộ phận phụ trách bảo vệ thông tin cá nhân của chúng tôi.",
	"privacy.s7.title": "VII. Liên hệ với chúng tôi",
	"privacy.s7.p1": "Bạn có thể liên hệ với chúng tôi theo các cách sau, chúng tôi sẽ phản hồi trong 10 ngày làm việc:",
	"privacy.s7.p2": "Nếu có thắc mắc/ý kiến/đề xuất về Chính sách: vào \"Tôi – Liên hệ chúng tôi – Dịch vụ trực tuyến\".",
	"privacy.s7.p3": "Hoặc gửi email đến: feiyun88888888{'@'}gmail.com (bộ phận phụ trách bảo vệ thông tin cá nhân).",
	"privacy.s7.address": "Địa chỉ văn phòng",
	"privacy.s7.addressValue": "Phòng 1702-1, Tầng 17, Tòa 3, Khu Huizhi Kechuang, Số 88 Đường Keyuan, Khu Công nghệ cao Zhangjiang, Quận Pudong, Thượng Hải.",
	"privacy.s7.p4": "Nếu bạn không hài lòng với phản hồi, đặc biệt nếu cho rằng hành vi xử lý thông tin cá nhân xâm phạm quyền lợi hợp pháp của bạn, bạn có thể khởi kiện tại tòa án có thẩm quyền nơi bị đơn cư trú.",
	"privacy.s7.company": "Công ty",
	"privacy.s7.companyValue": "JDchat Digital Technology Co., Ltd. (JDchat数字技术有限公司)",
	"privacy.s7.email": "Email",
	"privacy.s7.emailValue": "feiyun88888888{'@'}gmail.com",
	"privacy.s7.effectiveDate": "Ngày có hiệu lực: 24/12/2025",
	"privacy.s7.end": "(Hết)",
	"privacy.sdk.title": "Phụ lục: Mô tả việc thu thập/sử dụng thông tin của SDK bên thứ ba",
	"privacy.sdk.p1": "Để đảm bảo một số chức năng hoạt động ổn định, chúng tôi có thể tích hợp bộ SDK do bên thứ ba cung cấp. Các SDK này có thể thu thập thông tin thiết bị hoặc thông tin cần thiết khác. Chúng tôi giám sát nghiêm ngặt hành vi thu thập của đối tác để bảo vệ an toàn thông tin.",
	"privacy.sdk.p2": "Khi bạn sử dụng chức năng âm thanh/video (gọi thoại, họp video, livestream), bạn cần cấp quyền Camera/Micro; nếu từ chối, bạn không thể dùng chức năng này.",
	"privacy.sdk.p3": "Khi họp âm thanh/video, chúng tôi có thể lấy thông tin cảm biến như cảm biến từ trường, cảm biến khoảng cách, gia tốc kế, cảm biến ánh sáng để hỗ trợ tắt màn hình tự động, xoay màn hình…",
	"privacy.sdk.p4": "Trong quá trình nhắn tin, nếu hai bên khác múi giờ, JDChat sẽ dùng thông tin múi giờ của thiết bị để hiển thị giờ địa phương. Bạn có thể tắt tại: \"Cài đặt & Quyền riêng tư – Quyền thông tin đối ngoại – Múi giờ hiện tại\".",
	"privacy.sdk.tableIntro": "Dưới đây là các SDK chính và mô tả thu thập/sử dụng:",
	"privacy.sdk.th.name": "Tên SDK",
	"privacy.sdk.th.developer": "Nhà phát triển",
	"privacy.sdk.th.function": "Chức năng",
	"privacy.sdk.th.info": "Thông tin cá nhân thu thập",
	"privacy.sdk.th.privacy": "Chính sách bảo mật",
	"privacy.sdk.note": "Ghi chú: Chúng tôi chỉ gọi các SDK khi cần thiết; trước khi tích hợp đã thực hiện đánh giá tuân thủ và ký thỏa thuận bảo vệ dữ liệu với bên thứ ba. Hành vi thu thập của SDK chịu sự điều chỉnh bởi chính sách riêng của họ; vui lòng đọc kỹ để hiểu đầy đủ hơn.",
	"privacy.sdk.row1.name": "Thư viện đa luồng, Thư viện tăng tốc hiệu năng (com.huawei.hms.stats)",
	"privacy.sdk.row1.developer": "Huawei Software Technologies Co., Ltd.",
	"privacy.sdk.row1.function": "Không liên quan",
	"privacy.sdk.row1.info": "Không liên quan",
	"privacy.sdk.row2.name": "TRTC SDK gọi âm thanh/video (Android)",
	"privacy.sdk.row2.developer": "Tencent Computer Systems Company Limited (Thâm Quyến)",
	"privacy.sdk.row2.function": "Giao tiếp âm thanh/video thời gian thực (gọi thoại/video)",
	"privacy.sdk.row2.info": "Trạng thái Wi-Fi, thuộc tính hệ thống, model thiết bị, OS, địa chỉ IP, camera, ghi âm, thông tin cảm biến, thông tin CPU",
	"privacy.sdk.row3.name": "Tencent Cloud IM SDK",
	"privacy.sdk.row3.developer": "Tencent Cloud Computing (Bắc Kinh) Co., Ltd.",
	"privacy.sdk.row3.function": "Chat 1-1, chat nhóm, chuỗi quan hệ, quản lý hồ sơ",
	"privacy.sdk.row3.info": "Thông tin định danh người dùng, loại mạng, ngôn ngữ hệ thống",
	"privacy.sdk.row4.name": "VCube SDK toàn chức năng (Android)",
	"privacy.sdk.row4.developer": "Tencent Computer Systems Company Limited (Thâm Quyến)",
	"privacy.sdk.row4.function": "Dịch vụ livestream",
	"privacy.sdk.row4.info": "Trạng thái Wi-Fi, thuộc tính hệ thống, model thiết bị, OS, địa chỉ IP, camera, ghi âm, thông tin cảm biến, thông tin CPU",
	"privacy.sdk.row5.name": "Live Streaming SDK (Android)",
	"privacy.sdk.row5.developer": "Tencent Computer Systems Company Limited (Thâm Quyến)",
	"privacy.sdk.row5.function": "Dịch vụ livestream",
	"privacy.sdk.row5.info": "Trạng thái Wi-Fi, thuộc tính hệ thống, model thiết bị, OS, địa chỉ IP, camera, ghi âm, thông tin cảm biến, thông tin CPU",
	"privacy.sdk.row6.name": "Live Streaming SDK (Phiên bản cơ bản) (Android)",
	"privacy.sdk.row6.developer": "Tencent Computer Systems Company Limited (Thâm Quyến)",
	"privacy.sdk.row6.function": "Dịch vụ livestream",
	"privacy.sdk.row6.info": "Trạng thái Wi-Fi, thuộc tính hệ thống, model thiết bị, OS, địa chỉ IP, camera, ghi âm, thông tin cảm biến, thông tin CPU",
	"privacy.sdk.row7.name": "UGSV SDK video ngắn (Android)",
	"privacy.sdk.row7.developer": "Tencent Computer Systems Company Limited (Thâm Quyến)",
	"privacy.sdk.row7.function": "Thu hình khi quay video",
	"privacy.sdk.row7.info": "Hình ảnh camera thiết bị Android",
	"privacy.sdk.row8.name": "HONOR Push SDK (com.hihonor.push)",
	"privacy.sdk.row8.developer": "Shenzhen HONOR Device Co., Ltd.",
	"privacy.sdk.row8.function": "Thông báo đẩy tới thiết bị HONOR",
	"privacy.sdk.row8.info": "Thông tin thiết bị (OAID), tiến trình đang chạy của ứng dụng",
	"privacy.sdk.row9.name": "Huawei Push",
	"privacy.sdk.row9.developer": "Huawei Device Co., Ltd.",
	"privacy.sdk.row9.function": "Thông báo đẩy tới thiết bị Huawei",
	"privacy.sdk.row9.info": "Thông tin thiết bị (OAID), tiến trình đang chạy của ứng dụng",
	"privacy.sdk.row10.name": "vivo Push SDK (com.vivo.push)",
	"privacy.sdk.row10.developer": "vivo Mobile Communication Co., Ltd.",
	"privacy.sdk.row10.function": "Thông báo đẩy tới thiết bị vivo",
	"privacy.sdk.row10.info": "Thông tin thiết bị (OAID), tiến trình đang chạy của ứng dụng",
	"privacy.sdk.row11.name": "OPPO PUSH Client SDK (com.heytap.msp)",
	"privacy.sdk.row11.developer": "Guangdong HeyTap Technology Co., Ltd.",
	"privacy.sdk.row11.function": "Thông báo đẩy tới thiết bị OPPO",
	"privacy.sdk.row11.info": "Thông tin thiết bị (OAID), tiến trình đang chạy của ứng dụng",
	"privacy.sdk.row12.name": "Xiaomi Push SDK (com.xiaomi.push)",
	"privacy.sdk.row12.developer": "Xiaomi Mobile Software Co., Ltd. (Bắc Kinh)",
	"privacy.sdk.row12.function": "Thông báo đẩy tới thiết bị Xiaomi",
	"privacy.sdk.row12.info": "Thông tin thiết bị (OAID), tiến trình đang chạy của ứng dụng",
	"privacy.sdk.row13.name": "Meizu Push SDK (com.meizu.cloud.pushsdk)",
	"privacy.sdk.row13.developer": "Zhuhai Xingji Meizu Information Technology Co., Ltd.",
	"privacy.sdk.row13.function": "Thông báo đẩy tới thiết bị Meizu",
	"privacy.sdk.row13.info": "Thông tin thiết bị (OAID), tiến trình đang chạy của ứng dụng",
	"privacy.sdk.row14.name": "Getui Push SDK (Android) (com.getui)",
	"privacy.sdk.row14.developer": "Daily Interactive Co., Ltd. (每日互动)",
	"privacy.sdk.row14.function": "Thông báo đẩy",
	"privacy.sdk.row14.info": "Nền tảng thiết bị, nhà sản xuất, thương hiệu, model, phiên bản OS, OAID, AndroidID, thông tin kết nối Wi-Fi, thông tin nhà mạng, DHCP, SSID, BSSID, IMEI, MAC, GAID, Serial Number, IMSI, ICCID, địa chỉ IP, thông tin trạm gốc",
	"privacy.sdk.row15.name": "Dynamic Ability SDK (com.huawei.hms.feature)",
	"privacy.sdk.row15.developer": "Huawei Software Technologies Co., Ltd.",
	"privacy.sdk.row15.function": "Không liên quan",
	"privacy.sdk.row15.info": "Không liên quan",
	"privacy.sdk.row16.name": "Huawei Unified Scan SDK (Android) (com.huawei.hms.scankit)",
	"privacy.sdk.row16.developer": "Huawei Software Technologies Co., Ltd.",
	"privacy.sdk.row16.function": "Cung cấp khả năng quét mã",
	"privacy.sdk.row16.info": "Dữ liệu người dùng gửi (hình ảnh, văn bản), thông tin ứng dụng, thông tin thiết bị"
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
