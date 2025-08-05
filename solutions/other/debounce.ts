/*
Create a function named 'debounce', 
it will execute a function after a specified 
delay without being called again during that delay.
*/

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// example usage
function logMessage(message: string) {
  console.log(`Log: ${message}`);
}
const debouncedLog = debounce(logMessage, 250);
// message logged after 250ms delay
debouncedLog("This is my message");
