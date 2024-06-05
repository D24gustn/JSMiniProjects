window.onload = function () { // 페이지가 로드되면 실행되는 함수
    const startBtn = document.querySelector("#startBtn"); // 시작 버튼 요소 선택
    startBtn.addEventListener("click", function () { // 시작 버튼 클릭 시 실행되는 함수
        const numberInput = document.querySelector("#numberInput"); // 숫자 입력 요소 선택
        if (numberInput.value == "") { // 입력값이 비어있으면
            size = numberInput.placeholder; // 플레이스홀더 값을 사용
        }
        else {
            size = numberInput.value; // 입력값을 사용
        }
        console.log(size); // 사이즈 값을 콘솔에 출력

        const tableArea = document.querySelector(".tableArea"); // 테이블 영역 요소 선택
        const cellHTML = '<table class="w-auto">\n'
            + ('\t<tr>' + '<td></td>'.repeat(size) + '</tr>').repeat(size)
            + '</table>'; // 사이즈에 맞게 테이블 생성
        tableArea.innerHTML = cellHTML; // 생성된 테이블을 테이블 영역에 추가

        const tds = document.querySelectorAll("td"); // 모든 셀(td) 요소 선택

        let curLoc = Math.floor(Math.random() * size * size); // 랜덤 시작 위치 설정
        tds[curLoc].style.backgroundColor = "violet"; // 시작 위치 셀 색상 변경
        console.log(curLoc); // 현재 위치를 콘솔에 출력

        window.onkeydown = function (event) { // 키보드 이벤트 리스너 추가
            if (event.keyCode < 37 || event.keycode > 40) return; // 방향키 외의 키는 무시
            tds[curLoc].style.backgroundColor = "white"; // 현재 위치 셀 색상 초기화
            let row = Math.floor(curLoc / size); // 현재 위치의 행 계산
            let col = curLoc % size; // 현재 위치의 열 계산

            switch (event.key) { // 방향키에 따른 위치 이동 로직
                case 'ArrowLeft':
                    col--; // 왼쪽 이동
                    if (col == 0) curLoc += (size - 1); // 왼쪽 끝에서 반대쪽 끝으로 이동
                    else curLoc--; // 일반적인 왼쪽 이동
                    break;
                case 'ArrowUp':
                    curLoc -= size; // 위로 이동
                    if (curLoc < 0) curLoc += size * size; // 위쪽 끝에서 반대쪽 끝으로 이동
                    break;
                case 'ArrowDown':
                    curLoc += size; // 아래로 이동
                    if (curLoc >= size * size) curLoc -= size * size; // 아래쪽 끝에서 반대쪽 끝으로 이동
                    break;
                case 'ArrowRight':
                    col = curLoc % size; // 열 재계산
                    if (col == size - 1) curLoc -= (size - 1); // 오른쪽 끝에서 반대쪽 끝으로 이동
                    else curLoc++; // 일반적인 오른쪽 이동
                    break;
            }
            console.log(curLoc); // 현재 위치를 콘솔에 출력

            tds[curLoc].style.backgroundColor = "violet"; // 새로운 위치 셀 색상 변경
        }

    });
}