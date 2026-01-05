function doGet(e){
const ss=SpreadsheetApp.getActive();
const a=e.parameter.action;

if(a=="schemes") return json(ss.getSheetByName("SCHEMES"));
if(a=="addComplaint"){ss.getSheetByName("COMPLAINTS").appendRow([new Date(),e.parameter.name,e.parameter.mobile,e.parameter.msg]); return out("OK");}
if(a=="bot"){ return out(botReply(e.parameter.q||"")); }
}

function botReply(q){
q=q.toLowerCase();
if(q.includes("pmay")) return "PMAY घरकुल योजना – Apply via Aaple Sarkar Portal.";
if(q.includes("pension")) return "पेन्शन योजना – Docs Aadhaar, Age proof, Bank Passbook.";
if(q.includes("gr")) return "GR शोधण्यासाठी GR Search वापरा.";
if(q.includes("complaint")) return "तक्रार Online Portal वर नोंदवा.";
return "कृपया योजना, GR, RTI किंवा तक्रार विषयी विचारा.";
}

function json(sh){return ContentService.createTextOutput(JSON.stringify(sh.getDataRange().getValues())).setMimeType(ContentService.MimeType.JSON);}
function out(t){return ContentService.createTextOutput(t);}
