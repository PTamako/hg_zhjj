var vm = new Vue({
  el: "#main",
  data() {
    return {
      // baseUrl: "http://zhwltg.czeport.com:8080/zhwltgapi/",
      baseUrl: "http://172.16.60.149:2830/",
      address: "earlywarning",
      itemSsbgd: [
        {
          title:
            "南京海关关于开展纪检干部队伍教育整南京海关关于开展纪检干部队伍教育整",
          time: "2024.03.05",
        },
        {
          title:
            "南京海关关于开展纪检干部队伍教育整南京海关关于开展纪检干部队伍教育整",
          time: "2024.03.05",
        },
        {
          title:
            "南京海关关于开展纪检干部队伍教育整南京海关关于开展纪检干部队伍教育整",
          time: "2024.03.05",
        },
        {
          title:
            "南京海关关于开展纪检干部队伍教育整南京海关关于开展纪检干部队伍教育整",
          time: "2024.03.05",
        },
        {
          title:
            "南京海关关于开展纪检干部队伍教育整南京海关关于开展纪检干部队伍教育整",
          time: "2024.03.05",
        },
        {
          title:
            "南京海关关于开展纪检干部队伍教育整南京海关关于开展纪检干部队伍教育整",
          time: "2024.03.05",
        },
        {
          title:
            "南京海关关于开展纪检干部队伍教育整南京海关关于开展纪检干部队伍教育整",
          time: "2024.03.05",
        },
        {
          title:
            "南京海关关于开展纪检干部队伍教育整南京海关关于开展纪检干部队伍教育整",
          time: "2024.03.05",
        },
        {
          title:
            "南京海关关于开展纪检干部队伍教育整南京海关关于开展纪检干部队伍教育整",
          time: "2024.03.05",
        },
        {
          title:
            "南京海关关于开展纪检干部队伍教育整南京海关关于开展纪检干部队伍教育整",
          time: "2024.03.05",
        },
        {
          title:
            "南京海关关于开展纪检干部队伍教育整南京海关关于开展纪检干部队伍教育整",
          time: "2024.03.05",
        },
      ],
      tabs: ["通知公告", "会议纪要", "纪检内通", "工作动态"],
      tabs2: ["法规文件", "他山之石", "以案为鉴", "常用文书"],
      nowIndex: 0,
      nowIndex2: 0,
    };
  },
  created() {
    this.init();
  },
  computed: {
    options() {
      return {
        // 滚动速度 , 数值越大滚动越快
        step: 0.3,
        // 滚动的数据条数
        limitMoveNum: 8,
        // 鼠标点击停止滚动, 默认true
        hoverStop: true,
        // 按住鼠标停止滚动, 默认true
        openTouch: true,
        // 滚动方向 , 0 向下 , 1 向上 , 2 向左 , 3 向右
        direction: 1,
        // 单步运动停止的高度(默认是0, 无缝不停止的滚动,direction是0或1)
        // 就是滚多高停一下,再滚多高又停一下,停的时间就是waitTime
        // 这个高度,可以F12审查元素用箭头放在字上面看li的高度是多少
        singleHeight: 0,
        // 单步运动停止的宽度(默认是0, 无缝不停止的滚动,direction是2或3)
        singleWidth: 0,
        // 单步运动停止的时间 (默认值1000ms)
        waitTime: 2000,
        // 开启数据实时监控刷新dom
        openWatch: true,
      };
    },
  },
  async mounted() {
    await this.echarts_1();
    // await this.getData();
  },
  methods: {
    init() {
      var whei = $(window).width();
      $("html").css({ fontSize: whei / 20 });
      $(window).resize(function () {
        var whei = $(window).width();
        $("html").css({ fontSize: whei / 20 });
      });
    },
    tabToggle(index, key) {
      this[key] = index;
    },
    goDetail(e) {
      let item = JSON.parse(e.target.dataset.obj);
      window.open(
        "./searchCon.html?entryId=" + encodeURI(item.entryId),
        "_blank"
      );
    },
    async getData() {
      await this.getYdqysbgz();
      await this.getSsbgd();
      await this.getGzyj();
      await this.getTotalbyYear();
      await this.getWarningInfo();
      await this.getJyjygfx();
    },
    async echarts_1() {
      var that = this;
      var myoption = {
        tooltip: {
          show: true,
          trigger: "item",
          formatter: function (params) {
            var res =
              "<div class='custom-tooltip-style'>" + params.name + "<br/>";
            var myseries = myoption.series;
            for (var i = 0; i < myseries.length; i++) {
              for (var k = 0; k < myseries[i].data.length; k++) {
                if (myseries[i].data[k].name == params.name) {
                  res +=
                    myseries[i].name +
                    ":&emsp;" +
                    myseries[i].data[k].value +
                    "<br />";
                }
              }
            }
            return res + "</div>";
          },
        },
        series: [
          {
            type: "map",
            map: "江苏",
            name: "组长",
            top: "9%",
            zoom: 1.2,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "#fff",
                  fontSize: 14,
                },
                areaColor: "#599ff9", // 地图颜色
                borderColor: "#68dff5", // 边界颜色
              },
              areaColor: "rgba(0,255,255,.2)",
              borderColor: "#b2fcff",
            },
            emphasis: {
              itemStyle: {
                areaColor: "#287eff",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.3)",
              },
            },
            data: [
              { value: 1, name: "南京海关" },
              { value: 2, name: "无锡海关" },
              { value: 3, name: "徐州海关" },
              { value: 4, name: "常州海关" },
              { value: 5, name: "苏州海关" },
              { value: 6, name: "南通海关" },
              { value: 7, name: "连云港海关" },
              { value: 8, name: "淮安海关" },
              { value: 9, name: "盐城海关" },
              { value: 10, name: "扬州海关" },
              { value: 11, name: "镇江海关" },
              { value: 12, name: "泰州海关" },
              { value: 13, name: "宿迁海关" },
            ],
          },
          {
            type: "map",
            map: "江苏",
            name: "副组长",
            top: "9%",
            zoom: 1.2,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "#fff",
                  fontSize: 14,
                },
                areaColor: "#599ff9", // 地图颜色
                borderColor: "#68dff5", // 边界颜色
              },
              areaColor: "rgba(0,255,255,.2)",
              borderColor: "#b2fcff",
            },
            emphasis: {
              itemStyle: {
                areaColor: "#287eff",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.3)",
              },
            },
            data: [
              { value: 1, name: "南京海关" },
              { value: 2, name: "无锡海关" },
              { value: 3, name: "徐州海关" },
              { value: 4, name: "常州海关" },
              { value: 5, name: "苏州海关" },
              { value: 6, name: "南通海关" },
              { value: 7, name: "连云港海关" },
              { value: 8, name: "淮安海关" },
              { value: 9, name: "盐城海关" },
              { value: 10, name: "扬州海关" },
              { value: 11, name: "镇江海关" },
              { value: 12, name: "泰州海关" },
              { value: 13, name: "宿迁海关" },
            ],
          },
        ],
      };
      that.$nextTick(() => {
        let myChart = echarts.init(document.getElementById("map"));
        myChart.setOption(myoption);
        autoHover(myChart, myoption, 13, 3000);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
    async getYdqysbgz() {
      var that = this;
      await axios
        .get(this.baseUrl + this.address + "/getYdqysbgz")
        .then(function (res) {
          that.itemYdqysb = res.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getSsbgd() {
      var that = this;
      await axios
        .get(this.baseUrl + this.address + "/getSsbgd")
        .then(function (res) {
          that.itemSsbgd = res.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getGzyj() {
      var that = this;
      await axios
        .get(this.baseUrl + this.address + "/getGzyj")
        .then(function (res) {
          that.itemGzyj = res.data.data;
          // for (var i = 0; i < res.data.data.length; i++) {
          //   if (
          //     res.data.data[i].statusInfo == 2 ||
          //     res.data.data[i].statusInfo == 3
          //   ) {
          //     var statusInfoIe = "";
          //     var statusInfoCommodity = "";
          //     switch (res.data.data[i].statusInfoIe) {
          //       case "0":
          //         statusInfoIe = "";
          //         break;
          //       case "1":
          //         statusInfoIe = "进出口中风险";
          //         break;
          //       case "2":
          //         statusInfoIe = "进出口高风险";
          //         break;
          //     }
          //     switch (res.data.data[i].statusInfoCommodity) {
          //       case "0":
          //         statusInfoCommodity = "";
          //         break;
          //       case "1":
          //         statusInfoCommodity = "商品中风险";
          //         break;
          //       case "3":
          //         statusInfoCommodity = "商品高风险";
          //         break;
          //     }
          //     that.itemGzyj[i].stateyj = statusInfoIe + statusInfoCommodity;
          //   } else if (res.data.data[i].statusInfo == 1) {
          //     that.itemGzyj[i].stateyj = "已处理";
          //   } else {
          //     that.itemGzyj[i].stateyj = "未预警";
          //   }
          // }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getTotalbyYear() {
      var that = this;
      var date = new Date();
      await axios
        .get(this.baseUrl + this.address + "/getTotal/" + date.getFullYear())
        .then(function (res) {
          that.ycl = res.data.data.ycl;
          that.sum = res.data.data.sum;
          that.dcl = res.data.data.dcl;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getWarningInfo() {
      var that = this;
      await axios
        .get(this.baseUrl + this.address + "/getWarningInfo")
        .then(function (res) {
          that.hai = res.data.data.hai;
          that.pian = res.data.data.pian;
          that.tao = res.data.data.tao;
          that.man = res.data.data.man;
          that.zhi = res.data.data.zhi;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getJyjygfx() {
      var that = this;
      await axios
        .get(this.baseUrl + this.address + "/getJyjygfx")
        .then(function (res) {
          that.itemJyjygfx = res.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
