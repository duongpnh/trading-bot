import { inject } from 'inversify-hooks';
import type { ILogService } from '~/app/shared';
import { IExampleAlertService } from './iexample-alert.service';

export class ExampleAlertService implements IExampleAlertService {
  @inject() private logService: ILogService;

  public get(): void {
    this.logService.get();
  }
}
