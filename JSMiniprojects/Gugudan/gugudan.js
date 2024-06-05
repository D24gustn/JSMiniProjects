window.onload = function () { // 페이지가 로드되면 실행되는 함수
    const btnNode = document.querySelector("button"); // 버튼 요소를 선택
    btnNode.addEventListener("click", function() { // 버튼에 클릭 이벤트 리스너를 추가

        const danNum = document.querySelector("#danInput").value; // 입력된 숫자를 가져옴
        console.log(danNum); // 숫자를 콘솔에 출력
    
        document.querySelector("#danNumber").innerHTML = `${danNum}단`; // 선택된 단 수를 화면에 표시
        
        const resultNode = document.querySelector("#result"); // 결과를 표시할 요소를 선택
        let result = ""; // 결과를 저장할 변수 초기화
        for (let i = 1; i <= 9; i++) { // 1부터 9까지 반복
            result += `${danNum} x ${i} = ${String(danNum * i).padStart(2,' ')}<br>`; // 각 곱셈 결과를 result 변수에 추가
        }
        
        resultNode.innerHTML = result; // 완성된 결과를 화면에 표시
        document.querySelector(".displayArea").style.display = "block"; // 결과 영역을 화면에 표시
    });
}