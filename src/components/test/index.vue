﻿<template>
    <div>
      <div class="content">
        <div class="scan">
          <div id="bcid">
            <div style="height:40%"></div>
            <p class="tip">...载入中111...</p>
          </div>
          <footer>
            <button @click="startRecognize">1.创建控件</button>
            <button @click="startScan">2.开始扫描</button>
            <button @click="cancelScan">3.结束扫描</button>

            <button @click="closeScan">4.关闭控件</button>
          </footer>
        </div>

      </div>
    </div>
</template>

<script>
  let scan = null;
  import componentsA from './a'
  import componentsB from './b'
  import {mapState} from "vuex"
  import inputPhone from "@/components/common/inputphone";
  import QRCode from "qrcodejs2"
  import html2canvas from 'html2canvas'
    export default {
      data() {
        return {
          codeUrl: '',
        }
      },
      methods: {
        //创建扫描控件
        startRecognize() {
          let that = this;
          if (!window.plus) return;
          scan = new plus.barcode.Barcode('bcid');
          scan.onmarked = onmarked;

          function onmarked(type, result, file) {
            switch (type) {
              case plus.barcode.QR:
                type = 'QR';
                break;
              case plus.barcode.EAN13:
                type = 'EAN13';
                break;
              case plus.barcode.EAN8:
                type = 'EAN8';
                break;
              default:
                type = '其它' + type;
                break;
            }
            result = result.replace(/\n/g, '');
            that.codeUrl = result;
            alert(result);
            that.closeScan();

          }
        },
        //开始扫描
        startScan() {
          if (!window.plus) return;
          scan.start();
        },
        //关闭扫描
        cancelScan() {
          if (!window.plus) return;
          scan.cancel();
        },
        //关闭条码识别控件
        closeScan() {
          if (!window.plus) return;
          scan.close();
        },

      }
    }
</script>

<style lang="scss" scoped>
  .scan {
    height: 100%;
    #bcid {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom:3rem;
      text-align: center;
      color: #fff;
      background: #ccc;
    }
    footer {
      position: absolute;
      left: 0;
      bottom: 1rem;
      height: 2rem;
      line-height: 2rem;
      z-index: 2;
    }
  }
</style>
