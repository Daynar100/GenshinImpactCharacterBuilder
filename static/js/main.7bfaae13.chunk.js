(this["webpackJsonpgenshin-impact-character-builder"]=this["webpackJsonpgenshin-impact-character-builder"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a(4),i=a.n(n),r=a(8),c=a.n(r),l=(a(14),a(2)),o=a(3),u=a(1),h=a(6),d=a(5),v={NONE:"none",ATK:"atk",ATKPER:"atk %",ARTIFACTATK:"atk (artifact)",CRITD:"critd",CRITC:"critc",PHYS:"phys",PYRO:"pyro",CRYO:"cryo",GEO:"geo",ANEMO:"anemo",ELECTRO:"electro",HYDRO:"hydro",HP:"hp",HPPER:"hp%",DEF:"def",DEFPER:"def%",MASTERY:"ele mastery",RECHARGE:"recharge",HEAL:"heal bonus"},p=function(){function t(){Object(l.a)(this,t),this.statMap=new Map,this.character=new Map,this.weapon=new Map,this.hat=new Map,this.goblet=new Map,this.clock=new Map,this.flower=new Map,this.feather=new Map,this.setBonuses=new Map,this.talentLevel=[1,1,1]}return Object(o.a)(t,[{key:"getTotalAtk",value:function(){return Math.floor(this.getStat(v.ATK)*(this.getStat(v.ATKPER)/100+1)+this.getStat(v.ARTIFACTATK))}},{key:"getStat",value:function(t){return t in this.statMap&&parseFloat(this.statMap[t])||0}},{key:"updateItem",value:function(t,e){this.hasOwnProperty(t)&&(this.removeItemFromStatMap(this[t]),this[t]=e,this.addItemToStatMap(this[t]))}},{key:"removeItemFromStatMap",value:function(t){for(var e in t){var a=t[e];e in this.statMap&&(this.statMap[e]-=parseFloat(a)||0)}}},{key:"addItemToStatMap",value:function(t){for(var e in t){var a=t[e];e in this.statMap?this.statMap[e]+=parseFloat(a)||0:this.statMap[e]=parseFloat(a)||0}}}]),t}(),b={name:"Fischl",atk:{L1:21,L20:53,L20a:68,L40:102,L40a:113,L50:139,L50a:144,L60:161,L60a:172,L70:189,L70a:200,L80:216,L80a:227},bonus:{name:v.ATKPER,L40a:6,L50a:12,L60a:12,L70a:18,L80a:24},talents:[{name:"Bolts of Downfall",effects:[{name:"1-Hit DMG%",type:v.PHYS,value:[44.1]},{name:"2-Hit DMG%",type:v.PHYS,value:[46.8]},{name:"3-Hit DMG%",type:v.PHYS,value:[58.1]},{name:"4-Hit DMG%",type:v.PHYS,value:[57.7]},{name:"5-Hit DMG%",type:v.PHYS,value:[72.1]},{name:"Aimed Shot DMG%",type:v.PHYS,value:[43.9]},{name:"Fully-Charged Aimed Shot DMG%",type:v.PHYS,value:[124]},{name:"Plunge DMG%",type:v.PHYS,value:[56.8]},{name:"Low Plunge DMG%",type:v.PHYS,value:[114]},{name:"High Plunge DMG%",type:v.PHYS,value:[142]}]},{name:"Nightrider",effects:[{name:"Oz ATK DMG%",type:v.ELECTRO,value:[88.8]},{name:"Summoning DMG%",type:v.ELECTRO,value:[115]}]},{name:"Midnight Phantasmagoria",effects:[{name:"Falling Thunder DMG%",type:v.ELECTRO,value:[208]}]}]},j=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;Object(l.a)(this,a);var n=(s=e.call(this,t)).decodeState(s.props.decodedData);return s.state={level:n.level,talentLevel:n.talentLevel,acended:n.acended,constellation:n.constellation,characterStats:s.props.characterStats},s.levelChange=s.levelChange.bind(Object(u.a)(s)),s.ascendedChange=s.ascendedChange.bind(Object(u.a)(s)),s.talentLevelChange=s.talentLevelChange.bind(Object(u.a)(s)),s.encodeState=s.encodeState.bind(Object(u.a)(s)),s.decodeState=s.decodeState.bind(Object(u.a)(s)),s.props.encodeList.push(s.encodeState),s}return Object(o.a)(a,[{key:"encodeState",value:function(){return[this.state.level,this.state.constellation<<1|this.state.acended,this.state.talentLevel[0]<<4|this.state.talentLevel[1],this.state.talentLevel[2]]}},{key:"decodeState",value:function(t){if(t.length<4)return{level:1,talentLevel:[1,1,1],acended:!1,constellation:0};var e={level:t[0],constellation:t[1]>>1,acended:1&t[1],talentLevel:[t[2]>>4,15&t[2],t[3]]};return t.splice(0,4),e}},{key:"levelChange",value:function(t){var e=parseInt(t.target.value);e>=100&&(e=Math.floor(e/10)),e>90?e=90:e<=0&&(e=1),this.setState({level:e}),this.props.updateStats(this.props.statItemId,this.getStatsFromLevelAndAscention(e,this.state.acended))}},{key:"ascendedChange",value:function(t){this.setState({acended:t.target.checked}),this.props.updateStats(this.props.statItemId,this.getStatsFromLevelAndAscention(this.state.level,t.target.checked))}},{key:"getStatsFromLevelAndAscention",value:function(t,e){var a=new Map,s=0;1===t?s=b.atk.L1:t<20?s=this.getAtkBetweenLevels(b.atk.L1,b.atk.L20,t,1,20):20===t?s=e?b.atk.L20a:b.atk.L20:t<40?s=this.getAtkBetweenLevels(b.atk.L20a,b.atk.L40,t,20,40):40===t?s=e?b.atk.L40a:b.atk.L40:t<50?s=this.getAtkBetweenLevels(b.atk.L40a,b.atk.L50,t,40,50):50===t?s=e?b.atk.L50a:b.atk.L50:t<60?s=this.getAtkBetweenLevels(b.atk.L50a,b.atk.L60,t,50,60):60===t?s=e?b.atk.L60a:b.atk.L60:t<70?s=this.getAtkBetweenLevels(b.atk.L60a,b.atk.L70,t,60,70):70===t?s=e?b.atk.L70a:b.atk.L70:t<80?s=this.getAtkBetweenLevels(b.atk.L70a,b.atk.L80,t,70,80):80===t&&(s=e?b.atk.L80a:b.atk.L80);var n=0;return t>80||80===t&&this.state.ascended?n=b.bonus.L80a:t>70||70===t&&this.state.ascended?n=b.bonus.L70a:t>50||50===t&&this.state.ascended?n=b.bonus.L50a:(t>40||40===t&&this.state.ascended)&&(n=b.bonus.L40a),a[b.bonus.name]=n,a.atk=s,a.critc=5,a.critd=50,a}},{key:"getAtkBetweenLevels",value:function(t,e,a,s,n){return Math.floor(t+(e-t)/(n-s)*(a-s))}},{key:"ascentionCheckbox",value:function(){var t=this.state.level;if(20===t||40===t||50===t||60===t||70===t||80===t)return Object(s.jsxs)("div",{children:["Is Ascended: ",Object(s.jsx)("input",{type:"checkbox",onChange:this.ascendedChange})]})}},{key:"talentLevelChange",value:function(t){var e=parseInt(t.target.value)||"",a=t.target.attributes.number.value;e<0?e=1:e>15&&(e=15);var s=this.state.talentLevel;s[a]=e,this.props.talentLevelChange(a,e),this.setState({talentLevel:s})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"CharacterInfo",children:[Object(s.jsx)("div",{}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"subtitle2",children:b.name})}),Object(s.jsxs)("div",{children:["Level: ",Object(s.jsx)("input",{type:"number",min:"1",max:"90",step:"1",value:this.state.level,onChange:this.levelChange})]}),Object(s.jsxs)("div",{children:[b.talents[0].name," :",Object(s.jsx)("input",{type:"number",min:"1",max:"15",step:"1",value:this.state.talentLevel[0],onChange:this.talentLevelChange,number:0})]}),Object(s.jsxs)("div",{children:[b.talents[1].name," :",Object(s.jsx)("input",{type:"number",min:"1",max:"15",step:"1",value:this.state.talentLevel[1],onChange:this.talentLevelChange,number:1})]}),Object(s.jsxs)("div",{children:[b.talents[2].name," :",Object(s.jsx)("input",{type:"number",min:"1",max:"15",step:"1",value:this.state.talentLevel[2],onChange:this.talentLevelChange,number:2})]})]})]})}}]),a}(i.a.Component);function O(t){return t.match(/^[0-9]*\.?[0-9]*$/)}var m=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).state={value:0},s.valueChanged=s.valueChanged.bind(Object(u.a)(s)),s}return Object(o.a)(a,[{key:"valueChanged",value:function(t){var e;e=O(t.target.value)?t.target.value:parseFloat(t.target.value)||"",this.setState({value:e}),this.props.valueChanged(e)}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Stat",children:[this.props.stat,Object(s.jsx)("input",{type:"text",value:this.state.value,onChange:this.valueChanged})]})}}]),a}(i.a.Component),g=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).state={value:0,stat:0},s.valueChanged=s.valueChanged.bind(Object(u.a)(s)),s.statChanged=s.statChanged.bind(Object(u.a)(s)),s}return Object(o.a)(a,[{key:"valueChanged",value:function(t){var e;e=O(t.target.value)?t.target.value:parseFloat(t.target.value)||"",this.setState({value:e}),this.props.valueChanged(this.props.id,e)}},{key:"statChanged",value:function(t){var e=parseInt(t.target.value)||0;this.setState({stat:e}),this.props.statChanged(this.props.id,e)}},{key:"mapOptions",value:function(t){var e=0;return t.map((function(t){return Object(s.jsx)("option",{value:e++,children:t},t)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Stat",children:[Object(s.jsx)("select",{name:"StatType",value:this.state.stat,onChange:this.statChanged,children:this.mapOptions(this.props.statList)}),Object(s.jsx)("input",{type:"text",value:this.state.value,onChange:this.valueChanged})]})}}]),a}(i.a.Component),C=function(){function t(){Object(l.a)(this,t)}return Object(o.a)(t,[{key:"addItem",value:function(t,e){t in this.idMap?this.data[this.idMap[t]]=e:(this.idMap[t]=this.data.length,this.data.push(e))}},{key:"encode",value:function(t){var e=new ArrayBuffer(t.length),a=new Int8Array(e);a.set(t,0);for(var s="",n=a.length,i=0;i<n;i++){var r=a[i];s+=String.fromCharCode(r)}return window.btoa(s)}},{key:"decode",value:function(t){for(var e=window.atob(t),a=e.length,s=[],n=0;n<a;++n)s.push(e.charCodeAt(n));return s}}],[{key:"encodeFloat",value:function(t){var e=Math.floor(10*t);return[65280&e,255&e]}},{key:"decodeFloat",value:function(t,e){return(0|parseFloat(t<<8|e))/10}}]),t}(),S=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;Object(l.a)(this,a);var n=(s=e.call(this,t)).decodeState(s.props.decodedData);return s.state={atk:n.atk,secondaryValue:n.secondaryValue,secondaryStat:n.secondaryStat,statList:[v.NONE,v.ATKPER,v.HPPER,v.CRITD,v.CRITC,v.RECHARGE,v.MASTERY]},s.atkValueChanged=s.atkValueChanged.bind(Object(u.a)(s)),s.secondaryValueChanged=s.secondaryValueChanged.bind(Object(u.a)(s)),s.secondaryStatChanged=s.secondaryStatChanged.bind(Object(u.a)(s)),s.encodeState=s.encodeState.bind(Object(u.a)(s)),s.props.encodeList.push(s.encodeState),s}return Object(o.a)(a,[{key:"encodeState",value:function(){var t=C.encodeFloat(this.state.atk);return t.push(this.state.secondaryStat),t=t.concat(C.encodeFloat(this.state.secondaryValue))}},{key:"decodeState",value:function(t){if(t.length<4)return{atk:0,secondaryValue:0,secondaryStat:0};var e={atk:t[0],secondaryStat:t[1],secondaryValue:C.decodeFloat(t[2],t[3])};return t.splice(0,4),e}},{key:"atkValueChanged",value:function(t){this.setState({atk:t}),this.props.updateStats(this.props.statItemId,this.generateStatMap(t,this.state.statList[this.state.secondaryStat],this.state.secondaryValue))}},{key:"secondaryValueChanged",value:function(t,e){this.setState({secondaryValue:e}),this.props.updateStats(this.props.statItemId,this.generateStatMap(this.state.atk,this.state.statList[this.state.secondaryStat],e))}},{key:"secondaryStatChanged",value:function(t,e){this.setState({secondaryStat:e}),this.props.updateStats(this.props.statItemId,this.generateStatMap(this.state.atk,this.state.statList[e],this.state.secondaryValue))}},{key:"generateStatMap",value:function(t,e,a){var s=new Map;return s[v.ATK]=parseFloat(t)||0,e===v.ATK?s[v.ATK]+=parseFloat(a)||0:s[e]=parseFloat(a)||0,s}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"WeaponInfo",children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"subtitle2",children:"Weapon"})}),Object(s.jsx)(m,{stat:v.ATK,valueChanged:this.atkValueChanged}),Object(s.jsx)(g,{id:0,statList:this.state.statList,valueChanged:this.secondaryValueChanged,statChanged:this.secondaryStatChanged})]})}}]),a}(i.a.Component),f=[{name:"Flower of Life",id:"flower",mainStat:[v.HP]},{name:"Plume of Death",id:"feather",mainStat:[v.ARTIFACTATK]},{name:"Sands of Eon",id:"clock",mainStat:[v.HPPER,v.DEFPER,v.ATKPER,v.MASTERY,v.RECHARGE]},{name:"Goblet of Eonothem",id:"goblet",mainStat:[v.HPPER,v.DEFPER,v.ATKPER,v.MASTERY,v.HYDRO,v.PYRO,v.CRYO,v.GEO,v.ELECTRO,v.ANEMO,v.PHYS]},{name:"Circlet of Logos",id:"hat",mainStat:[v.HPPER,v.DEFPER,v.ATKPER,v.MASTERY,v.CRITC,v.CRITD,v.HEAL]}],L=[{name:"Adventurer",bonus2:[{stat:v.HP,value:1e3}],bonus4:[]},{name:"Lucky Dog",bonus2:[{stat:v.DEF,value:1e3}],bonus4:[]},{name:"Traveling Doctor",bonus2:[],bonus4:[]},{name:"Instructor",bonus2:[{stat:v.MASTERY,value:80}],bonus4:[]},{name:"Berserker",bonus2:[{stat:v.CRITC,value:12}],bonus4:[]},{name:"The Exile",bonus2:[{stat:v.RECHARGE,value:20}],bonus4:[]},{name:"Resolution of Sojourner",bonus2:[{stat:v.ATKPER,value:18}],bonus4:[]},{name:"Martial Artist",bonus2:[],bonus4:[]},{name:"Defender's Will",bonus2:[{stat:v.DEFPER,value:18}],bonus4:[]},{name:"Tiny Miracle",bonus2:[],bonus4:[]},{name:"Brave Heart",bonus2:[{stat:v.ATKPER,value:18}],bonus4:[]},{name:"Gambler",bonus2:[],bonus4:[]},{name:"Scolar",bonus2:[{stat:v.RECHARGE,value:20}],bonus4:[]},{name:"Gladiator's Finale",bonus2:[{stat:v.ATKPER,value:18}],bonus4:[]},{name:"Maiden Beloved",bonus2:[{stat:v.HEAL,value:15}],bonus4:[]},{name:"Noblesse Oblige",bonus2:[],bonus4:[]},{name:"Bloodstained Chivalry",bonus2:[{stat:v.PHYS,value:25}],bonus4:[]},{name:"Wanderer's Troupe",bonus2:[{stat:v.MASTERY,value:80}],bonus4:[]},{name:"Viridescent Venerer",bonus2:[{stat:v.ANEMO,value:15}],bonus4:[]},{name:"Thundering Fury",bonus2:[{stat:v.ELECTRO,value:15}],bonus4:[]},{name:"Thundersoother",bonus2:[{stat:v.ELECTRO,value:15}],bonus4:[]},{name:"Crimson Witch of Flames",bonus2:[{stat:v.PYRO,value:15}],bonus4:[]},{name:"Lavawalker",bonus2:[{stat:v.PYRO,value:15}],bonus4:[]},{name:"Archaic Petra",bonus2:[{stat:v.GEO,value:15}],bonus4:[]},{name:"Retracing Bolide",bonus2:[{stat:v.GEO,value:15}],bonus4:[]}],y=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;Object(l.a)(this,a);var n=(s=e.call(this,t)).decodeState(s.props.decodedData);return s.state={set:n.set,stats:n.stats,subStatList:[v.NONE,v.HP,v.ATK,v.DEF,v.HPPER,v.ATKPER,v.DEFPER,v.MASTERY,v.RECHARGE,v.CRITC,v.CRITD,v.HEAL]},s.valueChanged=s.valueChanged.bind(Object(u.a)(s)),s.statChanged=s.statChanged.bind(Object(u.a)(s)),s.setChange=s.setChange.bind(Object(u.a)(s)),s.encodeState=s.encodeState.bind(Object(u.a)(s)),s.props.encodeList.push(s.encodeState),s}return Object(o.a)(a,[{key:"encodeState",value:function(){var t=this.state.stats,e=[this.state.set,(t[0].stat||0)|t[1].stat||0,(t[2].stat||0)|t[3].stat||0,t[4].stat||0];return this.state.stats.map((function(t){return e=e.concat(C.encodeFloat(parseFloat(t)||0))})),e}},{key:"decodeState",value:function(t){if(t.length<14)return{set:0,stats:[{},{},{},{},{}]};var e=t[0],a=[{},{},{},{},{}];a[0].stat=t[1]>>4,a[1].stat=15&t[1],a[2].stat=t[2]>>4,a[3].stat=15&t[3],a[4].stat=t[4];for(var s=0;s<5;++s)a[s].value=C.decodeFloat(t[5+2*s],t[6+2*s]);return t.splice(0,14),{set:e,stats:a}}},{key:"valueChanged",value:function(t,e){var a=this.state.stats;a[t].value=e,this.setState({stats:a}),this.updateParent(a)}},{key:"statChanged",value:function(t,e){var a=this.state.stats;a[t].stat=e,this.setState({stats:a}),this.updateParent(a)}},{key:"updateParent",value:function(t){for(var e=new Map,a=0;a<t.length;++a){var s=t[a],n=void 0;n=0===a?this.props.slot.mainStat[s.stat]:this.state.subStatList[s.stat],s.hasOwnProperty("stat")&&s.hasOwnProperty("value")&&(n in e?e[n]+=parseFloat(s.value)||0:e[n]=parseFloat(s.value)||0)}this.props.updateStats(this.props.slot.id,e)}},{key:"setChange",value:function(t){var e=t.target.value;this.props.setChange(this.state.set,e),this.setState({set:e})}},{key:"mapSets",value:function(){var t=0;return L.map((function(e){return Object(s.jsx)("option",{value:t++,children:e.name},e.name)}))}},{key:"getSetBonuses",value:function(t,e){for(var a=[],n=1;n<=e;++n)if(t.hasOwnProperty("bonus"+n)){var i=t["bonus"+n];a.push(Object(s.jsx)("div",{children:i.map((function(t){return Object(s.jsxs)("div",{children:[t.stat," : ",t.value]},t.stat)}))},n))}return a}},{key:"render",value:function(){var t=this.props.setCount[this.state.set]||0;return Object(s.jsxs)("div",{className:"Artifact",children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"subtitle2",children:this.props.slot.name})}),Object(s.jsx)("div",{className:"SetPicker",children:Object(s.jsxs)("div",{children:["Set:",Object(s.jsxs)("select",{name:"SetPicker",value:this.props.value,onChange:this.setChange,children:[Object(s.jsx)("option",{value:"none",children:"none"},"none"),this.mapSets()]})]})}),Object(s.jsx)(g,{id:0,statList:this.props.slot.mainStat,valueChanged:this.valueChanged,statChanged:this.statChanged}),Object(s.jsx)(g,{id:1,statList:this.state.subStatList,valueChanged:this.valueChanged,statChanged:this.statChanged}),Object(s.jsx)(g,{id:2,statList:this.state.subStatList,valueChanged:this.valueChanged,statChanged:this.statChanged}),Object(s.jsx)(g,{id:3,statList:this.state.subStatList,valueChanged:this.valueChanged,statChanged:this.statChanged}),Object(s.jsx)(g,{id:4,statList:this.state.subStatList,valueChanged:this.valueChanged,statChanged:this.statChanged}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["Pieces In Set: ",t]}),Object(s.jsx)("p",{children:"Active Effects:"}),Object(s.jsx)("div",{children:this.getSetBonuses(L[this.state.set],t)})]})]})}}]),a}(i.a.Component),x=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).state={sets:new Map},s.setChange=s.setChange.bind(Object(u.a)(s)),s}return Object(o.a)(a,[{key:"setChange",value:function(t,e){var a=this.state.sets;t in a&&(a[t]-=1),e in a?a[e]+=1:a[e]=1,this.setState({sets:a});var s=new Map;for(var n in a)for(var i=L[n],r=1;r<=a[n];++r)if(i.hasOwnProperty("bonus"+r))for(var c=i["bonus"+r],l=0;l<c.length;l++)s[c[l].stat]=c[l].value;this.props.updateStats("setBonuses",s)}},{key:"render",value:function(){var t=this;return Object(s.jsx)("div",{className:"PrimarySection",children:f.map((function(e){return Object(s.jsx)("div",{className:"BoxInfo",children:Object(s.jsx)(y,{decodedData:t.props.decodedData,slot:e,updateStats:t.props.updateStats,setCount:t.state.sets,setChange:t.setChange,encodeList:t.props.encodeList})},e.name)}))})}}]),a}(i.a.Component),k=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.characterStats,e=[v.PHYS,v.ELECTRO,v.PYRO,v.CRYO,v.HYDRO,v.GEO,v.ANEMO];return Object(s.jsxs)("div",{className:"AggrigatedStats",children:[Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:"subtitle2",children:[b.name," Stats"]})}),Object(s.jsxs)("p",{children:[v.ATK," : ",t.getStat(v.ATK)]}),Object(s.jsxs)("p",{children:[v.ATKPER," : ",t.getStat(v.ATKPER)," %"]}),Object(s.jsxs)("p",{children:[v.ARTIFACTATK," : ",t.getStat(v.ARTIFACTATK)]}),Object(s.jsxs)("p",{children:["Total atk : ",t.getTotalAtk()]}),Object(s.jsxs)("p",{children:[v.CRITC," ",t.getStat(v.CRITC)," "]}),Object(s.jsxs)("p",{children:[v.CRITD," ",t.getStat(v.CRITD)," "]}),e.map((function(e){return 0!==t.getStat(e)?Object(s.jsxs)("p",{children:[e," ",t.getStat(e)," "]},e):""}))]})}}]),a}(i.a.Component),E=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.characterStats,e=Math.floor(parseFloat(t.getTotalAtk())/100*parseFloat(this.props.value))*(1+(parseFloat(t.getStat(this.props.type))||0)/100),a=Math.floor(e+e*(parseFloat(t.getStat(v.CRITD))||0)/100),n=Math.floor(e*(1-(parseFloat(t.getStat(v.CRITC))||0)/100)+a*(parseFloat(t.getStat(v.CRITC))||0)/100);return Object(s.jsxs)("div",{className:"TalentEffect",children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"subtitle2",children:this.props.name})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:["Effect multiplyer: ",this.props.value,"%"]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:["Effect damage: ",e]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:["Effect crit damage: ",a]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:["Effect averaged damage: ",n]})})]})}}]),a}(i.a.Component),A=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"subtitle2",children:this.props.talent.name})}),Object(s.jsx)("div",{children:this.props.talent.effects.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)(E,{name:e.name,type:e.type,value:e.value[t.props.talentLevel],characterStats:t.props.characterStats})},e.name)}))})]})}}]),a}(i.a.Component),R=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=0;return Object(s.jsxs)("div",{className:"TalentInfo",children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"subtitle",children:"Talents"})}),b.talents.map((function(a){return Object(s.jsx)("div",{children:Object(s.jsx)(A,{talent:a,characterStats:t.props.characterStats,talentLevel:t.props.characterStats.talentLevel[e++]-1})},a.name)}))]})}}]),a}(i.a.Component),T=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).updateCharacterStats=function(t,e){var a=s.state.characterStats;a.updateItem(t,e),s.setState({characterStats:a})},s.state={characterStats:new p,buildUrl:"",encodeList:[],decodedData:(new C).decode(window.location.pathname.slice(1))},s.talentLevelChange=s.talentLevelChange.bind(Object(u.a)(s)),s.generateUrl=s.generateUrl.bind(Object(u.a)(s)),s}return Object(o.a)(a,[{key:"generateUrl",value:function(){for(var t=[],e=this.state.encodeList.length,a=0;a<e;++a)t=t.concat(this.state.encodeList[a]());console.log(t),this.setState({buildUrl:"genshinimpactcharacterbuilder.github.io/"+(new C).encode(t)})}},{key:"talentLevelChange",value:function(t,e){var a=this.state.characterStats;a.talentLevel[t]=e,this.setState({characterStats:a})}},{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"Loadout",children:[Object(s.jsx)(P,{}),Object(s.jsxs)("div",{className:"Loadout-body",children:[Object(s.jsx)("div",{className:"PrimarySection",children:Object(s.jsx)("div",{className:"BoxInfo",children:Object(s.jsxs)("div",{className:"UrlGenerator",children:[Object(s.jsx)("button",{type:"button",onClick:this.generateUrl,children:"Generate URL"}),document.queryCommandSupported("copy")&&Object(s.jsx)("button",{type:"button",onClick:function(e){var a=document.createElement("textarea");a.value=t.state.buildUrl,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)},children:"Copy"}),Object(s.jsx)("p",{className:"GeneratedUrl",children:this.state.buildUrl})]})})}),Object(s.jsx)("div",{className:"subtitle",children:"Character Info"}),Object(s.jsxs)("div",{className:"PrimarySection",children:[Object(s.jsx)("div",{className:"BoxInfo",children:Object(s.jsx)(j,{statItemId:"character",decodedData:this.state.decodedData,updateStats:this.updateCharacterStats,talentLevelChange:this.talentLevelChange,encodeList:this.state.encodeList})}),Object(s.jsx)("div",{className:"BoxInfo",children:Object(s.jsx)(S,{statItemId:"weapon",decodedData:this.state.decodedData,updateStats:this.updateCharacterStats,encodeList:this.state.encodeList})})]}),Object(s.jsx)("div",{className:"subtitle",children:"Artifacts"}),Object(s.jsx)(x,{decodedData:this.state.decodedData,updateStats:this.updateCharacterStats,encodeList:this.state.encodeList}),Object(s.jsx)("div",{className:"subtitle",children:"Stats"}),Object(s.jsx)("div",{className:"PrimarySection",children:Object(s.jsx)(k,{characterStats:this.state.characterStats})}),Object(s.jsx)("div",{className:"subtitle",children:"Talent Analysis"}),Object(s.jsx)("div",{className:"PrimarySection",children:Object(s.jsx)(R,{characterStats:this.state.characterStats})})]})]})}}]),a}(i.a.Component),P=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"BuildInfo",children:Object(s.jsx)("p",{className:"title",children:"Genshin Impact Character Builder"})})}}]),a}(i.a.Component);c.a.render(Object(s.jsx)(T,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7bfaae13.chunk.js.map