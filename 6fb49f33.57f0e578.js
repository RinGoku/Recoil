(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(6),o=(a(0),a(164)),c={title:"useRecoilCallback(callback, deps)",sidebar_label:"useRecoilCallback()"},l={id:"api-reference/core/useRecoilCallback",title:"useRecoilCallback(callback, deps)",description:"This hook is similar to [*`useCallback()`*](https://reactjs.org/docs/hooks-reference.html#usecallback), but will also provide an API for your callbacks to work with Recoil state.  This hook can be used to construct a callback that has access to a read-only [`Snapshot`](/docs/api-reference/core/Snapshot) of Recoil state and the ability to asynchronously update current Recoil state.",source:"@site/docs/api-reference/core/useRecoilCallback.md",permalink:"/docs/api-reference/core/useRecoilCallback",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilCallback.md",sidebar_label:"useRecoilCallback()",sidebar:"someSidebar",previous:{title:"class Snapshot",permalink:"/docs/api-reference/core/Snapshot"},next:{title:"useRecoilTransactionObserver(callback)",permalink:"/docs/api-reference/core/useRecoilTransactionObserver"}},i=[{value:"Example",id:"example",children:[]}],s={rightToc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This hook is similar to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#usecallback"}),Object(o.b)("em",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"em"},"useCallback()"))),", but will also provide an API for your callbacks to work with Recoil state.  This hook can be used to construct a callback that has access to a read-only ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/core/Snapshot"}),Object(o.b)("inlineCode",{parentName:"a"},"Snapshot"))," of Recoil state and the ability to asynchronously update current Recoil state."),Object(o.b)("p",null,"Some motivations for using this hook may include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Asynchronously read Recoil state without subscribing a React component to re-render if the atom or selector is updated."),Object(o.b)("li",{parentName:"ul"},"Deferring expensive lookups to an async action that you don't want to do at render-time."),Object(o.b)("li",{parentName:"ul"},"Performing side-effects where you would like to also read or write to Recoil state."),Object(o.b)("li",{parentName:"ul"},"Dynamically updating an atom or selector where we may not know at render-time which atom or selector we will want to update, so we can't use ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api-reference/core/useSetRecoilState"}),Object(o.b)("inlineCode",{parentName:"a"},"useSetRecoilState()")),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/guides/asynchronous-data-queries#pre-fetching"}),"Pre-fetching")," data before rendering.")),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"type CallbackInterface = {\n  snapshot: Snapshot,\n  gotoSnapshot: Snapshot => void,\n  set: <T>(RecoilState<T>, (T => T) | T) => void,\n  reset: <T>(RecoilState<T>) => void,\n};\n\nfunction useRecoilCallback<Args, ReturnValue>(\n  callback: CallbackInterface => (...Args) => ReturnValue,\n  deps?: $ReadOnlyArray<mixed>,\n): (...Args) => ReturnValue\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"callback"))," - The user callback function with a wrapper function that provides a callback interface.  Callbacks to change the state will be queued to asynchronously update the current Recoil state.  The type signature of the wrapped function matches the type signature of the returned callback."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"deps"))," - An optional set of dependencies for memoizing the callback.  Like ",Object(o.b)("inlineCode",{parentName:"li"},"useCallback()"),", the produced callback will not be memoized by default and will produce a new function with each render.  You can pass an empty array to always return the same function instance.  If you pass values in the ",Object(o.b)("inlineCode",{parentName:"li"},"deps")," array a new function will be used if the reference equality of any dep changes.  Those values can then be used from within the body of your callback without getting stale.  (See ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/hooks-reference.html#usecallback"}),Object(o.b)("inlineCode",{parentName:"a"},"useCallback")),")  You can ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/introduction/installation#eslint"}),"update eslint")," to help ensure this is used correctly.")),Object(o.b)("p",null,"Callback Interface:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"snapshot"))," - The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api-reference/core/Snapshot"}),Object(o.b)("inlineCode",{parentName:"a"},"Snapshot"))," provides a read-only look at Recoil atom state committed with a React batch when the current transaction the callback is called from began.  While the atom values are static, asynchronous selectors may still be pending or resolve."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"gotoSnapshot"))," - Enqueue updating the global state to match the provided ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api-reference/core/Snapshot"}),Object(o.b)("inlineCode",{parentName:"a"},"Snapshot")),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"set"))," - Enqueue setting the value of an atom or selector.  Like elsewhere, you may either provide the new value directly or an updater function that returns the new value and takes the current value as a parameter.  The current value represents all other enqueued state changes to date in the current transaction."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"reset"))," - Reset the value of an atom or selector to its default.")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import {atom, useRecoilCallback} from 'recoil';\n\nconst itemsInCart = atom({\n  key: 'itemsInCart',\n  default: 0,\n});\n\nfunction CartInfoDebug() {\n  const logCartItems = useRecoilCallback(({snapshot}) => async () => {\n    const numItemsInCart = await snapshot.getPromise(itemsInCart);\n    console.log('Items in cart: ', numItemsInCart);\n  });\n\n  return (\n    <div>\n      <button onClick={logCartItems}>Log Cart Items</button>\n    </div>\n  );\n}\n")))}b.isMDXComponent=!0},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return a?r.a.createElement(m,l({ref:t},s,{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);