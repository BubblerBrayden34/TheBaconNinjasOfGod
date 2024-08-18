var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*****
Copyright © 2010 UC Regents and ALEKS Corporation
ALEKS® is a registered trademark of ALEKS Corporation.
*****/
function di(id){return document.getElementById(id);}var w_or = 0;function sel(nb,w_jr){if(w_or!=nb){var w_Oo = (w_jr?w_jr:'');di('but_'+nb).is_ds=false;di('but_'+nb).className=w_Oo+'ssbs';di('sbut_'+nb).className=w_Oo+'subs';}}function uns(nb,w_jr){if(w_or!=nb){var w_Oo = (w_jr?w_jr:'');di('but_'+nb).is_ds=true;timeoutID = setTimeout(function(){if(di('but_'+nb).is_ds){di('but_'+nb).className=w_Oo+'ssb';di('sbut_'+nb).className=w_Oo+'sub';}},1);}}var w_88 = false;function inputFocus(input){if(w_88){
input.className = w_88;}w_88 = input.className;input.className = w_88+' searchHighlighted';}function inputBlur(input){input.className = w_88;}function sm(nb){w_or = nb;if(w_or!=0){di('but_'+w_or).className='ssbs';di('sbut_'+w_or).className='subs';}}function validateEmail(emailAddress){if (/^\w+([\/\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(emailAddress)){return (true);}return (false);}function validateEmailDNS(emailAddress){if (validateEmail(emailAddress)){return ('true'==w_RN('/aleks/webrpc','action=check_email&email='+emailAddress,true).responseText);
}return (false);}

}
/*
     FILE ARCHIVED ON 00:47:12 Feb 12, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:31:38 Aug 18, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.435
  exclusion.robots: 0.015
  exclusion.robots.policy: 0.007
  esindex: 0.008
  cdx.remote: 123.888
  LoadShardBlock: 233.809 (3)
  PetaboxLoader3.datanode: 178.023 (4)
  PetaboxLoader3.resolve: 99.314 (2)
  load_resource: 83.916
*/