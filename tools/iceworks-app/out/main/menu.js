const{Menu:e,shell:l,BrowserWindow:a}=require("electron"),o=require("electron-log"),{isMac:t,isWin:r,isDev:c}=require("./shared"),s=require("./autoUpdater"),i=require("./helper/sendToWebContents"),{openAboutWindow:n}=require("./windowList");function b(e,{state:l,title:a,url:o}){i(e.home,"router.push",{state:l,title:a,url:o}),e.home.isVisible()?e.home.focus():e.home.show()}exports.trayMenu=((l,a)=>{const o=[{label:"\u5173\u4e8e Iceworks"},{type:"separator"},{label:"\u8bbe\u7f6e",click(){b(a,{state:null,title:"Settings",url:"/settings"})}},{type:"separator"},{abel:"\u9000\u51fa",role:"quit",accelerator:"Cmd+Q"}];return e.buildFromTemplate(o)}),exports.appMenu=((p,u)=>{const m=[{label:"\u6587\u6863",click(){l.openExternal("https://alibaba.github.io/ice")}},{label:"Midway \u6587\u6863",click(){l.openExternal("https://midwayjs.org/midway/guide.html")}},{label:"Github",click(){l.openExternal("https://github.com/alibaba/ice")}},{type:"separator"},{label:"\u53cd\u9988\u95ee\u9898",click(){l.openExternal("https://github.com/alibaba/ice/issues/new?labels=iceworks")}},{type:"separator"},{label:"\u67e5\u770b\u8bb8\u53ef\u8bc1",click(){l.openExternal("https://github.com/alibaba/ice/blob/master/LICENSE")}},{label:"\u9690\u79c1\u58f0\u660e",click(){l.openExternal("https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201703241622_61002.html")}},{type:"separator"},{label:"\u5207\u6362\u5f00\u53d1\u4eba\u5458\u5de5\u5177",accelerator:t?"Alt+Command+I":"Ctrl+Shift+I",click(e,l){l&&l.toggleDevTools()}},{label:"\u67e5\u770b\u8fd0\u884c\u65e5\u5fd7",click(){const e=o.transports.file.findLogPath(p.getName());l.showItemInFolder(e)}}];r&&(m.push({type:"separator"}),m.push({label:"\u68c0\u67e5\u66f4\u65b0...",click(){s.show()}}),m.push({type:"separator"}),m.push({label:"\u5173\u4e8e",click(){n()}}));const h=[{label:"\u9879\u76ee",submenu:[{label:"\u8fd0\u884c\u65e5\u5fd7",accelerator:"Control+`",click(){i(u.home,"menu:project:console:toggle")}},{type:"separator"},{label:"\u6e05\u7a7a\u5217\u8868",click(){i(u.home,"menu:project:clearall")}}]},{label:"\u7f16\u8f91",submenu:[{label:"\u64a4\u9500",role:"undo",accelerator:"CommandOrControl+Z"},{label:"\u91cd\u505a",role:"redo",accelerator:"CommandOrControl+Shift+Z"},{type:"separator"},{label:"\u526a\u5207",role:"cut",accelerator:"CommandOrControl+X"},{label:"\u590d\u5236",role:"copy",accelerator:"CommandOrControl+C"},{label:"\u7c98\u8d34",role:"paste",accelerator:"CommandOrControl+V"},{label:"\u9009\u62e9\u5168\u90e8",role:"selectall",accelerator:"CommandOrControl+A"}]},{label:"\u7a97\u53e3",submenu:[{label:"\u5173\u95ed",role:"close",accelerator:"CommandOrControl+W"},{label:"\u6700\u5c0f\u5316",role:"minimize",accelerator:"CommandOrControl+M"},{label:"\u7f29\u653e",role:"zoom"},{label:"\u5207\u6362\u5168\u5c4f",role:"togglefullscreen",accelerator:t?"Ctrl+Command+F":"F11"},{type:"separator"},{label:"\u5168\u90e8\u7f6e\u4e8e\u9876\u5c42",role:"front"}]},{label:"\u5e2e\u52a9",submenu:m}];if(t){const e=p.getName();h.unshift({label:e,submenu:[{label:"\u5173\u4e8e Iceworks",click(){n()}},{type:"separator"},{label:"\u68c0\u67e5\u66f4\u65b0...",click(){s.show()}},{type:"separator"},{label:"\u8bbe\u7f6e",accelerator:"CmdOrCtrl+,",click(){b(u,{state:null,title:"Settings",url:"/settings"})}},{type:"separator"},{label:"\u670d\u52a1",role:"services",submenu:[]},{type:"separator"},{label:"\u9690\u85cf Iceworks",role:"hide"},{label:"\u9690\u85cf\u5176\u4ed6",role:"hideothers"},{label:"\u5168\u90e8\u663e\u793a",role:"unhide"},{type:"separator"},{label:"\u9000\u51fa Iceworks",role:"quit"}]})}c&&h.push({label:"\u5f00\u53d1\u8c03\u8bd5",submenu:[{label:"Reload",accelerator:"CmdOrCtrl+R",click(e,l){l&&(1===l.id&&a.getAllWindows().forEach(e=>{e.id>1&&e.close()}),l.reload())}},{label:"Toggle Developer Tools",accelerator:t?"Alt+Command+I":"Ctrl+Shift+I",click(e,l){l&&l.toggleDevTools()}}]});const d=e.buildFromTemplate(h);e.setApplicationMenu(d)});