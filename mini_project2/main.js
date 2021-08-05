// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '껌', price: 500 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '아메리카노', price: 4000 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = Number(line);

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.

function getItemByAmount(array, value) {
  let product = {};
  // product 객체 생성
  let temp = 0;
  // 현재의 product의 가격을 담을 변수 생성
  if (!isNaN(value)){ // 입력 값이 정상적인 숫자만 입력한지 확인 하기위한 코드
    for (let i = 0; i < array.length; i++){
      if(array[i].price <= value){
        if(temp < array[i].price){
          // 이전의 상품의 가격과 현재의 상품의 가격을 비교
          temp = array[i].price;
          product = array[i];
          // 현재의 상품의 가격이 클 때 temp와 product를 현재 상품으로 바꿔준다.
        }
      }
    }
  }
  else{
    alert('숫자만 입력해 주세요');
  }
  return product;
}
