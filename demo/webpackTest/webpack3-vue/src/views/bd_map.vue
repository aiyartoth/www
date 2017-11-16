<template>
  <div>
    <h1>百度地图测试页面</h1>
    <div class="wrap">
      <ul class="btn_list">
        <li @click="enlarge(1)">地图放大</li>
        <li @click="enlarge(-1)">地图缩小</li>
        <li @click="set_city('beijing')">北京</li>
        <li @click="set_city('shanghai')">上海</li>
      </ul>
      <div id="allmap"></div>
    </div>
  </div>
</template>
<style scoped rel="stylesheet">
  *{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .wrap {
    overflow: hidden;
    font-family: '华文楷体';
  }

  .btn_list li {
    margin: 0 5px 5px 0;
    padding: 5px 10px;
    width: 120px;
    text-align: left;
    font-size: 18px;
    line-height: normal;
    background: #ccc;
    cursor: pointer;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .btn_list {
    float: left;
  }

  #allmap {
    float: left;
    width: 1024px;
    height: 500px;
  }
</style>
<script>
  import BMap from 'bmap';

  export default {
    mounted: function () {
      let map = new BMap.Map("allmap");
      this.map = map;
      map.centerAndZoom(this.pois.beijing, this.defaultLevel);
      map.addControl(new BMap.MapTypeControl({
        mapTypes: [
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]
      }));
      map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    },
    data() {
      return {
        map: "",
        defaultLevel:11,
        pois:{
          shanghai:new BMap.Point(121.4751997790,31.2306444340),
          beijing:new BMap.Point(116.404, 39.915)
        }
      }
    },
    computed: {
      currentZoom: function () {
        return this.map.getZoom();
      }
    },
    methods: {
      enlarge: function (num) {
//        console.log(this.currentZoom);
        this.map.setZoom(this.currentZoom+num);
      },
      set_city:function (cityName) {
        this.map.centerAndZoom(this.pois[cityName],this.defaultLevel);
      }
    }
  };
</script>