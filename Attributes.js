// data attribute not working
// head and meta not working
// input lists not filled


const Global = {Aaccesskey: {type:"label"}, Aclass: {type:"label"}, Acontenteditable: {type:"list", values:["true", "false"]}
//, Adata: {type:"Dlabel"}
, Adir: {type:"list", values:["ltr", "rtl", "auto"]}, Adraggable: {type:"list", values:["true", "false", "auto"]}
, Ahidden: {type:"no"}, Aid: {type:"label"}, Alang: {type:"label"}
, Aspellcheck: {type:"list", values:["true", "false"]}, Astyle: {type:"label"}, Atabindex: {type:"label"}
, Atitle: {type:"label"}, Atranslate: {type:"list", values:["yes", "no"]}};

const Gtextarea = {Aautofocus: {type:"no"}, Acols: {type:"label"}, Adirname: {type:"label"},
Adisabled: {type:"no"}, Aform: {type:"label"}, Amaxlength: {type:"label"},
Aname: {type:"label"}, Aplaceholder: {type:"label"}, Areadonly: {type:"no"},
Arequired: {type:"no"}, Arows: {type:"label"}, Awrap: {type:"list", values:["soft", "hard"]}};

const Ginput ={
Aaccept: {type:"label"},  //======
Aalt: {type:"no"},
Aautocomplete: {type:"list", values:["on", "off"]},  
Aautofocus: {type:"no"},
Achecked: {type:"no"},
Adirname: {type:"no"},
Adisabled: {type:"no"},
Aform: {type:"label"},
Aformaction: {type:"label"},
Aformenctype: {type:"list", values:["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]}, 
Aformmethod: {type:"list", values:["get", "post"]},  
Aformnovalidate: {type:"no"},
Aformtarget: {type:"label"},  //======
Aheight: {type:"label"},
Alist: {type:"label"},
Amax: {type:"label"},
Amaxlength: {type:"label"},
Amin: {type:"label"},
Aminlength: {type:"label"},
Amultiple: {type:"no"},
Aname: {type:"label"},
Apattern: {type:"label"},
Aplaceholder: {type:"label"},
Areadonly: {type:"no"},
Arequired: {type:"no"},
Asize: {type:"label"},
Asrc: {type:"label"},
Astep: {type:"label"},
Atype: {type:"list", values:["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"]},   
Avalue: {type:"label"},
Awidth: {type:"label"}
};

	

	
const Gobject ={
Adata: {type:"label"},
Aform: {type:"label"},
Aheight: {type:"label"},
Aname: {type:"label"},
Atype: {type:"label"},
Atypemustmatch: {type:"list", values:["true", "false"]},
Ausemap: {type:"label"},		
Awidth: {type:"label"}
};


const Gvideo ={
Aautoplay: {type:"no"},	
Acontrols: {type:"no"},	
Aheight: {type:"label"},
Aloop: {type:"no"},	
Amuted: {type:"no"},	
Aposter: {type:"label"},	
Apreload: {type:"list", values:["auto", "metadata", "none"]}, 	
Asrc: {type:"label"},	
Awidth: {type:"label"}	
};

const Gembed ={

Aheight: {type:"label"},
Asrc: {type:"label"},
Atype: {type:"label"},	
Awidth: {type:"label"}	
};

const Gcanvas ={

Aheight: {type:"label"},
Awidth: {type:"label"}	
};

const Gimg ={
Aalt: {type:"label"},
Acrossorigin: {type:"list", values:["anonymous", "use-credentials"]},
Aheight: {type:"label"},
Aismap: {type:"no"},
Aloading: {type:"list", values:["eager", "lazy"]},
Alongdesc: {type:"label"},
Areferrerpolicy: {type:"list", values:["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "unsafe-url"]},
Asizes: {type:"label"},
Asrc: {type:"label"},
Asrcset: {type:"label"},
Ausemap: {type:"label"},	
Awidth: {type:"label"}	
};

const Giframe ={
Aallow: {type:"no"},
Aallowfullscreen: {type:"list", values:["true", "false"]},
Aallowpaymentrequest: {type:"list", values:["true", "false"]},
Aheight: {type:"label"},
Aloading: {type:"list", values:["eager", "lazy"]},
Aname: {type:"label"},
Areferrerpolicy: {type:"list", values:["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "same-origin", "strict-origin-when-cross-origin", "unsafe-url"]},
Asandbox: {type:"list", values:["allow-forms", "allow-pointer-lock", "allow-popups", "allow-same-origin", "allow-scripts", "allow-top-navigation"]},
Asrc: {type:"label"},
Asrcdoc: {type:"label"},
Awidth: {type:"label"}	
};

const Gprogress ={Amax: {type:"label"}, Avalue: {type:"label"}};
const Gparam ={Aname: {type:"label"}, Avalue: {type:"label"}};
const Gli ={Avalue: {type:"label"}};

const Gmeter ={
Aform: {type:"label"},
Ahigh: {type:"label"},
Alow: {type:"label"},
Amax: {type:"label"},
Amin: {type:"label"},
Aoptimum: {type:"label"},
Avalue: {type:"label"}
};

const Goption ={
Adisabled: {type:"no"},
Alabel: {type:"label"},
Aselected: {type:"no"},
Avalue: {type:"label"}
};

const Gbutton ={
Aautofocus: {type:"no"},
Adisabled: {type:"no"},
Aform: {type:"label"},
Aformaction: {type:"label"},
Aformenctype: {type:"list", values:["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]},
Aformmethod: {type:"list", values:["get", "post"]},
Aformnovalidate: {type:"no"},
Aformtarget: {type:"label"},
Aname: {type:"label"},
Atype: {type:"list", values:["button", "reset", "submit"]},
Avalue: {type:"label"}
};

const Gstyle ={
Amedia: {type:"label"}, 
Atype: {type:"list", values:["text/css"]} 
};

const Gsource ={
Amedia: {type:"label"},
Asizes: {type:"label"}, 
Asrc: {type:"label"}, 
Asrcset: {type:"label"},    
Atype: {type:"label"} 
};

const Gscript ={
Aasync: {type:"no"},
Acrossorigin: {type:"list", values:["anonymous", "use-credentials"]},
Adefer: {type:"no"},
Aintegrity: {type:"label"},
Anomodule: {type:"list", values:["true", "false"]},
Areferrerpolicy: {type:"list", values:["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "same-origin", "strict-origin", "strict-origin-when-cross-origin", "unsafe-url"]},
Asrc: {type:"label"}, 
Atype: {type:"label"} 
};

const Glink ={
Acrossorigin: {type:"list", values:["anonymous", "use-credentials"]},	
Ahref: {type:"label"},	
Ahreflang: {type:"label"},	
Amedia: {type:"label"}, 	
Areferrerpolicy: {type:"list", values:["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "unsafe-url"]},	
Arel: {type:"list", values:["alternate", "author", "dns-prefetch", "help", "icon", "license", "next", "pingback", "preconnect", "prefetch", "preload", "prerender", "prev", "search", "stylesheet"]},	
Asizes: {type:"label"},	
Atitle: {type:"label"},
Atype: {type:"label"} 
};

const Ga ={
Adownload: {type:"label"},		
Ahref: {type:"label"},	
Ahreflang: {type:"label"},	
Amedia: {type:"label"},
Aping: {type:"label"}, 	
Areferrerpolicy: {type:"list", values:["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "same-origin", "strict-origin-when-cross-origin", "unsafe-url"]},	
Arel: {type:"list", values:["alternate", "author", "bookmark", "external", "help", "license", "next", "nofollow", "noreferrer", "noopener", "prev", "search", "tag"]},	
Atarget: {type:"label"},
Atype: {type:"label"} 
};

const Garea ={
Aalt: {type:"label"},
Acoords: {type:"label"},
Adownload: {type:"label"},		
Ahref: {type:"label"},	
Ahreflang: {type:"label"},	
Amedia: {type:"label"},
Areferrerpolicy: {type:"list", values:["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "same-origin", "strict-origin-when-cross-origin", "unsafe-url"]},	
Arel: {type:"list", values:["alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"]},	
Ashape: {type:"list", values:["default", "rect", "circle", "poly"]},
Atarget: {type:"label"},
Atype: {type:"label"} 
};

const Gform ={
AacceptCharset: {type:"label"},
Aaction: {type:"label"},
Aautocomplete: {type:"list", values:["on", "off"]},		
Aenctype: {type:"list", values:["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]}, 
Amethod: {type:"list", values:["get", "post"]}, 	
Aname: {type:"label"},
Anovalidate: {type:"no"},
Arel: {type:"list", values:["external", "help", "license", "next", "nofollow", "noopener", "noreferrer", "opener", "prev", "search"]},	
Atarget: {type:"label"}
};

const Gol ={
Areversed: {type:"label"},
Astart: {type:"label"},
Atype: {type:"list", values:["1", "A", "a", "I", "i"]} 
};