import type { ILogService } from './ilog.service';

export class LogService implements ILogService {
  public get(): void {
    console.log('hello');
  }
}
