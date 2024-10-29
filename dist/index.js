(()=>{var e,t={886:(e,t,a)=>{"use strict";var n={};a.r(n),a.d(n,{SUBTITLE_TYPOGRAPHY:()=>B,TITLE_TYPOGRAPHY:()=>x});const r=window.wp.i18n,l=(window.wp.blocks,window.wp.element),o=window.wp.blockEditor,s=window.wp.data;var i=a(942),c=a.n(i);const p=window.wp.components,d=window.wp.hooks,b="wrprBg",g="wrpMargin",u="wrpPadding",m="wrpBorderShadow",v="titleMargin",y="subtitleMargin",h="separatorMargin",k="separatorLineSize",w="separatorIconSize",f="separatorWidth",S=[{label:"px",value:"px"},{label:"em",value:"em"}],E=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"}],$=[{label:(0,r.__)("Line","essential-blocks"),value:"line"},{label:(0,r.__)("Icon","essential-blocks"),value:"icon"}],C=[{label:(0,r.__)("Top","essential-blocks"),value:"top"},{label:(0,r.__)("Bottom","essential-blocks"),value:"bottom"}],_=[{label:(0,r.__)("Default","essential-blocks"),value:"preset-0"},{label:(0,r.__)("Preset 1","essential-blocks"),value:"preset-1"},{label:(0,r.__)("Preset 2","essential-blocks"),value:"preset-2"},{label:(0,r.__)("Preset 3","essential-blocks"),value:"preset-3"}],T=[{label:(0,r.__)((0,l.createElement)(p.Dashicon,{icon:"editor-alignleft"})),value:"left"},{label:(0,r.__)((0,l.createElement)(p.Dashicon,{icon:"editor-aligncenter"})),value:"center"},{label:(0,r.__)((0,l.createElement)(p.Dashicon,{icon:"editor-alignright"})),value:"right"},{label:(0,r.__)((0,l.createElement)(p.Dashicon,{icon:"menu"})),value:"justify"}],N=[{label:(0,r.__)("H1","essential-blocks"),value:"h1"},{label:(0,r.__)("H2","essential-blocks"),value:"h2"},{label:(0,r.__)("H3","essential-blocks"),value:"h3"},{label:(0,r.__)("H4","essential-blocks"),value:"h4"},{label:(0,r.__)("H5","essential-blocks"),value:"h5"},{label:(0,r.__)("H6","essential-blocks"),value:"h6"},{label:(0,r.__)("P","essential-blocks"),value:"p"}],P=[{label:(0,r.__)("Solid","essential-blocks"),value:"solid"},{label:(0,r.__)("Dashed","essential-blocks"),value:"dashed"},{label:(0,r.__)("Dotted","essential-blocks"),value:"dotted"},{label:(0,r.__)("Double","essential-blocks"),value:"double"},{label:(0,r.__)("Groove","essential-blocks"),value:"groove"},{label:(0,r.__)("Outset","essential-blocks"),value:"outset"},{label:(0,r.__)("Ridge","essential-blocks"),value:"ridge"}],x="title",B="subtitle",{generateDimensionsAttributes:H,generateTypographyAttributes:R,generateBackgroundAttributes:A,generateBorderShadowAttributes:D,generateResponsiveRangeAttributes:M}=window.EBAdvHeadingControls,O={resOption:{type:"string",default:"Desktop"},blockId:{type:"string"},blockRoot:{type:"string",default:"essential_block"},blockMeta:{type:"object"},preset:{type:"string",default:"button-1"},tagName:{type:"string",default:"h2"},titleText:{type:"string",default:"Essential Blocks Advanced Heading"},subtitleTagName:{type:"string",default:"p"},subtitleText:{type:"string",default:"Essential Blocks Advance Subtitle"},topSpace:{type:"number"},topSpaceUnit:{type:"string",default:"px"},bottomSpace:{type:"number"},bottomSpaceUnit:{type:"string",default:"px"},titleColor:{type:"string",default:"#551ef7"},titleHoverColor:{type:"string"},subtitleColor:{type:"string",default:"#555555"},subtitleHoverColor:{type:"string"},separatorColor:{type:"string",default:"#551ef7"},separatorHoverColor:{type:"string"},align:{type:"string",default:"left"},displaySubtitle:{type:"boolean",default:!1},displaySeperator:{type:"boolean",default:!1},seperatorPosition:{type:"string",default:"bottom"},seperatorType:{type:"string",default:"line"},seperatorStyle:{type:"string",default:"solid"},separatorIcon:{type:"string",default:"fas fa-arrow-circle-down"},...R(Object.values(n)),...H(g),...H(u),...H(v,{top:0,bottom:15,right:0,left:0,isLinked:!1}),...H(y,{top:0,bottom:20,right:0,left:0,isLinked:!1}),...H(h,{top:0,bottom:0,right:0,left:0,isLinked:!1}),...D(m,{bdrDefaults:{top:0,bottom:0,right:0,left:0}}),...A(b,{defaultBgGradient:"linear-gradient(45deg,#ffffff,#ffffff)"}),...M(k,{defaultRange:4}),...M(w,{defaultRange:30}),...M(f,{defaultRange:100})},{ResponsiveDimensionsControl:I,TypographyDropdown:L,BorderShadowControl:F,ResponsiveRangeController:j,BackgroundControl:q,AdvancedControls:z,DynamicInputControl:G,ColorControl:V,EBIconPicker:U}=window.EBAdvHeadingControls,Y=function(e){const{attributes:t,setAttributes:a}=e,{resOption:n,preset:s,align:i,tagName:c,titleText:H,subtitleTagName:R,subtitleText:A,displaySubtitle:D,displaySeperator:M,titleColor:Y,titleHoverColor:W,subtitleColor:J,subtitleHoverColor:K,subtitleColorType:X,separatorColor:Q,separatorHoverColor:Z,separatorColorType:ee,seperatorPosition:te,seperatorType:ae,seperatorStyle:ne,separatorIcon:re}=t,le={setAttributes:a,resOption:n,attributes:t,objAttributes:O};return(0,l.createElement)(o.InspectorControls,{key:"controls"},(0,l.createElement)("div",{className:"eb-panel-control"},(0,l.createElement)(p.TabPanel,{className:"eb-parent-tab-panel",activeClass:"active-tab",tabs:[{name:"general",title:"General",className:"eb-tab general"},{name:"styles",title:"Style",className:"eb-tab styles"},{name:"advance",title:"Advanced",className:"eb-tab advance"}]},(e=>(0,l.createElement)("div",{className:"eb-tab-controls"+e.name},"general"===e.name&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(p.PanelBody,{title:(0,r.__)("General","essential-blocks"),initialOpen:!0},(0,l.createElement)(p.SelectControl,{label:(0,r.__)("Preset Designs","essential-blocks"),value:s,options:(0,d.applyFilters)("eb_advanced_heading_preset",_),onChange:e=>(e=>{switch(a({preset:e}),e){case"preset-0":a({displaySubtitle:!1,displaySeperator:!1,align:"left",titleColor:"#551ef7",subtitleColor:"#555555",separatorColor:"#551ef7",seperatorType:"line",wrpPaddingisLinked:!0,wrpPaddingUnit:"px",wrpPaddingTop:"0",wrpPaddingBottom:"0",wrpPaddingLeft:"0",wrpPaddingRight:"0",wrprBgbackgroundColor:"rgba(255,255,255,1)",wrprBgbackgroundType:"classic"});break;case"preset-1":a({displaySubtitle:!0,displaySeperator:!0,align:"left",titleColor:"#551ef7",subtitleColor:"#555555",separatorColor:"#551ef7",seperatorType:"line",wrpPaddingisLinked:!1,wrpPaddingUnit:"px",wrpPaddingTop:"0",wrpPaddingBottom:"0",wrpPaddingLeft:"0",wrpPaddingRight:"0",wrprBgbackgroundColor:"rgba(255,255,255,1)",wrprBgbackgroundType:"classic"});break;case"preset-2":a({displaySubtitle:!0,displaySeperator:!0,align:"center",titleColor:"#551ef7",subtitleColor:"#555555",separatorColor:"#551ef7",seperatorType:"icon",separatorIcon:"fas fa-bullhorn",wrpPaddingisLinked:!1,wrpPaddingUnit:"px",wrpPaddingTop:"0",wrpPaddingBottom:"0",wrpPaddingLeft:"0",wrpPaddingRight:"0",wrprBgbackgroundColor:"rgba(255,255,255,1)",wrprBgbackgroundType:"classic"});break;case"preset-3":a({displaySubtitle:!0,displaySeperator:!0,align:"center",titleColor:"#551ef7",subtitleColor:"#9b51e0",separatorColor:"#551ef7",seperatorType:"icon",separatorIcon:"fas fa-exchange-alt",wrpPaddingisLinked:!1,wrpPaddingUnit:"px",wrpPaddingTop:"30",wrpPaddingBottom:"30",wrpPaddingLeft:"15",wrpPaddingRight:"15",wrprBgbackgroundColor:"rgba(206,190,255,1)",wrprBgbackgroundType:"classic"});break;default:return!1}})(e)}),(0,l.createElement)(p.BaseControl,{label:(0,r.__)("Alignment","essential-blocks"),id:"eb-advance-heading-alignment"},(0,l.createElement)(p.ButtonGroup,{id:"eb-advance-heading-alignment"},T.map(((e,t)=>(0,l.createElement)(p.Button,{key:t,isPrimary:i===e.value,isSecondary:i!==e.value,onClick:()=>a({align:e.value})},e.label))))),(0,l.createElement)(p.BaseControl,{label:(0,r.__)("Title Level","essential-blocks"),id:"eb-advance-heading-alignment"},(0,l.createElement)(p.ButtonGroup,{className:"eb-advance-heading-alignment eb-html-tag-buttongroup"},N.map(((e,t)=>(0,l.createElement)(p.Button,{key:t,isPrimary:c===e.value,isSecondary:c!==e.value,onClick:()=>a({tagName:e.value})},e.label))))),(0,l.createElement)(G,{label:"Title Text",attrName:"titleText",inputValue:H,setAttributes:a,onChange:e=>a({titleText:e})}),(0,l.createElement)(p.ToggleControl,{label:(0,r.__)("Display Subtilte","essential-blocks"),checked:D,onChange:()=>a({displaySubtitle:!D})}),D&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(p.BaseControl,{label:(0,r.__)("Subtitle Level","essential-blocks"),id:"eb-advance-heading-alignment"},(0,l.createElement)(p.ButtonGroup,{className:"eb-advance-heading-alignment eb-html-tag-buttongroup"},N.map(((e,t)=>(0,l.createElement)(p.Button,{key:t,isPrimary:R===e.value,isSecondary:R!==e.value,onClick:()=>a({subtitleTagName:e.value})},e.label))))),(0,l.createElement)(G,{label:"Subtitle Text",attrName:"subtitleText",inputValue:A,setAttributes:a,onChange:e=>a({subtitleText:e})})),(0,l.createElement)(p.ToggleControl,{label:(0,r.__)("Display Separator","essential-blocks"),checked:M,onChange:()=>a({displaySeperator:!M})}))),"styles"===e.name&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(p.PanelBody,{title:(0,r.__)("Title","essential-blocks"),initialOpen:!0},(0,l.createElement)(L,{baseLabel:(0,r.__)("Typography","essential-blocks"),typographyPrefixConstant:x,resRequiredProps:le}),(0,l.createElement)(V,{label:(0,r.__)("Title Color","essential-blocks"),color:Y,onChange:e=>a({titleColor:e})}),(0,l.createElement)(V,{label:(0,r.__)("Title Hover Color","essential-blocks"),color:W,onChange:e=>a({titleHoverColor:e})}),(0,l.createElement)(I,{resRequiredProps:le,controlName:v,baseLabel:"Margin"})),(0,l.createElement)(p.PanelBody,{title:(0,r.__)("Subtitle","essential-blocks"),initialOpen:!1},(0,l.createElement)(L,{baseLabel:(0,r.__)("Typography","essential-blocks"),typographyPrefixConstant:B,resRequiredProps:le}),(0,l.createElement)(V,{label:(0,r.__)("Subtitle Color","essential-blocks"),color:J,onChange:e=>a({subtitleColor:e})}),(0,l.createElement)(V,{label:(0,r.__)("Subtitle Hover Color","essential-blocks"),color:K,onChange:e=>a({subtitleHoverColor:e})}),(0,l.createElement)(I,{resRequiredProps:le,controlName:y,baseLabel:"Margin"})),M&&(0,l.createElement)(p.PanelBody,{title:(0,r.__)("Separator","essential-blocks"),initialOpen:!1},(0,l.createElement)(p.SelectControl,{label:(0,r.__)("Separator Position","essential-blocks"),value:te,options:C,onChange:e=>a({seperatorPosition:e})}),(0,l.createElement)(p.BaseControl,{label:(0,r.__)("Separator Type","essential-blocks"),id:"eb-advance-heading-alignment"},(0,l.createElement)(p.ButtonGroup,{id:"eb-advance-heading-alignment"},$.map(((e,t)=>(0,l.createElement)(p.Button,{key:t,isPrimary:ae===e.value,isSecondary:ae!==e.value,onClick:()=>a({seperatorType:e.value})},e.label))))),"line"===ae&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(p.SelectControl,{label:(0,r.__)("Separator Style","essential-blocks"),value:ne,options:P,onChange:e=>a({seperatorStyle:e})}),(0,l.createElement)(j,{baseLabel:(0,r.__)("Separator Height","essential-blocks"),controlName:k,resRequiredProps:le,units:S,min:0,max:100,step:1})),"icon"===ae&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(U,{value:re,onChange:e=>a({separatorIcon:e})}),(0,l.createElement)(j,{baseLabel:(0,r.__)("Icon Size","essential-blocks"),controlName:w,resRequiredProps:le,units:S,min:0,max:100,step:1})),(0,l.createElement)(j,{baseLabel:(0,r.__)("Separator Width","essential-blocks"),controlName:f,resRequiredProps:le,units:E,min:0,max:300,step:1}),(0,l.createElement)(V,{label:(0,r.__)("Separator Color","essential-blocks"),color:Q,onChange:e=>a({separatorColor:e})}),(0,l.createElement)(V,{label:(0,r.__)("Separator Hover Color","essential-blocks"),color:Z,onChange:e=>a({separatorHoverColor:e})}),(0,l.createElement)(I,{resRequiredProps:le,controlName:h,baseLabel:"Margin"}))),"advance"===e.name&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(p.PanelBody,null,(0,l.createElement)(I,{resRequiredProps:le,controlName:g,baseLabel:"Margin"}),(0,l.createElement)(I,{resRequiredProps:le,controlName:u,baseLabel:"Padding"})),(0,l.createElement)(p.PanelBody,{title:(0,r.__)("Background","essential-blocks"),initialOpen:!1},(0,l.createElement)(q,{controlName:b,resRequiredProps:le})),(0,l.createElement)(p.PanelBody,{title:(0,r.__)("Border & Shadow"),initialOpen:!1},(0,l.createElement)(F,{controlName:m,resRequiredProps:le})),(0,l.createElement)(z,{attributes:t,setAttributes:a})))))))},{softMinifyCssStrings:W,generateTypographyStyles:J,generateDimensionsControlStyles:K,generateBorderShadowStyles:X,generateResponsiveRangeStyles:Q,generateBackgroundControlStyles:Z,StyleComponent:ee}=window.EBAdvHeadingControls;function te(e){const{attributes:t,setAttributes:a,name:n}=e,{resOption:r,blockId:o,blockMeta:s,preset:i,align:c,tagName:p,titleText:d,subtitleTagName:S,subtitleText:E,displaySubtitle:$,displaySeperator:C,titleColor:_,titleHoverColor:T,subtitleColor:N,subtitleHoverColor:P,separatorColor:H,separatorHoverColor:R,seperatorPosition:A,seperatorType:D,seperatorStyle:M,separatorIcon:O,classHook:I,blockRoot:L}=t,{typoStylesDesktop:F,typoStylesTab:j,typoStylesMobile:q}=J({attributes:t,prefixConstant:x}),{typoStylesDesktop:z,typoStylesTab:G,typoStylesMobile:V}=J({attributes:t,prefixConstant:B}),{dimensionStylesDesktop:U,dimensionStylesTab:Y,dimensionStylesMobile:te}=K({controlName:g,styleFor:"margin",attributes:t}),{dimensionStylesDesktop:ae,dimensionStylesTab:ne,dimensionStylesMobile:re}=K({controlName:u,styleFor:"padding",attributes:t}),{dimensionStylesDesktop:le,dimensionStylesTab:oe,dimensionStylesMobile:se}=K({controlName:v,styleFor:"margin",attributes:t}),{dimensionStylesDesktop:ie,dimensionStylesTab:ce,dimensionStylesMobile:pe}=K({controlName:y,styleFor:"margin",attributes:t}),{dimensionStylesDesktop:de,dimensionStylesTab:be,dimensionStylesMobile:ge}=K({controlName:h,styleFor:"margin",attributes:t}),{styesDesktop:ue,styesTab:me,styesMobile:ve,stylesHoverDesktop:ye,stylesHoverTab:he,stylesHoverMobile:ke,transitionStyle:we}=X({controlName:m,attributes:t}),{rangeStylesDesktop:fe,rangeStylesTab:Se,rangeStylesMobile:Ee}=Q({controlName:k,property:"border-width",attributes:t}),{rangeStylesDesktop:$e,rangeStylesTab:Ce,rangeStylesMobile:_e}=Q({controlName:w,property:"font-size",attributes:t}),{rangeStylesDesktop:Te,rangeStylesTab:Ne,rangeStylesMobile:Pe}=Q({controlName:f,property:"width",attributes:t}),{backgroundStylesDesktop:xe,hoverBackgroundStylesDesktop:Be,backgroundStylesTab:He,hoverBackgroundStylesTab:Re,backgroundStylesMobile:Ae,hoverBackgroundStylesMobile:De,overlayStylesDesktop:Me,hoverOverlayStylesDesktop:Oe,overlayStylesTab:Ie,hoverOverlayStylesTab:Le,overlayStylesMobile:Fe,hoverOverlayStylesMobile:je,bgTransitionStyle:qe,ovlTransitionStyle:ze}=Z({attributes:t,controlName:b}),Ge=`\n\t\t.eb-advance-heading-wrapper.${o}{\n\t\t\t${Y}\n\t\t\t${ne}\n\t\t\t${me}\n\t\t\t${He}\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o}:hover {\n\t\t\t${he}\n\t\t\t${Re}\n\t\t}\n\n\t\t.eb-advance-heading-wrapper.${o}:before{\n\t\t\t${Ie}\n\t\t}\n\n\t\t.eb-advance-heading-wrapper.${o}:hover:before{\n\t\t\t${Le}\n\t\t}\n\t`,Ve=`\n\t\t.eb-advance-heading-wrapper.${o}{\n\t\t\t${te}\n\t\t\t${re}\n\t\t\t${ve}\n\t\t\t${Ae}\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o}:hover {\n\t\t\t${ke}\n\t\t\t${De}\n\t\t}\n\n\t\t.eb-advance-heading-wrapper.${o}:before{\n\t\t\t${Fe}\n\t\t}\n\n\t\t.eb-advance-heading-wrapper.${o}:hover:before{\n\t\t\t${je}\n\t\t}\n\t`,Ue=`\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-title {\n\t\t\t${j}\n\t\t\t${oe}\n\t\t}\n\t`,Ye=`\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-title {\n\t\t\t${q}\n\t\t\t${se}\n\t\t}\n\t`,We=`\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-subtitle {\n\t\t\t${G}\n\t\t\t${ce}\n\t\t}\n\t`,Je=`\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-subtitle {\n\t\t\t${V}\n\t\t\t${pe}\n\t\t}\n\t`,Ke=`\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-separator {\n\t\t\t${be}\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-separator.line {\n\t\t\t${Se}\n\t\t\t${Ne}\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-separator.icon {\n\t\t\t${Ce}\n\t\t}\n\t`,Xe=`\n\t.eb-advance-heading-wrapper.${o} .eb-ah-separator {\n\t\t\t${ge}\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-separator.line {\n\t\t\t${Ee}\n\t\t\t${Pe}\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-separator.icon {\n\t\t\t${_e}\n\t\t}\n\t`,Qe=W(`\n\t\t\t\n\t\t.eb-advance-heading-wrapper.${o}{\n\t\t\tposition: relative;\n\t\t\ttext-align: ${c};\n\t\t\t${U}\n\t\t\t${ae}\n\t\t\t${ue}\n\t\t\t${xe}\n\t\t\ttransition:${qe}, ${we};\n\t\t}\n\n\t\t.eb-advance-heading-wrapper.${o}:hover {\n\t\t\t${ye}\n\t\t\t${Be}\n\t\t}\n\n\t\t.eb-advance-heading-wrapper.${o}:before{\n\t\t\t${Me}\n\t\t\ttransition:${ze};\n\t\t}\n\n\t\t.eb-advance-heading-wrapper.${o}:hover:before{\n\t\t\t${Oe}\n\t\t}\n\t\n\t\t\t\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-title {\n\t\t\ttext-align: ${c};\n\t\t\tcolor: ${_};\n\t\t\t${F}\n\t\t\t${le}\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o}:hover .eb-ah-title {\n\t\t\tcolor: ${T};\n\t\t}\n\t\n\t\t\t\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-subtitle {\n\t\t\ttext-align: ${c};\n\t\t\tcolor: ${N};\n\t\t\t${z}\n\t\t\t${ie}\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o}:hover .eb-ah-subtitle {\n\t\t\tcolor: ${P};\n\t\t}\n\t\n\t\t\t\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-separator {\n\t\t\tcolor: ${N};\n\t\t\t${de}\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-separator.line {\n\t\t\tborder-style: none none ${M};\n\t\t\tborder-color: ${H};\n\t\t\t${fe}\n\t\t\t${Te}\n\t\t\t${"center"===c?"margin-left: auto; margin-right: auto":""}\n\t\t\t${"right"===c?"margin-left: auto; margin-right: 0":""}\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o}:hover .eb-ah-separator.line {\n\t\t\tborder-color: ${R};\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o} .eb-ah-separator.icon {\n\t\t\ttext-align: ${c};\n\t\t\tcolor: ${H};\n\t\t\t${$e}\n\t\t}\n\t\t.eb-advance-heading-wrapper.${o}:hover .eb-ah-separator.icon {\n\t\t\tcolor: ${R};\n\t\t}\n\t\n\t\t`),Ze=W(`\n\t\t\t${Ge}\n\t\t\t${Ue}\n\t\t\t${We}\n\t\t\t${Ke}\n\t\t`),et=W(`\n\t\t\t${Ve}\n\t\t\t${Ye}\n\t\t\t${Je}\n\t\t\t${Xe}\n\t\t`);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(ee,{attributes:t,setAttributes:a,desktopAllStyles:Qe,tabAllStyles:Ze,mobileAllStyles:et,blockName:n}))}const{duplicateBlockIdFix:ae,DynamicInputValueHandler:ne,EBDisplayIcon:re}=window.EBAdvHeadingControls,{EBDisplayIcon:le}=window.EBAdvHeadingControls,oe=[{attributes:{...O,titleText:{type:"string",default:"Essential Block Advanced Heading"},subtitleText:{type:"string",default:"Essential Block Advance Subtitle"}},supports:{anchor:!0},save:({attributes:e})=>{const{blockId:t,preset:a,tagName:n,titleText:r,subtitleTagName:s,displaySubtitle:i,subtitleText:c,seperatorType:p,displaySeperator:d,seperatorPosition:b,separatorIcon:g,classHook:u}=e;return(0,l.createElement)("div",o.useBlockProps.save(),(0,l.createElement)("div",{className:`eb-parent-wrapper eb-parent-${t} ${u}`},(0,l.createElement)("div",{className:`eb-advance-heading-wrapper ${t} ${a}`,"data-id":t},d&&"top"===b&&(0,l.createElement)("div",{className:"eb-ah-separator "+p},"icon"===p&&(0,l.createElement)("i",{className:`${g||"fas fa-arrow-circle-down"}`})),(0,l.createElement)(o.RichText.Content,{tagName:n,className:"eb-ah-title",value:r}),i&&(0,l.createElement)(o.RichText.Content,{tagName:s,className:"eb-ah-subtitle",value:c}),d&&"bottom"===b&&(0,l.createElement)("div",{className:"eb-ah-separator "+p},"icon"===p&&(0,l.createElement)("i",{className:`${g||"fas fa-arrow-circle-down"}`})))))}},{attributes:{...O},supports:{anchor:!0},save:({attributes:e})=>{const{blockId:t,preset:a,tagName:n,titleText:r,subtitleTagName:s,displaySubtitle:i,subtitleText:c,seperatorType:p,displaySeperator:d,separatorIcon:b,classHook:g}=e;return(0,l.createElement)("div",o.useBlockProps.save(),(0,l.createElement)("div",{className:`eb-parent-wrapper eb-parent-${t} ${g}`},(0,l.createElement)("div",{className:`eb-advance-heading-wrapper ${t} ${a}`,"data-id":t},(0,l.createElement)(o.RichText.Content,{tagName:n,className:"eb-ah-title",value:r}),i&&(0,l.createElement)(o.RichText.Content,{tagName:s,className:"eb-ah-subtitle",value:c}),d&&(0,l.createElement)("div",{className:"eb-ah-separator "+p},"icon"===p&&(0,l.createElement)("i",{className:`${b||"fas fa-arrow-circle-down"}`})))))}},{attributes:{...O},supports:{anchor:!0},save:({attributes:e})=>{const{blockId:t,preset:a,tagName:n,titleText:r,displaySubtitle:s,subtitleText:i,seperatorType:c,displaySeperator:p,separatorIcon:d}=e;return(0,l.createElement)("div",o.useBlockProps.save(),(0,l.createElement)("div",{className:`eb-advance-heading-wrapper ${t} ${a}`,"data-id":t},(0,l.createElement)(o.RichText.Content,{tagName:n,className:"eb-ah-title",value:r}),s&&(0,l.createElement)(o.RichText.Content,{tagName:"p",className:"eb-ah-subtitle",value:i}),p&&(0,l.createElement)("div",{className:"eb-ah-separator "+c},"icon"===c&&(0,l.createElement)("i",{className:`${d||"fas fa-arrow-circle-down"}`}))))}},{attributes:{...O},save:({attributes:e})=>{const{blockId:t,preset:a,tagName:n,titleText:r,displaySubtitle:s,subtitleText:i,seperatorType:c,displaySeperator:p,separatorIcon:d}=e;return(0,l.createElement)("div",o.useBlockProps.save(),(0,l.createElement)("div",{className:`eb-advance-heading-wrapper ${t} ${a}`,"data-id":t},(0,l.createElement)(o.RichText.Content,{tagName:n,className:"eb-ah-title",value:r}),s&&(0,l.createElement)(o.RichText.Content,{tagName:"p",className:"eb-ah-subtitle",value:i}),p&&(0,l.createElement)("div",{className:"eb-ah-separator "+c},"icon"===c&&(0,l.createElement)("i",{className:`${d||"fas fa-arrow-circle-down"}`}))))}}],se=JSON.parse('{"apiVersion":"2","name":"advanced-heading/advanced-heading","title":"Advanced Heading","category":"widgets","description":"Create Advanced Heading with Title, Subtitle and Separator Controls","textdomain":"advanced-heading"}'),{ebConditionalRegisterBlockType:ie}=EBAdvHeadingControls,{name:ce,category:pe}=se;ie(se,{keywords:[(0,r.__)("heading","essential-blocks"),(0,r.__)("Advanced Heading","essential-blocks"),(0,r.__)("heading block","essential-blocks"),(0,r.__)("heading box","essential-blocks")],icon:()=>(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"57",height:"56",fill:"none",viewBox:"0 0 57 56"},(0,l.createElement)("path",{fill:"#6C3BFF",d:"M2.829 2.686h31.8c.685 0 1.2-.515 1.2-1.2 0-.686-.515-1.2-1.2-1.2h-31.8C1.2.286 0 1.657 0 3.029v9.685c0 .857.343 1.543.857 2.143.514.514 1.372.857 2.143.857h4.2c1.543 0 2.829-1.371 2.829-2.828v-1.972h12.514v35.143h-9.514c-1.543 0-2.829 1.372-2.829 2.829v4.2c0 1.543 1.371 2.828 2.829 2.828H24.77c.686 0 1.2-.514 1.2-1.2 0-.685-.514-1.2-1.2-1.2H13.03a.369.369 0 01-.343-.343v-4.2c0-.171.171-.342.343-.342h10.714c.686 0 1.2-.515 1.2-1.2V9.543c0-.686-.514-1.2-1.2-1.2H8.57c-.685 0-1.2.514-1.2 1.2v3.171a.369.369 0 01-.342.343h-4.2c-.172 0-.172-.171-.343-.171 0 0-.172-.172-.172-.343V2.857c0 .172.172-.171.515-.171z"}),(0,l.createElement)("path",{fill:"#6C3BFF",d:"M42 46.143h-9.514V11H45v1.971c0 1.543 1.371 2.829 2.829 2.829h4.2c1.542 0 2.828-1.371 2.828-2.829V3.286c0-1.543-1.371-2.829-2.828-2.829H39.857c-.686 0-1.2.514-1.2 1.2 0 .686.514 1.2 1.2 1.2h12.086c.171 0 .343.172.343.343v9.686a.369.369 0 01-.343.343h-4.2a.369.369 0 01-.343-.343V9.714c0-.685-.514-1.2-1.2-1.2H31.286c-.686 0-1.2.515-1.2 1.2v37.629c0 .686.514 1.2 1.2 1.2H42c.171 0 .343.171.343.343v4.2a.369.369 0 01-.343.343H30c-.686 0-1.2.514-1.2 1.2 0 .685.514 1.2 1.2 1.2h11.743c1.543 0 2.828-1.372 2.828-2.829v-4.2c.258-1.286-1.028-2.657-2.571-2.657z"}),(0,l.createElement)("path",{fill:"#6C3BFF",d:"M43.543 34.143h.857c.686 0 1.2-.514 1.2-1.2 0-.686-.514-1.2-1.2-1.2h-.857c-.686 0-1.2.514-1.2 1.2 0 .686.514 1.2 1.2 1.2zM55.029 31.743H48c-.686 0-1.2.514-1.2 1.2 0 .686.514 1.2 1.2 1.2h7.029c.685 0 1.2-.514 1.2-1.2 0-.686-.515-1.2-1.2-1.2zM43.543 38.343H54.77c.686 0 1.2-.514 1.2-1.2 0-.686-.514-1.2-1.2-1.2H43.543c-.686 0-1.2.514-1.2 1.2 0 .686.514 1.2 1.2 1.2zM56.229 41.171c0-.685-.515-1.2-1.2-1.2H43.543c-.686 0-1.2.515-1.2 1.2 0 .686.514 1.2 1.2 1.2H54.77c.943.258 1.458-.514 1.458-1.2z"})),attributes:O,edit:function(e){const{attributes:t,setAttributes:a,className:n,clientId:r,isSelected:i,name:p}=e,{resOption:d,blockId:b,blockMeta:g,preset:u,align:m,tagName:v,titleText:y,subtitleTagName:h,subtitleText:k,displaySubtitle:w,displaySeperator:f,seperatorPosition:S,seperatorType:E,separatorIcon:$,classHook:C}=t;(0,l.useEffect)((()=>{ae({BLOCK_PREFIX:"eb-advance-heading",blockId:b,setAttributes:a,select:s.select,clientId:r})}),[]);const _=(0,o.useBlockProps)({className:c()(n,"eb-guten-block-main-parent-wrapper")});return(0,l.createElement)(l.Fragment,null,i&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(o.BlockControls,null,(0,l.createElement)(o.AlignmentToolbar,{value:m,onChange:e=>a({align:e}),controls:["left","center","right"]})),(0,l.createElement)(Y,{attributes:t,setAttributes:a})),(0,l.createElement)("div",_,(0,l.createElement)(te,e),(0,l.createElement)("div",{className:`eb-parent-wrapper eb-parent-${b} ${C}`},(0,l.createElement)("div",{className:`eb-advance-heading-wrapper ${b} ${u}`,"data-id":b},f&&"top"===S&&(0,l.createElement)("div",{className:"eb-ah-separator "+E},"icon"===E&&(0,l.createElement)(re,{icon:$})),(0,l.createElement)(ne,{value:y,placeholder:"Add your text here",tagName:v,className:"eb-ah-title",allowedFormats:["core/bold","core/italic","core/link","core/strikethrough","core/underline","core/text-color"],onChange:e=>a({titleText:e}),readOnly:!0}),w&&(0,l.createElement)(ne,{tagName:h,className:"eb-ah-subtitle",value:k,allowedFormats:["core/bold","core/italic","core/link","core/strikethrough","core/underline","core/text-color"],onChange:e=>a({subtitleText:e}),readOnly:!0}),f&&"bottom"===S&&(0,l.createElement)("div",{className:"eb-ah-separator "+E},"icon"===E&&(0,l.createElement)(re,{icon:$}))))))},save:({attributes:e})=>{const{blockId:t,preset:a,tagName:n,titleText:r,subtitleTagName:s,displaySubtitle:i,subtitleText:c,seperatorType:p,displaySeperator:d,seperatorPosition:b,separatorIcon:g,classHook:u}=e;return(0,l.createElement)("div",o.useBlockProps.save(),(0,l.createElement)("div",{className:`eb-parent-wrapper eb-parent-${t} ${u}`},(0,l.createElement)("div",{className:`eb-advance-heading-wrapper ${t} ${a}`,"data-id":t},d&&"top"===b&&(0,l.createElement)("div",{className:"eb-ah-separator "+p},"icon"===p&&(0,l.createElement)(le,{icon:g})),(0,l.createElement)(o.RichText.Content,{tagName:n,className:"eb-ah-title",value:r}),i&&(0,l.createElement)(o.RichText.Content,{tagName:s,className:"eb-ah-subtitle",value:c}),d&&"bottom"===b&&(0,l.createElement)("div",{className:"eb-ah-separator "+p},"icon"===p&&(0,l.createElement)(le,{icon:g})))))},example:{attributes:{displaySubtitle:!0,displaySeperator:!0,align:"left",titleColor:"#551ef7",subtitleColor:"#555555",separatorColor:"#551ef7",seperatorType:"line",wrpPaddingisLinked:!1,wrpPaddingUnit:"px",wrpPaddingTop:"0",wrpPaddingBottom:"0",wrpPaddingLeft:"0",wrpPaddingRight:"0",wrprBgbackgroundColor:"rgba(255,255,255,1)",wrprBgbackgroundType:"classic"}},deprecated:oe})},942:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=o(e,l(a)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)n.call(e,a)&&e[a]&&(t=o(t,a));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,a,r,l)=>{if(!a){var o=1/0;for(p=0;p<e.length;p++){for(var[a,r,l]=e[p],s=!0,i=0;i<a.length;i++)(!1&l||o>=l)&&Object.keys(n.O).every((e=>n.O[e](a[i])))?a.splice(i--,1):(s=!1,l<o&&(o=l));if(s){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[a,r,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={555:0,767:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,l,[o,s,i]=a,c=0;if(o.some((t=>0!==e[t]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(i)var p=i(n)}for(t&&t(a);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(p)},a=globalThis.webpackChunkadvance_heading=globalThis.webpackChunkadvance_heading||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[767],(()=>n(886)));r=n.O(r)})();