function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  // console.log(timeout)

  // Closure remembers the timeout value above for future executions.
  // You can check this behavior with console log.
  return (...args) => {
    // If a valid timer was set before, clear it...
    if (timeout) { clearInterval(timeout) }

    // and set a new one.
    timeout = setTimeout(
      () => { func(...args) },
      delay
    );
  }
}

export { debounce }