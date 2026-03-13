let waitTimeout: ReturnType<typeof setTimeout> | null = null

/**
 * Espera a que se termina de escribir, para hacer una petición
 * @param callback
 * @param delay
 */
export function endWaitTyping(callback: () => void, delay = 1000) {
  if (waitTimeout) clearTimeout(waitTimeout)

  waitTimeout = setTimeout(async () => {
    await callback()
  }, delay)
}
