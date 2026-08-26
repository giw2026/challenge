(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,186860,810321,584770,e=>{"use strict";let t;var r=e.i(408122);let{messages:o}=e.r(667721);r.i18n.locale||r.i18n.loadAndActivate({locale:"en",messages:o}),e.s([],186860),window.requestIdleCallback=window.requestIdleCallback||function(e){let t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)},"u">typeof AbortSignal&&("any"in AbortSignal||(AbortSignal.any=function(e){let t=new AbortController,r=e.find(e=>e.aborted);if(r)return t.abort(r.reason),t.signal;let o=e.map(e=>{let r=()=>{t.abort(e.reason),o.forEach(e=>e())};return e.addEventListener("abort",r),()=>e.removeEventListener("abort",r)});return t.signal}),"timeout"in AbortSignal||(AbortSignal.timeout=function(e){let t=new AbortController;return setTimeout(()=>{t.abort(Error("signal timed out"))},e),t.signal})),e.i(606344),window.ReadableStream||e.r(545904),e.s([],810321);var n=e.i(391398),i=e.i(189280);e.i(868681);var a=e.i(5578),l=e.i(811818),s=e.i(521805),u=function(e){var t=e.client,r=e.children,o=(0,s.getApolloContext)(),n=l.useContext(o),u=l.useMemo(function(){return(0,i.__assign)((0,i.__assign)({},n),{client:t||n.client})},[n,t]);return(0,a.invariant)(u.client,71),l.createElement(o.Provider,{value:u},r)},d=e.i(867289),c=e.i(697991),h=e.i(400474),h=h,b=e.i(191788),f=e.i(892194);let p="chakra-ui-light",m="chakra-ui-dark",_="chakra-ui-color-mode",y={ssr:!1,type:"localStorage",get(e){let t;if(!globalThis?.document)return e;try{t=localStorage.getItem(_)||e}catch(e){}return t||e},set(e){try{localStorage.setItem(_,e)}catch(e){}}},g=()=>{},v=(0,c.isBrowser)()?b.useLayoutEffect:b.useEffect;function w(e,t){return"cookie"===e.type&&e.ssr?e.get(t):t}let S=function(e){let{value:t,children:r,options:{useSystemColorMode:o,initialColorMode:i,disableTransitionOnChange:a}={},colorModeManager:l=y}=e,s=(0,h._)(),u="dark"===i?"dark":"light",[d,c]=(0,b.useState)(()=>w(l,u)),[_,S]=(0,b.useState)(()=>w(l)),{getSystemTheme:R,setClassName:T,setDataset:k,addListener:C}=(0,b.useMemo)(()=>(function(e={}){let{preventTransition:t=!0,nonce:r}=e,o={setDataset:e=>{let r=t?o.preventTransition():void 0;document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e,r?.()},setClassName(e){document.body.classList.add(e?m:p),document.body.classList.remove(e?p:m)},query:()=>window.matchMedia("(prefers-color-scheme: dark)"),getSystemTheme:e=>o.query().matches??"dark"===e?"dark":"light",addListener(e){let t=o.query(),r=t=>{e(t.matches?"dark":"light")};return"function"==typeof t.addListener?t.addListener(r):t.addEventListener("change",r),()=>{"function"==typeof t.removeListener?t.removeListener(r):t.removeEventListener("change",r)}},preventTransition(){let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),void 0!==r&&(e.nonce=r),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(e)})})}}};return o})({preventTransition:a,nonce:s?.nonce}),[a,s?.nonce]),P="system"!==i||d?d:_,E=(0,b.useCallback)(e=>{let t="system"===e?R():e;c(t),T("dark"===t),k(t),l.set(t)},[l,R,T,k]);v(()=>{"system"===i&&S(R())},[]),(0,b.useEffect)(()=>{let e=l.get();e?E(e):"system"===i?E("system"):E(u)},[l,u,i,E]);let x=(0,b.useCallback)(()=>{E("dark"===P?"light":"dark")},[P,E]);(0,b.useEffect)(()=>{if(o)return C(E)},[o,C,E]);let j=(0,b.useMemo)(()=>({colorMode:t??P,toggleColorMode:t?g:x,setColorMode:t?g:E,forced:void 0!==t}),[P,x,E,t]);return(0,n.jsx)(f.ColorModeContext.Provider,{value:j,children:r})};S.displayName="ColorModeProvider";var R=e.i(707065);let T=String.raw,k=T`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,C=()=>(0,n.jsx)(R.Global,{styles:k}),P=({scope:e=""})=>(0,n.jsx)(R.Global,{styles:T`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${k}
    `});var E=e.i(877763),x=e.i(931579),j=e.i(381043);let q=e=>{let{children:t,colorModeManager:r,portalZIndex:o,resetScope:i,resetCSS:a=!0,theme:l={},environment:s,cssVarsRoot:u,disableEnvironment:d,disableGlobalStyle:c}=e,h=(0,n.jsx)(j.EnvironmentProvider,{environment:s,disabled:d,children:t});return(0,n.jsx)(E.ThemeProvider,{theme:l,cssVarsRoot:u,children:(0,n.jsxs)(S,{colorModeManager:r,options:l.config,children:[a?(0,n.jsx)(P,{scope:i}):(0,n.jsx)(C,{}),!c&&(0,n.jsx)(E.GlobalStyle,{}),o?(0,n.jsx)(x.PortalManager,{zIndex:o,children:h}):h]})})};var O=e.i(921109);let z=(t=d.theme,function({children:e,theme:r=t,toastOptions:o,...i}){return(0,n.jsxs)(q,{theme:r,...i,children:[(0,n.jsx)(O.ToastOptionProvider,{value:o?.defaultOptions,children:e}),(0,n.jsx)(O.ToastProvider,{...o})]})});var A=e.i(757632);e.i(828525);var L=e.i(180962),W=e.i(958678),$=e.i(422276),I=e.i(395585),B=e.i(484936),M=e.i(162979),F=e.i(625945);let D=new M.ApolloLink(()=>new F.Observable(e=>{e.next({data:{}}),e.complete()})),N=["chakra-reset","chakra-global","gml-base"],U=()=>(0,n.jsx)(R.Global,{styles:`
@layer ${N.join(", ")};

