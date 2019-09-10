# APP接口文档

## 1.说明

**签名sign：** 将所有的请求参数按照字典排序，拼上十位数时间戳time，拼上盐值salt，然后MD5加密生成

**盐值salt：** 14e1b600b1fd579f47433b88e8d85291

**请求方式：** 如果不做特殊说明，一般为POST

**请求必要参数：** 签名sign，十位数时间戳time

---

## 2.接口

>### [获取banner列表](http://www.jzbshebao.cn/app/index/getBannerList)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|position|--|1头部 2中部 3尾部|Y|
>|terminal|--|1web官网 2H5官网 3app|Y|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据 head：头部 body：中间  foot：尾部|
>>>|data>id |banner id|
>>>|data>title| banner标题|
>>>|data>banner_url|banner链接|
>>>|data>jump_url|banner跳转链接|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": {
>>>        "head": [
>>>            {
>>>                "id": "14",
>>>                "title": "幻灯片",
>>>                "banner_url": "/Uploads/Public/Uploads/2019-08-05/5d47c479ab30e.jpg",
>>>                "jump_url": "www.163.com"
>>>            }
>>>        ],
>>>        "body": [
>>>            {
>>>                "id": "16",
>>>                "title": "banner06",
>>>                "banner_url": "/Uploads/Public/Uploads/2019-08-05/5d47c3b17d0ec.jpg",
>>>                "jump_url": "www.baidu.com"
>>>            }
>>>        ],
>>>        "foot": [
>>>            {
>>>                "id": "17",
>>>                "title": "的想法打",
>>>                "banner_url": "/Uploads/Public/Uploads/2019-08-05/5d47c3972cb72.jpg",
>>>                "jump_url": ""
>>>            }
>>>        ]
>>>    }
>>>}
>>>```

---

>### [APP首页/政策解读+桔子讲堂](http://www.jzbshebao.cn/app/index/getPolicy)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|--|--|--|--|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据|
>>>|data>policy|政策解读array|
>>>|data>policy>id |分类id|
>>>|data>policy>name| 分类名|
>>>|data>policy>img_url|分类图标链接|
>>>|data>article_list|桔子讲堂array|
>>>|data>article_list>id|文章ID|
>>>|data>article_list>title|文章标题|
>>>|data>article_list>abstract|描述|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": {
>>>        "policy": [
>>>            {
>>>                "id": "8",
>>>                "name": "看病买药",
>>>                "terminal": "2",
>>>                "img_url": ""
>>>            }
>>>        ],
>>>        "article_list": [
>>>            {
>>>                "id": "2",
>>>                "title": "服务条款",
>>>                "abstract": ""
>>>            }
>>>        ]
>>>    }
>>>}
>>>```

---

>### [首页走马灯](http://www.jzbshebao.cn/app/index/rollOrders)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|--|--|--|--|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": [
>>>        "天津 蒋寄琴 成功缴纳社保&公积金  2019-09-05 12:35:51",
>>>        "南昌 朱海超 成功缴纳社保&公积金  2019-09-05 12:37:28",
>>>    ]
>>>}
>>>```
---  

>### [支付宝手机网页支付](http://www.jzbshebao.cn/app/index/aliWapPay)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|id|订单ID|--|Y|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>
>>**返回示例**
>>>```
>>>```

---

>### [获取工作类型](http://www.jzbshebao.cn/app/common/getWork)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|--|--|--|--|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据|
>>>|data>id |工作ID|
>>>|data>name| 工作名|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": [
>>>        {
>>>            "id": "1",
>>>            "name": "学生",
>>>            "status": "1"
>>>        }
>>>    ]
>>>}
>>>```

>### [获取套餐服务费](http://www.jzbshebao.cn/app/common/getServiceCharge)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|--|--|--|--|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据|
>>>|data>id |套餐ID|
>>>|data>name|套餐名|
>>>|data>start|最低月数|
>>>|data>end|最高月数|
>>>|data>original_price|原价|
>>>|data>price|折扣价|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": [
>>>        {
>>>            "id": "1",
>>>            "start": "1",
>>>            "end": "2",
>>>            "original_price": "0.00",
>>>            "price": "69.90",
>>>            "name": "月份套裁"
>>>        }
>>>    ]
>>>}
>>>```

---

>### [获取学历](http://www.jzbshebao.cn/app/common/getStudy)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|--|--|--|--|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据|
>>>|data>id |学历id|
>>>|data>name| 学历名|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": [
>>>        {
>>>            "id": "1",
>>>            "name": "博士",
>>>            "status": "1"
>>>        }
>>>    ]
>>>}
>>>```

