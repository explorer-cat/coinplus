/*내 자산 페이지*/
const loadMyWalletView = () => {
    //스켈레톤 뷰 불러오고
    setMyWalletSkeletonView();

    //api 요청 data
    //다 저장되면

    //1.3초뒤에 세팅
    setTimeout(setMyWalletView, 800);
}



const setMyWalletView = () => {
    //로그인 정보 세팅
    setHeaderComponent();

    //컴포넌트 위에서 하나씩 세팅
    setMyPropertyComponent();

    //카테고리 컴포넌트 세팅
    //카테고리가 생성되는 페이지의 True 해주세요.
    setCategoryComponent({
        myWallet : true,
        myData : false,
        community : false,
    });
    //내 자산 변동률 차트 생성
    setMyPropertyChartComponent();
    //자산 정보 컴포넌트 생성
    setMyWalletInfoComponent();
    
}

//내 순자산 정보 컴포넌트
const setMyPropertyComponent = () => {
    let append = 
    `
    <div class = "card_title">
    <p class = "font-12n margin-r-16 title_color">최성우님의 순자산</p>
    <img class = "go_detail_img">
    </div>
    <div class = "padding-lr-24 padding-b-8 flex">
        <p class = "font-18b  font-color-w">30,000,000 원</p>
        <p class = "font-12n  gray_font margin-l-8 margin-t-4">(22.05.06 13:42 기준)</p>
    </div>
    `
    document.getElementsByClassName("my_cash_card")[0].innerHTML = append
}

//내 자산 변동률 컴포넌트
const setMyPropertyChartComponent = () => {
    let append = 
    `
    <div class = "card_title">
        <p class = "font-12n title_color margin-r-16 title_color">24시간 내 자산 변동률</p>
        <img class = "go_detail_img">
    </div>
    <div id = "myPropertyChart" style = "width:100%; height:70px; border-radius: 6px;"></div>
    `
    document.getElementsByClassName("my_property_chart")[0].innerHTML = append


    //차트 렌더
    setMyPropertyChart("myPropertyChart")
}




//내 보유 자산 구성 컴포넌트
const setMyWalletInfoComponent = () => {
    let append = 
    `
 <div class = "card_title">
    <p class = "font-12n title_color margin-r-16 title_color">내 보유 자산</p>
    <img class = "go_detail_img">
</div>

<div class = "flex flex-j-center">
    <div class = "my_wallet_chart padding-a-16" style = "width : 240px; padding : 0 ">
        <canvas id="walletChart"></canvas>
    </div>
</div>

<div class = "font-12n font-color-w my_currency_info">
    <div class = "flex crpto_title flex-a-center margin-b-4">
        <img class = "btc_icon margin-r-4">
        <p class = "font-14b margin-l-4 title_color"> 비트코인</p>
        <div class = "bithubm_icon">bithumb</div>
    </div>
    <div class = "margin-l-16">
        <div class="flex">
            <p class = "flex margin-t-4 title_color">보유수량</p>                   
            <p class = "flex font-16b margin-l-4">0.645331 BTC</p>                      
        </div>
        <div class="flex margin-t-4">
            <p class = "flex margin-t-4 title_color">평가금액(추정)</p>                   
            <p class = "flex font-16b  margin-l-4">32,120,000원</p>                        
        </div>
    </div>
</div>

<div class ="flex flex-j-center">
    <p style = "border-bottom: 1px solid #9A9A9A; width: 85%; float: center; opacity: 0.3;"></p>
</div>

<div class = "font-12n font-color-w my_currency_info">
    <div class = "flex crpto_title flex-a-center margin-b-4">
        <img class = "eth_icon margin-r-4">
        <p class = "font-14b margin-l-4 title_color">이더리움</p>
        <div class = "upbit_icon">upbit</div>
    </div>
    <div class = "margin-l-16">
        <div class="flex">
            <p class = "flex margin-t-4 title_color">보유수량</p>                   
            <p class = "flex font-16b margin-l-4">1.4463 ETH</p>                      
        </div>
        <div class="flex margin-t-4 ">
            <p class = "flex margin-t-4 title_color">평가금액(추정)</p>                   
            <p class = "flex font-16b margin-l-4">4,130,000원</p>                        
        </div>
    </div>
</div>

<div class ="flex flex-j-center">
    <p style = "border-bottom: 1px solid #9A9A9A; width: 85%; float: center; opacity: 0.3;"></p>
</div>


<div class = "font-12n font-color-w my_currency_info">
    <div class = "flex crpto_title flex-a-center margin-b-4">
        <img class = "sol_icon margin-r-4">
        <p class = "font-14b margin-l-4 title_color">솔라나</p>
        <div class = "bithubm_icon">bithumb</div>
    </div>
    <div class = "margin-l-16">
        <div class="flex">
            <p class = "flex margin-t-4 title_color">보유수량</p>                   
            <p class = "flex font-16b margin-l-4">347.42 SOL</p>                      
        </div>
        <div class="flex margin-t-4 ">
            <p class = "flex margin-t-4 title_color">평가금액(추정)</p>                   
            <p class = "flex font-16b margin-l-4">6,234,100원</p>                        
        </div>
    </div>
</div>


    `
    document.getElementsByClassName("my_wallet_info")[0].innerHTML = append

    //자산 정보 도넛 차트 생성

    let percent = ['23','23','44','19']
    //내가 보유하고있는 자산 이름
    const data = {
        labels: [
          `BTC ${percent[0]}%`,
          `ETH ${percent[1]}%`,
          `SOL ${percent[2]}%`,
          `KRW ${percent[3]}%`
        ],
        datasets: [{
          label: '내 자산 비율',
          data: [2000,3333,2222,1283],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 125, 236)'
          ],
          hoverOffset: 4
        }],
      };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            
            plugins : {
                legend: { 
                    position: 'top', 
                },
            },
            layout: {
                // padding: -30
            }
        }
      };

    const myChart = new Chart(document.getElementById('walletChart'),config);



}



