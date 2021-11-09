import type { PropType } from 'vue'

const sizeValidator = (size) => {
  return ['large', 'normal', 'small'].includes(size);
}

export const props = {
  modelValue: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<'large' | 'normal' | 'small'>,
    default: 'normal',
    validator: sizeValidator,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  checkedText: {
    type: String
  },
  uncheckedText: {
    type: String
  },
  loading: {
    type: Boolean,
    default: false
  }
}