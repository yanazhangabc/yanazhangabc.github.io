/*
* MobLink 支持数组=>MobLink([...]) 和对象=>MobLink({...}) 两种初始化形式
* 页面上有多个元素需要跳转时使用数组方式,仅单个元素需要跳转时可以使用对象的方式进行初始化
* el: 表示网页上Element的id值,该字段为空或者不写,则表示MobLink **默认浮层** 上的打开按钮(注意:该字段支持selector方式: 1.'.class' 2.'#id1' 3.['#id1','#id2'])
* path: 对应App里需要恢复页面的路径
* default: 指定分享页默认场景参数（最多只能指定一项作为默认场景参数）
* params: 网页需要带给客户端的参数
*/
// 页面上仅单个元素需要跳转时可以使用对象方式进行初始化
MobLink({
  el: '',
  path: 'demo/a',
  default: true,
  params: {
      key1: 'value1',
      key2: 'value2',
  }
 });

 // 页面上有多个元素需要跳转时要使用数组方式进行初始化
MobLink([
  {
      el: '',
      path: 'demo/a',
      params: {
          key1: 'value1',
          key2: 'value2',
      }
  },
  {
      el: '#openAppBtn1',
      path: 'demo/b',
      params: {
          key1: 'value1',
          key2: 'value2',
      }
  },
  {
      el: '#openAppBtn2',
      path: 'demo/c',
      params: {
          key1: 'value1',
          key2: 'value2',
      }
  }
 ]);