---

>### [获取名族](http://www.jzbshebao.cn/app/common/getNation)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|--|--|--|--|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据|
>>>|data>id |名族id|
>>>|data>name| 名族名|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": [
>>>        {
>>>            "id": "1",
>>>            "name": "汉族",
>>>            "status": "1"
>>>        }
>>>    ]
>>>}
>>>```

---

>### [获取城市](http://www.jzbshebao.cn/app/common/getCity)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|id|城市ID|--|N|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据|
>>>|data>id |城市ID|
>>>|data>start_time| 起点（包含）|
>>>|data>end_time|终点（包含）|
>>>|data>social_min_money|社保最小起缴基数|
>>>|data>social_max_money|社保最大起缴基数|
>>>|data>accumulation_min_money|公积金最小起缴基数|
>>>|data>accumulation_max_money|公积金最大起缴基数|
>>>|data>month_amount|起缴月数|
>>>|data>additional_price|候补手续费|
>>>|data>pay_back_price|补缴手续费|
>>>|data>payment_type|缴费形式 0当月缴当月  1当月缴下月|
>>>|data>pay_back_amount|补缴月数 0不可补缴|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": [
>>>        {
>>>            "id": "25",
>>>            "parent_id": "1",
>>>            "area_name": "上海",
>>>            "area_type": "1",
>>>            "status": "1",
>>>            "start_time": "10",
>>>            "end_time": "17",
>>>            "social_min_money": "0",
>>>            "social_max_money": "0",
>>>            "accumulation_min_money": "0",
>>>            "accumulation_max_money": "0",
>>>            "month_amount": "0",
>>>            "additional_price": "100.00",
>>>            "pay_back_price": "200.00",
>>>            "payment_type": "0",
>>>            "pay_back_amount": "0",
>>>            "update_time": "0",
>>>            "item": [
>>>                {
>>>                    "id": "321",
>>>                    "parent_id": "25",
>>>                    "area_name": "上海",
>>>                    "area_type": "2",
>>>                    "status": "1",
>>>                    "start_time": "1",
>>>                    "end_time": "19",
>>>                    "social_min_money": "4927",
>>>                    "social_max_money": "24633",
>>>                    "accumulation_min_money": "2420",
>>>                    "accumulation_max_money": "24633",
>>>                    "month_amount": "1",
>>>                    "additional_price": "0.00",
>>>                    "pay_back_price": "0.00",
>>>                    "payment_type": "0",
>>>                    "pay_back_amount": "6",
>>>                    "update_time": "1567672589"
>>>                }
>>>            ]
>>>        }
>>>    ]
>>>}
>>>```

---


>### [用户注册](http://www.jzbshebao.cn/app/user/register)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|--|
>|phone_no|手机号|--|Y|
>|password|密码|--|Y|
>|verify|验证码|--|Y|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口返回数据数组|
>>>|data>id|用户ID|
>>>|data>phone_no|用户账号/手机号|
>>>|data>balance|用户余额|
>>>|data>currency|桔子币|
>>>|data>sex|性别 1男 2女|
>>>|data>headimgurl|微信头像|
>>>|data>nickname|微信昵称|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": {
>>>        "id": "4",
>>>        "phone_no": "18612345678",
>>>        "balance": "0.00",
>>>        "currency": "0",
>>>        "sex": "1",
>>>        "headimgurl": "",
>>>        "nickname": ""
>>>    }
>>>}
>>>```

---

>### [新增参保人](http://www.jzbshebao.cn/app/user/addAccount)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|user_id|用户ID|--|Y|
>|id_front|身份证正面|--|Y|
>|id_back|身份证背面|--|Y|
>|name|姓名|--|Y|
>|sex|性别|1男 2女|Y|
>|phone_no|手机号|--|Y|
>|id_no|身份证|--|Y|
>|id_type|户口性质|1农 2非农|Y|
>|id_info|户口信息|--|Y|
>|nation|名族|接口获取|Y|
>|marry|婚姻状况|1已婚 2未婚|Y|
>|work_type|工作类型|接口获取|Y|
>|emergency_contact|紧急联系人|--|Y|
>|emergency_phone|紧急联系人号码|--|Y|
>|social_no|社保号|--|N|
>|accumulation_no|公积金账号|--|N|
>|education|学历|接口获取|N|
>|resume|简历|--|N|
>|other|其他|--|N|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "数据保存成功",
>>>    "data": []
>>>}
>>>```

