import {
    request
  } from './request'
  
  export function getDetail(id) {
    return request({
      url: '/',
      params: {
          id
      }
    }).then((res) => {
        return [
            {
                id:1, 
                detail: {
                    id: 1,
                    name: 'aaaa',
                    price: 666,
                    meme : 'haha1111',
                    topImages: [
                        'https://rpic.douyucdn.cn/asrpic/210831/288016_1617.png/dy1',
                        'https://rpic.douyucdn.cn/asrpic/210831/1126960_1617.png/dy1',
                        'https://rpic.douyucdn.cn/asrpic/210831/288016_1617.png/dy1',
                    ]
                },
            },
            {
                id:2, 
                detail: {
                    id: 2,
                    name: 'bbbb',
                    price: 888,
                    meme : 'haha2222',
                    topImages: [
                        'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1',
                        'https://rpic.douyucdn.cn/asrpic/210831/1126960_1617.png/dy1',
                        'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1',
                    ]
                },
            }
        ]
    })
}