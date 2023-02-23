"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5103],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(b,o(o({ref:n},u),{},{components:t})):r.createElement(b,o({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={id:"Variable",title:"Variable management",sidebar_position:7},o=void 0,l={unversionedId:"user-guide/Variable",id:"user-guide/Variable",title:"Variable management",description:"Background Introduction",source:"@site/docs/user-guide/7-Variable.md",sourceDirName:"user-guide",slug:"/user-guide/Variable",permalink:"/docs/user-guide/Variable",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/user-guide/7-Variable.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"Variable",title:"Variable management",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"User, team, role and member management",permalink:"/docs/user-guide/Team"},next:{title:"Programming paradigm",permalink:"/docs/development/Programming-paradigm"}},s={},c=[{value:"Background Introduction",id:"background-introduction",level:2},{value:"Create Variable",id:"create-variable",level:2},{value:"Reference variables in Flink SQL",id:"reference-variables-in-flink-sql",level:2},{value:"Reference variables in args of Flink JAR jobs",id:"reference-variables-in-args-of-flink-jar-jobs",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background-introduction"},"Background Introduction"),(0,a.kt)("p",null,"In the actual production environment, Flink jobs are generally complex, and usually require multiple external components. For example, Flink jobs consume data from Kafka, then connect external components such as HBase or Redis to obtain additional business information, and then write it to the downstream external components. There are the following problems."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The connection information of external components, such as IP, port and user password, needs to be configured in the application args and transferred to the Flink job,\nso that the connection information of external components is distributed in multiple applications. Once the connection information of external components changes,\nmany application args parameters need to be modified, which will lead to high operation and maintenance costs."),(0,a.kt)("li",{parentName:"ul"},"There are many people in the team developing real-time computing jobs. There is no uniform specification for the connection information of the external components passed to the job,\nresulting in different parameter names of the same component. This is difficult to count which external components are dependent."),(0,a.kt)("li",{parentName:"ul"},"In production practice, there are usually multiple sets of environments, such as test environment and\nproduction environment. It is not intuitive to judge whether a component belongs to a test environment or\na production environment simply through IP and ports. Even if it can be judged, there are some omissions.\nIn this way, the connection information online to the production environment may be external components of the test environment,\nor components of the production environment are inadvertently configured during testing, leading to production failures.")),(0,a.kt)("h2",{id:"create-variable"},"Create Variable"),(0,a.kt)("p",null,"Variables are isolated between teams, there are independent variables under different teams, so you need to choose which Team to create variables before creating,\nHere we choose the default team, and then click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add New")," button to start creating variables."),(0,a.kt)("img",{src:"/doc/image/variable/create_variable.png"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"If the value of the variable is sensitive, such as a database password, you can turn on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Desensitization")," option when creating the variable, then the value of the variable will be displayed with ",(0,a.kt)("inlineCode",{parentName:"p"},"********")," instead."),(0,a.kt)("img",{src:"/doc/image/variable/create_variable_desensitization.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/doc/image/variable/variable_list.png"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"reference-variables-in-flink-sql"},"Reference variables in Flink SQL"),(0,a.kt)("p",null,"The variables that have been created can be referenced in Flink SQL as ",(0,a.kt)("inlineCode",{parentName:"p"},"${kafka.cluster}"),", and support follow-up searches."),(0,a.kt)("img",{src:"/doc/image/variable/variable_flinksql_search.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/doc/image/variable/variable_flinksql_quote.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"You can click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Preview")," button to view the value of the real variable. If this variable is set as desensitized, the value of the variable will be displayed as ",(0,a.kt)("inlineCode",{parentName:"p"},"********"),"."),(0,a.kt)("img",{src:"/doc/image/variable/variable_flinksql_preview.png"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"reference-variables-in-args-of-flink-jar-jobs"},"Reference variables in args of Flink JAR jobs"),(0,a.kt)("p",null,"Variables can also be referenced in the args of a Flink JAR job and support follow-up searches."),(0,a.kt)("img",{src:"/doc/image/variable/variable_flinkjar_queto.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/doc/image/variable/variable_flinkjar_preview.png"}),(0,a.kt)("br",null))}p.isMDXComponent=!0}}]);