---

>### [用户登录](http://www.jzbshebao.cn/app/user/login)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|phone_no|手机号|--|Y|
>|password|密码|密码登录，与verify二选一|N|
>|verify|验证码|验证码登录，与password二选一|N|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口返回数据数组|
>>>|data>id|用户ID|
>>>|data>name|用户名|
>>>|data>phone_no|用户账号/手机号|
>>>|data>sex|用户性别 1男 2女|
>>>|data>headimgurl|用户头像|
>>>|data>balance|用户余额|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": {
>>>        "id": "2",
>>>        "name": "",
>>>        "phone_no": "18617115150",
>>>        "sex": "1",
>>>        "headimgurl": "http://thirdwx.qlogo.cn/mmopen/vi_32/>>>1QyYs4DU7ZJZQe9fs45DHQZP8kr3B6E9sDd5tX0z22X2RL9tYia6R5ObWud2JYMWibGIicRlUKh2YYlfz8s90Lbew>>>/132",
>>>        "balance": "0.00"
>>>    }
>>>}
>>>```

---

>### [参保人列表](http://www.jzbshebao.cn/app/user/accountList)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|user_id|用户ID|--|Y|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口返回数据数组|
>>>|data>id|参保人ID|
>>>|data>name|参保人姓名|
>>>|data>id_type|户口性质 1农户  2非农|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": [
>>>        {
>>>            "id": "1",
>>>            "name": "dasad",
>>>            "id_type": "1"
>>>        }
>>>    ]
>>>}
>>>```

---

>### [注册/登录 获取短信验证码](http://www.jzbshebao.cn/app/user/getVerify)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|phone_no|手机号码|--|Y|
>|type|注册/登录|1注册 2登录|Y|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口返回数据数组|
>>>|data>verify|验证码|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": {
>>>        "verify": "4007"
>>>    }
>>>}
>>>```

---

>### [用户优惠券](http://www.jzbshebao.cn/app/user/userCoupon)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|user_id|用户ID|--|Y|
>|status|奖励状态|0未使用 1已使用 2已过期 不传值默认0|N|
>|type|奖励类型|1红包 不传值默认1|N|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口返回数据数组|
>>>|data>id|验证码|
>>>|data>worth|面值|
>>>|data>start|有效期开始时间|
>>>|data>end|有效期结束时间|
>>>|data>type|类型 1红包|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": [
>>>        {
>>>            "id": "1",
>>>            "worth": "1000.00",
>>>            "start": "1970-01-01 08:00:00",
>>>            "end": "1970-01-01 08:00:00",
>>>            "type": "1"
>>>        }
>>>    ]
>>>}
>>>```

---

