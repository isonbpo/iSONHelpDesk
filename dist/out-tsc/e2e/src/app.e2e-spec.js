import { AppPage } from './app.po';
describe('workspace-project App', () => {
    let page;
    beforeEach(() => {
        page = new AppPage();
    });
    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to star-admin-angular!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map