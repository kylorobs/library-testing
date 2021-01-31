import { KclsuButton } from './kclsu-button';

it('should have not class "small" by default', () => {
    const button = new KclsuButton();
    expect(button.small).toBe(undefined);
})