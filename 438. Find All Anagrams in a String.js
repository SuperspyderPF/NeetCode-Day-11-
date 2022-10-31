function findAnagrams (s, p, output = [], neededChars = {}, left = 0,right = 0,count = p.length ){
    
    
    
    
    
    for (let char of p) {
        if (char in neededChars) {
            neededChars[char]++
        } else neededChars[char] = 1
    }
    
   
    
    
    
    while (right < s.length) {
        
        
        if (neededChars[s[right]] > 0) count--;
        
        
        neededChars[s[right]]--;
        right++;
        
        
        if (count === 0) output.push(left);
        
        
        if (right - left == p.length) {
            
           
            if (neededChars[s[left]] >= 0) count++;
            
            
            neededChars[s[left]]++;
            left++;
        }
    }
    return output;
};