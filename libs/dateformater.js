!function(e){"use strict";function t(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function a(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var r=(t-a)/6048e5;return 1+Math.floor(r)}function n(e){var t=e.getDay();return 0===t&&(t=7),t}function r(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}var s=function(){var e=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g,d=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,m=/[^-+\dA-Z]/g;return function(y,i,o,u){if(1!==arguments.length||"string"!==r(y)||/\d/.test(y)||(i=y,y=void 0),y=y||new Date,y instanceof Date||(y=new Date(y)),isNaN(y))throw TypeError("Invalid date");i=String(s.masks[i]||i||s.masks["default"]);var l=i.slice(0,4);("UTC:"===l||"GMT:"===l)&&(i=i.slice(4),o=!0,"GMT:"===l&&(u=!0));var M=o?"getUTC":"get",T=y[M+"Date"](),c=y[M+"Day"](),g=y[M+"Month"](),f=y[M+"FullYear"](),h=y[M+"Hours"](),D=y[M+"Minutes"](),p=y[M+"Seconds"](),H=y[M+"Milliseconds"](),S=o?0:y.getTimezoneOffset(),v=a(y),b=n(y),N={d:T,dd:t(T),ddd:s.i18n.dayNames[c],dddd:s.i18n.dayNames[c+7],m:g+1,mm:t(g+1),mmm:s.i18n.monthNames[g],mmmm:s.i18n.monthNames[g+12],yy:String(f).slice(2),yyyy:f,h:h%12||12,hh:t(h%12||12),H:h,HH:t(h),M:D,MM:t(D),s:p,ss:t(p),l:t(H,3),L:t(Math.round(H/10)),t:12>h?"a":"p",tt:12>h?"am":"pm",T:12>h?"A":"P",TT:12>h?"AM":"PM",Z:u?"GMT":o?"UTC":(String(y).match(d)||[""]).pop().replace(m,""),o:(S>0?"-":"+")+t(100*Math.floor(Math.abs(S)/60)+Math.abs(S)%60,4),S:["th","st","nd","rd"][T%10>3?0:(T%100-T%10!=10)*T%10],W:v,N:b};return i.replace(e,function(e){return e in N?N[e]:e.slice(1,e.length-1)})}}();s.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},"function"==typeof define&&define.amd?define(function(){return s}):"object"==typeof exports?module.exports=s:e.dateFormat=s}(this);