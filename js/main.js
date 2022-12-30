function getEle(ele) {
    return document.getElementById(ele);
}

/* 1. Tìm số chẵn/lẻ nhỏ hơn 100 */
getEle('btnOddEven').onclick = function(){
    // input: tập hợp các số nhỏ hơn 100

    // progress
    let even = ''; // biến chứa các số chẵn
    let odd = ''; // biến chứa các số lẻ
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            even += i + ' ';
        } 
        else {
            odd += i + ' ';
        }
    }

    // output
    getEle('output1').innerHTML = 'Số chẵn: ' + even + '<br>' + 'Số lẻ: ' + odd;
}


/* 2. Đếm số (dưới 1000) chia hết cho 3 */
getEle('btnDivi3').onclick = function(){
    // input: tập hợp các số nhỏ hơn 1000

    // progress
    let count = 0; // biến đếm các số chia hết cho 3
    for (let n = 0; n < 1000; n++) {
        if (n % 3 == 0) {
            count++;
        }
    }

    // output
    getEle('output2').innerHTML = 'Số chia hết cho 3 nhỏ hơn 1000: ' + count + ' số';
}


/* 3. Tìm số nguyên dương nhỏ nhất sao cho 1 + 2 + ... + n > 10000 */
getEle('btnMinInt').onclick = function(){
    // input: tập hợp các số từ 1 đến n

    // progress
    let sum = 0; // biến sum dùng để tính tổng các phần tử từ 1 đến n là số nhỏ nhất để tổng sum < 10000
    let n = 0; // khai báo biến n là số cần tìm
    while (sum < 10000) {
        n++;
        sum += n;
    }

    // output
    getEle('output3').innerHTML = 'Số nguyên dương nhỏ nhất: ' + n;
}


/* 4. Nhập 2 số x, n. Tính tổng S(n) = x + x^2 + x^3 + ... + x^n */
getEle('btnSumXN').onclick = function(){
    // input
    let varX = +getEle('varX').value;
    let varN = +getEle('varN').value;

    // progress
    let sum = 0; // biến tính tổng các phần tử
    let multi = 1; // biến tính tích các phần tử
    for (let i = 1; i <= varN; i++) {
        multi *= varX;
        sum += multi;
    }

    // output
    getEle('output4').innerHTML = 'Tổng: ' + sum;
}


/* 5. Tính giai thừa của số n */
getEle('btnFactorial').onclick = function () {
    // input
    let numN = +getEle('numN').value;

    // progress
    let factorial = 1;
    for (let i = 1; i <= numN; i++) {
        factorial *= i;
    }

    // output
    getEle('output5').innerHTML = 'Giai thừa: ' + factorial;
}


/* 6. Tạo thẻ div */
getEle('btnDiv').onclick = function(){
    // input: thẻ div chẵn & lẻ

    // progress
    let divOut = ''; // biến chứa tập hợp các thẻ div cộng dồn
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            let divEven = '<div style="background-color: #ed3030; color: white; padding: 10px;">DIV CHẴN</div>';
            divOut += divEven;
        } 
        else {
            let divOdd = '<div style="background-color: #3e3ee8; color: white; padding: 10px;">DIV LẺ</div>';
            divOut += divOdd;
        }
    }

    // output
    getEle('output6').innerHTML = divOut;
}


/* 7. In số nguyên tố */
// Hàm kiểm tra số nguyên tố
function checkPrimeNumber(number) {
    let checkPN = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            checkPN = false;
            break;
        }
    }
    return checkPN;
}

getEle('btnPrimeNumber').onclick = function(){
    // input
    let randomNum = +getEle('randomN').value;

    // progress
    let outputPN = '';
    for (let i = 2; i <= randomNum; i++) {
        let checkPN = checkPrimeNumber(i);
        if (checkPN) {
            outputPN += i + ' ';
        }
    }

    // output
    getEle('output7').innerHTML = outputPN;
}