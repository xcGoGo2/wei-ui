import { Component } from "vue";

const waycomponents: {
    [propName: string]: Component;
} = {};

const components = import.meta.glob("./**/**", { eager: true });

Object.entries(components).forEach((com: any) => {
    const [name, component] = com;
    if (typeof name === "string" && name.includes("index.ts")) {
        Object.entries(component).forEach((element: any) => {
            const [_key, _com] = element;
            waycomponents[_key] = _com;
        });
    }
});

export default waycomponents;
