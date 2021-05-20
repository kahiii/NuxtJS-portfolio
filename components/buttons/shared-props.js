export default {
  props: {
    url: {
      type: String,
      required: false,
      default: '#'
    },
    target: {
      type: String,
      required: false,
      default: '_self',
      validator: (value) => {
        return ['_self', '_blank'].includes(value)
      }
    },
    fileName: {
      type: String,
      required: false,
      default: ''
    }
  }
}
