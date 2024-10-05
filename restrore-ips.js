var restoreIpAddresses = function(s) {
    
    const result = [];
    
    const backtrack = (start, path) => {
        // If we have 4 segments and we've used all characters, we have a valid IP
        if (path.length === 4 && start === s.length) {
            result.push(path.join('.'));
            return;
        }
        
        // If we have 4 segments but haven't used all characters or vice versa
        if (path.length >= 4) return;

        // Try every possible length for the next segment (1 to 3 digits)
        for (let len = 1; len <= 3; len++) {
            const segment = s.substring(start, start + len);
            // Check if the segment is valid
            if (isValid(segment)) {
                path.push(segment); // Choose
                backtrack(start + len, path); // Explore
                path.pop(); // Un-choose
            }
        }
    };

    const isValid = (segment) => {
        // Check if segment is valid: 0-255 and no leading zeros
        if (segment.length > 1 && segment[0] === '0') return false;
        const num = Number(segment);
        return num >= 0 && num <= 255;
    };

    backtrack(0, []);
    return result;

};
console.log("Try programiz.pro", restoreIpAddresses("101023"));
