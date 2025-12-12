module.exports=[54799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},81111,(e,t,r)=>{t.exports=e.x("node:stream",()=>require("node:stream"))},874,(e,t,r)=>{t.exports=e.x("buffer",()=>require("buffer"))},22734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},24836,(e,t,r)=>{t.exports=e.x("https",()=>require("https"))},46786,(e,t,r)=>{t.exports=e.x("os",()=>require("os"))},21517,(e,t,r)=>{t.exports=e.x("http",()=>require("http"))},4446,(e,t,r)=>{t.exports=e.x("net",()=>require("net"))},55004,(e,t,r)=>{t.exports=e.x("tls",()=>require("tls"))},92509,(e,t,r)=>{t.exports=e.x("url",()=>require("url"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},87612,e=>{"use strict";var t=e.i(47909),r=e.i(74017),a=e.i(96250),n=e.i(59756),o=e.i(61916),s=e.i(14444),i=e.i(37092),c=e.i(69741),l=e.i(16795),d=e.i(87718),p=e.i(95169),u=e.i(47587),m=e.i(66012),f=e.i(70101),h=e.i(26937),v=e.i(10372),x=e.i(93695);e.i(52474);var g=e.i(220),R=e.i(89171),k=e.i(34731),w=e.i(87720);async function b(e){try{let t,r,a,{cv:n}=await e.json();if(!n)return R.NextResponse.json({error:"CV data is required"},{status:400});let o=process.env.AI_INTEGRATIONS_GEMINI_API_KEY,s=process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;if(!o)return R.NextResponse.json({error:"AI service not configured"},{status:500});let i=new k.GoogleGenAI({apiKey:o,httpOptions:{apiVersion:"",baseUrl:s}}),c=(0,w.formatCVSummary)(n),[l,d]=await Promise.all([i.models.generateContent({model:"gemini-2.5-flash",contents:`You are an expert CV/Resume analyst and career advisor. Analyze the following CV and provide a comprehensive assessment.

CV DATA:
${c}

Provide your assessment as a valid JSON object with this exact structure:
{
  "overallScore": <number 0-100>,
  "sections": [
    {"name": "Contact Information", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Professional Summary", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Work Experience", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Education", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Skills", "score": <0-100>, "feedback": "<specific feedback>"},
    {"name": "Overall Presentation", "score": <0-100>, "feedback": "<specific feedback>"}
  ],
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "recommendations": ["<actionable recommendation 1>", "<actionable recommendation 2>", "<actionable recommendation 3>", "<actionable recommendation 4>", "<actionable recommendation 5>"]
}

SCORING RUBRIC:
- 90-100: Exceptional - Industry-leading, no improvements needed
- 80-89: Strong - Minor refinements could enhance
- 70-79: Good - Some improvements recommended
- 60-69: Fair - Needs attention in key areas
- Below 60: Needs Work - Significant improvements required

IMPORTANT:
- Return ONLY valid JSON, no markdown, no code blocks, no explanations
- Be specific and actionable in your feedback
- Consider ATS (Applicant Tracking System) compatibility
- Score based on completeness, clarity, impact, and professional presentation
- Recommendations should be specific and actionable`}),i.models.generateContent({model:"gemini-2.5-flash",contents:(a=(0,w.sanitizeAIInput)(c),`You are the EduNatives Forensic CV Analyst (v10.0). Analyze the following CV using our strict weighted scoring system.

CV DATA:
"""
${a}
"""

--- WEIGHTED SCORING SYSTEM ---
Calculate the overall score as a WEIGHTED AVERAGE based on these exact weights:
- Work Experience: 30% weight
- Professional Summary: 20% weight
- Education: 15% weight
- Skills: 15% weight
- Contact Information: 10% weight
- Overall Presentation: 10% weight

Formula: overallScore = (section1Score * 30 + section2Score * 20 + ...) / 100

--- SCORING RUBRIC (apply strictly) ---
- 90-100: Exceptional (No improvements needed)
- 80-89: Strong (Minor refinements)
- 70-79: Good (Some improvements needed)
- 60-69: Fair (Needs attention)
- Below 60: Needs Work (Significant improvements required)

--- FORENSIC ANALYSIS CRITERIA ---
For each section, evaluate:
1. COMPLETENESS: Is all expected information present?
2. CLARITY: Is the content clear, concise, and well-organized?
3. IMPACT: Are achievements quantified? Are action verbs used?
4. ATS COMPATIBILITY: Will it pass Applicant Tracking Systems?
5. AUTHENTICITY: Do claims seem realistic and verifiable? Flag any inflation.

--- OUTPUT FORMAT ---
Return ONLY a valid JSON object with this exact structure:
{
  "overallScore": <number 0-100, calculated using weighted average>,
  "sections": [
    {"name": "Contact Information", "score": <0-100>, "feedback": "<detailed forensic feedback on completeness, professional email, LinkedIn presence, etc.>"},
    {"name": "Professional Summary", "score": <0-100>, "feedback": "<forensic analysis of clarity, impact, quantified achievements, keyword optimization>"},
    {"name": "Work Experience", "score": <0-100>, "feedback": "<forensic review of job progression, achievement quantification, action verbs, gaps analysis>"},
    {"name": "Education", "score": <0-100>, "feedback": "<analysis of relevance, completeness, certifications, honors>"},
    {"name": "Skills", "score": <0-100>, "feedback": "<review of skill relevance, categorization, proficiency indicators>"},
    {"name": "Overall Presentation", "score": <0-100>, "feedback": "<assessment of formatting, consistency, length, visual organization>"}
  ],
  "strengths": ["<specific strength with evidence from CV>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<specific weakness with recommendation>", "<weakness 2>", "<weakness 3>"],
  "recommendations": [
    "<specific actionable recommendation with example>",
    "<recommendation 2>",
    "<recommendation 3>",
    "<recommendation 4>",
    "<recommendation 5>"
  ]
}

CRITICAL INSTRUCTIONS:
- Return ONLY valid JSON, no markdown code blocks, no explanations
- Calculate overallScore using the weighted formula above - do NOT just average
- Be forensically specific - cite actual content from the CV in feedback
- Flag any claims that appear inflated or unverifiable
- Consider ATS keyword optimization in recommendations
- Each recommendation should be immediately actionable`)})]),p=l.text?.trim()||"",u=d.text?.trim()||"";try{t=JSON.parse((0,w.cleanAIResponse)(p))}catch{t={error:"Failed to parse old prompt response",raw:p.substring(0,500)}}try{r=JSON.parse((0,w.cleanAIResponse)(u))}catch{r={error:"Failed to parse new prompt response",raw:u.substring(0,500)}}return R.NextResponse.json({comparison:{oldPrompt:{label:"OLD (Simple Generic)",assessment:t,tokenUsage:{promptTokens:l.usageMetadata?.promptTokenCount||0,completionTokens:l.usageMetadata?.candidatesTokenCount||0}},newPrompt:{label:"NEW (Forensic v10.0)",assessment:r,tokenUsage:{promptTokens:d.usageMetadata?.promptTokenCount||0,completionTokens:d.usageMetadata?.candidatesTokenCount||0}},scoreDifference:{oldScore:t.overallScore||0,newScore:r.overallScore||0,diff:(r.overallScore||0)-(t.overallScore||0)}}})}catch(e){return console.error("Comparison error:",e),R.NextResponse.json({error:"Failed to run comparison"},{status:500})}}e.s(["POST",()=>b],10951);var C=e.i(10951);let S=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/assess/compare/route",pathname:"/api/assess/compare",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/assess/compare/route.ts",nextConfigOutput:"",userland:C}),{workAsyncStorage:y,workUnitAsyncStorage:E,serverHooks:A}=S;function T(){return(0,a.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:E})}async function I(e,t,a){S.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let R="/api/assess/compare/route";R=R.replace(/\/index$/,"")||"/";let k=await S.prepare(e,t,{srcPage:R,multiZoneDraftMode:!1});if(!k)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:w,params:b,nextConfig:C,parsedUrl:y,isDraftMode:E,prerenderManifest:A,routerServerContext:T,isOnDemandRevalidate:I,revalidateOnlyGenerated:N,resolvedPathname:O,clientReferenceManifest:P,serverActionsManifest:_}=k,q=(0,c.normalizeAppPath)(R),j=!!(A.dynamicRoutes[q]||A.routes[O]),M=async()=>((null==T?void 0:T.render404)?await T.render404(e,t,y,!1):t.end("This page could not be found"),null);if(j&&!E){let e=!!A.routes[O],t=A.dynamicRoutes[q];if(t&&!1===t.fallback&&!e){if(C.experimental.adapterPath)return await M();throw new x.NoFallbackError}}let U=null;!j||S.isDev||E||(U="/index"===(U=O)?"/":U);let F=!0===S.isDev||!j,D=j&&!F;_&&P&&(0,s.setReferenceManifestsSingleton)({page:R,clientReferenceManifest:P,serverActionsManifest:_,serverModuleMap:(0,i.createServerModuleMap)({serverActionsManifest:_})});let H=e.method||"GET",G=(0,o.getTracer)(),L=G.getActiveScopeSpan(),V={params:b,prerenderManifest:A,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:F,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:C.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>S.onRequestError(e,t,a,T)},sharedContext:{buildId:w}},B=new l.NodeNextRequest(e),W=new l.NodeNextResponse(t),Y=d.NextRequestAdapter.fromNodeNextRequest(B,(0,d.signalFromNodeResponse)(t));try{let s=async e=>S.handle(Y,V).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=G.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${H} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${R}`)}),i=!!(0,n.getRequestMeta)(e,"minimalMode"),c=async n=>{var o,c;let l=async({previousCacheEntry:r})=>{try{if(!i&&I&&N&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let o=await s(n);e.fetchMetrics=V.renderOpts.fetchMetrics;let c=V.renderOpts.pendingWaitUntil;c&&a.waitUntil&&(a.waitUntil(c),c=void 0);let l=V.renderOpts.collectedTags;if(!j)return await (0,m.sendResponse)(B,W,o,V.renderOpts.pendingWaitUntil),null;{let e=await o.blob(),t=(0,f.toNodeOutgoingHttpHeaders)(o.headers);l&&(t[v.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==V.renderOpts.collectedRevalidate&&!(V.renderOpts.collectedRevalidate>=v.INFINITE_CACHE)&&V.renderOpts.collectedRevalidate,a=void 0===V.renderOpts.collectedExpire||V.renderOpts.collectedExpire>=v.INFINITE_CACHE?void 0:V.renderOpts.collectedExpire;return{value:{kind:g.CachedRouteKind.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await S.onRequestError(e,t,{routerKind:"App Router",routePath:R,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:D,isOnDemandRevalidate:I})},T),t}},d=await S.handleResponse({req:e,nextConfig:C,cacheKey:U,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:I,revalidateOnlyGenerated:N,responseGenerator:l,waitUntil:a.waitUntil,isMinimalMode:i});if(!j)return null;if((null==d||null==(o=d.value)?void 0:o.kind)!==g.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(c=d.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",I?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),E&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,f.fromNodeOutgoingHttpHeaders)(d.value.headers);return i&&j||p.delete(v.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,h.getCacheControlHeader)(d.cacheControl)),await (0,m.sendResponse)(B,W,new Response(d.value.body,{headers:p,status:d.value.status||200})),null};L?await c(L):await G.withPropagatedContext(e.headers,()=>G.trace(p.BaseServerSpan.handleRequest,{spanName:`${H} ${R}`,kind:o.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},c))}catch(t){if(t instanceof x.NoFallbackError||await S.onRequestError(e,t,{routerKind:"App Router",routePath:q,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:D,isOnDemandRevalidate:I})}),j)throw t;return await (0,m.sendResponse)(B,W,new Response(null,{status:500})),null}}e.s(["handler",()=>I,"patchFetch",()=>T,"routeModule",()=>S,"serverHooks",()=>A,"workAsyncStorage",()=>y,"workUnitAsyncStorage",()=>E],87612)},85685,e=>{e.v(e=>Promise.resolve().then(()=>e(54799)))},91961,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__c130a00c._.js"].map(t=>e.l(t))).then(()=>t(12111)))},72331,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__1a542459._.js","server/chunks/[root-of-the-server]__3e2c4e3c._.js","server/chunks/[root-of-the-server]__e24658a7._.js"].map(t=>e.l(t))).then(()=>t(20442)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__a033c3b3._.js.map