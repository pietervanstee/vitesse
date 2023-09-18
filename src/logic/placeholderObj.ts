interface Placeholder {
  [key: string]: any
}

function newObjPlaceholder(project_labels: any) {
  const newObjPlaceholder: Placeholder = Object.keys(project_labels).reduce((acc: Placeholder, key: string) => {
    const { type, defaultValue } = project_labels[key]
    switch (type) {
      case 'string':
        acc[key] = defaultValue || ''
        break
      case 'number':
        acc[key] = defaultValue || 0
        break
      case 'boolean':
        acc[key] = defaultValue || false
        break
      case 'array':
        acc[key] = defaultValue || []
        break
      case 'object':
        acc[key] = defaultValue || {}
        break
      case 'datetime':
        acc[key] = defaultValue || new Date()
        break
      case 'enum':
        acc[key] = defaultValue || ''
        break
      default:
        acc[key] = defaultValue || null
        break
    }
    return acc
  }, {})

  return ref(newObjPlaceholder)
}

export {
  newObjPlaceholder,
}
