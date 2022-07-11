type Triplet = [number, number, number];

function threeNumberSum(array: number[], targetSum: number):Triplet[] {
    array.sort((a, b) => a-b);
    const triplets: Triplet[] = []

    for(let x = 0; x < array.length - 2; x++){
        let left = x + 1;
        let right = array.length - 1;

        while(left < right){
            const currentSum = array[x] + array[left] + array[right];
            if(currentSum === targetSum){
                triplets.push([array[x], array[left], array[right]]);
                left++;
                right--;
            }else if(currentSum < targetSum){
                left++;
            }else if(currentSum > targetSum){
                right--;
            }
        }
    }
    return triplets
}
console.log(threeNumberSum([12,3,1,2,-6,5,-8,6],0))