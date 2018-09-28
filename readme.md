# data-model 
js 简单的数据模型

## 安装
在项目中执行 `npm install q-data-model --save` 或者 `yarn add q-data-model`

## 使用
```javascript
import {
    Data,
    Model,
    Paginate,
    List,
} from 'q-data-model';

import axios from 'axios';

// 定义 service
async function findUser(id) {
    return axios.get('/api/user/' + id);
}

async function queryUsers() {
    return axios.get('/api/user');
}

async function concernUser(id) {
    return axios.post(`/api/user/{${id}/concern`);
}


// 定义模型
class User extends Model {
    
    concern(user){
        return concernUser(user.get('id'))
    }
    
}

class UserList extends List {
    constructor(props) {
        super(props, new User());
    }
    
    anonymousCount = undefined;
    
    getAnonymousCount() {
        if(this.anonymousCount !== undefined){
            return this.anonymousCount;
        }
        
        this.anonymousCount = 0;
        
        for (let user of this.data) {
            if(!user.has('name')){
                this.anonymousCount++;
            }
        }
        
        return this.anonymousCount;
    }
    
}

/**
* userData 类似:
{
    id: 1,
    avatar: 'avatar url',
    name: 'qbhy',
    gender: 1,
    others fields
}
*/

findUser(1).then(userData=>{
    const user = new User(userData);
    
    user.get('avatar');
    user.get('name', '匿名用户');
    
    if(user.has('show')){
        user.set('show', true);
    }
});


queryUsers().then(paginate=>{
    const userPaginate = new Paginate(paginate, new UserList());
    // const userPaginate = new Paginate(paginate, new User());
    
    const userList = userPaginate.list();
    
    userList.getAnonymousCount();
    
    userPaginate.hasNextPage()
    userPaginate.currentPage()
    userPaginate.perPage()
    userPaginate.total()
    
})
```
> 更多高级使用和扩展功能可以在 [issues](https://github.com/qbhy/data-model/issues) 跟我讨论
  
> 96qbhy@gmail.com