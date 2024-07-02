const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function add(acc, value){
    return acc + value;
}
const totalBatteries = batteryBatches.reduce(add)
console.log(add)
