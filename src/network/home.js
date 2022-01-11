import {
  request
} from './request'

export function getHomeGoods(type, page) {
  return request({
    url: '/'
  }).then(() => {
    if (type === 'pop') {
		return [{
			link: '#',
			title: 'bbbb',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/1126960_1617.png/dy1'
		  },
		  {
			link: '#',
			title: 'cccc',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/288016_1617.png/dy1'
		  },
		  {
			link: '#',
			title: 'aaaa',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1'
		  },
		  {
			link: '#',
			title: 'cccc',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/288016_1617.png/dy1'
		  },
		  {
			link: '#',
			title: 'aaaa',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1'
		  },
		  {
			link: '#',
			title: 'cccc',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/288016_1617.png/dy1'
		  },
		  {
			link: '#',
			title: 'aaaa',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1'
		  },
		  {
			link: '#',
			title: 'aaaa',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1'
		  },
		]
	}else if(type === 'new'){
		return [
		  {
			link: '#',
			title: 'cccc',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/288016_1617.png/dy1'
		  },
		  {
			link: '#',
			title: 'aaaa',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1'
		  },
		  {
			link: '#',
			title: 'aaaa',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1'
		  },
		  {
			link: '#',
			title: 'aaaa',
			img: 'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1'
		  },
		]
	}else{
		return [
			{
			  link: '#',
			  title: 'cccc',
			  img: 'https://rpic.douyucdn.cn/asrpic/210831/288016_1617.png/dy1'
			},
			{
			  link: '#',
			  title: 'aaaa',
			  img: 'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1'
			}
		  ]
	}
  })
}

export function getHomeMultiData() {
  return request({
    url: '/'
  }).then(() => {
    return {
      banners: [{
          link: '#',
          img: 'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1'
        },
        {
          link: '#',
          img: 'https://rpic.douyucdn.cn/asrpic/210831/1126960_1617.png/dy1'
        },
        {
          link: '#',
          img: 'https://rpic.douyucdn.cn/asrpic/210831/288016_1617.png/dy1'
        },
      ],

      recommends: [{
          link: '#',
          title: 'aaaa',
          img: 'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1'
        },
        {
          link: '#',
          title: 'bbbb',
          img: 'https://rpic.douyucdn.cn/asrpic/210831/1126960_1617.png/dy1'
        },
        {
          link: '#',
          title: 'cccc',
          img: 'https://rpic.douyucdn.cn/asrpic/210831/288016_1617.png/dy1'
        },
        {
          link: '#',
          title: 'aaaa',
          img: 'https://rpic.douyucdn.cn/asrpic/210831/757122_1617.png/dy1'
        }
      ]
    }
  })
}
