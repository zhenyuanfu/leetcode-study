/**
 * vue 双向数据绑定的实现基于数据劫持和发布订阅模式
 */

class MyVue {
    constructor(options) {
        this.$el = document.querySelector(options.el);
        this.$data = options.data;
        this._directives = {};
        this._observe(this.$data, this._directives);
        this._compile(this.$el);
    }
    _observe(data, _directives) {
        for (let key in data) {
            if (!data.hasOwnProperty(key)) continue;
            _directives[key] = { watchers: [] };
            let val = data[key];
            if (typeof val === "object") {
                this._observe(val, _directives[key]);
            }  
            let _dir = _directives[key].watchers;
            Object.defineProperty(data, key, {
                enumerable: true,
                configurable: true,
                get() {
                    return val;
                },
                set(newVal) {
                    if (val !== newVal) {
                        val = newVal;
                        _dir.forEach(watcher => {
                            watcher._update();
                        })
                    }
                }
            })
        }
    }
    _compile(el) {
        const nodes = el.children;
        for (let i = 0; i < nodes.length; i++) {
            let node = nodes[i];
            if (node.children.length > 0) {
                this._compile(node);
            }
            if (node.hasAttribute("v-text")) {
                let attrVal = node.getAttribute("v-text");
                getDeepTarget(this._directives, attrVal).watchers.push(new Watcher("text", node, "textContent", this, attrVal));
                // this._directives[attrVal].push(new Watcher("text", node, "textContent", this, attrVal));
            }
            if (node.hasAttribute("v-model") && (node.tagName === "INPUT" || node.tagName === "TEXTAREA")) {
                let attrVal = node.getAttribute("v-model");
                getDeepTarget(this._directives, attrVal).watchers.push(new Watcher("model", node, "value", this, attrVal));
                // this._directives[attrVal].push(new Watcher("model", node, "value", this, attrVal));
                let _this = this;
                node.addEventListener("input", function() {
                    // _this.$data[attrVal] = node.value;
                    setDeepTarget(_this.$data, attrVal, node.value);
                });
            }
        }
    }
}

function getDeepTarget(obj, prop) {
    if (!prop) return obj;
    let props = prop.split(".");
    let target = obj, i = 0;
    while (props[i] && target) {
        target = target[props[i]];
        i++;
    }
    return target;
}
function setDeepTarget(obj, prop, value) {
    if (!prop) return false;
    let props = prop.split(".");
    let lastProp = props.pop();
    let target = obj, i = 0;
    while (props[i] && target) {
        target = target[props[i]];
        i++;
    }
    if (target) {
        target[lastProp] = value;
    }
}

// 订阅者：负责更新视图。每个指令都有一个对应的watcher来更新视图
class Watcher {
    constructor(directName, node, attr, vm, dataKey) {
        this.directName = directName;
        this.node = node;
        this.attr = attr;
        this.vm = vm;
        this.dataKey = dataKey;
        this._update();
    }
    _update() {
        // this.node[this.attr] = this.vm.$data[this.dataKey];
        this.node[this.attr] = getDeepTarget(this.vm.$data, this.dataKey);
    }
}

const app = new MyVue({
    el: "#app",
    data: {
        form: {
            myText: "Hello world!"
        }
    }
});
