import * as React from 'react'
import { useContext } from 'react'

const contextMap = new Map()

function createPropsContext() {
  const context = React.createContext({})

  return context
}

export function PropsProvider({ name, children, ...props }) {
  let context

  if (contextMap.has(name)) {
    context = contextMap.get(name)
  } else {
    context = createPropsContext()
    contextMap.set(name, context)
  }

  return <context.Provider value={props}>{children}</context.Provider>
}

export function usePropsContext(name) {
  const context = contextMap.get(name)
  return useContext(context)
}

export function withPropsContext(name) {
  return function (Component) {
    const context = contextMap.get(name)
    return function (props) {
      return <context.Consumer>
        {(contextValues) => <Component {...props} {{ [name]: contextValues }} />}
      </context.Consumer>
    }
  }
}
