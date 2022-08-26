let smartPhones=['iphone','ipod','ipad','opera mini','opera mobi','nokia','andrpod',
'webos','windows ce','blackberry','iemobile','sonyericssion'];
//스마트 폰 구분
for(let i in smartPhones) {
    if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
        document.location='http://jaeuk6630.dothome.co.kr/mindex.html';
    }
}

//alert(navigator.userAgent); 자기 핸드폰 보는 방법