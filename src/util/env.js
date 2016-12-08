let isIe = undefined;

export default {
  isIExproler : function() {
    if (isIe !== undefined)
      return isIe;
    let ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      return true;
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      // var rv = ua.indexOf('rv:');
      return true;
    }
    return false;
  },

  isFirefox : function(){
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  },

  isSafari : function(){
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1;
  },

  isMobile : function() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
      return true;
    } else {
      return false;
    }
  }
};
