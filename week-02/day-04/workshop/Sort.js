function BubbleSort(a) {

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j + 1 < a.length; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }

}

function MerageSort(a) {

  if (a.length === 1) {
    return a;
  }

  let a1 = MerageSort(a.slice(0, a.length / 2));
  let a2 = MerageSort(a.slice(a.length / 2, a.length));
  let i = 0, j = 0;
  const aSorted = []
  while (i < a1.length || j < a2.length) {
    if (a1[i] < a2[j] || j >= a2.length) {
      aSorted.push(a1[i]);
      i++;
    } else {
      aSorted.push(a2[j]);
      j++;
    }
  }
  return aSorted;

}

const a = [4, 3, 6, 4, 2, 8, 6, 7, 0];
console.log(MerageSort(a));
BubbleSort(a);
console.log(a);
