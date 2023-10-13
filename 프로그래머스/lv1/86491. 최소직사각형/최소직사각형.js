function solution(sizes) {
    var answer = 0;
    // sizes에서 각각의 size를 돌면서 가로<세로이면, [가로,세로]를 [세로,가로]로 바꾸고,
    // 바뀐 값이 포함된 size에서 가로정렬, 세로정렬해서
    // 가장 큰 가로값 x 가장 큰 세로값을 리턴 
    let arr = sizes.map(size => size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]);

    const width = [];
    const height = [];

    for (let i = 0; i < arr.length; i++) {
        width.push(arr[i][0]);
        height.push(arr[i][1]);
    }

    return Math.max(...width) * Math.max(...height);
}