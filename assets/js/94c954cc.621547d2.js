"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[4772],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),o=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},d="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),d=o(a),N=n,u=d["".concat(m,".").concat(N)]||d[N]||f[N]||l;return a?r.createElement(u,p(p({ref:e},k),{},{components:a})):r.createElement(u,p({ref:e},k))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=N;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[d]="string"==typeof t?t:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},6735:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const l={id:"10-parquet",title:"Parquet",sidebar_position:10},p=void 0,i={unversionedId:"flinksql/format/10-parquet",id:"flinksql/format/10-parquet",title:"Parquet",description:"\u8bf4\u660e",source:"@site/docs/flinksql/format/10-parquet.md",sourceDirName:"flinksql/format",slug:"/flinksql/format/10-parquet",permalink:"/docs/flinksql/format/10-parquet",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/flinksql/format/10-parquet.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"10-parquet",title:"Parquet",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Ogg",permalink:"/docs/flinksql/format/9-ogg"},next:{title:"Orc",permalink:"/docs/flinksql/format/11-orc"}},m={},o=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u4f7f\u7528Parquet\u683c\u5f0f",id:"\u4f7f\u7528parquet\u683c\u5f0f",level:2},{value:"Format \u53c2\u6570",id:"format-\u53c2\u6570",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],k={toc:o};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,n.kt)("p",null,"\u652f\u6301\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Format: Serialization Schema \u5e8f\u5217\u5316\u683c\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"Format: Deserialization Schema \u53cd\u5e8f\u5217\u5316\u683c\u5f0f")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://parquet.apache.org/"},"Apache Parquet")," \u683c\u5f0f\u5141\u8bb8\u8bfb\u5199 Parquet \u6570\u636e."),(0,n.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,n.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528Parquet\u683c\u5f0f\uff0c\u4f7f\u7528\u81ea\u52a8\u5316\u6784\u5efa\u5de5\u5177(\u5982Maven\u6216SBT)\u7684\u9879\u76ee\u548c\u4f7f\u7528SQL JAR\u5305\u7684SQL Client\u90fd\u9700\u8981\u4ee5\u4e0b\u4f9d\u8d56\u9879\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-parquet_2.11</artifactId>\n    <version>1.13.0</version>\n</dependency>\n")),(0,n.kt)("p",null,"\u6ce8\u610f\u81ea\u5df1\u4f7f\u7528\u7684 flink \u548c scala \u7248\u672c\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528parquet\u683c\u5f0f"},"\u4f7f\u7528Parquet\u683c\u5f0f"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u7528 Filesystem \u8fde\u63a5\u5668\u548c Parquet \u683c\u5f0f\u521b\u5efa\u8868\u7684\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE user_behavior (\nuser_id BIGINT,\n    item_id BIGINT,\n    category_id BIGINT,\n    behavior STRING,\n    ts TIMESTAMP(3),\n    dt STRING\n) PARTITIONED BY (dt) WITH (\n    'connector' = 'filesystem',\n    'path' = '/tmp/user_behavior',\n    'format' = 'parquet'\n)\n")),(0,n.kt)("h2",{id:"format-\u53c2\u6570"},"Format \u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"format"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u4f7f\u7528\u7684\u683c\u5f0f\uff0c\u6b64\u5904\u5e94\u4e3a ",(0,n.kt)("strong",{parentName:"td"},"parquet")," \u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"parquet.utc-timezone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528 UTC \u65f6\u533a\u6216\u672c\u5730\u65f6\u533a\u5728\u7eaa\u5143\u65f6\u95f4\u548c LocalDateTime \u4e4b\u95f4\u8fdb\u884c\u8f6c\u6362\u3002Hive 0.x/1.x/2.x \u4f7f\u7528\u672c\u5730\u65f6\u533a\uff0c\u4f46 Hive 3.x \u4f7f\u7528 UTC \u65f6\u533a\u3002")))),(0,n.kt)("p",null,"Parquet \u683c\u5f0f\u4e5f\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"ParquetOutputFormat")," \u7684\u914d\u7f6e\u3002 \u4f8b\u5982, \u53ef\u4ee5\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"parquet.compression=GZIP")," \u6765\u5f00\u542f gzip \u538b\u7f29\u3002"),(0,n.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,n.kt)("p",null,"\u76ee\u524d\uff0cParquet \u683c\u5f0f\u7c7b\u578b\u6620\u5c04\u4e0e Apache Hive \u517c\u5bb9\uff0c\u4f46\u4e0e Apache Spark \u6709\u6240\u4e0d\u540c\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Timestamp\uff1a\u4e0d\u53c2\u8003\u7cbe\u5ea6\uff0c\u76f4\u63a5\u6620\u5c04 timestamp \u7c7b\u578b\u81f3 int96\u3002"),(0,n.kt)("li",{parentName:"ul"},"Decimal\uff1a\u6839\u636e\u7cbe\u5ea6\uff0c\u6620\u5c04 decimal \u7c7b\u578b\u81f3\u56fa\u5b9a\u957f\u5ea6\u5b57\u8282\u7684\u6570\u7ec4\u3002")),(0,n.kt)("p",null,"\u4e0b\u8868\u5217\u4e3e\u4e86 Flink \u4e2d\u7684\u6570\u636e\u7c7b\u578b\u4e0e JSON \u4e2d\u7684\u6570\u636e\u7c7b\u578b\u7684\u6620\u5c04\u5173\u7cfb\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Flink \u6570\u636e\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Parquet \u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Parquet \u903b\u8f91\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CHAR / VARCHAR / STRING"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BINARY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UTF8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BINARY / VARBINARY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BINARY"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"FIXED_LEN_BYTE_ARRAY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"DECIMAL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"INT32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"INT_8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"INT32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"INT_16")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"INT32"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"INT64"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"INT32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"INT32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TIME_MILLIS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIMESTAMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"INT96"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"\u4ece flink-1.15.x \u5f00\u59cb\u652f\u6301"),(0,n.kt)("br",null),"ARRAY"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"LIST")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"\u4ece flink-1.15.x \u5f00\u59cb\u652f\u6301"),(0,n.kt)("br",null),"MAP"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"MAP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"\u4ece flink-1.15.x \u5f00\u59cb\u652f\u6301"),(0,n.kt)("br",null),"ROW"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"STRUCT")))),(0,n.kt)("p",null,"\u6ce8\u610f"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"flink-1.13.x"),"\uff1a\u6682\u4e0d\u652f\u6301\u590d\u5408\u6570\u636e\u7c7b\u578b\uff08Array\u3001Map \u4e0e Row\uff09\u3002\n",(0,n.kt)("strong",{parentName:"p"},"flink-1.15.x"),"\uff1a\u590d\u5408\u6570\u636e\u7c7b\u578b\uff08Array\u3001Map \u4e0e Row\uff09\u53ea\u652f\u6301\u5199\uff0c\u8fd8\u4e0d\u652f\u6301\u8bfb\u3002"))}d.isMDXComponent=!0}}]);