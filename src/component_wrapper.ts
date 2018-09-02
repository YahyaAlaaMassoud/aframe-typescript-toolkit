import EntityBuilder from "./entity_builder"

export default abstract class ComponentWrapper<SCHEMA = {}> 
    implements AFrame.Component<SCHEMA> {

    data: SCHEMA
    name: string
    el: AFrame.Entity
    id: string
    schema: any
    system: any

    constructor(name: string, schema?: {}) {
        this.name = name
        this.schema = schema
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // default aframe core function implementations

    init() {}
    pause() {}
    play() {}
    remove() {}
    update(oldData: {}) {}
    extendSchema(update: {}) {}
    flushToDOM() {}

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // special wrapper functions implementations

    merge() {
        const funcs = ComponentWrapper.getInstanceMethodNames(this, Object.prototype)
        funcs.forEach( k => this[k] = this[k])
    }

    destroy() {
        const parent = this.el.parentElement
        if (!!parent) {
            parent.removeChild(this.el)
        }
    }

    register() {
        this.merge()
        AFRAME.registerComponent(this.name, this)
    }

    buildEntity(type: string): EntityBuilder {
        return new EntityBuilder(type)
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // helpers

    private static hasMethod = (obj: {}, name: string) => {
        const desc = Object.getOwnPropertyDescriptor (obj, name)
        return !!desc && typeof desc.value === "function"
    }

    private static getInstanceMethodNames = (obj: {}, stop: {}) => {
        const array: string[] = []
        let proto = Object.getPrototypeOf (obj)
        while (proto && proto !== stop) {
          Object.getOwnPropertyNames (proto)
            .forEach (name => {
              if (name !== "constructor") {
                if (ComponentWrapper.hasMethod (proto, name)) {
                  array.push (name)
                }
              }
            })
          proto = Object.getPrototypeOf(proto)
        }
        return array
    }
}