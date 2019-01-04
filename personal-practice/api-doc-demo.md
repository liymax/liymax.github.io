####接口说明：
> 登录接口

####URL：
> http://xxx.xx.com/api/login

####请求方法：
> GET,POST

#### 请求参数:

| 参数名   | 是否必填 | 类型   | 说明   |
| -------- | -------- | ------ | ------ |
| username | 是       | string | 用户名 |
| password | 是       | string | 密码   |

#### 请求示例：

```js
let username='liyang',password="tiger";
let url = `/api/login?username=${username}&password=${password}`;
axios.get(url);
//或
axios.post(url,{username,password})
```

***正确时返回 :***

```json
{
    "errcode": 0,
    "data": {
        "username": "liyang",
        "level": 0 ,
        "lastlogin": "1436864169"
    }
}
```

***错误时返回 :***

```json
{
    "errcode": 5000,
    "errmsg": "invalid appid"
}
```

#### 返回参数说明:

| 参数名    | 类型      | 说明                                 |
| --------- | --------- | ------------------------------------ |
| level     | int       | 用户组id，0：超级管理员；2：普通用户 |
| username  | string    | 用户名                               |
| lastlogin | timestamp | 上次登录的时间 戳                    |

####备注:
***错误代码说明 :***

| 错误码（errcode） | 说明        |
| ----------------- | ----------- |
| 5000              | 无效的appid |

