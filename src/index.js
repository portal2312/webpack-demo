function getComponent() {
  /**
   * 해당 js 파일을 HTML 에서 사용시
   * 필요한 모듈을 담고 있는 chunk file 을 동적으로 HTML 에 선언한다.
   */
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

  }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
});
