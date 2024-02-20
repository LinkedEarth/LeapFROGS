/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-1e0621d17a4bfb4c529d.js"
  },
  {
    "url": "styles.1f8f8758238b635505ac.css"
  },
  {
    "url": "styles-0ec71dd62c66cb95665c.js"
  },
  {
    "url": "framework-ddca7dd446fc76edf1f1.js"
  },
  {
    "url": "edea2dd3-b986c529c162e29b8baa.js"
  },
  {
    "url": "d659406a-6ad0a534f2f8b8e5b0e9.js"
  },
  {
    "url": "f65a48b9-ff9d94ed2729274f266e.js"
  },
  {
    "url": "e6d6ed13-f66b80e7d04ca230012c.js"
  },
  {
    "url": "app-1ac1f215f4267f2a86d7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-44ceac2081f421b30e8f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e6cb00f0df6e744baa88a06d76f3363e"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "c7047792c6f91b88e0d9abc0cd819e92"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "f1fb62a3f5e7fe3c38333c03aa7336b6"
  },
  {
    "url": "polyfill-7efc751b3f47cab2dd61.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "309af307f7f2d33a07b45c899a3c031a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/LeapFROGS`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/LeapFROGS/app-1ac1f215f4267f2a86d7.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/LeapFROGS/offline-plugin-app-shell-fallback/index.html`
  return await caches.match(offlineShell)
})

workbox.routing.registerRoute(navigationRoute)

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