@layer chakra-reset {
  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    font-family: system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    touch-action: manipulation;
  }

  body {
    position: relative;
    min-height: 100%;
    margin: 0;
    font-feature-settings: "kern";
  }

  :where(*, *::before, *::after) {
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
    word-wrap: break-word;
  }

  main {
    display: block;
  }

  hr {
    border-top-width: 1px;
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  :where(pre, code, kbd,samp) {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
    color: inherit;
    text-decoration: inherit;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  :where(b, strong) {
    font-weight: bold;
  }

  small {
    font-size: 80%;
  }

  :where(sub,sup) {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  :where(button, input, optgroup, select, textarea) {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  :where(button, input) {
    overflow: visible;
  }

  :where(button, select) {
    text-transform: none;
  }

  :where(
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner
  ) {
    border-style: none;
    padding: 0;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  :where([type="checkbox"], [type="radio"]) {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none !important;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  :where(
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre
  ) {
    margin: 0;
  }

  button {
    background: transparent;
    padding: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  :where(ol, ul) {
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  :where(button, [role="button"]) {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    border: 0 !important;
  }

  table {
    border-collapse: collapse;
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-size: inherit;
    font-weight: inherit;
  }

  :where(button, input, optgroup, select, textarea) {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  :where(img, svg, video, canvas, audio, iframe, embed, object) {
    display: block;
  }

  :where(img, video) {
    max-width: 100%;
    height: auto;
  }

  [data-js-focus-visible]
    :focus:not([data-focus-visible-added]):not(
      [data-focus-visible-disabled]
    ) {
    outline: none;
    box-shadow: none;
  }

  select::-ms-expand {
    display: none;
  }

  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
}

@layer chakra-global {
  *,
  *::before,
  *::after {
    border-color: var(--chakra-colors-chakra-border-color);
  }
}
`});var Y=e.i(358280);let Q=({children:e})=>(0,n.jsxs)(Y.I18nProvider,{i18n:r.i18n,children:[e," "]});var G=e.i(418755),H=e.i(613616),V=e.i(887527),K=b,X=e.i(428683),Z=e.i(676828),J=e.i(382167),ee=e.i(918228),et=e.i(649543),er=e.i(969641),eo=e.i(344233),en=e.i(775493),ei=e.i(704077),ea=e.i(112010),el=e.i(588183),es=e.i(575329),eu=e.i(751827),ed=e.i(406112),ec=e.i(524473),eh=e.i(541075),eb=e.i(849187),ef=e.i(542862),ep=e.i(203828),em=e.i(175440),e_=e.i(877147);let ey=({onLocaleSelect:e,selectedLocale:t,renderAsLinks:r=!1,locales:o})=>{let i=(()=>{let{asPath:e}=(0,ep.useRouter)();return(0,b.useCallback)(t=>{let r=e.split("?")[0],o=r.split("/").filter(Boolean),n=o[0],i=em.SUPPORTED_LOCALE_KEYS.includes(n)&&"en"!==n?1===o.length?"/":"/"+o.slice(1).join("/"):r,a=e.split("?")[1],l=r;return e_.LOCALIZED_MARKETING_SITE_PATHS.includes(i)?(em.SUPPORTED_LOCALE_KEYS.includes(t)&&(l="en"===t?""===i?"/":i:`/${t}${"/"===i?"":i}`),`${l}${a?`?${a}`:""}`):null},[e])})();return(0,n.jsx)(ef.LocalePickerList,{locales:o,onLocaleSelect:e,selectedLocale:t,renderAsLinks:r,getLocalizedUrlFn:i})};var eg=e.i(200456),ev=e.i(45652),ew=e.i(661619),eS=e.i(405054);let eR=({onLocaleSelect:e,selectedLocaleKey:t,buttonProps:o,showLabelOnMobile:i=!1,activatorDataId:a,renderAsLinks:l=!1,iconOnly:s=!1})=>{let{isOpen:u,onOpen:d,onClose:c}=(0,ed.useDisclosure)(),h=(0,eb.useFeatureFlag)("i18nEnabled"),b=(0,ew.getSupportedLocaleOptionsSorted)().filter(e=>h||"private_beta"!==em.LOCALE_ROLLOUT_MAP[e.key]),f=(0,ev.useSSRMounted)(),p=eg.SUPPORTED_LOCALE_OPTIONS[t];return(0,n.jsxs)(n.Fragment,{children:[s?(0,n.jsx)(eo.IconButton,{onClick:d,"aria-label":r.i18n._({id:"-DEogc"}),icon:(0,n.jsx)(eh.FontAwesomeIcon,{icon:ec.faGlobe}),variant:"ghost",alignContent:"center",size:"md",fontWeight:500,...o}):(0,n.jsxs)(n.Fragment,{children:[f&&p&&(0,n.jsx)(er.Button,{w:"fit-content",onClick:d,display:{base:i?"block":"none",md:"block"},leftIcon:(0,n.jsx)(X.Box,{display:"inline-block",children:(0,n.jsx)(eh.FontAwesomeIcon,{icon:ec.faGlobe})}),textDecoration:"none !important",alignContent:"center",size:"sm",variant:"ghost",...o,...a&&{"data-id":a},children:p.displayName}),(0,n.jsx)(eo.IconButton,{onClick:d,display:{base:i?"none":"block",md:"none"},"aria-label":r.i18n._({id:"-DEogc"}),icon:(0,n.jsx)(eh.FontAwesomeIcon,{icon:ec.faGlobe}),variant:"ghost",alignContent:"center",size:"md",fontWeight:500,...o})]}),u&&(0,n.jsxs)(en.Modal,{isOpen:u,onClose:c,size:"6xl",isCentered:!1,preserveScrollBarGap:!0,blockScrollOnMount:!0,scrollBehavior:"outside",children:[(0,n.jsx)(eu.ModalOverlay,{zIndex:{base:"tooltip",md:void 0}}),(0,n.jsxs)(el.ModalContent,{m:{base:4,md:20},containerProps:{zIndex:{base:"tooltip",md:void 0}},children:[(0,n.jsx)(es.ModalHeader,{textAlign:"center",fontSize:{base:"xl",md:"3xl"},children:(0,n.jsx)(Y.Trans,{id:"EghcSN"})}),(0,n.jsx)(ea.ModalCloseButton,{}),(0,n.jsx)(ei.ModalBody,{children:(0,n.jsx)(ey,{selectedLocale:eg.SUPPORTED_LOCALE_OPTIONS[t],onLocaleSelect:t=>{(0,eS.isLanguageSupported)(t)?(e?.(t),c()):console.error(`Invalid locale key: ${t}`)},renderAsLinks:l,locales:b})})]})]})]})};var eT=e.i(816350),ek=e.i(130833),eC=e.i(616358);let eP=({buttonProps:e,showLabelOnMobile:t=!1,iconOnly:r=!1})=>{let o=(0,eT.useLinguiLocale)(),i=(0,b.useMemo)(()=>o,[]),[a,l]=(0,b.useState)(i);(0,ek.useLocalePreview)(a);let s=(0,b.useCallback)(e=>{l(e),(0,eC.setGammaLocaleCookie)(e)},[]);return(0,n.jsx)(eR,{selectedLocaleKey:o,onLocaleSelect:s,buttonProps:e,showLabelOnMobile:t,iconOnly:r})};e.i(962364).default,e.i(528446).default;var eE=e.i(132421);let ex=()=>{let e=(0,eT.useLinguiLocale)();return(0,n.jsxs)(ee.Stack,{direction:"row",justify:"space-between",alignItems:"center",children:[(0,n.jsx)(J.Link,{href:("en"===e||!e||!em.SUPPORTED_LOCALE_KEYS.includes(e)?{home:"/",pricing:"/pricing"}:{home:`/${e}`,pricing:`/${e}/pricing`}).home,isExternal:!0,children:(0,n.jsx)(et.GammaLogo,{w:"100px"})}),(0,n.jsx)(eP,{buttonProps:{variant:"ghost"}})]})},ej=({lede:e,title:t,children:r,stackProps:o,showFooter:i=!1})=>(0,n.jsxs)(ee.Stack,{bg:"white",padding:{base:6,md:8},zIndex:"2",borderRadius:{base:"none",md:"xl"},shadow:{base:"none",md:"lg"},maxW:"100%",w:{base:"100%",md:"500px"},spacing:8,m:{base:0,md:8},minH:{base:"100%",md:"auto"},...o,children:[(0,n.jsx)(ex,{}),e&&("string"==typeof e?(0,n.jsx)(V.Text,{fontSize:"sm",color:"gray.500",children:e}):e),t&&(0,n.jsx)(Z.Heading,{size:"lg",children:t}),(0,n.jsx)(X.Box,{flex:1,children:r}),i&&(0,n.jsx)(eq,{})]}),eq=()=>(0,n.jsx)(ee.Stack,{mt:12,align:"center",children:(0,n.jsxs)(V.Text,{color:"gray.300",fontSize:"xs",sx:{a:{color:"gray.400",_hover:{textDecoration:"underline"}}},children:[(0,n.jsx)(J.Link,{href:eE.TERMS_OF_SERVICE_URL,children:"Terms of Service"})," •"," ",(0,n.jsx)(J.Link,{href:eE.PRIVACY_POLICY_URL,children:"Privacy Policy"})]})});class eO extends K.Component{constructor(e){super(e),this.state={hasError:!1,errMessage:"",shouldMountChildren:!0}}static getDerivedStateFromError(e){return{hasError:!0,errMessage:e.message,shouldMountChildren:!1}}render(){return(0,n.jsxs)(n.Fragment,{children:[this.state.hasError&&(0,n.jsx)(ez,{errMessage:""===this.state.errMessage?void 0:this.state.errMessage}),this.state.shouldMountChildren&&this.props.children]})}}let ez=({errMessage:e,...t})=>(0,n.jsx)(H.Flex,{"data-error-component":!0,w:"100vw",h:"100vh",overflow:"hidden",bg:"gray.50",zIndex:99999,...t,children:(0,n.jsx)(H.Flex,{justifyContent:"center",alignItems:"center",flex:1,p:[4,16],left:"50%",top:"50%",children:(0,n.jsx)(ej,{lede:"",title:"Uh oh.",stackProps:{shadow:"lg-dark",position:"relative"},children:(0,n.jsx)(V.Text,{children:e||"An unexpected error occurred."})})})});var eA=e.i(763896),eL=e.i(982725),eW=e.i(304521),e$=e.i(833200),eI=e.i(25747);let eB=({children:e})=>{let[t]=(0,b.useState)(()=>{let e,t=eL.default.get("gamma_visitor_id")||"unknown";return{anonymousUser:{id:t,displayName:t?(0,e$.generateName)(t):""},isUserLoading:!1,userStatus:"loggedOut",isGammaAdminUser:!1,isGammaOrgUser:!1,color:{value:e=t?(0,e$.generateColor)(t):"#cccccc",isDark:(0,eW.default)(e).isDark()},setCurrentWorkspaceId:()=>{}}});return(0,n.jsx)(eI.UserContext.Provider,{value:t,children:e})},eM=(0,G.getStore)(),eF=(0,A.extendTheme)(L.themeWithRebrand,{styles:{global:{"*, *::before, &::after":{borderColor:"revert-layer"},".ProseMirror":{outline:"0 none"}}}}),eD=({children:e})=>{console.log("🚀 GammaSite sites wrapper rendered"),(0,ev.useSSRInitialize)();let t=(0,b.useMemo)(()=>new I.ApolloClient({cache:new B.InMemoryCache,devtools:{enabled:!1},link:D,ssrMode:!0}),[]),r=(0,eA.useCreateTooltipPortal)();return(0,n.jsx)($.Provider,{store:eM,children:(0,n.jsx)(Q,{children:(0,n.jsxs)(z,{theme:eF,resetCSS:!1,children:[(0,n.jsx)(U,{}),(0,n.jsx)(eO,{children:(0,n.jsx)(u,{client:t,children:(0,n.jsx)(eB,{children:(0,n.jsx)(eA.TooltipPortalRefProvider,{value:r,children:e})})})})]})})})};e.s(["GammaSiteProviders",0,({children:e})=>(0,n.jsxs)(eD,{children:[(0,n.jsxs)(W.default,{children:[(0,n.jsx)("meta",{content:"Gamma",property:"og:title"},"og:title"),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900",rel:"stylesheet"})]}),e]})],584770)},606344,(e,t,r)=>{Array.prototype.findLast||Object.defineProperty(Array.prototype,"findLast",{value:function(e,t){if(this==null)throw TypeError('"this" is null or not defined');let r=Object(this),o=r.length>>>0;if("function"!=typeof e)throw TypeError("predicate must be a function");for(let n=o-1;n>=0;n--){let o=r[n];if(e.call(t,o,n,r))return o}},writable:!0,configurable:!0}),Array.prototype.findLastIndex||Object.defineProperty(Array.prototype,"findLastIndex",{value:function(e,t){if(this==null)throw TypeError('"this" is null or not defined');let r=Object(this),o=r.length>>>0;if("function"!=typeof e)throw TypeError("predicate must be a function");for(let n=o-1;n>=0;n--){let o=r[n];if(e.call(t,o,n,r))return n}return -1},writable:!0,configurable:!0})},545904,(e,t,r)=>{e.e,function(t){"use strict";let r,o,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol:e=>`Symbol(${e})`;function i(){}let a="u">typeof self?self:"u">typeof window?window:e.g;function l(e){return"object"==typeof e&&null!==e||"function"==typeof e}let s=Promise,u=Promise.prototype.then,d=Promise.resolve.bind(s),c=Promise.reject.bind(s);function h(e){return new s(e)}function b(e,t,r){return u.call(e,t,r)}function f(e,t,r){b(b(e,t,r),void 0,i)}function p(e,t){f(e,void 0,t)}function m(e){b(e,void 0,i)}let _=(()=>{let e=a&&a.queueMicrotask;if("function"==typeof e)return e;let t=d(void 0);return e=>b(t,e)})();function y(e,t,r){if("function"!=typeof e)throw TypeError("Argument is not a function");return Function.prototype.apply.call(e,t,r)}function g(e,t,r){try{var o;return o=y(e,t,r),d(o)}catch(e){return c(e)}}class v{constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0}get length(){return this._size}push(e){let t=this._back,r=t;16383===t._elements.length&&(r={_elements:[],_next:void 0}),t._elements.push(e),r!==t&&(this._back=r,t._next=r),++this._size}shift(){let e=this._front,t=e,r=this._cursor,o=r+1,n=e._elements,i=n[r];return 16384===o&&(t=e._next,o=0),--this._size,this._cursor=o,e!==t&&(this._front=t),n[r]=void 0,i}forEach(e){let t=this._cursor,r=this._front,o=r._elements;for(;!(t===o.length&&void 0===r._next||t===o.length&&(o=(r=r._next)._elements,t=0,0===o.length));)e(o[t]),++t}peek(){let e=this._front,t=this._cursor;return e._elements[t]}}function w(e,t){var r,o;e._ownerReadableStream=t,t._reader=e,"readable"===t._state?k(e):"closed"===t._state?(k(e),P(e)):(r=e,o=t._storedError,k(r),C(r,o))}function S(e,t){return tU(e._ownerReadableStream,t)}function R(e){var t,r;"readable"===e._ownerReadableStream._state?C(e,TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):(t=e,r=TypeError("Reader was released and can no longer be used to monitor the stream's closedness"),k(t),C(t,r)),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0}function T(e){return TypeError("Cannot "+e+" a stream using a released reader")}function k(e){e._closedPromise=h((t,r)=>{e._closedPromise_resolve=t,e._closedPromise_reject=r})}function C(e,t){void 0!==e._closedPromise_reject&&(m(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0)}function P(e){void 0!==e._closedPromise_resolve&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0)}let E=n("[[AbortSteps]]"),x=n("[[ErrorSteps]]"),j=n("[[CancelSteps]]"),q=n("[[PullSteps]]"),O=Number.isFinite||function(e){return"number"==typeof e&&isFinite(e)},z=Math.trunc||function(e){return e<0?Math.ceil(e):Math.floor(e)};function A(e,t){var r;if(void 0!==e&&"object"!=typeof(r=e)&&"function"!=typeof r)throw TypeError(`${t} is not an object.`)}function L(e,t){if("function"!=typeof e)throw TypeError(`${t} is not a function.`)}function W(e,t){if(("object"!=typeof e||null===e)&&"function"!=typeof e)throw TypeError(`${t} is not an object.`)}function $(e,t,r){if(void 0===e)throw TypeError(`Parameter ${t} is required in '${r}'.`)}function I(e,t,r){if(void 0===e)throw TypeError(`${t} is required in '${r}'.`)}function B(e){return Number(e)}function M(e,t){var r,o;let n=Number.MAX_SAFE_INTEGER,i=Number(e);if(!O(i=0===(r=i)?0:r))throw TypeError(`${t} is not a finite number`);if((i=0===(o=z(i))?0:o)<0||i>n)throw TypeError(`${t} is outside the accepted range of 0 to ${n}, inclusive`);return O(i)&&0!==i?i:0}function F(e,t){if(!tD(e))throw TypeError(`${t} is not a ReadableStream.`)}function D(e){return new G(e)}function N(e,t){e._reader._readRequests.push(t)}function U(e,t,r){let o=e._reader._readRequests.shift();r?o._closeSteps():o._chunkSteps(t)}function Y(e){return e._reader._readRequests.length}function Q(e){let t=e._reader;return void 0!==t&&!!H(t)}class G{constructor(e){if($(e,1,"ReadableStreamDefaultReader"),F(e,"First parameter"),tN(e))throw TypeError("This stream has already been locked for exclusive reading by another reader");w(this,e),this._readRequests=new v}get closed(){return H(this)?this._closedPromise:c(K("closed"))}cancel(e){return H(this)?void 0===this._ownerReadableStream?c(T("cancel")):S(this,e):c(K("cancel"))}read(){let e,t;if(!H(this))return c(K("read"));if(void 0===this._ownerReadableStream)return c(T("read from"));let r=h((r,o)=>{e=r,t=o});return V(this,{_chunkSteps:t=>e({value:t,done:!1}),_closeSteps:()=>e({value:void 0,done:!0}),_errorSteps:e=>t(e)}),r}releaseLock(){if(!H(this))throw K("releaseLock");if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");R(this)}}}function H(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readRequests")&&e instanceof G}function V(e,t){let r=e._ownerReadableStream;r._disturbed=!0,"closed"===r._state?t._closeSteps():"errored"===r._state?t._errorSteps(r._storedError):r._readableStreamController[q](t)}function K(e){return TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`)}Object.defineProperties(G.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(G.prototype,n.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0}),"symbol"==typeof n.asyncIterator&&Object.defineProperty(r={[n.asyncIterator](){return this}},n.asyncIterator,{enumerable:!1});class X{constructor(e,t){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=e,this._preventCancel=t}next(){let e=()=>this._nextSteps();return this._ongoingPromise=this._ongoingPromise?b(this._ongoingPromise,e,e):e(),this._ongoingPromise}return(e){let t=()=>this._returnSteps(e);return this._ongoingPromise?b(this._ongoingPromise,t,t):t()}_nextSteps(){let e,t;if(this._isFinished)return Promise.resolve({value:void 0,done:!0});let r=this._reader;if(void 0===r._ownerReadableStream)return c(T("iterate"));let o=h((r,o)=>{e=r,t=o});return V(r,{_chunkSteps:t=>{this._ongoingPromise=void 0,_(()=>e({value:t,done:!1}))},_closeSteps:()=>{this._ongoingPromise=void 0,this._isFinished=!0,R(r),e({value:void 0,done:!0})},_errorSteps:e=>{this._ongoingPromise=void 0,this._isFinished=!0,R(r),t(e)}}),o}_returnSteps(e){if(this._isFinished)return Promise.resolve({value:e,done:!0});this._isFinished=!0;let t=this._reader;if(void 0===t._ownerReadableStream)return c(T("finish iterating"));if(!this._preventCancel){let r=S(t,e);return R(t),b(r,()=>({value:e,done:!0}),void 0)}return R(t),d({value:e,done:!0})}}let Z={next(){return J(this)?this._asyncIteratorImpl.next():c(ee("next"))},return(e){return J(this)?this._asyncIteratorImpl.return(e):c(ee("return"))}};function J(e){if(!l(e)||!Object.prototype.hasOwnProperty.call(e,"_asyncIteratorImpl"))return!1;try{return e._asyncIteratorImpl instanceof X}catch(e){return!1}}function ee(e){return TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`)}void 0!==r&&Object.setPrototypeOf(Z,r);let et=Number.isNaN||function(e){return e!=e};function er(e){return e.slice()}function eo(e,t,r,o,n){new Uint8Array(e).set(new Uint8Array(r,o,n),t)}function en(e,t,r){if(e.slice)return e.slice(t,r);let o=r-t,n=new ArrayBuffer(o);return eo(n,0,e,t,o),n}function ei(e){return new Uint8Array(en(e.buffer,e.byteOffset,e.byteOffset+e.byteLength))}function ea(e){let t=e._queue.shift();return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value}function el(e,t,r){if("number"!=typeof r||et(r)||r<0||r===1/0)throw RangeError("Size must be a finite, non-NaN, non-negative number.");e._queue.push({value:t,size:r}),e._queueTotalSize+=r}function es(e){e._queue=new v,e._queueTotalSize=0}class eu{constructor(){throw TypeError("Illegal constructor")}get view(){if(!eh(this))throw eA("view");return this._view}respond(e){if(!eh(this))throw eA("respond");if($(e,1,"respond"),e=M(e,"First parameter"),void 0===this._associatedReadableByteStreamController)throw TypeError("This BYOB request has been invalidated");this._view.buffer,eq(this._associatedReadableByteStreamController,e)}respondWithNewView(e){if(!eh(this))throw eA("respondWithNewView");if($(e,1,"respondWithNewView"),!ArrayBuffer.isView(e))throw TypeError("You can only respond with array buffer views");if(void 0===this._associatedReadableByteStreamController)throw TypeError("This BYOB request has been invalidated");e.buffer,eO(this._associatedReadableByteStreamController,e)}}Object.defineProperties(eu.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(eu.prototype,n.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0});class ed{constructor(){throw TypeError("Illegal constructor")}get byobRequest(){if(!ec(this))throw eL("byobRequest");return ex(this)}get desiredSize(){if(!ec(this))throw eL("desiredSize");return ej(this)}close(){if(!ec(this))throw eL("close");if(this._closeRequested)throw TypeError("The stream has already been closed; do not close it again!");let e=this._controlledReadableByteStream._state;if("readable"!==e)throw TypeError(`The stream (in ${e} state) is not in the readable state and cannot be closed`);eC(this)}enqueue(e){if(!ec(this))throw eL("enqueue");if($(e,1,"enqueue"),!ArrayBuffer.isView(e))throw TypeError("chunk must be an array buffer view");if(0===e.byteLength)throw TypeError("chunk must have non-zero byteLength");if(0===e.buffer.byteLength)throw TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw TypeError("stream is closed or draining");let t=this._controlledReadableByteStream._state;if("readable"!==t)throw TypeError(`The stream (in ${t} state) is not in the readable state and cannot be enqueued to`);eP(this,e)}error(e){if(!ec(this))throw eL("error");eE(this,e)}[j](e){ef(this),es(this);let t=this._cancelAlgorithm(e);return ek(this),t}[q](e){let t=this._controlledReadableByteStream;if(this._queueTotalSize>0){let t=this._queue.shift();this._queueTotalSize-=t.byteLength,ev(this);let r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);return void e._chunkSteps(r)}let r=this._autoAllocateChunkSize;if(void 0!==r){let t;try{t=new ArrayBuffer(r)}catch(t){return void e._errorSteps(t)}let o={buffer:t,bufferByteLength:r,byteOffset:0,byteLength:r,bytesFilled:0,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(o)}N(t,e),eb(this)}}function ec(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableByteStream")&&e instanceof ed}function eh(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")&&e instanceof eu}function eb(e){let t;if("readable"===(t=e._controlledReadableByteStream)._state&&!e._closeRequested&&e._started&&(Q(t)&&Y(t)>0||eI(t)&&e$(t)>0||ej(e)>0)){if(e._pulling)return void(e._pullAgain=!0);e._pulling=!0,f(e._pullAlgorithm(),()=>{e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,eb(e))},t=>{eE(e,t)})}}function ef(e){ew(e),e._pendingPullIntos=new v}function ep(e,t){var r;let o,n=!1;"closed"===e._state&&(n=!0);let i=em(t);"default"===t.readerType?U(e,i,n):(r=n,o=e._reader._readIntoRequests.shift(),r?o._closeSteps(i):o._chunkSteps(i))}function em(e){let t=e.bytesFilled,r=e.elementSize;return new e.viewConstructor(e.buffer,e.byteOffset,t/r)}function e_(e,t,r,o){e._queue.push({buffer:t,byteOffset:r,byteLength:o}),e._queueTotalSize+=o}function ey(e,t){let r=t.elementSize,o=t.bytesFilled-t.bytesFilled%r,n=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),i=t.bytesFilled+n,a=i-i%r,l=n,s=!1;a>o&&(l=a-t.bytesFilled,s=!0);let u=e._queue;for(;l>0;){let r=u.peek(),o=Math.min(l,r.byteLength),n=t.byteOffset+t.bytesFilled;eo(t.buffer,n,r.buffer,r.byteOffset,o),r.byteLength===o?u.shift():(r.byteOffset+=o,r.byteLength-=o),e._queueTotalSize-=o,eg(e,o,t),l-=o}return s}function eg(e,t,r){r.bytesFilled+=t}function ev(e){0===e._queueTotalSize&&e._closeRequested?(ek(e),tY(e._controlledReadableByteStream)):eb(e)}function ew(e){null!==e._byobRequest&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=null,e._byobRequest=null)}function eS(e){for(;e._pendingPullIntos.length>0;){if(0===e._queueTotalSize)return;let t=e._pendingPullIntos.peek();ey(e,t)&&(eT(e),ep(e._controlledReadableByteStream,t))}}function eR(e,t){let r=e._pendingPullIntos.peek();ew(e),"closed"===e._controlledReadableByteStream._state?function(e){let t=e._controlledReadableByteStream;if(eI(t))for(;e$(t)>0;)ep(t,eT(e))}(e):function(e,t,r){if(eg(0,t,r),r.bytesFilled<r.elementSize)return;eT(e);let o=r.bytesFilled%r.elementSize;if(o>0){let t=r.byteOffset+r.bytesFilled,n=en(r.buffer,t-o,t);e_(e,n,0,n.byteLength)}r.bytesFilled-=o,ep(e._controlledReadableByteStream,r),eS(e)}(e,t,r),eb(e)}function eT(e){return e._pendingPullIntos.shift()}function ek(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0}function eC(e){let t=e._controlledReadableByteStream;if(!e._closeRequested&&"readable"===t._state)if(e._queueTotalSize>0)e._closeRequested=!0;else{if(e._pendingPullIntos.length>0&&e._pendingPullIntos.peek().bytesFilled>0){let t=TypeError("Insufficient bytes to fill elements in the given buffer");throw eE(e,t),t}ek(e),tY(t)}}function eP(e,t){let r=e._controlledReadableByteStream;if(e._closeRequested||"readable"!==r._state)return;let o=t.buffer,n=t.byteOffset,i=t.byteLength;if(e._pendingPullIntos.length>0){let t=e._pendingPullIntos.peek();t.buffer,t.buffer=t.buffer}(ew(e),Q(r))?0===Y(r)?e_(e,o,n,i):(e._pendingPullIntos.length>0&&eT(e),U(r,new Uint8Array(o,n,i),!1)):eI(r)?(e_(e,o,n,i),eS(e)):e_(e,o,n,i),eb(e)}function eE(e,t){let r=e._controlledReadableByteStream;"readable"===r._state&&(ef(e),es(e),ek(e),tQ(r,t))}function ex(e){if(null===e._byobRequest&&e._pendingPullIntos.length>0){let t=e._pendingPullIntos.peek(),r=new Uint8Array(t.buffer,t.byteOffset+t.bytesFilled,t.byteLength-t.bytesFilled),o=Object.create(eu.prototype);o._associatedReadableByteStreamController=e,o._view=r,e._byobRequest=o}return e._byobRequest}function ej(e){let t=e._controlledReadableByteStream._state;return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function eq(e,t){let r=e._pendingPullIntos.peek();if("closed"===e._controlledReadableByteStream._state){if(0!==t)throw TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else{if(0===t)throw TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(r.bytesFilled+t>r.byteLength)throw RangeError("bytesWritten out of range")}r.buffer=r.buffer,eR(e,t)}function eO(e,t){let r=e._pendingPullIntos.peek();if("closed"===e._controlledReadableByteStream._state){if(0!==t.byteLength)throw TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(0===t.byteLength)throw TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw RangeError("The region specified by view does not match byobRequest");if(r.bufferByteLength!==t.buffer.byteLength)throw RangeError("The buffer of view has different capacity than byobRequest");if(r.bytesFilled+t.byteLength>r.byteLength)throw RangeError("The region specified by view is larger than byobRequest");let o=t.byteLength;r.buffer=t.buffer,eR(e,o)}function ez(e,t,r,o,n,i,a){t._controlledReadableByteStream=e,t._pullAgain=!1,t._pulling=!1,t._byobRequest=null,t._queue=t._queueTotalSize=void 0,es(t),t._closeRequested=!1,t._started=!1,t._strategyHWM=i,t._pullAlgorithm=o,t._cancelAlgorithm=n,t._autoAllocateChunkSize=a,t._pendingPullIntos=new v,e._readableStreamController=t,f(d(r()),()=>{t._started=!0,eb(t)},e=>{eE(t,e)})}function eA(e){return TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`)}function eL(e){return TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`)}function eW(e,t){e._reader._readIntoRequests.push(t)}function e$(e){return e._reader._readIntoRequests.length}function eI(e){let t=e._reader;return void 0!==t&&!!eM(t)}Object.defineProperties(ed.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(ed.prototype,n.toStringTag,{value:"ReadableByteStreamController",configurable:!0});class eB{constructor(e){if($(e,1,"ReadableStreamBYOBReader"),F(e,"First parameter"),tN(e))throw TypeError("This stream has already been locked for exclusive reading by another reader");if(!ec(e._readableStreamController))throw TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");w(this,e),this._readIntoRequests=new v}get closed(){return eM(this)?this._closedPromise:c(eD("closed"))}cancel(e){return eM(this)?void 0===this._ownerReadableStream?c(T("cancel")):S(this,e):c(eD("cancel"))}read(e){let t,r;if(!eM(this))return c(eD("read"));if(!ArrayBuffer.isView(e))return c(TypeError("view must be an array buffer view"));if(0===e.byteLength)return c(TypeError("view must have non-zero byteLength"));if(0===e.buffer.byteLength)return c(TypeError("view's buffer must have non-zero byteLength"));if(e.buffer,void 0===this._ownerReadableStream)return c(T("read from"));let o=h((e,o)=>{t=e,r=o});return eF(this,e,{_chunkSteps:e=>t({value:e,done:!1}),_closeSteps:e=>t({value:e,done:!0}),_errorSteps:e=>r(e)}),o}releaseLock(){if(!eM(this))throw eD("releaseLock");if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");R(this)}}}function eM(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")&&e instanceof eB}function eF(e,t,r){let o=e._ownerReadableStream;o._disturbed=!0,"errored"===o._state?r._errorSteps(o._storedError):function(e,t,r){let o=e._controlledReadableByteStream,n=1;t.constructor!==DataView&&(n=t.constructor.BYTES_PER_ELEMENT);let i=t.constructor,a=t.buffer,l={buffer:a,bufferByteLength:a.byteLength,byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:n,viewConstructor:i,readerType:"byob"};if(e._pendingPullIntos.length>0)return e._pendingPullIntos.push(l),eW(o,r);if("closed"!==o._state){if(e._queueTotalSize>0){if(ey(e,l)){let t=em(l);return ev(e),r._chunkSteps(t)}if(e._closeRequested){let t=TypeError("Insufficient bytes to fill elements in the given buffer");return eE(e,t),r._errorSteps(t)}}e._pendingPullIntos.push(l),eW(o,r),eb(e)}else{let e=new i(l.buffer,l.byteOffset,0);r._closeSteps(e)}}(o._readableStreamController,t,r)}function eD(e){return TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`)}function eN(e,t){let{highWaterMark:r}=e;if(void 0===r)return t;if(et(r)||r<0)throw RangeError("Invalid highWaterMark");return r}function eU(e){let{size:t}=e;return t||(()=>1)}function eY(e,t){var r;A(e,t);let o=null==e?void 0:e.highWaterMark,n=null==e?void 0:e.size;return{highWaterMark:void 0===o?void 0:B(o),size:void 0===n?void 0:(L(r=n,`${t} has member 'size' that`),e=>B(r(e)))}}function eQ(e,t){if(!eK(e))throw TypeError(`${t} is not a WritableStream.`)}Object.defineProperties(eB.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(eB.prototype,n.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0});let eG="function"==typeof AbortController;class eH{constructor(e={},t={}){void 0===e?e=null:W(e,"First parameter");const r=eY(t,"Second parameter"),o=function(e,t){A(e,t);let r=null==e?void 0:e.abort,o=null==e?void 0:e.close,n=null==e?void 0:e.start,i=null==e?void 0:e.type,a=null==e?void 0:e.write;return{abort:void 0===r?void 0:(L(r,`${t} has member 'abort' that`),t=>g(r,e,[t])),close:void 0===o?void 0:(L(o,`${t} has member 'close' that`),()=>g(o,e,[])),start:void 0===n?void 0:(L(n,`${t} has member 'start' that`),t=>y(n,e,[t])),write:void 0===a?void 0:(L(a,`${t} has member 'write' that`),(t,r)=>g(a,e,[t,r])),type:i}}(e,"First parameter");if(eV(this),void 0!==o.type)throw RangeError("Invalid type is specified");const n=eU(r);!function(e,t,r,o){let n=Object.create(to.prototype),i=()=>{},a=()=>d(void 0),l=()=>d(void 0),s=()=>d(void 0);void 0!==t.start&&(i=()=>t.start(n)),void 0!==t.write&&(a=e=>t.write(e,n)),void 0!==t.close&&(l=()=>t.close()),void 0!==t.abort&&(s=e=>t.abort(e)),ti(e,n,i,a,l,s,r,o)}(this,o,eN(r,1),n)}get locked(){if(!eK(this))throw tc("locked");return eX(this)}abort(e){return eK(this)?eX(this)?c(TypeError("Cannot abort a stream that already has a writer")):eZ(this,e):c(tc("abort"))}close(){return eK(this)?eX(this)?c(TypeError("Cannot close a stream that already has a writer")):e5(this)?c(TypeError("Cannot close an already-closing stream")):eJ(this):c(tc("close"))}getWriter(){var e;if(!eK(this))throw tc("getWriter");return e=this,new e4(e)}}function eV(e){e._state="writable",e._storedError=void 0,e._writer=void 0,e._writableStreamController=void 0,e._writeRequests=new v,e._inFlightWriteRequest=void 0,e._closeRequest=void 0,e._inFlightCloseRequest=void 0,e._pendingAbortRequest=void 0,e._backpressure=!1}function eK(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")&&e instanceof eH}function eX(e){return void 0!==e._writer}function eZ(e,t){var r;if("closed"===e._state||"errored"===e._state)return d(void 0);e._writableStreamController._abortReason=t,null==(r=e._writableStreamController._abortController)||r.abort();let o=e._state;if("closed"===o||"errored"===o)return d(void 0);if(void 0!==e._pendingAbortRequest)return e._pendingAbortRequest._promise;let n=!1;"erroring"===o&&(n=!0,t=void 0);let i=h((r,o)=>{e._pendingAbortRequest={_promise:void 0,_resolve:r,_reject:o,_reason:t,_wasAlreadyErroring:n}});return e._pendingAbortRequest._promise=i,n||e1(e,t),i}function eJ(e){var t;let r=e._state;if("closed"===r||"errored"===r)return c(TypeError(`The stream (in ${r} state) is not in the writable state and cannot be closed`));let o=h((t,r)=>{e._closeRequest={_resolve:t,_reject:r}}),n=e._writer;return void 0!==n&&e._backpressure&&"writable"===r&&tw(n),el(t=e._writableStreamController,tr,0),ts(t),o}function e0(e,t){"writable"!==e._state?e8(e):e1(e,t)}function e1(e,t){let r=e._writableStreamController;e._state="erroring",e._storedError=t;let o=e._writer;void 0!==o&&e9(o,t),void 0===e._inFlightWriteRequest&&void 0===e._inFlightCloseRequest&&r._started&&e8(e)}function e8(e){e._state="errored",e._writableStreamController[x]();let t=e._storedError;if(e._writeRequests.forEach(e=>{e._reject(t)}),e._writeRequests=new v,void 0===e._pendingAbortRequest)return void e2(e);let r=e._pendingAbortRequest;(e._pendingAbortRequest=void 0,r._wasAlreadyErroring)?(r._reject(t),e2(e)):f(e._writableStreamController[E](r._reason),()=>{r._resolve(),e2(e)},t=>{r._reject(t),e2(e)})}function e5(e){return void 0!==e._closeRequest||void 0!==e._inFlightCloseRequest}function e2(e){void 0!==e._closeRequest&&(e._closeRequest._reject(e._storedError),e._closeRequest=void 0);let t=e._writer;void 0!==t&&tm(t,e._storedError)}function e6(e,t){let r=e._writer;void 0!==r&&t!==e._backpressure&&(t?ty(r):tw(r)),e._backpressure=t}Object.defineProperties(eH.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(eH.prototype,n.toStringTag,{value:"WritableStream",configurable:!0});class e4{constructor(e){if($(e,1,"WritableStreamDefaultWriter"),eQ(e,"First parameter"),eX(e))throw TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=e,e._writer=this;const t=e._state;if("writable"===t)!e5(e)&&e._backpressure?ty(this):function(e){ty(e),tw(e)}(this),tp(this);else if("erroring"===t)tg(this,e._storedError),tp(this);else if("closed"===t)(function(e){ty(e),tw(e)})(this),tp(this),t_(this);else{const t=e._storedError;tg(this,t),function(e,t){tp(e),tm(e,t)}(this,t)}}get closed(){return e7(this)?this._closedPromise:c(tb("closed"))}get desiredSize(){let e,t;if(!e7(this))throw tb("desiredSize");if(void 0===this._ownerWritableStream)throw tf("desiredSize");return"errored"===(t=(e=this._ownerWritableStream)._state)||"erroring"===t?null:"closed"===t?0:tl(e._writableStreamController)}get ready(){return e7(this)?this._readyPromise:c(tb("ready"))}abort(e){return e7(this)?void 0===this._ownerWritableStream?c(tf("abort")):eZ(this._ownerWritableStream,e):c(tb("abort"))}close(){if(!e7(this))return c(tb("close"));let e=this._ownerWritableStream;return void 0===e?c(tf("close")):e5(e)?c(TypeError("Cannot close an already-closing stream")):e3(this)}releaseLock(){if(!e7(this))throw tb("releaseLock");void 0!==this._ownerWritableStream&&te(this)}write(e){return e7(this)?void 0===this._ownerWritableStream?c(tf("write to")):tt(this,e):c(tb("write"))}}function e7(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")&&e instanceof e4}function e3(e){return eJ(e._ownerWritableStream)}function e9(e,t){"pending"===e._readyPromiseState?tv(e,t):tg(e,t)}function te(e){var t,r,o,n;let i=e._ownerWritableStream,a=TypeError("Writer was released and can no longer be used to monitor the stream's closedness");e9(e,a),t=e,r=a,"pending"===t._closedPromiseState?tm(t,r):(o=t,n=r,tp(o),tm(o,n)),i._writer=void 0,e._ownerWritableStream=void 0}function tt(e,t){let r=e._ownerWritableStream,o=r._writableStreamController,n=function(e,t){try{return e._strategySizeAlgorithm(t)}catch(t){return tu(e,t),1}}(o,t);if(r!==e._ownerWritableStream)return c(tf("write to"));let i=r._state;if("errored"===i)return c(r._storedError);if(e5(r)||"closed"===i)return c(TypeError("The stream is closing or closed and cannot be written to"));if("erroring"===i)return c(r._storedError);let a=h((e,t)=>{r._writeRequests.push({_resolve:e,_reject:t})});return function(e,t,r){try{el(e,t,r)}catch(t){return void tu(e,t)}let o=e._controlledWritableStream;e5(o)||"writable"!==o._state||e6(o,0>=tl(e)),ts(e)}(o,t,n),a}Object.defineProperties(e4.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(e4.prototype,n.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0});let tr={};class to{constructor(){throw TypeError("Illegal constructor")}get abortReason(){if(!tn(this))throw th("abortReason");return this._abortReason}get signal(){if(!tn(this))throw th("signal");if(void 0===this._abortController)throw TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(e){if(!tn(this))throw th("error");"writable"===this._controlledWritableStream._state&&td(this,e)}[E](e){let t=this._abortAlgorithm(e);return ta(this),t}[x](){es(this)}}function tn(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledWritableStream")&&e instanceof to}function ti(e,t,r,o,n,i,a,l){t._controlledWritableStream=e,e._writableStreamController=t,t._queue=void 0,t._queueTotalSize=void 0,es(t),t._abortReason=void 0,t._abortController=function(){if(eG)return new AbortController}(),t._started=!1,t._strategySizeAlgorithm=l,t._strategyHWM=a,t._writeAlgorithm=o,t._closeAlgorithm=n,t._abortAlgorithm=i,e6(e,0>=tl(t)),f(d(r()),()=>{t._started=!0,ts(t)},r=>{t._started=!0,e0(e,r)})}function ta(e){e._writeAlgorithm=void 0,e._closeAlgorithm=void 0,e._abortAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function tl(e){return e._strategyHWM-e._queueTotalSize}function ts(e){let t,r,o,n=e._controlledWritableStream;if(!e._started||void 0!==n._inFlightWriteRequest)return;if("erroring"===n._state)return void e8(n);if(0===e._queue.length)return;let i=e._queue.peek().value;i===tr?((t=e._controlledWritableStream)._inFlightCloseRequest=t._closeRequest,t._closeRequest=void 0,ea(e),r=e._closeAlgorithm(),ta(e),f(r,()=>{let e;t._inFlightCloseRequest._resolve(void 0),t._inFlightCloseRequest=void 0,"erroring"===t._state&&(t._storedError=void 0,void 0!==t._pendingAbortRequest&&(t._pendingAbortRequest._resolve(),t._pendingAbortRequest=void 0)),t._state="closed",void 0!==(e=t._writer)&&t_(e)},e=>{t._inFlightCloseRequest._reject(e),t._inFlightCloseRequest=void 0,void 0!==t._pendingAbortRequest&&(t._pendingAbortRequest._reject(e),t._pendingAbortRequest=void 0),e0(t,e)})):((o=e._controlledWritableStream)._inFlightWriteRequest=o._writeRequests.shift(),f(e._writeAlgorithm(i),()=>{o._inFlightWriteRequest._resolve(void 0),o._inFlightWriteRequest=void 0;let t=o._state;ea(e),e5(o)||"writable"!==t||e6(o,0>=tl(e)),ts(e)},t=>{"writable"===o._state&&ta(e),o._inFlightWriteRequest._reject(t),o._inFlightWriteRequest=void 0,e0(o,t)}))}function tu(e,t){"writable"===e._controlledWritableStream._state&&td(e,t)}function td(e,t){let r=e._controlledWritableStream;ta(e),e1(r,t)}function tc(e){return TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`)}function th(e){return TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`)}function tb(e){return TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`)}function tf(e){return TypeError("Cannot "+e+" a stream using a released writer")}function tp(e){e._closedPromise=h((t,r)=>{e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending"})}function tm(e,t){void 0!==e._closedPromise_reject&&(m(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected")}function t_(e){void 0!==e._closedPromise_resolve&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved")}function ty(e){e._readyPromise=h((t,r)=>{e._readyPromise_resolve=t,e._readyPromise_reject=r}),e._readyPromiseState="pending"}function tg(e,t){ty(e),tv(e,t)}function tv(e,t){void 0!==e._readyPromise_reject&&(m(e._readyPromise),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected")}function tw(e){void 0!==e._readyPromise_resolve&&(e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled")}Object.defineProperties(to.prototype,{abortReason:{enumerable:!0},signal:{enumerable:!0},error:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(to.prototype,n.toStringTag,{value:"WritableStreamDefaultController",configurable:!0});let tS="u">typeof DOMException?DOMException:void 0,tR=!function(e){if("function"!=typeof e&&"object"!=typeof e)return!1;try{return new e,!0}catch(e){return!1}}(tS)?((o=function(e,t){this.message=e||"",this.name=t||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}).prototype=Object.create(Error.prototype),Object.defineProperty(o.prototype,"constructor",{value:o,writable:!0,configurable:!0}),o):tS;function tT(e,t,r,o,n,a){let l=D(e),s=new e4(t);e._disturbed=!0;let u=!1,_=d(void 0);return h((y,g)=>{var v,w;let S;if(void 0!==a){if(S=()=>{let r=new tR("Aborted","AbortError"),i=[];o||i.push(()=>"writable"===t._state?eZ(t,r):d(void 0)),n||i.push(()=>"readable"===e._state?tU(e,r):d(void 0)),C(()=>Promise.all(i.map(e=>e())),!0,r)},a.aborted)return void S();a.addEventListener("abort",S)}if(k(e,l._closedPromise,e=>{o?P(!0,e):C(()=>eZ(t,e),!0,e)}),k(t,s._closedPromise,t=>{n?P(!0,t):C(()=>tU(e,t),!0,t)}),v=l._closedPromise,w=()=>{r?P():C(()=>{let e,t;return t=(e=s._ownerWritableStream)._state,e5(e)||"closed"===t?d(void 0):"errored"===t?c(e._storedError):e3(s)})},"closed"===e._state?w():f(v,w),e5(t)||"closed"===t._state){let t=TypeError("the destination writable stream closed before all data could be piped to it");n?P(!0,t):C(()=>tU(e,t),!0,t)}function T(){let e=_;return b(_,()=>e!==_?T():void 0)}function k(e,t,r){"errored"===e._state?r(e._storedError):p(t,r)}function C(e,r,o){function n(){f(e(),()=>E(r,o),e=>E(!0,e))}u||(u=!0,"writable"!==t._state||e5(t)?n():f(T(),n))}function P(e,r){u||(u=!0,"writable"!==t._state||e5(t)?E(e,r):f(T(),()=>E(e,r)))}function E(e,t){te(s),R(l),void 0!==a&&a.removeEventListener("abort",S),e?g(t):y(void 0)}m(h((e,t)=>{!function r(o){o?e():b(u?d(!0):b(s._readyPromise,()=>h((e,t)=>{V(l,{_chunkSteps:t=>{_=b(tt(s,t),void 0,i),e(!1)},_closeSteps:()=>e(!0),_errorSteps:t})})),r,t)}(!1)}))})}class tk{constructor(){throw TypeError("Illegal constructor")}get desiredSize(){if(!tC(this))throw tW("desiredSize");return tz(this)}close(){if(!tC(this))throw tW("close");if(!tA(this))throw TypeError("The stream is not in a state that permits close");tj(this)}enqueue(e){if(!tC(this))throw tW("enqueue");if(!tA(this))throw TypeError("The stream is not in a state that permits enqueue");return tq(this,e)}error(e){if(!tC(this))throw tW("error");tO(this,e)}[j](e){es(this);let t=this._cancelAlgorithm(e);return tx(this),t}[q](e){let t=this._controlledReadableStream;if(this._queue.length>0){let r=ea(this);this._closeRequested&&0===this._queue.length?(tx(this),tY(t)):tP(this),e._chunkSteps(r)}else N(t,e),tP(this)}}function tC(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableStream")&&e instanceof tk}function tP(e){if(tE(e)){if(e._pulling)return void(e._pullAgain=!0);e._pulling=!0,f(e._pullAlgorithm(),()=>{e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,tP(e))},t=>{tO(e,t)})}}function tE(e){let t=e._controlledReadableStream;return!!tA(e)&&!!e._started&&(!!(tN(t)&&Y(t)>0)||tz(e)>0)}function tx(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function tj(e){if(!tA(e))return;let t=e._controlledReadableStream;e._closeRequested=!0,0===e._queue.length&&(tx(e),tY(t))}function tq(e,t){if(!tA(e))return;let r=e._controlledReadableStream;if(tN(r)&&Y(r)>0)U(r,t,!1);else{let r;try{r=e._strategySizeAlgorithm(t)}catch(t){throw tO(e,t),t}try{el(e,t,r)}catch(t){throw tO(e,t),t}}tP(e)}function tO(e,t){let r=e._controlledReadableStream;"readable"===r._state&&(es(e),tx(e),tQ(r,t))}function tz(e){let t=e._controlledReadableStream._state;return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function tA(e){let t=e._controlledReadableStream._state;return!e._closeRequested&&"readable"===t}function tL(e,t,r,o,n,i,a){t._controlledReadableStream=e,t._queue=void 0,t._queueTotalSize=void 0,es(t),t._started=!1,t._closeRequested=!1,t._pullAgain=!1,t._pulling=!1,t._strategySizeAlgorithm=a,t._strategyHWM=i,t._pullAlgorithm=o,t._cancelAlgorithm=n,e._readableStreamController=t,f(d(r()),()=>{t._started=!0,tP(t)},e=>{tO(t,e)})}function tW(e){return TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`)}function t$(e,t){A(e,t);let r=null==e?void 0:e.preventAbort,o=null==e?void 0:e.preventCancel,n=null==e?void 0:e.preventClose,i=null==e?void 0:e.signal;return void 0!==i&&function(e,t){if(!function(e){if("object"!=typeof e||null===e)return!1;try{return"boolean"==typeof e.aborted}catch(e){return!1}}(e))throw TypeError(`${t} is not an AbortSignal.`)}(i,`${t} has member 'signal' that`),{preventAbort:!!r,preventCancel:!!o,preventClose:!!n,signal:i}}Object.defineProperties(tk.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(tk.prototype,n.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0});class tI{constructor(e={},t={}){void 0===e?e=null:W(e,"First parameter");const r=eY(t,"Second parameter"),o=function(e,t){A(e,t);let r=null==e?void 0:e.autoAllocateChunkSize,o=null==e?void 0:e.cancel,n=null==e?void 0:e.pull,i=null==e?void 0:e.start,a=null==e?void 0:e.type;return{autoAllocateChunkSize:void 0===r?void 0:M(r,`${t} has member 'autoAllocateChunkSize' that`),cancel:void 0===o?void 0:(L(o,`${t} has member 'cancel' that`),t=>g(o,e,[t])),pull:void 0===n?void 0:(L(n,`${t} has member 'pull' that`),t=>g(n,e,[t])),start:void 0===i?void 0:(L(i,`${t} has member 'start' that`),t=>y(i,e,[t])),type:void 0===a?void 0:function(e,t){if("bytes"!=(e=`${e}`))throw TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamType`);return e}(a,`${t} has member 'type' that`)}}(e,"First parameter");if(tF(this),"bytes"===o.type){if(void 0!==r.size)throw RangeError("The strategy for a byte stream cannot have a size function");!function(e,t,r){let o=Object.create(ed.prototype),n=()=>{},i=()=>d(void 0),a=()=>d(void 0);void 0!==t.start&&(n=()=>t.start(o)),void 0!==t.pull&&(i=()=>t.pull(o)),void 0!==t.cancel&&(a=e=>t.cancel(e));let l=t.autoAllocateChunkSize;if(0===l)throw TypeError("autoAllocateChunkSize must be greater than 0");ez(e,o,n,i,a,r,l)}(this,o,eN(r,0))}else{const e=eU(r);!function(e,t,r,o){let n=Object.create(tk.prototype),i=()=>{},a=()=>d(void 0),l=()=>d(void 0);void 0!==t.start&&(i=()=>t.start(n)),void 0!==t.pull&&(a=()=>t.pull(n)),void 0!==t.cancel&&(l=e=>t.cancel(e)),tL(e,n,i,a,l,r,o)}(this,o,eN(r,1),e)}}get locked(){if(!tD(this))throw tG("locked");return tN(this)}cancel(e){return tD(this)?tN(this)?c(TypeError("Cannot cancel a stream that already has a reader")):tU(this,e):c(tG("cancel"))}getReader(e){var t;let r;if(!tD(this))throw tG("getReader");return void 0===(A(e,t="First parameter"),{mode:void 0===(r=null==e?void 0:e.mode)?void 0:function(e,t){if("byob"!=(e=`${e}`))throw TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);return e}(r,`${t} has member 'mode' that`)}).mode?D(this):new eB(this)}pipeThrough(e,t={}){var r;let o,n;if(!tD(this))throw tG("pipeThrough");$(e,1,"pipeThrough");let i=(A(e,r="First parameter"),I(o=null==e?void 0:e.readable,"readable","ReadableWritablePair"),F(o,`${r} has member 'readable' that`),I(n=null==e?void 0:e.writable,"writable","ReadableWritablePair"),eQ(n,`${r} has member 'writable' that`),{readable:o,writable:n}),a=t$(t,"Second parameter");if(tN(this))throw TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(eX(i.writable))throw TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");return m(tT(this,i.writable,a.preventClose,a.preventAbort,a.preventCancel,a.signal)),i.readable}pipeTo(e,t={}){let r;if(!tD(this))return c(tG("pipeTo"));if(void 0===e)return c("Parameter 1 is required in 'pipeTo'.");if(!eK(e))return c(TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));try{r=t$(t,"Second parameter")}catch(e){return c(e)}return tN(this)?c(TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):eX(e)?c(TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):tT(this,e,r.preventClose,r.preventAbort,r.preventCancel,r.signal)}tee(){if(!tD(this))throw tG("tee");return er(ec(this._readableStreamController)?function(e){let t,r,o,n,i,a=D(e),l=!1,s=!1,u=!1,c=!1,b=!1,f=h(e=>{i=e});function m(e){p(e._closedPromise,t=>{e===a&&(eE(o._readableStreamController,t),eE(n._readableStreamController,t),c&&b||i(void 0))})}function y(){eM(a)&&(R(a),m(a=D(e))),V(a,{_chunkSteps:t=>{_(()=>{s=!1,u=!1;let r=t;if(!c&&!b)try{r=ei(t)}catch(t){return eE(o._readableStreamController,t),eE(n._readableStreamController,t),void i(tU(e,t))}c||eP(o._readableStreamController,t),b||eP(n._readableStreamController,r),l=!1,s?v():u&&w()})},_closeSteps:()=>{l=!1,c||eC(o._readableStreamController),b||eC(n._readableStreamController),o._readableStreamController._pendingPullIntos.length>0&&eq(o._readableStreamController,0),n._readableStreamController._pendingPullIntos.length>0&&eq(n._readableStreamController,0),c&&b||i(void 0)},_errorSteps:()=>{l=!1}})}function g(t,r){H(a)&&(R(a),m(a=new eB(e)));let d=r?n:o,h=r?o:n;eF(a,t,{_chunkSteps:t=>{_(()=>{s=!1,u=!1;let o=r?b:c;if(r?c:b)o||eO(d._readableStreamController,t);else{let r;try{r=ei(t)}catch(t){return eE(d._readableStreamController,t),eE(h._readableStreamController,t),void i(tU(e,t))}o||eO(d._readableStreamController,t),eP(h._readableStreamController,r)}l=!1,s?v():u&&w()})},_closeSteps:e=>{l=!1;let t=r?b:c,o=r?c:b;t||eC(d._readableStreamController),o||eC(h._readableStreamController),void 0!==e&&(t||eO(d._readableStreamController,e),!o&&h._readableStreamController._pendingPullIntos.length>0&&eq(h._readableStreamController,0)),t&&o||i(void 0)},_errorSteps:()=>{l=!1}})}function v(){if(l)return s=!0,d(void 0);l=!0;let e=ex(o._readableStreamController);return null===e?y():g(e._view,!1),d(void 0)}function w(){if(l)return u=!0,d(void 0);l=!0;let e=ex(n._readableStreamController);return null===e?y():g(e._view,!0),d(void 0)}function S(){}return o=tM(S,v,function(o){if(c=!0,t=o,b){let o=tU(e,er([t,r]));i(o)}return f}),n=tM(S,w,function(o){if(b=!0,r=o,c){let o=tU(e,er([t,r]));i(o)}return f}),m(a),[o,n]}(this):function(e){let t=D(e),r,o,n,i,a,l=!1,s=!1,u=!1,c=!1,b=h(e=>{a=e});function f(){return l?(s=!0,d(void 0)):(l=!0,V(t,{_chunkSteps:e=>{_(()=>{s=!1,u||tq(n._readableStreamController,e),c||tq(i._readableStreamController,e),l=!1,s&&f()})},_closeSteps:()=>{l=!1,u||tj(n._readableStreamController),c||tj(i._readableStreamController),u&&c||a(void 0)},_errorSteps:()=>{l=!1}}),d(void 0))}function m(){}return n=tB(m,f,function(t){if(u=!0,r=t,c){let t=tU(e,er([r,o]));a(t)}return b}),i=tB(m,f,function(t){if(c=!0,o=t,u){let t=tU(e,er([r,o]));a(t)}return b}),p(t._closedPromise,e=>{tO(n._readableStreamController,e),tO(i._readableStreamController,e),u&&c||a(void 0)}),[n,i]}(this))}values(e){var t;let r,o;if(!tD(this))throw tG("values");return t=(A(e,"First parameter"),{preventCancel:!!(null==e?void 0:e.preventCancel)}).preventCancel,r=new X(D(this),t),(o=Object.create(Z))._asyncIteratorImpl=r,o}}function tB(e,t,r,o=1,n=()=>1){let i=Object.create(tI.prototype);return tF(i),tL(i,Object.create(tk.prototype),e,t,r,o,n),i}function tM(e,t,r){let o=Object.create(tI.prototype);return tF(o),ez(o,Object.create(ed.prototype),e,t,r,0,void 0),o}function tF(e){e._state="readable",e._reader=void 0,e._storedError=void 0,e._disturbed=!1}function tD(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")&&e instanceof tI}function tN(e){return void 0!==e._reader}function tU(e,t){if(e._disturbed=!0,"closed"===e._state)return d(void 0);if("errored"===e._state)return c(e._storedError);tY(e);let r=e._reader;return void 0!==r&&eM(r)&&(r._readIntoRequests.forEach(e=>{e._closeSteps(void 0)}),r._readIntoRequests=new v),b(e._readableStreamController[j](t),i,void 0)}function tY(e){e._state="closed";let t=e._reader;void 0!==t&&(P(t),H(t)&&(t._readRequests.forEach(e=>{e._closeSteps()}),t._readRequests=new v))}function tQ(e,t){e._state="errored",e._storedError=t;let r=e._reader;void 0!==r&&(C(r,t),H(r)?(r._readRequests.forEach(e=>{e._errorSteps(t)}),r._readRequests=new v):(r._readIntoRequests.forEach(e=>{e._errorSteps(t)}),r._readIntoRequests=new v))}function tG(e){return TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`)}function tH(e,t){A(e,t);let r=null==e?void 0:e.highWaterMark;return I(r,"highWaterMark","QueuingStrategyInit"),{highWaterMark:B(r)}}Object.defineProperties(tI.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(tI.prototype,n.toStringTag,{value:"ReadableStream",configurable:!0}),"symbol"==typeof n.asyncIterator&&Object.defineProperty(tI.prototype,n.asyncIterator,{value:tI.prototype.values,writable:!0,configurable:!0});let tV=e=>e.byteLength;try{Object.defineProperty(tV,"name",{value:"size",configurable:!0})}catch(e){}class tK{constructor(e){$(e,1,"ByteLengthQueuingStrategy"),e=tH(e,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=e.highWaterMark}get highWaterMark(){if(!tZ(this))throw tX("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!tZ(this))throw tX("size");return tV}}function tX(e){return TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`)}function tZ(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_byteLengthQueuingStrategyHighWaterMark")&&e instanceof tK}Object.defineProperties(tK.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(tK.prototype,n.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0});let tJ=()=>1;try{Object.defineProperty(tJ,"name",{value:"size",configurable:!0})}catch(e){}class t0{constructor(e){$(e,1,"CountQueuingStrategy"),e=tH(e,"First parameter"),this._countQueuingStrategyHighWaterMark=e.highWaterMark}get highWaterMark(){if(!t8(this))throw t1("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!t8(this))throw t1("size");return tJ}}function t1(e){return TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`)}function t8(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_countQueuingStrategyHighWaterMark")&&e instanceof t0}Object.defineProperties(t0.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(t0.prototype,n.toStringTag,{value:"CountQueuingStrategy",configurable:!0});class t5{constructor(e={},t={},r={}){let o;void 0===e&&(e=null);const n=eY(t,"Second parameter"),i=eY(r,"Third parameter"),a=function(e,t){A(e,t);let r=null==e?void 0:e.flush,o=null==e?void 0:e.readableType,n=null==e?void 0:e.start,i=null==e?void 0:e.transform,a=null==e?void 0:e.writableType;return{flush:void 0===r?void 0:(L(r,`${t} has member 'flush' that`),t=>g(r,e,[t])),readableType:o,start:void 0===n?void 0:(L(n,`${t} has member 'start' that`),t=>y(n,e,[t])),transform:void 0===i?void 0:(L(i,`${t} has member 'transform' that`),(t,r)=>g(i,e,[t,r])),writableType:a}}(e,"First parameter");if(void 0!==a.readableType)throw RangeError("Invalid readableType specified");if(void 0!==a.writableType)throw RangeError("Invalid writableType specified");const l=eN(i,0),s=eU(i),u=eN(n,1),f=eU(n);!function(e,t,r,o,n,i){function a(){return t}e._writable=function(e,t,r,o,n=1,i=()=>1){let a=Object.create(eH.prototype);return eV(a),ti(a,Object.create(to.prototype),e,t,r,o,n,i),a}(a,function(t){let r=e._transformStreamController;return e._backpressure?b(e._backpressureChangePromise,()=>{let o=e._writable;if("erroring"===o._state)throw o._storedError;return rr(r,t)},void 0):rr(r,t)},function(){let t,r,o;return t=e._readable,o=(r=e._transformStreamController)._flushAlgorithm(),re(r),b(o,()=>{if("errored"===t._state)throw t._storedError;tj(t._readableStreamController)},r=>{throw t6(e,r),t._storedError})},function(t){return t6(e,t),d(void 0)},r,o),e._readable=tB(a,function(){return t7(e,!1),e._backpressureChangePromise},function(t){return t4(e,t),d(void 0)},n,i),e._backpressure=void 0,e._backpressureChangePromise=void 0,e._backpressureChangePromise_resolve=void 0,t7(e,!0),e._transformStreamController=void 0}(this,h(e=>{o=e}),u,f,l,s),function(e,t){var r,o;let n=Object.create(t3.prototype),i=e=>{try{var t;return rt(n,e),t=void 0,d(t)}catch(e){return c(e)}},a=()=>d(void 0);void 0!==t.transform&&(i=e=>t.transform(e,n)),void 0!==t.flush&&(a=()=>t.flush(n)),r=i,o=a,n._controlledTransformStream=e,e._transformStreamController=n,n._transformAlgorithm=r,n._flushAlgorithm=o}(this,a),void 0!==a.start?o(a.start(this._transformStreamController)):o(void 0)}get readable(){if(!t2(this))throw rn("readable");return this._readable}get writable(){if(!t2(this))throw rn("writable");return this._writable}}function t2(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")&&e instanceof t5}function t6(e,t){tO(e._readable._readableStreamController,t),t4(e,t)}function t4(e,t){re(e._transformStreamController),tu(e._writable._writableStreamController,t),e._backpressure&&t7(e,!1)}function t7(e,t){void 0!==e._backpressureChangePromise&&e._backpressureChangePromise_resolve(),e._backpressureChangePromise=h(t=>{e._backpressureChangePromise_resolve=t}),e._backpressure=t}Object.defineProperties(t5.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(t5.prototype,n.toStringTag,{value:"TransformStream",configurable:!0});class t3{constructor(){throw TypeError("Illegal constructor")}get desiredSize(){if(!t9(this))throw ro("desiredSize");return tz(this._controlledTransformStream._readable._readableStreamController)}enqueue(e){if(!t9(this))throw ro("enqueue");rt(this,e)}error(e){if(!t9(this))throw ro("error");t6(this._controlledTransformStream,e)}terminate(){let e;if(!t9(this))throw ro("terminate");tj((e=this._controlledTransformStream)._readable._readableStreamController),t4(e,TypeError("TransformStream terminated"))}}function t9(e){return!!l(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")&&e instanceof t3}function re(e){e._transformAlgorithm=void 0,e._flushAlgorithm=void 0}function rt(e,t){let r=e._controlledTransformStream,o=r._readable._readableStreamController;if(!tA(o))throw TypeError("Readable side is not in a state that permits enqueue");try{tq(o,t)}catch(e){throw t4(r,e),r._readable._storedError}!tE(o)!==r._backpressure&&t7(r,!0)}function rr(e,t){return b(e._transformAlgorithm(t),void 0,t=>{throw t6(e._controlledTransformStream,t),t})}function ro(e){return TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`)}function rn(e){return TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`)}Object.defineProperties(t3.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),"symbol"==typeof n.toStringTag&&Object.defineProperty(t3.prototype,n.toStringTag,{value:"TransformStreamDefaultController",configurable:!0});let ri={ReadableStream:tI,ReadableStreamDefaultController:tk,ReadableByteStreamController:ed,ReadableStreamBYOBRequest:eu,ReadableStreamDefaultReader:G,ReadableStreamBYOBReader:eB,WritableStream:eH,WritableStreamDefaultController:to,WritableStreamDefaultWriter:e4,ByteLengthQueuingStrategy:tK,CountQueuingStrategy:t0,TransformStream:t5,TransformStreamDefaultController:t3};if(void 0!==a)for(let e in ri)Object.prototype.hasOwnProperty.call(ri,e)&&Object.defineProperty(a,e,{value:ri[e],writable:!0,configurable:!0});t.ByteLengthQueuingStrategy=tK,t.CountQueuingStrategy=t0,t.ReadableByteStreamController=ed,t.ReadableStream=tI,t.ReadableStreamBYOBReader=eB,t.ReadableStreamBYOBRequest=eu,t.ReadableStreamDefaultController=tk,t.ReadableStreamDefaultReader=G,t.TransformStream=t5,t.TransformStreamDefaultController=t3,t.WritableStream=eH,t.WritableStreamDefaultController=to,t.WritableStreamDefaultWriter=e4,Object.defineProperty(t,"__esModule",{value:!0})}(r)}]);

//# sourceMappingURL=3rhcdz86tjqj5.js.map