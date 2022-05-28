const setMyPropertyChart = (id) => {
    // let time = []
    // let priceData = []
    // console.log("data.length",data)
  
    // //그래프의 min max 를 구하기위해 최근 200분가 최저가와 최고가를 찾아야함.
  
    // //시간과 거래량을 잘라낸 가격만 있는 순수 오브젝트
    // let slicePriceData = []
  
    // //기본적으로 첫번째 들어오는 값을 기본으로 세팅하고 반복돌면서 최저 최고값 찾을수있게.
    // let min  = Number(data[0][4]);
    // let max  = Number(data[0][3]);;
  
    //   time.push(new Date(data[i][0]).toLocaleTimeString())
    //   priceData.push(Number(data[i][2]))
  
    // Now create the chart
    Highcharts.chart(id, {
      exporting: {
          enabled: false
        },
  
      chart: {
        backgroundColor:"#2E2D2D",
        type: 'area',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        margin: [0, 0, 0, 0],
        scrollablePlotArea: {
          minWidth: 24
        }
      },
  
      title: {
        text: ''
      },
  
      credits: {
        enabled: false
      },
  
      xAxis: {
        categories: [0,1,2,3,4,5],
        //tickPositions: [0,1,2,3,4,5,6,7],
        visible: false,
      },
  

      yAxis: {
        min : 1000000,
        max : 5000000,
        startOnTick: true,
        endOnTick: true,
        // maxPadding: 0.35,
        title: {
          text: null
        },
        labels: {
          format: '{value} m'
        },
        visible:false
      },
    
      legend: {
        enabled: false
      },
    
  
      legend: {
        enabled: false
      },

      plotOptions: {
        area: {
            marker: {
                radius: 2
            },
        }
    },
      tooltip: {
        enabled : false,
        formatter: function() {;
          return `<b>${this.x}</b><br>${numberToKorean(this.y)}원`
        },
        shared: true
      },
      series: [{
        data: [1100000,2200000,3420000,
            2540000,3430000,3130000,3700000,
            3100020,2822222,3404444,3500000,
            3720000,3900000,4150000,4630000],
        lineColor: "#E57BDE",
        color: "#D896D4",
        fillOpacity: 0.2,
        name: '자산가격',
      }]
  
    });
  
  }
