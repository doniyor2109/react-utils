import * as React from 'react'

export function createHocConsumer(context) {
  return function (Component) {
    return function (props) {
      return <context.Consumer>
        {(contextValues) => <Component {...props} {...contextValues} />}
      </context.Consumer>
    }
  }
}
