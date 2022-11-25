import {default as wayComponents} from './components';
import version from './version';
import * as elementPlusComponents from './element';

// 样式
import './style/element.scss'

const components: any = [];
Object.entries(wayComponents).forEach((com: any) => {
    const [name, component] = com;
    component.install = function (Vue: any) {
        Vue.component(name, component);
    };
    components.push(component);
});

// element-plus 组件注册
Object.entries(elementPlusComponents).forEach((com: any) => {
  const [name, component] = com;
  component.install = function (Vue: any) {
      Vue.component(name, component);
  };
  components.push(component);
});

const install = function (Vue: any) {
  components.map((component: any) => Vue.use(component));
}
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}


export { default as version } from './version';

export * from './components'
export * from './version'
export default {
    install,
    version
}
