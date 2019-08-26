import md5 from 'js-md5'
const host = 'http://www.jzbshebao.cn'


var common= {
  getsign(biography)
  {
    let data = new Object;
    let time = (new Date()).getTime();
    data.salt = "14e1b600b1fd579f47433b88e8d85291";
    data.time = Math.round(time/1000).toString();
    if (!biography) {
      biography = ""
    }
    let str =biography+ 'time='+data.time + '14e1b600b1fd579f47433b88e8d85291'
    data.str = str
    data.sign = md5(str)
    return data
  }

}
export default
{
  host, // 域名
  common

}
