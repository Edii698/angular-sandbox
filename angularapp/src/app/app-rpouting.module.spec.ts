import { AppRpoutingModule } from './app-rpouting.module';

describe('AppRpoutingModule', () => {
  let appRpoutingModule: AppRpoutingModule;

  beforeEach(() => {
    appRpoutingModule = new AppRpoutingModule();
  });

  it('should create an instance', () => {
    expect(appRpoutingModule).toBeTruthy();
  });
});
