var environment = {
  env: "dev",
  showLog: true
}
function print_log(logObject) {
  if (!environment.showLog) return false;
  if (arguments.length > 1) {
    console.log(...arguments);
  } else {
    typeof logObject === 'object' ? console.dir(logObject) : console.log(logObject);
  }
}