>### [订单提交](http://www.jzbshebao.cn/app/order/placeOrder)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|--|
>|city_id|城市ID|--|Y|
>|user_id|用户ID|--|Y|
>|account_id|参保人ID|--|Y|
>|level|等级|默认值0，可以不填|N|
>|social_normal_start|社保正常开始|2019-08|Y|
>|social_normal_end|社保正常结束|2019-09|Y|
>|social_pay_back_start|社保补缴开始|2019-07|N|
>|social_pay_back_end|社保补缴结束|2019-07|N|
>|social_charge|社保缴费基数|2500|N|
>|accumulation_normal_start|公积金正常开始|2019-08|N|
>|accumulation_normal_end|公积金正常结束|2019-09|N|
>|accumulation_pay_back_start|公积金补缴开始|2019-07|N|
>|accumulation_pay_back_end|公积金补缴结束|--|N|
>|accumulation_charge|公积金缴费基数|--|N|
>|terminal|请求终端|h5 web ios android|Y|
>|social_new|社保新开|1续缴 2新开 默认续缴|N|
>|accumulation_new|公积金新开|1续缴 2新开 默认续缴|N|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|city_id|城市ID|--|Y|
>>>|user_id|用户ID|--|Y|
>>>|account_id|参保人ID|--|Y|
>>>|level|等级|默认值0，可以不填|N|
>>>|social_normal_start|社保正常开始|2019-08|Y|
>>>|social_normal_end|社保正常结束|2019-09|Y|
>>>|social_pay_back_start|社保补缴开始|2019-07|N|
>>>|social_pay_back_end|社保补缴结束|2019-07|N|
>>>|social_charge|社保缴费基数|2500|N|
>>>|accumulation_normal_start|公积金正常开始|2019-08|N|
>>>|accumulation_normal_end|公积金正常结束|2019-09|N|
>>>|accumulation_pay_back_start|公积金补缴开始|2019-07|N|
>>>|accumulation_pay_back_end|公积金补缴结束|--|N|
>>>|accumulation_charge|公积金缴费基数|--|N|
>>>|terminal|请求终端|h5 web ios android|Y|
>>>|social_new|社保新开|1续缴 2新开 默认续缴|N|
>>>|accumulation_new|公积金新开|1续缴 2新开 默认续缴|N|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": {
>>>        "city_id": "321",
>>>        "user_id": "1",
>>>        "account_id": "1",
>>>        "social_normal_start": "2019-09",
>>>        "social_normal_end": "2019-10",
>>>        "social_pay_back_start": "2019-08",
>>>        "social_pay_back_end": "2019-08",
>>>        "social_charge": "2100",
>>>        "accumulation_normal_start": "2019-09",
>>>        "accumulation_normal_end": "2019-10",
>>>        "accumulation_pay_back_start": "2019-08",
>>>        "accumulation_pay_back_end": "2019-08",
>>>        "accumulation_charge": "2100",
>>>        "social_sum": 0,
>>>        "accumulation_sum": 0,
>>>        "service_sum": 179.7,
>>>        "additional_sum": 0,
>>>        "pay_back_sum": "200.00",
>>>        "order_id": "H156776909605574300",
>>>        "add_time": 1567769096,
>>>        "service_charge": 2.28,
>>>        "total": 381.98,
>>>        "actual_payment": 381.98,
>>>        "id": "2"
>>>    }
>>>}
>>>```

---

>### [订单列表](http://www.jzbshebao.cn/app/order/getOrderList)
>|请求参数|说明|可选值|是否必须|类型|
>|--|--|--|--|--|
>|status|订单状态|0未付款 1已付款|N|int|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据array|
>>>|data>id|订单ID|
>>>|data>order_id|订单号|
>>>|data>city_name|参保城市|
>>>|data>start|参保月份 开始|
>>>|data>end|参保月份 结束|
>>>|data>total|费用总计|
>>>|data>type_name|参保项目|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": [
>>>        {
>>>            "id": "1",
>>>            "order_id": "a2345",
>>>            "city_name": "深圳",
>>>            "start": "2019-08",
>>>            "end": "2019-11",
>>>            "total": 18173.1,
>>>            "type_name": "社保，公积金"
>>>        }
>>>    ]
>>>}
>>>```

---

