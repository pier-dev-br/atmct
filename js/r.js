let referrer;

document.addEventListener('DOMContentLoaded', (e) => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('ref')) {
      console.log(params.get('ref'))
      referrer = params.get('ref');
      Array.from(document.getElementsByClassName('checkout-button')).forEach(el => {
          el.href = el.href + '?ref=' + referrer;
      })
  }
  
  if (params.has('utm_source')) {
      Array.from(document.getElementsByClassName('checkout-button')).forEach(el => {
          let p = window.location.href.split('?')[1]
          el.href = el.href + '?' + p;
      })
  }
  
  if (!document.cookie) {
    if (params.has('ref')) {
      Cookies.set('referrer', referrer, { expires: 7, domain: '.atomicat.com.br' });
    }
  }
});
