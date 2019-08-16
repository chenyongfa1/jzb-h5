# APP接口文档

## 1.说明

**签名sign：** 将所有的请求参数按照字典排序，拼上十位数时间戳time，拼上盐值salt，然后MD5加密生成

**盐值salt：** 14e1b600b1fd579f47433b88e8d85291

**请求方式：** 如果不做特殊说明，一般为POST

**请求必要参数：** 签名sign，十位数时间戳time

---

## 2.接口

>### 1.[APP首页/获取banner列表](http://localexchange/app/index/getBannerList)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|--|--|--|--|
>
>>***返回数据说明***
>>>|返回数据|说明|
>>>|--|--|
>>>|status|接口返回状态|
>>>|message|接口返回信息|
>>>|data|接口数据 head：头部 body：中间  foot：尾部|
>>>|id |banner id|
>>>|title| banner标题|
>>>|banner_url|banner链接|
>>>|jump_url|banner跳转链接|
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

>### 2.[APP首页/政策解读+桔子讲堂](http://localexchange/app/index/getPolicy)
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
>>>|policy|政策解读array|
>>>|id |分类id|
>>>|name| 分类名|
>>>|img_url|分类图标链接|
>>>|article_list|桔子讲堂array|
>>>|id|文章ID|
>>>|title|文章标题|
>>>|abstract|描述|
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

>### 3.[获取工作类型](http://localexchange/app/common/getWork)
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
>>>|id |工作id|
>>>|name| 工作名|
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

---

>### 4.[获取学历](http://localexchange/app/common/getStudy)
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
>>>|id |学历id|
>>>|name| 学历名|
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

>### 5.[获取名族](http://localexchange/app/common/getNation)
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
>>>|id |名族id|
>>>|name| 名族名|
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

>### 6.[新增参保人](http://localexchange/app/user/addUser)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|id_front|身份证正面|--|Y|
>|id_back|身份证背面|--|Y|
>|name|姓名|--|Y|
>|sex|性别|1男 2女|Y|
>|phone_no|手机号|--|Y|
>|id_no|身份证|--|Y|
>|id_type|户口性质|1农 2非农|Y|
>|id_info|户口信息|--|Y|
>|nation|名族|--|Y|
>|marry|婚姻状况|--|Y|
>|work_type|工作类型|--|Y|
>|emergency_contact|紧急联系人|--|Y|
>|emergency_phone|紧急联系人|--|Y|
>|social_no|社保号|--|N|
>|accumulation_no|公积金账号|--|N|
>|education|学历|--|N|
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

>### 7.[订单提交](http://localexchange/app/order/placeOrder)
>|请求参数|说明|可选值|是否必须|
>|--|--|--|--|
>|user_id|用户ID|--|Y|
>|city_id|城市ID|--|Y|
>|level|等级|--|N|
>|type|类型|1社保 2公积金|Y|
>|normal_amount|正常缴费月数|--|Y|
>|addtitional_amount|候补月数|--|Y|
>|start|缴费开始月|格式2019-08|Y|
>|end|缴费结束月|格式2019-09|Y|
>|charge|缴费金额|--|Y|
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