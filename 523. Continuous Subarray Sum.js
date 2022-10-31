var checkSubarraySum = function(n, k,map = new Map(),sum=0) {
    
    map.set(0,-1)
    for(let i=0;i<n.length;i++){
        sum+=n[i]
        r = sum%k
        if(!map.has(r)){
            map.set(r, i)
            
        } else if(i-map.get(r)>=2){
            return true
        } 
    }
    
    return false 
};