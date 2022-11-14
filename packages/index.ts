import * as weiComponents from './components';
import version from './version'

const components: any = [];
Object.entries(weiComponents).forEach(com => {
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