const time = Date.now(); // For better managing start-time / lags
import console from 'consolemd';

import app from './instance';

async function start() {
  const port = process.env.PORT || 3000;
  await app().listen(port, '0.0.0.0');
  console.log(
    `#green([*Server*]: started successfully at *localhost:${port}* in *${Date.now() -
      time}ms*)`
  );
}

if (typeof require !== 'undefined' && require.main === module) {
  start();
}

export default app;