>### [订单详情](http://www.jzbshebao.cn/app/order/getOrderDetail)
>|请求参数|说明|可选值|是否必须|类型|
>|--|--|--|--|--|
>|id|订单ID|--|Y|int|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据array|
>>>|data>id|订单ID|
>>>|data>order_id|订单号|
>>>|data>area_name|参保城市|
>>>|data>start|参保月份 开始|
>>>|data>end|参保月份 结束|
>>>|data>social_sum|社保保费|
>>>|data>accumulation_sum|公积金保费|
>>>|data>service_sum|服务费|
>>>|data>additional_sum|候补费|
>>>|data>pay_back_sum|补缴费|
>>>|data>cash_deduction|余额抵扣|
>>>|data>coupon_deduction|优惠券抵扣金额|
>>>|data>add_time|订单创建时间|
>>>|data>payment_time|订单支付时间|
>>>|data>type_name|缴费项目|
>>>|data>name|参保人名|
>>>|data>id_no|参保人身份证|
>>>|data>actual_payment|实际缴费|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": {
>>>        "id": "4",
>>>        "order_id": "A156517968324771700",
>>>        "start": "2019-07",
>>>        "end": "2019-10",
>>>        "social_sum": "9240.00",
>>>        "accumulation_sum": "3850.00",
>>>        "service_sum": "349.30",
>>>        "additional_sum": "100.00",
>>>        "pay_back_sum": "200.00",
>>>        "cash_deduction": "5.00",
>>>        "coupon_deduction": "10.00",
>>>        "add_time": "2019-08-07 20:08:03",
>>>        "payment_time": "1970-01-01 08:00:00",
>>>        "status": "0",
>>>        "actual_payment": "0.00",
>>>        "remark": "",
>>>        "area_name": "深圳",
>>>        "name": "roger",
>>>        "id_no": "486486199712123456",
>>>        "type_name": "社保，公积金"
>>>    }
>>>}
>>>```

---

>### [获取注册验证码](http://www.jzbshebao.cn/app/user/getVerify)
>|请求参数|说明|可选值|是否必须|类型|
>|--|--|--|--|--|
>|phone_no|手机号|--|Y|int|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据array|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": []
>>>}
>>>```

---

>### [用户注册](http://www.jzbshebao.cn/app/user/register)
>|请求参数|说明|可选值|是否必须|类型|
>|--|--|--|--|--|
>|phone_no|手机号|--|Y|int|
>|verify|验证码|--|Y|int|
>|password|密码|--|Y|string|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据array|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": []
>>>}
>>>```

---

>### [用户登陆](http://www.jzbshebao.cn/app/user/login)
>|请求参数|说明|可选值|是否必须|类型|
>|--|--|--|--|--|
>|phone_no|手机号|--|Y|int|
>|password|密码|--|Y|string|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据array|
>>>|data>id|用户ID|
>>>|data>name|用户名|
>>>|data>phone_no|电话号|
>>>|data>sex|性别 1男 2女|
>>>|data>balance|用户余额|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": {
>>>        "id": "4",
>>>        "name": "",
>>>        "phone_no": "15823456789",
>>>        "sex": "1",
>>>        "balance": "0.00"
>>>    }
>>>}
>>>```

---

>### [我的参保人](http://www.jzbshebao.cn/app/user/accountList)
>|请求参数|说明|可选值|是否必须|类型|
>|--|--|--|--|--|
>|user_id|用户ID|--|Y|int|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据array|
>>>|data>id|参保人ID|
>>>|data>name|参保人名|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": [
>>>        {
>>>            "id": "2",
>>>            "name": "的撒的"
>>>        }
>>>    ]
>>>}
>>>```

---

>### [缴费明细](http://www.jzbshebao.cn/app/order/sumDetail)
>|请求参数|说明|可选值|是否必须|类型|
>|--|--|--|--|--|
>|city_id|城市ID|--|Y|int|
>|level|缴费等级|--|Y|int|
>|social|缴费基数|--|Y|int|
>|start|开始时间|--|Y|string|
>|end|截至时间|--|Y|string|
>|type|类型 1社保 2公积金|--|Y|int|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据array|
>>>|data>2019-10|参保月份|
>>>|data>2019-10>personal_subtotal|个人小计|
>>>|data>2019-10>company_subtotal|公司小计|
>>>|data>2019-10>service_name|险种|
>>>|data>2019-10>personal_price|个人缴费|
>>>|data>2019-10>company_price|公司缴费|
>>>|data>total|总计|
>>>|data>social|参保基数|
>
>>**返回示例**
>>>```
>>>{
>>>    "status": 200,
>>>    "message": "获取数据成功",
>>>    "data": {
>>>        "2019-10": {
>>>            "0": {
>>>                "personal_percentage": "0.30",
>>>                "company_percentage": "0.70",
>>>                "level_name": "深户一档",
>>>                "service_name": "失业保险",
>>>                "min_money": "0.00",
>>>                "personal_price": "6.6",
>>>                "company_price": "15.4"
>>>            },
>>>            "personal_subtotal": 316.8,
>>>            "company_subtotal": 680.305
>>>        },
>>>        "total": 997.105,
>>>        "social": 2200
>>>    }
>>>}
>>>```


