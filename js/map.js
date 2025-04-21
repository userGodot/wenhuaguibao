$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));
        
        var data = [
            {name: '北京', value: 100},
            {name: '天津', value: 90},
            {name: '石家庄', value: 85},
            {name: '太原', value: 80},
            {name: '呼和浩特', value: 75},
            {name: '沈阳', value: 70},
            {name: '长春', value: 65},
            {name: '哈尔滨', value: 60},
            {name: '上海', value: 95},
            {name: '南京', value: 90},
            {name: '杭州', value: 85},
            {name: '合肥', value: 80},
            {name: '福州', value: 75},
            {name: '南昌', value: 70},
            {name: '济南', value: 85},
            {name: '郑州', value: 80},
            {name: '武汉', value: 75},
            {name: '长沙', value: 70},
            {name: '广州', value: 85},
            {name: '南宁', value: 75},
            {name: '海口', value: 70},
            {name: '重庆', value: 80},
            {name: '成都', value: 75},
            {name: '贵阳', value: 70},
            {name: '昆明', value: 65},
            {name: '拉萨', value: 60},
            {name: '西安', value: 75},
            {name: '兰州', value: 70},
            {name: '西宁', value: 65},
            {name: '银川', value: 60},
            {name: '乌鲁木齐', value: 55},
            {name: '太原', value: 80},
            {name: '大同', value: 75},
            {name: '阳泉', value: 70},
            {name: '长治', value: 65},
            {name: '晋城', value: 60},
            {name: '朔州', value: 55},
            {name: '晋中', value: 50},
            {name: '运城', value: 45},
            {name: '忻州', value: 40},
            {name: '临汾', value: 35},
            {name: '吕梁', value: 30},
            {name: '呼和浩特', value: 75},
            {name: '包头', value: 70},
            {name: '乌海', value: 65},
            {name: '赤峰', value: 60},
            {name: '通辽', value: 55},
            {name: '鄂尔多斯', value: 50},
            {name: '呼伦贝尔', value: 45},
            {name: '巴彦淖尔', value: 40},
            {name: '乌兰察布', value: 35},
            {name: '兴安盟', value: 30},
            {name: '锡林郭勒', value: 25},
            {name: '阿拉善', value: 20}
        ];
        
        var geoCoordMap = {
            '北京':[116.46,39.92],
            '天津':[117.2,39.13],
            '石家庄':[114.48,38.03],
            '太原':[112.53,37.87],
            '呼和浩特':[111.65,40.82],
            '沈阳':[123.38,41.8],
            '长春':[125.35,43.88],
            '哈尔滨':[126.63,45.75],
            '上海':[121.48,31.22],
            '南京':[118.78,32.04],
            '杭州':[120.19,30.26],
            '合肥':[117.27,31.86],
            '福州':[119.3,26.08],
            '南昌':[115.89,28.68],
            '济南':[117,36.65],
            '郑州':[113.65,34.76],
            '武汉':[114.31,30.52],
            '长沙':[113,28.21],
            '广州':[113.23,23.16],
            '南宁':[108.33,22.84],
            '海口':[110.35,20.02],
            '重庆':[106.54,29.59],
            '成都':[104.06,30.67],
            '贵阳':[106.71,26.57],
            '昆明':[102.73,25.04],
            '拉萨':[91.11,29.97],
            '西安':[108.95,34.27],
            '兰州':[103.73,36.03],
            '西宁':[101.74,36.56],
            '银川':[106.27,38.47],
            '乌鲁木齐':[87.68,43.77],
            '太原':[112.53,37.87],
            '大同':[113.3,40.12],
            '阳泉':[113.57,37.85],
            '长治':[113.08,36.18],
            '晋城':[112.83,35.49],
            '朔州':[112.5,39.34],
            '晋中':[112.75,37.68],
            '运城':[111.0,35.03],
            '忻州':[112.73,38.23],
            '临汾':[111.5,36.08],
            '吕梁':[111.15,37.53],
            '呼和浩特':[111.65,40.82],
            '包头':[110,40.58],
            '乌海':[106.77,39.66],
            '赤峰':[118.87,42.28],
            '通辽':[122.27,43.16],
            '鄂尔多斯':[109.78,39.61],
            '呼伦贝尔':[120.17,49.22],
            '巴彦淖尔':[107.4,40.77],
            '乌兰察布':[113.12,40.73],
            '兴安盟':[122.02,46.07],
            '锡林郭勒':[116.07,43.95],
            '阿拉善':[105.67,38.83]
        };
        
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        
        option = {
            title: {
                text: '中华自然科学及其它优秀文化瑰宝分布',
                subtext: '',
                sublink: '',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item'
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: false,
                zoom:1.2,
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(2,37,101,.5)',
                        borderColor: 'rgba(112,187,252,.5)'
                    },
                    emphasis: {
                        areaColor: 'rgba(2,37,101,.8)'
                    }
                }
            },
            series : [
                {
                    name: '中华自然科学及其它优秀文化瑰宝',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function (val) {
                        return val[2] / 5; // 根据数值大小调整点点的大小
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffeb7b'
                        }
                    }
                }
            ]
        };
        
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
});