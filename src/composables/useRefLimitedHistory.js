import { watchEffect, toValue } from 'vue'
import { useRefHistory } from './useRefHistory'

export function useRefLimitedHistory(source, capacity) {
  const { history, undo } = useRefHistory(source)
  watchEffect(() => {
    if (history.value.length > toValue(capacity)) {
      history.value.shift()
    }
  })
  return {
    history,
    undo,
  }
}
