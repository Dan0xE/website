(this["webpackJsonppinpoint-react-website"]=this["webpackJsonppinpoint-react-website"]||[]).push([[0],{18:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),r=s(20),o=s.n(r),a=(s(27),s(28),s(21)),c=s(2),l=s(9),u=s(10),h=s(11),d=s(13),j=s(12),b=(s(29),s(0)),m=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={menutoggle:!1},e.toggleButton=e.toggleButton.bind(Object(h.a)(e)),e}return Object(u.a)(s,[{key:"toggleButton",value:function(){var e=this;console.log("clicked"),this.setState({menutoggle:!this.state.menutoggle},(function(){console.log(e.state.menutoggle)}))}},{key:"render",value:function(){return Object(b.jsxs)("nav",{ref:"navbar",id:"navbar",children:[Object(b.jsx)("a",{href:"/",children:Object(b.jsx)("img",{id:"bannerlogo",src:"/imgs/banner.png",alt:"banner"})}),Object(b.jsxs)("button",{onClick:this.toggleButton,className:"menubtn",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]}),Object(b.jsxs)("div",{className:"navlinks",id:this.state.menutoggle?"hidden":"",children:[Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/",children:"HOME"})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/contributions",children:"CONTRIBUTIONS"})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/downloads",children:"DOWNLOADS"})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/updates",children:"UPDATES"})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"https://pinpointsimulationsform.herokuapp.com/",target:"__blank",children:"APPLY"})})]})]})}}]),s}(n.a.Component);var p=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{}),Object(b.jsx)("div",{className:"big",style:{backgroundColor:"lightgrey",fontSize:"4rem",color:"white",position:"relative",textAlign:"center",height:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(b.jsx)("div",{style:{backgroundColor:"lightgrey",fontSize:"4rem",color:"red",textAlign:"center"},children:" 404. Did you arrive at the wrong plane?"})})]})};s(31);function O(e){var t=e.fileName,s={discord:"https://discord.gg/pinpoint",youtube:"https://www.youtube.com/channel/UCLwmhnbgYkvLHCKDCsFkTJw",reddit:"https://www.reddit.com/user/MegaPackDesigns/",github:"https://github.com/Pinpoint-Simulations/"}[t];return Object(b.jsx)("a",{href:s,target:"__blank",children:Object(b.jsx)("img",{className:"social",src:"/imgs/".concat(t,".png"),alt:t})})}var x=function(){return Object(b.jsxs)("section",{id:"footer",children:[Object(b.jsxs)("div",{className:"socials",children:[Object(b.jsx)(O,{fileName:"discord"}),Object(b.jsx)(O,{fileName:"reddit"}),Object(b.jsx)(O,{fileName:"youtube"}),Object(b.jsx)(O,{fileName:"github"})]}),Object(b.jsxs)("div",{className:"links",children:[Object(b.jsx)("a",{href:"https://github.com/Pinpoint-Simulations/website",target:"__blank",children:"SOURCE CODE"}),Object(b.jsx)("a",{href:"/tos",children:"TERMS OF SERVICE"}),Object(b.jsx)("a",{href:"/privacy",children:"PRIVACY POLICY"}),Object(b.jsx)("a",{href:"mailto:admin@pinpointsimulations.net",target:"__blank",children:"EMAIL"})]}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("footer",{children:"\xa9\ufe0f Pinpoint Simulations 2021"})})]})},f=(s(32),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={text:"777"},e}return Object(u.a)(s,[{key:"tick",value:function(){function e(e){var t="";return""===e?t="7":"7"===e?t="77":"77"===e?t="777":"777"===e&&(t="7"),t}this.setState((function(t){return{text:e(t.text)}}))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.tick()}),800)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(b.jsx)("section",{className:"boeingHeader",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:["BOEING ",Object(b.jsx)("span",{className:"_777",children:this.state.text})]}),Object(b.jsx)("p",{children:"The world's first ever freeware 777-300ER for Microsoft Flight Simulator"})]})})}}]),s}(n.a.Component));s(33);var g=function(){return Object(b.jsxs)("section",{className:"aboutusHeader",children:[Object(b.jsx)("h1",{className:"heading",children:"ABOUT US"}),Object(b.jsx)("div",{className:"centering",children:Object(b.jsx)("p",{className:"whatweare",children:" We are an open source team that are creating aircraft and scenery for Microsoft Flight Simulator. We are currently creating UAAA (Almaty International Airport) located in Almaty, Kazakhstan. On top of that, we are also creating a free Boeing 777-300ER, known as the PPS777 Project."})})]})};s(34);var v=function(){return Object(b.jsx)("section",{className:"joindiscord",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h3",{className:"titletext",children:"Join Our Discord"}),Object(b.jsx)("p",{className:"desc",children:"Our Discord server is where we plan the entirety of our projects and provide most of our support. Join us to chat with other members of the community, get started with contributing, or ask us a question!"}),Object(b.jsx)("div",{className:"link",children:Object(b.jsx)("a",{href:"https://discord.gg/pinpoint",children:"Join Today!"})})]})})};var y=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{}),Object(b.jsx)(f,{}),Object(b.jsx)(g,{}),Object(b.jsx)(v,{}),Object(b.jsx)(x,{})]})},w=(s(35),s.p+"static/media/airplaneTopShot.17f5651c.jpg");function k(e){var t=e.title,s=e.description,i=e.image;return Object(b.jsxs)("div",{className:"latest-update",children:[Object(b.jsx)("h3",{children:t}),Object(b.jsx)("img",{src:i,alt:"Latest Update"}),Object(b.jsx)("p",{className:"description",children:s})]})}var N=function(){return Object(b.jsxs)("section",{className:"updates",children:[Object(b.jsx)("h1",{children:"UPDATES"}),Object(b.jsx)("h2",{children:"LATEST UPDATE"}),Object(b.jsx)(k,{title:"FUSELAGE SNEAK PEEK",description:"Here\u2019s the latest look at the rework for our fuselage. Our rework will consist of a revamped fuselage, wings, and rescaling of the marvelous GE90-115B engines, stay tuned!",image:w})]})};var S=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{}),Object(b.jsx)(N,{}),Object(b.jsx)(x,{})]})};s(36);function P(e){var t=e.label,s=e.url;return Object(b.jsx)("a",{href:s,target:"__blank",children:Object(b.jsx)("div",{className:"linkbtn",children:t})})}var T=function(){return Object(b.jsxs)("section",{className:"header",children:[Object(b.jsx)("h1",{className:"title",children:"GITHUB"}),Object(b.jsxs)("div",{className:"flexcontainer",children:[Object(b.jsxs)("div",{className:"text",children:["Contribute to our Github repository with ",Object(b.jsx)("span",{children:"pull requests."})]}),Object(b.jsxs)("div",{className:"linkbuttons",children:[Object(b.jsx)(P,{label:"Contribute",url:"https://github.com/Pinpoint-Simulations/PPS777/blob/master/.github/Contributing.md"}),Object(b.jsx)(P,{label:"Repository",url:"https://github.com/Pinpoint-Simulations/PPS777"}),Object(b.jsx)(P,{label:"Pull Requests",url:"https://github.com/Pinpoint-Simulations/PPS777/pulls"})]})]}),Object(b.jsxs)("div",{class:"learnmoresection",children:[Object(b.jsx)("div",{className:"learnmoretext",children:"Learn More"}),Object(b.jsx)("a",{href:"#pullrequests",children:Object(b.jsxs)("svg",{className:"downarrow",id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 41.46 17.6",children:[Object(b.jsx)("defs",{children:Object(b.jsx)("style",{dangerouslySetInnerHTML:{__html:".cls-1{fill:none;stroke:rgb(250, 250, 250);stroke-miterlimit:10;stroke-width:4px;}"}})}),Object(b.jsx)("path",{className:"cls-1",d:"M556,436l17.94,13.49a4.73,4.73,0,0,0,4.33,0L595,436",transform:"translate(-554.8 -434.4)"})]})})]})]})};s(37);var A=function(){return Object(b.jsxs)("section",{class:"software",children:[Object(b.jsx)("div",{class:"software_title",children:"Software"}),Object(b.jsx)("div",{class:"software_tools",children:Object(b.jsx)("p",{class:"software_desc",children:"A text editor is required for this project. A recommended text editor to use is Visual Studio Code. You can either use Git or the Github Desktop to integrate Github with your project. You will also need a legal copy of Microsoft Flight Simulator if you wish to test your changes in the game."})})]})};s(38);var E=function(){return Object(b.jsxs)("section",{className:"pullrequests",id:"pullrequests",children:[Object(b.jsx)("h1",{className:"pullrequests_title",children:"Making Pull Requests"}),Object(b.jsxs)("div",{className:"pullrequests_steps",children:[Object(b.jsx)("div",{className:"pullrequests_step",children:"1. Create a fork of our Pinpoint-Sims-777 repository"}),Object(b.jsx)("div",{className:"pullrequests_step",children:"2. Make a new branch on your forked repository with a simple name that represents what changes you are making for example \u201cFix strobe lights\u201d"}),Object(b.jsx)("div",{className:"pullrequests_step",children:"3. Download the forked repository to your system."}),Object(b.jsx)("div",{className:"pullrequests_step",children:"4. Open the file you would like to edit or add the file you would like to create to the repository folder."}),Object(b.jsx)("div",{className:"pullrequests_step",children:"5. Run build.py inside of the (TBD) folder and test that your addition/edition works in sim"}),Object(b.jsx)("div",{className:"pullrequests_step",children:"6. Commit and push to the branch and make a pull request and follow the template"})]}),Object(b.jsx)("div",{className:"pullrequests_desc_container",children:Object(b.jsx)("p",{className:"pullrequest_desc",children:"Your pull request will be reviewed by members of the dev team for code issues. After 2 dev team members have checked your pull request, it will be moved to the QA testing team to check for any inside of sim issues, functionality, and realism. After it has been QA tested your pull request will be merged."})})]})};var I=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(T,{}),Object(b.jsx)(A,{}),Object(b.jsx)(E,{}),Object(b.jsx)(x,{})]})};s(39);var _=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)("section",{className:"downloads",children:[Object(b.jsx)("h2",{children:"DOWNLOADS"}),Object(b.jsx)("p",{children:"Pinpoint Asphalt | Coming Soon"}),Object(b.jsx)("img",{className:"bannerarea",src:"/imgs/pinpointasphalt.png",alt:"Pinpoint Apshalt"})]}),Object(b.jsx)(x,{})]})};var q=function(e){var t=e.title,s=e.description;return Object(b.jsxs)("div",{className:"tosparagraph",children:[Object(b.jsx)("h3",{className:"tosname",children:t}),Object(b.jsx)("p",{className:"tosdesc",children:s})]})};s(18);var C=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{className:"tos_section",children:[Object(b.jsx)("h1",{className:"tostitle",children:"Terms of Service"}),Object(b.jsxs)("section",{className:"tosparagraphs",children:[Object(b.jsx)(q,{title:"AGE REQUIREMENT",description:"To protect the privacy of younger people it is very important that we implement an age restriction of 13 and over to join Pinpoint Simulations services such as this website and Discord or any other communication platform, other platforms may be subject to their own conditions. By using Pinpoint Simulations services, you agree that you are 13 years of age and the minimum age of digital consent in your country. Pinpoint Simulations reserve the right to remove users under the age of 13 and minimum age of digital consent in any given case from communication platforms."}),Object(b.jsx)(q,{title:"COMPLAINTS",description:"In the event of a user should feel the need to make a complaint against another member, with regards to violating our Terms of Service or Communication Platform Rules (Discord) , they can contact the Moderation team through Discord or by emailing admin@pinpointsimulations.net with your inquiry. When writing the report please state the members name and what they are violating. All complaints will be dealt with as professionally and as quickly as possible."}),Object(b.jsx)(q,{title:"LEGAL",description:"Users wishing to contribute must own a legal copy of Microsoft Flight Simulator (MSFS2020 or MSFS)"}),Object(b.jsx)(q,{title:"QUESTIONS?",description:"Questions? Please click the Email Us button below with your inquiry. Our team will get back to you."})]})]}),Object(b.jsx)(x,{})]})};var D=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{className:"tos_section",style:{height:"max-content"},children:[Object(b.jsx)("h1",{className:"tostitle",children:"Privacy Policy"}),Object(b.jsxs)("section",{className:"tosparagraphs",children:[Object(b.jsx)(q,{title:"WHAT DO WE COLLECT FROM YOU?",description:"We may collect, store and use data such as information about visits to this website or information about any transactions carried out between you and us on or in relation to this website or any of our services including but not limited to Pinpoint Simulations GitHub repositories or Discord."}),Object(b.jsx)(q,{title:"WEBSITE VISITS",description:"We may collect information about your visits to this website such as your IP address, geographical location, browser type, referral source, length of visit and number of page views. We may use this information in the administration of this website, to improve the website's usability, and for marketing purposes.\r We use cookies on this website. A cookie is a text file sent by a web server to a web browser, and stored by the browser. The text file is then sent back to the server each time the browser requests a page from the server. This enables the web server to identify and track the web browser.\r We may send a cookie which may be stored by your browser on your computer's hard drive. We may use the information we obtain from the cookie in the administration of this website, to improve the website's usability and for marketing purposes. We may also use that information to recognise your computer when you visit our website, and to personalise our website for you.\r Most browsers allow you to refuse to accept cookies. (For example, in Internet Explorer you can refuse all cookie by clicking Tools, Internet Options, Privacy, and selecting Block all cookies using the sliding selector.) This will, however, have a negative impact upon the usability of many websites"}),Object(b.jsx)(q,{title:"USING YOUR DATA",description:"Personal data submitted to this website will be used for the purposes specified in this privacy policy or in relevant parts of the website. In addition to the uses identified elsewhere in this privacy policy, we may use your personal information to:\r Improve your web browsing experience.\r Generalize the country you reside in, but we will never individually identify by any means.\r We will never share your data to third-party website without your expressed onsent. You reserve the right to request data from us at any point in time, but may take up to 4 months to arrive."}),Object(b.jsx)(q,{title:"SECURITY AND SAFETY",description:"We will take precautions to protect your data from misuse, loss or altercation of identifcation. Data over the Internet is highly risky and we cannot guarantee a the security of your data in a breach."}),Object(b.jsx)(q,{title:"THIRD-PARTY CONTENT",description:"This website contains links to third-party websites. Their privacy policy may not match ours."}),Object(b.jsx)(q,{title:"QUESTIONS?",description:"Questions? Please click the Email Us button below with your inquiry. Our team will get back to you."})]})]}),Object(b.jsx)(x,{})]})};var U=function(){return Object(b.jsx)(a.a,{children:Object(b.jsxs)(c.c,{children:[Object(b.jsx)(c.a,{exact:!0,path:"/",component:y}),Object(b.jsx)(c.a,{exact:!0,path:"/updates",component:S}),Object(b.jsx)(c.a,{exact:!0,path:"/downloads",component:_}),Object(b.jsx)(c.a,{exact:!0,path:"/privacy",component:D}),Object(b.jsx)(c.a,{exact:!0,path:"/tos",component:C}),Object(b.jsx)(c.a,{path:"/discord",component:function(){return window.location.href="https://discord.gg/pinpoint",null}}),Object(b.jsx)(c.a,{exact:!0,path:"/contributions",component:I}),Object(b.jsx)(c.a,{component:p})]})})};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.9d5bebe0.chunk.js.map