//첫 화면 스켈레톤 UX 컴포넌트
const setMyWalletSkeletonView = () => {
    //HTML 한번 정리
    document.querySelector(".public-contents").innerHTML = ''

    let append = 
    `
    <div class = "my_cash_card">
    <div class = "card_title">
        <p class = "skeleton-list-item font-12n margin-r-16 title_color" style = "width: 200px;height: 15px;"</p>
    </div>
    <div class = "padding-lr-24 padding-b-8 flex">
        <p class = "skeleton-list-item font-18b  font-color-w" style = "width: 200px;height: 15px;"></p>
        <p class = "skeleton-list-item font-12n  gray_font margin-l-8" style = "width: 200px;height: 15px;"></p>
    </div>
</div>

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

<div class = "my_property_chart m_card margin-t-16">
<div class = "card_title">
    <p class = "skeleton-list-item font-12n title_color margin-r-16 title_color" style = "width: 150px;height: 15px;"></p>
</div>
<div id = "myPropertyChart" class = "skeleton-list-item" style = "margin-left:16px; width:calc(100% - 40px); height:70px; border-radius: 6px;"></div>
</div>


<div class = "my_wallet_info full_card margin-t-16">
<div class = "card_title">
    <p class = "skeleton-list-item font-12n title_color margin-r-16 title_color" style = "width: 100px;height: 15px;"></p>
</div>
<div class = "font-12n font-color-w my_currency_info">
    <div class = "skeleton-list-item flex crpto_title flex-a-center margin-b-4" style = "width: 200px;height: 20px;">
    </div>
    <div class = "margin-l-16">
        <div class="flex skeleton-list-item"  style = "width: 100px;height: 20px;">                 
        </div>
        <div class="flex margin-t-4 skeleton-list-item"  style = "width: 100px;height: 20px;">                 
        </div>
    </div>
</div>

<div class = "my_wallet_chart">
    
</div>


<div class ="flex flex-j-center">
    <p style = "border-bottom: 1px solid #9A9A9A; width: 85%; float: center; opacity: 0.3;"></p>
</div>

<div class = "font-12n font-color-w my_currency_info">
    <div class = "flex crpto_title flex-a-center margin-b-4 skeleton-list-item" style = "width: 200px;height: 20px;">
    </div>
    <div class = "margin-l-16">
        <div class="flex skeleton-list-item" style = "width: 100px;height: 20px;">                  
        </div>
        <div class="flex margin-t-4 skeleton-list-item" style = "width: 100px;height: 20px;">             
        </div>
    </div>
</div>

<div class ="flex flex-j-center">
<p style = "border-bottom: 1px solid #9A9A9A; width: 85%; float: center; opacity: 0.3;"></p>
</div>

<div class = "font-12n font-color-w my_currency_info">
    <div class = "flex crpto_title flex-a-center margin-b-4 skeleton-list-item" style = "width: 200px;height: 20px;">
    </div>
    <div class = "margin-l-16">
        <div class="flex skeleton-list-item" style = "width: 100px;height: 20px;">                  
        </div>
        <div class="flex margin-t-4 skeleton-list-item" style = "width: 100px;height: 20px;">             
        </div>
    </div>
</div>

</div>


    `;   

    document.getElementsByClassName('public-contents')[0].insertAdjacentHTML("beforeend", append);



}


