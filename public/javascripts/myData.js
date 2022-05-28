const loadMyDataView = () => {
    setMyDataSkeletonView();
    //스켈레톤 뷰 불러오고

    //api 요청 data
    //다 저장되면

    //1.3초뒤에 세팅
    setTimeout(setMyDataView, 800);
}


/* 실제 데이터 컴포넌트 세팅*/
const setMyDataView = () => {

    // 카테고리 생성
    setCategoryComponent({
        myWallet : false,
        myData : true,
        community : false,
    });

    //내 보유코인 수익률 컴포넌트
    setMyEarningsView();


}



//내 보유 코인 수익률 컴포넌트
const setMyEarningsView = () => {

    /* 첫 컴포넌트 세팅시 1일 기준 수익률을 먼저 세팅합니다.*/
    setMyEarningsInfo({type : "day"})

    let append =
    `
    <div class = "card_title">
    <p class = "font-12n margin-r-16 title_color">일간,주간,월간별 내 수익률을 확인해보세요!</p>
    </div>

    <div class = "earning_date_select">
        <div class = "date_toggle font-color-w">
            <div class = "date_select day select">1일</div>
            <div class = "date_select weekly">7일</div>
            <div class = "date_select month">30일</div>
        </div>
    </div>

    <div class = "my_earning_info_div">

    </div>
    `
    document.getElementsByClassName("my_earning_card")[0].innerHTML = append


    /*탭 선택 이벤트*/
    document.querySelector(".date_toggle").addEventListener("click", function (event) {
        if (event.target.classList.contains("date_select")) {
            if (event.target.classList.contains("select")) {
                return;
            } else {
                document.querySelector(".date_toggle > .select").classList.remove("select");
                event.target.classList.add("select");

                //내 포트폴리오 화면 구성
                let json = {type : ""}
                if (event.target.classList.contains("day")) {
                    json.type = "day"
                } else if (event.target.classList.contains("weekly")) {
                    json.type = "weekly"
                } else if (event.target.classList.contains("month")) {
                    json.type = "month"
                }
                setMyEarningsInfo(json)
            }
        }
    })
}

//코인 수익률을 수치로 보여주기위한 정보
/**
 * day : 1일
 * week : 일주일
 * month : 한달
 * {
 *      type : "day"
 * }
 */
const setMyEarningsInfo = ({type}) => {
    console.log("type", type)

    //요청하는 타입에 따라 다른 수익률 정보를 제공한다.
    let append;

    switch(type) {
        case "day":
            append =
            `
            <div class = "padding-a-16 title_color">
            님의 자산이 전일대비 36% 증가했습니다.
            <div class = "my-earning-data margin-t-16">
                    <table class ="flex">
                    <thead>
                     </thead>
                        <tbody>
                            <tr>
                                <td>솔라나</td>
                                <td>20%</td>
                                <td>392,233원</td>
                            </tr>
                            <tr>
                                <td>비트코인</td>
                                <td>12%</td>
                                <td>452,200원</td>
                            </tr>
                            <tr>
                                <td>이더리움</td>
                                <td>24%</td>
                                <td>512,330원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id = "dayChart" style = "width:100%; height:70px; border-radius: 6px;"></div>

            </div>

            `

        break;
        case "weekly":
            append =
            `
            <div>일주일 수익률</div>
            `
            break;
        case "month":
            append =
            `
            <div>한달 수익률</div>
            `
            break;
    }

    document.getElementsByClassName("my_earning_info_div")[0].innerHTML = append

}


const setMyDataSkeletonView = () => {
    //HTML 한번 정리
    document.querySelector(".public-contents").innerHTML = ''

    let append =
        `
        <div class = "public_toggle_div margin-t-16 flex">
            <div class = "my_wallet_tab public_toggle font-14n font-color-w">
                <p class = "skeleton-list-item" style = "width: 60px; height: 15px;"></p>
            </div>
            <div class = "my_data_tab public_toggle margin-l-8 font-14n font-color-w">
                <p class = "skeleton-list-item" style = "width: 60px; height: 15px;"></p>
            </div>
            <div class = "community_tab public_toggle margin-l-8 font-14n font-color-w">
                <p class = "skeleton-list-item" style = "width: 50px; height: 15px;"></p>
            </div>
        </div>

<div class = "my_earning_card margin-t-16">
    <div class = "card_title">
    <p class = "skeleton-list-item font-12n margin-r-16 title_color" style = "width: 200px; height: 20px;"></p>
    </div>

    <div class = "earning_date_select">
        <div class = "date_toggle font-color-w">
            <div class = "skeleton-list-item date_select day select"  style = "width: 30px; height: 15px;"></div>
            <div class = "skeleton-list-item date_select weekly"  style = "width: 30px; height: 15px;"></div>
            <div class = "skeleton-list-item date_select month" style = "width: 30px; height: 15px;"></div>
        </div>
    </div>

    <div class = "my_earning_info_div">

    </div>
</div>

</div>

    `;

    document.getElementsByClassName('public-contents')[0].insertAdjacentHTML("beforeend", append);



}