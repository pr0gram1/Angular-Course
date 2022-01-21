// here we dont need @Injectable becase this class is service that is injecting somewhere else but not injecting smth in service
// but in newer angular version - adding inject is needed


export class LoggingService{
  logStatusChange(status: string)  {
    console.log('A server status changed, new status: ' + status);

  }

}
