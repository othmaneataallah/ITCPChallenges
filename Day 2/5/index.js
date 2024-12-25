/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length)
        return false;

    const map1 = [256];
    const map2 = [256];
    
    for(let idx = 0; idx < s.length; idx++){
        
        if(map1[s.charAt(idx)] != map2[t.charAt(idx)])
            return false;
        
        map1[s.charAt(idx)] = idx + 1;
        map2[t.charAt(idx)] = idx + 1;
    }

    return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    let mapS = {};
    let mapT = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapS[charS] && mapS[charS] !== charT) return false;
        if (mapT[charT] && mapT[charT] !== charS) return false;

        mapS[charS] = charT;
        mapT[charT] = charS;
    }

    return true;
}

