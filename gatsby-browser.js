const showPage = (el) => {
  if (el.classList.toString().indexOf( 'loading' )) {
    el.classList.remove('loading')
  }
  el.classList.add('loaded')
}

const initPageFade = () => {
  if (typeof document !== 'undefined') {
    const rootEl = document.getElementsByClassName('wrap')[0]
    window.setTimeout(showPage, 1000, rootEl)
  }
}

// const loadScript = function(src) {
//   const tag = document.createElement('script')
//   tag.async = false;
//   tag.src = src;
//   const body = document.getElementsByTagName('body')
//   body[0].appendChild(tag)
// }

const injectMedusaScript = () => {
  if (typeof window !== 'undefined'){
    function addJS(jsCode) {
      var s = document.createElement(`script`)
      s.type = `text/javascript`
      s.src = `/medusa.main.js`
      document.getElementsByTagName(`head`)[0].appendChild(s)
    }
    addJS()
  }
}

const injectGAScript = () => {
  if (typeof window !== 'undefined'){
    function addGA(jsCode) {
      var s = document.createElement(`script`)
      s.type = `text/javascript`
      s.src = `https://www.googletagmanager.com/gtag/js?id=UA-119953429-6`
      s.async = false;
      s.classList.add('GA')
      document.getElementsByTagName(`head`)[0].appendChild(s)
    }
    function registerGa(){
      const GAscript = document.getElementsByClassName('GA')[0]
      if(GAscript) {
        console.log('GA added')
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-119953429-6');
      }
    }
    addGA()
    registerGa()
  }
}



exports.onInitialClientRender = () => {
  // loadScript('/jq.min.js')
  // loadScript('/bs.min.js')
  injectGAScript()
  initPageFade()
}

let injectedMedusaScript = false
exports.onRouteUpdate = ({ location }) => {
  initPageFade()
  if (!injectedMedusaScript) {
    injectMedusaScript()
    injectedMedusaScript = true
  }
}
