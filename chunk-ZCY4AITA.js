import{a as Y}from"./chunk-7Q2TLZGO.js";import{p as V,t as U}from"./chunk-KMB27RHX.js";import{a as G}from"./chunk-X3VDKGS2.js";import{a as X}from"./chunk-4JEGWCTH.js";import{c as W}from"./chunk-7LNW4WOO.js";import{a as Z}from"./chunk-B5QH5Y7Z.js";import{a as K}from"./chunk-KOUVGPHT.js";import{Ea as a,Eb as v,Fa as M,Oa as $,R as F,Sa as c,Ta as d,Ua as r,Va as z,Wa as D,Xa as j,Y as S,Ya as A,_ as f,bb as l,cb as m,cc as Q,db as s,dc as L,eb as O,fb as B,fc as H,gb as g,gc as q,ic as J,jb as h,ka as T,mb as y,ob as b,pb as w,qb as R,rb as x,sb as N,tb as I,wa as E,xb as P,yb as _,zb as k}from"./chunk-TT2HP4OH.js";var ie=({dt:e})=>`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    direction: ltr;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: ${e("timeline.vertical.event.content.padding")};
}

.p-timeline-vertical .p-timeline-event-connector {
    width: ${e("timeline.event.connector.size")};
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: ${e("timeline.event.min.height")};
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: ${e("timeline.event.marker.border.width")};
    border-style: solid;
    border-color: ${e("timeline.event.marker.border.color")};
    border-radius: ${e("timeline.event.marker.border.radius")};
    width: ${e("timeline.event.marker.size")};
    height: ${e("timeline.event.marker.size")};
    background: ${e("timeline.event.marker.background")};
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: ${e("timeline.event.marker.content.border.radius")};
    width: ${e("timeline.event.marker.content.size")};
    height:${e("timeline.event.marker.content.size")};
    background: ${e("timeline.event.marker.content.background")};
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("timeline.event.marker.border.radius")};
    box-shadow: ${e("timeline.event.marker.content.inset.shadow")};
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: ${e("timeline.event.connector.color")};
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: ${e("timeline.event.connector.size")};
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: ${e("timeline.horizontal.event.content.padding")};
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`,oe={root:({props:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},ee=(()=>{class e extends U{name="timeline";theme=ie;classes=oe;static \u0275fac=(()=>{let i;return function(t){return(i||(i=T(e)))(t||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var ae=["content"],re=["opposite"],le=["marker"],C=e=>({$implicit:e});function me(e,n){e&1&&g(0)}function pe(e,n){e&1&&g(0)}function ce(e,n){if(e&1&&(O(0),c(1,pe,1,0,"ng-container",4),B()),e&2){let i=h().$implicit,o=h();a(),r("ngTemplateOutlet",o.markerTemplate)("ngTemplateOutletContext",k(2,C,i))}}function se(e,n){e&1&&s(0,"div",9),e&2&&d("data-pc-section","marker")}function de(e,n){e&1&&s(0,"div",10)}function ue(e,n){e&1&&g(0)}function ve(e,n){if(e&1&&(l(0,"div",2)(1,"div",3),c(2,me,1,0,"ng-container",4),m(),l(3,"div",5),c(4,ce,2,4,"ng-container",6)(5,se,1,1,"ng-template",null,0,v)(7,de,1,0,"div",7),m(),l(8,"div",8),c(9,ue,1,0,"ng-container",4),m()()),e&2){let i=n.$implicit,o=n.last,t=R(6),p=h();d("data-pc-section","event"),a(),d("data-pc-section","opposite"),a(),r("ngTemplateOutlet",p.oppositeTemplate)("ngTemplateOutletContext",k(11,C,i)),a(),d("data-pc-section","separator"),a(),r("ngIf",p.markerTemplate)("ngIfElse",t),a(3),r("ngIf",!o),a(),d("data-pc-section","content"),a(),r("ngTemplateOutlet",p.contentTemplate)("ngTemplateOutletContext",k(13,C,i))}}var te=(()=>{class e extends Y{value;style;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;_componentStyle=S(ee);get hostClass(){return this.styleClass}getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=(()=>{let i;return function(t){return(i||(i=T(e)))(t||e)}})();static \u0275cmp=f({type:e,selectors:[["p-timeline"]],contentQueries:function(o,t,p){if(o&1&&(y(p,ae,5),y(p,re,5),y(p,le,5)),o&2){let u;b(u=w())&&(t.contentTemplate=u.first),b(u=w())&&(t.oppositeTemplate=u.first),b(u=w())&&(t.markerTemplate=u.first)}},hostVars:24,hostBindings:function(o,t){o&2&&(d("data-pc-section","root")("data-pc-name","timeline"),D(t.style),j(t.hostClass),z("p-timeline",!0)("p-component",!0)("p-timeline-left",t.align==="left")("p-timeline-right",t.align==="right")("p-timeline-top",t.align==="top")("p-timeline-bottom",t.align==="bottom")("p-timeline-alternate",t.align==="alternate")("p-timeline-vertical",t.layout==="vertical")("p-timeline-horizontal",t.layout==="horizontal"))},inputs:{value:"value",style:"style",styleClass:"styleClass",align:"align",layout:"layout"},standalone:!0,features:[P([ee]),$,_],decls:1,vars:1,consts:[["marker",""],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(o,t){o&1&&c(0,ve,10,15,"div",1),o&2&&r("ngForOf",t.value)},dependencies:[q,Q,L,H,V],encapsulation:2,changeDetection:0})}return e})();function fe(e,n){e&1&&(l(0,"span",8)(1,"span",9),s(2,"app-icon",10),m()()),e&2&&(a(2),r("iconFileName","heart.json"))}function ge(e,n){if(e&1&&(l(0,"div",11)(1,"div",12)(2,"h3",13),x(3),m(),l(4,"span",14),x(5),m()(),l(6,"p"),x(7),m()()),e&2){let i=n.$implicit;A("p-5 mb-5 border border-main-solid rounded-3xl wow ",i.animation,""),a(3),I("",i.label," "),a(2),N(i.date),a(2),I(" ",i.content," ")}}var Je=(()=>{let n=class n{constructor(o,t){this._Title=o,this._PLATFORM_ID=t,this.events=[]}ngOnInit(){J(this._PLATFORM_ID)&&(document.documentElement.scrollTop=0,document.body.scrollTop=0),this._Title.setTitle("Portfolio / About Me"),this.events=[{date:"in 2020",animation:"bounceInRight",label:"Beginning",content:"Joined Banha Faculty of Computers and Artificial Intelligence (BFCAI) as a student, Started self study by learning basic of c++ and problem solving skill"},{date:"in 2021",animation:"bounceInLeft",label:"Start with route",content:"Joined route academy in computer science fundmentals with Eng.Ahmed Abdo as an instructor and Eng. Mohamed Hashem as a mentor thanks to the supervisors for their cooperation and hard work which helped me to continue learning journey know about ITI and joinning student activities"},{date:"in 2022",animation:"bounceInRight",label:"Continuous learning & tranining",content:"Started to learn frontend basic with Eng. Shaimaa Saeed as an instructor (Now frontend instructor with  upskilling) and End. Ahmed Mahmoud as a mentor with collaborative environment made us benefit from each other and made me earn possitive energy and knowledge from friends like Eng. Mohamed Abdel-Mo3ty (Frontend instructor at route) and Eng. Ahmed Menissy (Frontend instructor at route)"},{date:"in 2023",animation:"bounceInLeft",label:"Discussion with college vice dean for education and student affairs",content:"A project related to university administration was discussed with Professor Dr. Mohamed Abdel Fattah, to manage and follow up the strategic plans at the level of Benha University. We discussed the existing system at that time and ways to improve it in terms of features, performance, database, and separating the different parts of the system according to their role and purpose. It was amazing for me to follow the changes and work with an influential and critical system and benefit from the experience of Professor Dr. Mohamed Abdel Fattah in management and listed the working methods and advantages of the system"},{date:"in 2024",animation:"bounceInRight",label:"Start working as a freelancer & graduation project",content:"We planned with a cooperative team at the college to collect integrated skills from different departments of the college, including information systems, artificial intelligence, and software development. We began working on different systems with the aim of learning, gaining experience, and simulating a team work environment. We helped in this by working in parallel on the graduation project under supervisor Dr. Mona Arafa and the Information Systems Department at the university hospital to integrate the work requirements. The project and we were working in the same way for multiple business purposes, such as restaurants, trade, management systems, and medical care"},{date:"in 2025",animation:"bounceInLeft",label:"First company to deal with",content:"Started to work with Marslia company as a freelancer and earned friends with growing mindset and common goal learning from each other everyone teach technology he/she use."},{date:"comming soon...",animation:"bounceInRight",label:"Be an important part of the technological revolution",content:"Hope to find a suitable environments with ambitous goals to benefit from each other (benefit from my growing skills and i benefit to scale my mindset and turning point in my professional journey)."}]}};n.\u0275fac=function(t){return new(t||n)(M(W),M(E))},n.\u0275cmp=f({type:n,selectors:[["app-about"]],standalone:!0,features:[_],decls:12,vars:3,consts:[["marker",""],["content",""],[3,"videoFileName"],[1,"relative","min-h-screen","pt-32","pb-5","space-y-20","mx-5"],[1,""],[3,"title"],["id","education",1,"mb-20"],["align","alternate","styleClass","customized-timeline",3,"value"],[1,"flex","size-14","items-center","justify-center","text-white","rounded-full","z-10","shadow-sm","border","border-main-light"],[1,"block","mt-2"],[3,"iconFileName"],["data-wow-duration","1s","data-wow-delay","0s"],[1,"flex","items-center","justify-between","mb-5"],[1,"max-sm:text-xl","text-2xl","font-bold","-tracking-tight","text-main-light"],[1,"text-gray-500","text-lg","text-nowrap"]],template:function(t,p){t&1&&(s(0,"bg-video-1",2),l(1,"section",3)(2,"div",4),s(3,"app-header",5),m(),l(4,"div",4),s(5,"app-summary"),m(),l(6,"div",6)(7,"p-timeline",7),c(8,fe,3,1,"ng-template",null,0,v)(10,ge,8,6,"ng-template",null,1,v),m()()()),t&2&&(r("videoFileName","bg-speed-move.mp4"),a(3),r("title","About Me"),a(4),r("value",p.events))},dependencies:[K,X,te,G,Z]});let e=n;return e})();export{Je as AboutComponent};
