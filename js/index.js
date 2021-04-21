// 页面上仅单个元素需要跳转时可以使用对象方式进行初始化
MobLink({
  el: '',
  path: '/CEBWKBaseViewController/a',
moblink_source_ios: '607e2b1363c0332d6516cd87',
moblink_source_android: '60389adeb0a3571eaeceea81',
  default: true,
  params: {
      key1: 'https://yanazhangabc.github.io',
      key2: 'value2',
  }
 });

 // 页面上有多个元素需要跳转时要使用数组方式进行初始化
MobLink([
  {
      el: '',
   path: '/MobLinkViewController',
moblink_source_ios: '607e2b1363c0332d6516cd87',
moblink_source_android: '60389adeb0a3571eaeceea81',
  default: true,
  params: {
      key1: 'https://yanazhangabc.github.io',
      key2: 'value2',
  }
  },
  {
      el: '#openAppBtn1',
      path: '/MobLinkViewController',
moblink_source_ios: '607e2b1363c0332d6516cd87',
moblink_source_android: '60389adeb0a3571eaeceea81',
      params: {
          key1: 'value1',
          key2: 'value2',
      }
  },
  {
      el: '#openAppBtn2',
       path: '/MobLinkViewController',
moblink_source_ios: '6037a9a7b0a3571eaeceea7e',
moblink_source_android: '60389adeb0a3571eaeceea81',
      params: {
          key1: 'value1',
          key2: 'value2',
      }
  }
 ]);
