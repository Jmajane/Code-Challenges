let n = 00000000000000000000000000001011

var hammingWeight = function(n) {
    let frequency = 0
    let arr = n.toString(2)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "1") {
            frequency ++
        }
    }
    console.log(frequency)
    return frequency
    
};

hammingWeight(n)