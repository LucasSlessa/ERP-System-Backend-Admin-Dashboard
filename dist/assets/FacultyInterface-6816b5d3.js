import{p as W,q as G,t as J,v as F,w as K,f as R,h as Q,r as z,R as j,n as U,F as V,x as I,y as X,i as t,z as x,j as e,B as f,l as Y,G as L,L as m,C as n,D as c,E as N,H as S,M as A,k as T,I as Z,J as ee,O as te}from"./index-6a584b3d.js";import{d as ae,S as ie,L as d,a as i,b as u}from"./ArrowForwardIos-524548de.js";import{d as B}from"./Home-85ffcdae.js";import{A as D}from"./Avatar-36bb4c38.js";var C={},le=G;Object.defineProperty(C,"__esModule",{value:!0});var k=C.default=void 0,ne=le(W()),re=J,se=(0,ne.default)((0,re.jsx)("path",{fillRule:"evenodd",d:"m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"}),"HowToReg");k=C.default=se;const oe=({avatar:h,name:l})=>{const y=F(),E=K(),q=R(a=>a),{t:r}=Q(),v=()=>{E(Z()),y("/")},[g,w]=z.useState(null),s=!!g,P=a=>{w(a.currentTarget)},o=()=>{w(null)},[_,M]=j.useState({top:!1,left:!1,bottom:!1,right:!1}),p=(a,O)=>b=>{b.type==="keydown"&&(b.key==="Tab"||b.key==="Shift")||M({..._,[a]:O})},$=a=>e(f,{role:"presentation",onKeyDown:p(a,!1),children:t(L,{container:!0,direction:"column",justifyContent:"space-around",alignItems:"flex-start",sx:{width:200,height:"calc(100vh - 60px)",display:{xs:"flex",md:"none"}},children:[t(m,{sx:{width:"100%"},children:[e(n,{to:"attendenceFaculty",className:"link",children:e(d,{disablePadding:!0,children:t(i,{children:[e(c,{sx:{minWidth:0,mr:3,justifyContent:"center"},children:e(k,{})}),e(u,{primary:"Attendance"})]})})}),e(n,{to:"/faculty",className:"link",children:e(d,{disablePadding:!0,children:t(i,{children:[e(c,{sx:{minWidth:0,mr:3,justifyContent:"center"},children:e(B,{})}),e(u,{primary:"Profile"})]})})})]}),e(N,{}),e(m,{children:t(f,{sx:{flexGrow:1},children:[e(d,{disablePadding:!0,sx:{display:"block"},children:t(i,{id:"basic-button","aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:P,children:[e(c,{children:e(S,{title:"Sozlamalarni oching",children:e(D,{src:h,sx:{width:40,height:40}})})}),e(u,{primary:l})]})}),t(A,{sx:{textAlign:"center"},id:"basic-menu",anchorEl:g,open:s,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[e(i,{children:e(n,{className:"link",onClick:o,to:"updateProfile",children:r("profile_update")})}),e(i,{children:e(n,{className:"link",onClick:o,to:"updatePassword",children:r("password_update")})}),e(i,{onClick:v,children:e(T,{color:"error",children:r("logout")})})]})]})})]})}),H=U(V)(({theme:a})=>({color:a.palette.getContrastText(I[500]),backgroundColor:X[700],"&:hover":{backgroundColor:I[900]}}));return t(x,{children:[e(f,{sx:{zIndex:"99",height:40,display:{xs:"block",md:"none"},position:"fixed",top:"50%",left:0},children:["left"].map(a=>t(j.Fragment,{children:[e(Y,{className:"box",onClick:p(a,!0),children:e(H,{size:"small",children:e(ae,{})})}),e(ie,{PaperProps:{className:"shadows"},anchor:a,open:_[a],onClose:p(a,!1),onOpen:p(a,!0),children:q.faculty.isAuthenticated&&e(x,{children:$("left")})})]},a))}),e(f,{sx:{height:"calc(100vh - 60px)"},children:t(L,{position:"fixed",container:!0,direction:"column",justifyContent:"space-around",alignItems:"flex-start",className:"shadows",sx:{left:0,width:200,height:"calc(100vh - 60px)",display:{xs:"none",md:"flex"}},children:[t(m,{sx:{width:"100%"},children:[e(n,{to:"attendenceFaculty",className:"link",children:e(d,{disablePadding:!0,children:t(i,{children:[e(c,{sx:{minWidth:0,mr:3,justifyContent:"center"},children:e(k,{})}),e(u,{primary:"Attendance"})]})})}),e(n,{to:"/faculty",className:"link",children:e(d,{disablePadding:!0,children:t(i,{children:[e(c,{sx:{minWidth:0,mr:3,justifyContent:"center"},children:e(B,{})}),e(u,{primary:"Profile"})]})})})]}),e(N,{}),t(m,{children:[e(d,{disablePadding:!0,sx:{display:"block"},children:t(i,{id:"basic-button","aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:P,children:[e(c,{children:e(S,{title:"Sozlamalarni oching",children:e(D,{src:h,sx:{width:40,height:40,border:"solid"}})})}),e(u,{primary:l})]})}),t(A,{sx:{textAlign:"center"},id:"basic-menu",anchorEl:g,open:s,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[e(i,{children:e(n,{className:"link",onClick:o,to:"updateProfile",children:r("profile_update")})}),e(i,{children:e(n,{className:"link",onClick:o,to:"updatePassword",children:r("password_update")})}),e(i,{onClick:v,children:e(T,{color:"error",children:r("logout")})})]})]})]})})]})},pe=()=>{const h=F(),l=R(y=>y);return z.useEffect(()=>{l.faculty.isAuthenticated||h("/login")},[l.faculty.isAuthenticated]),e(x,{children:l.faculty.isAuthenticated?t(x,{children:[e(ee,{sx:{width:{xs:0,md:200}},children:e(oe,{avatar:l.faculty.faculty.faculty.avatar,name:l.faculty.faculty.faculty.name})}),e(te,{})]}):h("/login")})};export{pe as default};
