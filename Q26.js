// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

function checkSegments(s){
if(s==="")return 0
return s.split(/\s+/).length
}