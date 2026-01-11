const names = [
    'Hole-in-one',      // 1
    'Eagle',            // <= par -2
    'Birdie',           // par -1
    'Par',              // par = par
    'Bogey',            // par + 1 
    'Double Bogey',     // par + 2 
    'Go Home!'          // >= par + 3
];

function golfScore(par, strokes) {
    if (strokes === 1) return names[0];
    if (strokes <= par - 2) return names[1]
    if (strokes === par - 1) return names[2]
    if (strokes === par) return names[3]
    if (strokes === par + 1) return names[4]
    if (strokes === par + 2) return names[5]
    if (strokes >= par + 3) return names[6]
}

let result = golfScore(6, 9);
console.log(result);